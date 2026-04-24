'use client';
import React from 'react';
import { Icon, Logo } from './Icons';

const Nav = () => {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav style={{
      position: "fixed",
      top: 0, left: 0, right: 0,
      zIndex: 50,
      padding: "16px 0",
      background: scrolled ? "rgba(244, 247, 251, 0.75)" : "transparent",
      backdropFilter: scrolled ? "blur(18px)" : "none",
      WebkitBackdropFilter: scrolled ? "blur(18px)" : "none",
      borderBottom: scrolled ? "1px solid var(--line-soft)" : "1px solid transparent",
      transition: "all 240ms ease",
    }}>
      <div className="container" style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}>
        <Logo name="Corvo" />
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: 30,
          fontSize: 14,
          color: "var(--ink-2)",
        }}>
          {["Product", "Use cases", "Customers", "Pricing"].map(l => {
            const href = {
              "Product": "#product",
              "Use cases": "#use-cases",
              "Customers": "#metrics",
              "Pricing": "#cta",
            }[l];
            return (
              <a key={l} href={href}
                style={{ color: "inherit", textDecoration: "none", opacity: 0.8 }}
                onMouseEnter={e => e.currentTarget.style.opacity = "1"}
                onMouseLeave={e => e.currentTarget.style.opacity = "0.8"}
              >{l}</a>
            );
          })}
        </div>
        <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
          <a href="#" style={{ fontSize: 14, color: "var(--ink-2)", textDecoration: "none", padding: "8px 14px" }}>Sign in</a>
          <button className="btn btn-primary" style={{ padding: "10px 18px", fontSize: 13.5 }}>
            Book a demo
            <Icon name="arrowRight" size={14} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
