import type { SectionTitleVariant } from "./title.variants";

export type MobileOrder = "first" | "last";

export interface TextShellContent {
  subheading: string;
  title: string;
  description: string;
  titleVariant?: SectionTitleVariant;
}

export interface ShellAreaProps extends React.HTMLAttributes<HTMLDivElement> {
  mobileOrder?: MobileOrder;
}
