// ============================================================
// ARC AI — Chat Widget (Gemini-powered, fully conversational)
// ============================================================
(function () {
  const { useState, useEffect, useRef } = React;

  const GEMINI_KEY = "AIzaSyDKe1FJRuCjre9gXKT7gDCZlOCy-fFewQ0";
  const CAL_LINK   = "https://cal.eu/marko-stefkovski-eindak/30min";

  const SYSTEM_PROMPT = `You are the Arc AI Agency assistant — friendly, concise, and helpful. You answer any question a visitor has about the agency and its services.

ABOUT ARC AI AGENCY
Arc AI Agency builds revenue systems for businesses that are serious about growth.
Tagline: "We build systems that get you clients while you sleep."
Based in the Balkan Region, working with clients globally.
Contact: contact@arcaiagency.net

SERVICES (focus on these two — they go together perfectly)

1. WEBSITES
High-converting landing pages and business websites built to turn visitors into leads.
- Landing pages from €199
- Full business websites: price discussed on the call based on scope
- Turnaround: 1–2 weeks
- We don't just make them look good — we build them to convert
- Works great paired with ads (more traffic = more leads)

2. ADS (Meta & Google)
We run Meta (Facebook/Instagram) and Google Ads campaigns — full funnel management.
- Recommended minimum budget: €500/month
- If budget is under €500, a high-converting landing page is often the smarter first step
- We handle targeting, creatives, copy, optimisation
- Turnaround: campaigns live within 5–7 days

FULL SYSTEM (most popular)
Websites + Ads + AI Lead System combined.
- The AI chatbot responds to, qualifies and books leads 24/7 — even while you sleep
- Best option for businesses ready to scale

WHO WE WORK WITH
Clinics, retail stores, agencies, restaurants, service businesses, e-commerce brands — any business that wants more clients.

PRICING SUMMARY
- Landing page: from €199
- Full website: scoped on call
- Ads management: discussed on call (min budget €500/month recommended)
- Free 30-minute strategy call available — no commitment

BOOKING
Visitors can book a free 30-minute strategy call at: ${CAL_LINK}
Always offer this link when someone is interested or ready to talk.

KEY MESSAGES
- Most agencies stop at the click. We build the system that captures it.
- Ads attract → Website converts → AI qualifies and books 24/7
- We are a small but growing team, not a big faceless agency
- Results and behind-the-scenes content posted on socials

SOCIAL / INSTAGRAM BIO CONTEXT
"We build revenue engines 🤖 — Websites · Ads · AI Lead Systems — Your business runs. The system books."
"We build systems that get you clients while you sleep. Websites · Meta & Google Ads · AI Chatbots"

FAQS
Q: How much does a website cost?
A: Landing pages start at €199. Full business sites are scoped on a call — depends on pages, features, and complexity.

Q: What ad budget do I need?
A: We recommend at least €500/month to run effective ad campaigns. Under that, a high-converting landing page is often a better first investment.

Q: How long does it take?
A: Websites: 1–2 weeks. Ad campaigns: live within 5–7 days.

Q: Do you work with my industry?
A: Yes — clinics, retail, agencies, restaurants, service businesses, e-commerce and more.

Q: What is the AI system / AI chatbot?
A: It's an AI lead system that automatically responds to, qualifies, and books leads — 24/7, without you lifting a finger.

Q: Where are you based?
A: Balkan Region, but we work with clients globally.

Q: How do I get started?
A: Book a free 30-minute strategy call — no commitment, just a conversation to see if we're a good fit.

Q: What makes you different from other agencies?
A: Most agencies stop at the click. We build the whole system — website, ads, and AI — so nothing falls through the cracks.

BEHAVIOUR RULES
- Answer ANY question the visitor asks — don't deflect or say you can only discuss certain topics
- Keep answers concise (2–4 sentences max unless the question needs more)
- Be warm and conversational, not salesy
- If someone is under €500 ad budget, gently suggest the website service as a smarter first step
- After 2–3 exchanges, naturally offer the free strategy call
- Never make up prices or services not listed above
- If you don't know something specific, say so and offer the call for details
- Always respond in the same language the visitor writes in`;

  // ── Gemini API ───────────────────────────────────────────────
  async function askGemini(history, userMsg) {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_KEY}`;

    // Build contents — alternate user/model, Gemini requires strict alternation
    const rawMsgs = history.filter(m => m.role === "user" || m.role === "bot");
    const contents = [];
    for (const m of rawMsgs) {
      const role = m.role === "bot" ? "model" : "user";
      // avoid two consecutive same roles
      if (contents.length > 0 && contents[contents.length - 1].role === role) continue;
      contents.push({ role, parts: [{ text: m.text }] });
    }
    // Always end with the new user message
    if (contents.length > 0 && contents[contents.length - 1].role === "user") {
      contents[contents.length - 1].parts[0].text += "\n\n" + userMsg;
    } else {
      contents.push({ role: "user", parts: [{ text: userMsg }] });
    }

    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        system_instruction: { parts: [{ text: SYSTEM_PROMPT }] },
        contents,
        generationConfig: { temperature: 0.75, maxOutputTokens: 400 }
      })
    });
    if (!res.ok) {
      const err = await res.text();
      console.error("Gemini error:", err);
      throw new Error("API error");
    }
    const data = await res.json();
    const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!text) throw new Error("No response");
    return text.trim();
  }

  // ── Quick reply suggestions (shown after specific bot messages) ──
  const OPENER_REPLIES = [
    { label: "Tell me about websites", msg: "Tell me about your website service" },
    { label: "Tell me about ads",      msg: "Tell me about your ad campaigns" },
    { label: "Pricing?",               msg: "What are your prices?" },
    { label: "Book a call",            msg: "I'd like to book a free strategy call" },
  ];

  // ── Widget ───────────────────────────────────────────────────
  function ChatWidget() {
    const [open, setOpen]         = useState(false);
    const [msgs, setMsgs]         = useState([]);
    const [input, setInput]       = useState("");
    const [typing, setTyping]     = useState(false);
    const [initiated, setInitiated] = useState(false);
    const [showOpener, setShowOpener] = useState(false);
    const bottomRef = useRef(null);
    const inputRef  = useRef(null);

    useEffect(() => {
      bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [msgs, typing]);

    useEffect(() => {
      if (open) setTimeout(() => inputRef.current?.focus(), 200);
    }, [open]);

    // send greeting once on first open
    useEffect(() => {
      if (open && !initiated) {
        setInitiated(true);
        setTimeout(() => {
          setMsgs([{ role: "bot", text: "Hey! 👋 Welcome to Arc AI Agency. I'm here to answer any questions you have about our services — websites, ads, pricing, or anything else.\n\nWhat would you like to know?" }]);
          setShowOpener(true);
        }, 350);
      }
    }, [open, initiated]);

    async function sendMessage(text) {
      const msg = text.trim();
      if (!msg || typing) return;
      setInput("");
      setShowOpener(false);
      setMsgs(prev => [...prev, { role: "user", text: msg }]);
      setTyping(true);

      try {
        // pass full history so Gemini has context
        const currentMsgs = [...msgs, { role: "user", text: msg }]; // capture before state update batches
        const reply = await askGemini(currentMsgs, msg);
        setTyping(false);

        // detect if reply mentions booking / strategy call → append CTA button
        const wantsBooking = /book|cal\.com|strategy call|schedule|pick a time/i.test(reply);
        setMsgs(prev => [...prev, { role: "bot", text: reply, showBooking: wantsBooking }]);
      } catch (e) {
        setTyping(false);
        setMsgs(prev => [...prev, { role: "bot", text: "Sorry, something went wrong on my end. You can reach us directly at contact@arcaiagency.net or book a call below.", showBooking: true }]);
      }
    }

    function handleKeyDown(e) {
      if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); sendMessage(input); }
    }

    return (
      <>
        {/* ── Floating bubble ── */}
        <button
          onClick={() => setOpen(o => !o)}
          aria-label="Open chat"
          style={{
            position:"fixed", bottom:24, right:24, zIndex:9999,
            width:58, height:58, borderRadius:"50%",
            background:"var(--accent,#0052FF)",
            border:"none", cursor:"pointer",
            display:"flex", alignItems:"center", justifyContent:"center",
            boxShadow:"0 4px 24px rgba(0,82,255,0.4)",
            transition:"transform 0.18s, box-shadow 0.18s",
            padding:0, overflow:"hidden",
          }}
          onMouseEnter={e => { e.currentTarget.style.transform="scale(1.09)"; e.currentTarget.style.boxShadow="0 8px 32px rgba(0,82,255,0.5)"; }}
          onMouseLeave={e => { e.currentTarget.style.transform="scale(1)"; e.currentTarget.style.boxShadow="0 4px 24px rgba(0,82,255,0.4)"; }}
        >
          {open ? (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M5 5l10 10M15 5L5 15" stroke="#fff" strokeWidth="2.2" strokeLinecap="round"/>
            </svg>
          ) : (
            <img src="logo-arc-clean.png" alt="Arc AI"
              style={{width:"100%", height:"100%", objectFit:"cover", borderRadius:"50%", background:"#fff", padding:10, boxSizing:"border-box"}}
              onError={e => {
                e.target.style.display = "none";
                e.target.parentNode.innerHTML += `<svg width="26" height="26" viewBox="0 0 24 24" fill="none"><path d="M20 2H4C2.9 2 2 2.9 2 4v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" fill="#fff"/></svg>`;
              }}
            />
          )}
          {!open && !initiated && (
            <span style={{position:"absolute",top:3,right:3,width:11,height:11,borderRadius:"50%",background:"#ef4444",border:"2px solid #fff"}} />
          )}
        </button>

        {/* ── Panel ── */}
        {open && (
          <div style={{
            position:"fixed", bottom:96, right:24, zIndex:9998,
            width:364, maxWidth:"calc(100vw - 32px)",
            height:530, maxHeight:"calc(100vh - 116px)",
            borderRadius:20, background:"#ffffff",
            boxShadow:"0 20px 72px rgba(6,14,32,0.16), 0 2px 8px rgba(6,14,32,0.06)",
            display:"flex", flexDirection:"column", overflow:"hidden",
            fontFamily:"Manrope, Inter, sans-serif",
            border:"1px solid rgba(6,14,32,0.08)",
          }}>

            {/* Header */}
            <div style={{
              background:"var(--accent,#0052FF)",
              padding:"14px 16px",
              display:"flex", alignItems:"center", gap:11, flexShrink:0,
            }}>
              {/* Logo avatar */}
              <div style={{
                width:42, height:42, borderRadius:"50%",
                background:"#ffffff",
                display:"flex", alignItems:"center", justifyContent:"center",
                flexShrink:0, overflow:"hidden",
                boxShadow:"0 2px 8px rgba(0,0,0,0.15)",
              }}>
                <img src="logo-arc-clean.png" alt="Arc AI"
                  style={{width:34, height:34, objectFit:"contain"}}
                  onError={e => {
                    e.target.style.display="none";
                    e.target.parentNode.innerHTML = `<span style="font-weight:800;font-size:13px;color:var(--accent,#0052FF);font-family:Manrope,sans-serif">ARC</span>`;
                  }}
                />
              </div>
              <div style={{flex:1, minWidth:0}}>
                <div style={{color:"#fff", fontWeight:700, fontSize:13.5, lineHeight:1.2}}>Arc AI Assistant</div>
                <div style={{color:"rgba(255,255,255,0.82)", fontSize:11, display:"flex", alignItems:"center", gap:5, marginTop:3}}>
                  <span style={{width:6.5, height:6.5, borderRadius:"50%", background:"#4ade80", display:"inline-block", flexShrink:0}} />
                  Online · replies instantly
                </div>
              </div>
              <button onClick={() => setOpen(false)}
                style={{background:"none",border:"none",cursor:"pointer",padding:4,color:"rgba(255,255,255,0.75)",lineHeight:1,display:"flex"}}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 3l10 10M13 3L3 13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                </svg>
              </button>
            </div>

            {/* Messages */}
            <div style={{flex:1, overflowY:"auto", padding:"14px 13px", display:"flex", flexDirection:"column", gap:9}}>
              {msgs.map((m, i) => (
                <div key={i}>
                  <div style={{display:"flex", justifyContent: m.role === "user" ? "flex-end" : "flex-start", alignItems:"flex-end", gap:7}}>
                    {m.role === "bot" && (
                      <div style={{width:28, height:28, borderRadius:"50%", background:"#fff", border:"1.5px solid #e2e8f0", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0, overflow:"hidden", marginBottom:2}}>
                        <img src="logo-arc-clean.png" alt="" style={{width:22, height:22, objectFit:"contain"}}
                          onError={e => { e.target.style.display="none"; e.target.parentNode.innerHTML=`<span style="font-size:9px;font-weight:800;color:#0052FF">A</span>`; }} />
                      </div>
                    )}
                    <div style={{
                      maxWidth:"78%",
                      padding:"9px 13px",
                      borderRadius: m.role === "user" ? "16px 16px 4px 16px" : "4px 16px 16px 16px",
                      background: m.role === "user" ? "var(--accent,#0052FF)" : "#f1f5fb",
                      color: m.role === "user" ? "#fff" : "#0d1a2d",
                      fontSize:13.5, lineHeight:1.52,
                      whiteSpace:"pre-wrap", wordBreak:"break-word",
                    }}>
                      {m.text}
                    </div>
                  </div>
                  {m.showBooking && (
                    <div style={{display:"flex", justifyContent:"flex-start", paddingLeft:35, marginTop:6}}>
                      <a href={CAL_LINK} target="_blank" rel="noopener noreferrer"
                        style={{display:"inline-flex", alignItems:"center", gap:6, padding:"8px 16px", borderRadius:10, background:"var(--accent,#0052FF)", color:"#fff", fontWeight:700, fontSize:12.5, textDecoration:"none", boxShadow:"0 2px 10px rgba(0,82,255,0.28)"}}>
                        📅 Book free strategy call →
                      </a>
                    </div>
                  )}
                </div>
              ))}

              {/* Typing indicator */}
              {typing && (
                <div style={{display:"flex", alignItems:"flex-end", gap:7}}>
                  <div style={{width:28, height:28, borderRadius:"50%", background:"#fff", border:"1.5px solid #e2e8f0", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0, overflow:"hidden"}}>
                    <img src="logo-arc-clean.png" alt="" style={{width:22, height:22, objectFit:"contain"}}
                      onError={e => { e.target.style.display="none"; e.target.parentNode.innerHTML=`<span style="font-size:9px;font-weight:800;color:#0052FF">A</span>`; }} />
                  </div>
                  <div style={{padding:"11px 14px", borderRadius:"4px 16px 16px 16px", background:"#f1f5fb", display:"flex", gap:5, alignItems:"center"}}>
                    {[0,1,2].map(i => (
                      <span key={i} style={{width:7, height:7, borderRadius:"50%", background:"#94a3b8", display:"inline-block", animation:`dotBounce 1.1s ease-in-out ${i*0.16}s infinite`}} />
                    ))}
                  </div>
                </div>
              )}

              <div ref={bottomRef} />
            </div>

            {/* Quick reply openers (only after first greeting) */}
            {showOpener && !typing && (
              <div style={{padding:"4px 13px 6px", display:"flex", flexWrap:"wrap", gap:6, flexShrink:0}}>
                {OPENER_REPLIES.map(qr => (
                  <button key={qr.label}
                    onClick={() => sendMessage(qr.msg)}
                    style={{
                      padding:"6px 12px", borderRadius:18,
                      border:"1.5px solid var(--accent,#0052FF)",
                      background:"#fff", color:"var(--accent,#0052FF)",
                      fontSize:12, fontWeight:600, cursor:"pointer",
                      fontFamily:"inherit", transition:"all 0.14s",
                      lineHeight:1.3,
                    }}
                    onMouseEnter={e => { e.currentTarget.style.background="var(--accent,#0052FF)"; e.currentTarget.style.color="#fff"; }}
                    onMouseLeave={e => { e.currentTarget.style.background="#fff"; e.currentTarget.style.color="var(--accent,#0052FF)"; }}
                  >
                    {qr.label}
                  </button>
                ))}
              </div>
            )}

            {/* Input area */}
            <div style={{padding:"10px 13px 13px", borderTop:"1px solid #edf0f5", display:"flex", gap:8, flexShrink:0, alignItems:"flex-end"}}>
              <textarea
                ref={inputRef}
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask anything..."
                rows={1}
                style={{
                  flex:1, resize:"none",
                  border:"1.5px solid #dde3ee", borderRadius:12,
                  padding:"9px 12px", fontSize:13.5,
                  fontFamily:"inherit", outline:"none",
                  lineHeight:1.45, maxHeight:84, overflowY:"auto",
                  color:"#0d1a2d", background:"#f7f9fc",
                  transition:"border 0.14s",
                }}
                onFocus={e => e.target.style.borderColor="var(--accent,#0052FF)"}
                onBlur={e => e.target.style.borderColor="#dde3ee"}
              />
              <button
                onClick={() => sendMessage(input)}
                disabled={!input.trim() || typing}
                style={{
                  width:38, height:38, borderRadius:10, flexShrink:0,
                  background: (input.trim() && !typing) ? "var(--accent,#0052FF)" : "#e8ecf3",
                  border:"none", cursor: (input.trim() && !typing) ? "pointer" : "default",
                  display:"flex", alignItems:"center", justifyContent:"center",
                  transition:"background 0.14s",
                }}
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M14 8L2 2l2.5 6L2 14l12-6z" fill={(input.trim() && !typing) ? "#fff" : "#9aa3b2"}/>
                </svg>
              </button>
            </div>
          </div>
        )}

        <style>{`
          @keyframes dotBounce {
            0%,60%,100% { transform:translateY(0); opacity:0.45; }
            30% { transform:translateY(-5px); opacity:1; }
          }
        `}</style>
      </>
    );
  }

  const el = document.createElement("div");
  el.id = "arc-chatbot-root";
  document.body.appendChild(el);
  ReactDOM.createRoot(el).render(<ChatWidget />);
})();
