import { C } from '../constants/colors';

export const Hdr = ({ title, sub, right }) => (
  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 24 }}>
    <div>
      <div style={{ fontFamily: "system-ui,sans-serif", fontSize: 22, color: C.tx }}>{title}</div>
      {sub && <div style={{ fontSize: 13, color: C.t2, marginTop: 4 }}>{sub}</div>}
    </div>
    {right}
  </div>
);
