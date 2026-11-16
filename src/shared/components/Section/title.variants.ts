export type SectionTitleVariant =
  | "left-large"
  | "left-medium"
  | "left-white"
  | "center"
  | "center-large";

export const variantClasses: Record<SectionTitleVariant, string> = {
  "left-large":
    "text-[40px] leading-[44px] tracking-[-1px] text-foreground md:text-[64px] md:leading-[70px] md:tracking-[-1.6px]",
  "left-medium":
    "text-[32px] leading-9 tracking-[-0.8px] text-foreground md:text-[48px] md:leading-[56px] md:tracking-[-1.2px]",
  "left-white":
    "text-[32px] leading-9 tracking-[-0.8px] text-white md:text-[48px] md:leading-[56px] md:tracking-[-1.2px]",
  center:
    "text-center text-[32px] leading-9 tracking-[-0.8px] text-foreground md:text-[48px] md:leading-[56px] md:tracking-[-1.2px]",
  "center-large":
    "text-center text-[36px] leading-[1.14] tracking-[-1px] text-foreground md:text-[56px] md:leading-[64px] md:tracking-[-1.4px]",
};
