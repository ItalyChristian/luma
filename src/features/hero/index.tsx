import { LinkButton } from "@/shared/components/LinkButton";
import IllustrativeShell from "@/shared/components/Section/IllustrativeShell";
import TextShell from "@/shared/components/Section/TextShell";
import ImageSection from "./ImageSection";
import StudentsCount from "./StudentsCount";

export default function Hero() {
  return (
    <section className="flex w-full flex-col gap-8 py-12 md:min-h-[calc(100vh-60px)] md:flex-row md:items-center md:gap-10 md:py-16">
      <div className="order-2 flex w-full flex-col items-start md:order-0 md:w-[52%]">
        <TextShell
          subheading="LEARN AT YOUR OWN PACE"
          title={
            <h1 className="max-w-127.5 text-[36px] leading-[1.06] font-bold tracking-[-1.8px] md:text-[58px] md:tracking-[-2.8px]">
              Build skills that actually move you forward.
            </h1>
          }
          description="Practical courses taught by people who do the work every day. Learn design, technology, business and more — one focused lesson at a time."
        />

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
      </div>

      <IllustrativeShell
        mobileOrder="first"
        className="mx-auto w-full max-w-110 md:w-[44%] md:max-w-none"
      >
        <ImageSection />
      </IllustrativeShell>
    </section>
  );
}
