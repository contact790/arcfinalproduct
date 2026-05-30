// ============================================================
// TERMS OF USE
// ============================================================

function TermsPage({ setRoute, lang }) {
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
              {isMK ? "Услови за користење" : "Terms of Use"}
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
                <Section title="1. Прифаќање на условите">
                  Со пристапување или користење на веб страницата на Arc AI Agency, се согласувате да бидете обврзани со овие Услови за користење. Доколку не се согласувате со овие услови, ве молиме не ја користете нашата страница.
                </Section>

                <Section title="2. Користење на страницата">
                  <p style={{margin:"0 0 12px"}}>Се согласувате да ја користите оваа страница само за законски цели. Не смеете:</p>
                  <ul style={{margin:0, paddingLeft:20, display:"flex", flexDirection:"column", gap:8}}>
                    <li>Да ја користите страницата на начин кој ги крши применливите локални, национални или меѓународни закони или регулативи.</li>
                    <li>Да пренесувате несакани комерцијални комуникации или нежелена пошта.</li>
                    <li>Да се обидувате да добиете неовластен пристап до кој било дел од страницата или нејзините поврзани системи.</li>
                    <li>Да репродуцирате, дуплирате или искористувате кој било дел од страницата без наша изречна писмена дозвола.</li>
                  </ul>
                </Section>

                <Section title="3. Интелектуална сопственост">
                  Целата содржина на оваа страница — вклучувајќи текст, графики, логоа, слики и код — е сопственост на Arc AI Agency и е заштитена со применливите закони за интелектуална сопственост. Не смеете да репродуцирате или дистрибуирате содржина без претходна писмена согласност.
                </Section>

                <Section title="4. Услуги и ангажмани">
                  Овие Услови за користење го регулираат пристапот до нашата јавна веб страница исклучиво. Сите платени услуги, проектни работи или тековни ретенери се регулирани со посебен договор со клиент или изјава за работа потпишана помеѓу Arc AI Agency и клиентот.
                </Section>

                <Section title="5. Одрекување од одговорност">
                  Оваа страница е обезбедена „онаква каква е" и „онаква каква е достапна". Arc AI Agency не дава никакви гаранции, изречни или имплицирани, во врска со точноста, целосноста или прикладноста на содржината на страницата. Го задржуваме правото да ја менуваме или укинеме страницата во секое време без претходно известување.
                </Section>

                <Section title="6. Ограничување на одговорноста">
                  Во најголема мера дозволена со закон, Arc AI Agency нема да биде одговорна за каква било индиректна, случајна, посебна или последична штета произлезена од вашето користење или неможноста да ја користите оваа страница или нејзината содржина.
                </Section>

                <Section title="7. Врски до трети страни">
                  Нашата страница може да содржи врски до веб страниците на трети страни. Истите се обезбедени само за погодност. Arc AI Agency нема контрола врз содржината на тие страници и не прифаќа никаква одговорност за нив или за загуба или штета која може да произлезе од нивното користење.
                </Section>

                <Section title="8. Приватност">
                  Вашето користење на оваа страница е исто така регулирано со нашата{" "}
                  <a onClick={() => setRoute("privacy")} style={{color:"var(--accent)", cursor:"pointer"}}>Политика за приватност</a>,
                  која е вклучена во овие Услови за користење со упатување.
                </Section>

                <Section title="9. Промени на условите">
                  Можеме повремено да ги ажурираме овие Услови за користење. Датумот на врвот на оваа страница ја одразува последната ревизија. Продолженото користење на страницата по какви било промени претставува ваше прифаќање на новите услови.
                </Section>

                <Section title="10. Мeродавно право">
                  Овие услови се регулирани со законите на Република Македонија, без оглед на принципите за судир на закони.
                </Section>

                <Section title="11. Контакт">
                  <p style={{margin:"0 0 4px"}}>Доколку имате прашања за овие Услови за користење, контактирајте нè:</p>
                  <p style={{margin:"12px 0 0"}}>
                    <strong style={{color:"var(--ink)"}}>Arc AI Agency</strong><br/>
                    <a href="mailto:contact@arcaiagency.net" style={{color:"var(--accent)"}}>contact@arcaiagency.net</a>
                  </p>
                </Section>
              </>
            ) : (
              <>
                <Section title="1. Acceptance of Terms">
                  By accessing or using the Arc AI Agency website, you agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use our site.
                </Section>

                <Section title="2. Use of the Site">
                  <p style={{margin:"0 0 12px"}}>You agree to use this site only for lawful purposes. You must not:</p>
                  <ul style={{margin:0, paddingLeft:20, display:"flex", flexDirection:"column", gap:8}}>
                    <li>Use the site in any way that violates applicable local, national, or international laws or regulations.</li>
                    <li>Transmit unsolicited commercial communications or spam.</li>
                    <li>Attempt to gain unauthorised access to any part of the site or its related systems.</li>
                    <li>Reproduce, duplicate, or exploit any part of the site without our express written permission.</li>
                  </ul>
                </Section>

                <Section title="3. Intellectual Property">
                  All content on this site — including text, graphics, logos, images, and code — is the property of Arc AI Agency and is protected by applicable intellectual property laws. You may not reproduce or distribute any content without prior written consent.
                </Section>

                <Section title="4. Services & Engagements">
                  These Terms of Use govern access to our public website only. Any paid services, project work, or ongoing retainers are governed by a separate client agreement or statement of work signed between Arc AI Agency and the client.
                </Section>

                <Section title="5. Disclaimers">
                  This site is provided on an "as is" and "as available" basis. Arc AI Agency makes no warranties, express or implied, regarding the accuracy, completeness, or fitness for purpose of any content on the site. We reserve the right to modify or discontinue the site at any time without notice.
                </Section>

                <Section title="6. Limitation of Liability">
                  To the fullest extent permitted by law, Arc AI Agency shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of, or inability to use, this site or its content.
                </Section>

                <Section title="7. Third-Party Links">
                  Our site may contain links to third-party websites. These are provided for convenience only. Arc AI Agency has no control over the content of those sites and accepts no responsibility for them or for any loss or damage that may arise from your use of them.
                </Section>

                <Section title="8. Privacy">
                  Your use of this site is also governed by our{" "}
                  <a onClick={() => setRoute("privacy")} style={{color:"var(--accent)", cursor:"pointer"}}>Privacy Policy</a>,
                  which is incorporated into these Terms of Use by reference.
                </Section>

                <Section title="9. Changes to These Terms">
                  We may update these Terms of Use from time to time. The date at the top of this page reflects the most recent revision. Continued use of the site after any changes constitutes your acceptance of the new terms.
                </Section>

                <Section title="10. Governing Law">
                  These terms are governed by the laws of the Republic of Macedonia, without regard to conflict of law principles.
                </Section>

                <Section title="11. Contact">
                  <p style={{margin:"0 0 4px"}}>If you have any questions about these Terms of Use, please contact:</p>
                  <p style={{margin:"12px 0 0"}}>
                    <strong style={{color:"var(--ink)"}}>Arc AI Agency</strong><br/>
                    <a href="mailto:contact@arcaiagency.net" style={{color:"var(--accent)"}}>contact@arcaiagency.net</a>
                  </p>
                </Section>
              </>
            )}

          </div>
        </div>
      </section>
    </div>
  );
}

window.TermsPage = TermsPage;
