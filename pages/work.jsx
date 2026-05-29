// ============================================================
// WORK
// ============================================================

// ── per-project custom visuals ──────────────────────────────
function VisualLuxe() { // e-commerce product page
  return (
    <div style={{position:"absolute",inset:0,background:"#faf7f4",fontFamily:"var(--grotesk)"}}>
      {/* top nav */}
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"10px 16px",borderBottom:"1px solid #ede8e1"}}>
        <div style={{fontFamily:"var(--display)",fontWeight:700,fontSize:11,letterSpacing:"0.12em",textTransform:"uppercase",color:"#1a1209"}}>LUXE</div>
        <div style={{display:"flex",gap:10}}>{["Women","Men","New"].map(l=><div key={l} style={{fontSize:8,color:"#9a8a76",letterSpacing:"0.08em"}}>{l}</div>)}</div>
        <div style={{display:"flex",gap:6}}>{["🔍","♡","⊕"].map((i,k)=><div key={k} style={{fontSize:10,color:"#9a8a76"}}>{i}</div>)}</div>
      </div>
      {/* product layout */}
      <div style={{display:"grid",gridTemplateColumns:"1.1fr 1fr",gap:10,padding:"12px 14px",height:"calc(100% - 37px)"}}>
        {/* product image placeholder */}
        <div style={{background:"linear-gradient(160deg,#ede8e0,#d8ccba)",borderRadius:8,position:"relative",overflow:"hidden"}}>
          {/* clothing silhouette */}
          <svg viewBox="0 0 100 130" style={{position:"absolute",bottom:0,left:"50%",transform:"translateX(-50%)",width:"70%",opacity:0.18}}>
            <path d="M35 10 Q50 0 65 10 L80 30 L65 35 L65 130 L35 130 L35 35 L20 30 Z" fill="#5a4030"/>
          </svg>
          <div style={{position:"absolute",top:8,left:8,background:"#b8682a",color:"#fff",fontSize:7,fontFamily:"var(--mono)",letterSpacing:"0.1em",padding:"3px 7px",borderRadius:999}}>NEW IN</div>
          {/* color swatches */}
          <div style={{position:"absolute",bottom:8,left:8,display:"flex",gap:4}}>
            {["#d4a478","#1a1209","#e8e0d4","#8b6f4e"].map((c,k)=><div key={k} style={{width:10,height:10,borderRadius:"50%",background:c,border:"1.5px solid rgba(255,255,255,0.6)"}}></div>)}
          </div>
        </div>
        {/* product info */}
        <div style={{display:"flex",flexDirection:"column",gap:7,paddingTop:4}}>
          <div style={{fontSize:7,color:"#9a8a76",letterSpacing:"0.1em",textTransform:"uppercase"}}>Maison Edit</div>
          <div style={{fontFamily:"var(--display)",fontSize:13,fontWeight:700,color:"#1a1209",letterSpacing:"-0.02em",lineHeight:1.2}}>Wool Midi<br/>Overcoat</div>
          <div style={{fontFamily:"var(--display)",fontSize:15,fontWeight:700,color:"#b8682a"}}>€ 480</div>
          {/* size selector */}
          <div style={{display:"flex",gap:4,marginTop:2}}>
            {["XS","S","M","L"].map((s,k)=>(
              <div key={k} style={{width:18,height:18,border:`1px solid ${k===1?"#1a1209":"#d4ccc2"}`,borderRadius:4,display:"flex",alignItems:"center",justifyContent:"center",fontSize:7,color:k===1?"#1a1209":"#9a8a76",background:k===1?"transparent":"transparent",fontWeight:k===1?700:400}}>{s}</div>
            ))}
          </div>
          {/* add to cart */}
          <div style={{background:"#1a1209",color:"#faf7f4",borderRadius:6,padding:"7px 10px",fontSize:8,fontWeight:600,letterSpacing:"0.06em",textAlign:"center",marginTop:4}}>Add to cart</div>
          <div style={{border:"1px solid #d4ccc2",borderRadius:6,padding:"6px 10px",fontSize:8,color:"#5a4030",textAlign:"center"}}>Save to wishlist</div>
          {/* product detail lines */}
          <div style={{marginTop:4,display:"flex",flexDirection:"column",gap:3,borderTop:"1px solid #ede8e1",paddingTop:6}}>
            {["100% Merino wool","Free returns","Ships in 2–3 days"].map((t,k)=>(
              <div key={k} style={{display:"flex",alignItems:"center",gap:4}}>
                <div style={{width:4,height:4,borderRadius:"50%",background:"#b8682a",flexShrink:0}}></div>
                <div style={{fontSize:7,color:"#7a6a56"}}>{t}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function VisualTechFlow() { // SaaS analytics dashboard
  const sparkData = [28,42,38,55,47,62,58,74,69,82,78,91];
  const maxS = Math.max(...sparkData);
  const pts = sparkData.map((v,i)=>`${(i/(sparkData.length-1))*100},${100-(v/maxS)*100}`).join(" ");
  return (
    <div style={{position:"absolute",inset:0,background:"#0d1424",fontFamily:"var(--grotesk)"}}>
      {/* sidebar */}
      <div style={{position:"absolute",left:0,top:0,bottom:0,width:42,background:"#080e1a",borderRight:"1px solid rgba(255,255,255,0.06)",display:"flex",flexDirection:"column",alignItems:"center",paddingTop:12,gap:10}}>
        <div style={{width:20,height:20,borderRadius:5,background:"#1245e8",display:"flex",alignItems:"center",justifyContent:"center"}}>
          <div style={{width:10,height:10,borderRadius:2,background:"#d6ff3d"}}></div>
        </div>
        {["▦","⊞","◎","⚙"].map((ic,k)=>(
          <div key={k} style={{width:28,height:28,borderRadius:6,background:k===0?"rgba(18,69,232,0.2)":"transparent",display:"flex",alignItems:"center",justifyContent:"center",fontSize:11,color:k===0?"#6b94ff":"rgba(255,255,255,0.25)",cursor:"pointer"}}>{ic}</div>
        ))}
      </div>
      {/* main content */}
      <div style={{position:"absolute",left:42,right:0,top:0,bottom:0,padding:"12px 14px",display:"flex",flexDirection:"column",gap:10}}>
        {/* header row */}
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
          <div>
            <div style={{fontSize:11,fontWeight:700,color:"#fff",fontFamily:"var(--display)",letterSpacing:"-0.02em"}}>Analytics</div>
            <div style={{fontSize:7,color:"rgba(255,255,255,0.35)",marginTop:1}}>Last 30 days</div>
          </div>
          <div style={{background:"rgba(255,255,255,0.06)",border:"1px solid rgba(255,255,255,0.1)",borderRadius:6,padding:"4px 8px",fontSize:7,color:"rgba(255,255,255,0.5)"}}>Oct 2024 ▾</div>
        </div>
        {/* kpi cards */}
        <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:7}}>
          {[["MAU","12,480","+18%","#d6ff3d"],["MRR","$48.2K","+24%","#4ade80"],["Churn","2.1%","−0.4%","#60a5fa"]].map(([l,v,d,c],k)=>(
            <div key={k} style={{background:"rgba(255,255,255,0.05)",border:"1px solid rgba(255,255,255,0.08)",borderRadius:8,padding:"8px 10px"}}>
              <div style={{fontSize:7,color:"rgba(255,255,255,0.4)",letterSpacing:"0.08em",textTransform:"uppercase"}}>{l}</div>
              <div style={{fontFamily:"var(--display)",fontSize:14,fontWeight:700,color:"#fff",letterSpacing:"-0.03em",marginTop:3,lineHeight:1}}>{v}</div>
              <div style={{fontSize:7,color:c,marginTop:3,fontWeight:600}}>{d}</div>
            </div>
          ))}
        </div>
        {/* sparkline chart */}
        <div style={{background:"rgba(255,255,255,0.04)",border:"1px solid rgba(255,255,255,0.07)",borderRadius:8,padding:"10px 12px",flex:1,position:"relative",overflow:"hidden"}}>
          <div style={{fontSize:8,color:"rgba(255,255,255,0.4)",marginBottom:6}}>Active users · daily</div>
          <svg viewBox="0 0 100 60" preserveAspectRatio="none" style={{width:"100%",height:"55px"}}>
            <defs>
              <linearGradient id="tg" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#1245e8" stopOpacity="0.4"/>
                <stop offset="100%" stopColor="#1245e8" stopOpacity="0"/>
              </linearGradient>
            </defs>
            <polygon points={pts+" 100,100 0,100"} fill="url(#tg)"/>
            <polyline points={pts} fill="none" stroke="#6b94ff" strokeWidth="1.5"/>
            {/* latest dot */}
            <circle cx="100" cy={`${100-(sparkData[sparkData.length-1]/maxS)*100}`} r="2.5" fill="#d6ff3d"/>
          </svg>
        </div>
        {/* user table rows */}
        <div style={{display:"flex",flexDirection:"column",gap:0,background:"rgba(255,255,255,0.04)",borderRadius:8,overflow:"hidden",border:"1px solid rgba(255,255,255,0.07)"}}>
          <div style={{display:"grid",gridTemplateColumns:"1fr 60px 50px",gap:8,padding:"5px 10px",borderBottom:"1px solid rgba(255,255,255,0.06)"}}>
            {["User","Plan","Status"].map(h=><div key={h} style={{fontSize:6,color:"rgba(255,255,255,0.3)",letterSpacing:"0.1em",textTransform:"uppercase"}}>{h}</div>)}
          </div>
          {[["A. Fischer","Pro","●"],["R. Okafor","Team","●"],["J. Kim","Starter","○"]].map(([u,p,s],k)=>(
            <div key={k} style={{display:"grid",gridTemplateColumns:"1fr 60px 50px",gap:8,padding:"5px 10px",borderBottom:k<2?"1px solid rgba(255,255,255,0.04)":"none",alignItems:"center"}}>
              <div style={{fontSize:8,color:"rgba(255,255,255,0.7)"}}>{u}</div>
              <div style={{fontSize:7,color:"rgba(255,255,255,0.35)"}}>{p}</div>
              <div style={{fontSize:8,color:k<2?"#4ade80":"rgba(255,255,255,0.25)"}}>{s}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function VisualBrace() { // fitness app / PWA
  const rings = [0.82, 0.65, 0.91];
  const ringColors = ["#7eff6e","#4ade80","#d6ff3d"];
  return (
    <div style={{position:"absolute",inset:0,background:"#0d160d",fontFamily:"var(--grotesk)"}}>
      {/* top status bar */}
      <div style={{padding:"10px 16px",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
        <div style={{fontFamily:"var(--display)",fontWeight:700,fontSize:12,letterSpacing:"-0.02em",color:"#7eff6e"}}>BRACE</div>
        <div style={{fontSize:8,color:"rgba(255,255,255,0.35)"}}>Mon, Oct 14</div>
      </div>
      {/* greeting */}
      <div style={{padding:"0 16px 10px"}}>
        <div style={{fontSize:8,color:"rgba(255,255,255,0.4)"}}>Good morning,</div>
        <div style={{fontFamily:"var(--display)",fontSize:16,fontWeight:700,color:"#fff",letterSpacing:"-0.03em",lineHeight:1.1}}>Jordan 👋</div>
      </div>
      {/* activity rings */}
      <div style={{padding:"0 16px",display:"flex",gap:14,alignItems:"center"}}>
        <svg width="72" height="72" viewBox="0 0 72 72">
          {rings.map((pct,k)=>{
            const r = 30 - k*9;
            const circ = 2*Math.PI*r;
            return (
              <React.Fragment key={k}>
                <circle cx="36" cy="36" r={r} fill="none" stroke={ringColors[k]} strokeOpacity="0.12" strokeWidth="5"/>
                <circle cx="36" cy="36" r={r} fill="none" stroke={ringColors[k]} strokeWidth="5"
                  strokeDasharray={`${circ*pct} ${circ*(1-pct)}`}
                  strokeLinecap="round" strokeDashoffset={circ*0.25}
                  transform="rotate(-90 36 36)"/>
              </React.Fragment>
            );
          })}
        </svg>
        <div style={{display:"flex",flexDirection:"column",gap:6}}>
          {[["Move","490 / 600 cal","#7eff6e"],["Exercise","32 / 30 min","#4ade80"],["Stand","10 / 12 hrs","#d6ff3d"]].map(([l,v,c],k)=>(
            <div key={k} style={{display:"flex",alignItems:"center",gap:6}}>
              <div style={{width:6,height:6,borderRadius:"50%",background:c}}></div>
              <div style={{fontSize:7,color:"rgba(255,255,255,0.45)",width:42}}>{l}</div>
              <div style={{fontSize:7,color:"rgba(255,255,255,0.75)",fontWeight:600}}>{v}</div>
            </div>
          ))}
        </div>
      </div>
      {/* today's workout card */}
      <div style={{margin:"10px 14px 0",background:"linear-gradient(135deg,#1a3d1a,#2a5a2a)",border:"1px solid rgba(126,255,110,0.15)",borderRadius:10,padding:"10px 12px"}}>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"start"}}>
          <div>
            <div style={{fontSize:7,color:"rgba(126,255,110,0.6)",letterSpacing:"0.08em",textTransform:"uppercase"}}>Today</div>
            <div style={{fontFamily:"var(--display)",fontSize:12,fontWeight:700,color:"#fff",letterSpacing:"-0.02em",marginTop:2}}>Upper Body A</div>
            <div style={{fontSize:7,color:"rgba(255,255,255,0.45)",marginTop:2}}>4 exercises · ~45 min</div>
          </div>
          <div style={{width:28,height:28,borderRadius:"50%",background:"#7eff6e",display:"flex",alignItems:"center",justifyContent:"center"}}>
            <div style={{width:0,height:0,borderTop:"5px solid transparent",borderBottom:"5px solid transparent",borderLeft:"7px solid #0d160d",marginLeft:2}}></div>
          </div>
        </div>
      </div>
      {/* exercise list */}
      <div style={{padding:"8px 14px",display:"flex",flexDirection:"column",gap:5}}>
        {[["Bench Press","4 × 8","✓"],["Pull-ups","4 × 6","✓"],["OHP","3 × 10","–"]].map(([ex,sets,done],k)=>(
          <div key={k} style={{display:"flex",alignItems:"center",gap:8,padding:"5px 8px",background:"rgba(255,255,255,0.04)",borderRadius:6,border:"1px solid rgba(255,255,255,0.05)"}}>
            <div style={{width:14,height:14,borderRadius:4,background:done==="✓"?"rgba(126,255,110,0.15)":"rgba(255,255,255,0.06)",border:`1px solid ${done==="✓"?"rgba(126,255,110,0.4)":"rgba(255,255,255,0.1)"}`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:7,color:"#7eff6e"}}>{done==="✓"?"✓":""}</div>
            <div style={{flex:1,fontSize:8,color:"rgba(255,255,255,0.75)"}}>{ex}</div>
            <div style={{fontSize:7,color:"rgba(255,255,255,0.35)"}}>{sets}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function VisualSaison() { // fashion ads / Meta campaign dashboard
  return (
    <div style={{position:"absolute",inset:0,background:"#12091a",fontFamily:"var(--grotesk)"}}>
      {/* header */}
      <div style={{padding:"10px 14px",borderBottom:"1px solid rgba(255,255,255,0.06)",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
        <div>
          <div style={{fontFamily:"var(--display)",fontSize:10,fontWeight:700,color:"#fff",letterSpacing:"-0.01em"}}>Saison — Meta</div>
          <div style={{fontSize:7,color:"rgba(255,255,255,0.35)",marginTop:1}}>Full-funnel · Q4 2024</div>
        </div>
        <div style={{background:"rgba(255,126,237,0.12)",border:"1px solid rgba(255,126,237,0.25)",borderRadius:999,padding:"3px 9px",fontSize:7,color:"#ff7eed",fontWeight:600}}>Live ●</div>
      </div>
      {/* roas hero */}
      <div style={{padding:"12px 14px",borderBottom:"1px solid rgba(255,255,255,0.06)"}}>
        <div style={{fontSize:7,color:"rgba(255,255,255,0.35)",letterSpacing:"0.08em",textTransform:"uppercase"}}>Return on ad spend</div>
        <div style={{display:"flex",alignItems:"baseline",gap:10,marginTop:4}}>
          <div style={{fontFamily:"var(--display)",fontSize:36,fontWeight:700,color:"#ff7eed",letterSpacing:"-0.04em",lineHeight:1}}>3.2×</div>
          <div style={{display:"flex",flexDirection:"column",gap:2}}>
            <div style={{fontSize:7,color:"rgba(255,255,255,0.4)"}}>vs prev period</div>
            <div style={{fontSize:8,color:"#4ade80",fontWeight:600}}>↑ +1.4×</div>
          </div>
        </div>
      </div>
      {/* funnel bars */}
      <div style={{padding:"10px 14px"}}>
        <div style={{fontSize:7,color:"rgba(255,255,255,0.3)",letterSpacing:"0.08em",textTransform:"uppercase",marginBottom:8}}>Campaign funnel</div>
        {[["Impressions","2.4M",1.0],["Reach","1.1M",0.46],["Clicks","114K",0.19],["Add to cart","22K",0.08],["Purchases","8.2K",0.05]].map(([l,v,w],k)=>(
          <div key={k} style={{marginBottom:5}}>
            <div style={{display:"flex",justifyContent:"space-between",marginBottom:2}}>
              <div style={{fontSize:7,color:"rgba(255,255,255,0.45)"}}>{l}</div>
              <div style={{fontSize:7,color:"rgba(255,255,255,0.6)",fontWeight:600}}>{v}</div>
            </div>
            <div style={{height:5,background:"rgba(255,255,255,0.06)",borderRadius:3}}>
              <div style={{height:"100%",width:`${w*100}%`,background:`rgba(255,126,237,${0.3+w*0.5})`,borderRadius:3}}></div>
            </div>
          </div>
        ))}
      </div>
      {/* creative thumbnails */}
      <div style={{padding:"6px 14px",display:"flex",gap:6}}>
        {[["#ff7eed","Top"],["#c44fa8","Mid"],["#7a2d6a","Low"]].map(([c,l],k)=>(
          <div key={k} style={{flex:1,aspectRatio:"9/16",background:`linear-gradient(180deg,${c}22,${c}44)`,borderRadius:6,border:`1px solid ${c}33`,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"flex-end",padding:4}}>
            <div style={{fontSize:6,color:c,fontWeight:600,letterSpacing:"0.06em"}}>{l}</div>
          </div>
        ))}
        <div style={{flex:1,aspectRatio:"9/16",background:"rgba(255,255,255,0.04)",borderRadius:6,border:"1px dashed rgba(255,255,255,0.1)",display:"flex",alignItems:"center",justifyContent:"center"}}>
          <div style={{fontSize:10,color:"rgba(255,255,255,0.2)"}}>+</div>
        </div>
      </div>
    </div>
  );
}

function VisualNorthbeam() { // B2B multi-platform attribution
  return (
    <div style={{position:"absolute",inset:0,background:"#07111f",fontFamily:"var(--grotesk)"}}>
      {/* header */}
      <div style={{padding:"10px 14px 8px",borderBottom:"1px solid rgba(255,255,255,0.06)"}}>
        <div style={{fontFamily:"var(--display)",fontSize:10,fontWeight:700,color:"#fff",letterSpacing:"-0.01em"}}>Northbeam</div>
        <div style={{fontSize:7,color:"rgba(255,255,255,0.3)",marginTop:1}}>Multi-touch attribution · B2B</div>
      </div>
      {/* CPL hero + trend */}
      <div style={{padding:"10px 14px",display:"grid",gridTemplateColumns:"1fr 1fr",gap:10,borderBottom:"1px solid rgba(255,255,255,0.06)"}}>
        <div>
          <div style={{fontSize:7,color:"rgba(255,255,255,0.35)",letterSpacing:"0.08em",textTransform:"uppercase"}}>Cost per lead</div>
          <div style={{fontFamily:"var(--display)",fontSize:22,fontWeight:700,color:"#5c9aff",letterSpacing:"-0.04em",lineHeight:1,marginTop:3}}>$48</div>
          <div style={{fontSize:7,color:"#4ade80",fontWeight:600,marginTop:2}}>↓ −52% vs baseline</div>
        </div>
        <div>
          <div style={{fontSize:7,color:"rgba(255,255,255,0.35)",letterSpacing:"0.08em",textTransform:"uppercase"}}>Pipeline</div>
          <div style={{fontFamily:"var(--display)",fontSize:22,fontWeight:700,color:"#fff",letterSpacing:"-0.04em",lineHeight:1,marginTop:3}}>$1.2M</div>
          <div style={{fontSize:7,color:"#5c9aff",marginTop:2}}>Q4 qualified</div>
        </div>
      </div>
      {/* channel breakdown */}
      <div style={{padding:"8px 14px"}}>
        <div style={{fontSize:7,color:"rgba(255,255,255,0.3)",letterSpacing:"0.08em",textTransform:"uppercase",marginBottom:7}}>Channel attribution</div>
        {[["LinkedIn Ads","42%","#0a66c2",42],["Google Search","31%","#4285F4",31],["Meta","18%","#0081FB",18],["Direct","9%","#8b9bb4",9]].map(([ch,pct,c,w],k)=>(
          <div key={k} style={{display:"flex",alignItems:"center",gap:8,marginBottom:5}}>
            <div style={{fontSize:7,color:"rgba(255,255,255,0.5)",width:68,flexShrink:0}}>{ch}</div>
            <div style={{flex:1,height:6,background:"rgba(255,255,255,0.06)",borderRadius:3}}>
              <div style={{height:"100%",width:`${w*1.8}%`,background:c,borderRadius:3,opacity:0.8}}></div>
            </div>
            <div style={{fontSize:7,color:"rgba(255,255,255,0.5)",width:24,textAlign:"right"}}>{pct}</div>
          </div>
        ))}
      </div>
      {/* leads table */}
      <div style={{margin:"4px 14px",background:"rgba(255,255,255,0.04)",borderRadius:8,overflow:"hidden",border:"1px solid rgba(255,255,255,0.07)"}}>
        <div style={{padding:"5px 10px",borderBottom:"1px solid rgba(255,255,255,0.06)",display:"grid",gridTemplateColumns:"1fr 50px 40px",gap:4}}>
          {["Company","Source","Score"].map(h=><div key={h} style={{fontSize:6,color:"rgba(255,255,255,0.25)",letterSpacing:"0.1em",textTransform:"uppercase"}}>{h}</div>)}
        </div>
        {[["Acme Corp","LinkedIn","92"],["Vanta Inc","Google","87"],["Stripe","Meta","81"]].map(([co,src,sc],k)=>(
          <div key={k} style={{padding:"5px 10px",borderBottom:k<2?"1px solid rgba(255,255,255,0.04)":"none",display:"grid",gridTemplateColumns:"1fr 50px 40px",gap:4,alignItems:"center"}}>
            <div style={{fontSize:7,color:"rgba(255,255,255,0.65)"}}>{co}</div>
            <div style={{fontSize:6,color:"rgba(255,255,255,0.3)"}}>{src}</div>
            <div style={{background:"rgba(92,154,255,0.15)",borderRadius:4,padding:"2px 5px",fontSize:6,color:"#5c9aff",fontWeight:600,textAlign:"center"}}>{sc}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function VisualDrift() { // hardware product launch campaign
  return (
    <div style={{position:"absolute",inset:0,background:"#100e06",fontFamily:"var(--grotesk)"}}>
      {/* product hero */}
      <div style={{background:"linear-gradient(160deg,#1e1a08,#2e2808)",borderBottom:"1px solid rgba(255,204,61,0.1)",padding:"12px 14px",display:"flex",gap:12,alignItems:"center"}}>
        {/* product shape */}
        <div style={{width:48,height:48,background:"linear-gradient(135deg,#3a3010,#5a4a18)",borderRadius:10,flexShrink:0,position:"relative",overflow:"hidden",border:"1px solid rgba(255,204,61,0.2)"}}>
          <div style={{position:"absolute",inset:6,borderRadius:6,background:"linear-gradient(135deg,#ffcc3d22,#ffcc3d08)",border:"1px solid rgba(255,204,61,0.15)"}}></div>
          <div style={{position:"absolute",bottom:5,right:5,width:8,height:8,borderRadius:"50%",background:"#ffcc3d",opacity:0.7}}></div>
        </div>
        <div>
          <div style={{fontFamily:"var(--display)",fontSize:12,fontWeight:700,color:"#fff",letterSpacing:"-0.02em"}}>Drift ONE</div>
          <div style={{fontSize:7,color:"rgba(255,255,255,0.35)",marginTop:1}}>Launch campaign · Meta + Google</div>
          <div style={{background:"rgba(255,204,61,0.15)",border:"1px solid rgba(255,204,61,0.3)",borderRadius:999,padding:"2px 8px",fontSize:6,color:"#ffcc3d",fontWeight:600,marginTop:4,display:"inline-block"}}>Live</div>
        </div>
      </div>
      {/* CTR hero stat */}
      <div style={{padding:"10px 14px",borderBottom:"1px solid rgba(255,255,255,0.05)"}}>
        <div style={{display:"flex",gap:16}}>
          {[["CTR avg","4.8%","#ffcc3d"],["CPA","$62","#fff"],["Spend","$84K","rgba(255,255,255,0.5)"]].map(([l,v,c],k)=>(
            <div key={k}>
              <div style={{fontSize:6,color:"rgba(255,255,255,0.3)",letterSpacing:"0.08em",textTransform:"uppercase"}}>{l}</div>
              <div style={{fontFamily:"var(--display)",fontSize:16,fontWeight:700,color:c,letterSpacing:"-0.03em",lineHeight:1,marginTop:2}}>{v}</div>
            </div>
          ))}
        </div>
      </div>
      {/* platform performance */}
      <div style={{padding:"8px 14px"}}>
        <div style={{fontSize:7,color:"rgba(255,255,255,0.3)",letterSpacing:"0.08em",textTransform:"uppercase",marginBottom:7}}>Platform breakdown</div>
        {[["Meta","CTR 5.2%","#0081FB",0.65],["Google","CTR 4.4%","#4285F4",0.55]].map(([p,sub,c,w],k)=>(
          <div key={k} style={{background:"rgba(255,255,255,0.04)",border:"1px solid rgba(255,255,255,0.06)",borderRadius:8,padding:"8px 10px",marginBottom:6}}>
            <div style={{display:"flex",justifyContent:"space-between",marginBottom:5}}>
              <div style={{fontSize:8,color:"rgba(255,255,255,0.7)",fontWeight:600}}>{p}</div>
              <div style={{fontSize:7,color:"rgba(255,255,255,0.4)"}}>{sub}</div>
            </div>
            <div style={{height:4,background:"rgba(255,255,255,0.06)",borderRadius:2}}>
              <div style={{height:"100%",width:`${w*100}%`,background:c,borderRadius:2,opacity:0.7}}></div>
            </div>
          </div>
        ))}
      </div>
      {/* ad creative grid */}
      <div style={{padding:"4px 14px",display:"flex",gap:6}}>
        {[["#ffcc3d","Video 1","5.4%"],["#e6a800","Video 2","4.9%"],["#b87d00","Static","4.1%"]].map(([c,l,ctr],k)=>(
          <div key={k} style={{flex:1,background:`linear-gradient(180deg,${c}18,${c}06)`,borderRadius:6,border:`1px solid ${c}22`,padding:"6px 6px 4px",display:"flex",flexDirection:"column",gap:2}}>
            <div style={{height:32,borderRadius:4,background:`linear-gradient(135deg,${c}22,${c}44)`}}></div>
            <div style={{fontSize:6,color:"rgba(255,255,255,0.4)"}}>{l}</div>
            <div style={{fontSize:7,color:c,fontWeight:700}}>{ctr}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function VisualAtrium() { // workspace corporate site
  return (
    <div style={{position:"absolute",inset:0,background:"#f5f7fb",fontFamily:"var(--grotesk)"}}>
      {/* nav */}
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"10px 14px",borderBottom:"1px solid #e4eaf5"}}>
        <div style={{fontFamily:"var(--display)",fontWeight:700,fontSize:10,letterSpacing:"0.04em",color:"#0a1733"}}>ATRIUM</div>
        <div style={{display:"flex",gap:10}}>{["Spaces","Pricing","Locations"].map(l=><div key={l} style={{fontSize:7,color:"#5b6a8a"}}>{l}</div>)}</div>
        <div style={{background:"#0052ff",color:"#fff",borderRadius:6,padding:"4px 10px",fontSize:7,fontWeight:600}}>Book tour</div>
      </div>
      {/* hero */}
      <div style={{padding:"14px 14px 10px",borderBottom:"1px solid #e4eaf5"}}>
        <div style={{fontFamily:"var(--display)",fontSize:14,fontWeight:700,color:"#0a1733",letterSpacing:"-0.03em",lineHeight:1.15,maxWidth:"18ch"}}>Premium workspaces in the heart of the city.</div>
        <div style={{display:"flex",gap:6,marginTop:8}}>
          <div style={{background:"#0052ff",color:"#fff",borderRadius:999,padding:"5px 12px",fontSize:7,fontWeight:600}}>Find a space</div>
          <div style={{border:"1px solid #c4d0e8",borderRadius:999,padding:"5px 12px",fontSize:7,color:"#5b6a8a"}}>Take a tour</div>
        </div>
      </div>
      {/* floor plan placeholder */}
      <div style={{margin:"10px 14px",background:"#e8eef9",borderRadius:8,height:64,position:"relative",overflow:"hidden",border:"1px solid #d4def2"}}>
        {/* simplified floor plan */}
        <svg viewBox="0 0 200 80" style={{position:"absolute",inset:0,width:"100%",height:"100%"}}>
          <rect x="10" y="10" width="55" height="30" fill="none" stroke="#0052ff" strokeWidth="1" opacity="0.4"/>
          <rect x="10" y="44" width="55" height="26" fill="none" stroke="#0052ff" strokeWidth="1" opacity="0.4"/>
          <rect x="70" y="10" width="35" height="60" fill="rgba(0,82,255,0.08)" stroke="#0052ff" strokeWidth="1" opacity="0.6"/>
          <rect x="110" y="10" width="40" height="28" fill="none" stroke="#0052ff" strokeWidth="1" opacity="0.4"/>
          <rect x="110" y="42" width="40" height="28" fill="none" stroke="#0052ff" strokeWidth="1" opacity="0.4"/>
          <rect x="155" y="10" width="35" height="60" fill="none" stroke="#0052ff" strokeWidth="1" opacity="0.4"/>
          <text x="83" y="43" textAnchor="middle" fontSize="6" fill="#0052ff" fontFamily="var(--mono)" opacity="0.8">Collab</text>
        </svg>
        <div style={{position:"absolute",top:6,right:6,background:"#0052ff",color:"#fff",fontSize:6,fontFamily:"var(--mono)",padding:"2px 6px",borderRadius:4,letterSpacing:"0.06em"}}>2F · East Wing</div>
      </div>
      {/* space cards */}
      <div style={{padding:"0 14px",display:"grid",gridTemplateColumns:"1fr 1fr",gap:6}}>
        {[["Hot Desk","From $29/day","Available"],["Private Office","From $890/mo","3 left"]].map(([t,p,a],k)=>(
          <div key={k} style={{background:"#fff",border:"1px solid #e4eaf5",borderRadius:8,padding:"8px 10px",boxShadow:"0 1px 4px rgba(10,23,51,0.05)"}}>
            <div style={{fontSize:8,fontWeight:600,color:"#0a1733"}}>{t}</div>
            <div style={{fontSize:7,color:"#0052ff",fontWeight:600,marginTop:2}}>{p}</div>
            <div style={{fontSize:6,color:k===1?"#e37400":"#16a34a",marginTop:3,fontWeight:600}}>{a}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function VisualStudioFolder() { // creative portfolio site
  return (
    <div style={{position:"absolute",inset:0,background:"#f9f6f2",fontFamily:"var(--grotesk)"}}>
      {/* minimal nav */}
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"10px 16px"}}>
        <div style={{fontFamily:"var(--display)",fontWeight:700,fontSize:10,letterSpacing:"-0.02em",color:"#1a1209"}}>Studio Folder</div>
        <div style={{display:"flex",gap:14}}>{["Work","Info","Contact"].map(l=><div key={l} style={{fontSize:7,color:"#7a6a56"}}>{l}</div>)}</div>
      </div>
      {/* big case study hero */}
      <div style={{margin:"4px 14px",background:"linear-gradient(135deg,#2c1f0e,#4a341c)",borderRadius:10,padding:"16px",position:"relative",overflow:"hidden",height:72}}>
        <div style={{position:"absolute",right:10,top:10,opacity:0.12}}>
          <svg width="60" height="60" viewBox="0 0 60 60"><circle cx="30" cy="30" r="28" fill="none" stroke="#d4c9b8" strokeWidth="2"/><circle cx="30" cy="30" r="20" fill="none" stroke="#d4c9b8" strokeWidth="1.5"/><circle cx="30" cy="30" r="12" fill="none" stroke="#d4c9b8" strokeWidth="1"/></svg>
        </div>
        <div style={{fontSize:7,color:"rgba(212,201,184,0.6)",letterSpacing:"0.1em",textTransform:"uppercase"}}>Case study 01</div>
        <div style={{fontFamily:"var(--display)",fontSize:14,fontWeight:700,color:"#f9f6f2",letterSpacing:"-0.03em",lineHeight:1.1,marginTop:4}}>Maison Bauhaus<br/>Brand identity</div>
        <div style={{position:"absolute",bottom:10,right:14,fontSize:11,color:"rgba(212,201,184,0.5)"}}>→</div>
      </div>
      {/* project grid */}
      <div style={{padding:"8px 14px",display:"grid",gridTemplateColumns:"1fr 1fr",gap:6}}>
        {[["#e8e0d4","Campaign 02"],["#d4c9b8","Type system 03"],["#c9b49a","Packaging 04"],["#2c1f0e","Annual report 05"]].map(([bg,l],k)=>(
          <div key={k} style={{background:bg,borderRadius:7,height:40,position:"relative",overflow:"hidden",display:"flex",alignItems:"flex-end",padding:"5px 7px"}}>
            <div style={{fontSize:6,color:k===3?"rgba(249,246,242,0.6)":"rgba(44,31,14,0.5)",fontWeight:600,letterSpacing:"0.04em"}}>{l}</div>
          </div>
        ))}
      </div>
      {/* stats row */}
      <div style={{padding:"6px 14px",display:"flex",gap:8}}>
        {[["+120%","Inbound"],["48","Projects"],["6","Awards"]].map(([v,l],k)=>(
          <div key={k} style={{flex:1,background:"#fff",border:"1px solid #e8e0d4",borderRadius:7,padding:"6px 8px"}}>
            <div style={{fontFamily:"var(--display)",fontSize:12,fontWeight:700,color:"#2c1f0e",letterSpacing:"-0.03em"}}>{v}</div>
            <div style={{fontSize:6,color:"#9a8a76",marginTop:1}}>{l}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

const VISUAL_MAP = { 1:VisualLuxe, 2:VisualTechFlow, 3:VisualBrace, 4:VisualSaison, 5:VisualNorthbeam, 6:VisualDrift, 7:VisualAtrium, 8:VisualStudioFolder };

function WorkCardVisual({ id }) {
  const Comp = VISUAL_MAP[id];
  return Comp ? <Comp /> : null;
}

const WORK_ITEMS = [
  { id: 1, title: "Luxe",          category: "web",  desc: "Custom e-commerce with a product configurator and one-page checkout.", result: "Online sales grew significantly", metric: "+180% revenue" },
  { id: 2, title: "TechFlow",      category: "web",  desc: "B2B SaaS dashboard, real-time analytics, role-based reporting.", result: "Faster user onboarding", metric: "−40% time-to-activate" },
  { id: 3, title: "Brace",         category: "web",  desc: "Workout-tracking companion site with a progressive web app shell.", result: "Strong early user retention", metric: "68% D30 retention" },
  { id: 4, title: "Saison",        category: "ads",  desc: "Meta full-funnel for a luxury fashion retailer. Creative refresh on a tight cadence.", result: "Return on ad spend tripled", metric: "3× ROAS" },
  { id: 5, title: "Northbeam",     category: "ads",  desc: "Multi-platform B2B lead generation for enterprise software.", result: "Lower cost per qualified lead", metric: "−52% CPL" },
  { id: 6, title: "Drift",         category: "ads",  desc: "Integrated Meta and Google launch campaign for a hardware product.", result: "Strong click-through, healthy CPA", metric: "4.8% CTR avg" },
  { id: 7, title: "Atrium",        category: "web",  desc: "Corporate site for a workspace operator with interactive floor plans.", result: "More demo requests, month over month", metric: "+94% demos" },
  { id: 8, title: "Studio Folder", category: "web",  desc: "Portfolio site for a creative studio with a smooth case-study pipeline.", result: "More inbound inquiries", metric: "+120% inbound" },
];

function WorkPage({ setRoute }) {

  return (
    <div className="page-enter">
      {/* HERO */}
      <section className="page-hero">
        <div className="wrap">
          <div className="work-hero-grid" style={{alignItems:"end", position:"relative", zIndex:1}}>
            <div>
              <div className="eyebrow" style={{marginBottom:24, color:"#ffffff"}}>Portfolio</div>
              <h1 className="display upright" style={{margin:0, fontSize:"clamp(48px, 6.2vw, 92px)", fontWeight:700, letterSpacing:"-0.04em", lineHeight:1.02, color:"#ffffff"}}>
                <span style={{display:"block"}}>Selected <span style={{color:"var(--accent)"}}>work</span>,</span>
                <span style={{display:"block"}}>recent and real.</span>
              </h1>
            </div>
            <div>
              <p style={{fontSize:19, lineHeight:1.5, maxWidth:"40ch", color:"rgba(255,255,255,0.85)", margin:"0 0 32px"}}>
                A handful of projects from the last two years. Each one lists the outcome we cared about — not the prettiest screenshot.
              </p>
              <a className="btn btn-accent btn-lg" onClick={() => setRoute("contact")}>
                Start your project <span className="arrow">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* WORK GRID */}
      <section style={{padding:"64px 0 40px"}}>
        <div className="wrap">
          <div style={{marginBottom:56}}>
            <h2 className="display upright" style={{fontSize:40, margin:0, letterSpacing:"-0.03em", fontWeight:700}}>
              Selected work.
            </h2>
            <p className="muted" style={{margin:"16px 0 0", fontSize:16, lineHeight:1.55, maxWidth:"54ch"}}>Launching soon. Three live sites built by us — real products, real outcomes, no mockups.</p>
          </div>

          <window.StaggerReveal className="work-cards-grid" style={{}} baseDelay={0.1} stagger={0.12}>
            {[1,2,3].map((n) => (
              <article key={n} style={{border:"1px dashed var(--hairline-strong)", borderRadius:20, overflow:"hidden", background:"var(--paper-2)"}}>
                <div style={{aspectRatio:"4/3", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", gap:16, padding:32}}>
                  <div style={{width:48, height:48, borderRadius:12, background:"var(--paper)", border:"1px solid var(--hairline-strong)", display:"flex", alignItems:"center", justifyContent:"center"}}>
                    <span style={{fontFamily:"var(--mono)", fontSize:18, color:"var(--ink-2)"}}>0{n}</span>
                  </div>
                  <div style={{textAlign:"center"}}>
                    <div className="eyebrow" style={{marginBottom:8}}>Coming soon</div>
                    <p className="muted" style={{margin:0, fontSize:13, lineHeight:1.5, maxWidth:"22ch"}}>Live demo site in production. Dropping shortly.</p>
                  </div>
                </div>
                <div style={{padding:"24px 28px 28px", borderTop:"1px dashed var(--hairline-strong)"}}>
                  <div style={{height:10, background:"var(--hairline-strong)", borderRadius:4, width:"55%", marginBottom:10}}></div>
                  <div style={{height:8, background:"var(--hairline)", borderRadius:4, width:"80%", marginBottom:6}}></div>
                  <div style={{height:8, background:"var(--hairline)", borderRadius:4, width:"65%"}}></div>
                </div>
              </article>
            ))}
          </window.StaggerReveal>
        </div>
      </section>

      <CTASection
        setRoute={setRoute}
        title={<>Want results<br/>like these?</>}
        description="The next case study could be yours. We'll happily audit your current site or ad account and tell you where the leak is."
        buttonText="Start your project"
      />
    </div>
  );
}

window.WorkPage = WorkPage;
