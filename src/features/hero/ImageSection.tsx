import Image from "next/image";

export default function ImageSection() {
  return (
    <div className="relative w-full">
      <div className="absolute -right-3 top-5 h-[94%] w-[96%] rounded-[20px] bg-accent-peach" />
      <div className="absolute -bottom-2 -left-7 h-24 w-24 rounded-full bg-accent-lavender" />
      <div className="relative aspect-[0.96] overflow-hidden rounded-[20px] bg-image-placeholder">
        <Image
          src="/images/Hero/hero-laptop.avif"
          alt="Learner working on a course at her laptop"
          fill
          preload
          sizes="(max-width: 767px) calc(100vw - 40px), (max-width: 1279px) 44.65vw, 440px"
          className="object-cover"
          fetchPriority="high"
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
  );
}
