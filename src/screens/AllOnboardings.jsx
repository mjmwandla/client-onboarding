import { C } from '../constants/colors';
import { OBS } from '../constants';
import { Hdr, Cd, Badge, PBar, TH, TD } from '../components';

export function AllOnboardings({ nav, obFilter, setObFilter }) {
  const f=obFilter,sF=setObFilter; const fl=f==='ALL'?OBS:OBS.filter(o=>f==='ACTIVE'?['IN_PROGRESS','PENDING_SIGNATURE','NEW'].includes(o.status):f==='COMPLETE'?o.status==='COMPLETE':o.status==='STOPPED');
  return <div><Hdr title="All Onboardings" sub="Segregated Funds — complete registry"/>
    <div style={{display:'flex',gap:8,marginBottom:20}}>{['ALL','ACTIVE','COMPLETE','STOPPED'].map(x=><button key={x} onClick={()=>sF(x)} style={{padding:'8px 16px',borderRadius:6,border:`1px solid ${f===x?C.ac:C.bd}`,background:f===x?'#1E3A5F':'transparent',color:f===x?C.ac:C.t2,fontSize:12,cursor:'pointer',fontWeight:f===x?600:400}}>{x==='ALL'?'All':x==='ACTIVE'?'Active':x==='COMPLETE'?'Complete':'Stopped'}</button>)}</div>
    <Cd style={{overflow:'hidden'}}><table style={{width:'100%',borderCollapse:'collapse',fontSize:13}}><thead><tr style={{borderBottom:`1px solid ${C.bd}`}}>{['ID','Client','AUM','Manager','Phase','Progress','Days','Risk','Status',''].map(h=><TH key={h}>{h}</TH>)}</tr></thead>
      <tbody>{fl.map(o=><tr key={o.id} style={{borderBottom:`1px solid ${C.bd}`}}>
        <TD mono accent>{o.id}</TD><TD style={{fontWeight:500}}>{o.clientName}</TD><TD style={{color:C.t2,fontSize:12}}>{o.aum}</TD><TD style={{color:C.t2}}>{o.clientDirector}</TD><TD style={{color:C.t2}}>Phase {o.phase}</TD>
        <td style={{padding:'12px 16px'}}><div style={{display:'flex',alignItems:'center',gap:6}}><PBar pct={o.progress}/><span style={{fontSize:11,color:C.t2,fontFamily:"'Courier New',monospace"}}>{o.progress}%</span></div></td>
        <TD mono style={{color:C.t2}}>{o.daysActive}</TD><td style={{padding:'12px 16px'}}><span style={{fontSize:11,color:o.risk==='High'?C.no:o.risk==='Medium'?C.wa:C.ok}}>{o.risk}</span></td>
        <td style={{padding:'12px 16px'}}><Badge s={o.status}/></td>
        <td style={{padding:'12px 16px'}}><span onClick={()=>{o.status==='COMPLETE'?nav('ONBOARDING_COMPLETE',o.id):o.status==='STOPPED'?nav('FICA_FAILED',o.id):nav('DASHBOARD',o.id)}} style={{color:C.ac,cursor:'pointer',fontSize:12}}>View →</span></td>
      </tr>)}</tbody></table></Cd></div>;
}
