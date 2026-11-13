import Link from "next/link";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <header className="relative z-10 border-b border-[#e4e6ed] bg-[#faf9f5]">
      <div className="mx-auto flex h-[60px] w-full max-w-[1010px] items-center justify-between px-4 md:px-0">
        <Link
          href="/"
          aria-label="Luma home"
          className="text-[20px] font-bold tracking-[-1.2px] text-[#191d2d]"
        >
          luma.
        </Link>

        <Navbar />

        <div className="hidden items-center gap-6 text-[13px] md:flex">
          <Link
            href="#login"
            className="text-[#686a73] transition-colors hover:text-[#191d2d]"
          >
            Log in
          </Link>
          <Link
            href="#courses"
            className="rounded-lg bg-[#3458f5] px-[18px] py-[11px] font-semibold text-white transition-colors hover:bg-[#2448e6]"
          >
            Start learning
          </Link>
        </div>
      </div>
    </header>
  );
}
