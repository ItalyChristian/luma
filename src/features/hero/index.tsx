import { LinkButton } from "@/shared/components/LinkButton";

import { Section } from "@/shared/components/Section";
import ImageSection from "./ImageSection";
import StudentsCount from "./StudentsCount";

export default function Hero() {
  return (
    <Section.MainShell
      aria-labelledby="hero-title"
      className="md:min-h-[calc(100vh-60px)]"
      textClassName="md:w-[52%]"
      textMobileOrder="last"
      illustrativeClassName="mx-auto w-full max-w-110 md:w-[44%] md:max-w-none"
      illustrativeMobileOrder="first"
      textSection={{
        subheading: "LEARN AT YOUR OWN PACE",
        title: (
          <h1
            id="hero-title"
            className="max-w-127.5 text-[36px] leading-[1.06] font-bold tracking-[-1.8px] md:text-[58px] md:tracking-[-2.8px]"
          >
            Build skills that actually move you forward.
          </h1>
        ),
        description:
          "Practical courses taught by people who do the work every day. Learn design, technology, business and more — one focused lesson at a time.",
        actions: (
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
        ),
        afterActions: <StudentsCount />,
      }}
      illustrativeSection={<ImageSection />}
    />
  );
}
