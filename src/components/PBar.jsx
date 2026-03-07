import { C } from '../constants/colors';

export const PBar = ({ pct, h = 6, color }) => (
  <div style={{ background: C.bd, borderRadius: h / 2, height: h, width: '100%', overflow: 'hidden' }}>
    <div style={{ width: `${pct}%`, height: '100%', background: color || (pct === 100 ? C.ok : pct > 60 ? C.ac : pct > 30 ? C.wa : '#60A5FA'), borderRadius: h / 2, transition: 'width .6s ease' }} />
  </div>
);
