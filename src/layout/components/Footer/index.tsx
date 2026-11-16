import Link from "next/link";
import { footerGroups, GroupProps } from "./groups.data";

export default function Footer() {
  return (
    <footer className="bg-foreground text-white">
      <div className="mx-auto w-full max-w-[1280px] px-5 pb-10 pt-20 md:px-20">
        <div className="grid grid-cols-2 gap-x-8 gap-y-10 md:grid-cols-5">
          <div className="col-span-2 md:col-span-2">
            <Link
              href="/"
              aria-label="Luma home"
              className="text-xl font-bold tracking-[-1.2px]"
            >
              luma.
            </Link>
            <p className="mt-1 max-w-52 text-[13px] leading-[1.7] text-footer-muted">
              Practical learning for curious people.
            </p>
          </div>

          {footerGroups.map(({ title, links }: GroupProps) => (
            <nav
              key={title}
              aria-label={title}
              className={title === "Support" ? "col-span-2 md:col-span-1" : ""}
            >
              <h3               className="text-[12px] font-semibold uppercase tracking-[1.44px] text-footer-text">
                {title}
              </h3>
              <ul className="mt-4 space-y-3">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="text-[14px] text-footer-muted transition-colors hover:text-white"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-16 border-t border-muted pt-6 text-[13px] leading-5 text-footer-text">
          © 2026 Luma Learning
        </div>
      </div>
    </footer>
  );
}
