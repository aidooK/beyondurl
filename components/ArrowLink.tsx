import { ArrowUpRight } from "./icons";

export default function ArrowLink({
  href,
  children,
  external = true,
  tone = "teal",
}: {
  href: string;
  children: React.ReactNode;
  external?: boolean;
  tone?: "teal" | "white";
}) {
  const color = tone === "white" ? "text-white" : "text-teal";

  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={`group inline-flex items-center gap-1.5 font-display font-semibold ${color}`}
    >
      <span className="border-b border-current/0 group-hover:border-current/100 transition-colors">
        {children}
      </span>
      <span className="relative inline-flex h-5 w-5 items-center justify-center overflow-visible">
        <ArrowUpRight
          className="h-4 w-4 transition-transform duration-200 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          strokeWidth={2}
        />
      </span>
    </a>
  );
}
