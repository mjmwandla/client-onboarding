import { C } from '../constants/colors';
import { AUDIT } from '../constants';
import { Cd, Hdr, Btn, TH, TD } from '../components';

export function AuditTrail({ ob, expAudit, setExpAudit }) {
  return <div><Hdr title="Audit Trail" sub={`${ob?.clientName} (${ob?.id})`} right={<div style={{display:'flex',gap:8}}><Btn>Excel</Btn><Btn>PDF</Btn></div>}/><Cd style={{overflow:'hidden'}}><table style={{width:'100%',borderCollapse:'collapse',fontSize:13}}><thead><tr style={{borderBottom:`1px solid ${C.bd}`}}>{['Timestamp','User','Action','Task','Details'].map(h=><TH key={h}>{h}</TH>)}</tr></thead><tbody>{AUDIT.map((e,i)=><tr key={i} style={{borderBottom:`1px solid ${C.bd}`,cursor:'pointer'}} onClick={()=>setExpAudit(expAudit===i?null:i)}><TD mono style={{color:C.t2,fontSize:11,whiteSpace:'nowrap'}}>{e.ts}</TD><TD>{e.user}</TD><TD>{e.action}</TD><TD mono accent>{e.task}</TD><td style={{padding:'12px 16px',color:C.t2}}>{e.detail}{expAudit===i&&<div style={{marginTop:8,padding:12,background:C.el,borderRadius:6,fontSize:12}}>IP: 10.20.30.{40+i} · Session: SES-{900+i}</div>}</td></tr>)}</tbody></table></Cd></div>;
}
