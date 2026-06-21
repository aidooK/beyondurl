import ArrowLink from "./ArrowLink";

export default function CaseStudyDetail({
  eyebrow,
  title,
  href,
  problem,
  whatWasBuilt,
  outcome,
}: {
  eyebrow: string;
  title: string;
  href: string;
  problem: string;
  whatWasBuilt: string;
  outcome: string;
}) {
  return (
    <article className="rounded-3xl border border-border bg-white p-6 sm:p-10">
      <p className="font-display text-xs font-bold uppercase tracking-wider text-amber-dark">
        {eyebrow}
      </p>
      <h2 className="mt-2 font-display text-3xl font-extrabold text-charcoal sm:text-4xl">
        {title}
      </h2>

      <div className="mt-8 grid gap-8 sm:grid-cols-3">
        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-wide text-teal">
            The problem
          </h3>
          <p className="mt-2.5 text-[15px] leading-relaxed text-charcoal-soft">
            {problem}
          </p>
        </div>
        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-wide text-teal">
            What we built
          </h3>
          <p className="mt-2.5 text-[15px] leading-relaxed text-charcoal-soft">
            {whatWasBuilt}
          </p>
        </div>
        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-wide text-teal">
            The outcome
          </h3>
          <p className="mt-2.5 text-[15px] leading-relaxed text-charcoal-soft">
            {outcome}
          </p>
        </div>
      </div>

      <div className="mt-9 border-t border-border pt-6">
        <ArrowLink href={href}>Visit the live site</ArrowLink>
      </div>
    </article>
  );
}
