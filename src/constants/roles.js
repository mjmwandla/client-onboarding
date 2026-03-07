export const ROLES = [
  { id: 'ICM_COO', name: 'Thabo Nkosi', title: 'ICM: Chief Operating Officer', initials: 'TN' },
  { id: 'MIS', name: 'Priya Govender', title: 'Management Information Specialist', initials: 'PG' },
  { id: 'LEGAL_ADVISOR', name: 'Sarah van der Berg', title: 'Legal Advisor', initials: 'SV' },
  { id: 'LEGAL_ASSISTANT', name: 'Yvette Dlamini', title: 'Legal Assistant', initials: 'YD' },
  { id: 'CLIENT_DIRECTOR', name: 'Marcus Steyn', title: 'Client Director', initials: 'MS' },
  { id: 'CLO_SEG', name: 'Nomvula Khumalo', title: 'Client Liaison Officer: Segregated', initials: 'NK' },
  { id: 'MANAGER_SEG', name: 'David Pietersen', title: 'Manager: Segregated', initials: 'DP' },
  { id: 'PORTFOLIO_MANAGER', name: 'Amahle Zulu', title: 'Portfolio Manager', initials: 'AZ' },
  { id: 'COMPLIANCE_MANAGER', name: 'Johan Venter', title: 'Compliance Manager', initials: 'JV' },
  { id: 'COMPLIANCE_OFFICER', name: 'Fatima Adams', title: 'Compliance Officer', initials: 'FA' },
  { id: 'FINANCE_FEES', name: 'Riaan du Plessis', title: 'Finance Fees Manager', initials: 'RD' },
  { id: 'CURO', name: 'Curo Operations', title: 'Curo Fund Services Teams', initials: 'CF' },
];

export const ROLE_TASKS = {
  ICM_COO: [5,9,40,50,55], MIS: [2,3,4,5,9,12,13,15,20,22,44,45,49,51,55],
  LEGAL_ADVISOR: [5,6,7,8,38,39,41,46,47,48,55], LEGAL_ASSISTANT: [11,16,17,18,19,23,24,25,26],
  CLIENT_DIRECTOR: [1,5,9,25], CLO_SEG: [27,28,29,30,32,35,36,37,52,53,54],
  MANAGER_SEG: [5,9,10,31,55], PORTFOLIO_MANAGER: [5,42,55],
  COMPLIANCE_MANAGER: [5,6,35], COMPLIANCE_OFFICER: [35],
  FINANCE_FEES: [5,35,55], CURO: [33,34],
};

export const ROLE_PHASES = {
  ICM_COO: [1,2,3,4,5], MIS: [1,2,3,5], LEGAL_ADVISOR: [1,2,5], LEGAL_ASSISTANT: [3],
  CLIENT_DIRECTOR: [1], CLO_SEG: [4,5], MANAGER_SEG: [2,4], PORTFOLIO_MANAGER: [5],
  COMPLIANCE_MANAGER: [2,4], COMPLIANCE_OFFICER: [4], FINANCE_FEES: [4,5], CURO: [4],
};
