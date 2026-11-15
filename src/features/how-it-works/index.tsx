import SectionSubheading from "@/shared/components/Section/SectionSubheading";
import SectionTitle from "@/shared/components/Section/SectionTitle";
import { StepMarker } from "./step-marker";
import { StepProps, steps } from "./steps.data";

export default function HowItWorks() {
  return (
    <section
      id="about"
      aria-labelledby="how-it-works-title"
      className="w-full py-14 md:py-20"
    >
      <header className="flex flex-col items-center text-center">
        <SectionSubheading text="HOW LUMA WORKS" />
        <SectionTitle
          text="Less browsing. More learning."
          variant="center"
          id="how-it-works-title"
        />
      </header>

      <ol className="relative mt-10 grid grid-cols-1 md:mt-20 md:grid-cols-3 md:gap-10 md:before:absolute md:before:left-6 md:before:right-6 md:before:top-6 md:before:h-px md:before:bg-border md:before:content-['']">
        {steps.map((step: StepProps, index) => (
          <li key={step.number} className="relative">
            <div aria-hidden="true" className="relative z-10 w-fit">
              <StepMarker kind={step.marker} />
            </div>
            <div className="mt-5">
              <p className="text-[11px] font-semibold tracking-[1.2px] text-secondary">
                STEP {step.number}
              </p>
              <h3 className="mt-2 text-[18px] leading-tight font-semibold tracking-[-0.3px]">
                {step.title}
              </h3>
              <p className="mt-3 max-w-80 text-[14px] leading-[1.7] text-muted md:text-[15px]">
                {step.description}
              </p>
            </div>
            {index < steps.length - 1 && (
              <span
                aria-hidden="true"
                className="ml-6 mt-7 mb-7 block h-10 w-px bg-border md:hidden"
              />
            )}
          </li>
        ))}
      </ol>
    </section>
  );
}
