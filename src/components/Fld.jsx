import { C } from '../constants/colors';

export const Fld = ({ label, value, select, options, textarea }) => (
  <div>
    <label style={{ fontSize: 11, color: C.t2, textTransform: 'uppercase', letterSpacing: 1 }}>{label}</label>
    {select ? (
      <select defaultValue={value} style={{ width: '100%', padding: '10px 14px', background: C.el, border: `1px solid ${C.bd}`, borderRadius: 2, color: C.tx, fontSize: 13, marginTop: 4 }}>
        {options.map(o => <option key={o}>{o}</option>)}
      </select>
    ) : textarea ? (
      <textarea defaultValue={value} style={{ width: '100%', height: 80, padding: '10px 14px', background: C.el, border: `1px solid ${C.bd}`, borderRadius: 2, color: C.tx, fontSize: 13, marginTop: 4, resize: 'vertical' }} />
    ) : (
      <input defaultValue={value} style={{ width: '100%', padding: '10px 14px', background: C.el, border: `1px solid ${C.bd}`, borderRadius: 2, color: C.tx, fontSize: 13, marginTop: 4 }} />
    )}
  </div>
);
