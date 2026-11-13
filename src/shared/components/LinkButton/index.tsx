import { cn } from "@/shared/utils/cn";
import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { variantClasses } from "./variants";

type LinkButtonProps = Omit<ComponentProps<typeof Link>, "children"> & {
  children: ReactNode;
  variant?: "contained" | "outline";
};

export function LinkButton({
  children,
  className,
  variant = "contained",
  ...props
}: LinkButtonProps) {
  return (
    <Link
      {...props}
      className={cn(
        "flex h-12 items-center justify-center rounded-lg px-6 text-[13px] font-semibold transition-colors",
        variantClasses[variant],
        className,
      )}
    >
      {children}
    </Link>
  );
}
