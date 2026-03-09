import { C } from '../constants/colors';

const STATUS_CFG = {
  IN_PROGRESS: { bg: 'bAc', c: 'ac', l: 'In Progress', p: 1 },
  PENDING_SIGNATURE: { bg: 'bWa', c: 'wa', l: 'Pending Signature', p: 1 },
  NEW: { bg: 'bNw', c: 'ac', l: 'New' },
  COMPLETE: { bg: 'bOk', c: 'ok', l: 'Complete' },
  STOPPED: { bg: 'bNo', c: 'no', l: 'FICA Failed' },
  PASSED: { bg: 'bOk', c: 'ok', l: 'Passed' },
  FAILED: { bg: 'bNo', c: 'no', l: 'Failed' },
  PENDING: { bg: 'bWa', c: 'wa', l: 'Pending', p: 1 },
  VERIFIED: { bg: 'bOk', c: 'ok', l: 'Verified' },
  NOT_STARTED: { bg: 'bd', c: 't2', l: 'Not Started' },
  AWAITING_CLIENT: { bg: 'bWa', c: 'wa', l: 'Awaiting Client', p: 1 },
  IN_REVIEW: { bg: 'bAc', c: 'ac', l: 'In Review', p: 1 },
  SIGNED: { bg: 'bOk', c: 'ok', l: 'Signed' },
  ACTIVE: { bg: 'bOk', c: 'ok', l: 'Active' },
  EXPIRING: { bg: 'bWa', c: 'wa', l: 'Expiring', p: 1 },
  APPROVED: { bg: 'bOk', c: 'ok', l: 'Approved' },
};

export const Badge = ({ s }) => {
  const cfg = STATUS_CFG[s] || STATUS_CFG.NOT_STARTED;
  const v = { bg: C[cfg.bg], c: C[cfg.c], l: cfg.l, p: cfg.p };
  return (
    <span style={{ background: v.bg, color: v.c, padding: '4px 10px', borderRadius: 2, fontSize: 11, fontFamily: "'Source Code Pro','Fira Code',monospace", fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: 6, whiteSpace: 'nowrap' }}>
      {v.p && <span style={{ width: 6, height: 6, borderRadius: '50%', background: v.c, animation: 'pulse 2s infinite' }} />}
      {v.l}
    </span>
  );
};
