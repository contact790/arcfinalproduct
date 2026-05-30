// ============================================================
// CONTACT
// ============================================================

// ---- (BookingWidget removed — using direct Cal.com link) ----
function _BookingWidget_unused() {
  const today = new Date();
  const [year,  setYear]  = React.useState(today.getFullYear());
  const [month, setMonth] = React.useState(today.getMonth());
  const [selectedDate, setSelectedDate] = React.useState(null);
  const [selSlot,  setSelSlot]  = React.useState(null);
  const [step, setStep] = React.useState("calendar"); // "calendar" | "time" | "confirm"
  const [bookForm, setBookForm] = React.useState({ name:"", email:"" });

  const MONTHS = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  const DAYS   = ["Su","Mo","Tu","We","Th","Fr","Sa"];

  // Generate time slots 9am–5pm on weekdays
  const getSlots = (dateStr) => {
    if (!dateStr) return [];
    const d = new Date(dateStr);
    const dow = d.getDay();
    if (dow === 0 || dow === 6) return []; // weekend = no slots
    const times = [];
    for (let h = 9; h <= 16; h++) {
      times.push(`${String(h).padStart(2,"0")}:00`);
      if (h < 16) times.push(`${String(h).padStart(2,"0")}:30`);
    }
    return times;
  };

  const pad = n => String(n).padStart(2,"0");
  const todayStr = `${today.getFullYear()}-${pad(today.getMonth()+1)}-${pad(today.getDate())}`;

  const firstDow   = new Date(year, month, 1).getDay();
  const daysInMon  = new Date(year, month+1, 0).getDate();
  const cells = [];
  for (let i = 0; i < firstDow; i++) cells.push(null);
  for (let d = 1; d <= daysInMon; d++) cells.push(`${year}-${pad(month+1)}-${pad(d)}`);

  const isWeekend = ds => { if (!ds) return true; const dow = new Date(ds).getDay(); return dow===0||dow===6; };
  const isPast    = ds => ds < todayStr;
  const isBlocked = ds => isWeekend(ds) || isPast(ds);

  const prevMonth = () => { if (month===0){setMonth(11);setYear(y=>y-1);}else setMonth(m=>m-1); setSelectedDate(null); setStep("calendar"); };
  const nextMonth = () => { if (month===11){setMonth(0);setYear(y=>y+1);}else setMonth(m=>m+1); setSelectedDate(null); setStep("calendar"); };

  const pickDate = ds => {
    if (!ds || isBlocked(ds)) return;
    setSelectedDate(ds);
    setSelSlot(null);
    setStep("time");
  };

  const formatDateLabel = ds => {
    const [y,m,d] = ds.split("-");
    return new Date(y,m-1,d).toLocaleDateString([],{weekday:"long",month:"long",day:"numeric"});
  };

  const openCal = () => {
    const url = `https://cal.eu/marko-stefkovski-eindak/30min?date=${selectedDate}&name=${encodeURIComponent(bookForm.name)}&email=${encodeURIComponent(bookForm.email)}`;
    window.open(url, "_blank");
    setStep("done");
  };

  if (step === "done") return (
    <div style={{padding:"52px 32px",textAlign:"center"}}>
      <div style={{width:64,height:64,borderRadius:"50%",background:"rgba(0,82,255,0.1)",border:"2px solid var(--accent)",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 20px"}}>
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M5 14l7 7L23 8" stroke="var(--accent)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </div>
      <h3 className="display upright" style={{fontSize:26,margin:"0 0 10px",letterSpacing:"-0.03em"}}>Cal.com opened</h3>
      <p className="muted" style={{fontSize:14,margin:"0 0 28px",lineHeight:1.6}}>Complete your booking in the new tab. Your details were pre-filled.</p>
      <button className="btn btn-ghost" onClick={()=>{setStep("calendar");setSelectedDate(null);setSelSlot(null);setBookForm({name:"",email:""});}}>
        Book another time
      </button>
    </div>
  );

  return (
    <div>
      {/* ── Top info bar ── */}
      <div style={{padding:"22px 28px 18px",borderBottom:"1px solid var(--hairline)",display:"flex",alignItems:"center",gap:14}}>
        <div style={{width:44,height:44,borderRadius:12,background:"var(--accent)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><rect x="3" y="5" width="16" height="14" rx="2.5" stroke="#fff" strokeWidth="1.7"/><path d="M3 10h16" stroke="#fff" strokeWidth="1.5"/><path d="M8 3v4M14 3v4" stroke="#fff" strokeWidth="1.7" strokeLinecap="round"/></svg>
        </div>
        <div style={{flex:1}}>
          <div style={{fontWeight:700,fontSize:16,letterSpacing:"-0.01em",color:"var(--ink)"}}>30-min Discovery Call</div>
          <div style={{fontSize:13,color:"var(--muted)",marginTop:2}}>Free · Video · Mon–Fri, 9am–5pm</div>
        </div>
        <div style={{display:"flex",alignItems:"center",gap:6,background:"rgba(34,197,94,0.08)",border:"1px solid rgba(34,197,94,0.2)",borderRadius:999,padding:"5px 12px"}}>
          <div className="mockup-live-dot" style={{width:6,height:6,borderRadius:"50%",background:"#22c55e",flexShrink:0}}></div>
          <span style={{fontSize:11,color:"#22c55e",fontWeight:600}}>Accepting bookings</span>
        </div>
      </div>

      {/* ── Step indicator ── */}
      <div style={{display:"flex",gap:0,borderBottom:"1px solid var(--hairline)"}}>
        {[["calendar","1  Date"],["time","2  Time"],["confirm","3  Confirm"]].map(([s,label],k)=>(
          <div key={s} style={{flex:1,padding:"10px 0",textAlign:"center",fontSize:11,fontWeight:600,letterSpacing:"0.06em",textTransform:"uppercase",
            color: step===s ? "var(--accent)" : ["calendar","time","confirm"].indexOf(step) > k ? "var(--ink-2)" : "var(--muted)",
            borderBottom: step===s ? "2px solid var(--accent)" : "2px solid transparent",
            cursor: k===0 ? "pointer" : "default",
            transition:"all .2s",
          }} onClick={k===0 ? ()=>setStep("calendar") : undefined}>{label}</div>
        ))}
      </div>

      {/* ── STEP 1: Calendar ── */}
      {step === "calendar" && (
        <div style={{padding:"24px 28px 28px"}}>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:20}}>
            <button onClick={prevMonth} style={{width:34,height:34,borderRadius:9,border:"1px solid var(--hairline-strong)",background:"transparent",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",color:"var(--ink)",fontSize:16}}>←</button>
            <span style={{fontWeight:700,fontSize:16,letterSpacing:"-0.02em"}}>{MONTHS[month]} {year}</span>
            <button onClick={nextMonth} style={{width:34,height:34,borderRadius:9,border:"1px solid var(--hairline-strong)",background:"transparent",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",color:"var(--ink)",fontSize:16}}>→</button>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:0,marginBottom:6}}>
            {DAYS.map(d=><div key={d} style={{textAlign:"center",fontSize:11,fontWeight:700,color:"var(--muted)",letterSpacing:"0.08em",padding:"4px 0"}}>{d}</div>)}
          </div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:3}}>
            {cells.map((ds,i)=>{
              if (!ds) return <div key={i}/>;
              const blocked = isBlocked(ds);
              const isSel   = ds === selectedDate;
              const isToday = ds === todayStr;
              const dayNum  = parseInt(ds.split("-")[2]);
              return (
                <button key={i} onClick={()=>pickDate(ds)} style={{
                  aspectRatio:"1",borderRadius:9,border:"none",
                  background: isSel ? "var(--accent)" : isToday ? "var(--accent-soft)" : "transparent",
                  color: isSel ? "#fff" : blocked ? "var(--hairline-strong)" : "var(--ink)",
                  fontSize:13,fontWeight: isSel||isToday ? 700 : 400,
                  cursor: blocked ? "default" : "pointer",
                  position:"relative",
                  outline: isToday && !isSel ? "1.5px solid var(--accent)" : "none",
                  transition:"background .12s",
                }}>
                  {dayNum}
                </button>
              );
            })}
          </div>
          <div style={{marginTop:20,padding:"14px 16px",background:"var(--paper-2)",borderRadius:10,border:"1px solid var(--hairline)",display:"flex",gap:16,alignItems:"center"}}>
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" style={{flexShrink:0,opacity:0.4}}><circle cx="7.5" cy="7.5" r="6.5" stroke="currentColor" strokeWidth="1.3"/><path d="M7.5 4.5v3.5l2 2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/></svg>
            <span style={{fontSize:12,color:"var(--muted)"}}>Select any weekday — real-time availability on Cal.com</span>
          </div>
        </div>
      )}

      {/* ── STEP 2: Time slots ── */}
      {step === "time" && selectedDate && (
        <div style={{padding:"24px 28px 28px"}}>
          <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:20}}>
            <button onClick={()=>setStep("calendar")} style={{width:30,height:30,borderRadius:8,border:"1px solid var(--hairline-strong)",background:"transparent",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",fontSize:13}}>←</button>
            <div>
              <div style={{fontWeight:700,fontSize:15,letterSpacing:"-0.01em"}}>{formatDateLabel(selectedDate)}</div>
              <div style={{fontSize:12,color:"var(--muted)"}}>Pick a time — all times local to you</div>
            </div>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:8}}>
            {getSlots(selectedDate).map((t,k)=>(
              <button key={k} onClick={()=>{setSelSlot(t);setStep("confirm");}} style={{
                padding:"11px 8px",borderRadius:10,
                border: selSlot===t ? "1.5px solid var(--accent)" : "1px solid var(--hairline-strong)",
                background: selSlot===t ? "rgba(0,82,255,0.07)" : "var(--paper)",
                color:"var(--ink)",fontWeight:600,fontSize:13,cursor:"pointer",
                transition:"all .12s",
              }}>{t}</button>
            ))}
          </div>
        </div>
      )}

      {/* ── STEP 3: Confirm ── */}
      {step === "confirm" && selectedDate && selSlot && (
        <div style={{padding:"24px 28px 28px"}}>
          {/* Summary pill */}
          <div style={{background:"var(--accent)",borderRadius:12,padding:"14px 18px",marginBottom:20,display:"flex",justifyContent:"space-between",alignItems:"center"}}>
            <div>
              <div style={{fontSize:12,color:"rgba(255,255,255,0.7)",fontWeight:600,letterSpacing:"0.05em",textTransform:"uppercase",marginBottom:3}}>Your slot</div>
              <div style={{fontWeight:700,fontSize:15,color:"#fff"}}>{formatDateLabel(selectedDate)}</div>
              <div style={{fontSize:13,color:"rgba(255,255,255,0.85)",marginTop:2}}>{selSlot} · 30 min</div>
            </div>
            <button onClick={()=>setStep("time")} style={{background:"rgba(255,255,255,0.15)",border:"none",borderRadius:8,padding:"6px 10px",cursor:"pointer",color:"#fff",fontSize:12,fontWeight:600}}>Change</button>
          </div>
          {/* Name + email */}
          <div style={{display:"flex",flexDirection:"column",gap:14,marginBottom:20}}>
            <div>
              <label style={{display:"block",fontSize:11,fontWeight:700,letterSpacing:"0.08em",textTransform:"uppercase",color:"var(--muted)",marginBottom:6}}>Your name</label>
              <input className="input" placeholder="Jamie Hong" value={bookForm.name}
                onChange={e=>setBookForm({...bookForm,name:e.target.value})} style={{margin:0,width:"100%"}} />
            </div>
            <div>
              <label style={{display:"block",fontSize:11,fontWeight:700,letterSpacing:"0.08em",textTransform:"uppercase",color:"var(--muted)",marginBottom:6}}>Email</label>
              <input className="input" type="email" placeholder="you@company.com" value={bookForm.email}
                onChange={e=>setBookForm({...bookForm,email:e.target.value})} style={{margin:0,width:"100%"}} />
            </div>
          </div>
          <button className="btn btn-accent btn-lg" style={{width:"100%",justifyContent:"center",opacity:(!bookForm.name||!bookForm.email)?0.5:1}}
            onClick={openCal} disabled={!bookForm.name||!bookForm.email}>
            Open booking page <span className="arrow">→</span>
          </button>
          <p className="muted" style={{fontSize:12,textAlign:"center",marginTop:12,lineHeight:1.5}}>
            Opens Cal.com in a new tab with your details pre-filled. Final confirmation happens there.
          </p>
        </div>
      )}
    </div>
  );
}

function ContactPage({ setRoute, lang }) {
  const isMK = lang === "mk";
  const [form, setForm] = React.useState({ name:"", email:"", budget:"", message:"" });
  const [sent, setSent] = React.useState(false);

  const submit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name:"", email:"", budget:"", message:"" });
  };

  const budgets = ["Under €5K", "€5K – €20K", "€20K – €50K", "Over €50K"];

  return (
    <div className="page-enter">
      {/* HERO */}
      <section className="page-hero">
        <div className="wrap">
          <div className="contact-hero-grid" style={{alignItems:"end", position:"relative", zIndex:1}}>
            <div>
              <div className="eyebrow" style={{marginBottom:24, color:"#ffffff"}}>{isMK ? "Контакт" : "Contact"}</div>
              <h1 className="display upright" style={{margin:0, fontSize:"clamp(48px, 6.2vw, 92px)", fontWeight:700, letterSpacing:"-0.04em", lineHeight:1.02, color:"#ffffff"}}>
                {isMK ? (
                  <>
                    <span style={{display:"block"}}>Да изградиме нешто</span>
                    <span style={{display:"block"}}>што <span style={{color:"var(--accent)"}}>се исплаќа</span>.</span>
                  </>
                ) : (
                  <>
                    <span style={{display:"block"}}>Let's make something</span>
                    <span style={{display:"block"}}>that <span style={{color:"var(--accent)"}}>pays back</span>.</span>
                  </>
                )}
              </h1>
            </div>
            <div>
              <p style={{fontSize:19, lineHeight:1.5, maxWidth:"40ch", color:"rgba(255,255,255,0.85)", margin:"0 0 28px"}}>
                {isMK ? "Пополнете го формуларот, закажете повик или едноставно испратете имејл. Одговараме во текот на истиот работен ден. Без маркетиншки секвенци, без игри со распоредот." : "Fill out the form, book a call, or just email. We answer the same day on weekdays. No drip campaigns, no calendar games."}
              </p>
              <div style={{display:"flex", gap:24, flexWrap:"wrap"}}>
                {[["📬", "contact@arcaiagency.net"], ["📍", isMK ? "Скопје, Македонија" : "Skopje, Macedonia"], ["⏱", isMK ? "Одговор до 4 часа" : "Reply in &lt;4 hours"]].map(([icon, text], i) => (
                  <div key={i} style={{display:"flex", alignItems:"center", gap:8}}>
                    <span style={{fontSize:16}}>{icon}</span>
                    <span style={{fontSize:14, color:"rgba(255,255,255,0.75)"}} dangerouslySetInnerHTML={{__html: text}} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT GRID */}
      <section style={{padding:"80px 0 80px"}}>
        <div className="wrap contact-body" style={{alignItems:"start"}}>

          {/* LEFT — Form */}
          <div>
            <h2 className="display upright" style={{fontSize:44, margin:"0 0 36px", letterSpacing:"-0.03em", fontWeight:700}}>
              {isMK ? "Испратете брифинг" : "Send a brief"}
            </h2>

            <form onSubmit={submit} style={{display:"flex", flexDirection:"column", gap:28}}>
              <div className="field">
                <label htmlFor="name">{isMK ? "Вашето ime" : "Your name"}</label>
                <input className="input" id="name" type="text" required
                       placeholder="Jamie Hong"
                       value={form.name}
                       onChange={(e) => setForm({...form, name: e.target.value})} />
              </div>

              <div className="field">
                <label htmlFor="email">Email</label>
                <input className="input" id="email" type="email" required
                       placeholder="jamie@company.com"
                       value={form.email}
                       onChange={(e) => setForm({...form, email: e.target.value})} />
              </div>

              <div className="field">
                <label>{isMK ? "Буџет за проектот" : "Project budget"}</label>
                <div style={{display:"flex", gap:8, flexWrap:"wrap"}}>
                  {budgets.map((b) => (
                    <button key={b} type="button"
                            className={"filter-pill " + (form.budget === b ? "active" : "")}
                            onClick={() => setForm({...form, budget: b})}>
                      {b}
                    </button>
                  ))}
                </div>
              </div>

              <div className="field">
                <label htmlFor="message">{isMK ? "Раскажете ни повеќе" : "Tell us about it"}</label>
                <textarea className="textarea" id="message" rows="5" required
                          placeholder={isMK ? "Што градите, што функционира, што не…" : "What are you building, what's working, what isn't…"}
                          value={form.message}
                          onChange={(e) => setForm({...form, message: e.target.value})} />
              </div>

              <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", paddingTop:16, borderTop:"1px solid var(--hairline)", gap:20, flexWrap:"wrap"}}>
                <span className="muted" style={{fontSize:14}}>
                  {sent ? (isMK ? "✓ Испратено — ќе ве контактираме денес." : "✓ Sent — we'll be in touch today.") : (isMK ? "Ја читаме секоја порака." : "We read every message.")}
                </span>
                <button className="btn btn-accent btn-lg" type="submit">
                  {isMK ? "Испрати брифинг" : "Send brief"} <span className="arrow">→</span>
                </button>
              </div>
            </form>

            {/* Direct lines */}
            <div style={{marginTop:64, paddingTop:32, borderTop:"1px solid var(--hairline-strong)"}}>
              <h3 className="display upright" style={{fontSize:32, margin:"0 0 28px", letterSpacing:"-0.03em", fontWeight:700}}>
                {isMK ? "Или контактирајте нè директно" : "Or reach us directly"}
              </h3>
              <div className="contact-direct-grid">
                {(isMK ? [
                  ["Имејл",        "contact@arcaiagency.net"],
                  ["Студио",       "Скопје, Македонија"],
                  ["Работно време","Пон–Пет, CET"],
                  ["Социјални",    "LinkedIn, Instagram"],
                ] : [
                  ["Email",  "contact@arcaiagency.net"],
                  ["Studio", "Skopje, Macedonia"],
                  ["Hours",  "Mon–Fri, CET"],
                  ["Socials","LinkedIn, Instagram"],
                ]).map(([label, val], i) => (
                  <div key={i} style={{padding:"20px 24px", background:"var(--paper-2)", borderRadius:12, border:"1px solid var(--hairline)"}}>
                    <div className="eyebrow" style={{marginBottom:8}}>{label}</div>
                    <div style={{fontSize:15, fontWeight:500}}>{val}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT — Booking */}
          <div>
            <h2 className="display upright" style={{fontSize:44, margin:"0 0 36px", letterSpacing:"-0.03em", fontWeight:700}}>
              {isMK ? "Или закажете повик" : "Or book a call"}
            </h2>

            {/* Booking card */}
            <div style={{border:"1px solid var(--hairline-strong)", borderRadius:20, overflow:"hidden", background:"var(--paper)", boxShadow:"0 4px 24px rgba(6,14,32,0.07)"}}>
              {/* Top: event info */}
              <div style={{padding:"32px 32px 28px", borderBottom:"1px solid var(--hairline)"}}>
                <div style={{display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:20}}>
                  <div style={{width:48, height:48, borderRadius:14, background:"var(--accent)", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0}}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><rect x="3" y="6" width="18" height="15" rx="2.5" stroke="#fff" strokeWidth="1.8"/><path d="M3 11h18" stroke="#fff" strokeWidth="1.6"/><path d="M8 3v4M16 3v4" stroke="#fff" strokeWidth="1.8" strokeLinecap="round"/></svg>
                  </div>
                  <div style={{display:"flex", alignItems:"center", gap:6, background:"rgba(34,197,94,0.08)", border:"1px solid rgba(34,197,94,0.2)", borderRadius:999, padding:"5px 12px"}}>
                    <div className="mockup-live-dot" style={{width:6, height:6, borderRadius:"50%", background:"#22c55e"}}></div>
                    <span style={{fontSize:11, color:"#22c55e", fontWeight:600}}>{isMK ? "Отворено за закажување" : "Accepting bookings"}</span>
                  </div>
                </div>
                <h3 className="display upright" style={{fontSize:28, margin:"0 0 8px", letterSpacing:"-0.03em", fontWeight:700}}>
                  {isMK ? "30-мин откривачки повик" : "30-min Discovery Call"}
                </h3>
                <p className="muted" style={{margin:0, fontSize:15, lineHeight:1.6}}>
                  {isMK ? "Краток повик за ревизија на вашиот сајт или рекламна сметка — ќе ви посочиме две-три конкретни подобрувања уште оваа недела, платено или не." : "A short call to audit your site or ad account live — we'll tell you two or three things to fix this week, paid or not."}
                </p>
              </div>

              {/* Middle: details */}
              <div style={{padding:"24px 32px", borderBottom:"1px solid var(--hairline)", display:"flex", flexDirection:"column", gap:14}}>
                {[
                  [<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.4"/><path d="M8 5v3.5l2 2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></svg>, isMK ? "30 минути" : "30 minutes"],
                  [<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><rect x="2" y="2" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="1.4"/><path d="M5 8h6M5 5h3M5 11h4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/></svg>, isMK ? "Бесплатно — без кредитна картичка" : "Free — no credit card"],
                  [<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 2a6 6 0 1 0 0 12A6 6 0 0 0 8 2z" stroke="currentColor" strokeWidth="1.4"/><path d="M5.5 8.5c.5.8 1.4 1.5 2.5 1.5s2-.7 2.5-1.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/><circle cx="6" cy="6.5" r=".8" fill="currentColor"/><circle cx="10" cy="6.5" r=".8" fill="currentColor"/></svg>, isMK ? "Google Meet или Zoom — по ваш избор" : "Google Meet or Zoom — your pick"],
                ].map(([icon, text], i) => (
                  <div key={i} style={{display:"flex", alignItems:"center", gap:10}}>
                    <span style={{color:"var(--accent)", flexShrink:0}}>{icon}</span>
                    <span style={{fontSize:14, color:"var(--ink-2)", fontWeight:500}}>{text}</span>
                  </div>
                ))}
              </div>

              {/* Bottom: CTA */}
              <div style={{padding:"24px 32px"}}>
                <a href="https://cal.eu/marko-stefkovski-eindak/30min" target="_blank" rel="noopener noreferrer"
                   className="btn btn-accent btn-lg"
                   style={{width:"100%", justifyContent:"center", textDecoration:"none"}}>
                  {isMK ? "Изберете термин на Cal.com" : "Pick a time on Cal.com"} <span className="arrow">→</span>
                </a>
                <p className="muted" style={{fontSize:12, textAlign:"center", marginTop:12, marginBottom:0}}>
                  {isMK ? "Се отвора Cal.com — изберете термин, додадете детали, готово." : "Opens Cal.com — pick a slot, add your details, done."}
                </p>
              </div>
            </div>

            {/* Bonus */}
            <div style={{marginTop:16, padding:"22px 28px", border:"1px solid var(--accent)", borderRadius:16, background:"var(--accent-soft)", display:"flex", alignItems:"center", gap:20}}>
              <div style={{width:40, height:40, borderRadius:12, background:"var(--accent)", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0}}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 2l1.8 5.5H18l-4.9 3.6 1.9 5.5L10 13l-5 3.6 1.9-5.5L2 7.5h6.2L10 2z" fill="#fff"/></svg>
              </div>
              <div>
                <div style={{fontWeight:600, fontSize:15}}>{isMK ? "Бесплатна ревизија на првиот повик" : "Free audit on the first call"}</div>
                <div className="muted" style={{fontSize:13, marginTop:2}}>{isMK ? "Сајт или рекламна сметка, по ваш избор. Без обврски." : "Site or ad account, your pick. No strings."}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{padding:"80px 0 100px", borderTop:"1px solid var(--hairline)", background:"var(--paper-2)"}}>
        <div className="wrap">
          <div className="contact-faq-grid" style={{alignItems:"start"}}>
            <div>
              <div className="eyebrow" style={{marginBottom:16}}>FAQ</div>
              <h2 className="display upright h-display-sm" style={{margin:0, maxWidth:"12ch"}}>{isMK ? "Брзи одговори." : "Quick answers."}</h2>
            </div>
            <FAQAccordion items={isMK ? [
              ["Колкав е типичниот временски период?",  "Повеќето веб сајтови траат четири до осум недели. Рекламните кампањи можат да бидат активни за недела-две ако креативата е подготвена."],
              ["Дали нудите тековна поддршка?",          "Да — сите пакети вклучуваат поддршка по лансирање. Нудиме и месечни ретенери."],
              ["Како функционира плаќањето?",            "Половина на стартување, половина на испорака за сајтови. Месечна наплата за ретенери."],
              ["Дали работите со стартапи?",             "Да. Имаме Starter ниво специјално создадено за тимови во рана фаза на развој."],
            ] : [
              ["What's the typical project timeline?",  "Most websites take four to eight weeks. Ad campaigns can launch in a week or two if creative is ready."],
              ["Do you offer ongoing support?",         "Yes — all packages include post-launch support. We also offer monthly retainers."],
              ["How does payment work?",                "Half on kickoff, half on delivery for sites. Monthly billing for paid retainers."],
              ["Do you work with startups?",            "Yes. We have a Starter tier specifically designed for early-stage teams."],
            ]} />
          </div>
        </div>
      </section>

      <CTASection
        setRoute={setRoute}
        title={isMK ? <>Сè уште<br/>двоумите?</> : <>Still on<br/>the fence?</>}
        description={isMK ? "Испратете еден ред имејл. Ќе одговориме со неколку искрени прашања — без продажни секвенци." : "Send a one-line email. We'll reply with a couple of honest questions — no sales sequence."}
        buttonText="contact@arcaiagency.net"
      />
    </div>
  );
}

window.ContactPage = ContactPage;
