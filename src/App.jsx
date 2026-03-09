import { useState, useCallback } from "react";
import { C, getCSS } from "./constants/colors";
import { useTheme } from "./context/ThemeContext";
import { ROLES, ROLE_TASKS, ROLE_PHASES } from "./constants/roles";
import { OBS, NOTIFS, PHASES, FICA_DOCS_INIT } from "./constants/mockData";
import { Badge, PBar, Toast } from "./components";

import { Login } from "./screens/Login";
import { Dashboard } from "./screens/Dashboard";
import { AllOnboardings } from "./screens/AllOnboardings";
import { Notifications } from "./screens/Notifications";
import { NewOnboarding } from "./screens/NewOnboarding";
import { CrmConverter } from "./screens/CrmConverter";
import { MeetingScheduler } from "./screens/MeetingScheduler";
import { ResponsibilityBoard } from "./screens/ResponsibilityBoard";
import { MeetingDecision } from "./screens/MeetingDecision";
import { AddMeeting } from "./screens/AddMeeting";
import { TaskTracker } from "./screens/TaskTracker";
import { FicaChecklist } from "./screens/FicaChecklist";
import { DocRequest } from "./screens/DocRequest";
import { DocUpload } from "./screens/DocUpload";
import { FicaVerification } from "./screens/FicaVerification";
import { FicaDecision } from "./screens/FicaDecision";
import { FicaFailed } from "./screens/FicaFailed";
import { PortfolioSetup } from "./screens/PortfolioSetup";
import { SignoffChain } from "./screens/SignoffChain";
import { CuroHandoff } from "./screens/CuroHandoff";
import { ImaWorkspace } from "./screens/ImaWorkspace";
import { ImaReview } from "./screens/ImaReview";
import { ClientSignature } from "./screens/ClientSignature";
import { MandateRegister } from "./screens/MandateRegister";
import { DepositTracking } from "./screens/DepositTracking";
import { OnboardingComplete } from "./screens/OnboardingComplete";
import { AuditTrail } from "./screens/AuditTrail";
import { UserManagement } from "./screens/UserManagement";
import { ProcessConfig } from "./screens/ProcessConfig";

export default function OMIGPortal() {
  const [scr, setScr] = useState('LOGIN');
  const [role, setRole] = useState('ICM_COO');
  const [toast, setToast] = useState(null);
  const [selOB, setSelOB] = useState('OB-2024-0047');
  const [showRP, setShowRP] = useState(false);
  const [showND, setShowND] = useState(false);
  const [ficaDocs, setFicaDocs] = useState(FICA_DOCS_INIT);
  const [expAudit, setExpAudit] = useState(null);
  const [signoffs, setSignoffs] = useState({ clo:true, manager:true, comp_off:true, crims:true, data:false, it:false, fin:false, risk:false });
  const [meetingChecks, setMeetingChecks] = useState({fica:true,portfolio:true,fees:true,offshore:false,derivatives:false});
  const [imaReviews, setImaReviews] = useState({coo:'APPROVED',pm:'PENDING',legal:'NOT_STARTED'});
  const [kanbanTasks, setKanbanTasks] = useState({
    icm:[{t:'Coordinate FICA',due:'25 Jan',p:'Priya G.',done:true},{t:'IMA Distribution',due:'28 Feb',p:'Priya G.',done:false}],
    legal:[{t:'FICA Requirements',due:'22 Jan',p:'Yvette D.',done:true},{t:'Draft IMA',due:'15 Feb',p:'Sarah vdB',done:false}],
    ops:[{t:'Portfolio Setup',due:'10 Feb',p:'Nomvula K.',done:false},{t:'Bank Accounts',due:'12 Feb',p:'Nomvula K.',done:false}],
    comp:[{t:'Sign-off Review',due:'12 Feb',p:'Johan V.',done:false}],
  });
  const [obFilter, setObFilter] = useState('ALL');
  const [crmModal, setCrmModal] = useState(false);
  const [uploadState, setUploadState] = useState({fatca:false,pfa:true});
  const [curDoc, setCurDoc] = useState('d9');
  const [portfolioTab, setPortfolioTab] = useState(0);
  const [imaSection, setImaSection] = useState(3);
  const [configTab, setConfigTab] = useState(0);
  const [showCS, setShowCS] = useState(false);
  const { mode, toggle } = useTheme();

  const cr = ROLES.find(r=>r.id===role);
  const ob = OBS.find(o=>o.id===selOB);
  const myTasks = ROLE_TASKS[role]||[];
  const myPhases = ROLE_PHASES[role]||[1,2,3,4,5];
  const tt = (msg,type='success')=>setToast({msg,type});
  const nav = useCallback((s,o)=>{setScr(s);if(o)setSelOB(o);setShowND(false);setShowRP(false);setShowCS(false)},[]);

  if(scr==='LOGIN') return <Login nav={nav}/>;

  const taskItems = [
    ...(myTasks.includes(17)?[{u:'OVERDUE',t:'Task 17: FICA Verification',cl:'Sentinel PF',d:'5 days ago'}]:[]),
    ...(myTasks.includes(40)?[{u:'OVERDUE',t:'Task 40: Review IMA',cl:'Sentinel PF',d:'3 days ago'}]:[]),
    ...(myTasks.includes(50)?[{u:'TODAY',t:'Task 50: Receive Final IMA',cl:'Momentum Retirement',d:'Due today'}]:[]),
    ...(myTasks.includes(5)?[{u:'UPCOMING',t:'Task 5: Agree responsibilities',cl:'GEPF Sub-portfolio',d:'In 2 days'}]:[]),
    ...(myTasks.includes(13)?[{u:'TODAY',t:'Task 13: Request documents',cl:'Transnet RF',d:'Due today'}]:[]),
    ...(myTasks.includes(27)?[{u:'UPCOMING',t:'Task 27: Portfolio on CRM',cl:'Transnet RF',d:'In 4 days'}]:[]),
    ...(myTasks.includes(42)?[{u:'UPCOMING',t:'Task 42: Review IMA',cl:'Sentinel PF',d:'In 5 days'}]:[]),
    ...(myTasks.includes(33)?[{u:'UPCOMING',t:'Task 33: Set up portfolio',cl:'Transnet RF',d:'In 6 days'}]:[]),
    ...(myTasks.includes(38)?[{u:'TODAY',t:'Task 38: Draft IMA',cl:'Sentinel PF',d:'Due today'}]:[]),
    ...(myTasks.includes(11)?[{u:'UPCOMING',t:'Task 11: Check FICA reqs',cl:'GEPF',d:'In 3 days'}]:[]),
  ].slice(0,6);

  const navG = [
    {label:'OVERVIEW',items:[{k:'DASHBOARD',l:'Dashboard',i:'◎'},{k:'ALL_ONBOARDINGS',l:'All Onboardings',i:'▤'},{k:'NOTIFICATIONS',l:'Notifications',i:'⚡',badge:NOTIFS.filter(n=>!n.read).length}]},
    ...(myPhases.includes(1)?[{label:'PHASE 1 · INITIATION',items:[{k:'NEW_ONBOARDING',l:'New Onboarding',i:'＋'},{k:'CRM_CONVERTER',l:'CRM Converter',i:'⟳'},{k:'MEETING_SCHEDULER',l:'Meeting Scheduler',i:'📅'}]}]:[]),
    ...(myPhases.includes(2)?[{label:'PHASE 2 · REQUIREMENTS',items:[{k:'RESPONSIBILITY_BOARD',l:'Responsibility Board',i:'▥'},{k:'MEETING_DECISION',l:'Meeting Decision',i:'◆'},{k:'TASK_TRACKER',l:'Team Progress',i:'📊'}]}]:[]),
    ...(myPhases.includes(3)?[{label:'PHASE 3 · FICA / KYC',items:[{k:'FICA_CHECKLIST',l:'FICA Checklist',i:'☑'},{k:'DOC_REQUEST',l:'Document Request',i:'✉'},{k:'DOC_UPLOAD',l:'Document Upload',i:'↑'},{k:'FICA_VERIFICATION',l:'Verification',i:'🔍'},{k:'FICA_DECISION',l:'FICA Decision',i:'⊘'}]}]:[]),
    ...(myPhases.includes(4)?[{label:'PHASE 4 · PORTFOLIO',items:[{k:'PORTFOLIO_SETUP',l:'Portfolio Setup',i:'⊞'},{k:'SIGNOFF_CHAIN',l:'Sign-off Chain',i:'✓'},{k:'CURO_HANDOFF',l:'Curo Handoff',i:'→'}]}]:[]),
    ...(myPhases.includes(5)?[{label:'PHASE 5 · IMA',items:[{k:'IMA_WORKSPACE',l:'IMA Workspace',i:'⊡'},{k:'IMA_REVIEW',l:'IMA Review',i:'⊙'},{k:'CLIENT_SIGNATURE',l:'Client Signature',i:'✍'},{k:'MANDATE_REGISTER',l:'Mandate Register',i:'📋'},{k:'DEPOSIT_TRACKING',l:'Deposit Tracking',i:'₿'}]}]:[]),
    {label:'ADMIN',items:[{k:'AUDIT_TRAIL',l:'Audit Trail',i:'⊙'},{k:'USER_MANAGEMENT',l:'User Management',i:'👤'},{k:'PROCESS_CONFIG',l:'Process Config',i:'⚙'}]},
  ];

  const SCREENS = {
    DASHBOARD: <Dashboard nav={nav} setSelOB={setSelOB} ob={ob} taskItems={taskItems}/>,
    ALL_ONBOARDINGS: <AllOnboardings nav={nav} obFilter={obFilter} setObFilter={setObFilter}/>,
    NOTIFICATIONS: <Notifications/>,
    NEW_ONBOARDING: <NewOnboarding nav={nav} tt={tt}/>,
    CRM_CONVERTER: <CrmConverter nav={nav} tt={tt} crmModal={crmModal} setCrmModal={setCrmModal}/>,
    MEETING_SCHEDULER: <MeetingScheduler nav={nav} tt={tt}/>,
    RESPONSIBILITY_BOARD: <ResponsibilityBoard nav={nav} tt={tt} kanbanTasks={kanbanTasks} setKanbanTasks={setKanbanTasks}/>,
    MEETING_DECISION: <MeetingDecision nav={nav} tt={tt} ob={ob} meetingChecks={meetingChecks} setMeetingChecks={setMeetingChecks}/>,
    ADD_MEETING: <AddMeeting nav={nav} tt={tt} meetingChecks={meetingChecks} setMeetingChecks={setMeetingChecks}/>,
    TASK_TRACKER: <TaskTracker nav={nav} tt={tt} ob={ob}/>,
    FICA_CHECKLIST: <FicaChecklist ficaDocs={ficaDocs} ob={ob} nav={nav} tt={tt}/>,
    DOC_REQUEST: <DocRequest ficaDocs={ficaDocs} ob={ob} nav={nav} tt={tt}/>,
    DOC_UPLOAD: <DocUpload uploadState={uploadState} setUploadState={setUploadState} ob={ob} nav={nav} tt={tt}/>,
    FICA_VERIFICATION: <FicaVerification ficaDocs={ficaDocs} setFicaDocs={setFicaDocs} curDoc={curDoc} setCurDoc={setCurDoc} ob={ob} nav={nav} tt={tt}/>,
    FICA_DECISION: <FicaDecision ficaDocs={ficaDocs} ob={ob} nav={nav} tt={tt}/>,
    FICA_FAILED: <FicaFailed ob={ob} nav={nav}/>,
    PORTFOLIO_SETUP: <PortfolioSetup portfolioTab={portfolioTab} setPortfolioTab={setPortfolioTab} nav={nav} tt={tt}/>,
    SIGNOFF_CHAIN: <SignoffChain ob={ob} signoffs={signoffs} setSignoffs={setSignoffs} nav={nav} tt={tt}/>,
    CURO_HANDOFF: <CuroHandoff ob={ob} tt={tt}/>,
    IMA_WORKSPACE: <ImaWorkspace imaSection={imaSection} setImaSection={setImaSection} nav={nav} tt={tt}/>,
    IMA_REVIEW: <ImaReview cr={cr} imaReviews={imaReviews} setImaReviews={setImaReviews} nav={nav} tt={tt}/>,
    CLIENT_SIGNATURE: <ClientSignature ob={ob} tt={tt}/>,
    MANDATE_REGISTER: <MandateRegister tt={tt}/>,
    DEPOSIT_TRACKING: <DepositTracking ob={ob} tt={tt}/>,
    ONBOARDING_COMPLETE: <OnboardingComplete nav={nav}/>,
    AUDIT_TRAIL: <AuditTrail ob={ob} expAudit={expAudit} setExpAudit={setExpAudit}/>,
    USER_MANAGEMENT: <UserManagement/>,
    PROCESS_CONFIG: <ProcessConfig configTab={configTab} setConfigTab={setConfigTab} tt={tt}/>,
  };

  return (
    <div style={{display:'flex',width:'100vw',height:'100vh',background:C.bg,overflow:'hidden',backgroundImage:'repeating-linear-gradient(0deg,transparent,transparent 49px,'+C.grid+' 49px,'+C.grid+' 50px),repeating-linear-gradient(90deg,transparent,transparent 49px,'+C.grid+' 49px,'+C.grid+' 50px)'}}>
      <style>{getCSS()}</style>
      <div style={{width:248,background:C.sf,borderRight:`1px solid ${C.bd}`,display:'flex',flexDirection:'column',flexShrink:0,overflow:'hidden'}}>
        <div style={{padding:'20px 20px 16px',borderBottom:`1px solid ${C.bd}`}}><div style={{fontFamily:"'Cormorant Garamond',Garamond,serif",fontSize:22,fontWeight:700,color:C.ab,letterSpacing:2}}>OMIG</div><div style={{fontSize:10,color:C.t2,textTransform:'uppercase',letterSpacing:2,marginTop:2}}>Onboarding Portal</div></div>
        <div style={{padding:'12px 16px',borderBottom:`1px solid ${C.bd}`,position:'relative'}}>
          <div onClick={()=>setShowRP(!showRP)} style={{display:'flex',alignItems:'center',gap:10,cursor:'pointer',padding:'8px 10px',background:C.el,borderRadius:3}}>
            <div style={{width:32,height:32,borderRadius:'50%',background:C.ac,display:'flex',alignItems:'center',justifyContent:'center',fontSize:11,fontWeight:700,color:'#fff'}}>{cr?.initials}</div>
            <div style={{flex:1,minWidth:0}}><div style={{fontSize:12,color:C.tx,fontWeight:500,overflow:'hidden',textOverflow:'ellipsis',whiteSpace:'nowrap'}}>{cr?.name}</div><div style={{fontSize:10,color:C.t2,overflow:'hidden',textOverflow:'ellipsis',whiteSpace:'nowrap'}}>{cr?.title}</div></div>
            <span style={{color:C.t2,fontSize:10}}>▼</span>
          </div>
          {showRP&&<div style={{position:'absolute',left:16,right:16,top:'100%',background:C.el,border:`1px solid ${C.bd}`,borderRadius:3,zIndex:99,maxHeight:300,overflow:'auto',boxShadow:'0 8px 32px rgba(0,0,0,.4)'}}>
            {ROLES.map(r=><div key={r.id} onClick={()=>{setRole(r.id);setShowRP(false);setScr('DASHBOARD')}} style={{padding:'10px 14px',cursor:'pointer',borderBottom:`1px solid ${C.bd}`,background:r.id===role?C.ad:'transparent'}} onMouseOver={e=>{if(r.id!==role)e.currentTarget.style.background=C.sf}} onMouseOut={e=>{if(r.id!==role)e.currentTarget.style.background='transparent'}}><div style={{fontSize:12,color:C.tx,fontWeight:500}}>{r.name}</div><div style={{fontSize:10,color:C.t2}}>{r.title}</div></div>)}
          </div>}
        </div>
        <div style={{flex:1,overflow:'auto',padding:'8px 0'}}>
          {navG.map(g=><div key={g.label} style={{marginBottom:4}}>
            <div style={{padding:'10px 20px 4px',fontSize:9,color:C.t2,textTransform:'uppercase',letterSpacing:1.5,fontWeight:600}}>{g.label}</div>
            {g.items.map(it=><div key={it.k} onClick={()=>nav(it.k)} style={{padding:'8px 20px',cursor:'pointer',display:'flex',alignItems:'center',gap:10,borderLeft:scr===it.k?`2px solid ${C.ac}`:'2px solid transparent',background:scr===it.k?C.ad:'transparent'}} onMouseOver={e=>{if(scr!==it.k)e.currentTarget.style.background=C.hover}} onMouseOut={e=>{if(scr!==it.k)e.currentTarget.style.background='transparent'}}><span style={{fontSize:12,width:18,textAlign:'center',color:scr===it.k?C.ac:C.t2}}>{it.i}</span><span style={{fontSize:12,color:scr===it.k?C.ac:C.t2,fontWeight:scr===it.k?600:400}}>{it.l}</span>{it.badge>0&&<span style={{marginLeft:'auto',background:C.no,color:'#fff',fontSize:10,fontWeight:600,padding:'1px 6px',borderRadius:10}}>{it.badge}</span>}</div>)}
          </div>)}
        </div>
        <div style={{padding:'12px 16px',borderTop:`1px solid ${C.bd}`}}><button onClick={()=>setScr('LOGIN')} style={{background:'none',border:'none',color:C.t2,fontSize:11,cursor:'pointer'}}>Sign Out</button></div>
      </div>
      <div style={{flex:1,display:'flex',flexDirection:'column',overflow:'hidden'}}>
        <div style={{padding:'12px 24px',borderBottom:`1px solid ${C.bd}`,display:'flex',alignItems:'center',gap:16,background:C.sf,flexShrink:0}}>
          <div style={{width:240,position:'relative'}}>
            <div onClick={()=>{setShowCS(!showCS);setShowND(false);setShowRP(false)}} style={{cursor:'pointer',padding:'6px 10px',background:C.el,borderRadius:3,border:`1px solid ${showCS?C.ac:C.bd}`}}>
              <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',fontSize:11,color:C.tx,marginBottom:4}}><span style={{fontWeight:500}}>{ob?.clientName}</span><span style={{color:C.t2,fontSize:10}}>▼</span></div>
              <div style={{display:'flex',alignItems:'center',gap:8}}><div style={{flex:1}}><PBar pct={ob?.progress||0} h={4}/></div><span style={{fontSize:10,color:C.t2,fontFamily:"'Source Code Pro','Fira Code',monospace"}}>{ob?.progress}%</span></div>
            </div>
            {showCS&&<div style={{position:'absolute',left:0,top:'100%',width:320,marginTop:4,background:C.el,border:`1px solid ${C.bd}`,borderRadius:3,zIndex:99,maxHeight:360,overflow:'auto',boxShadow:'0 8px 32px rgba(0,0,0,.4)'}}>
              <div style={{padding:'10px 14px',borderBottom:`1px solid ${C.bd}`,fontSize:11,color:C.t2,fontWeight:600,textTransform:'uppercase',letterSpacing:1}}>Switch Client</div>
              {OBS.map(o=><div key={o.id} onClick={()=>{setSelOB(o.id);setShowCS(false)}} style={{padding:'10px 14px',cursor:'pointer',borderBottom:`1px solid ${C.bd}`,background:o.id===selOB?C.ad:'transparent'}} onMouseOver={e=>{if(o.id!==selOB)e.currentTarget.style.background=C.hover}} onMouseOut={e=>{if(o.id!==selOB)e.currentTarget.style.background='transparent'}}>
                <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:4}}><span style={{fontSize:12,color:C.tx,fontWeight:o.id===selOB?600:400}}>{o.clientName}</span><Badge s={o.status}/></div>
                <div style={{display:'flex',alignItems:'center',gap:8}}><div style={{flex:1}}><PBar pct={o.progress} h={3}/></div><span style={{fontSize:10,color:C.t2,fontFamily:"'Source Code Pro','Fira Code',monospace"}}>{o.progress}%</span></div>
              </div>)}
            </div>}
          </div>
          <div style={{flex:1}}/>
          <input placeholder="Search clients, tasks..." style={{width:260,padding:'8px 14px',background:C.el,border:`1px solid ${C.bd}`,borderRadius:2,color:C.tx,fontSize:12}}/>
          <div style={{position:'relative'}}><button onClick={()=>setShowND(!showND)} style={{background:'none',border:'none',cursor:'pointer',fontSize:16,position:'relative',padding:4}}>🔔<span style={{position:'absolute',top:-2,right:-4,background:C.no,color:'#fff',fontSize:9,fontWeight:700,padding:'1px 4px',borderRadius:10}}>3</span></button>
            {showND&&<div style={{position:'absolute',right:0,top:'100%',width:340,background:C.el,border:`1px solid ${C.bd}`,borderRadius:3,zIndex:99,maxHeight:400,overflow:'auto',boxShadow:'0 8px 32px rgba(0,0,0,.4)',marginTop:8}}><div style={{padding:'12px 16px',borderBottom:`1px solid ${C.bd}`,display:'flex',justifyContent:'space-between'}}><span style={{fontSize:13,fontWeight:600,color:C.tx}}>Notifications</span><button onClick={()=>nav('NOTIFICATIONS')} style={{background:'none',border:'none',color:C.ac,fontSize:12,cursor:'pointer'}}>All</button></div>{NOTIFS.slice(0,4).map(n=><div key={n.id} style={{padding:'10px 16px',borderBottom:`1px solid ${C.bd}`,fontSize:12}}><div style={{color:C.tx}}>{n.text}</div><div style={{color:C.t2,fontSize:11,marginTop:2}}>{n.client} · {n.time}</div></div>)}</div>}
          </div>
          <button onClick={toggle} style={{background:'none',border:`1px solid ${C.bd}`,borderRadius:3,padding:'4px 10px',cursor:'pointer',fontSize:13,color:C.t2,display:'flex',alignItems:'center',gap:6}} title={mode==='dark'?'Switch to light':'Switch to dark'}>{mode==='dark'?'\u2600':'\u263E'}<span style={{fontSize:11}}>{mode==='dark'?'Light':'Dark'}</span></button>
          <span style={{fontSize:12,color:C.t2}}>5 March 2026</span>
        </div>
        <div style={{padding:'8px 24px',fontSize:11,color:C.t2,borderBottom:`1px solid ${C.bd}`,background:C.bg}}><span style={{cursor:'pointer',color:C.ac}} onClick={()=>nav('DASHBOARD')}>Dashboard</span><span style={{margin:'0 8px'}}>›</span><span>{scr.replace(/_/g,' ').toLowerCase().replace(/\b\w/g,c=>c.toUpperCase())}</span></div>
        <div style={{flex:1,overflow:'auto',padding:24}}>{SCREENS[scr] || SCREENS.DASHBOARD}</div>
      </div>
      {toast&&<Toast msg={toast.msg} type={toast.type} onClose={()=>setToast(null)}/>}
    </div>
  );
}
