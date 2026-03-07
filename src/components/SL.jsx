import { C } from '../constants/colors';

export const SL = ({ children, style: s }) => (
  <div style={{ fontSize: 12, fontWeight: 600, color: C.t2, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 16, ...s }}>
    {children}
  </div>
);
