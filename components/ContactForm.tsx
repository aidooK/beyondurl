"use client";

import { useState, type FormEvent } from "react";

const HELP_OPTIONS = [
  "Website Design & Development",
  "Brand Identity",
  "Ongoing Support & Maintenance",
  "Not sure yet — let's talk",
];

type FormState = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [helpType, setHelpType] = useState(HELP_OPTIONS[0]);
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("submitting");

    const form = e.currentTarget;
    const data = new FormData(form);

    // Web3Forms endpoint — free, routes to hello@beyondurl.com
    // Access key is injected at build time via NEXT_PUBLIC_WEB3FORMS_KEY env var
    const payload = {
      access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "YOUR_WEB3FORMS_KEY",
      subject: `Quote request from ${data.get("businessName") || data.get("name")} — BeyondURL`,
      from_name: String(data.get("name") || ""),
      email: String(data.get("email") || ""),
      message: [
        `Business: ${data.get("businessName") || "—"}`,
        `Needs help with: ${helpType}`,
        ``,
        String(data.get("message") || "(no additional details)"),
      ].join("\n"),
    };

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json();
      if (json.success) {
        setState("success");
      } else {
        throw new Error(json.message || "Submission failed");
      }
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong");
      setState("error");
    }
  }

  if (state === "success") {
    return (
      <div className="rounded-2xl border border-border bg-white p-8 sm:p-10 text-center">
        <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-teal-tint">
          <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7 text-teal">
            <path d="M5 12l5 5L20 7" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <h3 className="font-display text-xl font-bold text-charcoal">Message received!</h3>
        <p className="mt-2 text-[15px] text-charcoal-soft">
          Thanks for reaching out. We&apos;ll reply to you within one business day.
        </p>
        <button
          type="button"
          onClick={() => setState("idle")}
          className="mt-6 font-display text-sm font-semibold text-teal hover:text-teal-dark"
        >
          ← Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-border bg-white p-6 sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Your name" htmlFor="name">
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Ama Mensah"
            disabled={state === "submitting"}
            className={inputStyles}
          />
        </Field>

        <Field label="Business name" htmlFor="businessName">
          <input
            id="businessName"
            name="businessName"
            type="text"
            required
            placeholder="Mensah's Bakery"
            disabled={state === "submitting"}
            className={inputStyles}
          />
        </Field>
      </div>

      <div className="mt-5">
        <Field label="Email address" htmlFor="email">
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@yourbusiness.com"
            disabled={state === "submitting"}
            className={inputStyles}
          />
        </Field>
      </div>

      <div className="mt-5">
        <Field label="What do you need help with?" htmlFor="helpType">
          <select
            id="helpType"
            name="helpType"
            value={helpType}
            onChange={(e) => setHelpType(e.target.value)}
            disabled={state === "submitting"}
            className={inputStyles}
          >
            {HELP_OPTIONS.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </Field>
      </div>

      <div className="mt-5">
        <Field label="Tell us a bit more (optional)" htmlFor="message">
          <textarea
            id="message"
            name="message"
            rows={4}
            placeholder="What's your business, and what would you like your website to do for you?"
            disabled={state === "submitting"}
            className={`${inputStyles} resize-none`}
          />
        </Field>
      </div>

      {state === "error" && (
        <p className="mt-4 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">
          {errorMsg || "Something went wrong — please try again or email us directly at hello@beyondurl.com"}
        </p>
      )}

      <button
        type="submit"
        disabled={state === "submitting"}
        className="mt-7 w-full rounded-full bg-amber px-7 py-3.5 font-display text-[15px] font-semibold text-teal-dark transition-colors hover:bg-amber-dark disabled:opacity-60 sm:w-auto"
      >
        {state === "submitting" ? "Sending…" : "Send your request"}
      </button>

      <p className="mt-4 text-[13px] text-charcoal-soft">
        We reply within one business day. No spam, ever.
      </p>
    </form>
  );
}

const inputStyles =
  "w-full rounded-xl border border-border bg-bg px-4 py-3 text-[15px] text-charcoal placeholder:text-charcoal-soft/60 outline-none focus:border-teal disabled:opacity-60";

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <label htmlFor={htmlFor} className="block">
      <span className="mb-1.5 block font-display text-sm font-semibold text-charcoal">
        {label}
      </span>
      {children}
    </label>
  );
}
