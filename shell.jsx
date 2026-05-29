// ============================================================
// Shared shell: Nav, Footer, CTA, Marquee, helpers
// ============================================================
const { useState, useEffect, useRef } = React;


// ---------------- Scroll Progress Bar ----------------
function ScrollProgress() {
  const [width, setWidth] = React.useState(0);
  React.useEffect(() => {
    const update = () => {
      const el = document.documentElement;
      const scrolled = el.scrollTop || document.body.scrollTop;
      const total = el.scrollHeight - el.clientHeight;
      setWidth(total > 0 ? (scrolled / total) * 100 : 0);
    };
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
  return (
    <div id="scroll-progress" style={{ width: width + "%" }} />
  );
}

// ---------------- Nav ----------------
function Nav({ route, setRoute, className }) {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const items = [
    { id: "home",     label: "Home" },
    { id: "services", label: "Services" },
    { id: "work",     label: "Work" },
    { id: "pricing",  label: "Pricing" },
    { id: "contact",  label: "Contact" },
  ];
  return (
    <>
      <ScrollProgress />
      <nav className={"nav" + (className ? " " + className : "")}>
        <div className="wrap nav-inner" style={{
          transition: "box-shadow 0.3s ease, background 0.3s ease",
          boxShadow: scrolled
            ? "0 4px 32px rgba(10,23,51,0.16), 0 1px 4px rgba(10,23,51,0.08)"
            : "0 2px 20px rgba(10,23,51,0.12), 0 1px 4px rgba(10,23,51,0.06)",
        }}>
          <a onClick={() => setRoute("home")} style={{display:"flex",alignItems:"center",cursor:"pointer",textDecoration:"none"}}>
            <img src="logo-arc-clean.png" alt="ARC" style={{height:32, width:"auto", display:"block", background:"#ffffff", padding:"4px 6px", borderRadius:6}} />
          </a>
          <div className="nav-links">
            {items.map(it => (
              <a key={it.id}
                 className={"nav-link " + (route === it.id ? "active" : "")}
                 onClick={() => setRoute(it.id)}>
                {it.label}
              </a>
            ))}
          </div>
          <a className="btn btn-accent" onClick={() => setRoute("contact")} style={{padding:"10px 20px", fontSize:13.5, borderRadius:10}}>
            Start a project <span className="arrow">→</span>
          </a>
        </div>
      </nav>
    </>
  );
}

// ---------------- Marquee ----------------
function Marquee({ items, show = true }) {
  if (!show) return null;
  const all = [...items, ...items];
  return (
    <div className="marquee">
      <div className="marquee-track">
        {all.map((t, i) => (
          <span key={i}>
            <span className="marquee-dot"></span>
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

// ---------------- CTA Section ----------------
function CTASection({ title, description, buttonText, setRoute }) {
  return (
    <section style={{padding: "80px 0"}}>
      <div className="wrap">
        <div style={{background:"linear-gradient(180deg, #1245e8 0%, #2d5fff 60%, #6b94ff 100%)", borderRadius:24, padding:"72px 64px", position:"relative", overflow:"hidden"}}>
          {/* soft radial glow */}
          <div style={{position:"absolute", top:"-40%", right:"-10%", width:"60%", aspectRatio:"1", background:"radial-gradient(circle, rgba(255,255,255,0.12) 0%, transparent 70%)", pointerEvents:"none"}} />
          <div style={{position:"relative", zIndex:1, display:"grid", gridTemplateColumns:"1fr auto", gap:48, alignItems:"end"}}>
            <div>
              <h2 className="display h-display-sm" style={{margin:"0 0 20px", maxWidth:"18ch", color:"#ffffff"}}>
                {title}
              </h2>
              <p style={{maxWidth:"54ch", fontSize:17, lineHeight:1.55, color:"rgba(255,255,255,0.95)", margin:0}}>
                {description}
              </p>
            </div>
            <a className="btn btn-lg" onClick={() => setRoute("contact")}
               style={{flexShrink:0, background:"#ffffff", borderColor:"#ffffff", color:"#060e20", fontWeight:700}}>
              {buttonText} <span className="arrow">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------------- Footer ----------------
function Footer({ setRoute }) {
  return (
    <footer className="footer">
      <div className="wrap">
        <div style={{display:"grid", gridTemplateColumns:"2fr 1fr 1fr 1fr", gap:48, alignItems:"start"}}>
          <div>
            <h3 className="display upright" style={{fontSize:56, margin:0, lineHeight:0.95, letterSpacing:"-0.03em", color:"var(--ink)"}}>
              Let's make<br/>numbers move.
            </h3>
            <a className="btn btn-accent" style={{marginTop:32}} onClick={() => setRoute("contact")}>
              Start a project <span className="arrow">→</span>
            </a>
            <div style={{marginTop:20, fontSize:14, color:"var(--muted)"}}>contact@arcaiagency.net</div>
          </div>
          <div>
            <div className="eyebrow" style={{marginBottom:18}}>Site</div>
            <ul className="clean" style={{display:"flex", flexDirection:"column", gap:10, fontSize:14}}>
              {[["home","Index"],["services","Services"],["work","Work"],["pricing","Pricing"],["contact","Contact"]].map(([id,label]) => (
                <li key={id} style={{cursor:"pointer"}} onClick={() => setRoute(id)}>{label}</li>
              ))}
            </ul>
          </div>
          <div>
            <div className="eyebrow" style={{marginBottom:18}}>Practice</div>
            <ul className="clean" style={{display:"flex", flexDirection:"column", gap:10, fontSize:14}}>
              <li>Web design</li>
              <li>Web development</li>
              <li>Paid acquisition</li>
              <li>Meta &amp; Google Ads</li>
              <li>Conversion design</li>
            </ul>
          </div>
          <div>
            <div className="eyebrow" style={{marginBottom:18}}>Elsewhere</div>
            <ul className="clean" style={{display:"flex", flexDirection:"column", gap:10, fontSize:14}}>
              <li>Instagram ↗</li>
              <li>LinkedIn ↗</li>
              <li>Are.na ↗</li>
              <li>Read.cv ↗</li>
            </ul>
          </div>
        </div>

        <div style={{marginTop:72, paddingTop:24, borderTop:"1px solid var(--hairline-strong)", display:"flex", justifyContent:"space-between", flexWrap:"wrap", gap:16, alignItems:"center"}}>
          <img src="logo-arc-clean.png" alt="ARC" style={{height:26, width:"auto", display:"block", mixBlendMode:"multiply"}} />
          <div style={{display:"flex", gap:20, alignItems:"center", flexWrap:"wrap"}}>
            <a onClick={() => setRoute("privacy")} style={{fontSize:11, letterSpacing:"0.1em", color:"var(--ink-2)", textTransform:"uppercase", fontFamily:"var(--mono)", cursor:"pointer"}}>Privacy Policy</a>
            <a onClick={() => setRoute("terms")} style={{fontSize:11, letterSpacing:"0.1em", color:"var(--ink-2)", textTransform:"uppercase", fontFamily:"var(--mono)", cursor:"pointer"}}>Terms of Use</a>
            <span style={{fontSize:11, letterSpacing:"0.1em", color:"var(--ink-2)", textTransform:"uppercase", fontFamily:"var(--mono)"}}>© 2026 Arc AI Agency</span>
          </div>
          <div className="mono" style={{fontSize:11, letterSpacing:"0.14em", color:"var(--ink-2)", textTransform:"uppercase"}}>
            San Francisco · Remote-first
          </div>
        </div>
      </div>
    </footer>
  );
}

// ---------------- Common section header ----------------
function SectionHead({ kicker, title, lede }) {
  return (
    <div style={{marginBottom:64}}>
      <div className="eyebrow" style={{marginBottom:24}}>{kicker}</div>
      <h2 className="display upright h-display-sm" style={{margin:0, maxWidth:"18ch"}}>
        {title}
      </h2>
      {lede && (
        <p className="muted" style={{maxWidth:"58ch", fontSize:18, marginTop:24, lineHeight:1.55}}>
          {lede}
        </p>
      )}
    </div>
  );
}

// ---------------- FAQ Accordion ----------------
function FAQAccordion({ items }) {
  const [open, setOpen] = React.useState(null);
  return (
    <div>
      {items.map(([q, a], i) => (
        <div key={i} className="faq-item">
          <div
            className={"faq-trigger" + (open === i ? " open" : "")}
            onClick={() => setOpen(open === i ? null : i)}
          >
            <h4 style={{margin:0, fontSize:17, fontWeight:600, lineHeight:1.4}}>{q}</h4>
            <div className="faq-arrow">+</div>
          </div>
          <div className={"faq-body" + (open === i ? " open" : "")}>
            <p className="muted" style={{margin:0, fontSize:15, lineHeight:1.6}}>{a}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

// expose
Object.assign(window, { Nav, Marquee, CTASection, Footer, SectionHead, FAQAccordion });
