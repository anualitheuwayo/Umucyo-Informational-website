type FooterProps = {
  onNavigate: (_page: string) => void;
};

const quickLinks = [
  { label: "Home", page: "home" },
  { label: "Who We Are", page: "who-we-are" },
  { label: "What We Do", page: "what-we-do" },
  { label: "How It Works", page: "how-it-works" },
  { label: "Team", page: "team" },
  { label: "FAQ", page: "faq" },
  { label: "Contact Us", page: "contact" },
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
            <img src="/images/logo-light.png" alt="Umucyo logo" />
          </a>
        </div>

        <div className="footer-quick-links">
          <h3>Quick links</h3>
          <nav aria-label="Footer navigation">
            {quickLinks.map((link) => (
              <button key={link.page} type="button" onClick={() => onNavigate(link.page)}>
                {link.label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} UMUCYO. All rights reserved.
      </div>
    </footer>
  );
}
