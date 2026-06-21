"use client";

import { useState, type FormEvent } from "react";
import { CONTACT_EMAIL } from "@/lib/sites";

const HELP_OPTIONS = [
  "Website Design & Development",
  "Brand Identity",
  "Ongoing Support & Maintenance",
  "Not sure yet — let's talk",
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [helpType, setHelpType] = useState(HELP_OPTIONS[0]);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const name = String(data.get("name") || "");
    const businessName = String(data.get("businessName") || "");
    const email = String(data.get("email") || "");
    const message = String(data.get("message") || "");

    const subject = `Quote request: ${businessName || name}`;
    const body = [
      `Name: ${name}`,
      `Business: ${businessName}`,
      `Email: ${email}`,
      `Needs help with: ${helpType}`,
      "",
      message || "(no additional details provided)",
    ].join("\n");

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-border bg-white p-8 text-center sm:p-10">
        <h3 className="font-display text-xl font-bold text-charcoal">
          Your email app should be opening now
        </h3>
        <p className="mt-3 text-[15px] leading-relaxed text-charcoal-soft">
          We&apos;ve prefilled a message to {CONTACT_EMAIL} — just hit send.
          If nothing opened, you can email us directly at{" "}
          <a href={`mailto:${CONTACT_EMAIL}`} className="font-semibold text-teal">
            {CONTACT_EMAIL}
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-6 font-display text-sm font-semibold text-teal hover:text-teal-dark"
        >
          ← Back to the form
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
        <Field label="Name" htmlFor="name">
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Ama Mensah"
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
            className={inputStyles}
          />
        </Field>
      </div>

      <div className="mt-5">
        <Field label="Email" htmlFor="email">
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@yourbusiness.com"
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
            className={inputStyles}
          >
            {HELP_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
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
            className={`${inputStyles} resize-none`}
          />
        </Field>
      </div>

      <button
        type="submit"
        className="mt-7 w-full rounded-full bg-amber px-7 py-3.5 font-display text-[15px] font-semibold text-teal-dark transition-colors hover:bg-amber-dark sm:w-auto"
      >
        Send your request
      </button>

      <p className="mt-4 text-[13px] text-charcoal-soft">
        This opens your email app with everything filled in, addressed to{" "}
        {CONTACT_EMAIL}. We typically reply within one business day.
      </p>
    </form>
  );
}

const inputStyles =
  "w-full rounded-xl border border-border bg-bg px-4 py-3 text-[15px] text-charcoal placeholder:text-charcoal-soft/60 outline-none focus:border-teal";

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
