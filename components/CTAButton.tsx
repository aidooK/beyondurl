import Link from "next/link";
import type { ReactNode } from "react";

export default function CTAButton({
  href,
  children,
  variant = "primary",
  className = "",
  onClick,
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  onClick?: () => void;
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 font-display font-semibold text-[15px] transition-colors duration-150";

  const styles =
    variant === "primary"
      ? "bg-amber text-teal-dark hover:bg-amber-dark"
      : "bg-transparent text-white border border-white/40 hover:bg-white/10";

  return (
    <Link href={href} onClick={onClick} className={`${base} ${styles} ${className}`}>
      {children}
    </Link>
  );
}
