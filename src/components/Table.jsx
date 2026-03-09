import { C } from '../constants/colors';

export const TH = ({ children }) => (
  <th style={{ padding: '12px 16px', textAlign: 'left', color: C.t2, fontSize: 10, textTransform: 'uppercase', letterSpacing: 1, fontWeight: 500 }}>
    {children}
  </th>
);

export const TD = ({ children, mono, accent, style: s }) => (
  <td style={{ padding: '12px 16px', color: accent ? C.ac : C.tx, ...(mono && { fontFamily: "'Source Code Pro','Fira Code',monospace", fontSize: 12 }), ...s }}>
    {children}
  </td>
);
