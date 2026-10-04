# 🎯 RANN-DRUSHTI (रण-दृष्टि) — Assessment & Training Management System (ATMS)
### Dual-Role Command & Cadet Evaluation Console for Defence Officers
**SIH Problem Statement: 26248** | *Tactical Decision Training, Squad Assessment & Field Verification Engine*

---

## 🏛️ System Overview

**RANN-DRUSHTI** is a dual-portal Assessment and Training Management System purpose-built for the Armed Forces (Directing Staff, Instructors, and Officer Trainees/Cadets). Built with a clean military institutional aesthetic (slate/white light theme, high-contrast typography, and strict NATO/ARTRAC terminology), it bridges theoretical tactical doctrine with off-platform physical exercises.

---

## 🎖️ Core System Capabilities

### 1. Dual-Role Authentication & Access Control (RBAC)
- **Instructor / Inspector Portal (Directing Staff):**
  - Full administrative rights to create squad cohorts (standard 6-member teams).
  - Dynamic & manual MCQ authoring studio.
  - Parameter controls (tactical difficulty, per-question / per-session countdown timers).
  - Field task dispatching and live trainee status monitoring.
  - Comprehensive ARTRAC-compliant PDF report generation with signature/evaluation block.
- **User / Trainee Portal (Cadet / Officer Trainee):**
  - Live tactical assessment runner with active countdown timer.
  - Distinct A, B, C, D MCQ tiles with instant feedback or exam submission mode.
  - Off-platform field/physical task tracker with GPS waypoint verification and SITREP submission.
  - Individual performance dossier and score breakdowns.

### 2. Squad & Group Management (6-Man Teams)
- Cohort tracking with live operational states:
  - 🔴 **Not Started**: Pending login and briefing.
  - 🟡 **In Progress**: Actively taking assessment or in field transit.
  - 🟢 **Completed**: MCQ score locked, field SITREP verified.
- Real-time squad cohesion metrics and accuracy averages.

### 3. Assessment & Question Generation Engine
- **Dynamic Question Generator**: Algorithmic generation across domains (Tactical Ambush & Defense, CBRN/NBC Warfare, Signals & Electronic Warfare, Combat Logistics & CASEVAC, Map Reading & Night Azimuth).
- **Instructor Authoring Studio**: Manual drafting tool for custom MCQs with doctrinal explanation and tactical weighting.
- **Parameter Controls**: Basic, Intermediate, and Advanced difficulty tiers with configurable countdown deadlines.

### 4. Task & Field Assignment Module
- Supports off-platform physical/combat tasks (e.g. 5km tactical compass march with 15kg CEG, antenna rigging under simulated EW jamming).
- Trainees submit completion times, GPS grid coordinates, and observational SITREPs directly to Directing Staff queue.

### 5. Reporting & High-Fidelity PDF Export
- Formatted official military evaluation report preview.
- Direct printable/PDF export (`window.print()` with `@media print` A4 optimization).
- Group roster breakdown, individual scores, verified field SITREPs, and official instructor signature block.

---

## 🚀 Live Prototype Access

- **GitHub Repository**: [https://github.com/sanskarjanjalkar-glitch/rann-drushti](https://github.com/sanskarjanjalkar-glitch/rann-drushti)
- **GitHub Pages Live App**: [https://sanskarjanjalkar-glitch.github.io/rann-drushti/](https://sanskarjanjalkar-glitch.github.io/rann-drushti/)
- **Local Development Server**: `http://localhost:8000`

---

## 📐 System Architecture & Relational Schema

```
Users (Instructors, Trainees)
  ├── 1:N ── Squads (Alfa-6, Bravo-6 cohorts)
  ├── 1:N ── Authored Questions & Test Parameters
  └── 1:N ── Trainee Sessions (MCQ Scores, Time Velocity)
               └── 1:N ── Question Responses (A, B, C, D)

Field Tasks (Dispatched by Instructors)
  └── 1:N ── Field Submissions (GPS Waypoints, Time, Verification Notes)
               └── Evaluated by Directing Staff
```
