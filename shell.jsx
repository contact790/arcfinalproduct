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
function Nav({ route, setRoute, className, lang, setLang }) {
  const [scrolled, setScrolled] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isMK = lang === "mk";
  const items = [
    { id: "home",     label: isMK ? "Почетна" : "Home" },
    { id: "services", label: isMK ? "Услуги" : "Services" },
    { id: "work",     label: isMK ? "Работи" : "Work" },
    { id: "pricing",  label: isMK ? "Цени" : "Pricing" },
    { id: "contact",  label: isMK ? "Контакт" : "Contact" },
  ];

  function navigate(id) {
    setRoute(id);
    setMenuOpen(false);
  }

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
          <a onClick={() => navigate("home")} style={{display:"flex",alignItems:"center",cursor:"pointer",textDecoration:"none"}}>
            <img src="logo-arc-clean.png" alt="ARC" style={{height:32, width:"auto", display:"block", background:"#ffffff", padding:"4px 6px", borderRadius:6}} />
          </a>
          <div className="nav-links">
            {items.map(it => (
              <a key={it.id}
                 className={"nav-link " + (route === it.id ? "active" : "")}
                 onClick={() => navigate(it.id)}>
                {it.label}
              </a>
            ))}
          </div>
          <div style={{display:"flex", alignItems:"center", gap:8}}>
            {setLang && (
              <button
                onClick={() => setLang(lang === "en" ? "mk" : "en")}
                style={{
                  padding:"8px 14px",
                  borderRadius:8,
                  border:"1px solid var(--hairline-strong)",
                  background:"transparent",
                  fontFamily:"var(--mono)",
                  fontSize:11,
                  fontWeight:700,
                  letterSpacing:"0.1em",
                  color:"var(--ink)",
                  cursor:"pointer",
                  textTransform:"uppercase",
                  transition:"background 0.15s ease, color 0.15s ease",
                  whiteSpace:"nowrap",
                }}
                aria-label="Toggle language"
              >
                {lang === "en" ? "MK" : "EN"}
              </button>
            )}
            <a className="btn btn-accent nav-cta-desktop" onClick={() => navigate("contact")} style={{padding:"10px 20px", fontSize:13.5, borderRadius:10}}>
              {lang === "mk" ? "Започни проект" : "Start a project"} <span className="arrow">→</span>
            </a>
          </div>
          <button className="nav-hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
            <span className={"ham-line" + (menuOpen ? " open" : "")}></span>
            <span className={"ham-line" + (menuOpen ? " open" : "")}></span>
            <span className={"ham-line" + (menuOpen ? " open" : "")}></span>
          </button>
        </div>
      </nav>
      {menuOpen && (
        <div className="mobile-menu">
          {items.map(it => (
            <a key={it.id}
               className={"mobile-menu-link" + (route === it.id ? " active" : "")}
               onClick={() => navigate(it.id)}>
              {it.label}
            </a>
          ))}
          <a className="btn btn-accent" onClick={() => navigate("contact")} style={{marginTop:8, width:"100%", justifyContent:"center"}}>
            {lang === "mk" ? "Започни проект" : "Start a project"} <span className="arrow">→</span>
          </a>
          {setLang && (
            <button
              onClick={() => setLang(lang === "en" ? "mk" : "en")}
              style={{
                marginTop:8,
                padding:"11px 14px",
                borderRadius:8,
                border:"1px solid var(--hairline-strong)",
                background:"transparent",
                fontFamily:"var(--mono)",
                fontSize:12,
                fontWeight:700,
                letterSpacing:"0.1em",
                color:"var(--ink)",
                cursor:"pointer",
                textTransform:"uppercase",
                width:"100%",
              }}
            >
              {lang === "en" ? "Македонски (MK)" : "English (EN)"}
            </button>
          )}
        </div>
      )}
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
        <div className="cta-box">
          <div style={{position:"absolute", top:"-40%", right:"-10%", width:"60%", aspectRatio:"1", background:"radial-gradient(circle, rgba(255,255,255,0.12) 0%, transparent 70%)", pointerEvents:"none"}} />
          <div className="cta-inner">
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
function Footer({ setRoute, lang }) {
  const isMK = lang === "mk";
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <h3 className="display upright" style={{fontSize:56, margin:0, lineHeight:0.95, letterSpacing:"-0.03em", color:"var(--ink)"}}>
              {isMK ? <>Да ги<br/>поместиме броевите.</> : <>Let's make<br/>numbers move.</>}
            </h3>
            <a className="btn btn-accent" style={{marginTop:32}} onClick={() => setRoute("contact")}>
              {isMK ? "Започни проект" : "Start a project"} <span className="arrow">→</span>
            </a>
            <div style={{marginTop:20, fontSize:14, color:"var(--muted)"}}>contact@arcaiagency.net</div>
          </div>
          <div>
            <div className="eyebrow" style={{marginBottom:18}}>{isMK ? "Страница" : "Site"}</div>
            <ul className="clean" style={{display:"flex", flexDirection:"column", gap:10, fontSize:14}}>
              {(isMK
                ? [["home","Почетна"],["services","Услуги"],["work","Работи"],["pricing","Цени"],["contact","Контакт"]]
                : [["home","Index"],["services","Services"],["work","Work"],["pricing","Pricing"],["contact","Contact"]]
              ).map(([id,label]) => (
                <li key={id} style={{cursor:"pointer"}} onClick={() => setRoute(id)}>{label}</li>
              ))}
            </ul>
          </div>
          <div>
            <div className="eyebrow" style={{marginBottom:18}}>{isMK ? "Практика" : "Practice"}</div>
            <ul className="clean" style={{display:"flex", flexDirection:"column", gap:10, fontSize:14}}>
              {isMK ? (
                <>
                  <li>Веб дизајн</li>
                  <li>Веб развој</li>
                  <li>Платено огласување</li>
                  <li>Meta &amp; Google огласи</li>
                  <li>Конверзиски дизајн</li>
                </>
              ) : (
                <>
                  <li>Web design</li>
                  <li>Web development</li>
                  <li>Paid acquisition</li>
                  <li>Meta &amp; Google Ads</li>
                  <li>Conversion design</li>
                </>
              )}
            </ul>
          </div>
          <div>
            <div className="eyebrow" style={{marginBottom:18}}>{isMK ? "Другаде" : "Elsewhere"}</div>
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
            <a onClick={() => setRoute("privacy")} style={{fontSize:11, letterSpacing:"0.1em", color:"var(--ink-2)", textTransform:"uppercase", fontFamily:"var(--mono)", cursor:"pointer"}}>{isMK ? "Политика за приватност" : "Privacy Policy"}</a>
            <a onClick={() => setRoute("terms")} style={{fontSize:11, letterSpacing:"0.1em", color:"var(--ink-2)", textTransform:"uppercase", fontFamily:"var(--mono)", cursor:"pointer"}}>{isMK ? "Услови за користење" : "Terms of Use"}</a>
            <span style={{fontSize:11, letterSpacing:"0.1em", color:"var(--ink-2)", textTransform:"uppercase", fontFamily:"var(--mono)"}}>© 2026 Arc AI Agency</span>
          </div>
          <div className="mono" style={{fontSize:11, letterSpacing:"0.14em", color:"var(--ink-2)", textTransform:"uppercase"}}>
            Skopje, Macedonia · Remote-first
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
