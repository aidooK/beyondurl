"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Container from "./Container";
import { MenuIcon, CloseIcon } from "./icons";
import CTAButton from "./CTAButton";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const close = () => setOpen(false);

  // Lock background scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/90 backdrop-blur-sm">
      <Container className="flex h-[72px] items-center justify-between">
        <Link
          href="/"
          className="font-display text-xl font-extrabold tracking-tight text-charcoal"
        >
          Beyond<span className="text-amber">URL</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-9 md:flex">
          {NAV_LINKS.slice(1, -1).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-display text-[15px] font-medium transition-colors hover:text-teal ${
                pathname === link.href
                  ? "text-teal"
                  : "text-charcoal-soft"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <CTAButton
            href="/contact"
            className="!bg-teal !text-white hover:!bg-teal-dark !px-6 !py-2.5 !text-sm"
          >
            Get a Quote
          </CTAButton>
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className="-mr-2 flex h-11 w-11 items-center justify-center text-charcoal md:hidden"
        >
          {open ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
        </button>
      </Container>

      {/* Mobile menu panel */}
      <div
        className={`md:hidden ${open ? "block" : "hidden"} border-t border-border bg-bg`}
      >
        <Container className="flex flex-col gap-1 py-4">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={close}
              className={`rounded-lg px-3 py-3 font-display text-[17px] font-medium ${
                pathname === link.href
                  ? "bg-teal-tint text-teal"
                  : "text-charcoal"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <CTAButton
            href="/contact"
            className="!bg-teal !text-white mt-2 justify-center"
            onClick={close}
          >
            Get a Quote
          </CTAButton>
        </Container>
      </div>
    </header>
  );
}
