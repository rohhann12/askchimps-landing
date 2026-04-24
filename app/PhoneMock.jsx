'use client';
import React from 'react';
import { Icon } from './Icons';
import Waveform from './Waveform';

const DEFAULT_LEAD = {
  name: "Marcus Reid",
  company: "Halberd Analytics",
  role: "VP Operations",
  reason: "Inbound demo request",
};

const AGENT_SCENARIOS = [
  { agent: "Corvo · Outbound SDR", goal: "Qualifying inbound lead from website form" },
  { agent: "Corvo · Renewals",    goal: "Expanding seat count on existing contract" },
  { agent: "Corvo · Appointment", goal: "Booking a product walkthrough for next week" },
];

// Fallback transcript used if claude.complete fails or is unavailable.
const FALLBACK_LINES = [
  { who: "agent", text: "Hi Marcus — thanks for requesting a demo. Quick call, is now a good time?" },
  { who: "lead",  text: "Yeah, I've got about four minutes." },
  { who: "agent", text: "Perfect. You mentioned scaling outbound at Halberd — how's your team handling follow-ups today?" },
  { who: "lead",  text: "Honestly, reps are doing it by hand. It's a bottleneck." },
  { who: "agent", text: "Got it. Most teams your size see about forty percent of leads go cold inside a week. I can show you how Corvo recovers those — want me to send a calendar link for Thursday?" },
  { who: "lead",  text: "Thursday afternoon would work." },
  { who: "agent", text: "Booking it now. You'll get a confirmation in under a minute." },
];

const useTyping = (text, speed = 22, start = true) => {
  const [shown, setShown] = React.useState("");
  React.useEffect(() => {
    if (!start) return;
    setShown("");
    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setShown(text.slice(0, i));
      if (i >= text.length) clearInterval(id);
    }, speed);
    return () => clearInterval(id);
  }, [text, start, speed]);
  return shown;
};

const TranscriptLine = ({ line, typing, isLast }) => {
  const displayed = typing ? useTyping(line.text, 18, true) : line.text;
  const isAgent = line.who === "agent";
  return (
    <div style={{
      display: "flex",
      flexDirection: isAgent ? "row" : "row-reverse",
      gap: 10,
      marginBottom: 12,
      alignItems: "flex-end",
    }}>
      <div style={{
        width: 26, height: 26, borderRadius: "50%",
        background: isAgent ? "var(--ink)" : "var(--accent-wash)",
        color: isAgent ? "#fff" : "var(--accent-deep)",
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: 11, fontFamily: "var(--serif)", fontStyle: "italic",
        flexShrink: 0,
      }}>
        {isAgent ? "C" : "M"}
      </div>
      <div style={{
        maxWidth: "78%",
        padding: "10px 14px",
        borderRadius: isAgent ? "14px 14px 14px 4px" : "14px 14px 4px 14px",
        background: isAgent ? "rgba(14, 27, 42, 0.04)" : "var(--accent-wash)",
        border: "1px solid " + (isAgent ? "rgba(14, 27, 42, 0.06)" : "rgba(122, 174, 217, 0.35)"),
        color: "var(--ink-2)",
        fontSize: 13.5,
        lineHeight: 1.5,
      }}
        className={typing && isLast ? "caret" : ""}
      >
        {displayed}
      </div>
    </div>
  );
};

const PhoneMock = ({ lead = DEFAULT_LEAD, scenario = AGENT_SCENARIOS[0] }) => {
  const [lines, setLines] = React.useState([]);
  const [seconds, setSeconds] = React.useState(0);
  const [status, setStatus] = React.useState("generating"); // generating | live | done
  const [signal, setSignal] = React.useState(0.7);
  const scrollRef = React.useRef(null);

  // Generate a realistic transcript with Claude, falling back if it fails.
  React.useEffect(() => {
    let cancelled = false;
    (async () => {
      const prompt = `You are writing a short, realistic sales-call transcript.
Agent: "Corvo" — an AI voice SDR calling a lead.
Lead: ${lead.name}, ${lead.role} at ${lead.company}. Reason: ${lead.reason}.
Goal of call: ${scenario.goal}.

Return STRICT JSON only — no prose, no markdown fences — an array of 6 to 8 turns:
[{"who":"agent","text":"..."}, {"who":"lead","text":"..."}, ...]
Start with agent, alternate. Keep each line under 22 words. Natural, conversational, concrete. No greetings that feel like forms. The last agent line should wrap up with a confirmed next step.`;

      let parsed = null;
      try {
        if (window.claude && window.claude.complete) {
          const raw = await window.claude.complete(prompt);
          // Strip any accidental code fences
          const clean = raw.replace(/```json|```/g, "").trim();
          // Find first [ and last ]
          const s = clean.indexOf("["), e = clean.lastIndexOf("]");
          if (s !== -1 && e !== -1) {
            const arr = JSON.parse(clean.slice(s, e + 1));
            if (Array.isArray(arr) && arr.length && arr[0].text) parsed = arr;
          }
        }
      } catch (err) {
        console.warn("claude.complete failed, using fallback", err);
      }
      const use = parsed || FALLBACK_LINES;
      if (cancelled) return;
      setLines(use);
      setStatus("live");
    })();
    return () => { cancelled = true; };
  }, [lead, scenario]);

  // Call timer
  React.useEffect(() => {
    if (status !== "live") return;
    const id = setInterval(() => setSeconds(s => s + 1), 1000);
    return () => clearInterval(id);
  }, [status]);

  // Fake signal strength undulation
  React.useEffect(() => {
    const id = setInterval(() => setSignal(0.55 + Math.random() * 0.4), 1200);
    return () => clearInterval(id);
  }, []);

  // Progressive reveal of lines, one at a time, so the typing effect plays in sequence.
  const [revealed, setRevealed] = React.useState(0);
  React.useEffect(() => {
    if (status !== "live") return;
    setRevealed(1);
  }, [status]);

  React.useEffect(() => {
    if (status !== "live" || revealed === 0) return;
    if (revealed >= lines.length) { setStatus("done"); return; }
    const line = lines[revealed - 1];
    const ms = Math.max(1400, line.text.length * 22 + 600);
    const id = setTimeout(() => setRevealed(r => r + 1), ms);
    return () => clearTimeout(id);
  }, [revealed, lines, status]);

  React.useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [revealed]);

  const mm = String(Math.floor(seconds / 60)).padStart(2, "0");
  const ss = String(seconds % 60).padStart(2, "0");

  const visible = lines.slice(0, revealed);
  // Whoever is last — that's who's "speaking" right now.
  const currentSpeaker = visible.length ? visible[visible.length - 1].who : "agent";

  return (
    <div className="card-soft" style={{
      width: "100%",
      maxWidth: 460,
      padding: 0,
      overflow: "hidden",
      position: "relative",
    }}>
      {/* Header — call status bar */}
      <div style={{
        padding: "18px 22px 16px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottom: "1px solid var(--line-soft)",
        background: "linear-gradient(180deg, rgba(232, 241, 250, 0.5), transparent)",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span className="pill" style={{ padding: "4px 10px", fontSize: 11 }}>
            <span className="dot live" />
            LIVE CALL
          </span>
          <span className="mono" style={{ color: "var(--muted)" }}>{mm}:{ss}</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 6, color: "var(--muted)" }}>
          <Icon name="waveform" size={14} />
          <span className="mono" style={{ fontSize: 11 }}>
            {Math.round(signal * 100)}%
          </span>
        </div>
      </div>

      {/* Caller card */}
      <div style={{ padding: "20px 22px 14px" }}>
        <div style={{ fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--muted)", marginBottom: 8 }}>
          {scenario.agent}
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div style={{
            width: 46, height: 46, borderRadius: "50%",
            background: "linear-gradient(135deg, var(--accent), var(--accent-deep))",
            display: "flex", alignItems: "center", justifyContent: "center",
            color: "#fff", fontFamily: "var(--serif)", fontSize: 20, fontStyle: "italic",
            boxShadow: "0 6px 16px -6px rgba(58, 106, 154, 0.5)",
            flexShrink: 0,
          }}>
            {lead.name.split(" ").map(n => n[0]).join("")}
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontFamily: "var(--serif)", fontSize: 20, lineHeight: 1.15, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
              {lead.name}
            </div>
            <div style={{ fontSize: 12.5, color: "var(--muted)", marginTop: 2, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
              {lead.role} · {lead.company}
            </div>
          </div>
        </div>

        {/* Goal row — on its own line so it never collides with the name */}
        <div style={{
          marginTop: 14,
          padding: "10px 12px",
          borderRadius: 10,
          background: "rgba(14, 27, 42, 0.03)",
          border: "1px solid var(--line-soft)",
          display: "flex",
          alignItems: "center",
          gap: 10,
          fontSize: 12,
        }}>
          <span className="mono" style={{ color: "var(--muted)", letterSpacing: "0.08em", flexShrink: 0 }}>GOAL</span>
          <span style={{ color: "var(--ink-2)", lineHeight: 1.4 }}>{scenario.goal}</span>
        </div>

        {/* Waveform */}
        <div style={{ marginTop: 18, padding: "10px 0" }}>
          <Waveform
            bars={36}
            height={42}
            active={status !== "done"}
            speaking={status === "live"}
            color={currentSpeaker === "agent" ? "var(--accent-deep)" : "var(--ink-2)"}
          />
          <div style={{
            marginTop: 8,
            display: "flex",
            justifyContent: "space-between",
            fontSize: 10.5,
            color: "var(--muted)",
            fontFamily: "var(--mono)",
            letterSpacing: "0.06em",
          }}>
            <span>{currentSpeaker === "agent" ? "CORVO SPEAKING" : "LEAD SPEAKING"}</span>
            <span>LATENCY 148ms</span>
          </div>
        </div>
      </div>

      {/* Transcript */}
      <div
        ref={scrollRef}
        style={{
          padding: "12px 18px 18px",
          maxHeight: 260,
          overflowY: "auto",
          borderTop: "1px solid var(--line-soft)",
          background: "var(--surface-2)",
          scrollBehavior: "smooth",
        }}
      >
        {status === "generating" && (
          <div style={{
            display: "flex", alignItems: "center", gap: 10,
            padding: "20px 4px", color: "var(--muted)", fontSize: 13,
          }}>
            <span style={{
              width: 10, height: 10, borderRadius: "50%",
              background: "var(--accent)",
              animation: "pulse 1.2s infinite",
            }} />
            Connecting agent…
          </div>
        )}
        {visible.map((line, i) => (
          <TranscriptLine
            key={i + "-" + line.text.slice(0, 10)}
            line={line}
            typing={i === visible.length - 1 && status === "live"}
            isLast={i === visible.length - 1}
          />
        ))}
        {status === "done" && (
          <div style={{
            marginTop: 6,
            padding: "10px 12px",
            borderRadius: 10,
            background: "rgba(52, 199, 89, 0.08)",
            border: "1px solid rgba(52, 199, 89, 0.25)",
            display: "flex", alignItems: "center", gap: 8,
            fontSize: 12.5, color: "#1F7A3E",
          }}>
            <Icon name="check" size={14} stroke={2} />
            Meeting booked · Synced to HubSpot
          </div>
        )}
      </div>

      {/* Call controls footer */}
      <div style={{
        padding: "12px 22px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 14,
        borderTop: "1px solid var(--line-soft)",
        background: "var(--surface)",
      }}>
        {[
          { icon: "mic", label: "Mute" },
          { icon: "waveform", label: "Audio" },
          { icon: "chart", label: "Notes" },
        ].map(b => (
          <button key={b.label} style={{
            width: 38, height: 38, borderRadius: "50%",
            border: "1px solid var(--line)",
            background: "var(--surface)",
            color: "var(--muted)",
            display: "flex", alignItems: "center", justifyContent: "center",
            cursor: "pointer",
          }}>
            <Icon name={b.icon} size={16} />
          </button>
        ))}
        <button style={{
          height: 38, padding: "0 18px",
          borderRadius: 999,
          background: "#E53E3E",
          color: "#fff",
          border: 0,
          fontFamily: "var(--sans)",
          fontSize: 12.5,
          fontWeight: 500,
          letterSpacing: "0.02em",
          display: "flex", alignItems: "center", gap: 8,
          cursor: "pointer",
        }}>
          <Icon name="phone" size={14} style={{ transform: "rotate(135deg)" }} />
          End
        </button>
      </div>
    </div>
  );
};

export default PhoneMock;
export { AGENT_SCENARIOS, DEFAULT_LEAD };
