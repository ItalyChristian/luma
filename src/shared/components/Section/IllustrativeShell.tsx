import { cn } from "@/shared/utils/cn";
import type { ShellAreaProps } from "./shell.types";

export default function IllustrativeShell({
  mobileOrder,
  className,
  ...props
}: ShellAreaProps) {
  return (
    <div
      className={cn(
        mobileOrder === "first" && "order-1 md:order-0",
        mobileOrder === "last" && "order-2 md:order-0",
        className,
      )}
      {...props}
    />
  );
}
