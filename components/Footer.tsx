import Link from "next/link";
import Container from "./Container";
import { CONTACT_EMAIL } from "@/lib/sites";

export default function Footer() {
  return (
    <footer className="bg-teal-dark text-white">
      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <span className="font-display text-xl font-extrabold tracking-tight">
              Beyond<span className="text-amber">URL</span>
            </span>
            <p className="mt-3 max-w-xs text-[15px] leading-relaxed text-white/70">
              Your brand. Beyond the website.
            </p>
          </div>

          <div>
            <p className="font-display text-sm font-semibold uppercase tracking-wide text-white/50">
              Site
            </p>
            <nav className="mt-4 flex flex-col gap-2.5 text-[15px] text-white/80">
              <Link href="/work" className="hover:text-amber">Work</Link>
              <Link href="/services" className="hover:text-amber">Services</Link>
              <Link href="/about" className="hover:text-amber">About</Link>
              <Link href="/contact" className="hover:text-amber">Contact</Link>
            </nav>
          </div>

          <div>
            <p className="font-display text-sm font-semibold uppercase tracking-wide text-white/50">
              Get in touch
            </p>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="mt-4 inline-block text-[15px] text-white/80 hover:text-amber"
            >
              {CONTACT_EMAIL}
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col-reverse gap-3 border-t border-white/10 pt-6 text-sm text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} BeyondURL. All rights reserved.</p>
          <p>Built in Ghana &amp; the UAE, for African small businesses.</p>
        </div>
      </Container>
    </footer>
  );
}
