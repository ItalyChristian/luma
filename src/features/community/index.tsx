import { LinkButton } from "@/shared/components/LinkButton";

import { Section } from "@/shared/components/Section";
import PeopleCollage from "./PeopleCollage";

export default function Community() {
  return (
    <Section.MainShell
      id="community"
      aria-labelledby="teachers-and-students-title"
      className="md:min-h-162.5"
      textClassName="md:flex-[1.05]"
      illustrativeClassName="mx-auto w-full md:flex-[0.95]"
      textSection={{
        subheading: "THE PEOPLE",
        title: (
          <h2
            id="teachers-and-students-title"
            className="max-w-110 text-[28px] leading-[1.08] font-bold tracking-[-1.2px] md:text-[42px] md:tracking-[-1.8px]"
          >
            Meet international
            <br className="hidden md:block" /> students &amp; teachers
          </h2>
        ),
        description:
          "Morbi sit egestas dignissim pharetra, sed amet. Tempus justo senectus risus ac vel, velit, nunc. Eget commodo eget in aliquam facilisi facilisi nec magna hendrerit. Placerat ipsum sit tellus urna, faucibus aenean lorem faucibus integer.",
        actions: (
          <LinkButton
            href="#people"
            variant="outline"
            size="large"
            className="mt-7 w-fit min-w-57.5 max-w-full text-[12px]"
          >
            Explore teachers and students
          </LinkButton>
        ),
      }}
      illustrativeSection={<PeopleCollage />}
    />
  );
}
