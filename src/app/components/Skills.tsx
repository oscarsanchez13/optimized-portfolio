"use client";

import Image from "next/image";
import { useState } from "react";
import { stack } from "@/data/profile";
import SectionHeading from "./SectionHeading";
import { FiCpu, FiMic, FiFileText, FiLink } from "react-icons/fi";
import { DiJavascript1, DiReact, DiNodejs, DiDocker, DiGit, DiPostgresql } from "react-icons/di";
import {
  SiSupabase, SiClaude, SiTypescript, SiNextdotjs, SiTailwindcss, SiMongodb, SiGraphql, SiKubernetes, SiTerraform, SiAmazon,
  SiGithubactions, SiJenkins, SiHelm, SiPrometheus, SiGrafana, SiExpress, SiHtml5, SiCss3, SiGitlab, SiNetlify, SiFigma,
  SiPostman, SiAuth0, SiVercel,
} from "react-icons/si";

const ic = "h-8 w-8 sm:h-10 sm:w-10";
const skillIcons: Record<string, React.ReactNode> = {
  JavaScript: <DiJavascript1 className={`${ic} text-yellow-500`} />,
  TypeScript: <SiTypescript className={`${ic} text-blue-500`} />,
  React: <DiReact className={`${ic} text-blue-400`} />,
  "Next.js": <SiNextdotjs className={`${ic} text-white`} />,
  "Tailwind CSS": <SiTailwindcss className={`${ic} text-blue-400`} />,
  MongoDB: <SiMongodb className={`${ic} text-green-500`} />,
  "Node.js": <DiNodejs className={`${ic} text-green-600`} />,
  "Express.js": <SiExpress className={`${ic} text-white`} />,
  GraphQL: <SiGraphql className={`${ic} text-pink-500`} />,
  Docker: <DiDocker className={`${ic} text-blue-500`} />,
  Kubernetes: <SiKubernetes className={`${ic} text-blue-500`} />,
  Terraform: <SiTerraform className={`${ic} text-purple-500`} />,
  AWS: <SiAmazon className={`${ic} text-orange-500`} />,
  "GitHub Actions": <SiGithubactions className={`${ic} text-white`} />,
  Jenkins: <SiJenkins className={`${ic} text-red-500`} />,
  Helm: <SiHelm className={`${ic} text-blue-600`} />,
  Prometheus: <SiPrometheus className={`${ic} text-orange-500`} />,
  Grafana: <SiGrafana className={`${ic} text-orange-400`} />,
  Git: <DiGit className={`${ic} text-red-500`} />,
  GitLab: <SiGitlab className={`${ic} text-orange-500`} />,
  PostgreSQL: <DiPostgresql className={`${ic} text-blue-500`} />,
  HTML5: <SiHtml5 className={`${ic} text-orange-500`} />,
  CSS3: <SiCss3 className={`${ic} text-blue-500`} />,
  Netlify: <SiNetlify className={`${ic} text-blue-500`} />,
  Figma: <SiFigma className={`${ic} text-pink-500`} />,
  Postman: <SiPostman className={`${ic} text-orange-500`} />,
  Auth0: <SiAuth0 className={`${ic} text-blue-500`} />,
  Vercel: <SiVercel className={`${ic} text-white`} />,
  Supabase: <SiSupabase className={`${ic} text-emerald-400`} />,
  Claude: <SiClaude className={`${ic} text-orange-300`} />,
  MCP: <FiLink className={`${ic} text-emerald-300`} />,
  Agents: <FiCpu className={`${ic} text-emerald-300`} />,
  OCR: <FiFileText className={`${ic} text-sky-300`} />,
  "Voice AI": <FiMic className={`${ic} text-pink-300`} />,
  "Azure DevOps": <Image src="/icons/azure-devops.png" alt="" width={40} height={40} className={ic} />,
};

const softSkills = ["Executive Leadership", "P&L Ownership", "Process Optimization", "Team Building", "Strategic Planning", "Budgeting & Forecasting", "Go-to-Market", "Agile Delivery", "Decision-Making", "Communication", "Bilingual (English/Spanish)"];

type Category = keyof typeof stack;
const categories = Object.keys(stack) as Category[];

export default function Skills() {
  const [selected, setSelected] = useState<Category>("AI");

  const onKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    const i = categories.indexOf(selected);
    const next = e.key === "ArrowRight" ? i + 1 : e.key === "ArrowLeft" ? i - 1 : null;
    if (next === null) return;
    e.preventDefault();
    const c = categories[(next + categories.length) % categories.length];
    setSelected(c);
    document.getElementById(`tab-${c}`)?.focus();
  };

  return (
    <section id="skills" className="bg-black py-14 text-white md:py-20">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <SectionHeading eyebrow="04 / How I lead" title="Leadership Toolkit" />

        {/* Wrapping grid: every skill visible at once, no hidden sideways scroll */}
        <ul className="reveal grid grid-cols-2 gap-2.5 sm:grid-cols-3 sm:gap-3 lg:grid-cols-4">
          {softSkills.map((skill) => (
            <li
              key={skill}
              className="glass-strong glow-hover flex min-h-[64px] items-center justify-center rounded-xl border border-emerald-400/30 px-3 py-3 text-center text-sm font-semibold leading-snug text-emerald-400 transition-transform duration-300 lg:min-h-[88px] lg:hover:scale-105"
            >
              {skill}
            </li>
          ))}
        </ul>

        <div className="mt-14 md:mt-20">
          <SectionHeading eyebrow="What I build with" title="Technology Stack" />
        </div>

        <div role="tablist" aria-label="Technology categories" className="mx-auto mb-6 grid max-w-2xl grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-3">
          {categories.map((c) => {
            const active = selected === c;
            return (
              <button
                key={c}
                id={`tab-${c}`}
                role="tab"
                type="button"
                aria-selected={active}
                aria-controls="stack-panel"
                tabIndex={active ? 0 : -1}
                onKeyDown={onKeyDown}
                onClick={() => setSelected(c)}
                className={`min-h-[48px] rounded-xl px-3 text-sm font-semibold transition-all duration-300 sm:text-base ${
                  active ? "glass-strong glow-primary border-2 border-emerald-400 text-emerald-400" : "glass border border-emerald-400/30 text-white hover:border-emerald-400/50"
                }`}
              >
                {c}
              </button>
            );
          })}
        </div>

        <ul id="stack-panel" role="tabpanel" aria-labelledby={`tab-${selected}`} className="glass-dark grid grid-cols-3 gap-2.5 rounded-xl border border-emerald-400/20 p-3 sm:grid-cols-4 sm:gap-3 sm:p-5 md:grid-cols-5">
          {stack[selected].map((skill) => (
            <li key={skill} className="glass-strong glow-hover flex aspect-square flex-col items-center justify-center rounded-xl border border-emerald-400/30 p-2 text-center transition-transform duration-300 lg:hover:scale-105">
              <span aria-hidden>{skillIcons[skill] ?? <span className={ic} />}</span>
              <span className="mt-2 text-[11px] font-semibold leading-tight text-white sm:text-sm">{skill}</span>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-center text-sm font-light text-gray-400">* I&apos;m always learning new technologies. If a specific stack isn&apos;t listed here, I can quickly adapt to it.</p>
      </div>
    </section>
  );
}
