'use client';
import React from 'react';
import { Logo } from './Icons';

const Footer = () => {
  return (
    <footer style={{
      borderTop: "1px solid var(--line)",
      padding: "60px 0 40px",
      background: "rgba(255, 255, 255, 0.3)",
    }}>
      <div className="container">
        <div style={{
          display: "grid",
          gridTemplateColumns: "1.5fr 1fr 1fr 1fr",
          gap: 40,
          marginBottom: 48,
        }}>
          <div>
            <Logo name="Corvo" />
            <p style={{
              marginTop: 20,
              fontSize: 14,
              color: "var(--muted)",
              maxWidth: 320,
              lineHeight: 1.55,
            }}>
              Voice agents that sound composed, close confidently, and run your outbound motion around the clock.
            </p>
          </div>
          {[
            { title: "Product", links: ["Voice agents", "Integrations", "Pricing", "Changelog"] },
            { title: "Company", links: ["About", "Customers", "Careers", "Contact"] },
            { title: "Resources", links: ["Docs", "API reference", "Security", "Trust center"] },
          ].map(col => (
            <div key={col.title}>
              <div style={{
                fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase",
                color: "var(--ink)", marginBottom: 18, fontWeight: 500,
              }}>{col.title}</div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                {col.links.map(l => (
                  <li key={l}>
                    <a href="#" style={{
                      color: "var(--muted)", fontSize: 14, textDecoration: "none",
                    }}>{l}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingTop: 24,
          borderTop: "1px solid var(--line-soft)",
          fontSize: 12.5,
          color: "var(--muted)",
        }}>
          <span>© 2026 Corvo Technologies. All rights reserved.</span>
          <span className="mono" style={{ letterSpacing: "0.1em" }}>SOC 2 · GDPR · HIPAA</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
