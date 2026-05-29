// ============================================================
// APP — Router + Tweaks
// ============================================================
const { useState: useStateApp, useEffect: useEffectApp } = React;

const DEFAULTS = /*EDITMODE-BEGIN*/{
  "theme": "paper",
  "accent": "#0052FF",
  "showMarquee": true,
  "boldHeadline": false
}/*EDITMODE-END*/;

function applyTweaks(t) {
  const root = document.documentElement;
  root.dataset.theme = t.theme === "paper" ? "" : t.theme;
  root.style.setProperty("--accent", t.accent);
  root.style.setProperty("--accent-ink", t.accent);
  // hex + 1f = ~12% alpha for soft tint
  root.style.setProperty("--accent-soft", t.accent + "1f");
}

function App() {
  const [route, setRoute] = useStateApp(() => {
    const h = window.location.hash.replace("#","");
    return ["home","services","work","pricing","contact","privacy","terms"].includes(h) ? h : "home";
  });
  const [tweaks, setTweak] = window.useTweaks(DEFAULTS);

  useEffectApp(() => { applyTweaks(tweaks); }, [tweaks]);
  useEffectApp(() => {
    window.location.hash = route;
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [route]);

  // hash change listener
  useEffectApp(() => {
    const onHash = () => {
      const h = window.location.hash.replace("#","");
      if (["home","services","work","pricing","contact","privacy","terms"].includes(h)) setRoute(h);
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  const PageMap = {
    home: window.HomePage,
    services: window.ServicesPage,
    work: window.WorkPage,
    pricing: window.PricingPage,
    contact: window.ContactPage,
    privacy: window.PrivacyPage,
    terms: window.TermsPage,
  };

  // Expose setRoute for cookie banner link
  window.__setRoute = setRoute;
  const Page = PageMap[route] || PageMap.home;

  // Headline weight override (Tweak)
  useEffectApp(() => {
    if (tweaks.boldHeadline) {
      document.body.classList.add("bold-headline");
    } else {
      document.body.classList.remove("bold-headline");
    }
  }, [tweaks.boldHeadline]);

  return (
    <React.Fragment>
      <window.CursorDot />
      <Nav route={route} setRoute={setRoute} />
      <main data-screen-label={route} style={{background:"#ffffff"}}>
        <Page key={route} setRoute={setRoute} />
      </main>
      <Footer setRoute={setRoute} />

      <window.TweaksPanel title="Tweaks">
        <window.TweakSection label="Theme">
          <window.TweakRadio
            label="Mode"
            value={tweaks.theme}
            onChange={(v) => setTweak("theme", v)}
            options={["paper", "ink", "news"]}
          />
        </window.TweakSection>

        <window.TweakSection label="Accent">
          <window.TweakColor
            label="Brand blue"
            value={tweaks.accent}
            onChange={(v) => setTweak("accent", v)}
            options={[
              "#0052FF",
              "#1E40AF",
              "#0EA5E9",
              "#7C3AED",
              "#0A1733",
            ]}
          />
        </window.TweakSection>

        <window.TweakSection label="Display">
          <window.TweakToggle
            label="Italic headlines"
            value={tweaks.boldHeadline}
            onChange={(v) => setTweak("boldHeadline", v)}
          />
        </window.TweakSection>
      </window.TweaksPanel>
    </React.Fragment>
  );
}

// Mount
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

// Inject styles for headline italic override + pulse
const styleEl = document.createElement("style");
styleEl.textContent = `
  .bold-headline .display,
  .bold-headline .h-display,
  .bold-headline .h-display-sm {
    font-style: italic !important;
    font-weight: 500 !important;
  }
  @keyframes pulse {
    0%, 100% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.45; transform: scale(0.9); }
  }
`;
document.head.appendChild(styleEl);
