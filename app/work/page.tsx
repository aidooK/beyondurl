import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/Container";
import CTAButton from "@/components/CTAButton";
import ArrowLink from "@/components/ArrowLink";
import { EXTERNAL_SITES } from "@/lib/sites";

export const metadata: Metadata = {
  title: "Work",
  description: "Websites and brand presence we've built for African businesses and organizations.",
};

function CaseStudy({
  eyebrow,
  title,
  href,
  screenshot,
  screenshotType,
  problem,
  whatWasBuilt,
  outcome,
}: {
  eyebrow: string;
  title: string;
  href: string;
  screenshot: string;
  screenshotType: "img" | "svg";
  problem: string;
  whatWasBuilt: string;
  outcome: string;
}) {
  return (
    <article className="overflow-hidden rounded-3xl border border-border bg-white">
      {/* Browser chrome + screenshot */}
      <div className="border-b border-border bg-[#f1f1f1]">
        <div className="flex items-center gap-2 px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
          <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
          <span className="h-3 w-3 rounded-full bg-[#28c840]" />
          <div className="mx-2 flex h-6 flex-1 items-center rounded bg-white px-3">
            <span className="font-mono text-xs text-charcoal-soft/70">
              {href.replace("https://", "").replace("http://", "")}
            </span>
          </div>
        </div>
        <div className="relative h-64 w-full overflow-hidden sm:h-80">
          {screenshotType === "svg" ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={screenshot}
              alt={`${title} website`}
              className="h-full w-full object-cover object-top"
            />
          ) : (
            <Image
              src={screenshot}
              alt={`${title} website`}
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 800px"
              priority
            />
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 sm:p-10">
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
      </div>
    </article>
  );
}

export default function WorkPage() {
  return (
    <>
      <section className="bg-teal text-white">
        <Container className="py-16 sm:py-24">
          <h1 className="max-w-xl font-display text-3xl font-extrabold leading-tight sm:text-5xl">
            Work we&apos;re proud of
          </h1>
          <p className="mt-4 max-w-lg text-[17px] text-white/80">
            A look at what we&apos;ve built, why it was needed, and what it
            does for the people behind it.
          </p>
        </Container>
      </section>

      <section className="py-14 sm:py-20">
        <Container className="flex flex-col gap-10">
          <CaseStudy
            eyebrow="Media & Youth"
            title="FutureFinder"
            href={EXTERNAL_SITES.futureFinder}
            screenshot="/screenshots/futurefinder.svg"
            screenshotType="svg"
            problem="Opportunities for African youth — scholarships, jobs, study abroad programs, entrepreneurship support — exist, but they're scattered across pages, group chats, and word of mouth. Without one trustworthy place to look, good opportunities get missed."
            whatWasBuilt="A blog-style platform that organizes opportunities by category: jobs, scholarships, study abroad, entrepreneurship, and growth mindset content. It's built to be quick to browse on a phone and just as quick to update with new listings."
            outcome="FutureFinder now runs as an ongoing publication rather than a one-off project — a steady, organized home for opportunities that readers come back to and share with others."
          />

          <CaseStudy
            eyebrow="Professional Body"
            title="SPE Ghana Chapter"
            href={EXTERNAL_SITES.speGhana}
            screenshot="/screenshots/spe-ghana.jpg"
            screenshotType="img"
            problem="As one of the larger sections in its global network, the SPE Ghana Section needed a web presence that could represent the chapter properly to members, sponsors, and partners — not a static page nobody keeps up."
            whatWasBuilt="A chapter website covering membership, events, and chapter activity, giving SPE Ghana Section a professional home base that reflects the scale of the community it serves."
            outcome="The chapter now has a site sponsors and partners can be pointed to with confidence, and a foundation it can keep building on as programs and membership grow."
          />
        </Container>
      </section>

      <section className="bg-teal-tint">
        <Container className="flex flex-col items-start gap-5 py-14 sm:items-center sm:py-20 sm:text-center">
          <h2 className="font-display text-2xl font-bold text-charcoal sm:text-3xl">
            Want a site like this for your business?
          </h2>
          <CTAButton href="/contact" className="!bg-teal !text-white hover:!bg-teal-dark">
            Get a Quote
          </CTAButton>
        </Container>
      </section>
    </>
  );
}
