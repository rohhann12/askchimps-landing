'use client';
import React from 'react';

const StickyStage = ({ children, drawColor = "var(--accent)" }) => {
  const ref = React.useRef(null);
  const [p, setP] = React.useState(0); // 0..1 draw progress for this section

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      // Progress from -0.3 of vh to +0.8 of vh
      const total = rect.height + vh * 0.5;
      const seen = Math.min(total, Math.max(0, vh - rect.top));
      setP(Math.max(0, Math.min(1, seen / total)));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div ref={ref} style={{ position: "relative" }}>
      {/* Decorative SVG arc that draws in as the user scrolls past */}
      <svg aria-hidden style={{
        position: "absolute",
        top: 40,
        right: 60,
        width: 140,
        height: 140,
        pointerEvents: "none",
        opacity: 0.35,
      }} viewBox="0 0 140 140">
        <circle cx="70" cy="70" r="60"
          fill="none"
          stroke={drawColor}
          strokeWidth="1.2"
          strokeDasharray="377"
          strokeDashoffset={377 * (1 - p)}
          strokeLinecap="round"
          style={{ transition: "stroke-dashoffset 80ms linear" }}
        />
        <circle cx="70" cy="70" r="40"
          fill="none"
          stroke={drawColor}
          strokeWidth="0.8"
          strokeDasharray="251"
          strokeDashoffset={251 * (1 - Math.min(1, p * 1.2))}
          strokeLinecap="round"
          opacity="0.6"
        />
      </svg>
      {children}
    </div>
  );
};

// Reveal on scroll — fades + slides children up into place when >20% visible.
const Reveal = ({ children, delay = 0 }) => {
  const ref = React.useRef(null);
  const [shown, setShown] = React.useState(false);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) setShown(true); });
    }, { threshold: 0.18 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} style={{
      opacity: shown ? 1 : 0,
      transform: shown ? "translateY(0)" : "translateY(30px)",
      transition: `opacity 800ms ease ${delay}ms, transform 800ms cubic-bezier(0.2, 0.8, 0.2, 1) ${delay}ms`,
    }}>{children}</div>
  );
};

// Overlapping sections with sticky pinning — the PREVIOUS section stays fixed
// briefly while the next slides up over it. Creates the "layered stack" feel
// the user asked for.
const StackedSection = ({ id, children, bg }) => {
  return (
    <div id={id} style={{
      position: "relative",
      background: bg || "var(--bg)",
      borderTopLeftRadius: 32,
      borderTopRightRadius: 32,
      boxShadow: "0 -20px 60px -30px rgba(14, 27, 42, 0.15)",
      marginTop: -32,
      zIndex: 1,
    }}>
      {children}
    </div>
  );
};

export { StickyStage, Reveal, StackedSection };
