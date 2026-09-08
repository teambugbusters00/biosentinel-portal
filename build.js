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
    title: 'BioSentinel | Basin Health Intelligence & National River Telemetry',
    navLabel: 'Basin Overview',
    icon: 'water_drop',
    badge: 'Real-time BHI'
  },
  {
    id: 'live-gis-telemetry',
    srcFolder: 'biosentinel_live_gis_sensor_grid',
    outFile: 'gis.html',
    title: 'BioSentinel | Live GIS & Telemetry Sensor Grid',
    navLabel: 'Live GIS Grid',
    icon: 'explore',
    badge: 'GSAT Spectral'
  },
  {
    id: 'ai-bio-alerts',
    srcFolder: 'biosentinel_ai_bio_alerts_intelligence_1',
    outFile: 'alerts.html',
    title: 'BioSentinel | AI Bio-Alerts & Autonomous Incident Triage',
    navLabel: 'AI Bio-Alerts',
    icon: 'crisis_alert',
    badge: 'Neural Triage'
  },
  {
    id: 'species-fauna-register',
    srcFolder: 'biosentinel_biodiversity_species_register',
    outFile: 'fauna.html',
    title: 'BioSentinel | Biodiversity & Species Fauna Register',
    navLabel: 'Fauna Register',
    icon: 'flutter',
    badge: 'Species DB'
  },
  {
    id: 'citizen-sentinel-portal',
    srcFolder: 'biosentinel_citizen_sentinel_field_network',
    outFile: 'sentinel.html',
    title: 'BioSentinel | Citizen Sentinel Field Network',
    navLabel: 'Citizen Sentinel',
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
<!-- ================= BIOSENTINEL ENVIRONMENTAL INTELLIGENCE PORTAL HEADER ================= -->
<header class="w-full bg-white shadow-sm">
  <!-- 1. National Tricolor Strip -->
  <div class="national-tricolor-ribbon"></div>

  <!-- 2. Accessibility & Utility Bar -->
  <div class="gov-top-utility-bar">
    <div class="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
      <div class="flex items-center gap-3">
        <span class="inline-flex items-center gap-1 font-semibold text-slate-700">
          <span class="material-symbols-outlined text-[15px] text-[#026725]">today</span>
          <span>${currentDate}</span>
        </span>
        <span class="text-slate-300">|</span>
        <span class="hidden md:inline font-bold text-[#026725]">
          BioSentinel Environmental Intelligence Grid
        </span>
      </div>
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
        <a href="sentinel.html" class="font-semibold text-slate-700 hover:text-[#026725]">Telemetry Field Network</a>
        <span class="text-slate-300">|</span>
        <span class="font-bold text-[#026725] cursor-pointer hover:underline" onclick="alert('Hindi language locale enabled across all telemetry grids.')">हिन्दी</span>
      </div>
    </div>
  </div>

  <!-- 3. BioSentinel Identity Header -->
  <div class="gov-identity-header">
    <div class="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
      <div class="flex items-center gap-3 sm:gap-4 text-left">
        <a href="overview.html" class="shrink-0" title="BioSentinel Portal Home">
          <img src="emblem.svg" alt="BioSentinel Emblem" class="h-14 sm:h-16 w-auto object-contain drop-shadow-sm" />
        </a>
        <div class="flex flex-col justify-center">
          <div class="flex items-center gap-2">
            <h1 class="text-xl sm:text-2xl md:text-3xl font-black text-[#006699] tracking-tight uppercase leading-tight">
              BioSentinel
            </h1>
            <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-[#e8f5e9] text-[#026725] border border-[#026725]/20 uppercase tracking-widest">PORTAL</span>
          </div>
          <p class="text-xs sm:text-sm text-slate-700 font-semibold leading-tight">
            National AI-Powered Riverine Biodiversity, Habitat &amp; Environmental Intelligence Platform
          </p>
          <p class="text-[10px] sm:text-[11px] text-slate-500 font-normal">
            Autonomous Ecological Sensing, Real-Time Sensor Telemetry &amp; Bio-Spatial Surveillance
          </p>
        </div>
      </div>

      <div class="flex items-center gap-3 sm:gap-4 shrink-0">
        <div class="flex flex-col text-right pl-3 border-l-2 border-emerald-600">
          <span class="text-[10px] font-mono font-bold tracking-widest text-emerald-800 uppercase">AI Bio-Spatial Grid</span>
          <span class="text-xs font-bold text-[#006699]">BioSentinel SEC-4</span>
          <span class="inline-flex items-center justify-end gap-1.5 text-[11px] text-emerald-700 font-semibold mt-0.5">
            <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            482 BUOYS ONLINE
          </span>
        </div>
      </div>
    </div>
  </div>

  <!-- 4. Primary Navigation Bar -->
  <nav class="gov-main-navbar" aria-label="Main Navigation">
    <div class="max-w-7xl mx-auto flex items-center justify-between overflow-x-auto no-scrollbar">
      <div class="flex items-center">
        ${navLinksHtml}
        <button onclick="toggleAICopilot()" class="gov-nav-item bg-[#014d1c] hover:bg-emerald-800 text-emerald-200 cursor-pointer border-l border-emerald-600/40" title="Open AI Chat Assistant">
          <span class="material-symbols-outlined text-[18px] text-emerald-300 animate-pulse">psychology</span>
          <span>AI Chat</span>
          <span class="text-[9px] bg-emerald-500 text-white font-bold px-1.5 py-0.5 rounded-full uppercase ml-1">Groq</span>
        </button>
      </div>
      <div class="hidden md:flex items-center pr-4 gap-2">
        <button onclick="toggleAICopilot()" class="flex items-center gap-1.5 text-[11px] font-bold bg-[#014d1c] hover:bg-emerald-800 px-3 py-1 rounded text-emerald-100 border border-emerald-400/40 transition-colors cursor-pointer">
          <span class="material-symbols-outlined text-[14px] text-emerald-300">chat</span>
          <span>AI Environmental Copilot</span>
        </button>
      </div>
    </div>
  </nav>

  <!-- 5. Live Bulletin Ticker -->
  <div class="gov-ticker-container">
    <div class="gov-ticker-label">
      <span class="material-symbols-outlined text-[15px]">campaign</span>
      <span>BIOSENTINEL LIVE</span>
    </div>
    <div class="gov-ticker-content">
      <marquee behavior="scroll" direction="left" scrollamount="6" onmouseover="this.stop();" onmouseout="this.start();">
        ★ Autonomous Telemetry Buoy Node #482 synchronized across major riverine stretches • Basin Health Index: 78.4% (Class B+ Bathing Standards) • Real-time continuous bio-monitoring under BioSentinel Autonomous AI Protocol • Field Volunteer Network active.
      </marquee>
    </div>
  </div>
</header>
<!-- ================= END BIOSENTINEL HEADER ================= -->
`;
}

// Generate the Official Multi-Column Government Footer
function generateGovFooter() {
  return `
<!-- ================= BIOSENTINEL PORTAL FOOTER ================= -->
<footer class="gov-portal-footer">
  <div class="gov-footer-top">
    <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
      <!-- Column 1: BioSentinel Identity -->
      <div class="gov-footer-col">
        <div class="flex items-center gap-2 mb-3">
          <img src="emblem.svg" class="h-10 w-auto filter brightness-0 invert" alt="BioSentinel Emblem"/>
          <span class="font-bold text-white text-sm">BioSentinel Intelligence Grid</span>
        </div>
        <p class="text-xs text-slate-300 leading-relaxed mb-3">
          <b>National AI-Powered Riverine Biodiversity &amp; Environmental Intelligence Platform</b><br/>
          Autonomous Ecological Sensing, Real-Time Sensor Telemetry &amp; Bio-Spatial Surveillance
        </p>
        <p class="text-[11px] text-slate-400">
          BioSentinel SEC-4 • Autonomous Bio-Spatial Monitoring Division
        </p>
      </div>

      <!-- Column 2: Platform Architecture -->
      <div class="gov-footer-col">
        <h4>Platform Architecture</h4>
        <ul>
          <li><a href="overview.html">Autonomous Telemetry Grid</a></li>
          <li><a href="gis.html">Satellite Bio-Spatial Mapping</a></li>
          <li><a href="alerts.html">Neural Anomaly Detection</a></li>
          <li><a href="fauna.html">Ecosystem Species Index</a></li>
          <li><a href="sentinel.html">Field Observer Telemetry</a></li>
        </ul>
      </div>

      <!-- Column 3: BioSentinel Modules -->
      <div class="gov-footer-col">
        <h4>BioSentinel Grid Modules</h4>
        <ul>
          <li><a href="overview.html">Basin Health Intelligence (BHI)</a></li>
          <li><a href="gis.html">Live GIS &amp; Sensor Grid</a></li>
          <li><a href="alerts.html">AI Bio-Alerts &amp; Incident Triage</a></li>
          <li><a href="fauna.html">Fauna &amp; Species Register</a></li>
          <li><a href="sentinel.html">Citizen Sentinel (Field Network)</a></li>
        </ul>
      </div>

      <!-- Column 4: Platform Information -->
      <div class="gov-footer-col">
        <h4>System &amp; Policies</h4>
        <ul>
          <li><a href="overview.html">Real-Time Data Access Protocol</a></li>
          <li><a href="gis.html">Telemetry Grid Documentation</a></li>
          <li><a href="#">Privacy &amp; Data Security</a></li>
          <li><a href="#">Terms of Service</a></li>
          <li><a href="#">Sensor API Specifications</a></li>
        </ul>
      </div>
    </div>
  </div>

  <!-- Bottom Bar -->
  <div class="gov-footer-bottom-bar">
    <div class="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left px-4">
      <div>
        <b>BioSentinel</b> — National Riverine &amp; Environmental Intelligence Platform
      </div>
      <div class="text-[11px] text-emerald-100">
        BioSentinel Grid SEC-4 • © 2026 All Rights Reserved
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
    const activeClass = isActive 
      ? 'text-[#026725] font-bold border-t-2 border-[#026725] bg-emerald-50/50' 
      : 'text-slate-600 hover:text-[#026725]';
    const ariaAttr = isActive ? ' aria-current="page"' : '';
    return `<a${ariaAttr} class="flex flex-col items-center justify-center gap-0.5 min-h-[48px] min-w-[48px] px-1 transition-all ${activeClass}" href="${mod.outFile}">
      <span class="material-symbols-outlined text-[20px]">${mod.icon}</span>
      <span class="text-[9px] sm:text-[10px] font-semibold text-center tracking-tight truncate max-w-[62px]">${mod.navLabel}</span>
    </a>`;
  }).join('');

  return `<nav class="md:hidden fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur border-t border-slate-200 shadow-[0_-4px_20px_rgba(0,0,0,0.09)]">
  <div class="flex justify-around items-center h-14 px-1 max-w-lg mx-auto">
    ${linksHtml}
    <button onclick="toggleAICopilot()" class="flex flex-col items-center justify-center gap-0.5 min-h-[48px] min-w-[48px] px-1 transition-all text-[#026725] hover:text-[#014d1c]" title="AI Chat Copilot">
      <span class="material-symbols-outlined text-[20px] text-emerald-600 animate-pulse">psychology</span>
      <span class="text-[9px] font-bold text-center tracking-tight text-[#026725]">AI Chat</span>
    </button>
  </div>
</nav>`;
}

// Generate Interactive BioSentinel AI Copilot (Powered by Groq / GPT OSS 20B)
function generateAICopilotWidget(pageTitle, pageId) {
  return `
<!-- ================= BIOSENTINEL AI COPILOT (POWERED BY GROQ / GPT-OSS 20B) ================= -->
<div id="biosentinel-ai-container">
  <!-- Floating Action Button -->
  <div class="fixed z-40 bottom-16 right-3 sm:bottom-6 sm:right-6">
    <button id="ai-copilot-btn" onclick="toggleAICopilot()" class="group flex items-center gap-2 bg-[#026725] hover:bg-[#014d1c] active:scale-95 text-white px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-full shadow-[0_4px_20px_rgba(2,103,37,0.4)] hover:shadow-2xl transition-all duration-300 border border-emerald-400/40" title="Ask BioSentinel AI Copilot">
      <span class="material-symbols-outlined text-[20px] sm:text-[22px] text-emerald-300 animate-pulse">psychology</span>
      <span class="font-bold text-xs tracking-wide hidden sm:inline">Ask BioSentinel AI</span>
      <span class="inline-flex items-center justify-center bg-emerald-400 text-[#014d1c] text-[9px] font-black px-1.5 py-0.5 rounded-full uppercase tracking-wider">Groq AI</span>
    </button>
  </div>

  <!-- AI Copilot Chat Drawer / Modal -->
  <div id="ai-copilot-modal" class="hidden fixed inset-x-2 bottom-16 sm:inset-auto sm:bottom-20 sm:right-6 sm:w-[420px] max-h-[82vh] bg-white border border-slate-200 rounded-2xl shadow-2xl overflow-hidden flex flex-col z-50 transition-all duration-300">
    <!-- Header -->
    <div class="bg-gradient-to-r from-[#026725] to-[#014d1c] text-white px-4 py-3 flex items-center justify-between shadow-sm">
      <div class="flex items-center gap-2.5">
        <div class="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center border border-white/20">
          <span class="material-symbols-outlined text-[20px] text-emerald-300">psychology</span>
        </div>
        <div>
          <div class="font-bold text-sm leading-tight flex items-center gap-1.5">
            <span>BioSentinel AI Copilot</span>
            <span class="bg-white/15 text-emerald-200 text-[9px] px-1.5 py-0.5 rounded font-mono border border-emerald-300/30">GPT-OSS 20B</span>
          </div>
          <p class="text-[10px] text-emerald-100/90 font-medium">Riverine Telemetry &amp; Environmental Intelligence</p>
        </div>
      </div>
      <button onclick="toggleAICopilot()" class="text-white/80 hover:text-white p-1 rounded-lg hover:bg-white/15 transition-colors" title="Close AI Copilot">
        <span class="material-symbols-outlined text-[20px]">close</span>
      </button>
    </div>

    <!-- Quick Prompt Chips -->
    <div class="bg-slate-50 px-3 py-2 border-b border-slate-200 flex items-center gap-1.5 overflow-x-auto no-scrollbar">
      <button onclick="sendAIChip('Analyze current water quality telemetry for Dissolved Oxygen and BOD.')" class="shrink-0 text-[11px] font-medium bg-white hover:bg-emerald-50 text-slate-700 hover:text-[#026725] px-2.5 py-1 rounded-full border border-slate-200 shadow-sm transition-colors">
        💧 Water Health
      </button>
      <button onclick="sendAIChip('Triage active critical bio-alerts and recommend immediate containment.')" class="shrink-0 text-[11px] font-medium bg-white hover:bg-emerald-50 text-slate-700 hover:text-[#026725] px-2.5 py-1 rounded-full border border-slate-200 shadow-sm transition-colors">
        🚨 Triage Alerts
      </button>
      <button onclick="sendAIChip('What is the conservation and population status of Gangetic Dolphins?')" class="shrink-0 text-[11px] font-medium bg-white hover:bg-emerald-50 text-slate-700 hover:text-[#026725] px-2.5 py-1 rounded-full border border-slate-200 shadow-sm transition-colors">
        🐬 Species Health
      </button>
      <button onclick="sendAIChip('Guide me through how to use this page and the 5 portal modules.')" class="shrink-0 text-[11px] font-medium bg-white hover:bg-emerald-50 text-slate-700 hover:text-[#026725] px-2.5 py-1 rounded-full border border-slate-200 shadow-sm transition-colors">
        🧭 Guide Me
      </button>
    </div>

    <!-- Chat Messages Scroll Container -->
    <div id="ai-chat-messages" class="flex-1 p-3.5 overflow-y-auto space-y-3 max-h-[360px] bg-slate-50/60 text-xs">
      <div class="flex gap-2 items-start">
        <div class="w-6 h-6 rounded-full bg-[#026725] text-white flex items-center justify-center shrink-0 text-[13px] shadow-sm">
          <span class="material-symbols-outlined text-[14px]">psychology</span>
        </div>
        <div class="bg-white border border-slate-200 rounded-xl rounded-tl-none p-2.5 text-slate-800 shadow-sm leading-relaxed max-w-[88%]">
          👋 Hello! I am your <b>BioSentinel AI Copilot</b> (powered by Groq / GPT-OSS 20B).
          <br/><br/>
          I can analyze real-time telemetry across our <b>482 buoy nodes</b>, triage active bio-alerts, evaluate aquatic species vitality, or guide you through any feature on this portal. What would you like to analyze?
        </div>
      </div>
    </div>

    <!-- Chat Input Form -->
    <div class="p-2.5 bg-white border-t border-slate-200">
      <form onsubmit="submitAIChat(event)" class="flex items-center gap-2">
        <input id="ai-user-input" type="text" placeholder="Ask AI about telemetry, alerts, species, or guidance..." class="flex-1 bg-slate-100 border border-slate-200 rounded-lg px-3 py-2 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#026725] focus:bg-white transition-all" autocomplete="off" />
        <button id="ai-send-btn" type="submit" class="bg-[#026725] hover:bg-[#014d1c] active:scale-95 text-white p-2 rounded-lg transition-all flex items-center justify-center shrink-0 shadow-sm" title="Send query to Groq AI">
          <span class="material-symbols-outlined text-[18px]">send</span>
        </button>
      </form>
      <div class="flex items-center justify-between mt-1 px-1 text-[10px] text-slate-400">
        <span>Model: openai/gpt-oss-20b</span>
        <span class="text-emerald-700 font-semibold">Groq In-Memory Inference</span>
      </div>
    </div>
  </div>
</div>

<script>
function toggleAICopilot() {
  const modal = document.getElementById('ai-copilot-modal');
  if (!modal) return;
  if (modal.classList.contains('hidden')) {
    modal.classList.remove('hidden');
    setTimeout(() => {
      document.getElementById('ai-user-input')?.focus();
    }, 100);
  } else {
    modal.classList.add('hidden');
  }
}

function sendAIChip(text) {
  const input = document.getElementById('ai-user-input');
  if (input) {
    input.value = text;
    submitAIChat(new Event('submit'));
  }
}

async function submitAIChat(e) {
  if (e && e.preventDefault) e.preventDefault();
  const input = document.getElementById('ai-user-input');
  const query = input.value.trim();
  if (!query) return;

  const messagesBox = document.getElementById('ai-chat-messages');

  // Append user message bubble
  messagesBox.innerHTML += \`
    <div class="flex gap-2 items-start justify-end">
      <div class="bg-[#026725] text-white rounded-xl rounded-tr-none p-2.5 text-xs shadow-sm leading-relaxed max-w-[85%]">
        \${escapeHtml(query)}
      </div>
    </div>
  \`;
  input.value = '';
  messagesBox.scrollTop = messagesBox.scrollHeight;

  // Append typing indicator
  const loadingId = 'ai-loading-' + Date.now();
  messagesBox.innerHTML += \`
    <div id="\${loadingId}" class="flex gap-2 items-start">
      <div class="w-6 h-6 rounded-full bg-[#026725] text-white flex items-center justify-center shrink-0 text-[13px]">
        <span class="material-symbols-outlined text-[14px]">psychology</span>
      </div>
      <div class="bg-white border border-slate-200 rounded-xl rounded-tl-none p-2.5 text-slate-500 shadow-sm text-xs italic flex items-center gap-1.5">
        <span class="w-1.5 h-1.5 bg-emerald-600 rounded-full animate-bounce"></span>
        <span class="w-1.5 h-1.5 bg-emerald-600 rounded-full animate-bounce" style="animation-delay: 0.2s"></span>
        <span class="w-1.5 h-1.5 bg-emerald-600 rounded-full animate-bounce" style="animation-delay: 0.4s"></span>
        <span>BioSentinel AI analyzing via Groq...</span>
      </div>
    </div>
  \`;
  messagesBox.scrollTop = messagesBox.scrollHeight;

  try {
    const res = await fetch('/api/ai', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt: query, context: document.title })
    });
    const data = await res.json();
    document.getElementById(loadingId)?.remove();

    const formatted = formatAIMarkdown(data.analysis || 'Analysis complete.');
    messagesBox.innerHTML += \`
      <div class="flex gap-2 items-start">
        <div class="w-6 h-6 rounded-full bg-[#026725] text-white flex items-center justify-center shrink-0 text-[13px]">
          <span class="material-symbols-outlined text-[14px]">psychology</span>
        </div>
        <div class="bg-white border border-slate-200 rounded-xl rounded-tl-none p-2.5 text-slate-800 shadow-sm leading-relaxed max-w-[88%] prose prose-xs">
          \${formatted}
        </div>
      </div>
    \`;
  } catch (err) {
    document.getElementById(loadingId)?.remove();
    messagesBox.innerHTML += \`
      <div class="flex gap-2 items-start">
        <div class="w-6 h-6 rounded-full bg-red-600 text-white flex items-center justify-center shrink-0 text-[13px]">
          <span class="material-symbols-outlined text-[14px]">error</span>
        </div>
        <div class="bg-red-50 border border-red-200 rounded-xl rounded-tl-none p-2.5 text-red-700 shadow-sm leading-relaxed max-w-[85%]">
          Unable to reach AI telemetry engine. Please check internet connection.
        </div>
      </div>
    \`;
  }
  messagesBox.scrollTop = messagesBox.scrollHeight;
}

function escapeHtml(text) {
  const div = document.createElement('div');
  div.innerText = text;
  return div.innerHTML;
}

function formatAIMarkdown(text) {
  return text
    .replace(/^### (.*$)/gim, '<h4 class="font-bold text-slate-900 mt-1 mb-0.5">$1</h4>')
    .replace(/^## (.*$)/gim, '<h3 class="font-bold text-slate-900 mt-1 mb-0.5">$1</h3>')
    .replace(/\\*\\*(.*?)\\*\\*/gim, '<b>$1</b>')
    .replace(/\\*(.*?)\\*/gim, '<i>$1</i>')
    .replace(/^\\s*[-•]\\s*(.*$)/gim, '<li class="ml-3 list-disc">$1</li>')
    .replace(/\\n\\n/gim, '<br/><br/>')
    .replace(/\\n/gim, '<br/>');
}
</script>
<!-- ================= END BIOSENTINEL AI COPILOT ================= -->
`;
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

  // 6. Replace the old bottom <nav> BEFORE injecting the gov header
  //    (the gov header contains its own <nav>, so this must happen first)
  html = html.replace(/<nav[\s\S]*?<\/nav>/, generateMobileNav(mod.id));

  // 7. Replace the old fixed dark header with the official Government header
  html = html.replace(/<header[\s\S]*?<\/header>/, generateGovHeader(mod.id));

  // 8. Update <main> styling to remove fixed header padding and center container (with mobile clearance for dock and AI button)
  html = html.replace(/<main class="flex flex-col relative w-full pt-20 pb-28 bg-surface px-margin-mobile flex-1">/g,
    '<main id="main-content" class="flex flex-col relative w-full max-w-7xl mx-auto pt-3 sm:pt-4 pb-32 sm:pb-24 px-3 sm:px-6 flex-1">'
  );

  // 9. Inject the Official Government Footer and BioSentinel AI Copilot right before </body>
  html = html.replace('</body>', `${generateGovFooter()}\n${generateAICopilotWidget(mod.title, mod.id)}\n</body>`);

  // 10. Replace remote placeholder emblems with local emblems
  html = html.replace(/https:\/\/lh3\.googleusercontent\.com\/aida-embedded\/[a-zA-Z0-9_\-=]+/g, 'national_emblem.svg');

  // 11. Clean up any remaining agency text in page body
  html = html.replace(/SPCB\s*&\s*NMCG\s*Compliance\s*Dispatched/gi, 'Automated Environmental Compliance Dispatched');
  html = html.replace(/NMCG-CAL/gi, 'BIOSENTINEL-CAL');
  html = html.replace(/Under\s*NMCG\s*\/?\s*CPCB\s*\/?\s*WII\s*Framework[^\n<]*/gi, '');
  html = html.replace(/Govt\.\s*of\s*India\s*Project/gi, 'BioSentinel Project');
  html = html.replace(/CPCB-WII\s*Protocol\s*SEC-4/gi, 'BioSentinel SEC-4');
  html = html.replace(/CPCB-WII/gi, 'BioSentinel');
  html = html.replace(/Namami\s*Gange/gi, 'BioSentinel Riverine');
  html = html.replace(/Ganga\s*Prahari/gi, 'Field Sentinel');
  html = html.replace(/\bNMCG\b/g, 'BioSentinel');
  html = html.replace(/\bCPCB\b/g, 'Central Telemetry');
  html = html.replace(/\bWII\b/g, 'Ecological');
  html = html.replace(/Ministry\s*of\s*Jal\s*Shakti/gi, 'National River Basin Authority');

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
