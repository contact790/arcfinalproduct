// ============================================================
// PRIVACY POLICY
// ============================================================

function PrivacyPage({ setRoute, lang }) {
  const isMK = lang === "mk";
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
            <div className="eyebrow" style={{marginBottom:20, color:"#ffffff"}}>{isMK ? "Правно" : "Legal"}</div>
            <h1 className="display upright" style={{margin:0, fontSize:"clamp(40px,5vw,72px)", fontWeight:700, letterSpacing:"-0.04em", lineHeight:1.02, color:"#ffffff"}}>
              {isMK ? "Политика за приватност" : "Privacy Policy"}
            </h1>
            <p style={{marginTop:20, fontSize:15, color:"rgba(255,255,255,0.65)"}}>{isMK ? "Последно ажурирање: мај 2026" : "Last updated: May 2026"}</p>
          </div>
        </div>
      </section>

      <section style={{padding:"80px 0 100px"}}>
        <div className="wrap">
          <div style={{maxWidth:720}}>

            {isMK ? (
              <>
                <Section title="1. Кои сме ние">
                  Arc AI Agency е дигитална агенција за раст која нуди услуги за веб дизајн, развој и платено медиумско огласување. Оваа политика објаснува како собираме, користиме и заштитуваме ваши податоци кога ја посетувате нашата веб страница или се ангажирате со нашите услуги.
                </Section>

                <Section title="2. Податоци кои ги собираме">
                  <p style={{margin:"0 0 12px"}}><strong style={{color:"var(--ink)"}}>Информации кои ги доставувате:</strong></p>
                  <ul style={{margin:"0 0 16px", paddingLeft:20, display:"flex", flexDirection:"column", gap:6}}>
                    <li>Ime и имејл адреса поднесени преку контактни или барателски формулари.</li>
                  </ul>
                  <p style={{margin:"0 0 12px"}}><strong style={{color:"var(--ink)"}}>Технички податоци собрани автоматски:</strong></p>
                  <ul style={{margin:0, paddingLeft:20, display:"flex", flexDirection:"column", gap:6}}>
                    <li>IP адреса, тип на прелистувач и информации за уредот.</li>
                    <li>Колачиња и податоци за употреба преку Meta Pixel и Google Analytics, вклучувајќи посетени страници, времето поминато на сајтот и настани за интеракција.</li>
                  </ul>
                  <p style={{margin:"16px 0 0"}}>Не собираме чувствителни лични податоци, како финансиски информации или здравствени податоци.</p>
                </Section>

                <Section title="3. Kako ги користиме вашите податоци">
                  <p style={{margin:"0 0 12px"}}>Собраните податоци ги користиме за:</p>
                  <ul style={{margin:0, paddingLeft:20, display:"flex", flexDirection:"column", gap:6}}>
                    <li>Одговарање на прашања и испорака на нашите услуги.</li>
                    <li>Мерење и подобрување на перформансите на веб страницата и корисничкото искуство.</li>
                    <li>Спроведување и оптимизација на платени рекламни кампањи на платформите Meta и Google.</li>
                  </ul>
                  <p style={{margin:"16px 0 0"}}>Не ги продаваме вашите лични податоци на трети страни.</p>
                </Section>

                <Section title="4. Услуги на трети страни">
                  <p style={{margin:"0 0 16px"}}>Споделуваме ограничени податоци со следниве доверливи трети страни исклучиво за да ги одржуваме нашите услуги:</p>
                  <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:16}}>
                    {[
                      ["Meta (Facebook)", "Таргетирање на огласи и следење на конверзии", "meta.com/privacy", "https://www.meta.com/privacy"],
                      ["Google", "Аналитика и мерење на перформансите на огласи", "policies.google.com/privacy", "https://policies.google.com/privacy"],
                    ].map(([name, purpose, linkText, href]) => (
                      <div key={name} style={{padding:"20px 24px", background:"var(--paper-2)", borderRadius:12, border:"1px solid var(--hairline)"}}>
                        <div style={{fontWeight:700, fontSize:14, color:"var(--ink)", marginBottom:6}}>{name}</div>
                        <div style={{fontSize:13, marginBottom:10}}>{purpose}</div>
                        <a href={href} target="_blank" rel="noopener noreferrer" style={{fontSize:12, color:"var(--accent)", fontFamily:"var(--mono)"}}>{linkText} ↗</a>
                      </div>
                    ))}
                  </div>
                </Section>

                <Section title="5. Колачиња">
                  Користиме колачиња за да овозможиме функционалност на сајтот и аналитика. Можете да управувате со вашите преференци за колачиња во секое време преку иконата за колачиња во долниот лев агол на екранот. Повлекувањето на согласноста ќе го спречи вчитувањето на ненеопходни скрипти за следење.
                </Section>

                <Section title="6. Вашите права">
                  <p style={{margin:"0 0 12px"}}>Во зависност од вашата локација, може да имате следниве права во однос на вашите лични податоци:</p>
                  <ul style={{margin:0, paddingLeft:20, display:"flex", flexDirection:"column", gap:8}}>
                    {[
                      ["Пристап", "Побарајте копија од податоците кои ги чуваме за вас."],
                      ["Исправка", "Побарајте да ги исправиме неточни или нецелосни податоци."],
                      ["Бришење", "Побарајте бришење на вашите лични податоци, подложно на законски обврски за задржување."],
                      ["Приговор", "Приговарајте на обработката каде се потпираме на легитимен интерес."],
                      ["Преносливост", "Побарајте ги вашите податоци во пренослив, машински читлив формат."],
                    ].map(([right, desc]) => (
                      <li key={right}><strong style={{color:"var(--ink)"}}>{right}</strong> — {desc}</li>
                    ))}
                  </ul>
                  <p style={{margin:"16px 0 0"}}>За да ги остварите овие права, контактирајте нè на адресата подолу. Ќе одговориме во рок од 30 дена.</p>
                </Section>

                <Section title="7. Чување на податоци">
                  Ги чуваме поднесоците на контактниот формулар онолку долго колку е потребно за исполнување на барањето или одржување на деловен однос. Техничките и аналитичките податоци се чуваат во согласност со стандардните периоди на чување на Meta и Google.
                </Section>

                <Section title="8. Безбедност">
                  Применуваме разумни технички и организациски мерки за заштита на вашите податоци од неовластен пристап, губење или откривање. Ниту еден метод на пренос преку интернет не е 100% безбеден; не можеме да гарантираме апсолутна безбедност.
                </Section>

                <Section title="9. Контактирајте нè">
                  <p style={{margin:"0 0 4px"}}>За прашања поврзани со приватноста или за остварување на вашите права, контактирајте нè:</p>
                  <p style={{margin:"12px 0 0"}}>
                    <strong style={{color:"var(--ink)"}}>Arc AI Agency</strong><br/>
                    <a href="mailto:contact@arcaiagency.net" style={{color:"var(--accent)"}}>contact@arcaiagency.net</a>
                  </p>
                </Section>

                <div style={{padding:"24px 28px", background:"var(--paper-2)", borderRadius:12, border:"1px solid var(--hairline)", fontSize:13, color:"var(--muted)", lineHeight:1.6}}>
                  Оваа политика може периодично да се ажурира. Датумот на врвот на оваа страница ја одразува последната ревизија. Продолженото користење на нашиот сајт по секое ажурирање претставува прифаќање на ревидираната политика.
                </div>
              </>
            ) : (
              <>
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
              </>
            )}

          </div>
        </div>
      </section>
    </div>
  );
}

window.PrivacyPage = PrivacyPage;
