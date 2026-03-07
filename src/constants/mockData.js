export const OBS = [
  { id: 'OB-2024-0047', clientName: 'Sentinel Pension Fund', clientType: 'Segregated', aum: 'R 2,400,000,000', clientDirector: 'Marcus Steyn', portfolioManager: 'Amahle Zulu', phase: 3, currentTask: 17, progress: 42, daysActive: 49, status: 'IN_PROGRESS', startDate: '2025-01-15', ficaStatus: 'IN_PROGRESS', imaStatus: 'NOT_STARTED', portfolioStatus: 'NOT_STARTED', risk: 'Medium' },
  { id: 'OB-2024-0051', clientName: 'Momentum Retirement Fund', clientType: 'Segregated', aum: 'R 890,000,000', clientDirector: 'Marcus Steyn', portfolioManager: 'Thandi Mokoena', phase: 5, currentTask: 45, progress: 78, daysActive: 52, status: 'PENDING_SIGNATURE', startDate: '2025-01-12', ficaStatus: 'PASSED', imaStatus: 'AWAITING_CLIENT', portfolioStatus: 'COMPLETE', risk: 'Low' },
  { id: 'OB-2025-0003', clientName: 'GEPF Sub-portfolio', clientType: 'Segregated', aum: 'R 450,000,000', clientDirector: 'Lerato Sithole', portfolioManager: 'Amahle Zulu', phase: 1, currentTask: 3, progress: 8, daysActive: 3, status: 'NEW', startDate: '2026-03-02', ficaStatus: 'NOT_STARTED', imaStatus: 'NOT_STARTED', portfolioStatus: 'NOT_STARTED', risk: 'Low' },
  { id: 'OB-2024-0031', clientName: 'Eskom Pension & Provident Fund', clientType: 'Segregated', aum: 'R 5,100,000,000', clientDirector: 'Marcus Steyn', portfolioManager: 'Sipho Nkosi', phase: 5, currentTask: 55, progress: 100, daysActive: 38, status: 'COMPLETE', startDate: '2024-10-15', completedDate: '2024-11-22', ficaStatus: 'PASSED', imaStatus: 'SIGNED', portfolioStatus: 'COMPLETE', risk: 'Low' },
  { id: 'OB-2024-0039', clientName: 'Sunridge Capital', clientType: 'Segregated', aum: 'R 175,000,000', clientDirector: 'Marcus Steyn', portfolioManager: 'TBC', phase: 3, currentTask: 25, progress: 33, daysActive: 12, status: 'STOPPED', startDate: '2024-12-01', stoppedDate: '2024-12-13', stoppedReason: 'FICA_FAILED', ficaStatus: 'FAILED', risk: 'High' },
  { id: 'OB-2024-0044', clientName: 'Transnet Retirement Fund', clientType: 'Segregated', aum: 'R 3,200,000,000', clientDirector: 'Lerato Sithole', portfolioManager: 'Amahle Zulu', phase: 4, currentTask: 33, progress: 61, daysActive: 28, status: 'IN_PROGRESS', startDate: '2025-02-05', ficaStatus: 'PASSED', imaStatus: 'IN_REVIEW', portfolioStatus: 'IN_PROGRESS', risk: 'Low' },
];

export const NOTIFS = [
  { id: 1, type: 'OVERDUE', text: 'Task 17 — FICA Verification', client: 'Sentinel PF', detail: '5 days overdue', time: 'Today 11:42', read: false },
  { id: 2, type: 'ACTION', text: 'IMA feedback received from Thabo Nkosi', client: 'Sentinel PF', detail: 'Review needed', time: 'Today 09:15', read: false },
  { id: 3, type: 'REMINDER', text: 'Portfolio sign-off: 3 of 6 complete', client: 'Momentum Retirement', detail: '', time: 'Today 08:30', read: false },
  { id: 4, type: 'COMPLETE', text: 'Curo confirmed portfolio setup', client: 'Momentum Retirement', detail: '', time: 'Yesterday 16:30', read: true },
  { id: 5, type: 'COMPLETE', text: 'Tranche 1 deposit received — R1.2B', client: 'Sentinel PF', detail: '', time: 'Yesterday 14:22', read: true },
  { id: 6, type: 'ACTION', text: 'New onboarding initiated', client: 'GEPF Sub-portfolio', detail: '', time: 'Yesterday 11:07', read: true },
  { id: 7, type: 'REMINDER', text: 'FICA documents due from client', client: 'Transnet RF', detail: 'Due in 3 days', time: '2 days ago', read: true },
  { id: 8, type: 'COMPLETE', text: 'Stakeholder meeting scheduled', client: 'GEPF Sub-portfolio', detail: '', time: '3 days ago', read: true },
];

export const PHASES = [
  { num: 1, name: 'Initiation', tasks: [1,2,3,4,5] },
  { num: 2, name: 'Requirements', tasks: [6,7,8,9,10] },
  { num: 3, name: 'FICA / KYC', tasks: [11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26] },
  { num: 4, name: 'Portfolio Setup', tasks: [27,28,29,30,31,32,33,34,35,36,37] },
  { num: 5, name: 'IMA & Completion', tasks: [38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55] },
];

export const FICA_DOCS_INIT = [
  { id: 'd1', name: 'Certificate of Incorporation', cat: 'ENTITY', status: 'VERIFIED', file: 'Certificate_of_Incorporation.pdf', size: '1.2MB', date: '2025-01-18' },
  { id: 'd2', name: 'Memorandum & Articles of Association', cat: 'ENTITY', status: 'VERIFIED', file: 'Memo_Articles.pdf', size: '3.4MB', date: '2025-01-18' },
  { id: 'd3', name: 'Annual Financial Statements (audited)', cat: 'ENTITY', status: 'VERIFIED', file: 'AFS_2024_audited.pdf', size: '8.1MB', date: '2025-01-18' },
  { id: 'd4', name: 'Board Resolution', cat: 'ENTITY', status: 'VERIFIED', file: 'Board_Resolution_Jan2025.pdf', size: '456KB', date: '2025-01-18' },
  { id: 'd5', name: 'Certified ID Documents (all signatories)', cat: 'KEY', status: 'VERIFIED', file: 'ID_Documents_Bundle.pdf', size: '5.2MB', date: '2025-01-20' },
  { id: 'd6', name: 'Proof of Residential Address', cat: 'KEY', status: 'VERIFIED', file: 'Address_Proof_Bundle.pdf', size: '2.1MB', date: '2025-01-20' },
  { id: 'd7', name: 'Source of Funds Declaration', cat: 'KEY', status: 'VERIFIED', file: 'Source_of_Funds.pdf', size: '890KB', date: '2025-01-20' },
  { id: 'd8', name: 'SARS Tax Reference Number', cat: 'TAX', status: 'VERIFIED', file: 'SARS_TaxRef.pdf', size: '234KB', date: '2025-01-18' },
  { id: 'd9', name: 'FATCA / CRS Self-Certification Form', cat: 'TAX', status: 'PENDING', file: 'fatca_crs_form.pdf', size: '892KB', date: '2025-01-22' },
  { id: 'd10', name: 'FSB / FSCA Fund Registration', cat: 'PENSION', status: 'VERIFIED', file: 'FSCA_Registration.pdf', size: '1.1MB', date: '2025-01-18' },
  { id: 'd11', name: 'Trustees Resolution', cat: 'PENSION', status: 'VERIFIED', file: 'Trustees_Resolution.pdf', size: '567KB', date: '2025-01-18' },
];

export const AUDIT = [
  { ts: '05 Mar 2026 11:42', user: 'Yvette Dlamini', action: 'Document marked as verified', task: 'T17', detail: 'fatca_crs_form_signed.pdf' },
  { ts: '05 Mar 2026 09:15', user: 'David Pietersen', action: 'Portfolio setup approved', task: 'T31', detail: 'SEG-2025-0047 signed off' },
  { ts: '04 Mar 2026 16:30', user: 'Priya Govender', action: 'Document request email sent', task: 'T13', detail: 'To: compliance@sentinelpf.co.za' },
  { ts: '04 Mar 2026 14:22', user: 'Nomvula Khumalo', action: 'CLO sign-off recorded', task: 'T29', detail: 'CRM reference confirmed' },
  { ts: '04 Mar 2026 11:07', user: 'Thabo Nkosi', action: 'IMA review approved', task: 'T40', detail: 'v2.0 → v2.1 (1 amendment)' },
  { ts: '03 Mar 2026 15:55', user: 'Sarah van der Berg', action: 'IMA v2.0 submitted for review', task: 'T39', detail: 'Sent to ICM COO' },
  { ts: '03 Mar 2026 10:30', user: 'Sarah van der Berg', action: 'IMA draft saved', task: 'T38', detail: 'Draft v2.0 — 42 pages' },
  { ts: '02 Mar 2026 14:15', user: 'Priya Govender', action: 'FICA documents forwarded', task: 'T15', detail: '11 documents submitted' },
  { ts: '02 Mar 2026 09:00', user: 'System', action: 'Automated overdue notification', task: 'T17', detail: 'Yvette Dlamini — 3 days overdue' },
  { ts: '01 Mar 2026 16:45', user: 'Johan Venter', action: 'Compliance review completed', task: 'T35', detail: 'Portfolio sign-off granted' },
  { ts: '28 Feb 2026 11:20', user: 'Fatima Adams', action: 'Compliance sign-off recorded', task: 'T35', detail: 'Sentinel PF approved' },
  { ts: '27 Feb 2026 15:30', user: 'Marcus Steyn', action: 'Client meeting confirmed', task: 'T5', detail: 'GEPF kick-off meeting' },
];

export const MANDATES = [
  { ref: 'IMA-2025-0047', client: 'Sentinel Pension Fund', signed: '28 Jan 2025', pm: 'Amahle Zulu', status: 'ACTIVE', ver: 'v2.1' },
  { ref: 'IMA-2024-0031', client: 'Eskom Pension Fund', signed: '15 Oct 2024', pm: 'Sipho Nkosi', status: 'ACTIVE', ver: 'v3.0' },
  { ref: 'IMA-2024-0028', client: 'GEPF Sub-portfolio', signed: '03 Sep 2024', pm: 'Amahle Zulu', status: 'ACTIVE', ver: 'v1.2' },
  { ref: 'IMA-2023-0019', client: 'Transnet RF', signed: '22 Mar 2023', pm: 'Marcus Steyn', status: 'EXPIRING', ver: 'v1.0' },
  { ref: 'IMA-2023-0007', client: 'Momentum Retirement', signed: '11 Jan 2023', pm: 'Thandi Mokoena', status: 'ACTIVE', ver: 'v2.0' },
];
