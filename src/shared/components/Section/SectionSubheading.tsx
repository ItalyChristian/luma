import { cn } from "@/shared/utils/cn";

interface SubheadingProps {
  text: string;
  className?: string;
}

export default function SectionSubheading({
  text,
  className,
}: SubheadingProps) {
  return (
    <p
      className={cn(
        "mb-4 text-[12px] leading-4 font-semibold tracking-[1.44px] text-primary",
        className,
      )}
    >
      {text}
    </p>
  );
}
