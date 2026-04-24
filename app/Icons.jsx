'use client';
import React from 'react';

const Icon = ({ name, size = 20, stroke = 1.4, className = "", style = {} }) => {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: stroke,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className,
    style,
  };
  const paths = {
    phone: <path d="M5 4h3l2 5-2.5 1.5a11 11 0 005 5L14 13l5 2v3a2 2 0 01-2 2A14 14 0 013 6a2 2 0 012-2z" />,
    bolt: <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" />,
    calendar: <>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M3 10h18M8 3v4M16 3v4" />
    </>,
    users: <>
      <circle cx="9" cy="8" r="3.2" />
      <path d="M2.5 20c.8-3.3 3.5-5 6.5-5s5.7 1.7 6.5 5" />
      <circle cx="17" cy="9" r="2.6" />
      <path d="M16 15c2.8 0 4.8 1.4 5.5 4" />
    </>,
    globe: <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c3 3.5 3 14 0 18M12 3c-3 3.5-3 14 0 18" />
    </>,
    waveform: <path d="M3 12h2M7 8v8M11 5v14M15 9v6M19 11v2" />,
    arrowRight: <path d="M5 12h14M13 6l6 6-6 6" />,
    check: <path d="M5 13l4 4L19 7" />,
    sparkle: <path d="M12 3l1.8 5.4L19 10l-5.2 1.6L12 17l-1.8-5.4L5 10l5.2-1.6L12 3z" />,
    shield: <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z" />,
    plug: <>
      <path d="M9 2v6M15 2v6" />
      <path d="M6 8h12v3a6 6 0 01-6 6 6 6 0 01-6-6V8z" />
      <path d="M12 17v5" />
    </>,
    chart: <>
      <path d="M3 3v18h18" />
      <path d="M7 15l4-4 3 3 5-6" />
    </>,
    mic: <>
      <rect x="9" y="3" width="6" height="12" rx="3" />
      <path d="M5 11a7 7 0 0014 0M12 18v3" />
    </>,
    brain: <path d="M8 4.5A2.5 2.5 0 015.5 7a2.5 2.5 0 00-2 4 2.5 2.5 0 000 4 2.5 2.5 0 002 4 2.5 2.5 0 015 0V5a2.5 2.5 0 00-2.5-.5zm8 0A2.5 2.5 0 0118.5 7a2.5 2.5 0 012 4 2.5 2.5 0 010 4 2.5 2.5 0 01-2 4 2.5 2.5 0 00-5 0V5a2.5 2.5 0 012.5-.5z" />,
    quote: <path d="M7 7h4v4c0 3-2 5-4 5M13 7h4v4c0 3-2 5-4 5" />,
    play: <path d="M6 4l14 8-14 8V4z" />,
  };
  return <svg {...common}>{paths[name] || null}</svg>;
};

// Brand wordmark — serif + small shape
const Logo = ({ name = "Corvo" }) => (
  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" aria-hidden>
      <circle cx="13" cy="13" r="12" stroke="var(--ink)" strokeWidth="1.2" />
      <circle cx="13" cy="13" r="5.5" fill="var(--accent)" />
      <circle cx="13" cy="13" r="2" fill="var(--ink)" />
    </svg>
    <span style={{
      fontFamily: "var(--serif)",
      fontSize: 22,
      letterSpacing: "-0.01em",
      color: "var(--ink)",
    }}>{name}</span>
  </div>
);

export { Icon, Logo };
