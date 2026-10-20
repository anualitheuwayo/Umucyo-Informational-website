type FooterProps = {
  onNavigate: (page: string) => void;
};

const quickLinks = [
  { label: "Home", page: "home" },
  { label: "Who We Are", page: "who-we-are" },
  { label: "How It Works", page: "how-it-works" },
  { label: "Team", page: "team" },
  { label: "FAQ", page: "faq" },
  { label: "Contact Us", page: "contact" },
];

const socialLinks = [
  {
    name: "X",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          className="icon-fill"
          d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
        />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle className="icon-fill" cx="17.2" cy="6.8" r="1.2" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          className="icon-fill"
          d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.75h4V21H3zM9.5 9.75h3.83v1.54h.05c.53-1 1.84-2.06 3.78-2.06 4.04 0 4.79 2.66 4.79 6.12V21h-4v-4.9c0-1.17-.02-2.67-1.63-2.67-1.63 0-1.88 1.27-1.88 2.59V21h-4z"
        />
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          className="icon-fill"
          d="M13.5 21v-8h2.7l.4-3.2h-3.1V7.8c0-.9.3-1.5 1.6-1.5h1.7V3.4c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.5-4 4.1v2.4H7.7V13h2.7v8z"
        />
      </svg>
    ),
  },
];

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-logo">
          <a
            href="#home"
            aria-label="Home"
            onClick={(event) => {
              event.preventDefault();
              onNavigate("home");
            }}
          >
            <img src="/images/logo-light.png" alt="Sulwe logo" />
          </a>
        </div>

        <div className="footer-quick-links">
          <h3>Quick links</h3>
          <nav aria-label="Footer navigation">
            {quickLinks.map((link) => (
              <button
                key={link.page}
                type="button"
                onClick={() => onNavigate(link.page)}
              >
                {link.label}
              </button>
            ))}
          </nav>
        </div>

        <div className="footer-follow">
          <h3>Follow us</h3>
          <div className="footer-social-links">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                aria-label={social.name}
                target="_blank"
                rel="noreferrer"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} UMUCYO. All rights reserved.
      </div>
    </footer>
  );
}
