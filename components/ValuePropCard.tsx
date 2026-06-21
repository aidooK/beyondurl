import type { ReactNode } from "react";

export default function ValuePropCard({
  icon,
  title,
  description,
}: {
  icon: ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl border border-border bg-white p-6 sm:p-7">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-tint text-teal">
        {icon}
      </div>
      <h3 className="mt-5 font-display text-lg font-bold text-charcoal">
        {title}
      </h3>
      <p className="mt-2 text-[15px] leading-relaxed text-charcoal-soft">
        {description}
      </p>
    </div>
  );
}
