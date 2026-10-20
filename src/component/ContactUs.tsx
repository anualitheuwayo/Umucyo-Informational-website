import { FormEvent, useState } from "react";
import "./ContactUs.css";

const contactDetails = [
  {
    key: "location",
    title: "Our location",
    value: "Karen Nairobi Kenya",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2.5a7.5 7.5 0 0 1 7.5 7.5c0 5.9-7.5 11.5-7.5 11.5S4.5 15.9 4.5 10A7.5 7.5 0 0 1 12 2.5Zm0 3.2a4.3 4.3 0 1 0 0 8.6 4.3 4.3 0 0 0 0-8.6Z" />
      </svg>
    ),
  },
  {
    key: "email",
    title: "Email us",
    value: "umucyo@gmail.com",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M3.5 6.5A2.5 2.5 0 0 1 6 4h12a2.5 2.5 0 0 1 2.5 2.5v11A2.5 2.5 0 0 1 18 18H6a2.5 2.5 0 0 1-2.5-2.5zm1.8 1.2 7.7 5.3 7.7-5.3v-.1H5.3zm14.2 9.8V8.6l-6.8 4.7a1.4 1.4 0 0 1-1.7 0L5.3 8.6v8.9z" />
      </svg>
    ),
  },
  {
    key: "phone",
    title: "Call us",
    value: "+254 7342345183",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M6.6 2.5h3l1.3 5.1-2.2 2.1a15.1 15.1 0 0 0 7.1 7.1l2.1-2.2 5.1 1.3v3a2.2 2.2 0 0 1-2.2 2.2A17.8 17.8 0 0 1 4.4 4.7 2.2 2.2 0 0 1 6.6 2.5Z" />
      </svg>
    ),
  },
];

export function ContactUs() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
    event.currentTarget.reset();
    window.setTimeout(() => setSent(false), 2400);
  }

  return (
    <section id="contact" className="contact-section">
      <div className="contact-inner">
        <h2 className="contact-title">CONTACT US</h2>

        <div className="contact-layout">
          <div className="contact-details" aria-label="Contact information">
            {contactDetails.map((item) => (
              <div key={item.key} className="contact-item">
                <span className="contact-icon" aria-hidden="true">
                  {item.icon}
                </span>
                <div className="contact-copy">
                  <span className="contact-label">{item.title}</span>
                  <span className="contact-value">{item.value}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="contact-form-panel">
            <form className="contact-form" onSubmit={handleSubmit}>
              <label className="field">
                <input
                  type="text"
                  placeholder="Full Name*"
                  aria-label="Full Name"
                  required
                />
              </label>

              <label className="field">
                <input
                  type="email"
                  placeholder="Email Address*"
                  aria-label="Email Address"
                  required
                />
              </label>

              <label className="field field-message">
                <textarea
                  placeholder="Your Message*"
                  aria-label="Your Message"
                  rows={5}
                  required
                />
              </label>

              <button type="submit" className="contact-submit">
                Send
              </button>

              {sent && (
                <div
                  className="contact-success"
                  role="status"
                  aria-live="polite"
                >
                  Message sent successfully.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
