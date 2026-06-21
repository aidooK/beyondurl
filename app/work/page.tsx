import type { Metadata } from "next";
import Container from "@/components/Container";
import CTAButton from "@/components/CTAButton";
import CaseStudyDetail from "@/components/CaseStudyDetail";
import { EXTERNAL_SITES } from "@/lib/sites";

export const metadata: Metadata = {
  title: "Work",
  description: "Websites and brand presence we've built for African businesses and organizations.",
};

export default function WorkPage() {
  return (
    <>
      <section className="bg-teal text-white">
        <Container className="py-14 sm:py-20">
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
        <Container className="flex flex-col gap-8">
          <CaseStudyDetail
            eyebrow="Media & Youth"
            title="FutureFinder"
            href={EXTERNAL_SITES.futureFinder}
            problem="Opportunities for African youth — scholarships, jobs, study abroad programs, entrepreneurship support — exist, but they're scattered across pages, group chats, and word of mouth. Without one trustworthy place to look, good opportunities get missed."
            whatWasBuilt="A blog-style platform that organizes opportunities by category: jobs, scholarships, study abroad, entrepreneurship, and growth mindset content. It's built to be quick to browse on a phone and just as quick to update with new listings."
            outcome="FutureFinder now runs as an ongoing publication rather than a one-off project — a steady, organized home for opportunities that readers come back to and share with others."
          />

          <CaseStudyDetail
            eyebrow="Professional Body"
            title="SPE Ghana Chapter"
            href={EXTERNAL_SITES.speGhana}
            problem="As one of the larger sections in its global network, the SPE Ghana Section needed a web presence that could represent the chapter properly to members, sponsors, and partners — not a static page nobody keeps up."
            whatWasBuilt="A chapter website covering membership, events, and chapter activity, giving SPE Ghana Section a professional home base that reflects the scale of the community it serves."
            outcome="The chapter now has a site sponsors and partners can be pointed to with confidence, and a foundation it can keep building on as programs and membership grow."
          />
        </Container>
      </section>

      <section className="bg-teal-tint">
        <Container className="flex flex-col items-start gap-5 py-14 sm:items-center sm:text-center sm:py-16">
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
