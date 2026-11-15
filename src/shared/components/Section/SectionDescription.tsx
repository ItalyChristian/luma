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
        "mt-4 max-w-110 text-[15px] leading-[1.65] text-muted md:mt-5 md:text-[16px]",
        className,
      )}
    >
      {text}
    </p>
  );
}
