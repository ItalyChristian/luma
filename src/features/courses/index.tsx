import TextShell from "@/shared/components/Section/TextShell";

export default function Courses() {
  return (
    <section
      id="courses"
      className="w-full flex flex-col gap-8 py-12 md:min-h-162.5 md:items-center md:gap-10 md:py-16"
    >
      <TextShell
        subheading="FIND YOUR NEXT SKILL"
        title={
          <h2 className="max-w-110 text-[28px] leading-[1.08] font-bold tracking-[-1.2px] md:text-[42px] md:tracking-[-1.8px]">
            Learn something worth knowing.
          </h2>
        }
        description="Short, practical courses designed around skills you can put to work immediately."
      />
      <div>PASTEL DE FRANGO</div>
    </section>
  );
}
