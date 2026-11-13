"use client";

import Link from "next/link";
import { useState } from "react";
import { LinkProps, navlinks } from "./nav-links.types";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <nav
        aria-label="Main navigation"
        className="hidden items-center gap-7 md:flex"
      >
        {navlinks.map((link: LinkProps) => (
          <Link
            key={link.label}
            href={link.href}
            className="text-[13px] text-secondary transition-colors hover:text-foreground"
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <button
        type="button"
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
        aria-controls="mobile-navigation"
        onClick={() => setMenuOpen((isOpen) => !isOpen)}
        className="relative z-30 flex h-10 w-10 items-center justify-center text-foreground md:hidden"
      >
        {menuOpen ? (
          <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5">
            <path
              d="m6 6 12 12M18 6 6 18"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth="1.5"
            />
          </svg>
        ) : (
          <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5">
            <path
              d="M3 7h18M3 12h18M3 17h18"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth="1.5"
            />
          </svg>
        )}
      </button>

      {menuOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="fixed inset-0 z-20 flex flex-col items-center justify-center gap-7 bg-background text-foreground md:hidden"
        >
          {navlinks.map((link: LinkProps) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={closeMenu}
              className="text-xl font-semibold"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#login"
            onClick={closeMenu}
            className="pt-2 text-secondary"
          >
            Log in
          </Link>
          <Link
            href="#courses"
            onClick={closeMenu}
            className="rounded-lg bg-primary px-8 py-3 font-semibold text-white"
          >
            Start learning
          </Link>
        </nav>
      )}
    </>
  );
}
