import { LinkButton } from "@/shared/components/LinkButton";
import PeopleCollage from "./PeopleCollage";

export default function People() {
  return (
    <section
      id="teachers-and-students"
      aria-labelledby="teachers-and-students-title"
      className="grid w-full items-center gap-8 py-12 md:min-h-162.5 md:grid-cols-[1.05fr_0.95fr] md:gap-10 md:py-16"
    >
      <div>
        <p className="mb-3 text-[11px] font-semibold tracking-[1.4px] text-primary">
          THE PEOPLE
        </p>
        <h2
          id="teachers-and-students-title"
          className="max-w-110 text-[28px] leading-[1.08] font-bold tracking-[-1.2px] md:text-[42px] md:tracking-[-1.8px]"
        >
          Meet international
          <br className="hidden md:block" /> students &amp; teachers
        </h2>
        <p className="mt-5 max-w-120 text-[15px] leading-[1.65] text-muted md:text-[16px]">
          Morbi sit egestas dignissim pharetra, sed amet. Tempus justo senectus
          risus ac vel, velit, nunc. Eget commodo eget in aliquam facilisi
          facilisi nec magna hendrerit. Placerat ipsum sit tellus urna, faucibus
          aenean lorem faucibus integer.
        </p>
        <LinkButton
          href="#teachers-and-students"
          variant="outline"
          size="large"
          className="mt-7 w-fit min-w-57.5 max-w-full text-[12px]"
        >
          Explore teachers and students
        </LinkButton>
      </div>

      <PeopleCollage />
    </section>
  );
}
