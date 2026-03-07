import { C } from '../constants/colors';
import { MANDATES } from '../constants';
import { Cd, Hdr, Btn, Badge, SL, TH, TD } from '../components';

export function MandateRegister({ tt }) {
  return <div><Hdr title="Mandate Register" sub="Task 46 · Legal Advisor"/><Cd style={{overflow:'hidden',marginBottom:24}}><table style={{width:'100%',borderCollapse:'collapse',fontSize:13}}><thead><tr style={{borderBottom:`1px solid ${C.bd}`}}>{['Reference','Client','Signed','PM','Status','Version'].map(h=><TH key={h}>{h}</TH>)}</tr></thead><tbody>{MANDATES.map(m=><tr key={m.ref} style={{borderBottom:`1px solid ${C.bd}`}}><TD mono accent>{m.ref}</TD><TD style={{fontWeight:500}}>{m.client}</TD><TD style={{color:C.t2}}>{m.signed}</TD><TD style={{color:C.t2}}>{m.pm}</TD><td style={{padding:'12px 16px'}}><Badge s={m.status}/></td><TD mono style={{color:C.t2}}>{m.ver}</TD></tr>)}</tbody></table></Cd><Cd style={{padding:24}}><SL>Distribute</SL>{['ICM COO','Portfolio Manager','Compliance','Finance Fees','Client Director'].map(r=><div key={r} style={{display:'flex',alignItems:'center',gap:8,padding:'5px 0',fontSize:13,color:C.tx}}><span style={{color:C.ok}}>☑</span>{r}</div>)}<div style={{marginTop:16}}><Btn primary onClick={()=>tt('Distributed')}>Send Email</Btn></div></Cd></div>;
}
