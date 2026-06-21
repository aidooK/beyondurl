import type { Metadata } from "next";
import Container from "@/components/Container";
import ServiceCard from "@/components/ServiceCard";
import { CodeIcon, PaletteIcon, LifebuoyIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Services",
  description: "Website design, brand identity, and ongoing support for African small businesses.",
};

const SERVICES = [
  {
    icon: <CodeIcon className="h-6 w-6" />,
    title: "Website Design & Development",
    description:
      "A site built to load fast, look sharp on any phone, and turn visitors into customers — not just a digital business card.",
    features: [
      "Mobile-first design",
      "Mobile money & payment readiness",
      "Clear calls to action that drive enquiries",
      "Built on fast, reliable hosting",
    ],
  },
  {
    icon: <PaletteIcon className="h-6 w-6" />,
    title: "Brand Identity",
    description:
      "A logo, colors, and fonts that feel like you — and a consistent look across your site and social pages.",
    features: [
      "Logo & wordmark",
      "Color palette & typography",
      "Social media-ready brand assets",
      "A consistent look, everywhere customers find you",
    ],
  },
  {
    icon: <LifebuoyIcon className="h-6 w-6" />,
    title: "Ongoing Support & Maintenance",
    description:
      "Updates, fixes, and small changes handled for you, so your site keeps working as your business grows.",
    features: [
      "Regular updates & fixes",
      "Content changes when you need them",
      "Someone to call when something breaks",
      "Monthly retainer options",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="bg-teal text-white">
        <Container className="py-14 sm:py-20">
          <h1 className="max-w-xl font-display text-3xl font-extrabold leading-tight sm:text-5xl">
            What we do
          </h1>
          <p className="mt-4 max-w-lg text-[17px] text-white/80">
            Three ways we help your business show up online and keep showing
            up well.
          </p>
        </Container>
      </section>

      <section className="py-14 sm:py-20">
        <Container>
          <div className="grid gap-6 md:grid-cols-3">
            {SERVICES.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>

          <p className="mt-10 text-center text-[15px] text-charcoal-soft">
            Every business is different, so we quote per project — tell us
            what you need and we&apos;ll give you a clear, honest number.
          </p>
        </Container>
      </section>
    </>
  );
}
