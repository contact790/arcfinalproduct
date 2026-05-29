// ============================================================
// SERVICES
// ============================================================

function ServicesPage({ setRoute }) {
  return (
    <div className="page-enter">

      {/* HERO */}
      <section className="page-hero">
        <div className="wrap">
          <div className="svc-hero-grid" style={{alignItems:"end", position:"relative", zIndex:1}}>
            <div>
              <div className="eyebrow" style={{marginBottom:24, color:"#ffffff"}}>What we do</div>
              <h1 className="display upright" style={{margin:0, fontSize:"clamp(48px, 6.2vw, 88px)", fontWeight:700, letterSpacing:"-0.04em", lineHeight:1.02, color:"#ffffff"}}>
                Two practices.<br/><span style={{color:"var(--accent)"}}>One</span> outcome.
              </h1>
            </div>
            <div>
              <p style={{fontSize:18, lineHeight:1.6, color:"rgba(255,255,255,0.85)", margin:"0 0 36px"}}>
                Editorial-grade websites and tightly measured paid acquisition — run as a single system, judged by one number: what comes back.
              </p>
              <div style={{display:"flex", gap:12}}>
                <a className="btn btn-accent btn-lg" onClick={() => setRoute("contact")}>Start a project <span className="arrow">→</span></a>
                <a className="btn btn-lg" onClick={() => setRoute("pricing")} style={{background:"#ffffff", borderColor:"#ffffff", color:"var(--ink)"}}>See pricing</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WEB SECTION */}
      <section style={{padding:"100px 0"}}>
        <div className="wrap">

          {/* Label + headline */}
          <div className="svc-web-head" style={{alignItems:"end", marginBottom:64, paddingBottom:48, borderBottom:"1px solid var(--hairline-strong)"}}>
            <div>
              <div className="eyebrow" style={{marginBottom:18}}>Web design &amp; build</div>
              <h2 className="display upright h-display-sm" style={{margin:0}}>Websites that <i style={{color:"var(--accent)"}}>earn</i> their keep.</h2>
            </div>
            <p className="muted" style={{margin:0, fontSize:17, lineHeight:1.65}}>
              Every page is built against a single conversion model. We start at the offer, work backwards through the buyer's question stack, and let layout follow logic — not the other way around.
            </p>
          </div>

          {/* Visual + deliverables */}
          <div className="svc-web-body" style={{alignItems:"start"}}>

            {/* Website Design Mockup — CoreDesign-inspired agency portfolio */}
            <div style={{borderRadius:20, overflow:"hidden", border:"1px solid var(--hairline-strong)", background:"#f4f5f8", aspectRatio:"4/3", position:"relative", boxShadow:"0 8px 40px rgba(6,14,32,0.12)"}}>
              {/* Browser chrome */}
              <div style={{height:34,background:"#ffffff",borderBottom:"1px solid #e8eaef",display:"flex",alignItems:"center",gap:6,padding:"0 14px",flexShrink:0}}>
                {["#ff5f57","#febc2e","#28c840"].map((c,k)=><span key={k} style={{width:9,height:9,borderRadius:"50%",background:c,display:"inline-block",flexShrink:0}}></span>)}
                <div style={{flex:1,height:19,background:"#f4f5f8",border:"1px solid #dde1ea",borderRadius:6,marginLeft:10,display:"flex",alignItems:"center",padding:"0 9px",gap:4}}>
                  <svg width="8" height="8" viewBox="0 0 12 12" style={{opacity:0.25,flexShrink:0}}><path d="M6 1a5 5 0 1 0 0 10A5 5 0 0 0 6 1zM1 6h10M6 1c-1.5 2-2 3.3-2 5s.5 3 2 5M6 1c1.5 2 2 3.3 2 5s-.5 3-2 5" stroke="#333" strokeWidth="1.2" fill="none"/></svg>
                  <span style={{fontSize:9,color:"#9aa3b2",fontFamily:"var(--mono)",overflow:"hidden",whiteSpace:"nowrap"}}>coredesign.studio</span>
                </div>
              </div>
              {/* Page */}
              <div style={{display:"flex",flexDirection:"column",height:"calc(100% - 34px)",overflow:"hidden",background:"#ffffff"}}>
                {/* Nav */}
                <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"10px 18px",borderBottom:"1px solid #f0f1f5",flexShrink:0}}>
                  <div style={{display:"flex",alignItems:"center",gap:5}}>
                    <div style={{width:16,height:16,borderRadius:4,background:"#e8272c",display:"flex",alignItems:"center",justifyContent:"center"}}>
                      <svg width="9" height="9" viewBox="0 0 9 9"><rect x="1" y="1" width="3" height="3" rx="0.5" fill="#fff"/><rect x="5" y="1" width="3" height="3" rx="0.5" fill="#fff"/><rect x="1" y="5" width="3" height="3" rx="0.5" fill="#fff"/><rect x="5" y="5" width="3" height="3" rx="0.5" fill="rgba(255,255,255,0.5)"/></svg>
                    </div>
                    <span style={{fontSize:11,fontWeight:800,color:"#1a1a2e",letterSpacing:"-0.02em"}}>Core<span style={{fontWeight:400}}>Design</span></span>
                  </div>
                  <div style={{display:"flex",gap:14}}>
                    {["Services","Portfolio","About","Blog"].map(n=><span key={n} style={{fontSize:8,color:"#555e72",fontWeight:500}}>{n}</span>)}
                  </div>
                  <div style={{background:"#e8272c",borderRadius:6,padding:"5px 11px"}}><span style={{fontSize:8,color:"#fff",fontWeight:700}}>Contact →</span></div>
                </div>
                {/* Hero */}
                <div style={{padding:"16px 18px 12px",background:"#ffffff",flexShrink:0,position:"relative",overflow:"hidden"}}>
                  <div style={{position:"absolute",top:-20,right:-20,width:120,height:120,borderRadius:"50%",background:"rgba(232,39,44,0.07)"}}></div>
                  <div style={{position:"absolute",top:10,right:16,width:60,height:60,borderRadius:"50%",background:"rgba(232,39,44,0.12)"}}></div>
                  <div className="mockup-kpi" style={{fontSize:8,fontWeight:700,color:"#e8272c",letterSpacing:"0.1em",textTransform:"uppercase",marginBottom:5}}>Better Design Studio</div>
                  <div style={{fontSize:18,fontWeight:800,color:"#1a1a2e",letterSpacing:"-0.035em",lineHeight:1.1,marginBottom:6}}>
                    <span style={{color:"#e8272c"}}>Better</span> Design<br/>For Your Products.
                  </div>
                  <p style={{fontSize:8,color:"#6b7280",lineHeight:1.5,marginBottom:10,maxWidth:"80%"}}>We craft user-centered digital experiences that convert visitors into loyal customers.</p>
                  <div style={{display:"flex",gap:7,alignItems:"center"}}>
                    <div style={{background:"#e8272c",borderRadius:6,padding:"6px 13px"}}><span style={{fontSize:8,color:"#fff",fontWeight:700}}>About Us</span></div>
                    <div style={{display:"flex",alignItems:"center",gap:5,background:"#f8f8fa",borderRadius:6,padding:"5px 10px",border:"1px solid #eaedf2"}}>
                      <div style={{width:14,height:14,borderRadius:4,background:"#e8272c",display:"flex",alignItems:"center",justifyContent:"center"}}>
                        <svg width="7" height="7" viewBox="0 0 7 7"><path d="M1 3.5h5M3.5 1l2.5 2.5-2.5 2.5" stroke="#fff" strokeWidth="1.2" fill="none" strokeLinecap="round"/></svg>
                      </div>
                      <span style={{fontSize:8,color:"#1a1a2e",fontWeight:600}}>24+ Projects</span>
                    </div>
                    <div style={{display:"flex",alignItems:"center",gap:5,background:"#f8f8fa",borderRadius:6,padding:"5px 10px",border:"1px solid #eaedf2"}}>
                      <div style={{width:14,height:14,borderRadius:4,background:"#e8272c",display:"flex",alignItems:"center",justifyContent:"center"}}>
                        <svg width="7" height="7" viewBox="0 0 7 7"><circle cx="3.5" cy="3" r="1.5" fill="#fff"/><path d="M1 6c0-1.4 1.1-2.5 2.5-2.5S6 4.6 6 6" stroke="#fff" strokeWidth="1" fill="none" strokeLinecap="round"/></svg>
                      </div>
                      <span style={{fontSize:8,color:"#1a1a2e",fontWeight:600}}>Product Designer</span>
                    </div>
                  </div>
                </div>
                {/* Service cards */}
                <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:6,padding:"8px 18px",flex:1,background:"#f8f9fc"}}>
                  {[
                    {title:"Branding",icon:"◈",color:"#e8272c"},
                    {title:"Product Design",icon:"▣",color:"#6366f1"},
                    {title:"UI/UX",icon:"◎",color:"#0ea5e9"},
                  ].map(({title,icon,color},k)=>(
                    <div key={k} className="mockup-kpi" style={{background:"#ffffff",borderRadius:10,padding:"10px 10px",border:"1px solid #eaedf2",boxShadow:"0 1px 4px rgba(0,0,0,0.04)"}}>
                      <div style={{width:22,height:22,borderRadius:6,background:color+"18",display:"flex",alignItems:"center",justifyContent:"center",marginBottom:6,fontSize:12,color}}>{icon}</div>
                      <div style={{fontSize:9,fontWeight:700,color:"#1a1a2e",marginBottom:2}}>{title}</div>
                      <div style={{fontSize:7,color:"#9aa3b2",lineHeight:1.4}}>Expert solutions</div>
                    </div>
                  ))}
                </div>
              </div>
              <div style={{position:"absolute",top:42,right:16,background:"var(--accent)",color:"#fff",padding:"5px 12px",borderRadius:999,fontFamily:"var(--mono)",fontSize:10,letterSpacing:"0.1em",textTransform:"uppercase",zIndex:2,fontWeight:600}}>Web</div>
            </div>

            {/* Deliverables grid */}
            <div style={{display:"flex", flexDirection:"column", gap:0}}>
              {[
                {icon:"▤", title:"Custom design", desc:"No templates. Type, grid, and motion built around your brand and your offer."},
                {icon:"⚡", title:"Modern stack",  desc:"React, Next.js, or Framer — whichever ships fastest and scales farthest."},
                {icon:"◎",  title:"Performance",   desc:"Sub-second first paint, smooth interactions, Core Web Vitals in the green."},
                {icon:"⊞",  title:"Conversion",    desc:"Every page mapped to a goal. Tested, measured, and iterated after launch."},
              ].map(({icon,title,desc},i) => (
                <div key={i} style={{display:"grid",gridTemplateColumns:"44px 1fr",gap:16,padding:"20px 0",borderTop:"1px solid var(--hairline)",alignItems:"start"}}>
                  <div style={{width:36,height:36,borderRadius:8,background:"var(--accent-soft)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:16,color:"var(--accent)",flexShrink:0,marginTop:2}}>{icon}</div>
                  <div>
                    <h4 style={{margin:"0 0 5px",fontSize:16,fontWeight:700}}>{title}</h4>
                    <p className="muted" style={{margin:0,fontSize:14,lineHeight:1.55}}>{desc}</p>
                  </div>
                </div>
              ))}
              <div style={{marginTop:24, padding:"20px 24px", background:"var(--paper-2)", border:"1px solid var(--hairline-strong)", borderRadius:12}}>
                <div className="eyebrow" style={{marginBottom:14}}>What's in the box</div>
                <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:"6px 24px"}}>
                  {["UI/UX in Figma","Responsive build","CMS integration","Performance pass","SEO foundation","Analytics setup","Post-launch support","Loom walkthrough"].map((it,i) => (
                    <div key={i} className="check"><span className="mark"></span><span style={{fontSize:13}}>{it}</span></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ADS SECTION */}
      <section style={{padding:"100px 0", background:"var(--paper-2)", borderTop:"1px solid var(--hairline-strong)"}}>
        <div className="wrap">

          <div className="svc-ads-head" style={{alignItems:"end", marginBottom:64, paddingBottom:48, borderBottom:"1px solid var(--hairline-strong)"}}>
            <div>
              <div className="eyebrow" style={{marginBottom:18}}>Paid acquisition</div>
              <h2 className="display upright h-display-sm" style={{margin:0}}>Ads run like a <i style={{color:"var(--accent)"}}>portfolio</i>.</h2>
            </div>
            <p className="muted" style={{margin:0, fontSize:17, lineHeight:1.65}}>
              We treat every campaign as a position — hypothesis, allocation, holding period, retro. Steadier returns, fewer panic kills.
            </p>
          </div>

          <div className="svc-ads-body" style={{alignItems:"start"}}>

            {/* Ads deliverables first (flipped) */}
            <div style={{display:"flex", flexDirection:"column", gap:0}}>
              {[
                {icon:"◎", title:"Precision targeting", desc:"Audience maps built from first-party data and look-alikes. No spray-and-pray."},
                {icon:"⚡", title:"Creative testing",    desc:"Several concepts per cohort, killed on a tight schedule. Winners scale fast."},
                {icon:"▤", title:"Attribution",          desc:"Honest measurement — server-side events plus view-through, no vanity numbers."},
                {icon:"⊞", title:"Cadence",              desc:"Weekly reports in plain English. Monthly written retros with the numbers."},
              ].map(({icon,title,desc},i) => (
                <div key={i} style={{display:"grid",gridTemplateColumns:"44px 1fr",gap:16,padding:"20px 0",borderTop:"1px solid var(--hairline)",alignItems:"start"}}>
                  <div style={{width:36,height:36,borderRadius:8,background:"var(--accent-soft)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:16,color:"var(--accent)",flexShrink:0,marginTop:2}}>{icon}</div>
                  <div>
                    <h4 style={{margin:"0 0 5px",fontSize:16,fontWeight:700}}>{title}</h4>
                    <p className="muted" style={{margin:0,fontSize:14,lineHeight:1.55}}>{desc}</p>
                  </div>
                </div>
              ))}
              <div style={{marginTop:24, padding:"20px 24px", background:"var(--paper)", border:"1px solid var(--hairline-strong)", borderRadius:12}}>
                <div className="eyebrow" style={{marginBottom:14}}>What's in the box</div>
                <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:"6px 24px"}}>
                  {["Meta Ads management","Google Ads management","Campaign strategy","Ad creative + copy","Testing program","Tracking setup","Monthly retros","Slack channel"].map((it,i) => (
                    <div key={i} className="check"><span className="mark"></span><span style={{fontSize:13}}>{it}</span></div>
                  ))}
                </div>
              </div>
            </div>

            {/* Ads Campaign Dashboard — Mboard-inspired with sidebar */}
            <div style={{borderRadius:20, overflow:"hidden", border:"1px solid var(--hairline-strong)", background:"#f0f4fa", aspectRatio:"4/3", position:"relative", boxShadow:"0 8px 40px rgba(6,14,32,0.22)", display:"flex"}}>
              {/* Sidebar */}
              <div style={{width:72,background:"#0f1b35",display:"flex",flexDirection:"column",alignItems:"center",padding:"14px 0",gap:0,flexShrink:0}}>
                {/* Logo */}
                <div style={{width:30,height:30,borderRadius:9,background:"linear-gradient(135deg,#f97316,#fb923c)",display:"flex",alignItems:"center",justifyContent:"center",marginBottom:14}}>
                  <svg width="15" height="15" viewBox="0 0 15 15"><rect x="1" y="1" width="6" height="6" rx="1.5" fill="#fff"/><rect x="8" y="1" width="6" height="6" rx="1.5" fill="rgba(255,255,255,0.5)"/><rect x="1" y="8" width="6" height="6" rx="1.5" fill="rgba(255,255,255,0.5)"/><rect x="8" y="8" width="6" height="6" rx="1.5" fill="#fff"/></svg>
                </div>
                {/* Nav icons */}
                {[
                  {icon:<svg width="14" height="14" viewBox="0 0 14 14"><rect x="1" y="1" width="5" height="5" rx="1" fill="currentColor"/><rect x="8" y="1" width="5" height="5" rx="1" fill="currentColor" opacity="0.4"/><rect x="1" y="8" width="5" height="5" rx="1" fill="currentColor" opacity="0.4"/><rect x="8" y="8" width="5" height="5" rx="1" fill="currentColor" opacity="0.4"/></svg>, active:true},
                  {icon:<svg width="14" height="14" viewBox="0 0 14 14"><path d="M2 4h10M2 7h7M2 10h9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>, active:false},
                  {icon:<svg width="14" height="14" viewBox="0 0 14 14"><circle cx="7" cy="5" r="2.5" stroke="currentColor" strokeWidth="1.4" fill="none"/><path d="M2 12c0-2.8 2.2-4.5 5-4.5s5 1.7 5 4.5" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round"/></svg>, active:false},
                  {icon:<svg width="14" height="14" viewBox="0 0 14 14"><rect x="1.5" y="1.5" width="11" height="11" rx="2" stroke="currentColor" strokeWidth="1.4" fill="none"/><path d="M4 7h6M4 4.5h4M4 9.5h5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/></svg>, active:false},
                  {icon:<svg width="14" height="14" viewBox="0 0 14 14"><circle cx="7" cy="7" r="3" stroke="currentColor" strokeWidth="1.4" fill="none"/><path d="M7 1v2M7 11v2M1 7h2M11 7h2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></svg>, active:false},
                ].map(({icon,active},k)=>(
                  <div key={k} style={{width:36,height:36,borderRadius:8,display:"flex",alignItems:"center",justifyContent:"center",color:active?"#f97316":"rgba(255,255,255,0.3)",background:active?"rgba(249,115,22,0.12)":"transparent",marginBottom:4}}>
                    {icon}
                  </div>
                ))}
                <div style={{flex:1}}></div>
                <div style={{fontSize:8,color:"#f97316",fontWeight:700,letterSpacing:"0.04em",marginBottom:8,cursor:"pointer"}}>↩ Log</div>
              </div>
              {/* Main content */}
              <div style={{flex:1,display:"flex",flexDirection:"column",overflow:"hidden",background:"#f0f4fa"}}>
                {/* Header */}
                <div style={{padding:"12px 16px 8px",background:"#f0f4fa",display:"flex",justifyContent:"space-between",alignItems:"center",flexShrink:0}}>
                  <div>
                    <div style={{fontSize:13,fontWeight:800,color:"#0f1b35",letterSpacing:"-0.02em"}}>Welcome Back, Anthony</div>
                  </div>
                  <div style={{display:"flex",alignItems:"center",gap:8}}>
                    <div style={{width:22,height:22,borderRadius:999,background:"#0f1b35",display:"flex",alignItems:"center",justifyContent:"center"}}>
                      <svg width="11" height="11" viewBox="0 0 11 11"><path d="M5.5 1a2 2 0 0 1 2 2v1.5c0 .7.4 1.3 1 1.6l.5.3A1 1 0 0 1 8.5 8H2.5a1 1 0 0 1-.5-1.6l.5-.3c.6-.3 1-.9 1-1.6V3a2 2 0 0 1 2-2zM4.5 9h2" stroke="#fff" strokeWidth="1" fill="none" strokeLinecap="round"/></svg>
                    </div>
                    <div style={{width:22,height:22,borderRadius:999,overflow:"hidden",background:"linear-gradient(135deg,#f97316,#fb923c)",display:"flex",alignItems:"center",justifyContent:"center"}}>
                      <span style={{fontSize:9,color:"#fff",fontWeight:700}}>A</span>
                    </div>
                    <span style={{fontSize:9,color:"#0f1b35",fontWeight:600}}>Anthony ▾</span>
                  </div>
                </div>
                {/* KPI cards */}
                <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:8,padding:"0 14px 8px",flexShrink:0}}>
                  {[
                    {v:"89,935",l:"Total users",d:"↗ +1.01%",c:"#22c55e"},
                    {v:"23,283",l:"Total products",d:"↗ +0.49%",c:"#22c55e"},
                    {v:"46,827",l:"Total users",d:"↘ -0.91%",c:"#ef4444"},
                    {v:"124,854",l:"Refunded",d:"↗ +1.51%",c:"#22c55e"},
                  ].map(({v,l,d,c},k)=>(
                    <div key={k} className="mockup-kpi" style={{background:"#ffffff",borderRadius:10,padding:"9px 10px",border:"1px solid #e8edf5",boxShadow:"0 1px 3px rgba(0,0,0,0.04)"}}>
                      <div style={{fontSize:12,fontWeight:800,color:"#0f1b35",letterSpacing:"-0.03em",lineHeight:1,marginBottom:2}}>{v}</div>
                      <div style={{fontSize:7.5,color:"#8b98b0",marginBottom:3}}>{l}</div>
                      <div style={{fontSize:7.5,color:c,fontWeight:600}}>{d}</div>
                    </div>
                  ))}
                </div>
                {/* Chart + donut row */}
                <div style={{display:"grid",gridTemplateColumns:"1fr 80px",gap:8,padding:"0 14px 8px",flex:1,minHeight:0}}>
                  {/* Line chart */}
                  <div style={{background:"#ffffff",borderRadius:10,padding:"10px 12px",border:"1px solid #e8edf5",display:"flex",flexDirection:"column"}}>
                    <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:6,flexShrink:0}}>
                      <span style={{fontSize:9,fontWeight:700,color:"#0f1b35"}}>Orders Analytics</span>
                      <div style={{display:"flex",gap:8,alignItems:"center"}}>
                        {[["#0f1b35","Offline"],["#f97316","Online"]].map(([c,l])=>(
                          <div key={l} style={{display:"flex",alignItems:"center",gap:3}}>
                            <div style={{width:6,height:6,borderRadius:"50%",background:c}}></div>
                            <span style={{fontSize:7,color:"#8b98b0"}}>{l}</span>
                          </div>
                        ))}
                        <span style={{fontSize:7,color:"#8b98b0",background:"#f4f5f8",borderRadius:4,padding:"2px 5px"}}>Monthly ▾</span>
                      </div>
                    </div>
                    <svg viewBox="0 0 180 60" preserveAspectRatio="none" style={{width:"100%",flex:1}}>
                      <defs>
                        <linearGradient id="og" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#f97316" stopOpacity="0.2"/><stop offset="100%" stopColor="#f97316" stopOpacity="0"/></linearGradient>
                        <linearGradient id="ng" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#0f1b35" stopOpacity="0.12"/><stop offset="100%" stopColor="#0f1b35" stopOpacity="0"/></linearGradient>
                      </defs>
                      {/* Grid lines */}
                      {[12,24,36,48].map(y=><line key={y} x1="0" y1={y} x2="180" y2={y} stroke="#e8edf5" strokeWidth="0.5"/>)}
                      {/* Dark line */}
                      <path d="M0 50 C20 48,40 42,60 38 C80 34,100 36,120 28 C140 20,160 22,180 16 L180 60 L0 60 Z" fill="url(#ng)"/>
                      <path d="M0 50 C20 48,40 42,60 38 C80 34,100 36,120 28 C140 20,160 22,180 16" fill="none" stroke="#0f1b35" strokeWidth="1.5"/>
                      {/* Orange line */}
                      <path d="M0 54 C20 50,40 46,60 44 C80 42,100 38,120 36 C140 34,160 30,180 28 L180 60 L0 60 Z" fill="url(#og)"/>
                      <path className="mockup-line" d="M0 54 C20 50,40 46,60 44 C80 42,100 38,120 36 C140 34,160 30,180 28" fill="none" stroke="#f97316" strokeWidth="1.5"/>
                      {/* Tooltip at peak */}
                      <rect x="100" y="14" width="38" height="13" rx="3" fill="#0f1b35"/>
                      <text x="119" y="22.5" textAnchor="middle" fontSize="6.5" fill="#fff" fontFamily="var(--mono)">$59,492</text>
                      <line x1="120" y1="27" x2="120" y2="28" stroke="#0f1b35" strokeWidth="1"/>
                      <circle cx="120" cy="28" r="2.5" fill="#0f1b35"/>
                      {/* X labels */}
                      {["Jan","Feb","Mar","Apr","May","Jun","Jul"].map((m,i)=>(
                        <text key={m} x={i*28+4} y="58" fontSize="6" fill="#8b98b0" fontFamily="var(--grotesk)">{m}</text>
                      ))}
                    </svg>
                  </div>
                  {/* Donut */}
                  <div style={{background:"#ffffff",borderRadius:10,padding:"10px",border:"1px solid #e8edf5",display:"flex",flexDirection:"column",alignItems:"center"}}>
                    <div style={{fontSize:8.5,fontWeight:700,color:"#0f1b35",marginBottom:6,alignSelf:"flex-start"}}>Earnings</div>
                    <svg width="56" height="56" viewBox="0 0 56 56">
                      <circle cx="28" cy="28" r="20" fill="none" stroke="#e8edf5" strokeWidth="8"/>
                      <circle cx="28" cy="28" r="20" fill="none" stroke="#0f1b35" strokeWidth="8" strokeDasharray="75 51" strokeDashoffset="25" strokeLinecap="round"/>
                      <circle cx="28" cy="28" r="20" fill="none" stroke="#f97316" strokeWidth="8" strokeDasharray="30 96" strokeDashoffset="-50" strokeLinecap="round"/>
                      <circle cx="28" cy="28" r="20" fill="none" stroke="#fb7185" strokeWidth="8" strokeDasharray="20 106" strokeDashoffset="-80" strokeLinecap="round"/>
                      <text x="28" y="30" textAnchor="middle" fontSize="9" fontWeight="800" fill="#0f1b35" fontFamily="var(--grotesk)">$452</text>
                    </svg>
                    <div style={{display:"flex",flexDirection:"column",gap:3,marginTop:4,width:"100%"}}>
                      {[["#0f1b35","Offline"],["#f97316","Online"],["#fb7185","Trade"]].map(([c,l])=>(
                        <div key={l} style={{display:"flex",alignItems:"center",gap:4}}>
                          <div style={{width:6,height:6,borderRadius:2,background:c,flexShrink:0}}></div>
                          <span style={{fontSize:7,color:"#8b98b0"}}>{l}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                {/* Order table */}
                <div style={{margin:"0 14px 10px",background:"#ffffff",borderRadius:10,border:"1px solid #e8edf5",overflow:"hidden",flexShrink:0}}>
                  <div style={{display:"grid",gridTemplateColumns:"28px 56px 52px 1fr 80px 50px 64px 24px",padding:"6px 10px",borderBottom:"1px solid #f0f4fa"}}>
                    {["No","ID","Date","Customer","Location","Amount","Status",""].map((h,k)=>(
                      <div key={k} style={{fontSize:7,color:"#8b98b0",fontWeight:600,letterSpacing:"0.05em",textTransform:"uppercase"}}>{h}</div>
                    ))}
                  </div>
                  {[
                    ["1","#12594","Oct 15, 2023","Frank Murlo","312 S Wilmette","$847.69","New Order","#f97316"],
                  ].map(([no,id,date,name,loc,amt,status,c],k)=>(
                    <div key={k} style={{display:"grid",gridTemplateColumns:"28px 56px 52px 1fr 80px 50px 64px 24px",padding:"7px 10px",alignItems:"center"}}>
                      <div style={{fontSize:8,color:"#0f1b35",fontWeight:600}}>{no}</div>
                      <div style={{fontSize:8,color:"#0f1b35"}}>{id}</div>
                      <div style={{fontSize:7.5,color:"#8b98b0"}}>{date}</div>
                      <div style={{fontSize:8,color:"#0f1b35",fontWeight:600}}>{name}</div>
                      <div style={{fontSize:7.5,color:"#8b98b0"}}>{loc}</div>
                      <div style={{fontSize:8,color:"#0f1b35",fontWeight:700}}>{amt}</div>
                      <div style={{display:"flex",alignItems:"center",gap:4}}>
                        <div style={{width:5,height:5,borderRadius:"50%",background:c}}></div>
                        <span style={{fontSize:7.5,color:c,fontWeight:600}}>{status}</span>
                      </div>
                      <div style={{fontSize:10,color:"#8b98b0"}}>···</div>
                    </div>
                  ))}
                </div>
              </div>
              <div style={{position:"absolute",top:12,right:16,background:"#ffffff",color:"#0b1120",padding:"5px 12px",borderRadius:999,fontFamily:"var(--mono)",fontSize:10,letterSpacing:"0.1em",textTransform:"uppercase",fontWeight:700,zIndex:2}}>Ads</div>
            </div>
          </div>
        </div>
      </section>

      {/* TOOLBELT */}
      <section style={{padding:"100px 0"}}>
        <div className="wrap">
          <div className="svc-toolbelt-head" style={{alignItems:"start", marginBottom:64}}>
            <div>
              <div className="eyebrow" style={{marginBottom:16}}>The toolbelt</div>
              <h2 className="display upright h-display-sm" style={{margin:0}}>Boring stack. Loud results.</h2>
            </div>
            <p className="muted" style={{margin:0, fontSize:17, lineHeight:1.65, paddingTop:40}}>We're allergic to fashion. Every tool is picked for one reason — it helps us ship faster and measure cleaner.</p>
          </div>
          <window.Reveal from="bottom">
          <div className="svc-toolbelt-grid" style={{background:"var(--hairline-strong)", border:"1px solid var(--hairline-strong)", borderRadius:16, overflow:"hidden"}}>
            {[
              { name:"Meta Ads",   desc:"Paid social",               color:"#0081FB", svg:<svg viewBox="0 0 24 24"><path fill="currentColor" d="M6.915 4.03c-1.968 0-3.683 1.28-4.871 3.113C.704 9.208 0 11.883 0 14.449c0 .706.07 1.369.21 1.973a6.624 6.624 0 0 0 .265.86 5.297 5.297 0 0 0 .371.761c.696 1.159 1.818 1.927 3.593 1.927 1.497 0 2.633-.671 3.965-2.444.76-1.012 1.144-1.626 2.663-4.32l.756-1.339.186-.325c.061.1.121.196.183.3l2.152 3.595c.724 1.21 1.665 2.556 2.47 3.314 1.046.987 1.992 1.22 3.06 1.22 1.075 0 1.876-.355 2.455-.843a3.743 3.743 0 0 0 .81-.973c.542-.939.861-2.127.861-3.745 0-2.72-.681-5.357-2.084-7.45-1.282-1.912-2.957-2.93-4.716-2.93-1.047 0-2.088.467-3.053 1.308-.652.57-1.257 1.29-1.82 2.05-.69-.875-1.335-1.547-1.958-2.056-1.182-.966-2.315-1.303-3.454-1.303zm10.16 2.053c1.147 0 2.188.758 2.992 1.999 1.132 1.748 1.647 4.195 1.647 6.4 0 1.548-.368 2.9-1.839 2.9-.58 0-1.027-.23-1.664-1.004-.496-.601-1.343-1.878-2.832-4.358l-.617-1.028a44.908 44.908 0 0 0-1.255-1.98c.07-.109.141-.224.211-.327 1.12-1.667 2.118-2.602 3.358-2.602zm-10.201.553c1.265 0 2.058.791 2.675 1.446.307.327.737.871 1.234 1.579l-1.02 1.566c-.757 1.163-1.882 3.017-2.837 4.338-1.191 1.649-1.81 1.817-2.486 1.817-.524 0-1.038-.237-1.383-.794-.263-.426-.464-1.13-.464-2.046 0-2.221.63-4.535 1.66-6.088.454-.687.964-1.226 1.533-1.533a2.264 2.264 0 0 1 1.088-.285z"/></svg> },
              { name:"Google Ads", desc:"Search, display, shopping", color:"#4285F4", svg:<svg viewBox="0 0 24 24"><path fill="currentColor" d="M3.9998 22.9291C1.7908 22.9291 0 21.1383 0 18.9293s1.7908-3.9998 3.9998-3.9998 3.9998 1.7908 3.9998 3.9998-1.7908 3.9998-3.9998 3.9998zm19.4643-6.0004L15.4632 3.072C14.3586 1.1587 11.9121.5028 9.9988 1.6074S7.4295 5.1585 8.5341 7.0718l8.0009 13.8567c1.1046 1.9133 3.5511 2.5679 5.4644 1.4646 1.9134-1.1046 2.568-3.5511 1.4647-5.4644zM7.5137 4.8438L1.5645 15.1484A4.5 4.5 0 0 1 4 14.4297c2.5597-.0075 4.6248 2.1585 4.4941 4.7148l3.2168-5.5723-3.6094-6.25c-.4499-.7793-.6322-1.6394-.5878-2.4784z"/></svg> },
              { name:"Figma",      desc:"Design & prototyping",      color:"#A259FF", svg:<svg viewBox="0 0 24 24"><path fill="currentColor" d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49-2.014-4.49-4.49S5.672 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.02 3.019 3.02h3.117V1.471H8.148zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98zM8.148 8.981c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h3.117V8.981H8.148zM8.172 24c-2.489 0-4.515-2.014-4.515-4.49s2.014-4.49 4.49-4.49h4.588v4.441c0 2.503-2.047 4.539-4.563 4.539zm-.024-7.51a3.023 3.023 0 0 0-3.019 3.019c0 1.665 1.365 3.019 3.044 3.019 1.705 0 3.093-1.376 3.093-3.068v-2.97H8.148zm7.704 0h-.098c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h.098c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.49-4.49 4.49zm-.097-7.509c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h.098c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-.098z"/></svg> },
              { name:"Next.js",    desc:"Web framework",             color:"#000000", svg:<svg viewBox="0 0 24 24"><path fill="currentColor" d="M18.665 21.978C16.758 23.255 14.465 24 12 24 5.377 24 0 18.623 0 12S5.377 0 12 0s12 5.377 12 12c0 3.583-1.574 6.801-4.067 9.001L9.219 7.2H7.2v9.596h1.615V9.251l9.85 12.727Zm-3.332-8.533 1.6 2.061V7.2h-1.6v6.245Z"/></svg> },
              { name:"Tidio",      desc:"Live chat & chatbots",       color:"#0E1B35", svg:<svg viewBox="0 0 32 32"><path fill="currentColor" d="M19.4187 3.2002C17.2908 3.2002 15.202 3.9343 13.5514 5.26194C11.9476 6.55053 10.8055 8.34675 10.3282 10.346C6.11943 11.3769 3.20142 15.0943 3.20142 19.4442V28.8002H12.5735C16.8214 28.8002 20.4982 25.9887 21.6013 21.9355L28.7985 21.9121V12.5249C28.7594 7.38616 24.5584 3.2002 19.4187 3.2002ZM19.4421 21.9043H19.669C18.5972 24.9188 15.7966 26.9181 12.5656 26.9181H5.04766V19.413C5.04766 16.2267 7.09731 13.3762 10.0779 12.3297C10.0779 12.4156 10.0779 12.4937 10.0779 12.5796C10.1014 17.7261 14.3024 21.9043 19.4421 21.9043ZM12.5735 10.0649H12.55C12.4639 10.0649 12.3857 10.0649 12.2997 10.0649C13.348 7.0894 16.2112 5.04327 19.3952 5.04327C23.5336 5.04327 26.9132 8.40142 26.9366 12.5249V20.0612H21.9064C21.922 19.8347 21.9377 19.6082 21.9377 19.3974C21.9377 14.2508 17.7367 10.0649 12.5735 10.0649ZM11.932 11.947C12.151 11.9314 12.3622 11.9158 12.5735 11.9158H12.5969C16.7197 11.9158 20.0914 15.2739 20.1149 19.3974C20.1149 19.6161 20.0993 19.8425 20.0836 20.0612H19.4421C15.3037 20.0612 11.9242 16.7031 11.9007 12.5796C11.9007 12.3687 11.9163 12.1579 11.932 11.947Z"/></svg> },
              { name:"Vercel",     desc:"Hosting & edge",            color:"#000000", svg:<svg viewBox="0 0 24 24"><path fill="currentColor" d="m12 1.608 12 20.784H0Z"/></svg> },
              { name:"GA4",        desc:"Measurement",               color:"#E37400", svg:<svg viewBox="0 0 24 24"><path fill="currentColor" d="M22.84 2.9982v17.9987c.0086 1.6473-1.3197 2.9897-2.967 2.9984a2.9808 2.9808 0 01-.3677-.0208c-1.528-.226-2.6477-1.5558-2.6105-3.1V3.1204c-.0369-1.5458 1.0856-2.8762 2.6157-3.1 1.6361-.1915 3.1178.9796 3.3093 2.6158.014.1201.0208.241.0202.3619zM4.1326 18.0548c-1.6417 0-2.9726 1.331-2.9726 2.9726C1.16 22.6691 2.4909 24 4.1326 24s2.9726-1.3309 2.9726-2.9726-1.331-2.9726-2.9726-2.9726zm7.8728-9.0098c-.0171 0-.0342 0-.0513.0003-1.6495.0904-2.9293 1.474-2.891 3.1256v7.9846c0 2.167.9535 3.4825 2.3505 3.763 1.6118.3266 3.1832-.7152 3.5098-2.327.04-.1974.06-.3983.0593-.5998v-8.9585c.003-1.6474-1.33-2.9852-2.9773-2.9882z"/></svg> },
              { name:"Cal.com",    desc:"Lead scheduling",           color:"#292929", svg:<svg viewBox="0 0 24 24"><path fill="currentColor" d="M2.408 14.488C1.035 14.488 0 13.4 0 12.058c0-1.346.982-2.443 2.408-2.443.758 0 1.282.233 1.691.765l-.66.55a1.343 1.343 0 0 0-1.03-.442c-.93 0-1.44.711-1.44 1.57 0 .86.559 1.557 1.44 1.557.413 0 .765-.147 1.043-.443l.651.573c-.391.51-.929.743-1.695.743zM6.948 10.913h.89v3.49h-.89v-.51c-.185.362-.493.604-1.083.604-.943 0-1.695-.82-1.695-1.826 0-1.007.752-1.825 1.695-1.825.585 0 .898.241 1.083.604zm.026 1.758c0-.546-.374-.998-.964-.998-.568 0-.938.457-.938.998 0 .528.37.998.938.998.586 0 .964-.456.964-.998zM8.467 9.503h.89v4.895h-.89zM9.752 13.937a.53.53 0 0 1 .542-.528c.313 0 .533.242.533.528a.527.527 0 0 1-.533.537.534.534 0 0 1-.542-.537zM14.23 13.839c-.33.403-.832.658-1.426.658a1.806 1.806 0 0 1-1.84-1.826c0-1.007.778-1.825 1.84-1.825.572 0 1.07.241 1.4.622l-.687.577c-.172-.215-.396-.376-.713-.376-.568 0-.938.456-.938.998 0 .541.37.997.938.997.343 0 .58-.179.757-.42zM14.305 12.671c0-1.007.78-1.825 1.84-1.825 1.061 0 1.84.818 1.84 1.825 0 1.007-.779 1.826-1.84 1.826-1.06-.005-1.84-.82-1.84-1.826zm2.778 0c0-.546-.37-.998-.938-.998-.568-.004-.937.452-.937.998 0 .542.37.998.937.998.568 0 .938-.456.938-.998zM24 12.269v2.13h-.89v-1.911c0-.604-.281-.864-.704-.864-.396 0-.678.197-.678.864v1.91h-.89v-1.91c0-.604-.285-.864-.704-.864-.396 0-.744.197-.744.864v1.91h-.89v-3.49h.89v.484c.185-.376.52-.564 1.035-.564.489 0 .898.241 1.123.649.224-.417.554-.65 1.153-.65.731.005 1.299.56 1.299 1.442z"/></svg> },
            ].map(({ name, desc, color, svg }, i) => (
              <div key={i} style={{padding:"28px 24px", background:"var(--paper)", display:"flex", flexDirection:"column", gap:14}}>
                <div style={{width:40, height:40, borderRadius:10, background: color === "#000000" ? "#f4f6fb" : color + "18", display:"flex", alignItems:"center", justifyContent:"center", color:color, flexShrink:0}}>
                  <svg viewBox={svg.props.viewBox} width="22" height="22" style={{display:"block"}}>{svg.props.children}</svg>
                </div>
                <div>
                  <h4 style={{margin:"0 0 4px", fontSize:15, fontWeight:700, letterSpacing:"-0.01em"}}>{name}</h4>
                  <p className="muted" style={{margin:0, fontSize:12, lineHeight:1.4}}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
          </window.Reveal>
        </div>
      </section>

      {/* PROCESS */}
      <section style={{padding:"0 0 100px"}}>
        <div className="wrap">
          <div className="svc-process-head" style={{alignItems:"end", marginBottom:56}}>
            <div>
              <div className="eyebrow" style={{marginBottom:16}}>How we work</div>
              <h2 className="display upright h-display-sm" style={{margin:0}}>Three steps. No surprises.</h2>
            </div>
            <p className="muted" style={{margin:0, fontSize:17, lineHeight:1.6}}>From first call to live — you see every file, every week, every decision in writing.</p>
          </div>

          <window.StaggerReveal className="svc-process-cards" style={{}} baseDelay={0.1} stagger={0.13}>
            {[
              {num:"01", title:"Discovery", time:"Days 1–5",  points:["60-min strategy call","Audience & offer audit","KPI tree, single north star","Written scope, fixed price"]},
              {num:"02", title:"Build",     time:"Weeks 2–7", points:["Design in Figma, approved first","Engineering in parallel","Friday Loom — no status calls","QA, performance, launch"]},
              {num:"03", title:"Compound",  time:"Ongoing",   points:["Weekly creative experiments","Monthly written retro","Slack for day-to-day comms","One feature swap per quarter"]},
            ].map(({num,title,time,points},i) => (
              <div key={i} className="process-card" style={{border:"1px solid var(--hairline-strong)", borderRadius:16, padding:"32px 28px", background:"var(--paper)"}}>
                <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:24}}>
                  <span style={{fontFamily:"var(--mono)", fontSize:11, letterSpacing:"0.14em", textTransform:"uppercase", color:"var(--accent)"}}>{num}</span>
                  <span style={{fontFamily:"var(--mono)", fontSize:11, letterSpacing:"0.06em", color:"var(--muted)", background:"var(--paper-2)", border:"1px solid var(--hairline)", borderRadius:999, padding:"4px 12px"}}>{time}</span>
                </div>
                <h4 className="display upright" style={{fontSize:28, margin:"0 0 20px", letterSpacing:"-0.025em", fontWeight:700}}>{title}</h4>
                <ul className="clean" style={{display:"flex", flexDirection:"column", gap:0}}>
                  {points.map((pt,k)=>(
                    <li key={k} style={{display:"flex",alignItems:"center",gap:10,padding:"9px 0",borderTop:"1px solid var(--hairline)"}}>
                      <div style={{width:5,height:5,borderRadius:"50%",background:"var(--accent)",flexShrink:0}}></div>
                      <span style={{fontSize:14,color:"var(--ink)"}}>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </window.StaggerReveal>
        </div>
      </section>

      <CTASection
        setRoute={setRoute}
        title={<>Let's grow<br/>your numbers.</>}
        description="Whether you need a site, ads, or both running as one engine — schedule a call. We'll tell you honestly if we can move the line."
        buttonText="Schedule a call"
      />
    </div>
  );
}

window.ServicesPage = ServicesPage;
