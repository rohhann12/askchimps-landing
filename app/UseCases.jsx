'use client';
import React from 'react';
import { Icon } from './Icons';

const UseCases = () => {
  const cases = [
    { icon: "phone",    title: "Outbound SDR",      body: "Qualify inbound leads within 60 seconds of form fill. Book the meeting before the interest fades." },
    { icon: "calendar", title: "Appointment setting", body: "Book, confirm, and reschedule — with a voice that doesn't forget time zones or preferences." },
    { icon: "users",    title: "Renewal & expansion", body: "Proactively reach customers before renewal. Uncover expansion signals. Route hot leads to humans." },
    { icon: "chart",    title: "Lead re-engagement", body: "Wake up the stale 40% of your pipeline. Calls that should've happened, finally happening." },
    { icon: "globe",    title: "Multilingual outreach", body: "Same agent, 31 languages. Your London rep and your São Paulo rep, rolled into one." },
    { icon: "shield",   title: "Compliance-first",   body: "Recording consent, DNC lists, TCPA-aware dialing — built in, not bolted on." },
  ];
  return (
    <section id="use-cases" style={{ padding: "120px 0" }}>
      <div className="container">
        <div style={{ maxWidth: 720, marginBottom: 60 }}>
          <div className="eyebrow" style={{ marginBottom: 20 }}>Where Corvo earns its keep</div>
          <h2>Built for <em>outbound</em>.<br/>Bent to every revenue motion.</h2>
        </div>

        <div className="usecase-grid" style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          border: "1px solid var(--line)",
          borderRadius: "var(--r-lg)",
          overflow: "hidden",
          background: "var(--surface)",
        }}>
          {cases.map((c, i) => (
            <div key={c.title} style={{
              padding: "36px 32px 40px",
              borderRight: (i % 3 !== 2) ? "1px solid var(--line)" : "none",
              borderBottom: (i < 3) ? "1px solid var(--line)" : "none",
              display: "flex",
              flexDirection: "column",
              gap: 16,
              minHeight: 240,
              transition: "background 200ms ease",
              cursor: "default",
            }}
              onMouseEnter={e => e.currentTarget.style.background = "var(--surface-2)"}
              onMouseLeave={e => e.currentTarget.style.background = "transparent"}
            >
              <div style={{
                width: 40, height: 40,
                borderRadius: "var(--r-sm)",
                background: "var(--accent-wash)",
                color: "var(--accent-deep)",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <Icon name={c.icon} size={18} />
              </div>
              <h3 style={{ fontSize: 24 }}>{c.title}</h3>
              <p style={{ color: "var(--muted)", fontSize: 14.5, lineHeight: 1.55 }}>{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
