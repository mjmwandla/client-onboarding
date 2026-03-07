import { C, CSS } from '../constants/colors';

export function Login({ nav }) {
  return (
    <div style={{width:'100vw',height:'100vh',background:C.bg,display:'flex',alignItems:'center',justifyContent:'center',backgroundImage:'repeating-linear-gradient(0deg,transparent,transparent 49px,rgba(255,255,255,.02) 49px,rgba(255,255,255,.02) 50px),repeating-linear-gradient(90deg,transparent,transparent 49px,rgba(255,255,255,.02) 49px,rgba(255,255,255,.02) 50px)'}}>
      <style>{CSS}</style>
      <div style={{background:C.sf,border:`1px solid ${C.bd}`,borderRadius:16,padding:48,width:420,textAlign:'center',animation:'slideUp .5s ease'}}>
        <div style={{fontFamily:"system-ui,sans-serif",fontSize:48,fontWeight:700,color:C.tx,letterSpacing:2}}>OMIG</div>
        <div style={{fontSize:11,color:C.t2,textTransform:'uppercase',letterSpacing:3,marginTop:4}}>Old Mutual Investment Group</div>
        <div style={{width:60,height:2,background:C.ac,margin:'20px auto'}}/>
        <div style={{fontSize:14,color:C.t2,marginBottom:32}}>Client Onboarding Portal — Segregated Funds</div>
        <div style={{textAlign:'left',marginBottom:16}}><label style={{fontSize:11,color:C.t2,textTransform:'uppercase',letterSpacing:1}}>Email</label><input defaultValue="thabo.nkosi@omig.co.za" style={{width:'100%',padding:'12px 16px',background:C.el,border:`1px solid ${C.bd}`,borderRadius:8,color:C.tx,fontSize:14,marginTop:6}}/></div>
        <div style={{textAlign:'left',marginBottom:24}}><label style={{fontSize:11,color:C.t2,textTransform:'uppercase',letterSpacing:1}}>Password</label><input type="password" defaultValue="password123" style={{width:'100%',padding:'12px 16px',background:C.el,border:`1px solid ${C.bd}`,borderRadius:8,color:C.tx,fontSize:14,marginTop:6}}/></div>
        <button onClick={()=>nav('DASHBOARD')} style={{width:'100%',padding:14,background:C.ac,color:'#fff',border:'none',borderRadius:8,fontSize:15,fontWeight:600,cursor:'pointer'}}>Sign In</button>
        <div style={{display:'flex',alignItems:'center',gap:8,justifyContent:'center',marginTop:20,color:C.t2,fontSize:12}}>🛡 Powered by Microsoft Azure AD</div>
        <div style={{fontSize:11,color:C.b2,marginTop:16}}>For access: ict-support@omig.co.za</div>
      </div>
    </div>
  );
}
