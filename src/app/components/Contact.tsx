"use client";
import { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import emailjs from "@emailjs/browser";
import { site } from "@/data/profile";
import SectionHeading from "./SectionHeading";

type Field = "name" | "email" | "message";
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const validate = (d: Record<Field, string>) => ({
  name: d.name.trim() ? "" : "Please add your name.",
  email: !d.email.trim() ? "Please add your email." : EMAIL_RE.test(d.email.trim()) ? "" : "That email doesn't look right.",
  message: d.message.trim() ? "" : "Please write a short message.",
});

export default function Contact() {
  const [form, setForm] = useState<Record<Field, string>>({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<Field, string>>({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "failed">("idle");

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const name = e.target.name as Field;
    setForm((f) => ({ ...f, [name]: e.target.value }));
    if (errors[name]) setErrors((x) => ({ ...x, [name]: "" }));
    if (status === "sent" || status === "failed") setStatus("idle");
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const next = validate(form);
    setErrors(next);
    const firstBad = (Object.keys(next) as Field[]).find((k) => next[k]);
    if (firstBad) {
      e.currentTarget.querySelector<HTMLElement>(`[name="${firstBad}"]`)?.focus();
      return;
    }
    setStatus("sending");
    try {
      await emailjs.send("service_tjg8kj9", "template_mmvgltk", { name: form.name, email: form.email, message: form.message }, "NNcoiA40YeKx-ne1e");
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("failed");
    }
  };

  // 16px text on inputs stops iOS Safari from zooming in on focus.
  const input = (bad: boolean) =>
    `block w-full rounded-lg border bg-gray-800/80 px-4 py-3 text-base text-white placeholder:text-slate-500 focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/60 ${bad ? "border-red-500" : "border-gray-600"}`;

  const socials = [
    { href: site.links.linkedin, label: "LinkedIn", icon: <FaLinkedin />, external: true },
    { href: site.links.github, label: "GitHub", icon: <FaGithub />, external: true },
    { href: `mailto:${site.email}`, label: "Email", icon: <FaEnvelope />, external: false },
  ];

  return (
    <section id="contact" className="bg-gray-900 py-14 text-white md:py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-12">
        <SectionHeading eyebrow="06 / Contact" title="Let's Connect!" />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10">
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <p className="mb-6 text-base leading-relaxed text-gray-300 md:text-lg">
              Feel free to reach out! Whether you have a question or just want to say hi, I&apos;ll do my best to get back to you.
            </p>
            <ul className="grid w-full grid-cols-3 gap-3 sm:w-auto sm:flex">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    {...(s.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="glass-strong glow-hover flex min-h-[56px] flex-col items-center justify-center gap-1 rounded-xl border border-emerald-400/50 px-4 py-3 text-2xl text-emerald-400 transition-all duration-300 hover:border-emerald-400 sm:min-w-[64px]"
                  >
                    <span aria-hidden>{s.icon}</span>
                    <span className="text-xs font-semibold text-white sm:sr-only">{s.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="glass-strong rounded-xl border border-emerald-400/30 p-5 shadow-xl sm:p-8">
            <form onSubmit={onSubmit} noValidate className="space-y-4">
              <div>
                <label htmlFor="c-name" className="mb-1.5 block text-sm font-medium text-slate-300">Name</label>
                <input id="c-name" name="name" type="text" autoComplete="name" autoCapitalize="words" enterKeyHint="next" value={form.name} onChange={onChange} aria-invalid={!!errors.name} aria-describedby={errors.name ? "c-name-err" : undefined} className={input(!!errors.name)} placeholder="Your name" />
                {errors.name && <p id="c-name-err" className="mt-1 text-sm text-red-400">{errors.name}</p>}
              </div>
              <div>
                <label htmlFor="c-email" className="mb-1.5 block text-sm font-medium text-slate-300">Email</label>
                <input id="c-email" name="email" type="email" inputMode="email" autoComplete="email" autoCapitalize="off" autoCorrect="off" spellCheck={false} enterKeyHint="next" value={form.email} onChange={onChange} aria-invalid={!!errors.email} aria-describedby={errors.email ? "c-email-err" : undefined} className={input(!!errors.email)} placeholder="you@company.com" />
                {errors.email && <p id="c-email-err" className="mt-1 text-sm text-red-400">{errors.email}</p>}
              </div>
              <div>
                <label htmlFor="c-message" className="mb-1.5 block text-sm font-medium text-slate-300">Message</label>
                <textarea id="c-message" name="message" rows={5} autoComplete="off" enterKeyHint="send" value={form.message} onChange={onChange} aria-invalid={!!errors.message} aria-describedby={errors.message ? "c-message-err" : undefined} className={`${input(!!errors.message)} resize-y`} placeholder="What can I help with?" />
                {errors.message && <p id="c-message-err" className="mt-1 text-sm text-red-400">{errors.message}</p>}
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="flex min-h-[52px] w-full items-center justify-center gap-2 rounded-xl bg-emerald-500 px-4 font-bold text-black transition-colors hover:bg-emerald-400 disabled:opacity-60"
              >
                {status === "sending" ? "Sending…" : <>Send Message <FiSend aria-hidden /></>}
              </button>

              <p role="status" aria-live="polite" className="min-h-[1.25rem] text-center text-sm">
                {status === "sent" && <span className="text-emerald-400">Your message has been sent. Thank you!</span>}
                {status === "failed" && <span className="text-red-400">Something went wrong sending that. Please email me directly.</span>}
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
