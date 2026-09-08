const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'stitch_biosentinel_environmental_intelligence_portal (1)', 'stitch_biosentinel_environmental_intelligence_portal');
const outDir = path.join(__dirname, 'public');

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// Module configuration for all 5 government environmental intelligence modules
const modules = [
  {
    id: 'basin-health-overview',
    srcFolder: 'biosentinel_basin_health_intelligence',
    outFile: 'overview.html',
    title: 'NMCG | Basin Health Intelligence & National River Telemetry - Namami Gange',
    navLabel: 'Basin Overview',
    icon: 'water_drop',
    badge: 'Real-time BHI'
  },
  {
    id: 'live-gis-telemetry',
    srcFolder: 'biosentinel_live_gis_sensor_grid',
    outFile: 'gis.html',
    title: 'NMCG | Live GIS & Telemetry Sensor Grid - Namami Gange',
    navLabel: 'Live GIS Grid',
    icon: 'explore',
    badge: 'GSAT Spectral'
  },
  {
    id: 'ai-bio-alerts',
    srcFolder: 'biosentinel_ai_bio_alerts_intelligence_1',
    outFile: 'alerts.html',
    title: 'NMCG | AI Bio-Alerts & Autonomous Incident Triage - Namami Gange',
    navLabel: 'AI Bio-Alerts',
    icon: 'crisis_alert',
    badge: 'Neural Triage'
  },
  {
    id: 'species-fauna-register',
    srcFolder: 'biosentinel_biodiversity_species_register',
    outFile: 'fauna.html',
    title: 'NMCG | Biodiversity & Species Fauna Register - Namami Gange',
    navLabel: 'Fauna Register',
    icon: 'flutter',
    badge: 'WII Database'
  },
  {
    id: 'citizen-sentinel-portal',
    srcFolder: 'biosentinel_citizen_sentinel_field_network',
    outFile: 'sentinel.html',
    title: 'NMCG | Citizen Sentinel Field Network (Ganga Prahari) - Namami Gange',
    navLabel: 'Ganga Prahari',
    icon: 'shield_person',
    badge: 'Field Network'
  }
];

// Generate the Top Official Government Header & Navigation
function generateGovHeader(activeId) {
  const currentDate = new Date().toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  }).replace(/ /g, '/');

  const navLinksHtml = modules.map(mod => {
    const isActive = mod.id === activeId;
    const activeClass = isActive ? ' active' : '';
    const ariaCurrent = isActive ? ' aria-current="page"' : '';
    return `<a href="${mod.outFile}" class="gov-nav-item${activeClass}"${ariaCurrent}>
      <span class="material-symbols-outlined text-[18px]">${mod.icon}</span>
      <span>${mod.navLabel}</span>
    </a>`;
  }).join('');

  return `
<!-- ================= GOVERNMENT OF INDIA / NMCG OFFICIAL HEADER ================= -->
<header class="w-full bg-white shadow-sm">
  <!-- 1. National Tricolor Strip -->
  <div class="national-tricolor-ribbon"></div>

  <!-- 2. Accessibility & Citizen Utility Bar (As on nmcg.nic.in) -->
  <div class="gov-top-utility-bar">
    <div class="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
      <!-- Left: Date & Social Connections -->
      <div class="flex items-center gap-3">
        <span class="inline-flex items-center gap-1 font-semibold text-slate-700">
          <span class="material-symbols-outlined text-[15px] text-[#026725]">today</span>
          <span>${currentDate}</span>
        </span>
        <span class="text-slate-300">|</span>
        <div class="hidden sm:inline-flex items-center gap-2">
          <a href="https://www.facebook.com/cleanganganmcg/" target="_blank" rel="noopener noreferrer" title="Follow on Facebook" class="font-bold text-[#006699] hover:underline">FB</a>
          <span class="text-slate-300">·</span>
          <a href="https://twitter.com/cleanganganmcg" target="_blank" rel="noopener noreferrer" title="Follow on Twitter / X" class="font-bold text-[#006699] hover:underline">TW</a>
          <span class="text-slate-300">·</span>
          <a href="https://www.youtube.com/channel/UCdslrfFfeUDBQHNPDK6q8YQ" target="_blank" rel="noopener noreferrer" title="Subscribe on YouTube" class="font-bold text-[#006699] hover:underline">YT</a>
        </div>
        <span class="hidden md:inline text-slate-300">|</span>
        <a href="https://www.india.gov.in/" target="_blank" rel="noopener noreferrer" class="hidden md:inline font-bold text-[#026725] hover:underline">
          भारत सरकार | Government of India
        </a>
      </div>

      <!-- Right: Accessibility Controls & Key Portals -->
      <div class="flex items-center gap-2">
        <div class="flex items-center gap-1 border-r border-slate-300 pr-2">
          <button onclick="decreaseFontSize()" class="gov-font-btn" title="Decrease Font Size" aria-label="Decrease Font Size">A-</button>
          <button onclick="resetFontSize()" class="gov-font-btn" title="Standard Font Size" aria-label="Standard Font Size">A</button>
          <button onclick="increaseFontSize()" class="gov-font-btn" title="Increase Font Size" aria-label="Increase Font Size">A+</button>
        </div>
        <div class="flex items-center gap-1 border-r border-slate-300 pr-2">
          <button onclick="toggleGovContrast(false)" class="gov-contrast-btn btn-light" title="Standard View">A</button>
          <button onclick="toggleGovContrast(true)" class="gov-contrast-btn btn-dark" title="High Contrast View">A</button>
        </div>
        <a href="#main-content" class="hidden sm:inline font-semibold text-slate-700 hover:text-[#026725] px-1">Skip to Main Content</a>
        <span class="text-slate-300 hidden sm:inline">|</span>
        <a href="sentinel.html" class="font-semibold text-slate-700 hover:text-[#026725]">Grievance</a>
        <span class="text-slate-300">|</span>
        <a href="https://nmcg.nic.in/rtidetails.aspx" target="_blank" class="font-semibold text-slate-700 hover:text-[#026725]">RTI</a>
        <span class="text-slate-300">|</span>
        <span class="font-bold text-[#026725] cursor-pointer hover:underline" onclick="alert('Hindi language locale enabled across all telemetry grids.')">हिन्दी</span>
      </div>
    </div>
  </div>

  <!-- 3. Main Government Emblem & Ministry Identity Header -->
  <div class="gov-identity-header">
    <div class="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
      <!-- Left: Ashoka Lion Emblem + Bilingual Ministry Titles -->
      <div class="flex items-center gap-3 sm:gap-4 text-left">
        <a href="overview.html" class="shrink-0" title="National Portal Home">
          <img src="national_emblem.svg" alt="State Emblem of India" class="h-16 sm:h-20 w-auto object-contain drop-shadow-sm" />
        </a>
        <div class="flex flex-col justify-center">
          <span class="text-xs sm:text-sm font-bold text-slate-800 tracking-wide font-serif">राष्ट्रीय स्वच्छ गंगा मिशन</span>
          <h1 class="text-lg sm:text-xl md:text-2xl font-black text-[#006699] tracking-tight uppercase leading-tight font-serif">
            National Mission for Clean Ganga (NMCG)
          </h1>
          <p class="text-[11px] sm:text-xs text-slate-700 font-medium leading-tight">
            जल संसाधन, नदी विकास और गंगा संरक्षण विभाग • जल शक्ति मंत्रालय, भारत सरकार
          </p>
          <p class="text-[10px] sm:text-[11px] text-slate-500 font-normal">
            Department of Water Resources, River Development &amp; Ganga Rejuvenation, Ministry of Jal Shakti, Govt. of India
          </p>
        </div>
      </div>

      <!-- Right: Namami Gange Vector Brand + Telemetry Grid Badge -->
      <div class="flex items-center gap-3 sm:gap-4 shrink-0">
        <img src="namami_gange_logo.svg" alt="Namami Gange Official Identity" class="h-12 sm:h-14 w-auto object-contain" />
        <div class="hidden lg:flex flex-col text-right pl-3 border-l-2 border-emerald-600">
          <span class="text-[10px] font-mono font-bold tracking-widest text-emerald-800 uppercase">AI Bio-Spatial Grid</span>
          <span class="text-xs font-bold text-[#006699]">CPCB-WII Protocol SEC-4</span>
          <span class="inline-flex items-center justify-end gap-1.5 text-[11px] text-emerald-700 font-semibold mt-0.5">
            <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            482 BUOYS ONLINE
          </span>
        </div>
      </div>
    </div>
  </div>

  <!-- 4. Primary Government Navigation Bar -->
  <nav class="gov-main-navbar" aria-label="Main Government Navigation">
    <div class="max-w-7xl mx-auto flex items-center justify-between overflow-x-auto no-scrollbar">
      <div class="flex items-center">
        ${navLinksHtml}
      </div>
      <div class="hidden md:flex items-center pr-4 gap-2">
        <span class="text-[11px] font-bold bg-[#014d1c] px-3 py-1 rounded text-emerald-100 border border-emerald-500/30 uppercase tracking-wider">
          Govt. of India Project
        </span>
      </div>
    </div>
  </nav>

  <!-- 5. Marquee / Official Notification Ticker (As on nmcg.nic.in) -->
  <div class="gov-ticker-container">
    <div class="gov-ticker-label">
      <span class="material-symbols-outlined text-[15px]">campaign</span>
      <span>NMCG BULLETIN</span>
    </div>
    <div class="gov-ticker-content">
      <marquee behavior="scroll" direction="left" scrollamount="6" onmouseover="this.stop();" onmouseout="this.start();">
        ★ Autonomous Telemetry Buoy Node #482 synchronized across Rishikesh, Kanpur, Varanasi, Patna and Gangasagar stretches • Nirmalta Index: 78.4% (Class B+ Bathing Standards) • Real-time continuous bio-monitoring in collaboration with Central Pollution Control Board (CPCB) and Wildlife Institute of India (WII) • Ganga Prahari Field Volunteer Hotline active.
      </marquee>
    </div>
  </div>
</header>
<!-- ================= END GOVERNMENT HEADER ================= -->
`;
}

// Generate the Official Multi-Column Government Footer
function generateGovFooter() {
  return `
<!-- ================= GOVERNMENT OF INDIA / NMCG OFFICIAL FOOTER ================= -->
<footer class="gov-portal-footer">
  <div class="gov-footer-top">
    <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
      <!-- Column 1: Ministry Details -->
      <div class="gov-footer-col">
        <div class="flex items-center gap-2 mb-3">
          <img src="national_emblem.svg" class="h-10 w-auto filter brightness-0 invert" alt="National Emblem of India"/>
          <span class="font-bold text-white text-sm">राष्ट्रीय स्वच्छ गंगा मिशन</span>
        </div>
        <p class="text-xs text-slate-300 leading-relaxed mb-3">
          <b>National Mission for Clean Ganga (NMCG)</b><br/>
          Department of Water Resources, River Development &amp; Ganga Rejuvenation<br/>
          Ministry of Jal Shakti, Government of India
        </p>
        <p class="text-[11px] text-slate-400">
          1st Floor, Major Dhyan Chand National Stadium, India Gate, New Delhi - 110002
        </p>
      </div>

      <!-- Column 2: Key Stakeholders & Wings -->
      <div class="gov-footer-col">
        <h4>Key Stakeholders &amp; Agencies</h4>
        <ul>
          <li><a href="https://nmcg.nic.in/" target="_blank" rel="noopener noreferrer">Namami Gange Official Portal</a></li>
          <li><a href="https://cpcb.nic.in/" target="_blank" rel="noopener noreferrer">Central Pollution Control Board (CPCB)</a></li>
          <li><a href="https://wii.gov.in/" target="_blank" rel="noopener noreferrer">Wildlife Institute of India (WII)</a></li>
          <li><a href="http://cwc.gov.in/" target="_blank" rel="noopener noreferrer">Central Water Commission (CWC)</a></li>
          <li><a href="https://greentribunal.gov.in/" target="_blank" rel="noopener noreferrer">National Green Tribunal (NGT)</a></li>
        </ul>
      </div>

      <!-- Column 3: Telemetry Grid Modules -->
      <div class="gov-footer-col">
        <h4>BioSentinel Grid Modules</h4>
        <ul>
          <li><a href="overview.html">Basin Health Intelligence (BHI)</a></li>
          <li><a href="gis.html">Live GIS &amp; Sensor Grid</a></li>
          <li><a href="alerts.html">AI Bio-Alerts &amp; Incident Triage</a></li>
          <li><a href="fauna.html">Fauna &amp; Species Register</a></li>
          <li><a href="sentinel.html">Citizen Sentinel (Ganga Prahari)</a></li>
        </ul>
      </div>

      <!-- Column 4: Portal Policies & Compliance -->
      <div class="gov-footer-col">
        <h4>Portal Policies &amp; Compliance</h4>
        <ul>
          <li><a href="https://nmcg.nic.in/rtidetails.aspx" target="_blank" rel="noopener noreferrer">Right to Information (RTI)</a></li>
          <li><a href="https://nmcg.nic.in/ngtgrievance.aspx" target="_blank" rel="noopener noreferrer">NGT Grievance Redressal</a></li>
          <li><a href="#">Website Policies &amp; Disclaimers</a></li>
          <li><a href="#">Hyperlinking Policy &amp; Copyright</a></li>
          <li><a href="#">STQC Guidelines Compliance</a></li>
        </ul>
      </div>
    </div>
  </div>

  <!-- Bottom Copyright & Hosting Bar -->
  <div class="gov-footer-bottom-bar">
    <div class="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left px-4">
      <div>
        Website Content Managed by <b>National Mission for Clean Ganga (NMCG), Ministry of Jal Shakti, Government of India</b>.
      </div>
      <div class="text-[11px] text-emerald-100">
        Hosted by <b>National Informatics Centre (NIC)</b> • BioSentinel Grid SEC-4
      </div>
    </div>
  </div>
</footer>

<!-- Government Accessibility Scripts -->
<script>
function increaseFontSize() {
  document.querySelectorAll('p, span, div, a, td, th, h1, h2, h3').forEach(function(el) {
    var size = parseFloat(window.getComputedStyle(el).fontSize);
    if (size && size < 28) el.style.fontSize = (size + 1) + 'px';
  });
}
function decreaseFontSize() {
  document.querySelectorAll('p, span, div, a, td, th, h1, h2, h3').forEach(function(el) {
    var size = parseFloat(window.getComputedStyle(el).fontSize);
    if (size && size > 11) el.style.fontSize = (size - 1) + 'px';
  });
}
function resetFontSize() {
  document.querySelectorAll('p, span, div, a, td, th, h1, h2, h3').forEach(function(el) {
    el.style.fontSize = '';
  });
}
function toggleGovContrast(isHighContrast) {
  if (isHighContrast) {
    document.body.classList.add('high-contrast-mode');
  } else {
    document.body.classList.remove('high-contrast-mode');
  }
}
</script>
<!-- ================= END GOVERNMENT FOOTER ================= -->
`;
}

// Generate Responsive Mobile Navigation Dock
function generateMobileNav(activeId) {
  const linksHtml = modules.map(mod => {
    const isActive = mod.id === activeId;
    const activeClass = isActive ? 'text-[#026725] font-bold border-t-2 border-[#026725]' : 'text-slate-600';
    const ariaAttr = isActive ? ' aria-current="page"' : '';
    return `<a${ariaAttr} class="flex flex-col items-center justify-center gap-0.5 min-h-[52px] min-w-[52px] px-1 transition-colors ${activeClass}" href="${mod.outFile}">
      <span class="material-symbols-outlined text-[20px]">${mod.icon}</span>
      <span class="text-[10px] font-semibold text-center tracking-tight">${mod.navLabel}</span>
    </a>`;
  }).join('');

  return `<nav class="md:hidden fixed bottom-0 inset-x-0 z-50 bg-white border-t border-slate-200 shadow-[0_-4px_16px_rgba(0,0,0,0.08)]">
  <div class="flex justify-around items-center h-14 px-2">
    ${linksHtml}
  </div>
</nav>`;
}

// Process each module file
const govTailwindConfig = `tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#026725",
        "primary-container": "#e8f5e9",
        "on-primary": "#ffffff",
        "on-primary-container": "#014d1c",
        "secondary": "#006699",
        "secondary-container": "#e0f2fe",
        "on-secondary": "#ffffff",
        "on-secondary-container": "#004b73",
        "tertiary": "#d97706",
        "tertiary-container": "#fef3c7",
        "on-tertiary": "#ffffff",
        "on-tertiary-container": "#78350f",
        "background": "#f4f6f9",
        "on-background": "#0f172a",
        "surface": "#f8fafc",
        "on-surface": "#0f172a",
        "surface-variant": "#e2e8f0",
        "on-surface-variant": "#475569",
        "surface-container": "#ffffff",
        "surface-container-high": "#ffffff",
        "surface-container-highest": "#f8fafc",
        "surface-container-low": "#f8fafc",
        "surface-container-lowest": "#ffffff",
        "surface-bright": "#ffffff",
        "surface-dim": "#f1f5f9",
        "outline": "#cbd5e1",
        "outline-variant": "#e2e8f0",
        "error": "#dc2626",
        "error-container": "#fee2e2",
        "on-error": "#ffffff"
      },
      borderRadius: { "DEFAULT": "0.25rem", "lg": "0.375rem", "xl": "0.5rem", "full": "9999px" },
      spacing: { "space-3xl": "2.5rem", "space-lg": "1.25rem", "space-md": "0.75rem", "margin-mobile": "1rem", "space-xs": "0.25rem", "space-2xs": "0.125rem", "space-xl": "1.5rem", "space-2xl": "2rem", "dock-height": "4.5rem", "margin-tablet": "1.5rem", "space-base": "1rem", "gutter-mobile": "0.75rem", "space-sm": "0.5rem", "appbar-height": "3.5rem", "gutter-tablet": "1rem" }
    }
  }
};`;

for (const mod of modules) {
  const sourceFilePath = path.join(srcDir, mod.srcFolder, 'code.html');
  if (!fs.existsSync(sourceFilePath)) {
    console.warn(`Warning: Source file not found: ${sourceFilePath}`);
    continue;
  }

  let html = fs.readFileSync(sourceFilePath, 'utf8');

  // 1. Switch html tag from dark to light mode
  html = html.replace(/<html class="dark" lang="en">/g, '<html class="light" lang="en">');
  html = html.replace(/<html class="dark">/g, '<html class="light">');

  // 2. Replace dark background in @layer base
  html = html.replace(/background-color:#051424;color:#d4e4fa;/g, 'background-color:#f4f6f9;color:#0f172a;');

  // 3. Replace Tailwind config with government design system
  html = html.replace(/tailwind\.config\s*=\s*\{[\s\S]*?\};\s*<\/script>/, `${govTailwindConfig}\n</script>`);

  // 4. Set title
  if (html.includes('<title>')) {
    html = html.replace(/<title>.*?<\/title>/, `<title>${mod.title}</title>`);
  } else {
    html = html.replace('<head>', `<head><title>${mod.title}</title>`);
  }

  // 5. Inject Government Theme stylesheet and Devanagari fonts
  const govStyles = `
  <!-- National Mission for Clean Ganga (NMCG) Government Theme -->
  <link rel="stylesheet" href="gov-portal.css" />
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Devanagari:wght@400;600;700;800&family=Yatra+One&display=swap" rel="stylesheet">
`;
  html = html.replace('</head>', `${govStyles}\n</head>`);

  // 6. Replace the old fixed dark header with the official Government header
  html = html.replace(/<header[\s\S]*?<\/header>/, generateGovHeader(mod.id));

  // 7. Update <main> styling to remove fixed header padding and center container
  html = html.replace(/<main class="flex flex-col relative w-full pt-20 pb-28 bg-surface px-margin-mobile flex-1">/g,
    '<main id="main-content" class="flex flex-col relative w-full max-w-7xl mx-auto pt-4 pb-20 px-3 sm:px-6 flex-1">'
  );

  // 8. Replace the old bottom <nav> with the new mobile dock
  html = html.replace(/<nav[\s\S]*?<\/nav>/, generateMobileNav(mod.id));

  // 9. Inject the Official Government Footer right before </body>
  html = html.replace('</body>', `${generateGovFooter()}\n</body>`);

  // 10. Replace remote placeholder emblems with local emblems
  html = html.replace(/https:\/\/lh3\.googleusercontent\.com\/aida-embedded\/[a-zA-Z0-9_\-=]+/g, 'national_emblem.svg');

  // Write destination file
  const destPath = path.join(outDir, mod.outFile);
  fs.writeFileSync(destPath, html, 'utf8');
  console.log(`Generated Gov-styled: ${destPath}`);

  // If this is overview, also write index.html
  if (mod.outFile === 'overview.html') {
    const indexPath = path.join(outDir, 'index.html');
    fs.writeFileSync(indexPath, html, 'utf8');
    console.log(`Generated Gov-styled: ${indexPath} (as default entry)`);
  }
}

console.log('Build complete! All 5 BioSentinel modules transformed into official NMCG Government of India Portal style.');
