import { cn } from "@/shared/utils/cn";
import { SectionTitleVariant, variantClasses } from "./title.variants";

interface SectionTitleProps {
  text: string;
  variant?: SectionTitleVariant;
  as?: "h1" | "h2";
  id?: string;
  className?: string;
}

export default function SectionTitle({
  text,
  variant = "left-medium",
  as: Heading = "h2",
  id,
  className,
}: SectionTitleProps) {
  return (
    <Heading
      id={id}
      className={cn(
        "font-jakarta font-extrabold",
        variantClasses[variant],
        className,
      )}
    >
      {text}
    </Heading>
  );
}
