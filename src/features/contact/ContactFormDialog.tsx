"use client";

import { useEffect } from "react";

type ContactFormDialogProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function ContactFormDialog({
  isOpen,
  onClose,
}: ContactFormDialogProps) {
  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <div
      aria-hidden={!isOpen}
      className={
        isOpen
          ? "fixed inset-0 z-50 flex items-center justify-center bg-foreground/50 p-4"
          : "hidden"
      }
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="email-success-title"
        aria-describedby="email-success-description"
        className="relative w-full max-w-md rounded-2xl border border-border bg-surface p-8 text-center text-foreground shadow-[0_12px_32px_rgba(23,27,44,0.12)]"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 rounded-md p-1 text-subtle transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5">
            <path
              d="m6 6 12 12M18 6 6 18"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth="1.5"
            />
          </svg>
        </button>

        <span className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-accent-lavender text-primary">
          <svg aria-hidden="true" viewBox="0 0 24 24" className="h-7 w-7">
            <path
              d="M3 6.75h18v10.5H3zM3.5 7l8.5 6.5L20.5 7"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            />
          </svg>
        </span>
        <h2
          id="email-success-title"
          className="font-jakarta text-xl leading-8 font-bold"
        >
          Email sent successfully
        </h2>
        <p
          id="email-success-description"
          className="mt-2 text-[14px] leading-6 text-muted"
        >
          Keep an eye on your inbox for updates. You can close this window now.
        </p>
      </section>
    </div>
  );
}
