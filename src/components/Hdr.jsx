import { C } from '../constants/colors';

export const Hdr = ({ title, sub, right }) => (
  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 24 }}>
    <div>
      <div style={{ fontFamily: "'Cormorant Garamond',Garamond,serif", fontSize: 20, fontWeight: 700, color: C.ab }}>{title}</div>
      {sub && <div style={{ fontSize: 13, color: C.t2, marginTop: 4 }}>{sub}</div>}
    </div>
    {right}
  </div>
);
