// ============================================================
// PRIVACY POLICY
// ============================================================

function PrivacyPage({ setRoute }) {
  const Section = ({ title, children }) => (
    <div style={{marginBottom:48}}>
      <h2 className="display upright" style={{fontSize:26, fontWeight:700, letterSpacing:"-0.03em", margin:"0 0 16px"}}>{title}</h2>
      <div style={{fontSize:15, lineHeight:1.75, color:"var(--muted)"}}>{children}</div>
    </div>
  );

  return (
    <div className="page-enter">
      <section className="page-hero">
        <div className="wrap">
          <div style={{position:"relative", zIndex:1}}>
            <div className="eyebrow" style={{marginBottom:20, color:"#ffffff"}}>Legal</div>
            <h1 className="display upright" style={{margin:0, fontSize:"clamp(40px,5vw,72px)", fontWeight:700, letterSpacing:"-0.04em", lineHeight:1.02, color:"#ffffff"}}>
              Privacy Policy
            </h1>
            <p style={{marginTop:20, fontSize:15, color:"rgba(255,255,255,0.65)"}}>Last updated: May 2026</p>
          </div>
        </div>
      </section>

      <section style={{padding:"80px 0 100px"}}>
        <div className="wrap">
          <div style={{maxWidth:720}}>

            <Section title="1. Who We Are">
              Arc AI Agency is a digital growth agency providing web design, development, and paid media services. This policy explains how we collect, use, and protect your data when you visit our website or engage with our services.
            </Section>

            <Section title="2. Data We Collect">
              <p style={{margin:"0 0 12px"}}><strong style={{color:"var(--ink)"}}>Information you provide:</strong></p>
              <ul style={{margin:"0 0 16px", paddingLeft:20, display:"flex", flexDirection:"column", gap:6}}>
                <li>Name and email address submitted via contact or inquiry forms.</li>
              </ul>
              <p style={{margin:"0 0 12px"}}><strong style={{color:"var(--ink)"}}>Technical data collected automatically:</strong></p>
              <ul style={{margin:0, paddingLeft:20, display:"flex", flexDirection:"column", gap:6}}>
                <li>IP address, browser type, and device information.</li>
                <li>Cookies and usage data via Meta Pixel and Google Analytics, including pages visited, time on site, and interaction events.</li>
              </ul>
              <p style={{margin:"16px 0 0"}}>We do not collect sensitive personal data such as financial details or health information.</p>
            </Section>

            <Section title="3. How We Use Your Data">
              <p style={{margin:"0 0 12px"}}>We use the data collected to:</p>
              <ul style={{margin:0, paddingLeft:20, display:"flex", flexDirection:"column", gap:6}}>
                <li>Respond to inquiries and deliver our services.</li>
                <li>Measure and improve website performance and user experience.</li>
                <li>Run and optimise paid advertising campaigns on Meta and Google platforms.</li>
              </ul>
              <p style={{margin:"16px 0 0"}}>We do not sell your personal data to any third party.</p>
            </Section>

            <Section title="4. Third-Party Services">
              <p style={{margin:"0 0 16px"}}>We share limited data with the following trusted third parties solely to operate our services:</p>
              <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:16}}>
                {[
                  ["Meta (Facebook)", "Ad targeting and conversion tracking", "meta.com/privacy", "https://www.meta.com/privacy"],
                  ["Google", "Analytics and ad performance measurement", "policies.google.com/privacy", "https://policies.google.com/privacy"],
                ].map(([name, purpose, linkText, href]) => (
                  <div key={name} style={{padding:"20px 24px", background:"var(--paper-2)", borderRadius:12, border:"1px solid var(--hairline)"}}>
                    <div style={{fontWeight:700, fontSize:14, color:"var(--ink)", marginBottom:6}}>{name}</div>
                    <div style={{fontSize:13, marginBottom:10}}>{purpose}</div>
                    <a href={href} target="_blank" rel="noopener noreferrer" style={{fontSize:12, color:"var(--accent)", fontFamily:"var(--mono)"}}>{linkText} ↗</a>
                  </div>
                ))}
              </div>
            </Section>

            <Section title="5. Cookies">
              We use cookies to enable site functionality and analytics. You can manage your cookie preferences at any time via the cookie icon in the bottom-left corner of the screen. Withdrawing consent will prevent non-essential tracking scripts from loading.
            </Section>

            <Section title="6. Your Rights">
              <p style={{margin:"0 0 12px"}}>Depending on your location, you may have the following rights regarding your personal data:</p>
              <ul style={{margin:0, paddingLeft:20, display:"flex", flexDirection:"column", gap:8}}>
                {[
                  ["Access", "Request a copy of the data we hold about you."],
                  ["Correction", "Ask us to correct inaccurate or incomplete data."],
                  ["Deletion", "Request that we delete your personal data, subject to any legal obligations to retain it."],
                  ["Objection", "Object to processing where we rely on legitimate interest."],
                  ["Portability", "Request your data in a portable, machine-readable format."],
                ].map(([right, desc]) => (
                  <li key={right}><strong style={{color:"var(--ink)"}}>{right}</strong> — {desc}</li>
                ))}
              </ul>
              <p style={{margin:"16px 0 0"}}>To exercise any of these rights, contact us at the address below. We will respond within 30 days.</p>
            </Section>

            <Section title="7. Data Retention">
              We retain contact form submissions for as long as necessary to fulfil the inquiry or maintain a business relationship. Technical and analytics data is retained in line with the default retention periods set by Meta and Google.
            </Section>

            <Section title="8. Security">
              We apply reasonable technical and organisational measures to protect your data against unauthorised access, loss, or disclosure. No method of transmission over the internet is 100% secure; we cannot guarantee absolute security.
            </Section>

            <Section title="9. Contact Us">
              <p style={{margin:"0 0 4px"}}>For any privacy-related questions or to exercise your rights, please contact:</p>
              <p style={{margin:"12px 0 0"}}>
                <strong style={{color:"var(--ink)"}}>Arc AI Agency</strong><br/>
                <a href="mailto:contact@arcaiagency.net" style={{color:"var(--accent)"}}>contact@arcaiagency.net</a>
              </p>
            </Section>

            <div style={{padding:"24px 28px", background:"var(--paper-2)", borderRadius:12, border:"1px solid var(--hairline)", fontSize:13, color:"var(--muted)", lineHeight:1.6}}>
              This policy may be updated periodically. The date at the top of this page reflects the most recent revision. Continued use of our site following any update constitutes acceptance of the revised policy.
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

window.PrivacyPage = PrivacyPage;
