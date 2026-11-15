import { cn } from "@/shared/utils/cn";
import Link from "next/link";
import { LinkButtonProps } from "./link-button.types";
import { sizeVariants, variantClasses } from "./variants";

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
