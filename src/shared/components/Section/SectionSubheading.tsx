interface SubheadingProps {
  text: string;
}

export default function SectionSubheading({ text }: SubheadingProps) {
  return (
    <p className="mb-4 text-[11px] font-semibold tracking-[1.4px] text-primary">
      {text}
    </p>
  );
}
