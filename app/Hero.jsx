'use client';
import React from 'react';
import { Icon } from './Icons';
import PhoneMock from './PhoneMock';

const Hero = () => {
  return (
    <section style={{ padding: "140px 0 80px", position: "relative" }}>
      <div className="container hero-grid">
        {/* Left column — copy */}
        <div>
          <div className="pill" style={{ marginBottom: 28 }}>
            <span className="dot" />
            Voice agents for outbound sales
          </div>

          <h1 style={{ marginBottom: 28, paddingBottom: 4 }}>
            The quiet voice<br/>
            that closes <em>louder</em><br/>
            than your best rep.
          </h1>

          <p style={{
            fontSize: 18,
            color: "var(--muted)",
            maxWidth: 520,
            lineHeight: 1.55,
            marginBottom: 36,
          }}>
            Corvo runs outbound calls, qualifies leads, and books meetings —
            with a voice so composed, your prospects forget it isn't human.
            Set the script, let it dial.
          </p>

          <div style={{ display: "flex", gap: 12, marginBottom: 48 }}>
            <button className="btn btn-primary">
              Listen to a live call
              <Icon name="play" size={12} />
            </button>
            <button className="btn btn-ghost">
              Book a demo
              <Icon name="arrowRight" size={14} />
            </button>
          </div>

          {/* Stat row under CTA */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 32,
            paddingTop: 28,
            borderTop: "1px solid var(--line)",
            maxWidth: 540,
          }}>
            {[
              { k: "3.2×", v: "more meetings booked per rep" },
              { k: "148ms", v: "median response latency" },
              { k: "24/7", v: "in 31 languages" },
            ].map(s => (
              <div key={s.k}>
                <div style={{
                  fontFamily: "var(--serif)",
                  fontSize: 32,
                  letterSpacing: "-0.02em",
                  color: "var(--ink)",
                }}>{s.k}</div>
                <div style={{ fontSize: 12.5, color: "var(--muted)", lineHeight: 1.4, marginTop: 4 }}>
                  {s.v}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right column — phone mock */}
        <div style={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}>
          {/* Ambient glow behind the phone */}
          <div aria-hidden style={{
            position: "absolute",
            inset: "-40px -10px",
            background: "radial-gradient(closest-side, rgba(122, 174, 217, 0.45), transparent 70%)",
            filter: "blur(30px)",
            zIndex: 0,
          }} />
          {/* Floating decorative labels */}
          <div style={{
            position: "absolute",
            top: 12, left: -20,
            zIndex: 3,
          }}>
            <div className="card-soft" style={{
              padding: "10px 14px",
              display: "flex",
              alignItems: "center",
              gap: 10,
              fontSize: 12.5,
              color: "var(--ink-2)",
            }}>
              <Icon name="sparkle" size={14} style={{ color: "var(--accent-deep)" }} />
              Sentiment: <em style={{ color: "var(--accent-deep)", fontFamily: "var(--serif)", fontSize: 15 }}>warming</em>
            </div>
          </div>
          <div style={{
            position: "absolute",
            bottom: 40, right: -28,
            zIndex: 3,
          }}>
            <div className="card-soft" style={{
              padding: "10px 14px",
              display: "flex",
              alignItems: "center",
              gap: 10,
              fontSize: 12.5,
              color: "var(--ink-2)",
            }}>
              <Icon name="calendar" size={14} style={{ color: "var(--accent-deep)" }} />
              Next step: <em style={{ color: "var(--accent-deep)", fontFamily: "var(--serif)", fontSize: 15 }}>Thu 2:30pm</em>
            </div>
          </div>

          <div style={{ position: "relative", zIndex: 2 }}>
            <PhoneMock />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
