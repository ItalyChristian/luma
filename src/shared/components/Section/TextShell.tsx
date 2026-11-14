import { cn } from "@/shared/utils/cn";
import SectionDescription from "./SectionDescription";
import SectionSubheading from "./SectionSubheading";
import type { TextShellContent } from "./shell.types";

interface TextShellProps extends TextShellContent {
  className?: string;
}

export default function TextShell({
  className,
  subheading,
  title,
  description,
}: TextShellProps) {
  return (
    <div
      className={cn("flex w-full flex-col items-start", className)}
    >
      <SectionSubheading text={subheading} />
      {title}
      <SectionDescription text={description} />
    </div>
  );
}