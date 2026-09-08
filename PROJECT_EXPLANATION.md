# 🌊 BioSentinel — Technical Architecture & Module Breakdown

> **National Riverine Biodiversity & Environmental Intelligence Platform**  
> *Complete Technical Guide, System Architecture, and Module-by-Module Explanation ("Har Module Me Kya Ho Raha Hai")*

---

## 📑 Table of Contents
1. [Overview & Project Objective](#1-overview--project-objective)
2. [Complete Technology Stack](#2-complete-technology-stack)
3. [System Architecture & Build Pipeline](#3-system-architecture--build-pipeline)
4. [Module-by-Module Explanation ("Kis Module Me Kya Ho Raha Hai")](#4-module-by-module-explanation)
   - [Module 1: Basin Health Overview (`overview.html`)](#module-1-basin-health-overview-overviewhtml)
   - [Module 2: Live GIS Sensor Grid (`gis.html`)](#module-2-live-gis-sensor-grid-gishtml)
   - [Module 3: AI Bio-Alerts & Autonomous Incident Triage (`alerts.html`)](#module-3-ai-bio-alerts--autonomous-incident-triage-alertshtml)
   - [Module 4: Biodiversity & Species Fauna Register (`fauna.html`)](#module-4-biodiversity--species-fauna-register-faunahtml)
   - [Module 5: Citizen Sentinel Field Network (`sentinel.html`)](#module-5-citizen-sentinel-field-network-sentinelhtml)
5. [Special Portal Features & Accessibility](#5-special-portal-features--accessibility)
6. [Data Flow & Lifecycle](#6-data-flow--lifecycle)
7. [Deployment & Production Setup (Render)](#7-deployment--production-setup-render)
8. [Local Development & Commands](#8-local-development--commands)

---

## 1. Overview & Project Objective

**BioSentinel** is an end-to-end spatial environmental intelligence platform designed for autonomous riverine monitoring. It combines real-time IoT water quality sensors, satellite spectral data, AI-driven anomaly detection, biodiversity tracking, and citizen field telemetry into a unified command portal.

### Key Goals:
- **Continuous Water Telemetry**: Live tracking of Dissolved Oxygen (DO), Biological Oxygen Demand (BOD), pH, Turbidity, and temperature across 482 buoy nodes.
- **Autonomous Incident Triage**: AI models detect ecological threats (effluent spikes, hypoxia, toxic plumes) and trigger automated triage protocols.
- **Biodiversity Conservation**: Tracking flagship aquatic indicator species (Gangetic Dolphin, Gharial, Mahseer, Smooth-coated Otter).
- **Public & Field Engagement**: Citizen observer field reporting with GPS geotagging.

---

## 2. Complete Technology Stack

| Layer | Technology | Details / Purpose |
| :--- | :--- | :--- |
| **Frontend Core** | HTML5 (Semantic) | Clean, accessible DOM structure compliant with Web Content Accessibility Guidelines (WCAG 2.1). |
| **Styling & Design System** | Tailwind CSS + Custom CSS (`gov-portal.css`) | Utility-first styling supplemented with authentic government portal design tokens (tricolor ribbon, dark green navigation, high-contrast states). |
| **Typography & Icons** | Google Fonts + Google Material Symbols | `Inter`, `Plus Jakarta Sans`, `JetBrains Mono`, `Noto Sans Devanagari`, and `Material Symbols Outlined`. |
| **Build Automation** | Node.js (`build.js`) | Custom compiler that injects global headers, footers, mobile navigation docks, accessibility controls, and normalizes Tailwind themes across all modules. |
| **Production Server** | Node.js Native HTTP (`server.js`) | Lightweight HTTP daemon with zero external npm dependencies, sub-millisecond static file streaming, and `/healthz` monitoring. |
| **Hosting & CI/CD** | Render Cloud Platform (`render.yaml`) | Automatic deployment from GitHub `main` branch with automated builds and health check polling. |
| **Version Control** | Git & GitHub | Centralized code repository under `teambugbusters00/biosentinel-portal`. |

---

## 3. System Architecture & Build Pipeline

```
┌────────────────────────────────────────────────────────┐
│                   SOURCE MODULES                       │
│  5 Raw Environmental HTML Modules (Dark Mode Prototypes)│
└──────────────────────────┬─────────────────────────────┘
                           │
                           ▼
┌────────────────────────────────────────────────────────┐
│                   BUILD ENGINE                         │
│                  (`build.js`)                          │
│  1. Dark -> Light Theme Normalization                  │
│  2. Inject Indian Tricolor Ribbon                      │
│  3. Inject Accessibility Bar (A-, A, A+, High Contrast)│
│  4. Replace Header with BioSentinel Unified Gov Bar    │
│  5. Inject Live Marquee Telemetry Bulletin             │
│  6. Inject Mobile Bottom Navigation Dock               │
│  7. Inject Multi-Column Official Footer                │
│  8. Scrub Prohibited Agency References                 │
└──────────────────────────┬─────────────────────────────┘
                           │
                           ▼
┌────────────────────────────────────────────────────────┐
│                   DISTRIBUTION                         │
│                    (`public/`)                         │
│  - overview.html (index.html)                          │
│  - gis.html                                            │
│  - alerts.html                                         │
│  - fauna.html                                          │
│  - sentinel.html                                       │
│  - gov-portal.css, national_emblem.svg, etc.           │
└──────────────────────────┬─────────────────────────────┘
                           │
                           ▼
┌────────────────────────────────────────────────────────┐
│               NODE PRODUCTION SERVER                   │
│                    (`server.js`)                       │
│  - Port 3000 / 3044 / 10000                            │
│  - Route rewriting (/gis -> /gis.html)                 │
│  - Health endpoint (/healthz)                          │
│  - Deployed to Render Cloud                            │
└────────────────────────────────────────────────────────┘
```

---

## 4. Module-by-Module Explanation

### Module 1: Basin Health Overview (`overview.html`)
> **"Basin Health Intelligence & National River Telemetry"**

#### 🎯 Kya Ho Raha Hai Is Module Me?
1. **Aggregated Basin Score (BHI)**:
   - Displays the master **Basin Health Index (78.4% - Class B+ Bathing Standards)**.
   - Calculates real-time environmental health using weighted algorithms combining physical, chemical, and biological factors.
2. **Real-Time Sensor Telemetry Matrix**:
   - **Dissolved Oxygen (DO)**: 7.2 mg/L (Adequate for aquatic survival).
   - **Biological Oxygen Demand (BOD)**: 2.8 mg/L (Within permissible limits).
   - **Water pH**: 7.6 (Optimal neutral alkaline balance).
   - **Turbidity**: 12 NTU (Clear visibility).
3. **Stretch-wise Trend Graphs**:
   - Compares Upper Basin (Rishikesh/Haridwar), Middle Basin (Kanpur/Varanasi), and Lower Basin (Patna/Gangasagar).
4. **Active Station Status**:
   - Displays operational status of **482 buoy sensor nodes** reporting live telemetry data.

---

### Module 2: Live GIS Sensor Grid (`gis.html`)
> **"Live GIS & Telemetry Sensor Grid"**

#### 🎯 Kya Ho Raha Hai Is Module Me?
1. **Interactive Spatial Map**:
   - Visualizes the entire river basin with geospatial pins representing telemetry nodes, sewage treatment outflow points, and industrial zones.
2. **GSAT Satellite Spectral Overlays**:
   - Displays remote-sensing spectral band layers tracking chlorophyll-a concentrations, suspended particulate matter, and thermal surface anomalies.
3. **Sensor Node Inspector**:
   - Clicking a node opens a telemetry readout showing real-time water flow (m³/s), water temperature, nitrate levels, and depth telemetry.
4. **Heatmap & Risk Zoning**:
   - Identifies high-stress hotspots along industrial discharge belts and marks them with visual warning perimeters.

---

### Module 3: AI Bio-Alerts & Autonomous Incident Triage (`alerts.html`)
> **"AI Bio-Alerts & Autonomous Incident Triage"**

#### 🎯 Kya Ho Raha Hai Is Module Me?
1. **Neural Anomaly Detection (AI Engine v4.8)**:
   - Continuously scans incoming sensor feeds for irregular patterns that indicate illegal chemical dumping, sudden hypoxia, or severe microbial spikes.
2. **Incident Severity Classification**:
   - **CRITICAL (Level 1)**: Immediate automated action required (e.g., toxic discharge detected near urban intake).
   - **SEVERE (Level 2)**: Sustained DO drop below 4.0 mg/L.
   - **MODERATE (Level 3)**: Turbidity surge due to upstream silt runoff.
3. **Automated Incident Triage**:
   - Logs automated actions taken: notifies rapid response teams, sends compliance dispatch alerts, and flags nearest water treatment intake gates.
4. **Resolution Timeline**:
   - Tracks each incident from detection → verification → dispatch → remediation.

---

### Module 4: Biodiversity & Species Fauna Register (`fauna.html`)
> **"Biodiversity & Species Fauna Register"**

#### 🎯 Kya Ho Raha Hai Is Module Me?
1. **Aquatic Bio-Indicator Tracking**:
   - Monitors key indicator species whose population and health directly correlate with river water quality:
     - **Gangetic River Dolphin (*Platanista gangetica*)**: Apex freshwater indicator.
     - **Gharial (*Gavialis gangeticus*)**: Clean river sandbank indicator.
     - **Golden Mahseer (*Tor putitora*)**: High-velocity upper stretch indicator.
     - **Smooth-Coated Otter (*Lutrogale perspicillata*)**: Riparian ecosystem health indicator.
2. **Population Censuses & Spatial Distribution**:
   - Detailed population charts, sighting registries, and breeding site geo-fencing.
3. **Biodiversity Health Coefficient**:
   - Computes an ecological resilience score based on species diversity, reproductive vitality, and habitat fragmentation.

---

### Module 5: Citizen Sentinel Field Network (`sentinel.html`)
> **"Citizen Sentinel Field Network (Crowdsourced Telemetry)"**

#### 🎯 Kya Ho Raha Hai Is Module Me?
1. **Field Incident Submission Form**:
   - Enables ground observers, river scouts, and citizens to report local pollution events, dead fish sightings, illegal effluents, or plastic dumping.
2. **Geo-Location & Media Verification**:
   - Captures GPS coordinates, timestamp, category, and evidence photo uploads.
3. **Volunteer Network Grid**:
   - Shows active ground squads, field patrols, and community monitoring chapters across all basin districts.
4. **Grievance & Action Tracking**:
   - Provides citizens with unique incident tracking IDs to follow up on inspection and containment by environmental field officers.

---

## 5. Special Portal Features & Accessibility

1. **Government Portal Design Aesthetics**:
   - **National Tricolor Strip**: Saffron, White, and Green ribbon across the top.
   - **Official Identity Header**: High-contrast emblem, bilingual typography, and system metadata.
   - **Official Navigation Bar**: Deep green `#026725` bar with crisp hover states and active-state underlines.
2. **WCAG Accessibility Controls**:
   - **Font Size Adjustment**: `A-` (decrease), `A` (standard), `A+` (increase) accessible via JavaScript.
   - **High-Contrast Toggle**: Instant switch to high-contrast mode for visually impaired users.
   - **Skip to Main Content**: Keyboard accessibility jump link for screen readers.
3. **Real-Time Marquee Ticker**:
   - Dynamic live ticker announcing autonomous telemetry synchronization, Basin Health Index values, and alert summaries.
4. **Responsive Mobile Dock**:
   - Fixed bottom navigation bar for seamless mobile phone access.

---

## 6. Data Flow & Lifecycle

```
[482 Physical Buoy Sensors]  +  [Satellite Spectral Feeds]  +  [Citizen Field Reports]
                       │                           │                            │
                       └───────────────────────────┼────────────────────────────┘
                                                   │
                                                   ▼
                                     [BioSentinel Ingestion Engine]
                                                   │
                                                   ▼
                                      [AI Anomaly Triage Engine]
                                                   │
                                ┌──────────────────┴──────────────────┐
                                ▼                                     ▼
                      [Normal Telemetry]                    [Critical Alerts]
                                │                                     │
                                ▼                                     ▼
                     Updated Basin KPIs & Maps              Dispatched Response Squads
                                │                                     │
                                └──────────────────┬──────────────────┘
                                                   │
                                                   ▼
                                  [Unified Web Portal Interface]
                              (Overview | GIS | Alerts | Fauna | Sentinel)
```

---

## 7. Deployment & Production Setup (Render)

The application is fully prepared for zero-downtime deployment on Render:

- **Blueprint File**: `render.yaml`
- **Build Command**: `npm run build` (Executes `build.js` to compile the 5 HTML modules into `public/`).
- **Start Command**: `npm start` (Runs `server.js` on `PORT=10000` or `$PORT`).
- **Health Check Endpoint**: `/healthz` (Returns JSON status: `healthy`, buoy count: `482`).
- **Runtime Environment**: Node.js `>=18.0.0 <=24.x`.

---

## 8. Local Development & Commands

```bash
# 1. Clone repository
git clone https://github.com/teambugbusters00/biosentinel-portal.git
cd biosentinel-portal

# 2. Build the project (compiles all modules into /public)
npm run build

# 3. Start local development server
npm start
# Server boots on: http://localhost:3000 (or $PORT)
```

---

*Authored by the BioSentinel Engineering Team • All Rights Reserved © 2026*
