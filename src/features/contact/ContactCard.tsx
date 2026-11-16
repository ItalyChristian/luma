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
          <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5">
            <path
              d="M3 6.75h18v10.5H3zM3.5 7l8.5 6.5L20.5 7"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            />
          </svg>
        ) : (
          <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5">
            <circle
              cx="12"
              cy="12"
              r="9"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <path
              d="M12 7v5l3 2"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            />
          </svg>
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
          <span className="text-[14px] leading-6 text-subtle">{detail}</span>
        )}
      </span>
    </div>
  );
}
