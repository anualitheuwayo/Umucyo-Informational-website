import { useEffect, useState } from "react";
import { useForm } from "@tanstack/react-form";
import { MapPin, Mail, Phone } from "lucide-react";
import "./ContactUs.css";

const contactDetails = [
  {
    key: "location",
    title: "Our location",
    value: "Karen Nairobi Kenya",
    icon: <MapPin />,
  },
  {
    key: "email",
    title: "Email us",
    value: "umucyo22@gmail.com",
    icon: <Mail />,
  },
  {
    key: "phone",
    title: "Call us",
    value: "+250 7342345183",
    icon: <Phone />,
  },
];

const formspreeEndpoint =
  import.meta.env.VITE_FORMSPREE_ENDPOINT || "https://formspree.io/f/xoejzgaq";

type ContactFormValues = {
  name: string;
  email: string;
  message: string;
};

type FormspreeResponse = {
  errors?: unknown[];
};

type FieldMetaLike = {
  isTouched: boolean;
  errors: unknown[];
};

function FieldError({ meta }: { meta: FieldMetaLike }) {
  const message = meta.isTouched
    ? meta.errors.find((error): error is string => typeof error === "string")
    : undefined;

  if (!message) {
    return null;
  }

  return (
    <span className="field-error" role="alert">
      {message}
    </span>
  );
}

export function ContactUs() {
  const [status, setStatus] = useState<"idle" | "success" | "error" | "uncertain">("idle");

  // Hide the success popup automatically after 3 seconds.
  useEffect(() => {
    if (status !== "success") {
      return;
    }

    const timer = window.setTimeout(() => {
      setStatus("idle");
    }, 3000);

    return () => window.clearTimeout(timer);
  }, [status]);

  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    } satisfies ContactFormValues,

    onSubmit: async ({ value }) => {
      setStatus("idle");

      try {
        const response = await fetch(formspreeEndpoint, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(value),
        });

        const payload = (await response.json().catch(() => null)) as FormspreeResponse | null;

        if (!response.ok || (payload?.errors?.length ?? 0) > 0) {
          setStatus("error");
          return;
        }

        // Formspree accepted the submission.
        setStatus("success");
        form.reset();
      } catch {
        // A network failure does not necessarily mean Formspree
        // did not receive the message.
        setStatus("uncertain");
      }
    },
  });

  return (
    <section id="contact" className="contact-section">
      <div className="contact-inner">
        <h2 className="contact-title">CONTACT US</h2>

        <div className="contact-layout">
          <div className="contact-details" aria-label="Contact information">
            {contactDetails.map((item) => {
              const href =
                item.key === "email"
                  ? `mailto:${item.value}?subject=${encodeURIComponent("Message from the Umucyo website")}`
                  : item.key === "phone"
                    ? `https://wa.me/${item.value.replace(/\D/g, "")}`
                    : undefined;

              return (
                <div key={item.key} className="contact-item">
                  <span className="contact-icon" aria-hidden="true">
                    {item.icon}
                  </span>

                  <div className="contact-copy">
                    <span className="contact-label">{item.title}</span>
                    {href ? (
                      <a
                        className="contact-value"
                        href={href}
                        {...(item.key === "phone"
                          ? {
                              target: "_blank",
                              rel: "noopener noreferrer",
                              "aria-label": `Chat with us on WhatsApp: ${item.value}`,
                            }
                          : {})}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span className="contact-value">{item.value}</span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="contact-form-panel">
            <form
              className="contact-form"
              onSubmit={(event) => {
                event.preventDefault();
                event.stopPropagation();
                void form.handleSubmit();
              }}
            >
              <label className="field">
                <form.Field
                  name="name"
                  validators={{
                    onBlur: ({ value }) => (value.trim() ? undefined : "Full name is required"),
                  }}
                >
                  {(field) => (
                    <>
                      <input
                        type="text"
                        name={field.name}
                        value={field.state.value}
                        onChange={(event) => {
                          field.handleChange(event.target.value);
                          setStatus("idle");
                        }}
                        onBlur={field.handleBlur}
                        placeholder="Full Name*"
                        aria-label="Full Name"
                        aria-invalid={field.state.meta.isTouched && !field.state.meta.isValid}
                        required
                      />
                      <FieldError meta={field.state.meta} />
                    </>
                  )}
                </form.Field>
              </label>

              <label className="field">
                <form.Field
                  name="email"
                  validators={{
                    onBlur: ({ value }) => {
                      if (!value.trim()) {
                        return "Email address is required";
                      }

                      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
                        return "Enter a valid email address";
                      }

                      return undefined;
                    },
                  }}
                >
                  {(field) => (
                    <>
                      <input
                        type="email"
                        name={field.name}
                        value={field.state.value}
                        onChange={(event) => {
                          field.handleChange(event.target.value);
                          setStatus("idle");
                        }}
                        onBlur={field.handleBlur}
                        placeholder="Email Address*"
                        aria-label="Email Address"
                        aria-invalid={field.state.meta.isTouched && !field.state.meta.isValid}
                        required
                      />
                      <FieldError meta={field.state.meta} />
                    </>
                  )}
                </form.Field>
              </label>

              <label className="field field-message">
                <form.Field
                  name="message"
                  validators={{
                    onBlur: ({ value }) => (value.trim() ? undefined : "Message is required"),
                  }}
                >
                  {(field) => (
                    <>
                      <textarea
                        name={field.name}
                        value={field.state.value}
                        onChange={(event) => {
                          field.handleChange(event.target.value);
                          setStatus("idle");
                        }}
                        onBlur={field.handleBlur}
                        placeholder="Your Message*"
                        aria-label="Your Message"
                        rows={5}
                        aria-invalid={field.state.meta.isTouched && !field.state.meta.isValid}
                        required
                      />
                      <FieldError meta={field.state.meta} />
                    </>
                  )}
                </form.Field>
              </label>

              <form.Subscribe selector={(state) => state.isSubmitting}>
                {(isSubmitting) => (
                  <button type="submit" className="contact-submit" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send"}
                  </button>
                )}
              </form.Subscribe>

              {status === "success" && (
                <div className="contact-status contact-success" role="status" aria-live="polite">
                  Your message has been sent successfully.
                </div>
              )}

              {status === "error" && (
                <div className="contact-status contact-error" role="status" aria-live="polite">
                  Message could not be sent. Please try again in a moment.
                </div>
              )}

              {status === "uncertain" && (
                <div className="contact-status contact-error" role="status" aria-live="polite">
                  We could not confirm that your message was sent. Please check your connection and
                  try again.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
