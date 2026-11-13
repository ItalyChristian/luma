import Link from "next/link";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <header className="relative z-10 border-b border-border bg-background">
      <div className="mx-auto flex h-15 w-full max-w-252.5 items-center justify-between px-4 md:px-0">
        <Link
          href="/"
          aria-label="Luma home"
          className="text-[20px] font-bold tracking-[-1.2px] text-foreground"
        >
          luma.
        </Link>

        <Navbar />

        <div className="hidden items-center gap-6 text-[13px] md:flex">
          <Link
            href="#login"
            className="text-secondary transition-colors hover:text-foreground"
          >
            Log in
          </Link>
          <Link
            href="#courses"
            className="rounded-lg bg-primary px-4.5 py-2.75 font-semibold text-white transition-colors hover:bg-primary-hover"
          >
            Start learning
          </Link>
        </div>
      </div>
    </header>
  );
}
