import type { ReactNode } from "react";
import CTAButton from "./CTAButton";

export default function ServiceCard({
  icon,
  title,
  description,
  features,
}: {
  icon: ReactNode;
  title: string;
  description: string;
  features: string[];
}) {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-border bg-white p-7 sm:p-8">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-tint text-teal">
        {icon}
      </div>
      <h3 className="mt-6 font-display text-xl font-bold text-charcoal">
        {title}
      </h3>
      <p className="mt-3 text-[15px] leading-relaxed text-charcoal-soft">
        {description}
      </p>

      <ul className="mt-5 flex flex-1 flex-col gap-2.5">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5 text-[14px] text-charcoal-soft">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber" />
            {feature}
          </li>
        ))}
      </ul>

      <CTAButton
        href="/contact"
        className="!bg-teal !text-white hover:!bg-teal-dark mt-7 w-full"
      >
        Get a Quote
      </CTAButton>
    </div>
  );
}
