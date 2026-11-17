import { LinkButton } from "@/shared/components/LinkButton";
import TextShell from "@/shared/components/Section/TextShell";
import Image from "next/image";

export default function Highlights() {
  return (
    <section
      id="highlights"
      aria-labelledby="featured-course-title"
      className="w-full bg-primary text-white"
    >
      <div className="mx-auto grid w-full max-w-[1280px] grid-cols-1 items-center gap-8 px-5 py-12 md:grid-cols-2 md:gap-13 md:px-20 md:py-22">
        <div className="relative aspect-[1.32] w-full overflow-visible">
          <div className="absolute -left-2 -top-2 z-10 rounded-md bg-accent-yellow px-3 py-1.5 text-[10px] font-semibold tracking-[1px] text-foreground">
            FEATURED COURSE
          </div>
          <div className="relative h-full w-full overflow-hidden rounded-[14px] bg-image-placeholder">
            <Image
              src="/images/Highlights/Image (Product design course — student working on interface designs).png"
              alt="Product design work in progress on a studio desk"
              fill
              sizes="(max-width: 767px) 100vw, 480px"
              className="object-cover"
            />
          </div>
        </div>

        <div>
          <TextShell
            subheading="MOST POPULAR THIS MONTH"
            subheadingClassName="text-white"
            title="Designing products people understand."
            titleVariant="left-white"
            titleId="featured-course-title"
            description="Learn how to turn complex workflows into simple, intentional product experiences through research, structure and thoughtful interaction design."
            descriptionClassName="max-w-120 text-white/90"
          />

          <p className="mt-6 text-[14px] text-white/90">
            with Maya Chen · Senior Product Designer
          </p>

          <ul aria-label="Course details" className="mt-6 flex flex-wrap gap-2">
            <li className="rounded-lg border border-white/60 px-3 py-2 text-[12px]">
              8 lessons
            </li>
            <li className="rounded-lg border border-white/60 px-3 py-2 text-[12px]">
              2h 40min
            </li>
            <li className="rounded-lg border border-white/60 px-3 py-2 text-[12px]">
              Intermediate
            </li>
          </ul>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
            <LinkButton
              href="#courses"
              variant="accent"
              size="large"
              className="w-full sm:w-fit"
            >
              View course
            </LinkButton>
            <LinkButton
              href="#courses"
              variant="text"
              className="justify-center gap-2 text-white hover:text-accent-yellow sm:justify-start"
            >
              Browse all courses
              <span aria-hidden="true" className="text-[18px] leading-none">
                →
              </span>
            </LinkButton>
          </div>
        </div>
      </div>
    </section>
  );
}
