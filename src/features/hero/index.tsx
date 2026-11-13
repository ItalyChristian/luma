import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <>
      <section className="order-2 flex flex-col items-start md:order-1 md:w-[52%]">
        <p className="mb-4 text-[11px] font-semibold tracking-[1.4px] text-primary">
          LEARN AT YOUR OWN PACE
        </p>
        <h1 className="max-w-127.5 text-[36px] leading-[1.06] font-bold tracking-[-1.8px] md:text-[58px] md:tracking-[-2.8px]">
          Build skills that actually move you forward.
        </h1>
        <p className="mt-4 max-w-110 text-[15px] leading-[1.65] text-muted md:mt-5 md:text-[16px]">
          Practical courses taught by people who do the work every day. Learn
          design, technology, business and more — one focused lesson at a time.
        </p>
        <div className="mt-7 flex w-full flex-col gap-3 sm:flex-row md:w-auto">
          <Link
            href="#courses"
            className="flex h-12 items-center justify-center rounded-lg bg-primary px-6 text-[13px] font-semibold text-white transition-colors hover:bg-primary-hover"
          >
            Explore courses
          </Link>
          <Link
            href="#about"
            className="hidden h-12 items-center justify-center rounded-lg border border-border-soft bg-surface px-6 text-[13px] font-semibold text-foreground transition-colors hover:bg-surface-hover sm:flex"
          >
            See how it works
          </Link>
        </div>
        <div className="mt-7 hidden items-center gap-3 text-[12px] md:flex">
          <div className="flex -space-x-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-background bg-avatar-peach text-[9px] font-bold text-white">
              AM
            </span>
            <span className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-background bg-avatar-blue text-[9px] font-bold text-white">
              JS
            </span>
            <span className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-background bg-avatar-charcoal text-[9px] font-bold text-white">
              KL
            </span>
          </div>
          <p>
            <strong>Trusted by 24,000+</strong>
            <span className="ml-1 text-muted">learners</span>
          </p>
        </div>
      </section>
      <div className="relative order-1 mx-auto w-full max-w-[440px] md:order-2 md:w-[44%] md:max-w-none">
        <div className="absolute -right-3 top-5 h-[94%] w-[96%] rounded-[20px] bg-accent-peach" />
        <div className="absolute -bottom-2 -left-7 h-24 w-24 rounded-full bg-accent-lavender" />
        <div className="relative aspect-[0.96] overflow-hidden rounded-[20px] bg-image-placeholder">
          <Image
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=85"
            alt="Students collaborating on a course project"
            fill
            unoptimized
            priority
            sizes="(max-width: 767px) 100vw, 440px"
            className="object-cover"
          />
        </div>
        <div className="absolute -left-4 top-4 flex items-center gap-3 rounded-xl bg-white px-3 py-2.5 text-[12px] shadow-[0_8px_24px_rgba(27,30,43,0.12)] md:-left-5 md:top-4 md:px-4 md:py-3">
          <span className="rounded-md bg-badge-background px-2 py-1 font-bold text-primary">
            120+
          </span>
          <span>expert-led courses</span>
        </div>
        <div className="absolute -bottom-1 right-0 flex items-center gap-2 rounded-xl bg-white px-3 py-3 text-[12px] shadow-[0_8px_24px_rgba(27,30,43,0.12)] md:-right-10 md:bottom-7 md:px-4">
          <span aria-label="5 stars" className="tracking-[2px] text-star">
            ★★★★★
          </span>
          <span>4.9 avg rating</span>
        </div>
      </div>
    </>
  );
}
