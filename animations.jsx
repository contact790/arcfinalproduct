// ============================================================
// ANIMATIONS — Global hooks + utilities
// Premium spring-based, clip-path reveals, cursor follower
// ============================================================

// ── Easing constants ─────────────────────────────────────────
// Expo out — the curve premium agencies use. Fast start, effortless settle.
const SPRING = "cubic-bezier(0.16, 1, 0.3, 1)";
const SPRING_FAST = "cubic-bezier(0.22, 1, 0.36, 1)";

// ── useInView hook ───────────────────────────────────────────
window.useInView = function useInView(options = {}) {
  const ref = React.useRef(null);
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        obs.disconnect();
      }
    }, {
      threshold: options.threshold ?? 0.08,
      rootMargin: options.rootMargin || "0px 0px -48px 0px"
    });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return [ref, visible];
};

// ── LineReveal ───────────────────────────────────────────────
// Clip-path line reveal — text slides out from behind a mask.
// This is the signature move of premium agency sites.
// Use for headings and large display text.
window.LineReveal = function LineReveal({ children, delay = 0, tag: Tag = "div", className = "", style = {} }) {
  const [ref, visible] = window.useInView({ threshold: 0.05 });
  return (
    <Tag ref={ref} className={className} style={{ overflow: "hidden", ...style }}>
      <span style={{
        display: "block",
        transition: `transform 0.9s ${SPRING} ${delay}s, opacity 0.5s ease ${delay}s`,
        transform: visible ? "translate3d(0,0,0)" : "translate3d(0,105%,0)",
        opacity: visible ? 1 : 0,
      }}>
        {children}
      </span>
    </Tag>
  );
};

// ── Reveal ───────────────────────────────────────────────────
// General purpose reveal. Shorter travel, spring easing.
// from: "bottom" | "left" | "right" | "scale" | "fade"
window.Reveal = function Reveal({ children, delay = 0, from = "bottom", className = "", style = {} }) {
  const [ref, visible] = window.useInView();

  const hidden = (() => {
    if (from === "bottom") return "translate3d(0,20px,0)";
    if (from === "left")   return "translate3d(-20px,0,0)";
    if (from === "right")  return "translate3d(20px,0,0)";
    if (from === "scale")  return "scale(0.96)";
    return "translate3d(0,0,0)";
  })();

  return (
    <div ref={ref} className={className} style={{
      transition: `opacity 0.7s ${SPRING} ${delay}s, transform 0.7s ${SPRING} ${delay}s`,
      opacity: visible ? 1 : 0,
      transform: visible ? "translate3d(0,0,0)" : hidden,
      ...style,
    }}>
      {children}
    </div>
  );
};

// ── ImageReveal ──────────────────────────────────────────────
// Image enters with a clip-path wipe + subtle scale.
// Feels editorial, not generic.
window.ImageReveal = function ImageReveal({ children, delay = 0, className = "", style = {} }) {
  const [ref, visible] = window.useInView({ threshold: 0.06 });
  return (
    <div ref={ref} className={className} style={{
      clipPath: visible ? "inset(0% 0% 0% 0%)" : "inset(0% 0% 100% 0%)",
      transition: `clip-path 0.9s ${SPRING} ${delay}s`,
      willChange: "clip-path",
      ...style,
    }}>
      <div style={{
        transform: visible ? "scale(1)" : "scale(1.08)",
        transition: `transform 1.1s ${SPRING} ${delay}s`,
        willChange: "transform",
      }}>
        {children}
      </div>
    </div>
  );
};

// ── StaggerReveal ────────────────────────────────────────────
// Staggered children with tighter spring easing.
window.StaggerReveal = function StaggerReveal({ children, baseDelay = 0, stagger = 0.08, from = "bottom", style = {}, className = "" }) {
  const [ref, visible] = window.useInView();

  const hidden = from === "bottom" ? "translate3d(0,18px,0)"
               : from === "left"   ? "translate3d(-16px,0,0)"
               : "translate3d(16px,0,0)";

  return (
    <div ref={ref} style={style} className={className}>
      {React.Children.map(children, (child, i) => {
        if (!child) return null;
        const delay = baseDelay + i * stagger;
        return (
          <div style={{
            transition: `opacity 0.65s ${SPRING} ${delay}s, transform 0.65s ${SPRING} ${delay}s`,
            opacity: visible ? 1 : 0,
            transform: visible ? "translate3d(0,0,0)" : hidden,
          }}>
            {child}
          </div>
        );
      })}
    </div>
  );
};

// ── SplitReveal ──────────────────────────────────────────────
// Word-by-word clip-path reveal. Use for hero headings.
window.SplitReveal = function SplitReveal({ text, tag: Tag = "span", delay = 0, style = {}, className = "" }) {
  const [ref, visible] = window.useInView({ threshold: 0.05 });
  const words = text.split(" ");
  return (
    <Tag ref={ref} className={className} style={{ display: "block", ...style }}>
      {words.map((word, i) => (
        <span key={i} style={{
          display: "inline-block",
          overflow: "hidden",
          marginRight: "0.25em",
          verticalAlign: "bottom",
        }}>
          <span style={{
            display: "inline-block",
            transition: `transform 0.75s ${SPRING} ${delay + i * 0.05}s, opacity 0.4s ease ${delay + i * 0.05}s`,
            transform: visible ? "translate3d(0,0,0)" : "translate3d(0,110%,0)",
            opacity: visible ? 1 : 0,
          }}>
            {word}
          </span>
        </span>
      ))}
    </Tag>
  );
};

// ── FadeIn ───────────────────────────────────────────────────
window.FadeIn = function FadeIn({ children, delay = 0, style = {}, className = "" }) {
  const [ref, visible] = window.useInView();
  return (
    <div ref={ref} className={className} style={{
      transition: `opacity 0.75s ${SPRING} ${delay}s, transform 0.75s ${SPRING} ${delay}s`,
      opacity: visible ? 1 : 0,
      transform: visible ? "translate3d(0,0,0)" : "translate3d(0,14px,0)",
      ...style,
    }}>
      {children}
    </div>
  );
};

// ── HoverCard ────────────────────────────────────────────────
// Subtle 3D tilt on hover. Cleaned up exit (no double-reset).
window.HoverCard = function HoverCard({ children, style = {}, className = "", intensity = 5 }) {
  const ref = React.useRef(null);
  const frame = React.useRef(null);
  const [tilt, setTilt] = React.useState({ rx: 0, ry: 0, active: false });

  const handleMove = (e) => {
    if (frame.current) cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      setTilt({ rx: -y * intensity, ry: x * intensity, active: true });
    });
  };

  const handleLeave = () => {
    if (frame.current) cancelAnimationFrame(frame.current);
    setTilt({ rx: 0, ry: 0, active: false });
  };

  const transform = tilt.active
    ? `perspective(900px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg) translateZ(6px)`
    : "perspective(900px) rotateX(0deg) rotateY(0deg) translateZ(0px)";

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...style,
        transform,
        transition: tilt.active
          ? `transform 0.1s linear`
          : `transform 0.6s ${SPRING}`,
        willChange: "transform",
      }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      {children}
    </div>
  );
};

// ── useCountUp hook ──────────────────────────────────────────
window.useCountUp = function useCountUp(target, duration = 1400, prefix = "", suffix = "") {
  const [ref, visible] = window.useInView({ threshold: 0.3 });
  const [display, setDisplay] = React.useState(prefix + "0" + suffix);

  React.useEffect(() => {
    if (!visible) return;
    const numTarget = parseFloat(String(target).replace(/[^0-9.]/g, ""));
    const isFloat = String(target).includes(".");
    const decimals = isFloat ? (String(target).split(".")[1] || "").length : 0;
    const start = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4); // expo out
      const current = numTarget * eased;
      const formatted = decimals > 0
        ? current.toFixed(decimals)
        : Math.round(current).toLocaleString();
      setDisplay(prefix + formatted + suffix);
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [visible]);

  return [ref, display];
};

// ── AnimatedNumber ───────────────────────────────────────────
window.AnimatedNumber = function AnimatedNumber({ value, prefix = "", suffix = "", duration = 1400, style = {}, className = "" }) {
  const [ref, display] = window.useCountUp(value, duration, prefix, suffix);
  return <span ref={ref} style={style} className={className}>{display}</span>;
};

// ── CursorDot ────────────────────────────────────────────────
// Magnetic cursor follower. Mount once in the app root.
window.CursorDot = function CursorDot() {
  const dotRef = React.useRef(null);
  const ringRef = React.useRef(null);
  const pos = React.useRef({ x: -100, y: -100 });
  const ring = React.useRef({ x: -100, y: -100 });
  const raf = React.useRef(null);
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const onMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (!visible) setVisible(true);
    };
    const onLeave = () => setVisible(false);
    window.addEventListener("mousemove", onMove, { passive: true });
    document.documentElement.addEventListener("mouseleave", onLeave);

    const animate = () => {
      // ring lags behind dot with lerp
      ring.current.x += (pos.current.x - ring.current.x) * 0.12;
      ring.current.y += (pos.current.y - ring.current.y) * 0.12;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px) translate(-50%, -50%)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ring.current.x}px, ${ring.current.y}px) translate(-50%, -50%)`;
      }
      raf.current = requestAnimationFrame(animate);
    };
    raf.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <>
      {/* dot */}
      <div ref={dotRef} style={{
        position: "fixed",
        top: 0, left: 0,
        width: 6, height: 6,
        borderRadius: "50%",
        background: "var(--accent)",
        pointerEvents: "none",
        zIndex: 99999,
        opacity: visible ? 1 : 0,
        transition: "opacity 0.3s ease",
        mixBlendMode: "normal",
      }} />
      {/* ring */}
      <div ref={ringRef} style={{
        position: "fixed",
        top: 0, left: 0,
        width: 32, height: 32,
        borderRadius: "50%",
        border: "1.5px solid var(--accent)",
        pointerEvents: "none",
        zIndex: 99998,
        opacity: visible ? 0.5 : 0,
        transition: "opacity 0.3s ease",
      }} />
    </>
  );
};
