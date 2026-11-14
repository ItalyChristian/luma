import { LinkButton } from "@/shared/components/LinkButton";
import ImageSection from "./ImageSection";
import StudentsCount from "./StudentsCount";

export default function Hero() {
  return (
    <div className="flex w-full flex-col gap-8 py-12 md:min-h-[calc(100vh-60px)] md:flex-row md:items-center md:gap-10 md:py-16">
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
          <LinkButton href="#courses" size="large">
            Explore courses
          </LinkButton>
          <LinkButton
            href="#about"
            variant="outline"
            size="large"
            className="hidden sm:flex"
          >
            See how it works
          </LinkButton>
        </div>

        <StudentsCount />
      </section>

      <ImageSection />
    </div>
  );
}
