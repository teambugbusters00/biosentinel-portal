# Product Requirement Document (PRD) & Executive Project Brief

## Project Name: BioSentinel
**Sub-title:** National AI-Powered Riverine Biodiversity, Habitat & Environmental Intelligence Platform  
**Document Version:** 1.0 (Comprehensive Architecture & Product Specification)  
**Author / Lead:** Senior Frontend Architect & Environmental-Tech Systems Engineer  
**Reference Alignment:** NMCG Namami Gange Framework (National Mission for Clean Ganga), MoJS, CPCB, WII Dehradun, ICAR-CIFRI  

---

## 1. Executive Summary

### 1.1 Problem Statement
River basins in India and the Global South—anchored by the Ganga and Brahmaputra fluvial systems—face unprecedented ecological stressors:
1. **Pervasive Industrial & Municipal Effluent:** Grossly Polluting Industries (GPIs), tannery belts (e.g., Jajmau/Kanpur), and municipal point-source outfalls consistently violate biochemical oxygen demand (BOD) and toxic heavy metal thresholds (e.g., Hexavalent Chromium).
2. **Biodiversity & Habitat Collapse:** Indicator apex species such as *Platanista gangetica* (Gangetic River Dolphin) and *Gavialis gangeticus* (Gharial) suffer severe disorientation from anthropogenic noise (boat motor cavitation) and riverbed sand mining.
3. **Data Silos & Lagging Compliance:** Traditional environmental data is batch-processed across disparate lab samples, resulting in 48-to-72 hour response lags that allow illegal nocturnal effluent dumps to disperse undetected.
4. **Disconnected Citizen Ground Truth:** Over 40,000+ Ganga Praharis and grassroots riparian communities lack calibrated, geo-spatial field tools to report incidents directly to automated enforcement pipelines.

### 1.2 The BioSentinel Solution
**BioSentinel** is an institutional-grade, multi-tier environmental intelligence platform bridging **real-time Internet of Things (IoT) water buoys, bio-acoustic hydrophone listening arrays, satellite multi-spectral telemetry (GSAT / Sentinel-2), and automated neural anomaly triage**. It pairs cutting-edge sensory analytics with civic field response (Ganga Prahari sentinel network), providing government oversight bodies (NMCG, CPCB, State PCBs) and wildlife researchers with actionable, legally defensible environmental dossiers.

---

## 2. Product Objectives & Target Personas

### 2.1 Core Objectives
- **Sub-Minute Incident Interception:** Detect effluent discharge plumes, microbial blooms, and bio-acoustic distress within 60 seconds of telemetry sensor triggers.
- **Unified Basin Health Index (BHI):** Synthesize chemical water quality (*Nirmalta*) with hydrological environmental flow (*Aviralta*) into an algorithmic 0–100 river index.
- **Automated Multi-Agency Enforcement Dispatch:** Bridge sensory anomaly triggers directly to State Pollution Control Board (SPCB) inspection teams, Forest Department river patrol boats, and District Magistrate public advisories.
- **Citizen Science Integration:** Equip local volunteers and Ganga Grams with offline-buffered, RTK-calibrated GPS mobile reporting linked to WII validation protocols.

### 2.2 Target Personas

| Persona | Role & Organization | Primary Jobs to Be Done (JTBD) |
|---|---|---|
| **Dr. Anirudh Sen** | Chief Scientist, WII / CIFRI | Monitor bio-acoustic click rates for *P. gangetica*, verify community wildlife sightings, evaluate satellite telemetry migration routes. |
| **Pooja Rathore, IAS** | District Magistrate & Member, DGC (District Ganga Committee) | Review live BHI trends, broadcast public health advisories during pathogen outbreaks, oversee municipal STP compliance. |
| **Rajesh Patel** | Senior Enforcement Officer, CPCB / SPCB | Triage critical effluent spikes, inspect UV spectrophotometer plume projections, dispatch industrial inspection notices. |
| **Manoj Yadav** | Volunteer Patrol Leader, Ganga Prahari (Varanasi) | Conduct weekly river sweeps, report illegal dredging or dead aquatic fauna, mobilize local youth clubs. |
| **Academic Researcher** | Hydrology / Data Science Researcher | Query and export standardized GeoJSON streams, time-series sensor logs, and qPCR gene amplification curves. |

---

## 3. Product Architecture & Information Architecture (IA)

### 3.1 Five Foundational Modules

```
                        ┌────────────────────────────────────────────────────────┐
                        │              BioSentinel Intelligence Grid             │
                        └────────────────────────────────────────────────────────┘
                                                    │
         ┌──────────────────┬───────────────────────┼───────────────────────┬──────────────────┐
         │                  │                       │                       │                  │
         ▼                  ▼                       ▼                       ▼                  ▼
┌─────────────────┐┌──────────────────┐   ┌───────────────────┐   ┌───────────────────┐┌─────────────────┐
│ 1. Basin Health ││ 2. Live GIS &    │   │ 3. AI Bio-Alerts  │   │ 4. Biodiversity   ││ 5. Citizen      │
│    Intelligence ││    Sensor Grid   │   │    Intelligence   │   │    Fauna Registry ││    Field Net   │
│                 ││                  │   │                   │   │                   ││                 │
│ - BHI Metric    ││ - Hydro Buoys    │   │ - Neural Plume UV │   │ - Platanista Pop  ││ - Prahari Uplink│
│ - Nirmalta/Flow ││ - Spectral Layers│   │ - Bio-Acoustics   │   │ - Argos Satellite ││ - Geo-Fenced Ops│
│ - 4 Policy      ││ - Diagnostics    │   │ - Automated SPCB  │   │ - CIFRI Ranching  ││ - Honor Boards  │
│   Pillars       ││ - GeoJSON Export │   │   Enforcement     │   │ - WII Peer Review ││ - Field SOPs    │
└─────────────────┘└──────────────────┘   └───────────────────┘   └───────────────────┘└─────────────────┘
```

---

## 4. Detailed Feature Specifications & Screen Breakdown

### Module 1: Basin Health Intelligence (`SCREEN_10`)
* **Basin Health Index (BHI):** Composite score calculated from real-time DO (Dissolved Oxygen), BOD (Biochemical Oxygen Demand), Turbidity, and e-Flow velocity ($m^3/s$) across monitored reaches (Rishikesh to Kolkata).
* **Sensor Grid Status Counter:** Live telemetry count of buoys online (e.g., 842 / 99.4% active), automated micro-eDNA mobile labs, and continuous OCEMS industrial connections.
* **The 4 Namami Gange Pillars:**
  1. *Pillar 01: Water Quality & STP Telemetry* — Benchmarked against CPCB Class-B bathing standards.
  2. *Pillar 02: Aquatic Biodiversity Index* — Flagship bio-indicator growth tracking and river reach health.
  3. *Pillar 03: Industrial Effluent & OCEMS* — Tracking 1,072 Grossly Polluting Industries (GPIs) with real-time pass/flagged ratios.
  4. *Pillar 04: Afforestation & Riparian Green Strip* — Satellite NDVI monitoring of 1,34,106 Hectares of riparian bio-shields.

### Module 2: Live GIS & Sensor Grid (`SCREEN_4`)
* **Cartographic Interface:** Deep-contrast bathymetric GIS view displaying dynamic sensor nodes (e.g., Buoy B-142, B-147, B-155) with visual status rings (Green = Nominal, Amber = Stress, Red = Critical Outfall).
* **Multi-Layer Spectral Filtering:**
  - *WQI Heatmap*: Interpolated chromatic gradient showing river reach oxygenation levels.
  - *Fauna Acoustic*: Hydrophone audio detection radii and recent echolocation detections.
  - *Effluent Outfalls*: Location of industrial drains and municipal STP release points.
  - *Discharge Vectors*: Surface current velocity vectors ($m/s$).
* **Deep Buoy Diagnostic Panel:** Dedicated telemetry readout for selected buoys (e.g., B-147 Dashashwamedh Stretch):
  - Calibrated Clark Cell DO sensor, 4-pole electrode conductivity, glass pH probe, solar array harvest voltage, and GSAT-14 satellite link latency.
  - In-place GeoJSON and official PDF Field Report downloads.

### Module 3: AI Bio-Alerts & Anomaly Intelligence (`SCREEN_8`)
* **Neural Incident Triage Feed:** Real-time machine learning event categorization ranked by severity (Critical / High / Moderate).
* **Multi-Modal Anomaly Proof Visualizers:**
  - *UV Multi-Spectral Plume Imaging (365nm)*: Automated nocturnal tannery plume projection downstream.
  - *Hydrophone Audio Spectrograph*: 10Hz–150kHz echolocation disruption detection against unregistered motorboat cavitation.
  - *qPCR Microcystin Amplification Curves*: Early detection of harmful cyanobacteria / microcystin pathogen blooms.
* **Automated Escalation Action Triggers:** One-click tactical dispatches (Deploy Recon Drones, Issue SPCB Non-Compliance Notice, Send Patrol Boats, Broadcast Public Health Advisory).

### Module 4: Riverine Biodiversity & Endangered Fauna Registry (`SCREEN_6`)
* **Key Indicator Census:** Live telemetry census tracking YoY population recovery for *Platanista gangetica* (+8.2%), *Gavialis gangeticus*, and *Tenualosa ilisha*.
* **Species Deep-Dive Dossiers:**
  - Acoustic confidence scoring and hydrophone click-train rate graphs.
  - Argos satellite transmitter link syncing with Kukrail Breeding Center rewilding data.
  - ICAR-CIFRI seed ranching milestones for Indian Major Carps (IMC) & Golden Mahseer.
* **Scientist-Validated Citizen Sightings:** Field observations authenticated with digital signatures by Wildlife Institute of India (WII) biologists.

### Module 5: Citizen Sentinel Field Network (`SCREEN_2`)
* **Cadre Overview:** Operational tracking of 42,800+ registered Ganga Praharis across 1,674 riverbank Ganga Grams.
* **Quick Field Uplink:** Streamlined field submission module with offline buffer capability, RTK GPS accuracy ($\pm3m$), and multi-threat tagging (Industrial discharge, plastic dumping, stranded fauna, sewage outfalls).
* **Active Community Missions:** Synchronized river cleanup operations (e.g., "Mission Clean Confluence - Triveni Sangam") with real-time debris interception progress bars.
* **Gamified Sentinel Honor Board:** Bi-weekly standing metrics encouraging youth club and volunteer engagement.

---

## 5. Technical & Hardware Integration Architecture

### 5.1 Telemetry Sensor Stack
1. **In-Situ River Buoys:**
   - Optical DO (Clark Cell luminescent optical sensor)
   - Turbidity (Nephelometric infrared sensor, 860nm ISO 7027)
   - Electrical Conductivity & Salinity (Toroidal 4-electrode cell)
   - Telemetry Uplink: GSAT-14 satellite transponder + Dual 4G/LTE failover
2. **Bio-Acoustic Hydrophone Arrays:**
   - Wideband acoustic sensor (10 Hz – 180 kHz flat response)
   - Onboard Edge TPU processing running continuous FFT (Fast Fourier Transform) to isolate dolphin high-frequency click trains (115–135 kHz) from engine noise.
3. **Automated eDNA Samplers:**
   - Programmable peristaltic river micro-filtration modules collecting automated water filters every 12 hours for qPCR pathogen screening.

### 5.2 Frontend Technology Stack
- **Framework:** Modern Responsive HTML5 / TailwindCSS / CSS Grid & Flexbox
- **Typography:** Plus Jakarta Sans & JetBrains Mono (for raw telemetry figures)
- **Visual Design System:** `Deep Telemetry Bio-Spatial` (Abyssal dark mode `#051424`, Emerald `#10B981`, Cyan `#06B6D4`, Amber `#F59E0B`)
- **Accessibility & Internationalization:** Bilingual EN/HI (English & Hindi) top navigation with government access standard compliance.

---

## 6. Regulatory & Government Compliance

- **Water (Prevention and Control of Pollution) Act, 1974:** Standards alignment for Class-B aquatic life propagation and drinking water sources.
- **Environment (Protection) Act, 1986 Section 5:** Automated generation of evidentiary dossiers for rapid issuance of closure or inspection directions.
- **National Green Tribunal (NGT) Admissibility:** Time-stamped, cryptographically signed sensor logs (SHA-256) ensuring compliance data is legally admissible during judicial hearings.

---

## 7. Success Metrics & Roadmap

| Milestone / KPI | Target Metric | Target Timeline |
|---|---|---|
| **Incident Response Latency** | Reduce detection-to-dispatch time from 48 hours to < 15 minutes | Q1 2027 |
| **Grossly Polluting Industry Compliance** | Increase 24h continuous OCEMS compliance from 94.2% to 99.0% | Q2 2027 |
| **Ganga Prahari Active Coverage** | Expand active mobile sentinels from 42.8k to 100k verified praharis | Q4 2027 |
| **Flagship Fauna Population** | Maintain > 8% YoY population increase for Gangetic river dolphins | Annual Census 2028 |
| **Platform Availability** | 99.95% uptime with offline-first client telemetry buffering | Production Release |

---
*BioSentinel: Engineering Autonomous National Bio-Spatial Intelligence for Riverine Conservation.*
