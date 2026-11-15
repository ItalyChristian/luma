import { cn } from "@/shared/utils/cn";
import SectionDescription from "./SectionDescription";
import SectionSubheading from "./SectionSubheading";
import SectionTitle from "./SectionTitle";
import type { TextShellContent } from "./shell.types";

interface TextShellProps extends TextShellContent {
  className?: string;
  subheadingClassName?: string;
  descriptionClassName?: string;
  titleAs?: "h1" | "h2";
  titleId?: string;
}

export default function TextShell({
  className,
  subheadingClassName,
  descriptionClassName,
  titleAs,
  titleId,
  subheading,
  title,
  titleVariant,
  description,
}: TextShellProps) {
  return (
    <div className={cn("flex w-full flex-col items-start", className)}>
      <SectionSubheading text={subheading} className={subheadingClassName} />
      <SectionTitle
        text={title}
        variant={titleVariant}
        as={titleAs}
        id={titleId}
      />
      <SectionDescription text={description} className={descriptionClassName} />
    </div>
  );
}