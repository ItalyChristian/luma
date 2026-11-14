import { cn } from "@/shared/utils/cn";
import SectionDescription from "./SectionDescription";
import SectionSubheading from "./SectionSubheading";
import type { MobileOrder, TextShellContent } from "./shell.types";

interface TextShellProps extends TextShellContent {
  className?: string;
  mobileOrder?: MobileOrder;
}

export default function TextShell({
  mobileOrder,
  className,
  subheading,
  title,
  description,
  actions,
  afterActions,
}: TextShellProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-start",
        mobileOrder === "first" && "order-1 md:order-0",
        mobileOrder === "last" && "order-2 md:order-0",
        className,
      )}
    >
      <SectionSubheading text={subheading} />
      {title}
      <SectionDescription text={description} />
      {actions}
      {afterActions}
    </div>
  );
}