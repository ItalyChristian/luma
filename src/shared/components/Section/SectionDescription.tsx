import { cn } from "@/shared/utils/cn";

interface DescriptionProps {
  text: string;
  className?: string;
}

export default function SectionDescription({
  text,
  className,
}: DescriptionProps) {
  return (
    <p
      className={cn(
        "mt-4 max-w-110 text-[16px] leading-[26px] text-muted md:mt-6 md:text-[18px] md:leading-7",
        className,
      )}
    >
      {text}
    </p>
  );
}
