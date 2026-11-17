import { ChatIcon } from "@/shared/icons/Clock";
import { ClockIcon } from "@/shared/icons/ClockIcon";

interface ContactCardProps {
  icon: "email" | "clock";
  title: string;
  detail: string;
}

export default function ContactCard({ icon, title, detail }: ContactCardProps) {
  return (
    <div className="flex items-center gap-4 rounded-xl bg-background p-4 md:p-5">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent-lavender text-primary">
        {icon === "email" ? (
          <ChatIcon size="1.25rem" />
        ) : (
          <ClockIcon size="1.25rem" />
        )}
      </span>
      <span className="flex flex-col gap-0.5">
        <span className="text-[14px] leading-6">{title}</span>
        {icon === "email" ? (
          <a
            href={`mailto:${detail}`}
            className="text-[14px] leading-6 text-primary hover:underline"
          >
            {detail}
          </a>
        ) : (
          <span className="text-[14px] leading-6 text-muted">{detail}</span>
        )}
      </span>
    </div>
  );
}
