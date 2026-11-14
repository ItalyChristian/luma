interface SectionShellProps {
  id?: string;
  aria?: string;
  children: React.ReactNode;
}

export default function SectionShell({
  id,
  aria,
  children,
}: SectionShellProps) {
  return (
    <section
      id={id}
      aria-labelledby={aria}
      className="order-2 flex flex-col items-start md:order-1 md:w-[52%]"
    >
      {children}
    </section>
  );
}
