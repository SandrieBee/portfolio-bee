import { useState } from "react";
import { useForm } from "react-hook-form";

import Button from "../ui/Button";
import Card from "../ui/Card";
import FormField from "../ui/FormField";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";
import { SITE } from "../../constants/site";
import { sendContactMessage } from "../../services/contactService";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const linkClass =
  "rounded font-medium text-accent hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent";

export default function Contact() {
  const [status, setStatus] = useState("idle"); // idle | success | error
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: { name: "", email: "", subject: "", message: "", website: "" },
  });

  const onSubmit = async (values) => {
    setStatus("idle");

    // Honeypot: real visitors never see or fill this field. Bots often do.
    if (values.website) {
      setStatus("success");
      reset();
      return;
    }

    try {
      await sendContactMessage(values);
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="mx-auto max-w-6xl scroll-mt-20 px-6 py-16 lg:py-24"
    >
      <SectionHeading
        eyebrow="Get in touch"
        title="Contact"
        description="Have a question or an opportunity in mind? Send me a message."
      />

      <div className="mt-10 grid gap-10 lg:grid-cols-5">
        <Reveal className="space-y-5 lg:col-span-2">
          <div>
            <p className="text-sm text-muted">Email</p>
            <a href={`mailto:${SITE.email}`} className={linkClass}>
              {SITE.email}
            </a>
          </div>
          <div>
            <p className="text-sm text-muted">GitHub</p>
            <a
              href={SITE.github}
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              {SITE.github.replace("https://", "")}
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </div>
          <div>
            <p className="text-sm text-muted">LinkedIn</p>
            <a
              href={SITE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              {SITE.linkedin.replace("https://www.", "")}
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </div>
        </Reveal>

        <Reveal className="lg:col-span-3">
          <Card>
            <form
              onSubmit={handleSubmit(onSubmit)}
              noValidate
              className="space-y-5"
            >
              <FormField
                id="contact-name"
                label="Name"
                autoComplete="name"
                error={errors.name?.message}
                registration={register("name", {
                  required: "Please enter your name.",
                  minLength: { value: 2, message: "Name is too short." },
                  maxLength: { value: 100, message: "Name is too long." },
                })}
              />
              <FormField
                id="contact-email"
                label="Email"
                type="email"
                autoComplete="email"
                error={errors.email?.message}
                registration={register("email", {
                  required: "Please enter your email address.",
                  pattern: {
                    value: EMAIL_PATTERN,
                    message: "Please enter a valid email address.",
                  },
                })}
              />
              <FormField
                id="contact-subject"
                label="Subject"
                error={errors.subject?.message}
                registration={register("subject", {
                  required: "Please enter a subject.",
                  maxLength: { value: 150, message: "Subject is too long." },
                })}
              />
              <FormField
                id="contact-message"
                label="Message"
                multiline
                rows={6}
                error={errors.message?.message}
                registration={register("message", {
                  required: "Please enter a message.",
                  minLength: {
                    value: 10,
                    message: "Message should be at least 10 characters.",
                  },
                  maxLength: {
                    value: 2000,
                    message: "Message must be 2000 characters or fewer.",
                  },
                })}
              />

              <div className="hidden" aria-hidden="true">
                <label htmlFor="contact-website">Leave this field empty</label>
                <input
                  id="contact-website"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  {...register("website")}
                />
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <Button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send message"}
                </Button>

                {status === "success" && (
                  <p
                    role="status"
                    className="rounded-lg bg-emerald-50 px-3 py-2 text-sm text-emerald-800"
                  >
                    Thank you. Your message has been sent.
                  </p>
                )}
                {status === "error" && (
                  <p
                    role="alert"
                    className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-800"
                  >
                    Something went wrong. Please try again, or email me directly.
                  </p>
                )}
              </div>
            </form>
          </Card>
        </Reveal>
      </div>
    </section>
  );
}