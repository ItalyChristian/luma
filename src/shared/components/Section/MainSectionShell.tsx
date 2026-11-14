import { cn } from "@/shared/utils/cn";
import IllustrativeShell from "./IllustrativeShell";
import TextShell from "./TextShell";
import { MainSectionShellProps } from "./main-shell.types";

export default function MainSectionShell({
  layout = "row",
  textSection,
  illustrativeSection,
  textClassName,
  illustrativeClassName,
  textMobileOrder,
  illustrativeMobileOrder,
  className,
  ...props
}: MainSectionShellProps) {
  return (
    <section
      className={cn(
        "flex w-full gap-8 py-12 md:gap-10 md:py-16",
        layout === "row" ? "flex-col md:flex-row md:items-center" : "flex-col",
        className,
      )}
      {...props}
    >
      <TextShell
        {...textSection}
        className={textClassName}
        mobileOrder={textMobileOrder}
      />
      <IllustrativeShell
        className={illustrativeClassName}
        mobileOrder={illustrativeMobileOrder}
      >
        {illustrativeSection}
      </IllustrativeShell>
    </section>
  );
}
