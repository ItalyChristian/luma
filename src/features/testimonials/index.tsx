import Image from "next/image";
import Metrics from "./Metrics";

export default function Testimonials() {
  return (
    <section
      aria-label="Learner testimonial"
      className="w-full bg-surface py-15 md:py-25"
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-5 md:flex-row md:items-center md:justify-between md:gap-15 md:px-20">
        <figure className="w-full md:max-w-150">
          <span
            aria-hidden="true"
            className="font-jakarta text-3xl leading-none font-extrabold text-primary"
          >
            &ldquo;
          </span>
          <blockquote className="pt-4 font-jakarta text-[20px] leading-8 font-semibold tracking-[-0.4px] text-foreground md:text-[30px] md:leading-11 md:tracking-[-0.75px]">
            The lessons are short enough to fit into my week, but detailed
            enough that I actually leave with something I can use.
          </blockquote>

          <figcaption className="mt-6 flex items-center gap-4">
            <span className="relative h-12 w-12 overflow-hidden rounded-full bg-image-placeholder">
              <Image
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=96&h=96&q=80"
                alt=""
                fill
                unoptimized
                sizes="48px"
                className="object-cover"
              />
            </span>
            <span className="flex flex-col">
              <span className="text-[16px] leading-7 font-bold">
                Alex Morgan
              </span>
              <span className="text-[14px] leading-6 text-muted">
                Product Manager
              </span>
            </span>
          </figcaption>
        </figure>

        <Metrics />
      </div>
    </section>
  );
}
