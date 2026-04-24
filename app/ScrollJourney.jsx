'use client';
import React from 'react';

const SECTIONS = [
  { id: "top",        label: "Intro" },
  { id: "product",    label: "Product" },
  { id: "how",        label: "How it works" },
  { id: "use-cases",  label: "Use cases" },
  { id: "metrics",    label: "Proof" },
  { id: "cta",        label: "Get started" },
];

const ScrollJourney = () => {
  const [progress, setProgress] = React.useState(0);
  const [active, setActive] = React.useState(0);

  React.useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const p = Math.max(0, Math.min(1, window.scrollY / Math.max(1, max)));
      setProgress(p);

      // Find section closest to viewport top (with some offset)
      const offset = window.innerHeight * 0.35;
      let current = 0;
      SECTIONS.forEach((s, i) => {
        const el = document.getElementById(s.id);
        if (!el) return;
        const rect = el.getBoundingClientRect();
        if (rect.top - offset <= 0) current = i;
      });
      setActive(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div style={{
      position: "fixed",
      left: 24,
      top: "50%",
      transform: "translateY(-50%)",
      zIndex: 40,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 0,
      pointerEvents: "auto",
    }}>
      {/* The vertical SVG line with a gradient-stroked progress overlay */}
      <svg width="14" height="260" viewBox="0 0 14 260" style={{ display: "block", marginBottom: 12 }}>
        <defs>
          <linearGradient id="journey-g" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--accent)" />
            <stop offset="100%" stopColor="var(--accent-deep)" />
          </linearGradient>
        </defs>
        {/* Track */}
        <line x1="7" y1="0" x2="7" y2="260" stroke="var(--line)" strokeWidth="1.5" />
        {/* Progress */}
        <line
          x1="7" y1="0" x2="7" y2={260 * progress}
          stroke="url(#journey-g)"
          strokeWidth="2"
          strokeLinecap="round"
        />
        {/* Dots for each section */}
        {SECTIONS.map((s, i) => {
          const y = (i / (SECTIONS.length - 1)) * 260;
          const reached = i <= active;
          return (
            <circle key={s.id}
              cx="7" cy={y}
              r={reached ? 3.5 : 2.5}
              fill={reached ? "var(--accent-deep)" : "var(--surface)"}
              stroke={reached ? "var(--accent-deep)" : "var(--line)"}
              strokeWidth="1.5"
              style={{ transition: "all 260ms ease" }}
            />
          );
        })}
      </svg>

      {/* Active section label */}
      <div style={{
        writingMode: "vertical-rl",
        transform: "rotate(180deg)",
        fontSize: 10.5,
        letterSpacing: "0.18em",
        textTransform: "uppercase",
        color: "var(--muted)",
        fontFamily: "var(--mono)",
      }}>
        {SECTIONS[active]?.label}
      </div>
    </div>
  );
};

export default ScrollJourney;
