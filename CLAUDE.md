# OMIG Client Onboarding Portal

## Project Overview
Interactive React prototype of the OMIG (Old Mutual Investment Group) Client Onboarding Portal for Segregated Funds. This is a stakeholder demo — production-grade look and feel, fully clickable, populated with realistic mock data.

## Tech Stack
- **Framework:** React 18 + Vite
- **Styling:** Inline styles (dark institutional theme — deep navy `#0A0F1E` base)
- **Icons:** Emoji/Unicode (no icon library currently)
- **Charts:** None yet (Recharts available as future addition)
- **Deployment:** Vercel

## Project Structure
```
omig-portal/
├── index.html          # Entry point
├── package.json
├── vite.config.js
├── public/
│   └── favicon.svg
└── src/
    ├── main.jsx        # React root mount
    └── App.jsx         # ENTIRE app — single file, all 28 screens
```

## Architecture
The app is a single-file React component (`App.jsx`) with:
- All state lifted to the top-level `OMIGPortal` component
- Screen renderers in a `S` object (keyed by screen name)
- Navigation via `setScr(screenKey)` — no router
- 12 user roles with role-based filtering of nav and tasks
- 6 mock onboardings with realistic South African institutional client data

## Key Constants
- `C` — colour palette object
- `ROLES` — 12 user roles
- `ROLE_TASKS` — maps role → task numbers
- `ROLE_PHASES` — maps role → visible phases
- `OBS` — 6 mock onboardings
- `PHASES` — 5 onboarding phases with task ranges

## Screen Keys (28 screens)
`LOGIN`, `DASHBOARD`, `ALL_ONBOARDINGS`, `NOTIFICATIONS`, `NEW_ONBOARDING`, `CRM_CONVERTER`, `MEETING_SCHEDULER`, `RESPONSIBILITY_BOARD`, `MEETING_DECISION`, `ADD_MEETING`, `TASK_TRACKER`, `FICA_CHECKLIST`, `DOC_REQUEST`, `DOC_UPLOAD`, `FICA_VERIFICATION`, `FICA_DECISION`, `FICA_FAILED`, `PORTFOLIO_SETUP`, `SIGNOFF_CHAIN`, `CURO_HANDOFF`, `IMA_WORKSPACE`, `IMA_REVIEW`, `CLIENT_SIGNATURE`, `MANDATE_REGISTER`, `DEPOSIT_TRACKING`, `ONBOARDING_COMPLETE`, `AUDIT_TRAIL`, `USER_MANAGEMENT`, `PROCESS_CONFIG`

## Shared Components
`Badge`, `PBar`, `Toast`, `KPI`, `Cd` (card), `Hdr` (header), `Btn`, `Fld` (form field), `SL` (section label), `TH`, `TD`

## Design System
- **Primary bg:** `#0A0F1E` (deep navy)
- **Cards:** `#111827`
- **Accent:** `#3B82F6` (electric blue)
- **Success:** `#10B981`, **Warning:** `#F59E0B`, **Danger:** `#EF4444`
- **Headings:** Georgia, serif
- **Monospace:** Courier New (task numbers, IDs, timestamps)
- **Body:** System sans-serif
- Subtle grid texture on background via repeating linear gradients

## Business Context
This digitises OMIG's 55-step segregated fund client onboarding process. The process involves:
1. **Phase 1 · Initiation** — Client wins, CRM conversion, stakeholder meetings
2. **Phase 2 · Requirements** — Responsibility assignment, meeting decisions
3. **Phase 3 · FICA/KYC** — Document collection, verification, pass/fail gate
4. **Phase 4 · Portfolio Setup** — CRM setup, bank accounts, multi-team sign-off chain
5. **Phase 5 · IMA** — Draft, review, client signature, mandate register, deposit tracking

Key compliance requirement: FICA verification is a hard gate — failure stops the entire onboarding.

## Commands
```bash
npm install     # Install dependencies
npm run dev     # Start dev server (localhost:5173)
npm run build   # Production build → dist/
npm run preview # Preview production build
```

## Deployment
This project is configured for Vercel. Deploy with:
```bash
vercel          # First-time deploy
vercel --prod   # Production deploy
```
Or connect the GitHub repo to Vercel for auto-deploys on push.

## Future AI Features (Planned)
- Document Intelligence: Auto-verify FICA documents via Claude API
- IMA Drafting Assistant: Claude-powered clause suggestions in IMA editor
- Natural Language Search: Query onboardings in plain English
- Smart Escalation: Predict stalling onboardings before they overdue

## Style Guidelines
- Dark theme is mandatory — this is an institutional finance tool
- All forms pre-filled with realistic data (South African clients, ZAR amounts)
- Status badges use pulsing dots for active states
- Cards use coloured left borders to indicate status
- Toast notifications on all form submissions
