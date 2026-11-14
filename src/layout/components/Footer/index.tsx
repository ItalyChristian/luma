import Link from "next/link";
import { footerGroups, GroupProps } from "./groups.data";

export default function Footer() {
  return (
    <footer className="bg-foreground text-white">
      <div className="mx-auto w-full max-w-245 px-4 pb-8 pt-16 md:px-0">
        <div className="grid grid-cols-2 gap-x-8 gap-y-10 md:grid-cols-5">
          <div className="col-span-2 md:col-span-2">
            <Link
              href="/"
              aria-label="Luma home"
              className="text-xl font-bold tracking-[-1.2px]"
            >
              luma.
            </Link>
            <p className="mt-1 max-w-52 text-[13px] leading-[1.7] text-white/55">
              Practical learning for curious people.
            </p>
          </div>

          {footerGroups.map(({ title, links }: GroupProps) => (
            <nav
              key={title}
              aria-label={title}
              className={title === "Support" ? "col-span-2 md:col-span-1" : ""}
            >
              <h3 className="text-[11px] font-semibold uppercase tracking-[0.12em] text-white/90">
                {title}
              </h3>
              <ul className="mt-4 space-y-3">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="text-[13px] text-white/55 transition-colors hover:text-white"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-10 border-t border-white/20 pt-5 text-[11px] text-white/90">
          © 2026 Luma Learning
        </div>
      </div>
    </footer>
  );
}
