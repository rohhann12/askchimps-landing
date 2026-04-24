'use client';
import React from 'react';
import { Icon } from './Icons';
import PhoneMock from './PhoneMock';

const SCENARIOS = [
  {
    id: "saas",
    label: "SaaS renewal",
    lead: { name: "Priya Shah", role: "Director of Finance", company: "Northwind", reason: "Renewal due in 30 days" },
    scenario: { agent: "Corvo · Renewals", goal: "Confirm renewal and expand seats" },
  },
  {
    id: "clinic",
    label: "Clinic booking",
    lead: { name: "Daniel Okafor", role: "Office Manager", company: "Fieldstone Dental", reason: "Follow up on website inquiry" },
    scenario: { agent: "Corvo · Booking", goal: "Schedule a cleaning appointment" },
  },
  {
    id: "outbound",
    label: "Cold outbound",
    lead: { name: "Elena Vasquez", role: "Head of Growth", company: "Voraio", reason: "LinkedIn post about hiring SDRs" },
    scenario: { agent: "Corvo · SDR", goal: "Qualify and book a 15-min intro" },
  },
];

const LiveDemo = () => {
  const [pick, setPick] = React.useState(SCENARIOS[0]);
  const [nonce, setNonce] = React.useState(0); // force PhoneMock to remount on change

  return (
    <section id="product" style={{ padding: "120px 0" }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: 60 }}>
          <div className="eyebrow" style={{ marginBottom: 20 }}>Try it yourself</div>
          <h2 style={{ maxWidth: 780, margin: "0 auto 18px" }}>
            Pick a scenario.<br/>Hear Corvo <em>run it.</em>
          </h2>
          <p style={{ color: "var(--muted)", fontSize: 17, maxWidth: 560, margin: "0 auto" }}>
            Every transcript below is generated live. Choose a use case, and watch
            the agent lead the conversation from hello to handoff.
          </p>
        </div>

        <div className="demo-grid">
          {/* Scenario list */}
          <div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {SCENARIOS.map(s => {
                const active = pick.id === s.id;
                return (
                  <button key={s.id}
                    onClick={() => { setPick(s); setNonce(n => n + 1); }}
                    style={{
                      textAlign: "left",
                      padding: "18px 22px",
                      borderRadius: "var(--r-md)",
                      border: "1px solid " + (active ? "var(--accent-deep)" : "var(--line)"),
                      background: active ? "var(--accent-wash)" : "var(--surface)",
                      cursor: "pointer",
                      transition: "all 180ms ease",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: 16,
                    }}>
                    <div>
                      <div style={{
                        fontFamily: "var(--serif)", fontSize: 22,
                        color: "var(--ink)", marginBottom: 4,
                      }}>{s.label}</div>
                      <div style={{ fontSize: 13, color: "var(--muted)" }}>
                        {s.scenario.goal}
                      </div>
                    </div>
                    <div style={{
                      width: 30, height: 30, borderRadius: "50%",
                      background: active ? "var(--ink)" : "transparent",
                      color: active ? "#fff" : "var(--muted)",
                      border: "1px solid " + (active ? "var(--ink)" : "var(--line)"),
                      display: "flex", alignItems: "center", justifyContent: "center",
                      flexShrink: 0,
                    }}>
                      <Icon name="arrowRight" size={14} />
                    </div>
                  </button>
                );
              })}
            </div>

            <div style={{
              marginTop: 28,
              padding: "18px 20px",
              borderRadius: "var(--r-md)",
              background: "rgba(14, 27, 42, 0.03)",
              border: "1px dashed rgba(14, 27, 42, 0.12)",
              fontSize: 13, color: "var(--muted)",
              display: "flex", gap: 12, alignItems: "flex-start",
            }}>
              <Icon name="sparkle" size={16} style={{ color: "var(--accent-deep)", flexShrink: 0, marginTop: 2 }} />
              <div>
                Transcripts on this page are generated live — no two demos are the same.
                Your production agents follow scripts and guardrails you define.
              </div>
            </div>
          </div>

          {/* Phone mock with the selected scenario */}
          <div style={{ display: "flex", justifyContent: "center", position: "relative" }}>
            <div aria-hidden style={{
              position: "absolute",
              inset: "-30px",
              background: "radial-gradient(closest-side, rgba(122, 174, 217, 0.3), transparent 70%)",
              filter: "blur(28px)",
              zIndex: 0,
            }} />
            <div style={{ position: "relative", zIndex: 1 }}>
              <PhoneMock key={nonce} lead={pick.lead} scenario={pick.scenario} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveDemo;
