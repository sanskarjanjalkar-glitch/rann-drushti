# 🎯 RANN-DRUSHTI (रण-दृष्टि)
### Multi-Domain Decision Training Platform
**SIH Problem Statement: 26248** | *Cognitive Stress & Asymmetric Warfare Decision Simulator*

---

## ⚡ Live Web Deployment
🌐 **Live Interactive Application:** [https://sanskarjanjalkar-glitch.github.io/rann-drushti/](https://sanskarjanjalkar-glitch.github.io/rann-drushti/)

---

## 🏛️ Executive Overview

Traditional military tactical trainers (e.g., Bohemia VBS, JCATS, standard TEWTs) rely on **scripted, deterministic scenarios** that evaluate procedural outcomes under ideal or static conditions.

**RANN-DRUSHTI (रण-दृष्टि)** is an indigenous defense-grade cognitive simulator engineered to train **command decision-making under severe cognitive stress, communication degradation, and contradictory intelligence**.

---

## 🗺️ Operational Architecture Flow

```
COMMAND-X / RANN-DRUSHTI
        Decision Training Platform
                      │
          ┌───────────┴───────────┐
          ↓                       ↓
   UNCERTAINTY              TIME PRESSURE
 Delay • Dropout          Limited decision time
 Conflict • Fog                  │
[01 | Uncertainty Engine] [07 | DPI Gauge]
[06 | AI Event Director]         │
          └───────────┬───────────┘
                      ↓
              🧠 DECISION MAKING
                      ↓
          ┌───────────┼───────────┐
          ↓           ↓           ↓
       INDIVIDUAL    TEAM       SYSTEM
        Decision   Coordination  Readiness
   [Option A/B/C]  [02 | Role   [03 | Info Reliability]
                      Fog]
          └───────────┼───────────┘
                      ↓
                AI EVALUATION
                      ↓
             ┌────────┴────────┐
             ↓                 ↓
       Decision DNA       What-If Replay
   [04 | Commander DNA]   [05 | Counterfactual]
   [08 | Process Score]        │
             └────────┬────────┘
                      ↓
              ADAPTIVE TRAINING
                      ↓
           [09 | Retraining Loop]
                      ↓
        ┌─────────────┼─────────────┐
        ↓             ↓             ↓
   Better Skills   Faster Decisions  Higher Readiness
```

---

## 🔑 The 9 Key Innovations

| # | Innovation | Operational Impact |
|---|---|---|
| **01** | **Adaptive Uncertainty Engine** | Dynamic information uncertainty and signal noise modulated in real time based on player competence. |
| **02** | **Role-Based Information Fog** | Role-partitioned asymmetric COP (Platoon, Company, Signals/EW, Intel, Instructor) forcing team coordination. |
| **03** | **Information Reliability Engine** | Real-time algorithmic reliability scoring ($\mathcal{R}_{info} = 0.0 - 1.0$) accounting for staleness, cross-checks, and EW jamming. |
| **04** | **Commander Decision DNA** | Longitudinal multi-axis behavioral profiling (OODA latency, data appetite threshold, bias resistance, stress degradation). |
| **05** | **What-If Decision Replay** | Branching counterfactual timeline scrubber powered by Monte Carlo projections to evaluate alternate outcomes. |
| **06** | **AI Event Director** | Autonomous pacing orchestrator that injects unexpected tactical crises and contradictory intelligence. |
| **07** | **Decision Pressure Index (DPI)** | Real-time mathematical quantification of operational stress and cognitive load. |
| **08** | **Decision-Process Scoring** | Process-first evaluation matrix that decouples decision logic from stochastic outcome luck. |
| **09** | **Adaptive Retraining Loop** | Closed-loop generator synthesizing vulnerability-targeted 5-minute micro-drills to remediate identified cognitive flaws. |

---

## 💻 Tech Stack & Standards
* **Interface**: Lightweight, high-performance HTML5, Tailwind CSS, Canvas API with zero heavy runtime dependencies.
* **Architecture**: Fully offline-capable, air-gappable architecture for secure defense deployment.
* **Symbology**: NATO Mil-STD standard tactical icons and MGRS grid coordinates.
* **Hosting**: GitHub Pages static deployment.

---

## 🛠️ Local Development & Deployment

### Quick Local Run:
1. Clone the repository:
   ```bash
   git clone https://github.com/sanskarjanjalkar-glitch/rann-drushti.git
   cd rann-drushti
   ```
2. Open in browser:
   * Double-click `index.html`, OR
   * Run with Python:
     ```bash
     python -m http.server 8000
     ```
   * Open `http://localhost:8000`
