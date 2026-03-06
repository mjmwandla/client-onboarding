# OMIG Client Onboarding Portal — Interactive React Prototype
## Master Build Prompt for Claude Opus 4.6 Extended Thinking

---

## YOUR MISSION

Build a **fully interactive, clickable React prototype** of the OMIG (Old Mutual Investment Group) Client Onboarding Portal for Segregated Funds. This is a **stakeholder demo** — it must look production-grade, feel real, and allow business stakeholders to navigate the entire 55-step onboarding journey across all 12+ user roles. Every screen must be populated with **realistic mock data**. Nothing should be blank or placeholder.

This is NOT a wireframe. This is NOT a grey-box mockup. This is a **high-fidelity interactive prototype** that a non-technical business executive can click through and say "yes, this is what we want to build."

---

## TECHNICAL CONSTRAINTS

- Single `.jsx` React file (artifact format)
- Use only: React hooks, Tailwind CSS core utilities, Lucide React icons, Recharts for any charts
- NO localStorage, NO sessionStorage, NO external API calls
- All state managed in memory via `useState` / `useReducer`
- Default export required
- No required props
- Must render without errors

---

## DESIGN DIRECTION

**Aesthetic:** Refined institutional — think Bloomberg Terminal meets modern fintech. Not cold, not playful. Authoritative, precise, trustworthy.

**Colour Palette (use as CSS inline styles or Tailwind where possible):**
- Primary background: `#0A0F1E` (deep navy)
- Surface cards: `#111827` (dark card)
- Elevated surface: `#1C2333`
- Primary accent: `#3B82F6` (electric blue)
- Success: `#10B981`
- Warning: `#F59E0B`
- Danger/Stop: `#EF4444`
- Text primary: `#F9FAFB`
- Text secondary: `#9CA3AF`
- Border subtle: `#1F2937`
- Border accent: `#374151`

**Typography:**
- Use `font-family: 'Georgia', serif` for headings — gives institutional gravitas
- Use `font-family: 'Courier New', monospace` for task numbers, IDs, status codes
- Use system sans-serif for body copy

**Visual signature elements:**
- Left sidebar navigation that shows the active phase progress
- Subtle grid texture on the main background (use a repeating CSS linear-gradient)
- Cards with a very subtle left border accent colour that indicates status (blue = active, green = complete, amber = pending, red = blocked)
- Progress bar at the top of every screen showing overall onboarding % complete
- Animated status badges (pulsing dot for "In Progress")
- Breadcrumb trail showing current phase > screen

---

## APPLICATION ARCHITECTURE

### State Shape

The app maintains a single global state object:

```javascript
const initialState = {
  currentUser: { role: 'ICM_COO', name: 'Thabo Nkosi' },
  currentScreen: 'DASHBOARD',
  currentOnboarding: {
    id: 'OB-2024-0047',
    clientName: 'Sentinel Pension Fund',
    clientType: 'Segregated',
    assetsUnderManagement: 'R 2.4 Billion',
    startDate: '2025-01-15',
    currentPhase: 3,
    currentTask: 17,
    overallProgress: 42,
    status: 'IN_PROGRESS'
  },
  ficaStatus: 'PENDING_VERIFICATION',
  imaStatus: 'NOT_STARTED',
  portfolioStatus: 'NOT_STARTED',
  notifications: [...], // see Notification data below
  tasks: [...], // all 55 tasks with status
  teamProgress: {...}, // per-team completion
}
```

### User Roles Available (role switcher in top nav)
The app must have a **role switcher dropdown** in the top navigation bar so stakeholders can switch perspective:
1. `ICM_COO` — ICM: Chief Operating Officer (Thabo Nkosi)
2. `MIS` — Management Information Specialist (Priya Govender)
3. `LEGAL_ADVISOR` — Legal Advisor (Sarah van der Berg)
4. `LEGAL_ASSISTANT` — Legal Assistant (Yvette Dlamini)
5. `CLIENT_DIRECTOR` — Client Director (Marcus Steyn)
6. `CLO_SEG` — Client Liaison Officer: Segregated (Nomvula Khumalo)
7. `MANAGER_SEG` — Manager: Segregated (David Pietersen)
8. `PORTFOLIO_MANAGER` — Portfolio Manager (Amahle Zulu)
9. `COMPLIANCE_MANAGER` — Compliance Manager (Johan Venter)
10. `COMPLIANCE_OFFICER` — Compliance Officer (Fatima Adams)
11. `FINANCE_FEES` — Finance Fees Manager (Riaan du Plessis)
12. `CURO` — Curo Fund Services Teams (external)

**When the role switches, the dashboard and navigation must update to show only that role's relevant tasks and screens.** This is a critical demo feature.

---

## SCREENS — COMPLETE SPECIFICATION

### SCREEN S1: LOGIN PAGE
**Route key:** `LOGIN`

Layout: Centred card on the deep navy background grid texture.

Elements:
- OMIG logo text: "OMIG" in large Georgia serif, with "Old Mutual Investment Group" in small caps below
- Subtitle: "Client Onboarding Portal — Segregated Funds"
- Email input (pre-filled: `thabo.nkosi@omig.co.za`)
- Password input (pre-filled: `••••••••`)
- "Sign In" button → navigates to DASHBOARD
- Small text: "Powered by Microsoft Azure AD" with a shield icon
- Bottom note: "For access requests contact: ict-support@omig.co.za"

---

### SCREEN S2: ROLE-BASED DASHBOARD
**Route key:** `DASHBOARD`

This is the **most important screen**. It must be visually rich and immediately communicate what is happening across all active onboardings.

**Layout — Three column:**

**LEFT SIDEBAR (fixed, 240px):**
- OMIG logo + "Onboarding Portal" label
- Role switcher dropdown (shows current user's name + role badge)
- Navigation menu grouped by phase:
  ```
  OVERVIEW
    Dashboard
    All Onboardings
    Notifications (badge count)
  
  PHASE 1 · INITIATION
    New Onboarding
    Opportunity Converter
    Stakeholder Meeting
  
  PHASE 2 · REQUIREMENTS
    Meeting Decision
    Team Progress
  
  PHASE 3 · FICA / KYC
    FICA Checklist
    Document Request
    Document Upload
    FICA Verification
  
  PHASE 4 · PORTFOLIO SETUP
    Portfolio Form
    Account Setup
    Sign-off Chain
    Curo Handoff
  
  PHASE 5 · IMA
    IMA Workspace
    IMA Review
    Client Signature
    Mandate Register
    Deposit Tracking
  
  ADMIN
    Audit Trail
    User Management
    Process Config
  ```
- Active item highlighted with blue left border + blue text
- Inactive phases greyed out if user role has no tasks there
- Bottom of sidebar: logged-in user avatar (initials circle), name, role, "Sign Out" link

**CENTRE MAIN CONTENT:**

Top bar:
- Global search input: "Search clients, tasks, documents..."
- Notification bell (badge: 3)
- Current date: "Thursday, 5 March 2026"

KPI Summary Row (4 cards):
```
[ Active Onboardings: 3 ]  [ Avg Days to Complete: 47 ]  [ Tasks Overdue: 2 ]  [ FICA Pass Rate: 94% ]
```
Each card has: icon, large number, label, small trend arrow.

Active Onboardings Table:
```
Client Name          | Type       | Phase              | Progress  | Days Active | Status      | Action
Sentinel Pension Fund| Segregated | Phase 3 · FICA     | ████░ 42% | 21          | IN PROGRESS | View →
Momentum Retirement  | Segregated | Phase 5 · IMA      | ████████ 78%| 52        | PENDING SIG | View →
GEPF Sub-portfolio   | Segregated | Phase 1 · Initiation| █░ 8%   | 3           | NEW         | View →
```

My Tasks Widget (right side panel, 300px):
Shows only tasks assigned to the current user role. For ICM_COO:
```
● OVERDUE  Task 40: Review IMA and provide feedback
           Sentinel Pension Fund · Due 3 days ago
           [ Open Task ]

● TODAY    Task 50: Receive Final IMA
           Momentum Retirement · Due today
           [ Open Task ]

○ UPCOMING Task 5: Agree on responsibilities
           GEPF Sub-portfolio · Due in 2 days
           [ Open Task ]
```

Phase Progress Timeline (bottom):
A horizontal timeline showing all 5 phases for the selected onboarding (Sentinel Pension Fund by default), with task dots coloured by status.

---

### SCREEN S3: ALL ONBOARDINGS
**Route key:** `ALL_ONBOARDINGS`

Full table of all onboardings with filters:
- Filter bar: Status (All / Active / Complete / Stopped) | Type | Phase | Date range
- Table columns: ID | Client | Type | Relationship Manager | Phase | Tasks Complete | Days | Risk | Status | Actions
- Mock data: show 6 onboardings (3 active, 1 complete, 1 stopped due to FICA failure, 1 new)

The STOPPED onboarding should show a red "FICA FAILED" badge — this is a key conversation point for stakeholders.

Complete onboarding example:
```
OB-2024-0031 | Eskom Pension & PF | Segregated | Marcus Steyn | Complete | 55/55 | 38 days | Low | ✅ COMPLETE
```

Stopped onboarding example:
```
OB-2024-0039 | Sunridge Capital | Segregated | Marcus Steyn | Phase 3 | 18/55 | 12 days | High | 🔴 FICA FAILED
```

---

### SCREEN S4: NEW ONBOARDING REQUEST
**Route key:** `NEW_ONBOARDING`
**Primary role:** Client Director

Header: "Initiate New Client Onboarding" | Subtitle: "Task 1 · Client informs OMIG of Assets Won"

Form card:
```
CLIENT INFORMATION
Client / Fund Name:        [ Sentinel Pension Fund                    ]
Client Type:               ( ) Individual  (●) Institutional  ( ) Trust
Fund Type:                 (●) Segregated  ( ) Pooled  ( ) UCITS
Assets Under Management:   [ R 2,400,000,000                          ]
Investment Mandate Type:   [ Balanced / Growth                        ]

RELATIONSHIP
Client Director:           [ Marcus Steyn                       ▼     ]
Assigned Portfolio Mgr:    [ Amahle Zulu                        ▼     ]
Source of Assets:          [ ● New Win  ○ Transfer  ○ Additional Mandate ]

CRM REFERENCE
Opportunity ID (CRM):      [ OPP-2024-7823                            ]
Date Assets Confirmed:     [ 15 January 2025                          ]

NOTES
                           [ Client confirmed verbally on 14 Jan.
                             Formal letter received 15 Jan.           ]
```

Bottom: `[ Cancel ]  [ Save Draft ]  [ Submit & Notify Teams → ]`

On "Submit": show a success toast — "Onboarding OB-2024-0047 created. CRM conversion request sent to Priya Govender."

---

### SCREEN S5: CRM OPPORTUNITY CONVERTER
**Route key:** `CRM_CONVERTER`
**Primary role:** Management Information Specialist (MIS)

Header: "Convert Opportunity in CRM" | Task 2

Split layout:
- Left: CRM opportunity details (read-only): Opportunity ID, Client, AUM, Client Director, Date
- Right: Conversion form

Conversion Form:
```
CONVERSION DETAILS
Mandate Type:         [ Segregated Fund — Growth        ▼ ]
Fee Basis:            [ Basis points on AUM              ▼ ]
Start Date:           [ 2025-02-01                         ]
Mandate Size (R):     [ 2,400,000,000                      ]
Benchmark:            [ ASISA SA Multi Asset High Equity   ]
Currency:             [ ZAR                               ▼ ]

NOTIFICATION CONFIGURATION
✅ ICM Team (Thabo Nkosi, ICM COO)
✅ Legal Team (Sarah van der Berg, Legal Advisor)  
✅ Compliance (Johan Venter, Compliance Manager)
✅ Portfolio Manager (Amahle Zulu)
✅ CRO Segregated Team
☐ CRO Pooled Team (not applicable)
```

Bottom: `[ Preview Notification Email ]  [ Convert & Send Notifications → ]`

"Preview Notification Email" opens a modal showing the exact automated email that will be sent, using OMIG branded styling.

---

### SCREEN S6: AUTOMATED EMAIL PREVIEW (Modal)
**Route key:** Modal overlay on CRM_CONVERTER

Shows a rendered email in an email-client-style frame:
```
FROM:    crm-noreply@omig.co.za
TO:      ICM Team; Legal; Compliance; Portfolio Management
SUBJECT: [NEW ONBOARDING] Sentinel Pension Fund — Segregated Fund — R2.4B

─────────────────────────────────────────
[OMIG LOGO]  CLIENT ONBOARDING NOTIFICATION
─────────────────────────────────────────

A new Segregated Fund client has been won and requires onboarding.

CLIENT:          Sentinel Pension Fund
MANDATE SIZE:    R 2,400,000,000
TYPE:            Segregated — Growth
CLIENT DIRECTOR: Marcus Steyn
ASSIGNED PM:     Amahle Zulu
TARGET DATE:     1 February 2025

ACTION REQUIRED:
Please review your onboarding responsibilities and confirm availability
for the kick-off stakeholder meeting.

Meeting scheduling link: [Schedule Meeting]

─────────────────────────────────────────
This is an automated notification from OMIG CRM.
```

---

### SCREEN S7: STAKEHOLDER MEETING SCHEDULER
**Route key:** `MEETING_SCHEDULER`
**Primary role:** Management Information Specialist

Header: "Schedule Stakeholder Engagement Session" | Task 4

Layout:
- Left: Attendee selection (checklist of all roles, pre-ticked based on fund type)
- Centre: Calendar widget (show a simple 5-day week view, with a proposed slot highlighted)
- Right: Agenda builder

Proposed meeting slot shown highlighted: "Tuesday 21 Jan 2025 · 10:00–11:30 · MS Teams"

Agenda builder (drag-to-reorder list):
```
1. Welcome & introductions (5 min)
2. Client overview — Sentinel Pension Fund (10 min)  
3. FICA requirements review — Legal (15 min)
4. Portfolio setup requirements — Operations (15 min)
5. IMA drafting timeline — Legal (10 min)
6. Task assignments & deadlines (20 min)
7. Q&A (15 min)
```

Bottom: `[ Save Draft ]  [ Send MS Teams Invite → ]`

---

### SCREEN S8: RESPONSIBILITY ASSIGNMENT BOARD
**Route key:** `RESPONSIBILITY_BOARD`
**Primary role:** All teams (post-meeting)

Header: "Agree on Responsibilities & Timelines" | Task 5

This screen is a **Kanban-style board** with columns per team. Each card shows a task assigned to that team with an agreed deadline.

Columns:
```
[ ICM / MIS ]          [ Legal ]              [ Operations / CLO ]   [ Compliance ]
─────────────          ────────────           ───────────────────    ─────────────
📋 Coordinate FICA     📋 FICA Requirements   📋 Portfolio Setup     📋 Sign-off Review
   Due: 25 Jan            Due: 22 Jan            Due: 10 Feb            Due: 12 Feb
   MIS: Priya G.          Legal Asst: Yvette     CLO: Nomvula K.        Comp: Johan V.

📋 IMA Distribution    📋 Draft IMA           📋 Bank Accounts
   Due: 28 Feb            Due: 15 Feb            Due: 12 Feb
   MIS: Priya G.          Legal: Sarah vdB       CLO: Nomvula K.
```

Each card: click to expand and show full task description, owner, deadline, status toggle.

Meeting Minutes section below the board:
```
MEETING MINUTES — 21 Jan 2025
Recorded by: Priya Govender (MIS)
[ Formatted minutes text... ]
[ Download Minutes PDF ]  [ Email to All Attendees ]
```

---

### SCREEN S9: MEETING DECISION GATE
**Route key:** `MEETING_DECISION`
**Primary role:** Legal Advisor / Compliance Manager

Header: "Additional Meeting Required?" | Task 6

Large decision card:
```
ASSESSMENT: Sentinel Pension Fund

Review the initial meeting outputs and determine if all requirements
were fully captured.

Checklist:
☑ FICA requirements confirmed
☑ Portfolio structure agreed
☑ Fee basis confirmed  
☐ Offshore allocation requirements — NOT YET DISCUSSED
☐ Derivative use policy — NOT YET DISCUSSED

RECOMMENDATION: Additional meeting required (2 items outstanding)
```

Two large action buttons:
```
[ ✓ YES — Schedule Additional Meeting ]    [ → NO — Proceed to IMA Drafting ]
```

"YES" → navigates to Additional Requirements Meeting screen
"NO" → navigates to FICA Checklist (Task 38 path)

---

### SCREEN S10: ADDITIONAL REQUIREMENTS MEETING
**Route key:** `ADD_MEETING`
**Primary role:** Legal Advisor

Header: "Additional Requirements Meeting" | Task 7

Similar to S7 but focused. Shows:
- Outstanding items from previous screen as the agenda
- Attendee list (narrower — only relevant stakeholders)
- Notes capture area
- "Outputs captured" checklist that must be fully ticked before proceeding

Status indicator: "Loop from Task 6 → completing loop back to Task 9"

---

### SCREEN S11: TEAM TASK PROGRESS TRACKER
**Route key:** `TASK_TRACKER`
**Primary role:** ICM / MIS

Header: "Team Progress Overview" | Task 9

This is a **master oversight screen** — the ICM team's command centre.

Top: Client selector dropdown (showing Sentinel Pension Fund)

Progress grid per team:
```
TEAM                    TASKS ASSIGNED  COMPLETE  OVERDUE  STATUS
─────────────────────────────────────────────────────────────────
Legal Assistant         8               3         1        ⚠ AT RISK
Management Info Spec    12              7         0        ● ON TRACK
Client Liaison Officer  9               0         0        ○ NOT STARTED
Legal Advisor           10              2         0        ● ON TRACK
Compliance              3               0         0        ○ NOT STARTED
Portfolio Manager       2               0         0        ○ NOT STARTED
Curo Fund Services      2               0         0        ○ NOT STARTED
```

Overdue task highlighted in amber:
```
⚠ OVERDUE: Task 17 — Perform FICA Verification
   Assigned: Yvette Dlamini (Legal Assistant)
   Due: 22 Jan 2025  |  Today: 5 Mar 2026  |  5 DAYS OVERDUE
   [ Send Escalation Email ]  [ Reassign Task ]
```

Timeline chart (Recharts Gantt-style): Show all 55 tasks as horizontal bars across a timeline, coloured by team, with today's date marker.

---

### SCREEN S12: FICA REQUIREMENTS CHECKLIST
**Route key:** `FICA_CHECKLIST`
**Primary role:** Legal Assistant

Header: "FICA Requirements Assessment" | Task 11

Client type banner: "INSTITUTIONAL CLIENT — PENSION FUND (SOUTH AFRICA)"

Checklist grouped by category:
```
ENTITY VERIFICATION
☑ Certificate of Incorporation / Registration
☑ Memorandum and Articles of Association
☑ Latest Annual Financial Statements (audited)
☑ Board Resolution authorising investment

KEY INDIVIDUALS (UBOs & Authorised Signatories)
☑ Certified ID documents (all signatories)
☑ Proof of residential address (not older than 3 months)
☑ Source of funds declaration

TAX & REGULATORY
☑ Tax Reference Number (SARS)
☑ FSCA registration (if applicable)
☐ FATCA / CRS self-certification form — OUTSTANDING

ADDITIONAL (PENSION FUNDS)
☑ FSB / FSCA fund registration certificate
☑ Trustees resolution
☐ PFA compliance certificate — OUTSTANDING
```

Summary: "2 items outstanding — partial FICA pack can be submitted"

Bottom: `[ Save Requirements ]  [ Send Requirements to ICM → ]`

---

### SCREEN S13: DOCUMENT REQUEST BUILDER
**Route key:** `DOC_REQUEST`
**Primary role:** Management Information Specialist

Header: "Request Required Documents from Client" | Task 13

Split screen:
- Left: Document checklist (pulled from FICA Requirements, ticked items auto-populate)
- Right: Live email preview with OMIG branding

Email preview renders in real time as items are checked:
```
FROM:    priya.govender@omig.co.za
TO:      [ compliance@sentinelpf.co.za          ]
CC:      marcus.steyn@omig.co.za
SUBJECT: Document Requirements — Sentinel Pension Fund Onboarding

[OMIG LETTERHEAD BANNER]

Dear Ms. Ndaba,

Thank you for choosing Old Mutual Investment Group as your investment 
manager. To comply with the Financial Intelligence Centre Act (FICA) 
and proceed with your onboarding, we require the following documents:

OUTSTANDING DOCUMENTS:
  1. FATCA / CRS self-certification form
  2. PFA compliance certificate

Please submit these documents by [28 January 2025] via our secure 
document portal or return to this email.

[SECURE UPLOAD LINK BUTTON]

Kind regards,
Priya Govender
Management Information Specialist
Old Mutual Investment Group
```

Bottom: `[ Edit Email ]  [ Send Document Request → ]`

---

### SCREEN S14: CLIENT DOCUMENT UPLOAD PORTAL
**Route key:** `DOC_UPLOAD`
**Primary role:** Client (external-facing screen)

This screen should look slightly DIFFERENT from the internal portal — lighter background, more welcoming tone. It represents what the client sees.

Header: OMIG logo + "Secure Document Submission Portal"
Banner: "Submitting documents for: Sentinel Pension Fund"

Upload zones (drag & drop):
```
[ 📎 FATCA/CRS Self-Certification Form ]
  Drag file here or click to browse
  Accepted: PDF, JPG, PNG (max 10MB)
  Status: ⏳ AWAITING UPLOAD

[ 📎 PFA Compliance Certificate ]
  Drag file here or click to browse
  Accepted: PDF, JPG, PNG (max 10MB)
  Status: ✅ UPLOADED — pfa_certificate_2024.pdf (344KB)
```

Previously submitted documents section:
```
PREVIOUSLY SUBMITTED (Received 18 Jan 2025)
✅ Certificate_of_Incorporation.pdf
✅ Board_Resolution_Jan2025.pdf
✅ Trustees_Resolution_signed.pdf
✅ SARS_TaxRef_SentinelPF.pdf
... (4 more)
```

Bottom: `[ Submit Documents ]`

---

### SCREEN S15: FICA VERIFICATION WORKSPACE
**Route key:** `FICA_VERIFICATION`
**Primary role:** Legal Assistant

Header: "Perform FICA Verification" | Task 17

This is a **document review workspace**.

Split layout:
- Left (60%): Document viewer — shows embedded PDF viewer (simulated with a styled placeholder showing document metadata)
- Right (40%): Verification checklist

Document list (tabs across top):
```
[ Certificate_of_Incorporation ] [ Board_Resolution ] [ ID_Documents ] [ FATCA_Form ] [+3 more]
```

Verification panel for current document:
```
DOCUMENT: FATCA/CRS Self-Certification Form
Received: 22 Jan 2025
File: fatca_crs_form_signed.pdf (892KB)

VERIFICATION CHECKLIST
☑ Document is original or certified copy
☑ Document is within validity period  
☑ Signatory matches authorised representative list
☑ All fields completed
☐ Notarisation required — PENDING

SCREENING CHECKS
KYC Screening:    [ Run Screening ]  ○ Not run
Sanctions List:   [ Run Check ]      ○ Not run
PEP Check:        [ Run Check ]      ○ Not run

NOTES
[ Legal assistant notes here...                    ]

[ ✗ Flag Issue ]  [ ✓ Mark as Verified ]
```

Progress indicator: "4 of 9 documents verified"

---

### SCREEN S16: FICA DECISION GATE
**Route key:** `FICA_DECISION`
**Primary role:** Legal Assistant

Header: "FICA Verification Outcome" | Task 18

Large status card showing verification summary:
```
VERIFICATION SUMMARY — Sentinel Pension Fund

Documents received:     11 / 11  ✅
Documents verified:     11 / 11  ✅
KYC Screening:          PASS     ✅
Sanctions Check:        CLEAR    ✅  
PEP Check:              CLEAR    ✅
Overall FICA Status:    ✅ PASS
```

Two action paths clearly shown:
```
┌─────────────────────────────┐    ┌────────────────────────────────┐
│  ✅ FICA PASSED              │    │  ❌ FICA FAILED                 │
│                             │    │                                │
│  Proceed with onboarding    │    │  Stop onboarding process       │
│  → Portfolio Setup          │    │  Notify Client Director        │
│                             │    │  Archive case                  │
│  [ Proceed → ]              │    │  [ Stop Onboarding ]           │
└─────────────────────────────┘    └────────────────────────────────┘
```

---

### SCREEN S17: FICA FAILURE — HARD STOP
**Route key:** `FICA_FAILED`
**Primary role:** Legal Assistant / Client Director

Full-screen stop state:

```
                    🔴

            ONBOARDING STOPPED

     Sentinel Pension Fund — OB-2024-0047

  FICA verification has failed. The onboarding
  process cannot proceed.

  REASON: Sanctions list match identified for
          beneficial owner (confidence: HIGH)

  ──────────────────────────────────────────

  ACTIONS TAKEN:
  ✅ Client Director notified (Marcus Steyn)
  ✅ ICM COO notified (Thabo Nkosi)
  ✅ Compliance Manager notified (Johan Venter)
  ✅ Onboarding case closed in CRM
  ✅ Audit trail locked

  ──────────────────────────────────────────

  [ Download Stop Report ]   [ Return to Dashboard ]
```

This screen is a critical demo moment — stakeholders need to see the system handles compliance failures gracefully.

---

### SCREEN S18: PORTFOLIO SETUP FORM
**Route key:** `PORTFOLIO_SETUP`
**Primary role:** Client Liaison Officer: Segregated

Header: "Set Up Portfolio on CRM" | Task 27
Sub-header: "Sub-Process ID: 363 — Fund New Client Set Up CRM"

Tabbed form with 3 tabs:

**Tab 1: Portfolio Details**
```
Portfolio Name:          [ Sentinel PF — Growth Segregated          ]
Portfolio Code:          [ SEG-2025-0047                             ]
Benchmark:               [ ASISA SA Multi Asset High Equity    ▼    ]
Fee Basis:               [ 0.45% p.a. on AUM (bps)                  ]
Base Currency:           [ ZAR                                  ▼    ]
Investment Strategy:     [ Growth — Balanced                    ▼    ]
Inception Date:          [ 2025-02-01                               ]
```

**Tab 2: Account Setup (Task 28)**
```
BANK ACCOUNTS
Primary Settlement:  [ Standard Bank — Corporate   ]  [ + Add Account ]
Custody Account:     [ Stanbic Nominees Ltd        ]  [ + Add Account ]

OTHER ACCOUNTS
☑ Money Market / Call Account
☑ Broker Account (Equities)
☐ ITAC Registration
☑ OMIA Account
☐ RIC Account

[ + Add Account Type ]
```

**Tab 3: Sign-off Checklist**
Shows the full sign-off chain (Tasks 29–36) as a progress tracker.

---

### SCREEN S19: SIGN-OFF CHAIN TRACKER
**Route key:** `SIGNOFF_CHAIN`
**Primary role:** Client Liaison Officer (coordinator view)

Header: "Portfolio Set-up Sign-off Chain" | Tasks 29–36

This is a **visual pipeline** — the centrepiece of Phase 4.

Show as a vertical stepper with status:

```
PORTFOLIO SETUP SIGN-OFF CHAIN
Sentinel Pension Fund — Portfolio: SEG-2025-0047

Step 1  CLO Self Sign-off (Task 29)
        Nomvula Khumalo — Client Liaison Officer
        ✅ SIGNED  |  22 Jan 2025 14:32

Step 2  Manager: Segregated Review (Task 31)
        David Pietersen — Manager Segregated
        ✅ SIGNED  |  23 Jan 2025 09:15
        Comment: "Confirmed benchmark allocation correct"

Step 3  Multi-team Sign-off (Task 35)
        ┌─────────────────────────────────────────────────────┐
        │ Compliance Officer     Fatima Adams      ✅ SIGNED  │
        │ CRIMS Support Spec     Keanu Williams    ✅ SIGNED  │
        │ Data Management        Sipho Mokoena     ⏳ PENDING │
        │ IT Data Warehouse      Lerato Mofokeng   ⏳ PENDING │
        │ Finance Fees Manager   Riaan du Plessis  ⏳ PENDING │
        │ Risk Officer           Zanele Mokhele    ⏳ PENDING │
        └─────────────────────────────────────────────────────┘
        3 of 6 signed

Step 4  Curo Fund Services (Tasks 33–34)
        ○ NOT YET REACHED

Step 5  Final CLO Sign-off (Task 35 complete)
        ○ NOT YET REACHED

Step 6  ICM Notification (Task 37)
        ○ NOT YET REACHED
```

Each pending step has a `[ Send Reminder ]` button.
Each signed step shows the timestamp and any comments.

---

### SCREEN S20: CURO HANDOFF
**Route key:** `CURO_HANDOFF`
**Primary role:** Client Liaison Officer

Header: "Send to Curo Fund Services" | Tasks 33–34

A formal handoff screen:

Left panel — Package summary:
```
HANDOFF PACKAGE CONTENTS
Portfolio Setup Form      ✅ Complete
Bank Account Details      ✅ Complete
CRM Reference             SEG-2025-0047
Internal Sign-offs        ✅ 6/6 Obtained
FICA Status               ✅ PASSED
Mandate Summary           ✅ Attached
```

Right panel — Curo notification:
```
TO: Curo Fund Services (curo.operations@omig.co.za)
RE: New Portfolio Setup — Sentinel Pension Fund

[Auto-populated message with all details]
```

Bottom: `[ Preview Package ]  [ Send to Curo → ]`

After sending: show a "Awaiting Curo Confirmation" pending state with a timestamp.

---

### SCREEN S21: IMA DRAFTING WORKSPACE
**Route key:** `IMA_WORKSPACE`
**Primary role:** Legal Advisor

Header: "Draft Investment Management Agreement" | Task 38

Split layout:

Left sidebar: document navigator
```
IMA SECTIONS
▶ 1. Parties
▶ 2. Definitions  
▶ 3. Appointment & Authority
▶ 4. Investment Mandate
▶ 5. Fee Structure
▶ 6. Reporting Obligations
▶ 7. Termination
▶ 8. Governing Law
+ Annexure A: Investment Policy Statement
+ Annexure B: Fee Schedule
+ Annexure C: Benchmark & Restrictions
```

Main: Rich text editor simulation (styled textarea with formatting toolbar icons)
Content pre-filled with standard IMA boilerplate for the selected section, with client-specific fields highlighted in amber.

Right sidebar:
```
IMA METADATA
Version:        Draft v1.0
Created:        22 Jan 2025
Author:         Sarah van der Berg
Client:         Sentinel Pension Fund
Reference:      IMA-2025-0047

LINKED DOCUMENTS
📎 Mandate Summary Sheet
📎 Investment Policy Statement
📎 Fee Schedule

VERSION HISTORY
v1.0  22 Jan  Sarah vdB  Initial draft
```

Bottom: `[ Save Draft ]  [ Submit for Internal Review → ]`

---

### SCREEN S22: IMA INTERNAL REVIEW
**Route key:** `IMA_REVIEW`
**Primary role:** ICM COO (Task 40) / Portfolio Manager (Task 42)

Header: "Review IMA and Provide Feedback" | Tasks 40 & 42

Two-panel layout:
- Left: IMA document viewer (read-only, with scroll, simulated PDF styling)
- Right: Feedback panel

Feedback panel:
```
REVIEW BY: Thabo Nkosi (ICM COO)
DATE: 24 Jan 2025

SECTION COMMENTS
Section 4 — Investment Mandate
⚠ Comment: "Please confirm offshore allocation 
  limit is 30% not 35% as per mandate summary"
[ + Add Comment ]

Section 5 — Fee Structure
✅ Approved — no changes required

General Comments:
[ Text area for overall feedback         ]

[ ✗ Return for Amendments ]  [ ✓ Approve IMA ]
```

Review status tracker (top right):
```
ICM COO Review:           ✅ APPROVED
Portfolio Manager Review: ⏳ PENDING
Legal Final Check:        ○ NOT STARTED
```

---

### SCREEN S23: CLIENT SIGNATURE REQUEST
**Route key:** `CLIENT_SIGNATURE`
**Primary role:** Management Information Specialist

Header: "Submit IMA for Client Signature" | Task 44

Pre-send checklist:
```
PRE-SEND VERIFICATION
✅ IMA version: Final v2.1
✅ ICM COO approval obtained
✅ Portfolio Manager sign-off obtained
✅ All annexures attached (3 documents)
✅ Client contact confirmed: ceo@sentinelpf.co.za
```

Delivery method selector:
```
SIGNATURE METHOD
(●) Digital signature (preferred) — DocuSign / Adobe Sign
( ) Physical signature — print, sign, scan
( ) Wet signature at client premises
```

Package preview:
```
EMAIL TO CLIENT:
TO:      ceo@sentinelpf.co.za; cfo@sentinelpf.co.za
CC:      marcus.steyn@omig.co.za
SUBJECT: SIGNATURE REQUIRED — Investment Management Agreement
         Sentinel Pension Fund — Old Mutual Investment Group

[Branded email with DocuSign link]
```

Bottom: `[ Preview Full Email ]  [ Send for Signature → ]`

Tracking status panel below: "⏳ Awaiting client signature — Sent 27 Jan 2025 at 09:14"

---

### SCREEN S24: MANDATE REGISTER
**Route key:** `MANDATE_REGISTER`
**Primary role:** Legal Advisor

Header: "Update Mandate Register" | Task 46

A styled table of all active mandates:
```
REF          CLIENT                 DATE SIGNED  PM              STATUS     IMA VERSION
IMA-2025-0047 Sentinel Pension Fund  28 Jan 2025  Amahle Zulu     ● ACTIVE   v2.1
IMA-2024-0031 Eskom Pension Fund     15 Oct 2024  Sipho Nkosi     ● ACTIVE   v3.0
IMA-2024-0028 GEPF Sub-portfolio     03 Sep 2024  Amahle Zulu     ● ACTIVE   v1.2
IMA-2023-0019 Transnet RF            22 Mar 2023  Marcus Steyn    ⚠ REVIEW   v1.0 EXPIRING
IMA-2023-0007 Momentum Retirement    11 Jan 2023  Thandi Mokoena  ● ACTIVE   v2.0
```

"Update Register" form — adds new entry for just-completed IMA.

Distribution section:
```
DISTRIBUTE TO:
✅ ICM COO (Thabo Nkosi)
✅ Portfolio Manager (Amahle Zulu)
✅ Compliance Manager (Johan Venter)
✅ Finance Fees Manager (Riaan du Plessis)
✅ Client Director (Marcus Steyn)

[ Send Distribution Email ]
```

---

### SCREEN S25: DEPOSIT TRACKING
**Route key:** `DEPOSIT_TRACKING`
**Primary role:** Client Liaison Officer: Segregated

Header: "Track Incoming Deposit" | Tasks 52–54

Status banner:
```
🏦 AWAITING INITIAL DEPOSIT
   Sentinel Pension Fund — R 2,400,000,000
   Expected: 01 February 2025
   Today: 5 March 2026 — 33 DAYS OVERDUE
```

Deposit tracker:
```
EXPECTED DEPOSITS
┌──────────────────────────────────────────────────────────────────┐
│ Tranche 1: R 1,200,000,000   Due: 01 Feb 2025   ✅ RECEIVED      │
│            Received: 01 Feb 2025 · Ref: STD-BNK-7823411         │
│                                                                  │
│ Tranche 2: R 1,200,000,000   Due: 01 Mar 2025   ⏳ OUTSTANDING   │
│            Expected: 01 Mar 2025 · [ Send Reminder ]            │
└──────────────────────────────────────────────────────────────────┘
```

Notification log:
```
STAKEHOLDERS TO NOTIFY ON DEPOSIT RECEIPT
Finance Fees Manager (Riaan du Plessis)      ✅ Notified (Tranche 1)
ICM COO (Thabo Nkosi)                        ✅ Notified (Tranche 1)
Legal Advisor (Sarah van der Berg)            ✅ Notified (Tranche 1)
Portfolio Manager (Amahle Zulu)              ✅ Notified (Tranche 1)
Manager: Segregated (David Pietersen)        ✅ Notified (Tranche 1)
```

Bottom: `[ Record Deposit Receipt ]  [ Send Reminders ]`

---

### SCREEN S26: ONBOARDING COMPLETION SCREEN
**Route key:** `ONBOARDING_COMPLETE`

Full-screen success state for a completed onboarding (use the Eskom example from All Onboardings):

```
                ✅  ONBOARDING COMPLETE

        Eskom Pension & Provident Fund
              OB-2024-0031

    ─────────────────────────────────────────

    Started:           15 October 2024
    Completed:         22 November 2024
    Duration:          38 business days
    Tasks Completed:   55 / 55
    FICA Status:       ✅ PASSED
    IMA Version:       v3.0 (signed)
    AUM:               R 5.1 Billion
    Portfolio Code:    SEG-2024-0031

    ─────────────────────────────────────────

    COMPLETION NOTIFICATIONS SENT TO:
    ✅ ICM COO · ✅ Portfolio Manager · ✅ Finance Fees
    ✅ Legal · ✅ Compliance · ✅ Client Director

    [ View Audit Trail ]  [ Download Case File ]  [ New Onboarding ]
```

---

### SCREEN S27: AUDIT TRAIL VIEWER
**Route key:** `AUDIT_TRAIL`
**Primary role:** Compliance / Risk

Header: "Audit Trail — Sentinel Pension Fund (OB-2024-0047)"

Filter bar: Date range | User | Task | Action type | Team

Audit log table (most recent first):
```
TIMESTAMP              USER                 ACTION                           TASK    DETAILS
05 Mar 2026 11:42      Yvette Dlamini       Document marked as verified      T17     fatca_crs_form_signed.pdf
05 Mar 2026 09:15      David Pietersen      Portfolio setup approved          T31     SEG-2025-0047 signed off
04 Mar 2026 16:30      Priya Govender       Document request email sent       T13     To: compliance@sentinelpf.co.za
04 Mar 2026 14:22      Nomvula Khumalo      CLO sign-off recorded             T29     CRM reference confirmed
04 Mar 2026 11:07      Thabo Nkosi          IMA review approved               T40     v2.0 → v2.1 (1 amendment)
03 Mar 2026 15:55      Sarah van der Berg   IMA v2.0 submitted for review     T39     Sent to ICM COO
03 Mar 2026 10:30      Sarah van der Berg   IMA draft saved                   T38     Draft v2.0
... (46 more entries)
```

Each row expandable to show full details.

Export button: `[ Export to Excel ]  [ Export to PDF ]`

---

### SCREEN S28: USER MANAGEMENT
**Route key:** `USER_MANAGEMENT`
**Primary role:** Admin

Standard user management table showing all 12 roles with users, active status, last login, permissions level. Include `[ + Add User ]`, `[ Edit ]`, `[ Deactivate ]` actions.

---

### SCREEN S29: PROCESS CONFIGURATION
**Route key:** `PROCESS_CONFIG`
**Primary role:** Admin

Three sections:
1. **Escalation Rules** — table of "Task X overdue by Y days → notify Z"
2. **Email Templates** — list of 6 templates (FICA request, IMA distribution, etc.) with `[ Edit Template ]` buttons
3. **Deadline Configuration** — per-task default deadline settings (days from trigger)

---

### SCREEN S30: NOTIFICATIONS CENTRE
**Route key:** `NOTIFICATIONS`

Full notifications list:
```
TODAY
🔴 OVERDUE    Task 17 — FICA Verification · Sentinel PF · 5 days overdue
🔵 ACTION     IMA feedback received from Thabo Nkosi · Review needed
🟡 REMINDER   Portfolio sign-off: 3 of 6 complete · Momentum Retirement

YESTERDAY  
✅ COMPLETE   Curo confirmed portfolio setup · Momentum Retirement
✅ COMPLETE   Tranche 1 deposit received · R1.2B · Sentinel PF
🔵 ACTION     New onboarding initiated · GEPF Sub-portfolio

THIS WEEK
...
```

---

## NAVIGATION & ROUTING

Use a single `currentScreen` state variable to control which screen renders.

The left sidebar nav items, breadcrumb links, and all action buttons that say "→" or "Navigate to X" update `currentScreen`.

**Required navigation flows (these must all work):**
1. LOGIN → DASHBOARD
2. DASHBOARD → any screen via sidebar
3. DASHBOARD → specific onboarding detail via "View →" button
4. NEW_ONBOARDING submit → DASHBOARD (with success toast)
5. CRM_CONVERTER submit → MEETING_SCHEDULER
6. FICA_DECISION "Proceed" → PORTFOLIO_SETUP
7. FICA_DECISION "Stop" → FICA_FAILED
8. FICA_FAILED → DASHBOARD
9. SIGNOFF_CHAIN (all signed) → CURO_HANDOFF
10. IMA_REVIEW (approved) → CLIENT_SIGNATURE
11. DEPOSIT_TRACKING → ONBOARDING_COMPLETE (for completed case)
12. Any screen → AUDIT_TRAIL
13. Role switcher changes → DASHBOARD with updated role context

---

## MOCK DATA — COMPLETE DATASET

### Onboardings
```javascript
const mockOnboardings = [
  {
    id: 'OB-2024-0047',
    clientName: 'Sentinel Pension Fund',
    clientType: 'Segregated',
    aum: 'R 2,400,000,000',
    clientDirector: 'Marcus Steyn',
    portfolioManager: 'Amahle Zulu',
    phase: 3,
    currentTask: 17,
    progress: 42,
    daysActive: 49,
    status: 'IN_PROGRESS',
    startDate: '2025-01-15',
    ficaStatus: 'IN_PROGRESS',
    imaStatus: 'NOT_STARTED',
    portfolioStatus: 'NOT_STARTED'
  },
  {
    id: 'OB-2024-0051',
    clientName: 'Momentum Retirement Fund',
    clientType: 'Segregated',
    aum: 'R 890,000,000',
    clientDirector: 'Marcus Steyn',
    portfolioManager: 'Thandi Mokoena',
    phase: 5,
    currentTask: 45,
    progress: 78,
    daysActive: 52,
    status: 'PENDING_SIGNATURE',
    startDate: '2025-01-12',
    ficaStatus: 'PASSED',
    imaStatus: 'AWAITING_CLIENT',
    portfolioStatus: 'COMPLETE'
  },
  {
    id: 'OB-2025-0003',
    clientName: 'GEPF Sub-portfolio',
    clientType: 'Segregated',
    aum: 'R 450,000,000',
    clientDirector: 'Lerato Sithole',
    portfolioManager: 'Amahle Zulu',
    phase: 1,
    currentTask: 3,
    progress: 8,
    daysActive: 3,
    status: 'NEW',
    startDate: '2026-03-02',
    ficaStatus: 'NOT_STARTED',
    imaStatus: 'NOT_STARTED',
    portfolioStatus: 'NOT_STARTED'
  },
  {
    id: 'OB-2024-0031',
    clientName: 'Eskom Pension & Provident Fund',
    clientType: 'Segregated',
    aum: 'R 5,100,000,000',
    clientDirector: 'Marcus Steyn',
    portfolioManager: 'Sipho Nkosi',
    phase: 5,
    currentTask: 55,
    progress: 100,
    daysActive: 38,
    status: 'COMPLETE',
    startDate: '2024-10-15',
    completedDate: '2024-11-22',
    ficaStatus: 'PASSED',
    imaStatus: 'SIGNED',
    portfolioStatus: 'COMPLETE'
  },
  {
    id: 'OB-2024-0039',
    clientName: 'Sunridge Capital',
    clientType: 'Segregated',
    aum: 'R 175,000,000',
    clientDirector: 'Marcus Steyn',
    portfolioManager: 'TBC',
    phase: 3,
    currentTask: 25,
    progress: 33,
    daysActive: 12,
    status: 'STOPPED',
    startDate: '2024-12-01',
    stoppedDate: '2024-12-13',
    stoppedReason: 'FICA_FAILED',
    ficaStatus: 'FAILED'
  },
  {
    id: 'OB-2024-0044',
    clientName: 'Transnet Retirement Fund',
    clientType: 'Segregated',
    aum: 'R 3,200,000,000',
    clientDirector: 'Lerato Sithole',
    portfolioManager: 'Amahle Zulu',
    phase: 4,
    currentTask: 33,
    progress: 61,
    daysActive: 28,
    status: 'IN_PROGRESS',
    ficaStatus: 'PASSED',
    imaStatus: 'IN_REVIEW',
    portfolioStatus: 'IN_PROGRESS'
  }
];
```

### Notifications (15 items covering different types and urgency levels — create realistic ones)

### Tasks (all 55 — each with: id, phase, title, description, operator roles, tool, status, assignedTo, dueDate, completedDate where applicable)

---

## COMPONENT ARCHITECTURE

Structure your components as:

```
App
├── LoginScreen
├── MainLayout (sidebar + topbar + content area)
│   ├── Sidebar
│   │   ├── Logo
│   │   ├── RoleSwitcher
│   │   ├── NavMenu (phase-grouped)
│   │   └── UserFooter
│   ├── TopBar
│   │   ├── SearchBar
│   │   ├── NotificationBell
│   │   └── DateDisplay
│   └── ContentArea
│       ├── Dashboard
│       ├── AllOnboardings
│       ├── [Phase 1 Screens]
│       ├── [Phase 2 Screens]
│       ├── [Phase 3 Screens]
│       ├── [Phase 4 Screens]
│       ├── [Phase 5 Screens]
│       └── [Admin Screens]
```

Shared components (define once, reuse):
- `StatusBadge` — coloured badge with icon for status values
- `TaskCard` — card for displaying a task with status, assignee, deadline
- `PhaseProgress` — progress bar showing current phase
- `OverallProgress` — top-of-screen progress indicator
- `ToastNotification` — success/warning/error toast
- `Modal` — generic modal wrapper
- `SignoffStep` — individual step in sign-off chain
- `AuditRow` — row in audit trail
- `DocumentItem` — item in document list with status

---

## ROLE-BASED VIEW RULES

When the role switcher changes, the following must update:

| Role | Dashboard shows | Nav items shown | My Tasks shows |
|---|---|---|---|
| ICM_COO | All onboardings overview, KPIs | All phases | Tasks 5,9,40,50,55 |
| MIS | Active onboardings, pending FICA | Phases 1-3, IMA | Tasks 2,3,4,12,13,15,20,22,44,45,49,51 |
| LEGAL_ADVISOR | IMA status, meeting decisions | Phases 2, 5 | Tasks 6,7,8,38,39,41,46,47,48 |
| LEGAL_ASSISTANT | FICA queue, documents | Phase 3 | Tasks 11,16,17,18,19,23,24,25,26 |
| CLIENT_DIRECTOR | Won business, onboarding status | Phase 1 only | Tasks 1,5,9,25 |
| CLO_SEG | Portfolio setup, deposits | Phase 4 | Tasks 27-37,52,53,54 |
| MANAGER_SEG | Sign-off queue | Phase 4 (sign-off only) | Tasks 5,9,10,31,55 |
| PORTFOLIO_MANAGER | IMA review, onboarding notifications | Phase 5 | Tasks 5,42,55 |
| COMPLIANCE_MANAGER | Meeting decisions, sign-off | Phases 2, 4 | Tasks 5,6,35 |
| CURO | Portfolio setup requests | Phase 4 (Curo only) | Tasks 33,34 |

---

## INTERACTION REQUIREMENTS

These interactions must work:

1. **Role switcher** — clicking a different role instantly re-renders dashboard and nav
2. **"View →" on onboarding table** — loads that onboarding's detail/task view
3. **Phase navigation** — clicking phases in sidebar navigates to that phase's primary screen
4. **Task status toggle** — on the responsibility board, cards can be toggled complete/pending
5. **Form submission** — all forms show a success toast on submit
6. **Modal open/close** — email preview modals open and close
7. **Sign-off chain** — individual sign-off buttons update that step's status
8. **Send Reminder** — shows a toast "Reminder sent to [name]"
9. **FICA decision gate** — Proceed / Stop buttons navigate to correct screens
10. **Audit trail expand** — rows expand to show full detail
11. **Notification bell** — clicking opens notifications dropdown
12. **Progress bar** — updates when tasks are toggled complete

---

## FINAL QUALITY CHECKLIST

Before delivering, verify:
- [ ] All 30 screens are reachable via navigation
- [ ] Role switcher works and changes content
- [ ] No blank screens — every screen has realistic data
- [ ] FICA failure path is demonstrable (navigate to OB-2024-0039)
- [ ] Completion screen is demonstrable (navigate to OB-2024-0031)
- [ ] Sign-off chain shows partial completion state
- [ ] Audit trail has 10+ realistic entries
- [ ] All forms have pre-filled data
- [ ] Toasts appear on form submissions
- [ ] The overall progress bar is visible on every screen
- [ ] Mobile-unfriendly is OK — this is a desktop enterprise tool
- [ ] Dark theme is consistent across all screens
- [ ] No console errors

---

## WHAT SUCCESS LOOKS LIKE

A business executive who has never seen this system should be able to:
1. Log in and immediately understand what is happening across all active onboardings
2. Switch to any role and understand that person's workload
3. Follow the FICA verification flow end-to-end
4. See what happens when FICA fails (hard stop)
5. Follow the sign-off chain for portfolio setup
6. See a completed onboarding as proof of what "done" looks like
7. Leave the session saying: "I understand this system and I want it built"

That is the bar. Build to that standard.
