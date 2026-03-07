import { C } from '../constants/colors';

export const KPI = ({ icon, value, label, trend }) => (
  <div style={{ background: C.sf, border: `1px solid ${C.bd}`, borderRadius: 12, padding: '20px 24px', flex: 1, minWidth: 170 }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
      <span style={{ fontSize: 18 }}>{icon}</span>
      <span style={{ fontSize: 11, color: C.t2, textTransform: 'uppercase', letterSpacing: 1 }}>{label}</span>
    </div>
    <div style={{ fontSize: 32, fontWeight: 700, color: C.tx, fontFamily: "system-ui,sans-serif" }}>{value}</div>
    {trend && <div style={{ fontSize: 11, color: trend.includes('↑') || trend.includes('+') ? C.ok : trend.includes('↓') ? C.no : C.t2, marginTop: 4 }}>{trend}</div>}
  </div>
);
