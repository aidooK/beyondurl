import Image from "next/image";

export default function CaseStudyCard({
  href,
  eyebrow,
  title,
  description,
  screenshot,
  screenshotType = "img",
}: {
  href: string;
  eyebrow: string;
  title: string;
  description: string;
  screenshot: string;
  screenshotType?: "img" | "svg";
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block overflow-visible rounded-2xl border border-border bg-white transition-shadow duration-200 hover:shadow-lg hover:border-teal"
    >
      {/* Arrow badge — breaks past card edge on hover */}
      <span
        aria-hidden="true"
        className="absolute -right-3 -top-3 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-amber text-teal-dark shadow-sm transition-transform duration-200 ease-out group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:rotate-3"
      >
        <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
          <path d="M7 17 17 7" stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
          <path d="M9 7h8v8" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>

      {/* Browser chrome mockup */}
      <div className="overflow-hidden rounded-t-2xl border-b border-border bg-[#f1f1f1]">
        {/* Browser top bar */}
        <div className="flex items-center gap-2 px-3 py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
          <div className="mx-2 flex h-5 flex-1 items-center rounded bg-white px-2">
            <span className="truncate font-mono text-[10px] text-charcoal-soft/70">
              {href.replace("https://", "").replace("http://", "")}
            </span>
          </div>
        </div>
        {/* Screenshot */}
        <div className="relative h-44 w-full overflow-hidden bg-[#1a1a1a]">
          {screenshotType === "svg" ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={screenshot}
              alt={`${title} website screenshot`}
              className="h-full w-full object-cover object-top"
            />
          ) : (
            <Image
              src={screenshot}
              alt={`${title} website screenshot`}
              fill
              className="object-cover object-top"
              sizes="(max-width: 640px) 100vw, 50vw"
            />
          )}
        </div>
      </div>

      {/* Card body */}
      <div className="p-6">
        <p className="font-display text-xs font-bold uppercase tracking-wider text-amber-dark">
          {eyebrow}
        </p>
        <h3 className="mt-2 font-display text-xl font-bold text-charcoal">
          {title}
        </h3>
        <p className="mt-2 text-[15px] leading-relaxed text-charcoal-soft">
          {description}
        </p>
        <span className="mt-4 inline-flex items-center gap-1 font-display text-sm font-semibold text-teal">
          Visit site
          <svg viewBox="0 0 16 16" fill="none" className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
            <path d="M4 12 12 4" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round"/>
            <path d="M6 4h6v6" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      </div>
    </a>
  );
}
