import { LinkButton } from "@/shared/components/LinkButton";
import IllustrativeShell from "@/shared/components/Section/IllustrativeShell";
import TextShell from "@/shared/components/Section/TextShell";
import PeopleCollage from "./PeopleCollage";

export default function Community() {
  return (
    <section
      id="community"
      aria-labelledby="teachers-and-students-title"
      className="w-full flex flex-col gap-8 py-12 md:min-h-162.5 md:flex-row md:items-center md:gap-10 md:py-16"
    >
      <div className="w-full flex flex-col items-start md:flex-[1.05]">
        <TextShell
          subheading="THE PEOPLE"
          title="Meet international students & teachers"
          titleId="teachers-and-students-title"
          description="Morbi sit egestas dignissim pharetra, sed amet. Tempus justo senectus risus ac vel, velit, nunc. Eget commodo eget in aliquam facilisi facilisi nec magna hendrerit. Placerat ipsum sit tellus urna, faucibus aenean lorem faucibus integer."
        />

        <LinkButton
          href="#people"
          variant="outline"
          size="large"
          className="mt-7 w-fit min-w-57.5 max-w-full text-[12px]"
        >
          Explore teachers and students
        </LinkButton>
      </div>

      <IllustrativeShell className="full mx-auto w- md:flex-[0.95]">
        <PeopleCollage />
      </IllustrativeShell>
    </section>
  );
}
