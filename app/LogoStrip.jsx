'use client';
import React from 'react';

const LogoStrip = () => {
  // Fictional company names — elegant, not cartoon. Rendered as serif wordmarks so we don't
  // fake real brand logos in a POC.
  const items = ["Halberd", "Meridian&Co", "Northwind", "Etta Labs", "Fieldstone", "Voraio", "Lumenhaus"];
  return (
    <section style={{ padding: "40px 0 20px" }}>
      <div className="container">
        <div style={{
          textAlign: "center",
          fontSize: 12,
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          color: "var(--muted)",
          marginBottom: 28,
        }}>
          Trusted by revenue teams at
        </div>
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
          columnGap: 44,
          rowGap: 20,
          opacity: 0.85,
        }}>
          {items.map(i => (
            <div key={i} style={{
              fontFamily: "var(--serif)",
              fontSize: 26,
              color: "var(--ink-2)",
              fontStyle: i.includes("&") ? "italic" : "normal",
              letterSpacing: "-0.01em",
            }}>{i}</div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoStrip;
