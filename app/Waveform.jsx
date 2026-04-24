'use client';
import React from 'react';

const Waveform = ({ bars = 28, active = true, height = 60, color, speaking = true }) => {
  const [tick, setTick] = React.useState(0);
  React.useEffect(() => {
    let raf;
    const loop = () => { setTick(t => t + 1); raf = requestAnimationFrame(loop); };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, []);

  // Pre-compute phase offsets per bar
  const phases = React.useMemo(
    () => Array.from({ length: bars }, (_, i) => ({
      phase: Math.random() * Math.PI * 2,
      speed: 0.08 + Math.random() * 0.12,
      amp: 0.5 + Math.random() * 0.5,
    })),
    [bars]
  );

  const t = tick;
  return (
    <div style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 3,
      height,
      width: "100%",
    }}>
      {phases.map((p, i) => {
        const base = active && speaking
          ? (Math.sin(t * p.speed + p.phase) * 0.5 + 0.5) * p.amp
          : 0.08 + Math.sin(t * 0.03 + i * 0.5) * 0.04;
        const h = Math.max(3, base * height * 0.95);
        return (
          <span
            key={i}
            style={{
              width: 3,
              height: h,
              borderRadius: 2,
              background: color || "var(--accent-deep)",
              opacity: active ? 1 : 0.35,
              transition: "opacity 300ms ease",
            }}
          />
        );
      })}
    </div>
  );
};

export default Waveform;
