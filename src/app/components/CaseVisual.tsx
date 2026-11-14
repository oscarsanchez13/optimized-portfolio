// Illustrative product screens drawn in code with synthetic data.
// Nothing here is a screenshot of a real system, and no real names, figures or vendors appear.
import type { CaseStudy } from "@/data/profile";

function Frame({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="absolute inset-0 flex flex-col bg-[#0b1220] text-[10px] text-slate-300 font-mono">
      <div className="flex items-center gap-1.5 px-3 py-2 border-b border-white/10 bg-black/40">
        <span className="w-2 h-2 rounded-full bg-red-400/70" />
        <span className="w-2 h-2 rounded-full bg-yellow-400/70" />
        <span className="w-2 h-2 rounded-full bg-emerald-400/70" />
        <span className="ml-2 truncate text-slate-400">{title}</span>
      </div>
      <div className="flex-1 p-3 overflow-hidden">{children}</div>
    </div>
  );
}

function Bars({ values, color = "bg-emerald-400" }: { values: number[]; color?: string }) {
  return (
    <div className="absolute inset-0 flex items-end gap-1">
      {values.map((v, i) => (
        <div key={i} className={`flex-1 rounded-sm ${color} viz-grow`} style={{ height: `${v}%`, animationDelay: `${i * 60}ms` }} />
      ))}
    </div>
  );
}

function Ops() {
  const kpis = [["Open orders", "1,284"], ["Tasks today", "37"], ["Work orders", "412"], ["Approvals due", "9"]];
  return (
    <Frame title="ops.platform / overview">
      <div className="grid grid-cols-4 gap-2 mb-3">
        {kpis.map(([k, v]) => (
          <div key={k} className="rounded bg-white/5 border border-white/10 p-2">
            <div className="text-[8px] text-slate-400 truncate">{k}</div>
            <div className="text-sm text-white font-semibold">{v}</div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-2 h-[55%]">
        <div className="col-span-2 rounded bg-white/5 border border-white/10 p-2 flex flex-col">
          <div className="text-[8px] text-slate-400 mb-1">Volume by location (sample)</div>
          <div className="flex-1 relative"><Bars values={[62, 80, 45, 91, 70, 55, 84, 66]} /></div>
        </div>
        <div className="rounded bg-white/5 border border-white/10 p-2 space-y-1.5">
          <div className="text-[8px] text-slate-400">Approval chain</div>
          {["Requester", "Manager", "Finance", "Done"].map((s, i) => (
            <div key={s} className="flex items-center gap-1.5">
              <span className={`w-2 h-2 rounded-full ${i < 2 ? "bg-emerald-400" : i === 2 ? "bg-yellow-400 animate-pulse" : "bg-slate-600"}`} />
              <span>{s}</span>
            </div>
          ))}
        </div>
      </div>
    </Frame>
  );
}

function Invoice() {
  const rows = [["Vendor A", "4,210.00", "ok"], ["Vendor B", "918.40", "ok"], ["Vendor C", "12,500.00", "flag"], ["Vendor D", "377.15", "ok"]];
  return (
    <Frame title="finance / invoice-review">
      <div className="grid grid-cols-5 gap-2 h-full">
        <div className="col-span-2 rounded bg-white/90 text-slate-700 p-2 relative overflow-hidden">
          <div className="h-2 w-1/2 bg-slate-300 rounded mb-1.5" />
          <div className="h-1.5 w-3/4 bg-slate-200 rounded mb-1" />
          <div className="h-1.5 w-2/3 bg-slate-200 rounded mb-3" />
          {[0, 1, 2, 3, 4].map((i) => (
            <div key={i} className="flex justify-between mb-1"><div className="h-1.5 w-1/2 bg-slate-200 rounded" /><div className="h-1.5 w-1/5 bg-slate-300 rounded" /></div>
          ))}
          <div className="absolute inset-x-0 h-6 bg-emerald-400/30 border-y border-emerald-500 viz-scan" />
        </div>
        <div className="col-span-3 space-y-1.5">
          <div className="text-[8px] text-slate-400">OCR extracted → GL posting</div>
          {rows.map(([v, amt, s]) => (
            <div key={v} className="flex items-center justify-between rounded bg-white/5 border border-white/10 px-2 py-1">
              <span>{v}</span><span className="text-white">${amt}</span>
              <span className={s === "ok" ? "text-emerald-400" : "text-amber-400"}>{s === "ok" ? "✓ matched" : "! review"}</span>
            </div>
          ))}
          <div className="rounded bg-emerald-500/15 border border-emerald-400/40 px-2 py-1 text-emerald-300">Depreciation run · 312 assets · posted</div>
        </div>
      </div>
    </Frame>
  );
}

function Agents() {
  const agents = ["code-review", "unit-tests", "privacy-guard", "standards", "qa-gate"];
  return (
    <Frame title="pull-request #482 · checks">
      <div className="space-y-1.5">
        {agents.map((a, i) => (
          <div key={a} className="flex items-center gap-2 rounded bg-white/5 border border-white/10 px-2 py-1.5 viz-fade" style={{ animationDelay: `${i * 250}ms` }}>
            <span className="text-emerald-400">✓</span>
            <span className="text-white">{a}</span>
            <span className="ml-auto text-slate-400">{["rules ok", "tests 48/48", "no PII", "hooks pass", "approved"][i]}</span>
          </div>
        ))}
        <div className="rounded border border-emerald-400/50 bg-emerald-500/10 px-2 py-1.5 text-emerald-300">All checks passed → ready for human review</div>
      </div>
    </Frame>
  );
}

function Mcp() {
  const log = [["10:02", "user.a", "reports.read", "allow"], ["10:04", "user.b", "tickets.create", "allow"], ["10:05", "user.c", "finance.write", "deny"], ["10:07", "user.a", "inventory.search", "allow"]];
  return (
    <Frame title="mcp-gateway / audit">
      <div className="grid grid-cols-5 gap-2 h-full">
        <div className="col-span-2 rounded bg-white/5 border border-white/10 p-2 flex flex-col items-center justify-center text-center">
          <div className="w-6 h-6 rounded-full bg-emerald-400/20 border border-emerald-400 mb-1.5" />
          <div className="text-white text-[10px] mb-1">AI assistant requests access</div>
          <div className="text-[8px] text-slate-400 mb-2">reports.read · tickets.create</div>
          <div className="flex gap-1.5"><span className="px-2 py-0.5 rounded bg-emerald-500 text-black">Allow</span><span className="px-2 py-0.5 rounded bg-white/10">Deny</span></div>
        </div>
        <div className="col-span-3 space-y-1">
          <div className="text-[8px] text-slate-400">Activity log</div>
          {log.map(([t, u, s, r]) => (
            <div key={t} className="flex gap-2 rounded bg-white/5 px-2 py-1"><span className="text-slate-500">{t}</span><span>{u}</span><span className="text-white truncate">{s}</span><span className={`ml-auto ${r === "allow" ? "text-emerald-400" : "text-red-400"}`}>{r}</span></div>
          ))}
        </div>
      </div>
    </Frame>
  );
}

function Pipeline() {
  const sources = ["CRM", "Billing", "Ads", "Web", "Support"];
  return (
    <Frame title="warehouse / marketing ROI">
      <div className="grid grid-cols-5 gap-2 h-full">
        <div className="col-span-2 flex flex-col justify-between">
          {sources.map((s, i) => (
            <div key={s} className="flex items-center gap-1">
              <span className="rounded bg-white/5 border border-white/10 px-1.5 py-0.5 w-16 truncate">{s}</span>
              <span className="flex-1 h-px bg-gradient-to-r from-emerald-400/70 to-transparent viz-flow" style={{ animationDelay: `${i * 200}ms` }} />
            </div>
          ))}
        </div>
        <div className="col-span-3 rounded bg-white/5 border border-white/10 p-2 flex flex-col">
          <div className="text-[8px] text-slate-400 mb-1">Spend vs. leads by channel (sample)</div>
          <div className="flex-1 flex items-end gap-2">
            {[[40, 70], [65, 80], [30, 35], [80, 95], [50, 62]].map(([s, l], i) => (
              <div key={i} className="flex-1 flex items-end gap-0.5 h-full">
                <div className="flex-1 bg-sky-400/70 rounded-sm viz-grow" style={{ height: `${s}%` }} />
                <div className="flex-1 bg-emerald-400 rounded-sm viz-grow" style={{ height: `${l}%` }} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Frame>
  );
}

function Voice() {
  return (
    <Frame title="voice-ai / live call">
      <div className="flex items-center gap-0.5 h-8 mb-2">
        {Array.from({ length: 40 }).map((_, i) => (
          <span key={i} className="flex-1 bg-emerald-400/80 rounded-full viz-wave" style={{ animationDelay: `${(i % 10) * 90}ms` }} />
        ))}
      </div>
      <div className="space-y-1.5">
        <div className="rounded bg-white/5 px-2 py-1 w-4/5">Caller: “Can I book an appointment for Thursday?”</div>
        <div className="rounded bg-emerald-500/15 border border-emerald-400/30 px-2 py-1 w-4/5 ml-auto text-emerald-200">AI: “Thursday at 9:30 or 1:00 — which works?”</div>
        <div className="flex gap-1.5 pt-1">
          <span className="px-1.5 py-0.5 rounded bg-sky-500/20 text-sky-300">intent: booking</span>
          <span className="px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300">routed → scheduler</span>
        </div>
      </div>
    </Frame>
  );
}

function Finance() {
  return (
    <Frame title="sancho-finance / overview">
      <div className="grid grid-cols-3 gap-2 mb-2">
        {[["Net worth", "+12.4%"], ["Savings rate", "21%"], ["Debt-free", "Mar 2029"]].map(([k, v]) => (
          <div key={k} className="rounded bg-white/5 border border-white/10 p-2"><div className="text-[8px] text-slate-400">{k}</div><div className="text-white text-sm font-semibold">{v}</div></div>
        ))}
      </div>
      <div className="rounded bg-white/5 border border-white/10 p-2 h-[58%] relative">
        <div className="text-[8px] text-slate-400">18-month forecast (sample data)</div>
        <svg viewBox="0 0 100 40" className="absolute inset-x-2 bottom-2 h-[75%] w-[calc(100%-1rem)]" preserveAspectRatio="none">
          <path d="M0,34 C15,30 25,31 35,25 S55,22 65,15 S85,9 100,4" fill="none" stroke="#34d399" strokeWidth="1.5" className="viz-draw" />
          <path d="M0,34 C15,30 25,31 35,25 S55,22 65,15 S85,9 100,4 L100,40 L0,40 Z" fill="url(#g)" opacity=".35" />
          <defs><linearGradient id="g" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stopColor="#34d399" /><stop offset="1" stopColor="#34d399" stopOpacity="0" /></linearGradient></defs>
        </svg>
      </div>
    </Frame>
  );
}

function Cicd() {
  const steps = ["lint", "typecheck", "tests", "privacy-guard", "build", "deploy"];
  return (
    <Frame title="actions / main">
      <div className="flex items-center gap-1 mb-3">
        {steps.map((s, i) => (
          <div key={s} className="flex items-center gap-1 flex-1">
            <div className="flex-1 rounded border border-emerald-400/50 bg-emerald-500/10 px-1 py-1.5 text-center text-emerald-200 truncate viz-fade" style={{ animationDelay: `${i * 200}ms` }}>✓ {s}</div>
            {i < steps.length - 1 && <span className="text-slate-500">›</span>}
          </div>
        ))}
      </div>
      <div className="space-y-1">
        {["#71 Phone alerts engine", "#69 Transfer panel + import history", "#68 PWA shell served publicly", "#67 Nightly database backup"].map((r) => (
          <div key={r} className="flex items-center gap-2 rounded bg-white/5 px-2 py-1"><span className="text-emerald-400">●</span><span className="text-white truncate">{r}</span><span className="ml-auto text-slate-500">deployed</span></div>
        ))}
      </div>
    </Frame>
  );
}

const map: Record<CaseStudy["visual"], () => React.JSX.Element> = {
  ops: Ops, invoice: Invoice, agents: Agents, mcp: Mcp, pipeline: Pipeline, voice: Voice, finance: Finance, cicd: Cicd,
};

export default function CaseVisual({ kind }: { kind: CaseStudy["visual"] }) {
  const V = map[kind];
  return <V />;
}
