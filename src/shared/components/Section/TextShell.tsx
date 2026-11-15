import { cn } from "@/shared/utils/cn";
import SectionDescription from "./SectionDescription";
import SectionSubheading from "./SectionSubheading";
import type { TextShellContent } from "./shell.types";

interface TextShellProps extends TextShellContent {
  className?: string;
  subheadingClassName?: string;
  descriptionClassName?: string;
}

export default function TextShell({
  className,
  subheadingClassName,
  descriptionClassName,
  subheading,
  title,
  description,
}: TextShellProps) {
  return (
    <div
      className={cn("flex w-full flex-col items-start", className)}
    >
      <SectionSubheading text={subheading} className={subheadingClassName} />
      {title}
      <SectionDescription
        text={description}
        className={descriptionClassName}
      />
    </div>
  );
}