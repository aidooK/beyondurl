import type { Metadata } from "next";
import Container from "@/components/Container";
import CTAButton from "@/components/CTAButton";

export const metadata: Metadata = {
  title: "About",
  description: "The story behind BeyondURL, and the person building it.",
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-teal text-white">
        <Container className="py-14 sm:py-20">
          <h1 className="max-w-xl font-display text-3xl font-extrabold leading-tight sm:text-5xl">
            Why BeyondURL exists
          </h1>
        </Container>
      </section>

      <section className="py-14 sm:py-20">
        <Container className="grid gap-10 sm:grid-cols-[1fr] lg:grid-cols-[2fr_1fr]">
          <div className="flex flex-col gap-6 text-[17px] leading-relaxed text-charcoal-soft">
            <p>
              I&apos;m Kobie, the person behind BeyondURL. By day, I work as
              an engineer in the UAE. In the hours around that, I build
              websites for African small businesses — because I kept seeing
              good businesses held back by sites that didn&apos;t do them
              justice, or no website at all.
            </p>
            <p>
              I&apos;m Ghanaian, and a lot of what I build comes from paying
              attention to how people back home actually use the internet —
              mostly on a phone, often on mobile money, rarely with patience
              for a slow site. That&apos;s shaped how BeyondURL works: plain
              language, fast pages, and a site that&apos;s built to bring in
              customers, not just sit there looking nice.
            </p>
            <p>
              I also mentor young entrepreneurs through JLMCF, a program run
              out of Queen&apos;s University in Canada, helping students
              turn early-stage ideas into real plans. That same hands-on,
              get-it-built approach is what I bring to every BeyondURL
              project — clear thinking, honest advice, and a site that
              actually works for your business once it&apos;s live.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <div className="rounded-2xl border border-border bg-white p-7">
              <p className="font-display text-lg font-bold text-teal">
                &ldquo;Your brand. Beyond the website.&rdquo;
              </p>
              <p className="mt-3 text-[15px] leading-relaxed text-charcoal-soft">
                A website is the start, not the finish. We build the site —
                and stick around to help it keep working for you.
              </p>
            </div>
            <CTAButton href="/contact" className="!bg-teal !text-white hover:!bg-teal-dark justify-center">
              Get a Quote
            </CTAButton>
          </div>
        </Container>
      </section>
    </>
  );
}
