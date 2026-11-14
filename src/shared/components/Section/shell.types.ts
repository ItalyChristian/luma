export type MobileOrder = "first" | "last";

export interface TextShellContent {
  subheading: string;
  title: React.ReactNode;
  description: string;
}

export interface ShellAreaProps extends React.HTMLAttributes<HTMLDivElement> {
  mobileOrder?: MobileOrder;
}
