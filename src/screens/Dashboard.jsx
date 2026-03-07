import { C } from '../constants/colors';
import { OBS, PHASES } from '../constants';
import { KPI, Cd, Btn, PBar, Badge, TH, TD } from '../components';

export function Dashboard({ nav, setSelOB, ob, taskItems }) {
  return (
    <div style={{display:'flex',gap:24}}>
      <div style={{flex:1,minWidth:0}}>
        <div style={{display:'flex',gap:16,marginBottom:24,flexWrap:'wrap'}}>
          <KPI icon="◎" value={OBS.filter(o=>!['COMPLETE','STOPPED'].includes(o.status)).length} label="Active Onboardings" trend="↑ 2 this month"/>
          <KPI icon="⏱" value="47" label="Avg Days to Complete" trend="↓ 5 vs last qtr"/>
          <KPI icon="⚠" value="2" label="Tasks Overdue" trend="↑ 1 from yesterday"/>
          <KPI icon="✓" value="94%" label="FICA Pass Rate" trend="Stable"/>
        </div>
        <Cd style={{overflow:'hidden',marginBottom:24}}>
          <div style={{padding:'16px 20px',borderBottom:`1px solid ${C.bd}`,display:'flex',justifyContent:'space-between',alignItems:'center'}}><span style={{fontFamily:"system-ui,sans-serif",fontSize:16,color:C.tx}}>Active Onboardings</span><Btn onClick={()=>nav('ALL_ONBOARDINGS')}>View All →</Btn></div>
          <table style={{width:'100%',borderCollapse:'collapse',fontSize:13}}><thead><tr style={{borderBottom:`1px solid ${C.bd}`}}>{['Client','Phase','Progress','Days','Status',''].map(h=><TH key={h}>{h}</TH>)}</tr></thead>
            <tbody>{OBS.filter(o=>o.status!=='STOPPED').slice(0,5).map(o=><tr key={o.id} style={{borderBottom:`1px solid ${C.bd}`,cursor:'pointer'}} onClick={()=>{setSelOB(o.id);if(o.status==='COMPLETE')nav('ONBOARDING_COMPLETE',o.id)}}>
              <TD style={{fontWeight:500}}>{o.clientName}</TD><TD style={{color:C.t2}}>Phase {o.phase} · {PHASES[o.phase-1]?.name}</TD>
              <td style={{padding:'12px 16px',width:140}}><div style={{display:'flex',alignItems:'center',gap:8}}><PBar pct={o.progress}/><span style={{fontSize:11,color:C.t2,fontFamily:"'Courier New',monospace",minWidth:32}}>{o.progress}%</span></div></td>
              <TD mono style={{color:C.t2}}>{o.daysActive}</TD><td style={{padding:'12px 16px'}}><Badge s={o.status}/></td>
              <td style={{padding:'12px 16px'}}><span onClick={e=>{e.stopPropagation();nav('TASK_TRACKER',o.id)}} style={{color:C.ac,cursor:'pointer',fontSize:12}}>View →</span></td>
            </tr>)}</tbody></table>
        </Cd>
        <Cd style={{padding:20}}>
          <div style={{fontFamily:"system-ui,sans-serif",fontSize:14,color:C.tx,marginBottom:16}}>Phase Progress — {ob?.clientName}</div>
          <div style={{display:'flex',gap:4}}>{PHASES.map(p=>{const pp=ob?(p.num<ob.phase?100:p.num===ob.phase?Math.min(90,((ob.currentTask-p.tasks[0])/p.tasks.length)*100):0):0;const ia=p.num===ob?.phase;
            return <div key={p.num} style={{flex:1}}><div style={{display:'flex',alignItems:'center',gap:8,marginBottom:8}}><div style={{width:28,height:28,borderRadius:'50%',display:'flex',alignItems:'center',justifyContent:'center',fontSize:12,fontWeight:600,fontFamily:"'Courier New',monospace",background:pp===100?C.ok:ia?C.ac:C.bd,color:pp===100||ia?'#fff':C.t2}}>{pp===100?'✓':p.num}</div><span style={{fontSize:11,color:ia?C.tx:C.t2,fontWeight:ia?600:400}}>{p.name}</span></div><PBar pct={pp} h={4} color={pp===100?C.ok:ia?C.ac:C.bd}/></div>})}</div>
        </Cd>
      </div>
      <div style={{width:320,flexShrink:0}}><Cd style={{padding:20,position:'sticky',top:0}}>
        <div style={{fontFamily:"system-ui,sans-serif",fontSize:16,color:C.tx,marginBottom:16}}>My Tasks</div>
        {taskItems.length===0&&<div style={{color:C.t2,fontSize:13,padding:20,textAlign:'center'}}>No tasks assigned</div>}
        {taskItems.map((ti,i)=><div key={i} style={{padding:'14px 0',borderBottom:i<taskItems.length-1?`1px solid ${C.bd}`:'none'}}>
          <div style={{display:'flex',alignItems:'center',gap:8,marginBottom:6}}><span style={{width:8,height:8,borderRadius:'50%',background:ti.u==='OVERDUE'?C.no:ti.u==='TODAY'?C.wa:C.b2,...(ti.u==='OVERDUE'&&{animation:'pulse 2s infinite'})}}/><span style={{fontSize:10,color:ti.u==='OVERDUE'?C.no:ti.u==='TODAY'?C.wa:C.t2,textTransform:'uppercase',letterSpacing:1,fontWeight:600}}>{ti.u}</span></div>
          <div style={{fontSize:13,color:C.tx,fontWeight:500,marginBottom:4}}>{ti.t}</div>
          <div style={{fontSize:12,color:C.t2}}>{ti.cl} · {ti.d}</div>
        </div>)}
      </Cd></div>
    </div>
  );
}
