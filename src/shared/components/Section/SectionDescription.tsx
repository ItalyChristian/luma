interface DescriptionProps {
  text: string;
}

export default function SectionDescription({ text }: DescriptionProps) {
  return (
    <p className="mt-4 max-w-110 text-[15px] leading-[1.65] text-muted md:mt-5 md:text-[16px]">
      {text}
    </p>
  );
}
