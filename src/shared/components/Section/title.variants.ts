export type SectionTitleVariant =
  | "left-large"
  | "left-medium"
  | "left-white"
  | "center"
  | "center-large";

export const variantClasses: Record<SectionTitleVariant, string> = {
  "left-large":
    "text-[36px] leading-[1.06] tracking-[-1px] text-[#171B2C] md:text-[64px] md:leading-[70px] md:tracking-[-1.6px]",
  "left-medium":
    "text-[28px] leading-[1.12] tracking-[-0.8px] text-[#171B2C] md:text-[48px] md:leading-[56px] md:tracking-[-1.2px]",
  "left-white":
    "text-[28px] leading-[1.12] tracking-[-0.8px] text-white md:text-[48px] md:leading-[56px] md:tracking-[-1.2px]",
  center:
    "text-center text-[30px] leading-[1.12] tracking-[-0.8px] text-[#171B2C] md:text-[48px] md:leading-[56px] md:tracking-[-1.2px]",
  "center-large":
    "text-center text-[36px] leading-[1.14] tracking-[-1px] text-[#171B2C] md:text-[56px] md:leading-[64px] md:tracking-[-1.4px]",
};
