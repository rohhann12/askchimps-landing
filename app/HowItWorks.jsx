'use client';
import React from 'react';
import { Icon } from './Icons';

const HowItWorks = () => {
  const steps = [
    {
      n: "01",
      title: "Write the script",
      body: "Describe the call in plain English — goal, tone, questions to ask, when to hand off. Corvo turns it into a reliable dialogue tree.",
      icon: "quote",
    },
    {
      n: "02",
      title: "Connect your stack",
      body: "Push leads from HubSpot, Salesforce or a CSV. Corvo reads the context, dials, and logs the outcome where your reps already work.",
      icon: "plug",
    },
    {
      n: "03",
      title: "Let it dial",
      body: "Thousands of concurrent calls, 31 languages, sub-150ms latency. You watch the dashboard. It keeps the pipeline moving.",
      icon: "bolt",
    },
  ];
  return (
    <section style={{ padding: "120px 0", background: "linear-gradient(180deg, transparent, rgba(232, 241, 250, 0.5), transparent)" }}>
      <div className="container">
        <div className="how-grid">
          <div style={{ position: "sticky", top: 120 }}>
            <div className="eyebrow" style={{ marginBottom: 20 }}>How it works</div>
            <h2 style={{ marginBottom: 20 }}>Three steps<br/>from <em>script</em> to <em>signed.</em></h2>
            <p style={{ color: "var(--muted)", fontSize: 16, maxWidth: 380 }}>
              No phone trees. No awkward IVR. No brittle prompts.
              Just an agent that listens, thinks, and moves the conversation forward.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {steps.map((s, i) => (
              <div key={s.n} className="card" style={{
                padding: "32px 36px",
                display: "grid",
                gridTemplateColumns: "56px 1fr",
                gap: 28,
                alignItems: "start",
              }}>
                <div style={{
                  width: 56, height: 56,
                  borderRadius: "50%",
                  background: "var(--accent-wash)",
                  border: "1px solid rgba(122, 174, 217, 0.4)",
                  color: "var(--accent-deep)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <Icon name={s.icon} size={22} />
                </div>
                <div>
                  <div style={{
                    display: "flex", alignItems: "baseline", gap: 16, marginBottom: 10,
                  }}>
                    <span className="mono" style={{ color: "var(--muted)" }}>{s.n}</span>
                    <h3>{s.title}</h3>
                  </div>
                  <p style={{ color: "var(--muted)", fontSize: 15, lineHeight: 1.6, maxWidth: 520 }}>
                    {s.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
