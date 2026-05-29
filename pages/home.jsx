// ============================================================
// HOME
// ============================================================

// Auto-swiping browser-window demo for the hero visual.
// Three demo sites that slide horizontally on a track —
// the active card occupies the viewport, the others sit
// off-screen left and right.
function WebsiteSwipe() {
  const sites = [
    { url: "harborviewlaw.com" },
    { url: "trattorianonna.co" },
    { url: "peakfitness.studio" },
  ];

  const [idx, setIdx] = React.useState(0);
  const [paused, setPaused] = React.useState(false);

  React.useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setIdx((i) => (i + 1) % sites.length);
    }, 3800);
    return () => clearInterval(id);
  }, [paused, sites.length]);

  const goto = (i) => setIdx(((i % sites.length) + sites.length) % sites.length);

  return (
    <div style={{position:"relative", width:"100%"}}
         onMouseEnter={() => setPaused(true)}
         onMouseLeave={() => setPaused(false)}>

      {/* viewport */}
      <div style={{
        position:"relative",
        aspectRatio:"5/4",
        width:"100%",
        overflow:"hidden",
        borderRadius:16,
        border:"1px solid var(--hairline-strong)",
        background:"var(--paper)",
        boxShadow:"0 30px 60px -24px rgba(10,23,51,0.35), 0 12px 24px -10px rgba(10,23,51,0.18)",
      }}>
        {/* shared chrome */}
        <div style={{height:36, borderBottom:"1px solid var(--hairline)", display:"flex", alignItems:"center", gap:8, padding:"0 14px", background:"var(--paper-2)", position:"relative", zIndex:2}}>
          <span style={{width:10, height:10, borderRadius:"50%", background:"#ff5f57"}}></span>
          <span style={{width:10, height:10, borderRadius:"50%", background:"#febc2e"}}></span>
          <span style={{width:10, height:10, borderRadius:"50%", background:"#28c840"}}></span>
          <div style={{flex:1, margin:"0 14px", height:20, background:"var(--paper)", border:"1px solid var(--hairline)", borderRadius:6, display:"flex", alignItems:"center", padding:"0 10px", overflow:"hidden"}}>
            <span className="mono" style={{fontSize:10, color:"var(--ink-2)", letterSpacing:"0.04em", whiteSpace:"nowrap", overflow:"hidden", textOverflow:"ellipsis", transition:"opacity .3s"}}>
              https://{sites[idx].url}
            </span>
          </div>
        </div>

        {/* sliding track */}
        <div style={{
          position:"absolute",
          inset:"36px 0 0 0",
          display:"flex",
          transform:`translateX(-${idx * 100}%)`,
          transition:"transform .8s cubic-bezier(.65,.02,.25,1)",
          willChange:"transform",
        }}>
          {/* Slide 0 — Harborview Law */}
          <div style={{flex:"0 0 100%",position:"relative",overflow:"hidden"}}>
            <div style={{position:"absolute",inset:0,background:"#f9f8f6",fontFamily:"var(--grotesk)"}}>
              {/* nav */}
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"10px 16px",borderBottom:"1px solid #e2ddd6"}}>
                <div style={{fontFamily:"var(--display)",fontWeight:700,fontSize:10,color:"#1a1208",letterSpacing:"0.04em"}}>HARBORVIEW LAW</div>
                <div style={{display:"flex",gap:10}}>{["Practice","Team","Contact"].map(l=><div key={l} style={{fontSize:7,color:"#6b5e4a"}}>{l}</div>)}</div>
                <div style={{background:"#1a1208",color:"#f9f8f6",borderRadius:6,padding:"4px 10px",fontSize:7,fontWeight:600}}>Free consult</div>
              </div>
              {/* hero */}
              <div style={{padding:"14px 16px",borderBottom:"1px solid #e2ddd6",background:"#1a1208"}}>
                <div style={{fontSize:6,color:"rgba(249,248,246,0.5)",letterSpacing:"0.12em",textTransform:"uppercase",marginBottom:6}}>Civil & Commercial Litigation</div>
                <div style={{fontFamily:"var(--display)",fontSize:15,fontWeight:700,color:"#f9f8f6",letterSpacing:"-0.03em",lineHeight:1.15}}>Experienced counsel.<br/>Decisive results.</div>
                <div style={{fontSize:7,color:"rgba(249,248,246,0.65)",marginTop:5,lineHeight:1.5,maxWidth:"30ch"}}>Over 20 years representing individuals and businesses in complex disputes across the Pacific Northwest.</div>
                <div style={{display:"flex",gap:6,marginTop:10}}>
                  <div style={{background:"#c9a84c",color:"#1a1208",borderRadius:6,padding:"5px 12px",fontSize:7,fontWeight:700}}>Book a consultation</div>
                  <div style={{border:"1px solid rgba(249,248,246,0.3)",borderRadius:6,padding:"5px 10px",fontSize:7,color:"#f9f8f6"}}>Our practice areas</div>
                </div>
              </div>
              {/* practice areas */}
              <div style={{padding:"10px 16px",display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:6}}>
                {[["Business Law","Contracts, M&A, disputes"],["Real Estate","Property & title matters"],["Employment","Workplace legal counsel"]].map(([t,d],k)=>(
                  <div key={k} style={{background:"#fff",border:"1px solid #e2ddd6",borderRadius:7,padding:"8px 9px"}}>
                    <div style={{fontSize:7,fontWeight:700,color:"#1a1208",marginBottom:3}}>{t}</div>
                    <div style={{fontSize:6,color:"#6b5e4a",lineHeight:1.4}}>{d}</div>
                  </div>
                ))}
              </div>
              {/* trust bar */}
              <div style={{padding:"6px 16px",display:"flex",gap:16,alignItems:"center"}}>
                <div style={{fontSize:7,color:"#6b5e4a"}}><strong style={{color:"#1a1208"}}>500+</strong> cases resolved</div>
                <div style={{fontSize:7,color:"#6b5e4a"}}><strong style={{color:"#1a1208"}}>98%</strong> client satisfaction</div>
                <div style={{marginLeft:"auto",fontSize:7,color:"#c9a84c",fontWeight:600}}>Rated AV Preeminent®</div>
              </div>
            </div>
            <div style={{position:"absolute",inset:0,background:"linear-gradient(180deg,transparent 68%,rgba(10,8,4,0.88) 100%)"}}></div>
            <div style={{position:"absolute",left:20,right:20,bottom:18,color:"#fff"}}>
              <div className="mono" style={{fontSize:10,letterSpacing:"0.18em",textTransform:"uppercase",color:"rgba(255,255,255,0.7)",marginBottom:6}}>Law firm</div>
              <h4 style={{margin:0,fontFamily:"var(--display)",fontWeight:600,fontSize:20,letterSpacing:"-0.02em",lineHeight:1.2}}>Harborview Law — Civil & commercial counsel</h4>
            </div>
          </div>

          {/* Slide 1 — Trattoria Nonna restaurant */}
          <div style={{flex:"0 0 100%",position:"relative",overflow:"hidden"}}>
            <div style={{position:"absolute",inset:0,background:"#fdfaf5",fontFamily:"var(--grotesk)"}}>
              {/* nav */}
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"10px 16px",borderBottom:"1px solid #ede8dc"}}>
                <div style={{fontFamily:"var(--display)",fontWeight:700,fontSize:11,color:"#2d1f0e",letterSpacing:"-0.01em",fontStyle:"italic"}}>Trattoria Nonna</div>
                <div style={{display:"flex",gap:10}}>{["Menu","Events","Find us"].map(l=><div key={l} style={{fontSize:7,color:"#7a6040"}}>{l}</div>)}</div>
                <div style={{background:"#b03a2e",color:"#fff",borderRadius:6,padding:"4px 10px",fontSize:7,fontWeight:600}}>Reserve a table</div>
              </div>
              {/* hero banner */}
              <div style={{padding:"12px 16px",background:"#2d1f0e",borderBottom:"1px solid #1a1108"}}>
                <div style={{fontSize:6,color:"rgba(253,250,245,0.45)",letterSpacing:"0.12em",textTransform:"uppercase",marginBottom:5}}>Est. 1987 · Portland, Oregon</div>
                <div style={{fontFamily:"var(--display)",fontSize:15,fontWeight:700,color:"#fdfaf5",letterSpacing:"-0.02em",lineHeight:1.15,fontStyle:"italic"}}>Cucina italiana,<br/>made with love.</div>
                <div style={{fontSize:7,color:"rgba(253,250,245,0.6)",marginTop:5,lineHeight:1.5,maxWidth:"30ch"}}>Three generations of family recipes. Fresh pasta daily, wood-fired pizza, and a wine list to match.</div>
                <div style={{display:"flex",gap:6,marginTop:9}}>
                  <div style={{background:"#b03a2e",color:"#fff",borderRadius:6,padding:"5px 12px",fontSize:7,fontWeight:700}}>Reserve now</div>
                  <div style={{border:"1px solid rgba(253,250,245,0.25)",borderRadius:6,padding:"5px 10px",fontSize:7,color:"#fdfaf5"}}>View menu</div>
                </div>
              </div>
              {/* specials */}
              <div style={{padding:"9px 16px",display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:6}}>
                {[["Tagliatelle al Ragù","$18","House pasta, slow-cooked beef"],["Pizza Margherita","$16","San Marzano, fior di latte"],["Tiramisu","$9","Nonna's original recipe"]].map(([n,p,d],k)=>(
                  <div key={k} style={{background:"#fff",border:"1px solid #ede8dc",borderRadius:7,padding:"7px 8px"}}>
                    <div style={{fontSize:7,fontWeight:700,color:"#2d1f0e",lineHeight:1.3,marginBottom:2}}>{n}</div>
                    <div style={{fontSize:6,color:"#b03a2e",fontWeight:700,marginBottom:2}}>{p}</div>
                    <div style={{fontSize:6,color:"#7a6040",lineHeight:1.3}}>{d}</div>
                  </div>
                ))}
              </div>
              {/* hours */}
              <div style={{padding:"5px 16px",display:"flex",gap:14,alignItems:"center"}}>
                <div style={{fontSize:7,color:"#7a6040"}}><strong style={{color:"#2d1f0e"}}>Mon–Fri</strong> 11am–10pm</div>
                <div style={{fontSize:7,color:"#7a6040"}}><strong style={{color:"#2d1f0e"}}>Sat–Sun</strong> 10am–11pm</div>
                <div style={{marginLeft:"auto",display:"flex",gap:1}}>{[1,2,3,4,5].map(k=><span key={k} style={{fontSize:9,color:"#e8943a"}}>★</span>)}</div>
              </div>
            </div>
            <div style={{position:"absolute",inset:0,background:"linear-gradient(180deg,transparent 68%,rgba(10,6,2,0.9) 100%)"}}></div>
            <div style={{position:"absolute",left:20,right:20,bottom:18,color:"#fff"}}>
              <div className="mono" style={{fontSize:10,letterSpacing:"0.18em",textTransform:"uppercase",color:"rgba(255,255,255,0.7)",marginBottom:6}}>Restaurant</div>
              <h4 style={{margin:0,fontFamily:"var(--display)",fontWeight:600,fontSize:20,letterSpacing:"-0.02em",lineHeight:1.2}}>Trattoria Nonna — Italian kitchen, Portland</h4>
            </div>
          </div>

          {/* Slide 2 — Peak Fitness Studio */}
          <div style={{flex:"0 0 100%",position:"relative",overflow:"hidden"}}>
            <div style={{position:"absolute",inset:0,background:"#f4f4f4",fontFamily:"var(--grotesk)"}}>
              {/* nav */}
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"10px 16px",borderBottom:"1px solid #e0e0e0",background:"#fff"}}>
                <div style={{fontFamily:"var(--display)",fontWeight:800,fontSize:10,color:"#111",letterSpacing:"0.06em",textTransform:"uppercase"}}>Peak Fitness</div>
                <div style={{display:"flex",gap:10}}>{["Classes","Trainers","Pricing"].map(l=><div key={l} style={{fontSize:7,color:"#555"}}>{l}</div>)}</div>
                <div style={{background:"#e8272c",color:"#fff",borderRadius:6,padding:"4px 10px",fontSize:7,fontWeight:700}}>Join today</div>
              </div>
              {/* hero */}
              <div style={{padding:"12px 16px",background:"#111",borderBottom:"1px solid #222"}}>
                <div style={{fontSize:6,color:"rgba(255,255,255,0.4)",letterSpacing:"0.12em",textTransform:"uppercase",marginBottom:5}}>Seattle's #1 rated gym · Since 2014</div>
                <div style={{fontFamily:"var(--display)",fontSize:15,fontWeight:800,color:"#fff",letterSpacing:"-0.03em",lineHeight:1.1,textTransform:"uppercase"}}>Train harder.<br/><span style={{color:"#e8272c"}}>Get results.</span></div>
                <div style={{fontSize:7,color:"rgba(255,255,255,0.55)",marginTop:5,lineHeight:1.5,maxWidth:"30ch"}}>Group classes, personal training, and open gym — all under one roof. First week free for new members.</div>
                <div style={{display:"flex",gap:6,marginTop:9}}>
                  <div style={{background:"#e8272c",color:"#fff",borderRadius:6,padding:"5px 12px",fontSize:7,fontWeight:700}}>Start free week</div>
                  <div style={{border:"1px solid rgba(255,255,255,0.2)",borderRadius:6,padding:"5px 10px",fontSize:7,color:"#fff"}}>View schedule</div>
                </div>
              </div>
              {/* class grid */}
              <div style={{padding:"9px 16px",display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:6}}>
                {[["HIIT","6:00 AM","12 spots left"],["Yoga Flow","7:30 AM","4 spots left"],["Spin","8:00 AM","Full"]].map(([cls,time,avail],k)=>(
                  <div key={k} style={{background:"#fff",border:"1px solid #e0e0e0",borderRadius:7,padding:"7px 8px"}}>
                    <div style={{fontSize:7,fontWeight:800,color:"#111",textTransform:"uppercase",letterSpacing:"0.04em",marginBottom:2}}>{cls}</div>
                    <div style={{fontSize:7,color:"#555",marginBottom:2}}>{time}</div>
                    <div style={{fontSize:6,color:k===2?"#e8272c":"#2a9d2a",fontWeight:600}}>{avail}</div>
                  </div>
                ))}
              </div>
              {/* stats */}
              <div style={{padding:"5px 16px",display:"flex",gap:14,alignItems:"center"}}>
                <div style={{fontSize:7,color:"#555"}}><strong style={{color:"#111"}}>1,200+</strong> members</div>
                <div style={{fontSize:7,color:"#555"}}><strong style={{color:"#111"}}>30+</strong> classes/week</div>
                <div style={{marginLeft:"auto",fontSize:7,color:"#e8272c",fontWeight:700}}>★ 4.9 on Google</div>
              </div>
            </div>
            <div style={{position:"absolute",inset:0,background:"linear-gradient(180deg,transparent 68%,rgba(0,0,0,0.88) 100%)"}}></div>
            <div style={{position:"absolute",left:20,right:20,bottom:18,color:"#fff"}}>
              <div className="mono" style={{fontSize:10,letterSpacing:"0.18em",textTransform:"uppercase",color:"rgba(255,255,255,0.7)",marginBottom:6}}>Fitness studio</div>
              <h4 style={{margin:0,fontFamily:"var(--display)",fontWeight:600,fontSize:20,letterSpacing:"-0.02em",lineHeight:1.2}}>Peak Fitness — Training studio, Seattle</h4>
            </div>
          </div>
        </div>
      </div>

      {/* bottom bar — now showing + dots + arrows */}
      <div style={{marginTop:14, display:"flex", justifyContent:"space-between", alignItems:"center"}}>
        {/* left: live dot + url + counter */}
        <div className="mono" style={{display:"flex", alignItems:"center", gap:10, fontSize:11, letterSpacing:"0.12em", textTransform:"uppercase", color:"var(--ink-2)"}}>
          <span style={{width:6, height:6, borderRadius:"50%", background:"var(--accent)", display:"inline-block", animation:"pulse 1.4s ease-in-out infinite", flexShrink:0}}></span>
          <span style={{transition:"opacity .3s"}}>{sites[idx].url}</span>
          <span style={{opacity:0.4}}>— {String(idx+1).padStart(2,"0")}/{String(sites.length).padStart(2,"0")}</span>
        </div>
        {/* right: dots + arrows */}
        <div style={{display:"flex", alignItems:"center", gap:12}}>
          <div style={{display:"flex", gap:5, alignItems:"center"}}>
            {sites.map((_, i) => (
              <button key={i} onClick={() => goto(i)} aria-label={"Show site " + (i+1)}
                      style={{width: i===idx ? 20 : 6, height:6, borderRadius:3, border:0, padding:0, background: i===idx ? "var(--accent)" : "var(--hairline-strong)", transition:"all .35s ease", cursor:"pointer"}}/>
            ))}
          </div>
          <button onClick={() => goto(idx-1)} aria-label="Previous"
                  style={{width:32, height:32, borderRadius:8, border:"1px solid var(--hairline-strong)", background:"transparent", cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center", fontSize:14, color:"var(--ink)"}}>
            ←
          </button>
          <button onClick={() => goto(idx+1)} aria-label="Next"
                  style={{width:32, height:32, borderRadius:8, border:"1px solid var(--accent)", background:"var(--accent)", color:"#fff", cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center", fontSize:14}}>
            →
          </button>
        </div>
      </div>
    </div>
  );
}

function HomePage({ setRoute }) {
  return (
    <div className="page-enter">
      {/* HERO */}
      <section className="hero-section" style={{padding: "160px 0 180px", position:"relative", overflow:"hidden"}}>
        <div className="wrap">
          <div className="hero-inner-grid" style={{display:"grid", gridTemplateColumns:"1.35fr 1fr", gap:64, alignItems:"center"}}>
            <div>
              <h1 className="display upright" style={{margin:0, fontSize:"clamp(48px, 5.5vw, 76px)", fontWeight:700, letterSpacing:"-0.04em", lineHeight:1.05, color:"#ffffff"}}>
                <window.LineReveal delay={0.05}>
                  Websites &amp; <span style={{color:"#a8c4ff"}}>paid ads</span>
                </window.LineReveal>
                <window.LineReveal delay={0.18}>
                  that <span style={{color:"#a8c4ff"}}>pay</span> for themselves.
                </window.LineReveal>
              </h1>
              <window.Reveal delay={0.32} from="bottom">
                <p className="muted" style={{fontSize:18, lineHeight:1.5, marginTop:28, maxWidth:"44ch"}}>
                  We're a small studio. We make the website. We run the ads. We're judged by what comes back.
                </p>
              </window.Reveal>
              <window.Reveal delay={0.42} from="bottom">
                <div className="hero-btns" style={{display:"flex", gap:14, marginTop:32, flexWrap:"wrap"}}>
                  <a className="btn btn-accent btn-lg" onClick={() => setRoute("contact")}>
                    Book a strategy call <span className="arrow">→</span>
                  </a>
                  <a className="btn btn-lg btn-ghost" onClick={() => setRoute("pricing")}>
                    See pricing
                  </a>
                </div>
              </window.Reveal>
            </div>

            <window.Reveal delay={0.15} from="bottom" style={{paddingTop:36, paddingBottom:36}}>
              <WebsiteSwipe />
            </window.Reveal>
          </div>
        </div>
      </section>

      {/* TOOLS ROW */}
      <section style={{padding:"48px 0", borderTop:"1px solid var(--hairline)", borderBottom:"1px solid var(--hairline)"}}>
        <div className="wrap">
          <div className="eyebrow" style={{textAlign:"center", marginBottom:32}}>Tools we work with every day</div>
          <div className="tools-row" style={{display:"flex", justifyContent:"center", alignItems:"center", flexWrap:"wrap", gap:72}}>
            {[
              { name:"Meta",            color:"#0081FB", svg:<svg viewBox="0 0 24 24" style={{display:"block"}}><path fill="currentColor" d="M6.915 4.03c-1.968 0-3.683 1.28-4.871 3.113C.704 9.208 0 11.883 0 14.449c0 .706.07 1.369.21 1.973a6.624 6.624 0 0 0 .265.86 5.297 5.297 0 0 0 .371.761c.696 1.159 1.818 1.927 3.593 1.927 1.497 0 2.633-.671 3.965-2.444.76-1.012 1.144-1.626 2.663-4.32l.756-1.339.186-.325c.061.1.121.196.183.3l2.152 3.595c.724 1.21 1.665 2.556 2.47 3.314 1.046.987 1.992 1.22 3.06 1.22 1.075 0 1.876-.355 2.455-.843a3.743 3.743 0 0 0 .81-.973c.542-.939.861-2.127.861-3.745 0-2.72-.681-5.357-2.084-7.45-1.282-1.912-2.957-2.93-4.716-2.93-1.047 0-2.088.467-3.053 1.308-.652.57-1.257 1.29-1.82 2.05-.69-.875-1.335-1.547-1.958-2.056-1.182-.966-2.315-1.303-3.454-1.303zm10.16 2.053c1.147 0 2.188.758 2.992 1.999 1.132 1.748 1.647 4.195 1.647 6.4 0 1.548-.368 2.9-1.839 2.9-.58 0-1.027-.23-1.664-1.004-.496-.601-1.343-1.878-2.832-4.358l-.617-1.028a44.908 44.908 0 0 0-1.255-1.98c.07-.109.141-.224.211-.327 1.12-1.667 2.118-2.602 3.358-2.602zm-10.201.553c1.265 0 2.058.791 2.675 1.446.307.327.737.871 1.234 1.579l-1.02 1.566c-.757 1.163-1.882 3.017-2.837 4.338-1.191 1.649-1.81 1.817-2.486 1.817-.524 0-1.038-.237-1.383-.794-.263-.426-.464-1.13-.464-2.046 0-2.221.63-4.535 1.66-6.088.454-.687.964-1.226 1.533-1.533a2.264 2.264 0 0 1 1.088-.285z"/></svg> },
              { name:"Google Ads",      color:"#4285F4", svg:<svg viewBox="0 0 24 24" style={{display:"block"}}><path fill="currentColor" d="M3.9998 22.9291C1.7908 22.9291 0 21.1383 0 18.9293s1.7908-3.9998 3.9998-3.9998 3.9998 1.7908 3.9998 3.9998-1.7908 3.9998-3.9998 3.9998zm19.4643-6.0004L15.4632 3.072C14.3586 1.1587 11.9121.5028 9.9988 1.6074S7.4295 5.1585 8.5341 7.0718l8.0009 13.8567c1.1046 1.9133 3.5511 2.5679 5.4644 1.4646 1.9134-1.1046 2.568-3.5511 1.4647-5.4644zM7.5137 4.8438L1.5645 15.1484A4.5 4.5 0 0 1 4 14.4297c2.5597-.0075 4.6248 2.1585 4.4941 4.7148l3.2168-5.5723-3.6094-6.25c-.4499-.7793-.6322-1.6394-.5878-2.4784z"/></svg> },
              { name:"Figma",           color:"#A259FF", svg:<svg viewBox="0 0 24 24" style={{display:"block"}}><path fill="currentColor" d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49-2.014-4.49-4.49S5.672 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.02 3.019 3.02h3.117V1.471H8.148zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98zM8.148 8.981c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h3.117V8.981H8.148zM8.172 24c-2.489 0-4.515-2.014-4.515-4.49s2.014-4.49 4.49-4.49h4.588v4.441c0 2.503-2.047 4.539-4.563 4.539zm-.024-7.51a3.023 3.023 0 0 0-3.019 3.019c0 1.665 1.365 3.019 3.044 3.019 1.705 0 3.093-1.376 3.093-3.068v-2.97H8.148zm7.704 0h-.098c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h.098c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.49-4.49 4.49zm-.097-7.509c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h.098c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-.098z"/></svg> },
              { name:"Next.js",         color:"#000000", svg:<svg viewBox="0 0 24 24" style={{display:"block"}}><path fill="currentColor" d="M18.665 21.978C16.758 23.255 14.465 24 12 24 5.377 24 0 18.623 0 12S5.377 0 12 0s12 5.377 12 12c0 3.583-1.574 6.801-4.067 9.001L9.219 7.2H7.2v9.596h1.615V9.251l9.85 12.727Zm-3.332-8.533 1.6 2.061V7.2h-1.6v6.245Z"/></svg> },
              { name:"Tidio",           color:"#0E1B35", svg:<svg viewBox="0 0 32 32" style={{display:"block"}}><path fill="currentColor" d="M19.4187 3.2002C17.2908 3.2002 15.202 3.9343 13.5514 5.26194C11.9476 6.55053 10.8055 8.34675 10.3282 10.346C6.11943 11.3769 3.20142 15.0943 3.20142 19.4442V28.8002H12.5735C16.8214 28.8002 20.4982 25.9887 21.6013 21.9355L28.7985 21.9121V12.5249C28.7594 7.38616 24.5584 3.2002 19.4187 3.2002ZM19.4421 21.9043H19.669C18.5972 24.9188 15.7966 26.9181 12.5656 26.9181H5.04766V19.413C5.04766 16.2267 7.09731 13.3762 10.0779 12.3297C10.0779 12.4156 10.0779 12.4937 10.0779 12.5796C10.1014 17.7261 14.3024 21.9043 19.4421 21.9043ZM12.5735 10.0649H12.55C12.4639 10.0649 12.3857 10.0649 12.2997 10.0649C13.348 7.0894 16.2112 5.04327 19.3952 5.04327C23.5336 5.04327 26.9132 8.40142 26.9366 12.5249V20.0612H21.9064C21.922 19.8347 21.9377 19.6082 21.9377 19.3974C21.9377 14.2508 17.7367 10.0649 12.5735 10.0649ZM11.932 11.947C12.151 11.9314 12.3622 11.9158 12.5735 11.9158H12.5969C16.7197 11.9158 20.0914 15.2739 20.1149 19.3974C20.1149 19.6161 20.0993 19.8425 20.0836 20.0612H19.4421C15.3037 20.0612 11.9242 16.7031 11.9007 12.5796C11.9007 12.3687 11.9163 12.1579 11.932 11.947Z"/></svg> },
              { name:"Vercel",          color:"#000000", svg:<svg viewBox="0 0 24 24" style={{display:"block"}}><path fill="currentColor" d="m12 1.608 12 20.784H0Z"/></svg> },
              { name:"GA4",             color:"#E37400", svg:<svg viewBox="0 0 24 24" style={{display:"block"}}><path fill="currentColor" d="M22.84 2.9982v17.9987c.0086 1.6473-1.3197 2.9897-2.967 2.9984a2.9808 2.9808 0 01-.3677-.0208c-1.528-.226-2.6477-1.5558-2.6105-3.1V3.1204c-.0369-1.5458 1.0856-2.8762 2.6157-3.1 1.6361-.1915 3.1178.9796 3.3093 2.6158.014.1201.0208.241.0202.3619zM4.1326 18.0548c-1.6417 0-2.9726 1.331-2.9726 2.9726C1.16 22.6691 2.4909 24 4.1326 24s2.9726-1.3309 2.9726-2.9726-1.331-2.9726-2.9726-2.9726zm7.8728-9.0098c-.0171 0-.0342 0-.0513.0003-1.6495.0904-2.9293 1.474-2.891 3.1256v7.9846c0 2.167.9535 3.4825 2.3505 3.763 1.6118.3266 3.1832-.7152 3.5098-2.327.04-.1974.06-.3983.0593-.5998v-8.9585c.003-1.6474-1.33-2.9852-2.9773-2.9882z"/></svg> },
              { name:"Cal.com",         color:"#292929", svg:<svg viewBox="0 0 24 24" style={{display:"block"}}><path fill="currentColor" d="M2.408 14.488C1.035 14.488 0 13.4 0 12.058c0-1.346.982-2.443 2.408-2.443.758 0 1.282.233 1.691.765l-.66.55a1.343 1.343 0 0 0-1.03-.442c-.93 0-1.44.711-1.44 1.57 0 .86.559 1.557 1.44 1.557.413 0 .765-.147 1.043-.443l.651.573c-.391.51-.929.743-1.695.743zM6.948 10.913h.89v3.49h-.89v-.51c-.185.362-.493.604-1.083.604-.943 0-1.695-.82-1.695-1.826 0-1.007.752-1.825 1.695-1.825.585 0 .898.241 1.083.604zm.026 1.758c0-.546-.374-.998-.964-.998-.568 0-.938.457-.938.998 0 .528.37.998.938.998.586 0 .964-.456.964-.998zM8.467 9.503h.89v4.895h-.89zM9.752 13.937a.53.53 0 0 1 .542-.528c.313 0 .533.242.533.528a.527.527 0 0 1-.533.537.534.534 0 0 1-.542-.537zM14.23 13.839c-.33.403-.832.658-1.426.658a1.806 1.806 0 0 1-1.84-1.826c0-1.007.778-1.825 1.84-1.825.572 0 1.07.241 1.4.622l-.687.577c-.172-.215-.396-.376-.713-.376-.568 0-.938.456-.938.998 0 .541.37.997.938.997.343 0 .58-.179.757-.42zM14.305 12.671c0-1.007.78-1.825 1.84-1.825 1.061 0 1.84.818 1.84 1.825 0 1.007-.779 1.826-1.84 1.826-1.06-.005-1.84-.82-1.84-1.826zm2.778 0c0-.546-.37-.998-.938-.998-.568-.004-.937.452-.937.998 0 .542.37.998.937.998.568 0 .938-.456.938-.998zM24 12.269v2.13h-.89v-1.911c0-.604-.281-.864-.704-.864-.396 0-.678.197-.678.864v1.91h-.89v-1.91c0-.604-.285-.864-.704-.864-.396 0-.744.197-.744.864v1.91h-.89v-3.49h.89v.484c.185-.376.52-.564 1.035-.564.489 0 .898.241 1.123.649.224-.417.554-.65 1.153-.65.731.005 1.299.56 1.299 1.442z"/></svg> },
            ].map(({ name, color, svg }, i) => (
              <div key={i} style={{display:"flex", flexDirection:"column", alignItems:"center", gap:12, cursor:"default"}}>
                <div style={{width:56, height:56, color:color, display:"flex", alignItems:"center", justifyContent:"center"}}>
                  <svg viewBox={svg.props.viewBox} width="50" height="50" style={{display:"block"}}>
                    {svg.props.children}
                  </svg>
                </div>
                <span className="mono" style={{fontSize:11, letterSpacing:"0.12em", textTransform:"uppercase", color:"var(--ink)", fontWeight:600}}>{name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MANIFESTO ROW */}
      <section style={{padding:"140px 0 120px"}}>
        <div className="wrap">
          <div className="manifesto-grid" style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:80, alignItems:"start"}}>
            <window.LineReveal tag="p" className="display upright h-display-sm" style={{margin:0, maxWidth:"14ch"}}>
              Most studios sell <span style={{color:"var(--accent)"}}><i>deliverables</i></span>. We sell outcomes.
            </window.LineReveal>
            <window.StaggerReveal baseDelay={0.1} stagger={0.12} style={{display:"flex", flexDirection:"column", gap:20, marginTop:20}}>
              <p className="muted" style={{margin:0, fontSize:17, lineHeight:1.6}}>
                Editorial-grade web design, wired into rigorously measured paid acquisition. Every site is judged by what it pays back — not what it looks like in a portfolio shot.
              </p>
              <p className="muted" style={{margin:0, fontSize:17, lineHeight:1.6}}>
                We stay small on purpose. One strategist, one designer, one engineer, one media buyer per account.
              </p>
            </window.StaggerReveal>
          </div>
        </div>
      </section>

      {/* SERVICES — two cards */}
      <section style={{padding:"80px 0 100px", borderTop:"1px solid var(--hairline-strong)"}}>
        <div className="wrap">
          <div style={{display:"flex", justifyContent:"space-between", alignItems:"flex-end", marginBottom:56, flexWrap:"wrap", gap:24}}>
            <div>
              <window.Reveal from="bottom" delay={0}>
                <div className="eyebrow" style={{marginBottom:14}}>What we do</div>
              </window.Reveal>
              <window.LineReveal delay={0.08}>
                <h2 className="display upright h-display-sm" style={{margin:0, maxWidth:"16ch"}}>Two disciplines, one bottom line.</h2>
              </window.LineReveal>
            </div>
            <window.Reveal from="right" delay={0.15}>
              <a className="btn btn-ghost" onClick={() => setRoute("services")}>View all services <span className="arrow">→</span></a>
            </window.Reveal>
          </div>

          <window.StaggerReveal baseDelay={0.05} stagger={0.12} className="services-grid" style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:24}}>
            {/* Web card */}
            <div style={{border:"1px solid var(--hairline-strong)", borderRadius:20, overflow:"hidden", background:"var(--paper)"}}>
              <div style={{aspectRatio:"16/9", position:"relative", overflow:"hidden", background:"#ffffff"}}>
                {/* CoreDesign-inspired agency site */}
                <div style={{position:"absolute",inset:0,fontFamily:"var(--grotesk)",display:"flex",flexDirection:"column"}}>
                  {/* nav */}
                  <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"10px 18px",borderBottom:"1px solid #f0f1f5",flexShrink:0}}>
                    <div style={{display:"flex",alignItems:"center",gap:5}}>
                      <div style={{width:16,height:16,borderRadius:4,background:"#e8272c",display:"flex",alignItems:"center",justifyContent:"center"}}>
                        <svg width="9" height="9" viewBox="0 0 9 9"><rect x="1" y="1" width="3" height="3" rx="0.5" fill="#fff"/><rect x="5" y="1" width="3" height="3" rx="0.5" fill="#fff"/><rect x="1" y="5" width="3" height="3" rx="0.5" fill="#fff"/><rect x="5" y="5" width="3" height="3" rx="0.5" fill="rgba(255,255,255,0.5)"/></svg>
                      </div>
                      <span style={{fontSize:12,fontWeight:800,color:"#1a1a2e",letterSpacing:"-0.02em"}}>Core<span style={{fontWeight:400}}>Design</span></span>
                    </div>
                    <div style={{display:"flex",gap:14}}>{["Services","Portfolio","About","Blog"].map(l=><div key={l} style={{fontSize:9,color:"#555e72",fontWeight:500}}>{l}</div>)}</div>
                    <div style={{background:"#e8272c",borderRadius:6,padding:"5px 12px",fontSize:9,fontWeight:700,color:"#fff"}}>Contact →</div>
                  </div>
                  {/* hero */}
                  <div style={{padding:"14px 18px 10px",background:"#ffffff",flexShrink:0,position:"relative",overflow:"hidden",flex:1}}>
                    <div style={{position:"absolute",top:-20,right:-10,width:120,height:120,borderRadius:"50%",background:"rgba(232,39,44,0.08)"}}></div>
                    <div style={{position:"absolute",top:10,right:20,width:55,height:55,borderRadius:"50%",background:"rgba(232,39,44,0.13)"}}></div>
                    <div style={{fontSize:9,fontWeight:700,color:"#e8272c",letterSpacing:"0.1em",textTransform:"uppercase",marginBottom:5}}>Better Design Studio</div>
                    <div style={{fontSize:20,fontWeight:800,color:"#1a1a2e",letterSpacing:"-0.035em",lineHeight:1.1,marginBottom:8}}>
                      <span style={{color:"#e8272c"}}>Better</span> Design<br/>For Your Products.
                    </div>
                    <p style={{fontSize:9,color:"#6b7280",lineHeight:1.5,marginBottom:10,maxWidth:"70%"}}>We craft user-centered digital experiences that convert visitors into loyal customers.</p>
                    <div style={{display:"flex",gap:8,alignItems:"center"}}>
                      <div style={{background:"#e8272c",borderRadius:6,padding:"7px 16px"}}><span style={{fontSize:9,color:"#fff",fontWeight:700}}>About Us</span></div>
                      <div style={{display:"flex",alignItems:"center",gap:5,background:"#f8f8fa",borderRadius:6,padding:"6px 12px",border:"1px solid #eaedf2"}}>
                        <span style={{fontSize:9,color:"#1a1a2e",fontWeight:600}}>24+ Projects</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* label */}
                <div style={{position:"absolute",bottom:10,left:14,right:14,display:"flex",justifyContent:"space-between",alignItems:"center",zIndex:2}}>
                  <span style={{fontSize:10,color:"rgba(26,26,46,0.6)",fontFamily:"var(--mono)",letterSpacing:"0.08em",textTransform:"uppercase",background:"rgba(255,255,255,0.9)",padding:"3px 8px",borderRadius:5}}>coredesign.studio</span>
                  <span style={{background:"var(--accent)",color:"#fff",borderRadius:999,padding:"4px 10px",fontSize:9,fontFamily:"var(--mono)",letterSpacing:"0.1em",textTransform:"uppercase",fontWeight:600}}>Live</span>
                </div>
              </div>
              <div style={{padding:"28px 32px 32px"}}>
                <div className="eyebrow" style={{marginBottom:12}}>Web design &amp; build</div>
                <h3 className="display upright" style={{fontSize:34, margin:"0 0 14px", letterSpacing:"-0.03em", fontWeight:700}}>Websites</h3>
                <p className="muted" style={{margin:"0 0 24px", fontSize:15, lineHeight:1.55}}>
                  Editorially designed, conversion-engineered. From a single landing page to multi-market commerce. Built in code, never templates.
                </p>
                <div style={{display:"flex", gap:16, flexWrap:"wrap"}}>
                  {["Custom design","Next.js / Webflow","Core Web Vitals"].map((t,k)=>(
                    <span key={k} style={{fontSize:12, color:"var(--ink-2)", background:"var(--paper-2)", border:"1px solid var(--hairline)", borderRadius:999, padding:"5px 12px", fontFamily:"var(--mono)", letterSpacing:"0.06em"}}>{t}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Ads card */}
            <div style={{border:"1px solid var(--hairline-strong)", borderRadius:20, overflow:"hidden", background:"var(--paper)"}}>
              <div style={{aspectRatio:"16/9", position:"relative", background:"#f0f4fa", overflow:"hidden", display:"flex"}}>
                {/* Sidebar */}
                <div style={{width:52,background:"#0f1b35",display:"flex",flexDirection:"column",alignItems:"center",padding:"12px 0",gap:0,flexShrink:0}}>
                  <div style={{width:24,height:24,borderRadius:7,background:"linear-gradient(135deg,#f97316,#fb923c)",display:"flex",alignItems:"center",justifyContent:"center",marginBottom:12}}>
                    <svg width="11" height="11" viewBox="0 0 11 11"><rect x="1" y="1" width="4" height="4" rx="1" fill="#fff"/><rect x="6" y="1" width="4" height="4" rx="1" fill="rgba(255,255,255,0.45)"/><rect x="1" y="6" width="4" height="4" rx="1" fill="rgba(255,255,255,0.45)"/><rect x="6" y="6" width="4" height="4" rx="1" fill="#fff"/></svg>
                  </div>
                  {[true,false,false,false,false].map((active,k)=>(
                    <div key={k} style={{width:30,height:30,borderRadius:7,display:"flex",alignItems:"center",justifyContent:"center",background:active?"rgba(249,115,22,0.15)":"transparent",marginBottom:3}}>
                      <div style={{width:12,height:12,borderRadius:3,background:active?"#f97316":"rgba(255,255,255,0.2)"}}></div>
                    </div>
                  ))}
                  <div style={{flex:1}}></div>
                  <div style={{fontSize:7,color:"#f97316",fontWeight:700}}>↩</div>
                </div>
                {/* Main */}
                <div style={{flex:1,display:"flex",flexDirection:"column",overflow:"hidden"}}>
                  {/* Header */}
                  <div style={{padding:"10px 14px 6px",display:"flex",justifyContent:"space-between",alignItems:"center",flexShrink:0}}>
                    <span style={{fontSize:12,fontWeight:800,color:"#0f1b35",letterSpacing:"-0.02em"}}>Welcome Back, Anthony</span>
                    <div style={{width:20,height:20,borderRadius:999,background:"linear-gradient(135deg,#f97316,#fb923c)",display:"flex",alignItems:"center",justifyContent:"center"}}>
                      <span style={{fontSize:8,color:"#fff",fontWeight:700}}>A</span>
                    </div>
                  </div>
                  {/* KPI row */}
                  <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:6,padding:"0 12px 6px",flexShrink:0}}>
                    {[["12.4k","Sessions","↗ +8.3%","#22c55e"],["3,820","Leads","↗ +4.1%","#22c55e"],["€9,240","Ad spend","↗ +2.7%","#22c55e"],["6.8×","ROAS","↗ +1.2×","#22c55e"]].map(([v,l,d,c],k)=>(
                      <div key={k} className="mockup-kpi" style={{background:"#ffffff",borderRadius:9,padding:"8px 9px",border:"1px solid #e8edf5"}}>
                        <div style={{fontSize:13,fontWeight:800,color:"#0f1b35",letterSpacing:"-0.03em",lineHeight:1,marginBottom:2}}>{v}</div>
                        <div style={{fontSize:7,color:"#8b98b0",marginBottom:2}}>{l}</div>
                        <div style={{fontSize:7,color:c,fontWeight:600}}>{d}</div>
                      </div>
                    ))}
                  </div>
                  {/* Chart + donut */}
                  <div style={{display:"grid",gridTemplateColumns:"1fr 70px",gap:6,padding:"0 12px 8px",flex:1,minHeight:0}}>
                    <div style={{background:"#ffffff",borderRadius:9,padding:"8px 10px",border:"1px solid #e8edf5",display:"flex",flexDirection:"column"}}>
                      <div style={{display:"flex",justifyContent:"space-between",marginBottom:4,flexShrink:0}}>
                        <span style={{fontSize:8.5,fontWeight:700,color:"#0f1b35"}}>Ad Performance</span>
                        <div style={{display:"flex",gap:6}}>
                          {[["#0f1b35","Offline"],["#f97316","Online"]].map(([c,l])=>(
                            <div key={l} style={{display:"flex",alignItems:"center",gap:2}}>
                              <div style={{width:5,height:5,borderRadius:"50%",background:c}}></div>
                              <span style={{fontSize:6.5,color:"#8b98b0"}}>{l}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <svg viewBox="0 0 160 44" preserveAspectRatio="none" style={{width:"100%",flex:1}}>
                        <defs>
                          <linearGradient id="hog" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#f97316" stopOpacity="0.18"/><stop offset="100%" stopColor="#f97316" stopOpacity="0"/></linearGradient>
                          <linearGradient id="hng" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#0f1b35" stopOpacity="0.1"/><stop offset="100%" stopColor="#0f1b35" stopOpacity="0"/></linearGradient>
                        </defs>
                        {[11,22,33].map(y=><line key={y} x1="0" y1={y} x2="160" y2={y} stroke="#e8edf5" strokeWidth="0.5"/>)}
                        <path d="M0 38 C18 36,36 31,54 28 C72 25,90 27,108 20 C126 13,142 15,160 10 L160 44 L0 44 Z" fill="url(#hng)"/>
                        <path d="M0 38 C18 36,36 31,54 28 C72 25,90 27,108 20 C126 13,142 15,160 10" fill="none" stroke="#0f1b35" strokeWidth="1.4"/>
                        <path d="M0 41 C18 39,36 36,54 34 C72 32,90 29,108 27 C126 25,142 22,160 20 L160 44 L0 44 Z" fill="url(#hog)"/>
                        <path className="mockup-line" d="M0 41 C18 39,36 36,54 34 C72 32,90 29,108 27 C126 25,142 22,160 20" fill="none" stroke="#f97316" strokeWidth="1.4"/>
                        <circle cx="108" cy="20" r="2.5" fill="#0f1b35"/>
                        <circle cx="160" cy="20" r="2.5" fill="#f97316"/>
                      </svg>
                    </div>
                    {/* Donut */}
                    <div style={{background:"#ffffff",borderRadius:9,padding:"8px",border:"1px solid #e8edf5",display:"flex",flexDirection:"column",alignItems:"center"}}>
                      <div style={{fontSize:7.5,fontWeight:700,color:"#0f1b35",marginBottom:4,alignSelf:"flex-start"}}>ROAS</div>
                      <svg width="48" height="48" viewBox="0 0 48 48">
                        <circle cx="24" cy="24" r="17" fill="none" stroke="#e8edf5" strokeWidth="7"/>
                        <circle cx="24" cy="24" r="17" fill="none" stroke="#0f1b35" strokeWidth="7" strokeDasharray="63 44" strokeDashoffset="22" strokeLinecap="round"/>
                        <circle cx="24" cy="24" r="17" fill="none" stroke="#f97316" strokeWidth="7" strokeDasharray="25 82" strokeDashoffset="-41" strokeLinecap="round"/>
                        <circle cx="24" cy="24" r="17" fill="none" stroke="#fb7185" strokeWidth="7" strokeDasharray="17 90" strokeDashoffset="-66" strokeLinecap="round"/>
                        <text x="24" y="26" textAnchor="middle" fontSize="8" fontWeight="800" fill="#0f1b35" fontFamily="var(--grotesk)">6.8×</text>
                      </svg>
                      <div style={{display:"flex",flexDirection:"column",gap:2,marginTop:3,width:"100%"}}>
                        {[["#0f1b35","Meta"],["#f97316","Google"],["#fb7185","Other"]].map(([c,l])=>(
                          <div key={l} style={{display:"flex",alignItems:"center",gap:3}}>
                            <div style={{width:5,height:5,borderRadius:1,background:c}}></div>
                            <span style={{fontSize:6.5,color:"#8b98b0"}}>{l}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{padding:"28px 32px 32px"}}>
                <div className="eyebrow" style={{marginBottom:12}}>Paid acquisition</div>
                <h3 className="display upright" style={{fontSize:34, margin:"0 0 14px", letterSpacing:"-0.03em", fontWeight:700}}>Paid ads</h3>
                <p className="muted" style={{margin:"0 0 24px", fontSize:15, lineHeight:1.55}}>
                  Meta and Google campaigns built on creative testing and tight measurement. We chase qualified pipeline, not vanity reach.
                </p>
                <div style={{display:"flex", gap:16, flexWrap:"wrap"}}>
                  {["Meta & Google","Creative testing","Attribution"].map((t,k)=>(
                    <span key={k} style={{fontSize:12, color:"var(--ink-2)", background:"var(--paper-2)", border:"1px solid var(--hairline)", borderRadius:999, padding:"5px 12px", fontFamily:"var(--mono)", letterSpacing:"0.06em"}}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </window.StaggerReveal>
        </div>
      </section>

      {/* PROCESS */}
      <section style={{padding:"100px 0", background:"var(--paper-2)", borderTop:"1px solid var(--hairline-strong)"}}>
        <div className="wrap">
          <div className="process-grid" style={{display:"grid", gridTemplateColumns:"1fr 2fr", gap:80, alignItems:"start"}}>
            <div>
              <window.Reveal from="bottom" delay={0}>
                <div className="eyebrow" style={{marginBottom:20}}>How we work</div>
              </window.Reveal>
              <window.LineReveal delay={0.1}>
                <h2 className="display upright h-display-sm" style={{margin:"0 0 20px", maxWidth:"12ch"}}>From brief to live in weeks, not months.</h2>
              </window.LineReveal>
              <window.Reveal from="bottom" delay={0.22}>
                <p className="muted" style={{fontSize:15, lineHeight:1.6, margin:0}}>Most engagements run four to eight weeks. You're never more than 48 hours from a decision.</p>
              </window.Reveal>
            </div>
            <window.StaggerReveal baseDelay={0.05} stagger={0.1} from="bottom">
              {[
                {num:"01", title:"Brief",    time:"Week 1",    desc:"60-minute call, written scope, fixed price within 48 hours. No retainers until we agree on a number.",   tags:["Discovery call","Written scope"]},
                {num:"02", title:"Strategy", time:"Week 1–2",  desc:"Audience map, offer audit, KPI tree, and creative brief. Everything in writing before a single pixel is drawn.", tags:["Audience map","KPI tree"]},
                {num:"03", title:"Build",    time:"Week 2–7",  desc:"Design and engineering run in parallel. One Loom update every Friday. No status meetings.", tags:["Design","Engineering","Loom updates"]},
                {num:"04", title:"Compound", time:"Ongoing",   desc:"Weekly creative tests and site iterations. A written monthly retro: what changed, what moved, what's next.", tags:["Weekly tests","Monthly retros"]},
              ].map(({num,title,time,desc,tags},i) => (
                <div key={i} style={{display:"grid", gridTemplateColumns:"80px 1fr", gap:24, paddingBottom:32, marginBottom:i<3?32:0, borderBottom:i<3?"1px solid var(--hairline-strong)":"none"}}>
                  <div style={{paddingTop:4}}>
                    <div style={{fontFamily:"var(--mono)", fontSize:10, letterSpacing:"0.14em", textTransform:"uppercase", color:"var(--accent)", marginBottom:6}}>{num}</div>
                    <div style={{fontFamily:"var(--mono)", fontSize:10, letterSpacing:"0.08em", color:"var(--muted)"}}>{time}</div>
                  </div>
                  <div>
                    <h4 className="display upright" style={{fontSize:24, margin:"0 0 10px", letterSpacing:"-0.025em", fontWeight:700}}>{title}</h4>
                    <p className="muted" style={{margin:"0 0 14px", fontSize:14, lineHeight:1.6}}>{desc}</p>
                    <div style={{display:"flex", gap:8, flexWrap:"wrap"}}>
                      {tags.map((t,k)=>(
                        <span key={k} style={{fontSize:11, color:"var(--ink-2)", background:"var(--paper)", border:"1px solid var(--hairline-strong)", borderRadius:999, padding:"4px 11px", fontFamily:"var(--mono)", letterSpacing:"0.06em"}}>{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </window.StaggerReveal>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{padding:"100px 0"}}>
        <div className="wrap">
          <div className="faq-grid" style={{display:"grid", gridTemplateColumns:"1fr 1.4fr", gap:80, alignItems:"start"}}>
            <div>
              <div className="eyebrow" style={{marginBottom:16}}>FAQ</div>
              <h2 className="display upright h-display-sm" style={{margin:0, maxWidth:"12ch"}}>Common questions.</h2>
            </div>
            <FAQAccordion items={[
              ["How long does a project take?",      "Most websites ship in four to eight weeks. Paid campaigns can go live in one to two weeks if creative is ready."],
              ["What does it actually cost?",        "Fixed pricing — setup fee once, flat monthly retainer. No hourly billing, no scope creep surprises. If we go over, that's on us."],
              ["Do you only work with big brands?",  "No. Most clients are seed to Series B. We have a Starter tier built specifically for teams that are still finding traction."],
              ["Can you take over an existing site?","Often yes. We audit first and tell you honestly if a rebuild is cheaper than a rescue. No upsell pressure."],
              ["What's your process?",               "Brief → strategy → build → compound. You get a written scope, weekly Loom updates, and a monthly retro. No status meetings."],
              ["Where is the team based?",           "Legal entity in San Francisco. The team is distributed across a few time zones — faster response, not slower."],
            ]} />
          </div>
        </div>
      </section>

      <CTASection
        setRoute={setRoute}
        title={<>Ready when<br/>you are.</>}
        description="One 30-minute call. We'll audit your site or ad account live and tell you two or three things to fix this week, paid or not."
        buttonText="Book a call"
      />
    </div>
  );
}

window.HomePage = HomePage;
