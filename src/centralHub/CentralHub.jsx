import { useState, useEffect } from "react";
import { SAMPLE } from "../data/info";

const TABS = ["Resume", "LinkedIn", "Website Bio"];

function useDebounce(val, ms) {
  const [d, setD] = useState(val);
  useEffect(() => {
    const t = setTimeout(() => setD(val), ms);
    return () => clearTimeout(t);
    }, [val, ms]);
  return d;
}

function parseJSON(str) {
  try { return { data: JSON.parse(str), error: null }; }
  catch (e) { return { data: null, error: e.message }; }
}

function Resume({ d }) {
  const p = d.personal || {};
  const exp = d.experience || [];
  const edu = d.education || [];
  const skills = d.skills || [];
  const certs = d.certifications || [];
  const languages = d.languages || [];

  return (
    <div id="resume-print" style={{ fontFamily: "Georgia, serif", maxWidth: 720, margin: "0 auto", padding: "2rem 2.5rem", color: "#1a1a1a", lineHeight: 1.5, fontSize: 14 }}>
      <div style={{ borderBottom: "2px solid #1a1a1a", paddingBottom: "1rem", marginBottom: "1.2rem" }}>
        <h1 style={{ margin: 0, fontSize: 26, fontWeight: 700, letterSpacing: "-0.5px" }}>{p.name}</h1>
        <p style={{ margin: "4px 0 0", fontSize: 15, color: "#444" }}>{p.title}</p>
        <p style={{ margin: "6px 0 0", fontSize: 12, color: "#555" }}>
          {[p.email, p.phone, p.location, p.linkedin, p.website].filter(Boolean).join("  ·  ")}
        </p>
      </div>

      {p.summary && (
        <Section title="Summary">
          <p style={{ margin: 0, fontSize: 13 }}>{p.summary}</p>
        </Section>
      )}

      {exp.length > 0 && (
        <Section title="Experience">
          {exp.map((e, i) => (
            <div key={i} style={{ marginBottom: "1rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                <strong style={{ fontSize: 14 }}>{e.role}</strong>
                <span style={{ fontSize: 12, color: "#555" }}>{e.start} – {e.end}</span>
              </div>
              <div style={{ fontSize: 13, color: "#444", marginBottom: 4 }}>{e.company}{e.location ? ` · ${e.location}` : ""}</div>
              <ul style={{ margin: "4px 0 0", paddingLeft: 18 }}>
                {(e.bullets || []).map((b, j) => <li key={j} style={{ fontSize: 13, marginBottom: 2 }}>{b}</li>)}
              </ul>
            </div>
          ))}
        </Section>
      )}

      {edu.length > 0 && (
        <Section title="Education">
          {edu.map((e, i) => (
            <div key={i} style={{ marginBottom: 8 }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <strong style={{ fontSize: 14 }}>{e.degree}</strong>
                <span style={{ fontSize: 12, color: "#555" }}>{e.start} – {e.end}</span>
              </div>
              <div style={{ fontSize: 13, color: "#444" }}>{e.institution}</div>
            </div>
          ))}
        </Section>
      )}

      {skills.length > 0 && (
        <Section title="Skills">
          <p style={{ margin: 0, fontSize: 13 }}>{skills.join("  ·  ")}</p>
        </Section>
      )}

      {languages.length > 0 && (
        <Section title="Languages">
          <p style={{ margin: 0, fontSize: 13 }}>{languages.map(l => `${l.name} (${l.description})`).join("  ·  ")}</p>
        </Section>
      )}

      {certs.length > 0 && (
        <Section title="Certifications">
          {certs.map((c, i) => (
            <div key={i} style={{ fontSize: 13, marginBottom: 2 }}>
              <strong>{c.name}</strong>{c.issuer ? ` · ${c.issuer}` : ""}{c.year ? ` · ${c.year}` : ""}
            </div>
          ))}
        </Section>
      )}
    </div>
  );
}

function Section({ title, children }) {
  return (
    <div style={{ marginBottom: "1.2rem" }}>
      <h2 style={{ fontSize: 13, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", borderBottom: "1px solid #ccc", paddingBottom: 4, marginBottom: 8, marginTop: 0 }}>{title}</h2>
      {children}
    </div>
  );
}

function LinkedIn({ d }) {
  const p = d.personal || {};
  const exp = d.experience || [];

  const blocks = [
    { label: "Headline", text: `${p.title || ""} ${p.location ? `| ${p.location}` : ""}`.trim() },
    { label: "About (summary)", text: p.summary || "" },
    ...exp.map(e => ({
      label: `Experience: ${e.role} @ ${e.company}`,
      text: `${e.role}\n${e.company}${e.location ? ` · ${e.location}` : ""}\n${e.start} – ${e.end}\n\n${(e.bullets || []).map(b => `• ${b}`).join("\n")}`
    })),
    { label: "Skills (top 5)", text: (d.skills || []).slice(0, 5).join(", ") },
  ].filter(b => b.text);

  return (
    <div style={{ padding: "1.5rem" }}>
      {blocks.map((b, i) => <CopyBlock key={i} label={b.label} text={b.text} />)}
    </div>
  );
}

function WebsiteBio({ d }) {
  const p = d.personal || {};
  const exp = d.experience || [];
  const skills = d.skills || [];
  const latest = exp[0];

  const short = `${p.name} is a ${p.title} based in ${p.location}. ${p.summary || ""}`.trim();
  const long = [
    short,
    latest ? `Currently at ${latest.company}, ${latest.role.toLowerCase()}.` : "",
    skills.length ? `Core skills: ${skills.slice(0, 5).join(", ")}.` : "",
  ].filter(Boolean).join(" ");

  return (
    <div style={{ padding: "1.5rem" }}>
      <CopyBlock label="Short bio (1–2 sentences)" text={short} />
      <CopyBlock label="Long bio (full paragraph)" text={long} />
      <CopyBlock label="Name & title" text={`${p.name}\n${p.title}`} />
      <CopyBlock label="Contact line" text={[p.email, p.linkedin, p.website].filter(Boolean).join("  ·  ")} />
    </div>
  );
}

function CopyBlock({ label, text }) {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard.writeText(text).then(() => { setCopied(true); setTimeout(() => setCopied(false), 1500); });
  };
  return (
    <div style={{ marginBottom: "1.2rem", border: "0.5px solid var(--color-border-tertiary)", borderRadius: "var(--border-radius-lg)", overflow: "hidden" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "8px 14px", background: "var(--color-background-secondary)", borderBottom: "0.5px solid var(--color-border-tertiary)" }}>
        <span style={{ fontSize: 12, fontWeight: 500, color: "var(--color-text-secondary)" }}>{label}</span>
        <button onClick={copy} style={{ fontSize: 12, padding: "3px 10px", cursor: "pointer" }}>
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>
      <pre style={{ margin: 0, padding: "12px 14px", fontSize: 13, whiteSpace: "pre-wrap", fontFamily: "inherit", color: "var(--color-text-primary)", background: "var(--color-background-primary)" }}>{text}</pre>
    </div>
  );
}

export default function CentralHub() {
  const [json, setJson] = useState(JSON.stringify(SAMPLE, null, 2));
  const [tab, setTab] = useState(0);
  const [showEditor, setShowEditor] = useState(true);
  const debouncedJson = useDebounce(json, 400);
  const { data, error } = parseJSON(debouncedJson);

  const printResume = () => {
    const el = document.getElementById("resume-print");
    if (!el) return;
    const w = window.open("", "_blank");
    w.document.write(
      `<html><head><title>Resume</title><style>body{margin:0;font-family:Georgia,serif;}@media print{body{margin:0;}}</style></head><body>${el.outerHTML}</body></html>`);
    w.document.close();
    w.focus();
    w.print();
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", fontFamily: "var(--font-sans)" }}>
      <h2 className="sr-only">Career Hub — master profile editor with resume, LinkedIn, and website bio outputs</h2>

      {/* Toolbar */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 16px", borderBottom: "0.5px solid var(--color-border-tertiary)", background: "var(--color-background-secondary)" }}>
        <div style={{ display: "flex", gap: 6 }}>
          {TABS.map((t, i) => (
            <button key={i} onClick={() => setTab(i)} style={{ padding: "5px 14px", fontSize: 13, fontWeight: tab === i ? 500 : 400, background: tab === i ? "var(--color-background-primary)" : "transparent", border: tab === i ? "0.5px solid var(--color-border-secondary)" : "0.5px solid transparent", borderRadius: "var(--border-radius-md)", cursor: "pointer", color: tab === i ? "var(--color-text-primary)" : "var(--color-text-secondary)" }}>
              {t}
            </button>
          ))}
        </div>
        <div style={{ display: "flex", gap: 8 }}>
          <button onClick={() => setShowEditor(s => !s)} style={{ fontSize: 12, padding: "5px 12px", cursor: "pointer" }}>
            {showEditor ? "Hide editor" : "Show editor"}
          </button>
          {tab === 0 && <button onClick={printResume} style={{ fontSize: 12, padding: "5px 12px", cursor: "pointer" }}>
            Print / Save PDF
          </button>}
        </div>
      </div>

      <div style={{ display: "flex", flex: 1, minHeight: 0, overflow: "hidden" }}>
        {/* JSON Editor */}
        {showEditor && (
          <div style={{ width: 340, minWidth: 260, borderRight: "0.5px solid var(--color-border-tertiary)", display: "flex", flexDirection: "column" }}>
            <div style={{ padding: "8px 14px", borderBottom: "0.5px solid var(--color-border-tertiary)", fontSize: 12, color: "var(--color-text-secondary)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span>profile.json</span>
              {error && <span style={{ color: "var(--color-text-danger)", fontSize: 11 }}>⚠ Invalid JSON</span>}
              {!error && <span style={{ color: "var(--color-text-success)", fontSize: 11 }}>✓ Valid</span>}
            </div>
            <textarea
              value={json}
              onChange={e => setJson(e.target.value)}
              spellCheck={false}
              style={{ flex: 1, padding: "12px 14px", fontFamily: "var(--font-mono)", fontSize: 12, lineHeight: 1.6, border: "none", outline: "none", resize: "none", background: "var(--color-background-primary)", color: "var(--color-text-primary)" }}
            />
          </div>
        )}

        {/* Output Panel */}
        <div style={{ flex: 1, overflowY: "auto" }}>
          {error ? (
            <div style={{ padding: "2rem", color: "var(--color-text-danger)", fontSize: 13 }}>
              <strong>JSON error:</strong> {error}<br /><br />Fix the JSON in the editor to see the preview.
            </div>
          ) : data ? (
            <>
              {tab === 0 && <Resume d={data} />}
              {tab === 1 && <LinkedIn d={data} />}
              {tab === 2 && <WebsiteBio d={data} />}
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
}