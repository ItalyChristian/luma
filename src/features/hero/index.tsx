import { LinkButton } from "@/shared/components/LinkButton";
import IllustrativeShell from "@/shared/components/Section/IllustrativeShell";
import TextShell from "@/shared/components/Section/TextShell";
import ImageSection from "./ImageSection";
import StudentsCount from "./StudentsCount";

export default function Hero() {
  return (
    <section className="flex w-full flex-col gap-10 py-[60px] md:min-h-[720px] md:flex-row md:items-center md:gap-[60px] md:py-[100px]">
      <div className="order-2 flex w-full flex-col items-start md:order-0 md:w-1/2">
        <TextShell
          subheading="LEARN AT YOUR OWN PACE"
          title="Build skills that actually move you forward."
          titleVariant="left-large"
          titleAs="h1"
          titleId="hero-title"
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
          >
            See how it works
          </LinkButton>
        </div>

        <StudentsCount />
      </div>

      <IllustrativeShell
        mobileOrder="first"
        className="mx-auto w-full max-w-110 md:w-[44.65%] md:max-w-none"
      >
        <ImageSection />
      </IllustrativeShell>
    </section>
  );
}
