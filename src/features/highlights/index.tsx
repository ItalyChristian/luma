import { LinkButton } from "@/shared/components/LinkButton";
import IllustrativeShell from "@/shared/components/Section/IllustrativeShell";
import TextShell from "@/shared/components/Section/TextShell";

export default function Highlights() {
  return (
    <section
      id="highlights"
      aria-labelledby="teachers-and-students-title"
      className="w-full flex flex-col gap-8 py-12 md:min-h-162.5 md:flex-row md:items-center md:gap-10 md:py-16"
    >
      <IllustrativeShell className="full mx-auto w- md:flex-[0.95]"></IllustrativeShell>

      <div className="w-full flex flex-col items-start md:flex-[1.05]">
        <TextShell
          subheading="MOST POPULAR THIS MONTH"
          title={
            <h2 className="max-w-110 text-[28px] leading-[1.08] font-bold tracking-[-1.2px] md:text-[42px] md:tracking-[-1.8px]">
              Designing produtcs people understand.
            </h2>
          }
          description="Learn how to design products that people understand and love. This course will teach you the fundamentals of user experience design, including user research, wireframing, prototyping, and usability testing."
        />

        <LinkButton
          href="#people"
          variant="outline"
          size="large"
          className="mt-7 w-fit min-w-57.5 max-w-full text-[12px]"
        >
          View course
        </LinkButton>
      </div>
    </section>
  );
}
