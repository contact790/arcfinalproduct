// ============================================================
// PRICING
// ============================================================

function PricingPage({ setRoute }) {

  const webTiers = [
    {
      name: "Starter",
      sub:  "Landing page or 3-pager. Live in two to three weeks.",
      setup:"€199",
      mo:   "€30/mo",
      featured: false,
      lines: ["Up to 3 pages","Responsive design","Contact form","Basic SEO","Monthly updates"],
      missing: ["CMS integration","Custom integrations"],
    },
    {
      name: "Standard",
      sub:  "The proper online presence. CMS-driven, several pages.",
      setup:"€499",
      mo:   "€50/mo",
      featured: true,
      lines: ["Up to 7 pages","Custom UI/UX","CMS integration","Advanced SEO","Performance pass","Priority support"],
      missing: ["E-commerce"],
    },
    {
      name: "Premium",
      sub:  "E-commerce, integrations, dedicated team.",
      setup:"€999",
      mo:   "€99/mo",
      featured: false,
      lines: ["Unlimited pages","Full design system","E-commerce","API integrations","Custom backend","Dedicated PM","24/7 support"],
      missing: [],
    },
  ];

  const adsTiers = [
    {
      name: "Spark",
      sub:  "For brands testing paid for the first time.",
      fee:  "€450/mo",
      featured: false,
      lines: ["One platform","Weekly check-in","Creative concepts weekly"],
    },
    {
      name: "Scale",
      sub:  "For brands spending and ready to grow.",
      fee:  "€950/mo",
      featured: true,
      lines: ["Two platforms","Slack channel","Creative concepts weekly","Monthly retro"],
    },
    {
      name: "Compound",
      sub:  "For mature programs with serious volume.",
      fee:  "€1,850/mo",
      featured: false,
      lines: ["Three+ platforms","Dedicated buyer","Unlimited creative","Weekly retros","Quarterly strategy"],
    },
  ];

  function Check({ on, dark }) {
    if (on) return (
      <span style={{width:16,height:16,borderRadius:"50%",background: dark ? "rgba(255,255,255,0.12)" : "var(--accent-soft)",display:"inline-flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>
        <svg width="8" height="6" viewBox="0 0 8 6" fill="none">
          <path d="M1 3l2 2 4-4" stroke={dark ? "#fff" : "var(--accent)"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </span>
    );
    return <span style={{width:16,height:16,borderRadius:"50%",background: dark ? "rgba(255,255,255,0.06)" : "var(--paper-3)",display:"inline-flex",flexShrink:0}}></span>;
  }

  return (
    <div className="page-enter">

      {/* HERO */}
      <section className="page-hero">
        <div className="wrap">
          <div className="pricing-hero-grid" style={{alignItems:"end", position:"relative", zIndex:1}}>
            <div>
              <div className="eyebrow" style={{marginBottom:24, color:"#ffffff"}}>Pricing</div>
              <h1 className="display upright" style={{margin:0, fontSize:"clamp(48px, 6.2vw, 88px)", fontWeight:700, letterSpacing:"-0.04em", lineHeight:1.02, color:"#ffffff"}}>
                <span style={{display:"block"}}>Fixed pricing.</span>
                <span style={{display:"block"}}><span style={{color:"var(--accent)"}}>No surprises.</span></span>
              </h1>
            </div>
            <p style={{fontSize:18, lineHeight:1.6, maxWidth:"42ch", color:"rgba(255,255,255,0.85)", margin:0}}>
              Setup fees you pay once. A flat monthly that keeps the site healthy and the team on retainer. If we go over scope, that's on us — not you.
            </p>
          </div>
        </div>
      </section>

      {/* WEB TIERS */}
      <section style={{padding:"80px 0"}}>
        <div className="wrap">
          <div style={{display:"flex", justifyContent:"space-between", alignItems:"flex-end", marginBottom:48, flexWrap:"wrap", gap:20}}>
            <div>
              <div className="eyebrow" style={{marginBottom:12}}>Web design &amp; build</div>
              <h2 className="display upright h-display-sm" style={{margin:0}}>Pick a tier.</h2>
            </div>
            <p className="muted" style={{maxWidth:"44ch", fontSize:15, margin:0, lineHeight:1.55}}>Or don't — we scope custom too. Every engagement starts with a 30-minute call.</p>
          </div>

          <window.StaggerReveal className="pricing-web-tiers" style={{}} baseDelay={0.05} stagger={0.12}>
            {webTiers.map((t,i) => (
              <div key={i} className="pricing-card" style={{
                borderRadius:16,
                border: t.featured ? "none" : "1px solid var(--hairline-strong)",
                background: t.featured ? "var(--ink)" : "var(--paper)",
                color: t.featured ? "#fff" : "inherit",
                padding:"32px 28px",
                display:"flex",
                flexDirection:"column",
                gap:0,
                position:"relative",
                transform: t.featured ? "translateY(-8px)" : "none",
                boxShadow: t.featured ? "0 24px 56px -16px rgba(10,23,51,0.30)" : "none",
              }}>
                {t.featured && (
                  <div style={{position:"absolute",top:-12,left:24,background:"var(--accent)",color:"#ffffff",padding:"4px 12px",fontFamily:"var(--mono)",fontSize:10,letterSpacing:"0.14em",textTransform:"uppercase",fontWeight:600,borderRadius:999}}>
                    Most picked
                  </div>
                )}
                <div style={{marginBottom:20}}>
                  <h3 style={{fontFamily:"var(--display)",fontSize:24,fontWeight:700,margin:"0 0 6px",letterSpacing:"-0.025em"}}>{t.name}</h3>
                  <p style={{margin:0,fontSize:13,lineHeight:1.5,color:t.featured?"rgba(255,255,255,0.55)":"var(--muted)"}}>{t.sub}</p>
                </div>

                {/* Price block */}
                <div style={{padding:"18px 0",borderTop:t.featured?"1px solid rgba(255,255,255,0.12)":"1px solid var(--hairline)",borderBottom:t.featured?"1px solid rgba(255,255,255,0.12)":"1px solid var(--hairline)",marginBottom:20}}>
                  <div style={{display:"flex",alignItems:"baseline",gap:6,marginBottom:8}}>
                    <span style={{fontFamily:"var(--display)",fontWeight:700,fontSize:38,letterSpacing:"-0.04em",color:t.featured?"#fff":"var(--ink)"}}>{t.setup}</span>
                    <span style={{fontFamily:"var(--mono)",fontSize:10,letterSpacing:"0.12em",textTransform:"uppercase",color:t.featured?"rgba(255,255,255,0.45)":"var(--ink-2)"}}>setup</span>
                  </div>
                  <div style={{display:"flex",alignItems:"center",gap:8,background:t.featured?"rgba(255,255,255,0.07)":"var(--paper-2)",borderRadius:8,padding:"8px 12px"}}>
                    <span style={{fontFamily:"var(--display)",fontWeight:700,fontSize:20,letterSpacing:"-0.025em",color:t.featured?"#7eb3ff":"var(--accent)"}}>{t.mo}</span>
                    <span style={{fontFamily:"var(--mono)",fontSize:10,letterSpacing:"0.1em",textTransform:"uppercase",color:t.featured?"rgba(255,255,255,0.4)":"var(--ink-2)"}}>retainer</span>
                  </div>
                </div>

                {/* Feature list */}
                <ul className="clean" style={{flex:1,display:"flex",flexDirection:"column",gap:0,marginBottom:24}}>
                  {t.lines.map((l,k) => (
                    <li key={k} style={{display:"flex",alignItems:"center",gap:10,padding:"9px 0",borderBottom:k<t.lines.length-1?(t.featured?"1px solid rgba(255,255,255,0.08)":"1px solid var(--hairline)"):"none"}}>
                      <Check on={true} dark={t.featured}/>
                      <span style={{fontSize:13,color:t.featured?"rgba(255,255,255,0.85)":"var(--ink)"}}>{l}</span>
                    </li>
                  ))}
                  {t.missing.map((l,k) => (
                    <li key={"m"+k} style={{display:"flex",alignItems:"center",gap:10,padding:"9px 0",borderTop:t.featured?"1px solid rgba(255,255,255,0.08)":"1px solid var(--hairline)"}}>
                      <Check on={false} dark={t.featured}/>
                      <span style={{fontSize:13,opacity:0.35}}>{l}</span>
                    </li>
                  ))}
                </ul>

                <a className={t.featured ? "btn btn-accent" : "btn btn-ghost"}
                   onClick={() => setRoute("contact")}
                   style={{justifyContent:"center"}}>
                  Get started <span className="arrow">→</span>
                </a>
              </div>
            ))}
          </window.StaggerReveal>
        </div>
      </section>

      {/* ADS TIERS */}
      <section style={{padding:"80px 0 100px", borderTop:"1px solid var(--hairline-strong)", background:"var(--paper-2)"}}>
        <div className="wrap">
          <div style={{display:"flex", justifyContent:"space-between", alignItems:"flex-end", marginBottom:48, flexWrap:"wrap", gap:20}}>
            <div>
              <div className="eyebrow" style={{marginBottom:12}}>Paid acquisition</div>
              <h2 className="display upright h-display-sm" style={{margin:0}}>Management fee.</h2>
            </div>
            <p className="muted" style={{maxWidth:"44ch", fontSize:15, margin:0, lineHeight:1.55}}>A flat retainer for setup and creative, plus a small % of media spend. No long-term lock-in.</p>
          </div>

          <window.StaggerReveal className="pricing-ads-tiers" style={{}} baseDelay={0.05} stagger={0.12}>
            {adsTiers.map((t,i) => (
              <div key={i} className="pricing-card" style={{
                borderRadius:16,
                border: t.featured ? "none" : "1px solid var(--hairline-strong)",
                background: t.featured ? "var(--ink)" : "var(--paper)",
                color: t.featured ? "#fff" : "inherit",
                padding:"32px 28px",
                display:"flex",
                flexDirection:"column",
                gap:0,
                position:"relative",
                transform: t.featured ? "translateY(-8px)" : "none",
                boxShadow: t.featured ? "0 24px 56px -16px rgba(10,23,51,0.30)" : "none",
              }}>
                {t.featured && (
                  <div style={{position:"absolute",top:-12,left:24,background:"var(--accent)",color:"#ffffff",padding:"4px 12px",fontFamily:"var(--mono)",fontSize:10,letterSpacing:"0.14em",textTransform:"uppercase",fontWeight:600,borderRadius:999}}>
                    Most picked
                  </div>
                )}
                <div style={{marginBottom:20}}>
                  <h3 style={{fontFamily:"var(--display)",fontSize:24,fontWeight:700,margin:"0 0 6px",letterSpacing:"-0.025em"}}>{t.name}</h3>
                  <p style={{margin:0,fontSize:13,lineHeight:1.5,color:t.featured?"rgba(255,255,255,0.55)":"var(--muted)"}}>{t.sub}</p>
                </div>

                <div style={{padding:"18px 0",borderTop:t.featured?"1px solid rgba(255,255,255,0.12)":"1px solid var(--hairline)",borderBottom:t.featured?"1px solid rgba(255,255,255,0.12)":"1px solid var(--hairline)",marginBottom:20}}>
                  <span style={{fontFamily:"var(--display)",fontWeight:700,fontSize:32,letterSpacing:"-0.035em",color:t.featured?"#7eb3ff":"var(--accent)"}}>{t.fee}</span>
                  <div style={{fontFamily:"var(--mono)",fontSize:10,letterSpacing:"0.12em",textTransform:"uppercase",color:t.featured?"rgba(255,255,255,0.4)":"var(--ink-2)",marginTop:6}}>+ % of media spend</div>
                </div>

                <ul className="clean" style={{flex:1,display:"flex",flexDirection:"column",gap:0,marginBottom:24}}>
                  {t.lines.map((l,k) => (
                    <li key={k} style={{display:"flex",alignItems:"center",gap:10,padding:"9px 0",borderBottom:k<t.lines.length-1?(t.featured?"1px solid rgba(255,255,255,0.08)":"1px solid var(--hairline)"):"none"}}>
                      <Check on={true} dark={t.featured}/>
                      <span style={{fontSize:13,color:t.featured?"rgba(255,255,255,0.85)":"var(--ink)"}}>{l}</span>
                    </li>
                  ))}
                </ul>

                <a className={t.featured ? "btn btn-accent" : "btn btn-ghost"}
                   onClick={() => setRoute("contact")}
                   style={{justifyContent:"center"}}>
                  Get started <span className="arrow">→</span>
                </a>
              </div>
            ))}
          </window.StaggerReveal>
        </div>
      </section>

      {/* FAQ */}
      <section style={{padding:"100px 0"}}>
        <div className="wrap">
          <div className="pricing-faq-grid" style={{alignItems:"start"}}>
            <div>
              <div className="eyebrow" style={{marginBottom:16}}>FAQ</div>
              <h2 className="display upright h-display-sm" style={{margin:0, maxWidth:"12ch"}}>Things people ask first.</h2>
            </div>
            <FAQAccordion items={[
              ["What's the typical timeline?",       "Most websites take four to eight weeks. Paid campaigns can be live in a week or two if creative is ready."],
              ["Do you offer ongoing support?",      "Every package includes post-launch support. After that the retainer keeps things running."],
              ["How does payment work?",             "Half on kickoff, half on delivery for sites. Monthly billing for paid retainers."],
              ["Do you work with startups?",         "Yes — most of our roster is seed to Series B. We have a Starter tier built for early stage."],
              ["Can you take over an existing site?","Often, yes. We'll audit it first and tell you honestly if a rebuild is cheaper than a rescue."],
              ["Where are you based?",               "San Francisco for the legal entity. The team is distributed across a few time zones."],
            ]} />
          </div>
        </div>
      </section>

      <CTASection
        setRoute={setRoute}
        title={<>Not sure<br/>which fits?</>}
        description="We'll listen to where you are, run the math, and recommend the smallest possible package that gets you what you want."
        buttonText="Talk to us"
      />
    </div>
  );
}

window.PricingPage = PricingPage;
