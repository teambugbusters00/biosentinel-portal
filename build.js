const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'stitch_biosentinel_environmental_intelligence_portal (1)', 'stitch_biosentinel_environmental_intelligence_portal');
const outDir = path.join(__dirname, 'public');

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// Module configuration
const modules = [
  {
    id: 'basin-health-overview',
    srcFolder: 'biosentinel_basin_health_intelligence',
    outFile: 'overview.html',
    title: 'BioSentinel | Basin Health Intelligence & National River Telemetry'
  },
  {
    id: 'live-gis-telemetry',
    srcFolder: 'biosentinel_live_gis_sensor_grid',
    outFile: 'gis.html',
    title: 'BioSentinel | Live GIS & Telemetry Sensor Grid'
  },
  {
    id: 'ai-bio-alerts',
    srcFolder: 'biosentinel_ai_bio_alerts_intelligence_1',
    outFile: 'alerts.html',
    title: 'BioSentinel | AI Bio-Alerts & Autonomous Incident Triage'
  },
  {
    id: 'species-fauna-register',
    srcFolder: 'biosentinel_biodiversity_species_register',
    outFile: 'fauna.html',
    title: 'BioSentinel | Biodiversity & Species Fauna Register'
  },
  {
    id: 'citizen-sentinel-portal',
    srcFolder: 'biosentinel_citizen_sentinel_field_network',
    outFile: 'sentinel.html',
    title: 'BioSentinel | Citizen Sentinel Field Network (Ganga Prahari)'
  }
];

// Navigation structure
const navConfig = [
  { path: 'basin-health-overview', href: 'overview.html', icon: 'dashboard', label: 'Overview' },
  { path: 'live-gis-telemetry', href: 'gis.html', icon: 'explore', label: 'Live GIS' },
  { path: 'ai-bio-alerts', href: 'alerts.html', icon: 'crisis_alert', label: 'Bio-Alerts' },
  { path: 'species-fauna-register', href: 'fauna.html', icon: 'flutter', label: 'Fauna' },
  { path: 'citizen-sentinel-portal', href: 'sentinel.html', icon: 'shield_person', label: 'Sentinel' }
];

function generateNav(activePath) {
  const linksHtml = navConfig.map(item => {
    const isActive = item.path === activePath;
    const activeClasses = isActive ? 'text-primary font-semibold' : 'text-on-surface-variant';
    const ariaAttr = isActive ? ' aria-current="page"' : '';
    return `<a${ariaAttr} class="flex flex-col items-center justify-center gap-1 min-h-[48px] min-w-[48px] px-1 transition-colors ${activeClasses}" data-path="${item.path}" href="${item.href}">
      <span class="material-symbols-outlined text-[22px]">${item.icon}</span>
      <span class="font-label-caps text-label-caps text-center tracking-tight">${item.label}</span>
    </a>`;
  }).join('');

  return `<nav class="fixed bottom-0 inset-x-0 z-50 pb-safe bg-surface-container-lowest/90 backdrop-blur-xl shadow-[0_-4px_24px_rgba(1,15,31,0.7)]" data-active-classes="text-primary font-semibold">
  <div class="flex justify-around items-center h-dock-height px-space-xs">
    ${linksHtml}
  </div>
</nav>`;
}

// Copy emblem.svg if not present
const emblemSrc = path.join(__dirname, 'public', 'emblem.svg');
if (!fs.existsSync(emblemSrc)) {
  const emblemCodePath = path.join(srcDir, 'biosentinel_emblem', 'code.html');
  if (fs.existsSync(emblemCodePath)) {
    fs.copyFileSync(emblemCodePath, emblemSrc);
  }
}

// Process each module
for (const mod of modules) {
  const sourceFilePath = path.join(srcDir, mod.srcFolder, 'code.html');
  if (!fs.existsSync(sourceFilePath)) {
    console.warn(`Warning: Source file not found: ${sourceFilePath}`);
    continue;
  }

  let html = fs.readFileSync(sourceFilePath, 'utf8');

  // Replace title or add title in head
  if (html.includes('<title>')) {
    html = html.replace(/<title>.*?<\/title>/, `<title>${mod.title}</title>`);
  } else {
    html = html.replace('<head>', `<head><title>${mod.title}</title>`);
  }

  // Replace remote emblem with local SVG emblem
  html = html.replace(/https:\/\/lh3\.googleusercontent\.com\/aida-embedded\/[a-zA-Z0-9_\-=]+/g, 'emblem.svg');

  // Replace the entire <nav ...> ... </nav> block with our updated navigation
  html = html.replace(/<nav[\s\S]*?<\/nav>/, generateNav(mod.id));

  // Write destination
  const destPath = path.join(outDir, mod.outFile);
  fs.writeFileSync(destPath, html, 'utf8');
  console.log(`Generated: ${destPath}`);

  // If this is the overview, also write index.html
  if (mod.outFile === 'overview.html') {
    const indexPath = path.join(outDir, 'index.html');
    fs.writeFileSync(indexPath, html, 'utf8');
    console.log(`Generated: ${indexPath} (as default entry)`);
  }
}

console.log('Build complete! All 5 BioSentinel modules processed into /public.');
