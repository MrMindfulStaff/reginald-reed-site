"use client";

import Script from "next/script";
import { useEffect } from "react";

export default function RTRPage() {
  useEffect(() => {
    // Set the date
    const dateEl = document.getElementById("rtr-date");
    if (dateEl) {
      dateEl.textContent = new Date().toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      });
    }
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#080b12",
        padding: "40px 20px",
        fontFamily: "'Inter', system-ui, sans-serif",
      }}
    >
      <style
        dangerouslySetInnerHTML={{
          __html: `
  #rtr-wrap{background:#0f1117;border-radius:12px;overflow:hidden;border:0.5px solid rgba(255,255,255,0.1);font-family:'Inter',system-ui,sans-serif;color:#e2e8f0;max-width:1100px;margin:0 auto;}
  .rtr-header{background:#080b12;padding:20px 24px;border-bottom:0.5px solid rgba(255,255,255,0.07);display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:16px;}
  .rtr-avatar{width:52px;height:52px;border-radius:50%;background:linear-gradient(135deg,#3b6fe8,#9b59f5);display:flex;align-items:center;justify-content:center;font-size:18px;font-weight:700;color:#fff;flex-shrink:0;}
  .rtr-section{padding:20px 24px;border-bottom:0.5px solid rgba(255,255,255,0.05);}
  .rtr-label{font-size:11px;color:#6b7280;letter-spacing:0.5px;margin-bottom:12px;text-transform:uppercase;}
  .career-bar{display:flex;height:26px;border-radius:4px;overflow:hidden;margin-bottom:10px;}
  .three-col{display:grid;grid-template-columns:1fr 1fr 1fr;gap:0;}
  .col-pad{padding:0 20px;}
  .col-pad:first-child{padding-left:0;border-right:0.5px solid rgba(255,255,255,0.05);}
  .col-pad:last-child{padding-right:0;padding-left:20px;}
  .col-pad:nth-child(2){border-right:0.5px solid rgba(255,255,255,0.05);}
  .badge-hex{display:flex;flex-direction:column;align-items:center;gap:5px;width:76px;padding:10px 6px;background:rgba(255,255,255,0.03);border:0.5px solid rgba(255,255,255,0.08);border-radius:6px;}
  .metric-tab{padding:5px 12px;border-radius:4px;border:0.5px solid rgba(255,255,255,0.1);background:transparent;color:#9ca3af;font-size:11px;cursor:pointer;font-family:inherit;}
  .metric-tab.active{background:#3b6fe8;border-color:#3b6fe8;color:#fff;}
  .job-row{border-radius:6px;margin-bottom:6px;overflow:hidden;border:0.5px solid transparent;transition:border-color 0.15s;}
  .job-row.open{border-color:rgba(255,255,255,0.08);background:rgba(255,255,255,0.02);}
  .job-trigger{display:flex;align-items:center;gap:12px;padding:12px 14px;cursor:pointer;}
  .job-bar{width:3px;align-self:stretch;border-radius:0;flex-shrink:0;}
  .hours-pill{display:inline-block;padding:2px 8px;border-radius:3px;font-size:11px;font-family:monospace;}
  .active-badge{display:inline-block;padding:1px 7px;border-radius:3px;font-size:10px;background:rgba(16,185,129,0.15);border:0.5px solid rgba(16,185,129,0.3);color:#6ee7b7;font-family:monospace;margin-left:6px;}
  .new-badge{display:inline-block;padding:1px 7px;border-radius:3px;font-size:10px;background:rgba(245,158,11,0.15);border:0.5px solid rgba(245,158,11,0.3);color:#fcd34d;font-family:monospace;margin-left:6px;}
  @media(max-width:768px){
    .three-col{grid-template-columns:1fr;}
    .col-pad{padding:0 0 16px 0!important;border-right:none!important;border-bottom:0.5px solid rgba(255,255,255,0.05);}
    .col-pad:last-child{border-bottom:none;padding-bottom:0!important;}
  }
`,
        }}
      />

      <div id="rtr-wrap">
        <div className="rtr-header">
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div className="rtr-avatar">RR</div>
            <div>
              <div style={{ fontSize: 11, color: "#6b7280", letterSpacing: 0.5, marginBottom: 2 }}>
                Real-Time Resume&trade; &middot; Powered by REIGN
              </div>
              <div style={{ fontSize: 20, fontWeight: 700, color: "#fff", lineHeight: 1.1, marginBottom: 2 }}>
                Reginald Reed Jr.
              </div>
              <div style={{ fontSize: 11, color: "#6b7280" }}>
                Milwaukee, WI 53206 &nbsp;&middot;&nbsp; reignos.ai &nbsp;&middot;&nbsp; Founder &amp; CEO, Mindful Measures Inc.
              </div>
            </div>
          </div>
          <div style={{ textAlign: "right", flexShrink: 0 }}>
            <div style={{ fontSize: 10, color: "#6b7280", fontFamily: "monospace", marginBottom: 2 }}>LAST UPDATED</div>
            <div style={{ fontSize: 12, color: "#e2e8f0", fontFamily: "monospace" }} id="rtr-date"></div>
            <div style={{ fontSize: 10, color: "#10b981", fontFamily: "monospace", marginTop: 4 }}>&#9679; LIVE</div>
          </div>
        </div>

        {/* Career Overview */}
        <div className="rtr-section">
          <div className="rtr-label">Career Overview</div>
          <div className="career-bar">
            <div style={{ width: "32%", background: "#3b6fe8", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 500, color: "rgba(255,255,255,0.95)" }}>Construction</div>
            <div style={{ width: "20%", background: "#9b59f5", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 500, color: "rgba(255,255,255,0.95)" }}>Workforce</div>
            <div style={{ width: "17%", background: "#e84393", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 500, color: "rgba(255,255,255,0.95)" }}>AI/Tech</div>
            <div style={{ width: "14%", background: "#f59e0b", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 500, color: "rgba(255,255,255,0.95)" }}>Staffing</div>
            <div style={{ width: "11%", background: "#10b981", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, fontWeight: 500, color: "rgba(255,255,255,0.95)" }}>BES</div>
            <div style={{ width: "6%", background: "#374151" }}></div>
          </div>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginBottom: 8 }}>
            <span style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 11, color: "#9ca3af" }}><span style={{ width: 8, height: 8, borderRadius: 2, background: "#3b6fe8", display: "inline-block" }}></span>Construction <span style={{ color: "#6ee7b7", fontSize: 10 }}>&#9679;</span></span>
            <span style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 11, color: "#9ca3af" }}><span style={{ width: 8, height: 8, borderRadius: 2, background: "#9b59f5", display: "inline-block" }}></span>Workforce Dev</span>
            <span style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 11, color: "#9ca3af" }}><span style={{ width: 8, height: 8, borderRadius: 2, background: "#e84393", display: "inline-block" }}></span>AI / Technology</span>
            <span style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 11, color: "#9ca3af" }}><span style={{ width: 8, height: 8, borderRadius: 2, background: "#f59e0b", display: "inline-block" }}></span>Staffing</span>
            <span style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 11, color: "#9ca3af" }}><span style={{ width: 8, height: 8, borderRadius: 2, background: "#10b981", display: "inline-block" }}></span>Black Entrepreneurship <span style={{ color: "#fcd34d", fontSize: 10 }}>&#9733; new</span></span>
          </div>
          <div style={{ fontSize: 11, color: "#4b5563", fontFamily: "monospace" }}>Roles run concurrently &mdash; hours are per-role, not deduplicated</div>
        </div>

        {/* Bio / Education / Certifications */}
        <div className="rtr-section">
          <div className="three-col">
            <div className="col-pad">
              <div className="rtr-label">Bio</div>
              <p style={{ fontSize: 12, color: "#9ca3af", lineHeight: 1.75, margin: 0 }}>Started in construction at 19 and never left. While still actively working in the trades, built one of the most integrated anti-poverty ecosystems in America. No degree. No institutional backing. From Milwaukee&apos;s 53206, engineered a self-reinforcing pipeline where workforce training, staffing, AI technology, childcare, and transportation compound into liberation infrastructure. In 2025, launched The Black Entrepreneurship Society &mdash; bringing world-class business tools to minority founders. 525+ people trained. $60M+ in wages generated.</p>
            </div>
            <div className="col-pad">
              <div className="rtr-label">Education</div>
              <div style={{ marginBottom: 12 }}>
                <div style={{ fontSize: 13, fontWeight: 500, color: "#e5e7eb", marginBottom: 1 }}>Self-Directed Systems Education</div>
                <div style={{ fontSize: 12, color: "#6b7280" }}>Org Architecture &amp; AI Design</div>
                <div style={{ fontSize: 11, color: "#4b5563", fontFamily: "monospace" }}>2010 &ndash; Present</div>
              </div>
              <div>
                <div style={{ fontSize: 13, fontWeight: 500, color: "#e5e7eb", marginBottom: 1 }}>23 Years Field Education</div>
                <div style={{ fontSize: 12, color: "#6b7280" }}>Construction Trades &mdash; Full Lifecycle</div>
                <div style={{ fontSize: 11, color: "#4b5563", fontFamily: "monospace" }}>2003 &ndash; Present <span style={{ color: "#6ee7b7" }}>&#9679; active</span></div>
              </div>
            </div>
            <div className="col-pad">
              <div className="rtr-label">Certifications</div>
              <div style={{ marginBottom: 10 }}>
                <div style={{ fontSize: 13, fontWeight: 500, color: "#e5e7eb" }}>REIGN IWOS Architect</div>
                <div style={{ fontSize: 11, color: "#6b7280" }}>Mindful Measures Inc.</div>
                <div style={{ fontSize: 11, color: "#4b5563", fontFamily: "monospace" }}>2022</div>
              </div>
              <div style={{ marginBottom: 10 }}>
                <div style={{ fontSize: 13, fontWeight: 500, color: "#e5e7eb" }}>Workforce Dev Program Design</div>
                <div style={{ fontSize: 11, color: "#6b7280" }}>The Mindful Group</div>
                <div style={{ fontSize: 11, color: "#4b5563", fontFamily: "monospace" }}>2016</div>
              </div>
              <div style={{ marginBottom: 10 }}>
                <div style={{ fontSize: 13, fontWeight: 500, color: "#e5e7eb" }}>Construction Project Management</div>
                <div style={{ fontSize: 11, color: "#6b7280" }}>Field Certified</div>
                <div style={{ fontSize: 11, color: "#4b5563", fontFamily: "monospace" }}>2003 &ndash; Present &#9679;</div>
              </div>
              <span style={{ background: "rgba(59,111,232,0.12)", border: "0.5px solid rgba(59,111,232,0.3)", borderRadius: 3, padding: "3px 10px", fontSize: 11, color: "#93c5fd" }}>Total: 3</span>
            </div>
          </div>
        </div>

        {/* Badges */}
        <div className="rtr-section">
          <div className="rtr-label">Badges</div>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {[
              { icon: "🏗", label: "Trades Veteran", bg: "59,111,232" },
              { icon: "🤖", label: "AI Pioneer", bg: "155,89,245" },
              { icon: "💡", label: "Category Creator", bg: "232,67,147" },
              { icon: "🌎", label: "Community Builder", bg: "16,185,129" },
              { icon: "🚀", label: "Serial Founder", bg: "245,158,11" },
              { icon: "⚖", label: "Liberation Architect", bg: "59,111,232" },
              { icon: "🏗", label: "Systems Architect", bg: "155,89,245" },
              { icon: "📈", label: "Impact at Scale", bg: "16,185,129" },
            ].map((b) => (
              <div className="badge-hex" key={b.label}>
                <div style={{ width: 40, height: 40, borderRadius: "50%", background: `rgba(${b.bg},0.2)`, border: `1.5px solid rgba(${b.bg},0.4)`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16 }}>{b.icon}</div>
                <span style={{ fontSize: 9, color: "#9ca3af", textAlign: "center", lineHeight: 1.3 }}>{b.label}</span>
              </div>
            ))}
            <div className="badge-hex" style={{ borderColor: "rgba(245,158,11,0.3)" }}>
              <div style={{ width: 40, height: 40, borderRadius: "50%", background: "rgba(245,158,11,0.2)", border: "1.5px solid rgba(245,158,11,0.5)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16 }}>✋</div>
              <span style={{ fontSize: 9, color: "#fcd34d", textAlign: "center", lineHeight: 1.3 }}>Equity Builder</span>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="rtr-section">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14, flexWrap: "wrap", gap: 8 }}>
            <div className="rtr-label" style={{ marginBottom: 0 }}>Timeline</div>
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
              <button className="metric-tab active" id="tab-impact">Impact Score</button>
              <button className="metric-tab" id="tab-hours">Career Hours</button>
              <button className="metric-tab" id="tab-orgs">Orgs Founded</button>
            </div>
          </div>
          <div style={{ background: "#080b12", borderRadius: 6, padding: "12px 8px" }}>
            <canvas id="tl-chart" height="120"></canvas>
          </div>
        </div>

        {/* Impact Metrics */}
        <div className="rtr-section">
          <div className="rtr-label">Impact Metrics</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(130px,1fr))", gap: 10 }}>
            {[
              { label: "People Trained", value: "525+", sub: "CNA · CBRF · Construction" },
              { label: "Wages Generated", value: "$60M+", sub: "Direct economic impact" },
              { label: "Total Career Hours", value: "148K+", sub: "Verified @ 2,704 hrs/yr" },
              { label: "Integrated Entities", value: "7", sub: "One unified ecosystem" },
            ].map((m) => (
              <div key={m.label} style={{ background: "#080b12", borderRadius: 6, padding: 14, border: "0.5px solid rgba(255,255,255,0.05)" }}>
                <div style={{ fontSize: 11, color: "#6b7280", marginBottom: 3 }}>{m.label}</div>
                <div style={{ fontSize: 22, fontWeight: 700, color: "#fff", lineHeight: 1, marginBottom: 2 }}>{m.value}</div>
                <div style={{ fontSize: 10, color: "#4b5563" }}>{m.sub}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Founder Performance Indicators */}
        <div className="rtr-section">
          <div className="rtr-label">Founder Performance Indicators</div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 0 }}>
            <div style={{ paddingRight: 20, borderRight: "0.5px solid rgba(255,255,255,0.05)", textAlign: "center" }}>
              <div style={{ fontSize: 13, fontWeight: 500, color: "#fff", marginBottom: 2 }}>APR</div>
              <div style={{ fontSize: 10, color: "#6b7280", marginBottom: 10 }}>Founder Performance Rating</div>
              <canvas id="gauge-canvas" width={140} height={90} style={{ display: "block", margin: "0 auto" }}></canvas>
              <div style={{ fontSize: 13, color: "#9ca3af", fontFamily: "monospace", marginTop: 2 }}>9.1 / 10</div>
            </div>
            <div style={{ padding: "0 20px", borderRight: "0.5px solid rgba(255,255,255,0.05)", textAlign: "center" }}>
              <div style={{ fontSize: 13, fontWeight: 500, color: "#fff", marginBottom: 2 }}>PPI</div>
              <div style={{ fontSize: 10, color: "#6b7280", marginBottom: 8 }}>Predictive Impact Index</div>
              <div style={{ fontSize: 22, color: "#f59e0b", letterSpacing: 2, margin: "8px 0" }}>★★★★☆</div>
              <div style={{ fontSize: 13, color: "#9ca3af", fontFamily: "monospace" }}>4.7</div>
            </div>
            <div style={{ paddingLeft: 20, textAlign: "center" }}>
              <div style={{ fontSize: 13, fontWeight: 500, color: "#fff", marginBottom: 2 }}>SP</div>
              <div style={{ fontSize: 10, color: "#6b7280", marginBottom: 16 }}>Success Probability</div>
              <div style={{ height: 10, borderRadius: 5, overflow: "hidden", background: "linear-gradient(90deg,#e74c3c,#f1c40f,#2ecc71)", position: "relative", marginBottom: 4 }}>
                <div style={{ position: "absolute", right: "4%", top: -3, width: 3, height: 16, background: "#fff", borderRadius: 2 }}></div>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: 10, color: "#6b7280", marginBottom: 8 }}><span>Low</span><span>High</span></div>
              <div style={{ fontSize: 20, fontWeight: 700, color: "#fff", fontFamily: "monospace" }}>96%</div>
            </div>
          </div>
        </div>

        {/* Employment History */}
        <div className="rtr-section" style={{ borderBottom: "none" }}>
          <div className="rtr-label">Employment History &mdash; Verified Career Hours</div>

          {[
            { id: "job0", color: "#3b6fe8", pillBg: "59,111,232", pillColor: "#93c5fd", title: "Construction Professional", org: "Field Operations — Various GCs", hours: "62,192 hrs", range: "2003–Present", years: "23 yrs", details: ["Started at 19 — full project lifecycle from laborer to project lead", "Residential, commercial & industrial — Milwaukee and surrounding markets", "Still active — field experience directly informs REIGN's construction-first strategy"], breakdown: "23 yrs × 2,704 hrs = 62,192 hours", breakdownNote: "HOURS BREAKDOWN — 2,704 verified hrs/yr (2,080 base + 30%)", badge: "active" },
            { id: "job1", color: "#9b59f5", pillBg: "155,89,245", pillColor: "#c4b5fd", title: "Founder", org: "The Mindful Group", hours: "32,448 hrs", range: "2014–Present", years: "12 yrs", details: ["525+ people trained — CNA, CBRF, Construction Trades", "$60M+ in wages generated — zero tuition model", "Removed every barrier between training and economic participation"], breakdown: "12 yrs × 2,704 hrs = 32,448 hours", breakdownNote: "HOURS BREAKDOWN", badge: "active" },
            { id: "job2", color: "#e84393", pillBg: "232,67,147", pillColor: "#f9a8d4", title: "Founder & CEO", org: "Mindful Measures Inc. (REIGN)", hours: "27,040 hrs", range: "2016–Present", years: "10 yrs", details: ["World's first Intelligent Workforce Operating System", "35+ AI agents, MCP architecture, Real-Time Resume™ technology", "$2–3M seed round in motion — first enterprise customer live"], breakdown: "10 yrs × 2,704 hrs = 27,040 hours", breakdownNote: "HOURS BREAKDOWN", badge: "active" },
            { id: "job3", color: "#f59e0b", pillBg: "245,158,11", pillColor: "#fcd34d", title: "Founder", org: "Mindful Staffing Solutions", hours: "24,336 hrs", range: "2017–Present", years: "9 yrs", details: ["Direct training-to-placement pipeline across construction & healthcare", "Converts Mindful Group graduates into placed, employed workers"], breakdown: "9 yrs × 2,704 hrs = 24,336 hours", breakdownNote: "HOURS BREAKDOWN", badge: "active" },
            { id: "job4", color: "#10b981", pillBg: "16,185,129", pillColor: "#6ee7b7", title: "Founder", org: "The Black Entrepreneurship Society", hours: "2,704 hrs", range: "2025–Present", years: "1 yr", details: ["Skool.com-based platform giving minority business owners access to world-class business tools", "Closing the resource gap between minority founders and institutional-grade business infrastructure", "Community-driven learning — where access, knowledge, and networks compound together"], breakdown: "1 yr × 2,704 hrs = 2,704 hours", breakdownNote: "HOURS BREAKDOWN", badge: "active", isNew: true },
          ].map((job) => (
            <div className="job-row" id={job.id} key={job.id}>
              <div className="job-trigger" onClick={() => {
                const exp = document.getElementById(`exp-${job.id}`);
                const arr = document.getElementById(`arr-${job.id}`);
                const row = document.getElementById(job.id);
                if (exp && arr && row) {
                  const open = exp.style.display === "block";
                  exp.style.display = open ? "none" : "block";
                  arr.innerHTML = open ? "▼" : "▲";
                  row.classList.toggle("open", !open);
                }
              }}>
                <div className="job-bar" style={{ background: job.color }}></div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", flexWrap: "wrap", gap: 6 }}>
                    <div>
                      <span style={{ fontSize: 13, fontWeight: 500, color: "#e5e7eb" }}>{job.title}</span>
                      <span style={{ fontSize: 12, color: "#9ca3af" }}> &middot; {job.org}</span>
                      <span className="active-badge">Active</span>
                      {job.isNew && <span className="new-badge">2025</span>}
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
                      <span className="hours-pill" style={{ background: `rgba(${job.pillBg},0.15)`, border: `0.5px solid rgba(${job.pillBg},0.3)`, color: job.pillColor }}>{job.hours}</span>
                      <span style={{ fontSize: 11, color: "#4b5563", fontFamily: "monospace" }}>{job.range}</span>
                      <span style={{ fontSize: 11, color: "#4b5563", fontFamily: "monospace" }}>{job.years}</span>
                      <span id={`arr-${job.id}`} style={{ color: "#6b7280", fontSize: 11 }}>▼</span>
                    </div>
                  </div>
                </div>
              </div>
              <div id={`exp-${job.id}`} style={{ display: "none", padding: "0 14px 12px 29px" }}>
                {job.details.map((d, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 7, marginBottom: 5 }}>
                    <span style={{ color: job.color, fontSize: 11, marginTop: 1 }}>◆</span>
                    <span style={{ fontSize: 12, color: "#9ca3af" }}>{d}</span>
                  </div>
                ))}
                <div style={{ marginTop: 10, padding: "8px 12px", background: `${job.color}0f`, borderRadius: 4, borderLeft: `2px solid ${job.color}` }}>
                  <div style={{ fontSize: 10, color: "#6b7280", marginBottom: 4 }}>{job.breakdownNote}</div>
                  <div style={{ fontSize: 12, color: job.pillColor, fontFamily: "monospace" }}>{job.breakdown.split("=")[0]}= <strong style={{ color: "#fff" }}>{job.breakdown.split("= ")[1]}</strong></div>
                </div>
              </div>
            </div>
          ))}

          <div style={{ marginTop: 14, padding: "12px 16px", background: "rgba(255,255,255,0.02)", borderRadius: 6, border: "0.5px solid rgba(255,255,255,0.06)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 8, marginBottom: 8 }}>
              <div style={{ fontSize: 11, color: "#6b7280" }}>Total Verified Career Hours</div>
              <div style={{ fontSize: 20, fontWeight: 700, color: "#fff", fontFamily: "monospace" }}>148,720 <span style={{ fontSize: 12, color: "#6b7280", fontWeight: 400 }}>hrs</span></div>
            </div>
            <div style={{ fontSize: 10, color: "#4b5563", fontFamily: "monospace" }}>Base: 2,080 hrs/yr &nbsp;&middot;&nbsp; Multiplier: 1.30× &nbsp;&middot;&nbsp; Verified rate: 2,704 hrs/yr &nbsp;&middot;&nbsp; Roles run concurrently</div>
          </div>
        </div>

        {/* Footer */}
        <div style={{ padding: "10px 24px", background: "#080b12", borderTop: "0.5px solid rgba(255,255,255,0.05)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontSize: 10, color: "#374151" }}>Real-Time Resume&trade; by <span style={{ color: "#9b59f5" }}>REIGN IWOS</span> &middot; Mindful Measures Inc.</span>
          <span style={{ fontSize: 10, color: "#374151", fontFamily: "monospace" }}>REIGNOS.AI</span>
        </div>
      </div>

      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.0/chart.umd.min.js"
        strategy="afterInteractive"
        onLoad={() => {
          // @ts-expect-error Chart is loaded from CDN
          const Chart = window.Chart;
          const datasets: Record<string, { data: number[]; color: string }> = {
            impact: { data: [18, 28, 40, 52, 65, 74, 80, 86, 91, 96, 99], color: "#3b6fe8" },
            hours: { data: [0, 8, 22, 38, 54, 68, 84, 97, 111, 130, 149], color: "#9b59f5" },
            orgs: { data: [0, 0, 0, 0, 0, 1, 2, 3, 4, 6, 7], color: "#10b981" },
          };
          const labels = ["2003", "2006", "2009", "2012", "2014", "2016", "2018", "2020", "2022", "2024", "2026"];

          const ctx = (document.getElementById("tl-chart") as HTMLCanvasElement)?.getContext("2d");
          if (!ctx) return;

          const chart = new Chart(ctx, {
            type: "line",
            data: {
              labels,
              datasets: [{
                data: datasets.impact.data,
                borderColor: datasets.impact.color,
                backgroundColor: datasets.impact.color + "18",
                fill: true, tension: 0.3, pointRadius: 3,
                pointBackgroundColor: datasets.impact.color, borderWidth: 2,
              }],
            },
            options: {
              responsive: true, maintainAspectRatio: true,
              plugins: { legend: { display: false } },
              scales: {
                x: { ticks: { color: "#4b5563", font: { size: 10 } }, grid: { color: "#1f2937" } },
                y: { ticks: { color: "#4b5563", font: { size: 10 } }, grid: { color: "#1f2937" } },
              },
            },
          });

          function setTab(key: string) {
            document.querySelectorAll(".metric-tab").forEach((b) => b.classList.remove("active"));
            document.getElementById(`tab-${key}`)?.classList.add("active");
            const d = datasets[key];
            chart.data.datasets[0].data = d.data;
            chart.data.datasets[0].borderColor = d.color;
            chart.data.datasets[0].backgroundColor = d.color + "18";
            chart.data.datasets[0].pointBackgroundColor = d.color;
            chart.update();
          }

          document.getElementById("tab-impact")?.addEventListener("click", () => setTab("impact"));
          document.getElementById("tab-hours")?.addEventListener("click", () => setTab("hours"));
          document.getElementById("tab-orgs")?.addEventListener("click", () => setTab("orgs"));

          // Gauge
          const canvas = document.getElementById("gauge-canvas") as HTMLCanvasElement;
          if (canvas) {
            const c = canvas.getContext("2d")!;
            const cx = 70, cy = 72, r = 52;
            const startAngle = Math.PI * 0.75;
            const totalSweep = Math.PI * 1.5;
            const endAngle = startAngle + totalSweep;
            c.beginPath(); c.arc(cx, cy, r, startAngle, endAngle);
            c.strokeStyle = "#1f2937"; c.lineWidth = 8; c.lineCap = "round"; c.stroke();
            const zoneColors = ["#e74c3c", "#e67e22", "#f1c40f", "#2ecc71", "#27ae60"];
            const zoneSize = totalSweep / 5;
            for (let i = 0; i < 5; i++) {
              const zS = startAngle + i * zoneSize + 0.03;
              const zE = startAngle + (i + 1) * zoneSize - 0.03;
              c.beginPath(); c.arc(cx, cy, r, zS, zE);
              c.strokeStyle = zoneColors[i]; c.lineWidth = 7; c.lineCap = "round"; c.stroke();
            }
            const pct = 9.1 / 10;
            const needleAngle = startAngle + pct * totalSweep;
            const nx = cx + 38 * Math.cos(needleAngle);
            const ny = cy + 38 * Math.sin(needleAngle);
            c.beginPath(); c.moveTo(cx, cy); c.lineTo(nx, ny);
            c.strokeStyle = "#ffffff"; c.lineWidth = 2.5; c.lineCap = "round"; c.stroke();
            c.beginPath(); c.arc(cx, cy, 5, 0, Math.PI * 2); c.fillStyle = "#ffffff"; c.fill();
          }
        }}
      />
    </div>
  );
}
