'use client';
import React from 'react';
import { Icon } from './Icons';

const Metrics = () => {
  const quote = {
    text: "We replaced three SDRs' worth of calling with Corvo in a month. It books more meetings, works nights, and never misses a follow-up. The scary part is nobody on the other end notices.",
    who: "Ana Torres",
    role: "VP Revenue · Meridian&Co",
  };
  return (
    <section style={{ padding: "120px 0" }}>
      <div className="container">
        <div className="card" style={{
          padding: "60px 60px 56px",
          background: "linear-gradient(135deg, #0E1B2A 0%, #1F3147 60%, #3A6A9A 140%)",
          color: "#fff",
          border: "1px solid rgba(255, 255, 255, 0.08)",
          position: "relative",
          overflow: "hidden",
        }}>
          {/* soft accent glow */}
          <div aria-hidden style={{
            position: "absolute",
            top: -80, right: -80,
            width: 320, height: 320,
            borderRadius: "50%",
            background: "radial-gradient(closest-side, rgba(122, 174, 217, 0.5), transparent 70%)",
            filter: "blur(10px)",
          }} />

          <div style={{
            display: "grid",
            gridTemplateColumns: "1.3fr 1fr",
            gap: 60,
            alignItems: "center",
            position: "relative",
          }}>
            <div>
              <Icon name="quote" size={28} style={{ color: "var(--accent)", opacity: 0.7, marginBottom: 20 }} />
              <p style={{
                fontFamily: "var(--serif)",
                fontSize: 32,
                lineHeight: 1.25,
                letterSpacing: "-0.01em",
                color: "#fff",
                marginBottom: 28,
              }}>
                "{quote.text}"
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <div style={{
                  width: 44, height: 44,
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, var(--accent), var(--accent-deep))",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontFamily: "var(--serif)", fontStyle: "italic", fontSize: 20,
                }}>
                  {quote.who.split(" ").map(n => n[0]).join("")}
                </div>
                <div>
                  <div style={{ fontSize: 15 }}>{quote.who}</div>
                  <div style={{ fontSize: 13, color: "rgba(255, 255, 255, 0.6)" }}>{quote.role}</div>
                </div>
              </div>
            </div>

            <div style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 1,
              background: "rgba(255, 255, 255, 0.1)",
              borderRadius: "var(--r-md)",
              overflow: "hidden",
            }}>
              {[
                { k: "86%", v: "first-call contact rate" },
                { k: "3.2×", v: "meetings per SDR" },
                { k: "47s", v: "average handle time" },
                { k: "$0.08", v: "per minute, all-in" },
              ].map(m => (
                <div key={m.k} style={{
                  padding: "28px 24px",
                  background: "rgba(14, 27, 42, 0.5)",
                  backdropFilter: "blur(10px)",
                }}>
                  <div style={{
                    fontFamily: "var(--serif)",
                    fontSize: 40,
                    letterSpacing: "-0.02em",
                    color: "#fff",
                    marginBottom: 6,
                  }}>{m.k}</div>
                  <div style={{ fontSize: 12.5, color: "rgba(255, 255, 255, 0.6)", lineHeight: 1.4 }}>
                    {m.v}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Metrics;
