'use client';
import React from 'react';
import { Icon } from './Icons';

const CTA = () => {
  return (
    <section style={{ padding: "120px 0 80px" }}>
      <div className="container" style={{ textAlign: "center", maxWidth: 820 }}>
        <h2 style={{ marginBottom: 24 }}>
          Your next hire<br/>doesn't need a <em>desk.</em>
        </h2>
        <p style={{ color: "var(--muted)", fontSize: 18, maxWidth: 540, margin: "0 auto 36px" }}>
          See Corvo run your own call script, on your own leads, in under ten minutes.
        </p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center" }}>
          <button className="btn btn-primary" style={{ padding: "16px 26px", fontSize: 15 }}>
            Book a demo
            <Icon name="arrowRight" size={14} />
          </button>
          <button className="btn btn-ghost" style={{ padding: "16px 26px", fontSize: 15 }}>
            Listen to a sample call
            <Icon name="play" size={12} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
