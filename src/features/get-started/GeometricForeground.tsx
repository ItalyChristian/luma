export const GeometricForeground = () => {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0">
      <span className="absolute -left-7 top-[48%] h-12 w-12 rotate-12 rounded-md bg-accent-peach md:left-[2%] md:top-[52%]" />
      <span className="absolute -left-8 -bottom-9.5 h-26 w-26 rounded-full bg-accent-peach md:-bottom-12 md:left-[6%] md:h-26 md:w-26" />
      <span className="absolute left-[3%] top-[4%] h-24 w-24 rounded-full border border-accent-peach" />
      <span className="absolute left-[26%] top-[10%] h-12 w-12 rotate-12 rounded-lg border border-accent-peach" />
      <span className="absolute right-[29%] top-[9%] h-7 w-7 rounded-full border border-accent-peach" />
      <span className="absolute right-[2%] -top-4.5 h-24 w-24 rotate-12 rounded-lg bg-accent-peach" />
      <span className="absolute right-[7%] top-[52%] hidden h-12 w-12 rotate-45 border border-accent-peach md:block" />
      <span className="absolute bottom-[5%] right-[21%] hidden h-7 w-7 rounded-full border border-accent-peach md:block" />
      <span className="absolute bottom-[8%] left-[25%] hidden h-10 w-7 rotate-12 rounded-lg bg-accent-peach md:block" />
    </div>
  );
};
