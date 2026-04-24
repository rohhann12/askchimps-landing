'use client';
import React from 'react';

const TWEETS = [
  {
    type: "tweet",
    handle: "@maya_builds",
    name: "Maya Chen",
    avatar: "MC",
    text: "okay. corvo actually booked us 14 demos overnight while I was sleeping. my SDRs woke up to a full calendar. this feels illegal",
    likes: "2.4k", retweets: "287", verified: true,
  },
  {
    type: "tweet",
    handle: "@jpetrov_sales",
    name: "Jon Petrov",
    avatar: "JP",
    text: "the quiet voice that closes louder than your best rep. okay sure. but it actually does. we ran a 200-dial test against our top SDR. corvo booked 2.8× more meetings. our SDR is now on renewals.",
    likes: "891", retweets: "112", verified: false,
  },
  {
    type: "video",
    company: "Meridian&Co",
    title: "How we replaced 3 SDRs in 30 days",
    duration: "2:14",
    views: "48k",
  },
  {
    type: "tweet",
    handle: "@saradel",
    name: "Sara Delacroix",
    avatar: "SD",
    text: "plot twist: my best prospect from last quarter admitted he thought corvo was a real person. 'she was really nice on the phone.' she. is. a. model.",
    likes: "5.1k", retweets: "734", verified: true,
  },
  {
    type: "video",
    company: "Voraio",
    title: "6 months with Corvo — Head of Growth unfiltered",
    duration: "4:32",
    views: "22k",
  },
  {
    type: "tweet",
    handle: "@okafor_ops",
    name: "Daniel Okafor",
    avatar: "DO",
    text: "small clinic here. we book 60% more appointments since switching. the no-show rate dropped because corvo actually calls to confirm. wild.",
    likes: "312", retweets: "48", verified: false,
  },
  {
    type: "tweet",
    handle: "@torres_rev",
    name: "Ana Torres",
    avatar: "AT",
    text: "look i was skeptical. I made the CEO sit through three demo calls before we signed. by call two he asked how soon we could replace the inbound team too",
    likes: "1.8k", retweets: "241", verified: true,
  },
  {
    type: "video",
    company: "Halberd Analytics",
    title: "Marcus Reid on scaling outbound without hiring",
    duration: "3:18",
    views: "67k",
  },
  {
    type: "tweet",
    handle: "@priyashah_cfo",
    name: "Priya Shah",
    avatar: "PS",
    text: "the ROI math is stupid. we were paying $85k/yr per SDR. we pay corvo $2,100/mo total. and it works nights. CFO brain is hurting.",
    likes: "3.2k", retweets: "512", verified: true,
  },
  {
    type: "video",
    company: "Fieldstone",
    title: "From 40% no-shows to 8% — a clinic's story",
    duration: "1:56",
    views: "14k",
  },
];

const TweetCard = ({ t }) => (
  <div style={{
    width: 360,
    flexShrink: 0,
    padding: "20px 22px",
    background: "var(--surface)",
    border: "1px solid var(--line)",
    borderRadius: "var(--r-lg)",
    boxShadow: "0 1px 2px rgba(14, 27, 42, 0.04), 0 20px 40px -28px rgba(14, 27, 42, 0.15)",
    fontSize: 14,
    lineHeight: 1.5,
    color: "var(--ink-2)",
  }}>
    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
      <div style={{
        width: 40, height: 40, borderRadius: "50%",
        background: "linear-gradient(135deg, var(--accent), var(--accent-deep))",
        display: "flex", alignItems: "center", justifyContent: "center",
        color: "#fff", fontFamily: "var(--serif)", fontSize: 16, fontStyle: "italic",
      }}>{t.avatar}</div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 14, fontWeight: 500, color: "var(--ink)" }}>
          {t.name}
          {t.verified && (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="var(--accent-deep)" aria-hidden>
              <path d="M12 2l2.5 2L18 3l1 3.5L22 8l-1.5 3L22 14l-3 1.5L18 19l-3.5-1L12 20l-2.5-2L6 19l-1-3.5L2 14l1.5-3L2 8l3-1.5L6 3l3.5 1z" />
              <path d="M8 12l3 3 5-6" stroke="#fff" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </div>
        <div style={{ fontSize: 12.5, color: "var(--muted)" }}>{t.handle}</div>
      </div>
      <svg width="18" height="18" viewBox="0 0 24 24" fill="var(--muted-2)" style={{ opacity: 0.6 }}>
        <path d="M22 5.8a8.5 8.5 0 01-2.4.7 4.2 4.2 0 001.8-2.3 8.4 8.4 0 01-2.6 1 4.1 4.1 0 00-7 3.7 11.7 11.7 0 01-8.5-4.3 4.1 4.1 0 001.3 5.5 4.1 4.1 0 01-1.9-.5v.1a4.1 4.1 0 003.3 4 4 4 0 01-1.9.1 4.1 4.1 0 003.8 2.8A8.3 8.3 0 012 18.6a11.7 11.7 0 006.3 1.8c7.6 0 11.7-6.3 11.7-11.7v-.5A8.4 8.4 0 0022 5.8z" />
      </svg>
    </div>
    <p style={{ marginBottom: 14 }}>{t.text}</p>
    <div style={{ display: "flex", gap: 18, fontSize: 12, color: "var(--muted)" }}>
      <span>♡ {t.likes}</span>
      <span>↻ {t.retweets}</span>
    </div>
  </div>
);

const VideoCard = ({ v }) => (
  <div style={{
    width: 380,
    flexShrink: 0,
    background: "var(--surface)",
    border: "1px solid var(--line)",
    borderRadius: "var(--r-lg)",
    overflow: "hidden",
    boxShadow: "0 1px 2px rgba(14, 27, 42, 0.04), 0 20px 40px -28px rgba(14, 27, 42, 0.15)",
  }}>
    {/* Fake video preview — subtle gradient + play button + faux waveform */}
    <div style={{
      height: 200,
      position: "relative",
      background: "linear-gradient(135deg, #1F3147, #3A6A9A)",
      overflow: "hidden",
    }}>
      {/* decorative rings */}
      <svg width="100%" height="100%" viewBox="0 0 380 200" preserveAspectRatio="none" style={{ position: "absolute", inset: 0, opacity: 0.35 }}>
        <circle cx="320" cy="40" r="90" fill="none" stroke="var(--accent)" strokeWidth="1" />
        <circle cx="60" cy="170" r="70" fill="none" stroke="var(--accent)" strokeWidth="0.8" opacity="0.7" />
        <circle cx="190" cy="100" r="140" fill="none" stroke="var(--accent)" strokeWidth="0.6" opacity="0.4" />
      </svg>
      {/* play button */}
      <div style={{
        position: "absolute", inset: 0,
        display: "flex", alignItems: "center", justifyContent: "center",
      }}>
        <div style={{
          width: 56, height: 56, borderRadius: "50%",
          background: "rgba(255, 255, 255, 0.95)",
          display: "flex", alignItems: "center", justifyContent: "center",
          boxShadow: "0 8px 24px -8px rgba(0,0,0,0.3)",
        }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="var(--ink)">
            <path d="M7 4l14 8-14 8V4z" />
          </svg>
        </div>
      </div>
      {/* duration */}
      <div style={{
        position: "absolute", bottom: 10, right: 10,
        padding: "3px 8px",
        background: "rgba(0,0,0,0.6)",
        borderRadius: 4,
        fontSize: 11,
        fontFamily: "var(--mono)",
        color: "#fff",
      }}>{v.duration}</div>
    </div>
    <div style={{ padding: "16px 18px" }}>
      <div style={{
        fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase",
        color: "var(--muted)", marginBottom: 6, fontFamily: "var(--mono)",
      }}>{v.company}</div>
      <div style={{ fontFamily: "var(--serif)", fontSize: 19, lineHeight: 1.2, color: "var(--ink)", marginBottom: 8 }}>
        {v.title}
      </div>
      <div style={{ fontSize: 12, color: "var(--muted)" }}>{v.views} views</div>
    </div>
  </div>
);

const Row = ({ items, reverse, speed = 60 }) => {
  // Duplicate so the marquee loops seamlessly
  const doubled = [...items, ...items];
  return (
    <div style={{
      overflow: "hidden",
      padding: "16px 0",
      maskImage: "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)",
      WebkitMaskImage: "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)",
    }}>
      <div style={{
        display: "flex",
        gap: 20,
        width: "max-content",
        animation: `marquee ${speed}s linear infinite`,
        animationDirection: reverse ? "reverse" : "normal",
      }}
        onMouseEnter={e => e.currentTarget.style.animationPlayState = "paused"}
        onMouseLeave={e => e.currentTarget.style.animationPlayState = "running"}
      >
        {doubled.map((t, i) => (
          t.type === "video" ? <VideoCard key={i} v={t} /> : <TweetCard key={i} t={t} />
        ))}
      </div>
    </div>
  );
};

const TestimonialMarquee = () => {
  // Split into two rows
  const row1 = TWEETS.filter((_, i) => i % 2 === 0);
  const row2 = TWEETS.filter((_, i) => i % 2 === 1);
  return (
    <>
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
      <Row items={row1} speed={75} />
      <Row items={row2} speed={90} reverse />
    </>
  );
};

export default TestimonialMarquee;
