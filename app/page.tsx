import type { Metadata } from "next";
import Container from "@/components/Container";
import CTAButton from "@/components/CTAButton";
import ValuePropCard from "@/components/ValuePropCard";
import CaseStudyCard from "@/components/CaseStudyCard";
import { WalletIcon, MapPinIcon, RefreshIcon, BoltIcon } from "@/components/icons";
import { EXTERNAL_SITES } from "@/lib/sites";

export const metadata: Metadata = {
  title: "Get a website that brings you customers",
};

const VALUE_PROPS = [
  {
    icon: <WalletIcon className="h-5 w-5" />,
    title: "Mobile money ready",
    description:
      "Accept MTN MoMo, Vodafone Cash, and other mobile money options from day one — no awkward workarounds for your customers.",
  },
  {
    icon: <MapPinIcon className="h-5 w-5" />,
    title: "Built for African SMEs",
    description:
      "We design for how your customers actually browse and shop — fast on real connections, clear on small screens.",
  },
  {
    icon: <RefreshIcon className="h-5 w-5" />,
    title: "Support that doesn't stop at launch",
    description:
      "We don't disappear once your site goes live. Updates, fixes, and small improvements are part of how we work.",
  },
  {
    icon: <BoltIcon className="h-5 w-5" />,
    title: "Fast turnaround",
    description:
      "Most projects go from kickoff to live site in a matter of weeks — so you can start turning visitors into customers sooner.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-teal text-white">
        <svg
          aria-hidden="true"
          viewBox="0 0 600 600"
          className="pointer-events-none absolute -right-24 -top-24 hidden h-[600px] w-[600px] text-white/[0.06] lg:block"
        >
          <path
            d="M120 480 480 120"
            stroke="currentColor"
            strokeWidth="40"
            strokeLinecap="round"
          />
          <path
            d="M220 120h260v260"
            fill="none"
            stroke="currentColor"
            strokeWidth="40"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <Container className="relative flex flex-col items-start gap-7 py-16 sm:py-24">
          <h1 className="max-w-xl font-display text-[2.25rem] font-extrabold leading-[1.12] tracking-tight sm:text-5xl">
            Get a website that brings you customers
          </h1>
          <p className="max-w-md text-[17px] leading-relaxed text-white/80 sm:text-lg">
            We build websites and brand presence for African small businesses
            — built to convert, not just look good.
          </p>
          <CTAButton href="/contact">Get a Quote</CTAButton>
        </Container>
      </section>

      {/* Value props */}
      <section className="py-16 sm:py-24">
        <Container>
          <h2 className="max-w-md font-display text-2xl font-bold text-charcoal sm:text-3xl">
            Why African small businesses work with us
          </h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {VALUE_PROPS.map((prop) => (
              <ValuePropCard key={prop.title} {...prop} />
            ))}
          </div>
        </Container>
      </section>

      {/* Case studies */}
      <section className="bg-teal-tint py-16 sm:py-24">
        <Container>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="font-display text-2xl font-bold text-charcoal sm:text-3xl">
                See it in action
              </h2>
              <p className="mt-2 max-w-md text-[15px] text-charcoal-soft">
                A couple of the sites we&apos;ve built and still support.
              </p>
            </div>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <CaseStudyCard
              href={EXTERNAL_SITES.futureFinder}
              eyebrow="Media & Youth"
              title="FutureFinder"
              description="A blog connecting African youth to jobs, scholarships, study abroad programs, and entrepreneurship resources."
            />
            <CaseStudyCard
              href={EXTERNAL_SITES.speGhana}
              eyebrow="Professional Body"
              title="SPE Ghana Chapter"
              description="A professional home for the Society of Petroleum Engineers' Ghana Section — built for members, events, and sponsors."
            />
          </div>
        </Container>
      </section>

      {/* Closing CTA */}
      <section className="bg-teal text-white">
        <Container className="flex flex-col items-start gap-6 py-16 sm:items-center sm:text-center sm:py-20">
          <h2 className="max-w-lg font-display text-2xl font-bold sm:text-3xl">
            Ready for a website that actually works for your business?
          </h2>
          <p className="max-w-md text-white/75">
            Tell us a bit about your business. We&apos;ll get back to you within
            a day with next steps.
          </p>
          <CTAButton href="/contact">Get a Quote</CTAButton>
        </Container>
      </section>
    </>
  );
}
