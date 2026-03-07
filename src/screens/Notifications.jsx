import { C } from '../constants/colors';
import { NOTIFS } from '../constants';
import { Hdr, Cd } from '../components';

export function Notifications() {
  return <div><Hdr title="Notifications"/><Cd style={{overflow:'hidden'}}>{NOTIFS.map((n,i)=>{const ic=n.type==='OVERDUE'?'🔴':n.type==='ACTION'?'🔵':n.type==='REMINDER'?'🟡':'✅';return <div key={n.id} style={{padding:'16px 20px',borderBottom:i<NOTIFS.length-1?`1px solid ${C.bd}`:'none',borderLeft:`3px solid ${n.type==='OVERDUE'?C.no:n.type==='ACTION'?C.ac:n.type==='REMINDER'?C.wa:C.ok}`,background:!n.read?'rgba(59,130,246,.05)':'transparent'}}><div style={{display:'flex',alignItems:'flex-start',gap:12}}><span style={{fontSize:14,marginTop:2}}>{ic}</span><div style={{flex:1}}><div style={{display:'flex',justifyContent:'space-between'}}><span style={{fontSize:13,color:C.tx,fontWeight:n.read?400:600}}>{n.text}</span><span style={{fontSize:11,color:C.t2,whiteSpace:'nowrap',marginLeft:16}}>{n.time}</span></div><div style={{fontSize:12,color:C.t2,marginTop:2}}>{n.client}{n.detail&&` · ${n.detail}`}</div></div></div></div>})}</Cd></div>;
}
