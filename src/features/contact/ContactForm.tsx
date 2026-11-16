"use client";

import { Form } from "@/shared/components/Form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { schema } from "./contact-form.validations";

export default function ContactForm() {
  const methods = useForm();

  const {
    register: registerFirst,
    handleSubmit: handleSubmitFirst,
    formState: { errors: errorsFirst },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: any) => {
    alert("Enviado com sucesso");
  };

  return (
    <FormProvider {...methods}>
      <form
        className="flex flex-col gap-5"
        onSubmit={handleSubmitFirst(onSubmit)}
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
    </FormProvider>
  );
}
