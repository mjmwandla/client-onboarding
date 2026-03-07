import { C } from '../constants/colors';

export const Btn = ({ children, primary, danger, onClick, style: s }) => (
  <button onClick={onClick} style={{ padding: '10px 20px', background: primary ? C.ac : danger ? C.no : 'transparent', border: primary || danger ? 'none' : `1px solid ${C.b2}`, color: primary || danger ? '#fff' : C.t2, borderRadius: 8, fontSize: 13, cursor: 'pointer', fontWeight: primary || danger ? 600 : 400, ...s }}>
    {children}
  </button>
);
