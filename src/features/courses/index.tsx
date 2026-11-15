import TextShell from "@/shared/components/Section/TextShell";
import Card from "./Card";
import { courses } from "./courses.data";

export default function Courses() {
  return (
    <section
      id="courses"
      aria-labelledby="courses-title"
      className="w-full bg-surface"
    >
      <div className="mx-auto flex w-full max-w-253 flex-col gap-8 px-4 py-12 md:gap-10 md:py-22">
        <TextShell
          subheading="FIND YOUR NEXT SKILL"
          title={
            <h2
              id="courses-title"
              className="max-w-110 text-[28px] leading-[1.08] font-bold tracking-[-1.2px] md:text-[42px] md:tracking-[-1.8px]"
            >
              Learn something worth knowing.
            </h2>
          }
          description="Short, practical courses designed around skills you can put to work immediately."
        />

        <ul className="grid w-full grid-cols-1 gap-3.5 md:grid-cols-4 md:gap-4">
          {courses.map((course) => (
            <li key={course.number} className="h-full">
              <Card {...course} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
