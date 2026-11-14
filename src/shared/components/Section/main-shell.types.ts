import type { MobileOrder, ShellLayout } from "./shell.types";
import type { TextShellContent } from "./shell.types";

export interface MainSectionShellProps extends Omit<
  React.ComponentPropsWithoutRef<"section">,
  "children"
> {
  layout?: ShellLayout;
  textSection: TextShellContent;
  illustrativeSection: React.ReactNode;
  textClassName?: string;
  illustrativeClassName?: string;
  textMobileOrder?: MobileOrder;
  illustrativeMobileOrder?: MobileOrder;
}
