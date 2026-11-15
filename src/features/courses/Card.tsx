import { LinkButton } from "@/shared/components/LinkButton";
import { CardProps } from "./card.types";

export default function Card({ number, title, description, link }: CardProps) {
  return (
    <article className="flex min-h-48.75 h-full flex-col rounded-[14px] border border-border-soft bg-surface p-6 md:min-h-58">
      <span
        aria-hidden="true"
        className="inline-flex h-5.5 w-fit items-center rounded-md bg-badge-background px-2 text-[10px] font-semibold tracking-[1px] text-primary"
      >
        {number.toString().padStart(2, "0")}
      </span>
      <h3 className="mt-5 text-[18px] leading-tight font-semibold tracking-[-0.3px]">
        {title}
      </h3>
      <p className="mt-3 text-[13px] leading-[1.65] text-muted">
        {description}
      </p>

      <LinkButton
        href={link.href}
        variant="text"
        aria-label={`${link.label} ${title}`}
        className="mt-auto gap-2 pt-6 text-[12px]"
      >
        {link.label}
        <span aria-hidden="true" className="text-[18px] leading-none">
          →
        </span>
      </LinkButton>
    </article>
  );
}
