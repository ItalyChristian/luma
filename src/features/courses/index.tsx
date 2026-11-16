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
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-5 py-12 md:gap-10 md:px-20 md:py-22">
        <TextShell
          subheading="FIND YOUR NEXT SKILL"
          title="Learn something worth knowing."
          titleId="courses-title"
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
