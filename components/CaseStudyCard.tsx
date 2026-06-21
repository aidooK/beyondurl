export default function CaseStudyCard({
  href,
  eyebrow,
  title,
  description,
}: {
  href: string;
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block overflow-visible rounded-2xl border border-border bg-white p-6 transition-colors duration-150 hover:border-teal sm:p-8"
    >
      {/* Signature mark: arrow badge breaking past the card's own edge */}
      <span
        aria-hidden="true"
        className="absolute -right-3 -top-3 flex h-11 w-11 items-center justify-center rounded-full bg-amber text-teal-dark shadow-sm transition-transform duration-200 ease-out group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:rotate-3"
      >
        <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
          <path d="M7 17 17 7" stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
          <path d="M9 7h8v8" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>

      <p className="font-display text-xs font-bold uppercase tracking-wider text-amber-dark">
        {eyebrow}
      </p>
      <h3 className="mt-2 font-display text-2xl font-bold text-charcoal">
        {title}
      </h3>
      <p className="mt-3 max-w-md text-[15px] leading-relaxed text-charcoal-soft">
        {description}
      </p>
      <span className="mt-5 inline-block font-display text-sm font-semibold text-teal">
        Visit site
      </span>
    </a>
  );
}
