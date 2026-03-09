import { C } from '../constants/colors';

export const Cd = ({ children, style: s, ...p }) => (
  <div style={{ background: C.sf, border: `1px solid ${C.bd}`, borderRadius: 3, ...s }} {...p}>
    {children}
  </div>
);
