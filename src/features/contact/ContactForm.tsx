"use client";

import { Form } from "@/shared/components/Form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { useEffect, useRef, useState } from "react";
import { schema } from "./contact-form.validations";

export default function ContactForm() {
  const methods = useForm();
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const successDialogRef = useRef<HTMLDialogElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const {
    register: registerFirst,
    handleSubmit: handleSubmitFirst,
    formState: { errors: errorsFirst },
  } = useForm({
    resolver: zodResolver(schema),
  });

  useEffect(() => {
    if (isSuccessOpen && !successDialogRef.current?.open) {
      successDialogRef.current?.showModal();
      closeButtonRef.current?.focus({ preventScroll: true });
    }
  }, [isSuccessOpen]);

  return (
    <FormProvider {...methods}>
      <>
        <form
          className="flex flex-col gap-5"
          onSubmit={handleSubmitFirst(() => setIsSuccessOpen(true))}
        >
          <div>
            <Form.Label text="Full name" />
            <Form.Input
              placeholder="Your name"
              type="text"
              {...registerFirst("fullname")}
              maxLength={100}
            />
            {errorsFirst.fullname && (
              <small className="text-red-500 text-sm">
                {errorsFirst.fullname.message}
              </small>
            )}
          </div>

          <div>
            <Form.Label text="Email" />
            <Form.Input
              type="email"
              placeholder="you@email.com"
              {...registerFirst("email")}
              maxLength={35}
            />
            {errorsFirst.email && (
              <small className="text-red-500 text-sm">
                {errorsFirst.email.message}
              </small>
            )}
          </div>

          <div>
            <Form.Label text=" Your question" />
            <Form.Textarea
              placeholder="Tell us how we can help..."
              {...registerFirst("question")}
            />
            {errorsFirst.question && (
              <small className="text-red-500 text-sm">
                {errorsFirst.question.message}
              </small>
            )}
          </div>

          <button
            type="submit"
            className="h-12 w-full rounded-lg bg-primary text-[14px] leading-6 font-bold text-white transition-colors hover:bg-primary-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            Send message
          </button>
        </form>

        {isSuccessOpen && (
          <dialog
            ref={successDialogRef}
            aria-labelledby="email-success-title"
            aria-describedby="email-success-description"
            onClose={() => setIsSuccessOpen(false)}
            className="relative m-auto w-[calc(100%-2rem)] max-w-md rounded-2xl border border-border bg-surface p-8 text-center text-foreground shadow-[0_12px_32px_rgba(23,27,44,0.12)] backdrop:bg-foreground/50"
          >
            <button
              ref={closeButtonRef}
              type="button"
              onClick={() => successDialogRef.current?.close()}
              aria-label="Close"
              className="absolute top-4 right-4 rounded-md p-1 text-subtle transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-5 w-5"
              >
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
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-7 w-7"
              >
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
              Keep an eye on your inbox for updates. You can close this window
              now.
            </p>
          </dialog>
        )}
      </>
    </FormProvider>
  );
}
