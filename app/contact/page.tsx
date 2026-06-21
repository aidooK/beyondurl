import type { Metadata } from "next";
import Container from "@/components/Container";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get a quote for your website or brand identity project.",
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-teal text-white">
        <Container className="py-14 sm:py-20">
          <h1 className="max-w-xl font-display text-3xl font-extrabold leading-tight sm:text-5xl">
            Let&apos;s get you a quote
          </h1>
          <p className="mt-4 max-w-lg text-[17px] text-white/80">
            Tell us about your business and what you need. No jargon, no
            pressure — just a clear next step.
          </p>
        </Container>
      </section>

      <section className="py-14 sm:py-20">
        <Container className="max-w-2xl">
          <ContactForm />
        </Container>
      </section>
    </>
  );
}
