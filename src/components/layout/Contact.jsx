import { useState } from "react";
import { useForm } from "react-hook-form";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Mail01Icon,
  GithubIcon,
  Linkedin01Icon,
  ArrowUpRight01Icon,
  SentIcon,
} from "@hugeicons/core-free-icons";
import Button from "../ui/Button";
import Card from "../ui/Card";
import FormField from "../ui/FormField";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";
import { SITE } from "../../constants/site";
import { sendContactMessage } from "../../services/contactService";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function ContactLink({ icon, label, value, href, external = false }) {
  const externalProps = external
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <a
      href={href}
      {...externalProps}
      className="group flex items-center gap-4 rounded-card border border-line bg-white p-4 shadow-soft transition duration-200 hover:border-accent-soft hover:shadow-lift focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent motion-reduce:transition-none"
    >
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-soft/40 text-accent-dark">
        <HugeiconsIcon icon={icon} size={22} />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block text-xs text-muted">{label}</span>
        <span className="block truncate text-sm font-medium text-ink">
          {value}
        </span>
      </span>
      <HugeiconsIcon
        icon={ArrowUpRight01Icon}
        size={18}
        className="shrink-0 text-muted transition duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent motion-reduce:transition-none motion-reduce:group-hover:translate-x-0 motion-reduce:group-hover:translate-y-0"
      />
      {external && <span className="sr-only">(opens in a new tab)</span>}
    </a>
  );
}

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
    <section id="contact" className="section">
      <SectionHeading
        eyebrow="Get in touch"
        title="Contact"
        description="Have a question or an opportunity in mind? Send me a message."
      />

      <div className="mt-8 grid items-start gap-6 lg:grid-cols-5 lg:gap-8">
        <Reveal className="lg:sticky lg:top-24 lg:col-span-2">
          <ul className="space-y-3">
            <li>
              <ContactLink
                icon={Mail01Icon}
                label="Email"
                value={SITE.email}
                href={`mailto:${SITE.email}`}
              />
            </li>
            <li>
              <ContactLink
                icon={GithubIcon}
                label="GitHub"
                value={SITE.github.replace("https://", "")}
                href={SITE.github}
                external
              />
            </li>
            <li>
              <ContactLink
                icon={Linkedin01Icon}
                label="LinkedIn"
                value={SITE.linkedin.replace(/^https:\/\/(www\.)?/, "")}
                href={SITE.linkedin}
                external
              />
            </li>
          </ul>
        </Reveal>

        <Reveal className="lg:col-span-3">
          <Card>
            <h3 className="text-lg font-semibold">Send a message</h3>

            <form
              onSubmit={handleSubmit(onSubmit)}
              noValidate
              className="mt-4 space-y-4"
            >
              <div className="grid gap-4 sm:grid-cols-2">
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
              </div>
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
                rows={5}
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

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto"
                >
                  <HugeiconsIcon icon={SentIcon} size={18} />
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