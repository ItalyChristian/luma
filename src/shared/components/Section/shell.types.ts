export type ShellLayout = "row" | "column";
export type MobileOrder = "first" | "last";

export interface TextShellContent {
  subheading: string;
  title: React.ReactNode;
  description: string;
  actions?: React.ReactNode;
  afterActions?: React.ReactNode;
}

export interface ShellAreaProps extends React.HTMLAttributes<HTMLDivElement> {
  mobileOrder?: MobileOrder;
}
