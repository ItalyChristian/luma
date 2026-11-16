import TextShell from "@/shared/components/Section/TextShell";

import ContactCard from "./ContactCard";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="w-full bg-surface py-15 md:py-25"
    >
      <div className="mx-auto grid w-full max-w-[1280px] grid-cols-1 gap-10 px-5 md:grid-cols-[minmax(0,480px)_minmax(0,540px)] md:items-center md:justify-between md:px-20">
        <div>
          <TextShell
            subheading="CONTACT"
            title="Get in touch"
            titleId="contact-title"
            description="Have a question? We're here to help. Whether you're looking for the right course, learning with your team or interested in teaching with Luma, we'd love to hear from you."
          />

          <div className="mt-7 flex flex-col gap-4">
            <ContactCard icon="email" title="Email" detail="contact@luma.com" />
            <ContactCard
              icon="clock"
              title="Response Time"
              detail="Up to 24 hours on business days"
            />
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-surface p-5 shadow-[0_12px_32px_rgba(23,27,44,0.04)] sm:p-10">
          <div className="mb-6">
            <h3 className="font-jakarta text-xl leading-8 font-bold">
              Contact us
            </h3>
            <p className="mt-2 text-[14px] leading-6 text-muted">
              Fill out the fields and we&apos;ll get in touch.
            </p>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}
