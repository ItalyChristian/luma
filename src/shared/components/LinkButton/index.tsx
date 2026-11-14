import { cn } from "@/shared/utils/cn";
import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { sizeVariants, variantClasses } from "./variants";

type LinkButtonProps = Omit<ComponentProps<typeof Link>, "children"> & {
  children: ReactNode;
  variant?: "contained" | "outline";
  size?: "medium" | "large";
};

export function LinkButton({
  children,
  className,
  variant = "contained",
  size = "medium",
  ...props
}: LinkButtonProps) {
  return (
    <Link
      {...props}
      className={cn(
        "flex items-center justify-center rounded-lg text-[13px] font-semibold transition-colors",
        variantClasses[variant],
        sizeVariants[size],
        className,
      )}
    >
      {children}
    </Link>
  );
}
