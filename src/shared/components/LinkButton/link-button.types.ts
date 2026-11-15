import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

export type LinkButtonProps = Omit<ComponentProps<typeof Link>, "children"> & {
  children: ReactNode;
  variant?: "contained" | "outline" | "text" | "accent";
  size?: "medium" | "large";
};
