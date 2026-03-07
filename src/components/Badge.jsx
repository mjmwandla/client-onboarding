import { C } from '../constants/colors';

const STATUS_MAP = {
  IN_PROGRESS: { bg: '#1E3A5F', c: C.ac, l: 'In Progress', p: 1 },
  PENDING_SIGNATURE: { bg: '#3B2F1A', c: C.wa, l: 'Pending Signature', p: 1 },
  NEW: { bg: '#1A2E3B', c: '#60A5FA', l: 'New' },
  COMPLETE: { bg: '#1A3B2F', c: C.ok, l: 'Complete' },
  STOPPED: { bg: '#3B1A1A', c: C.no, l: 'FICA Failed' },
  PASSED: { bg: '#1A3B2F', c: C.ok, l: 'Passed' },
  FAILED: { bg: '#3B1A1A', c: C.no, l: 'Failed' },
  PENDING: { bg: '#3B2F1A', c: C.wa, l: 'Pending', p: 1 },
  VERIFIED: { bg: '#1A3B2F', c: C.ok, l: 'Verified' },
  NOT_STARTED: { bg: C.bd, c: C.t2, l: 'Not Started' },
  AWAITING_CLIENT: { bg: '#3B2F1A', c: C.wa, l: 'Awaiting Client', p: 1 },
  IN_REVIEW: { bg: '#1E3A5F', c: C.ac, l: 'In Review', p: 1 },
  SIGNED: { bg: '#1A3B2F', c: C.ok, l: 'Signed' },
  ACTIVE: { bg: '#1A3B2F', c: C.ok, l: 'Active' },
  EXPIRING: { bg: '#3B2F1A', c: C.wa, l: 'Expiring', p: 1 },
  APPROVED: { bg: '#1A3B2F', c: C.ok, l: 'Approved' },
};

export const Badge = ({ s }) => {
  const v = STATUS_MAP[s] || STATUS_MAP.NOT_STARTED;
  return (
    <span style={{ background: v.bg, color: v.c, padding: '4px 10px', borderRadius: 6, fontSize: 11, fontFamily: "'Courier New',monospace", fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: 6, whiteSpace: 'nowrap' }}>
      {v.p && <span style={{ width: 6, height: 6, borderRadius: '50%', background: v.c, animation: 'pulse 2s infinite' }} />}
      {v.l}
    </span>
  );
};
