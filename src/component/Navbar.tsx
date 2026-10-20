import { useState } from "react";

type NavbarProps = {
  activePage: string;
  onNavigate: (page: string) => void;
};

const navigationItems = [
  { label: "Home", page: "home" },
  { label: "Who We Are", page: "who-we-are" },
  { label: "How It Works", page: "how-it-works" },
  { label: "Team", page: "team" },
  { label: "FAQ", page: "faq" },
  { label: "Contact Us", page: "contact" },
];

export function Navbar({ activePage, onNavigate }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  function handleNavigation(page: string) {
    setMenuOpen(false);
    onNavigate(page);
  }

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <a
          href="#home"
          className="navbar-logo"
          aria-label="Home"
          onClick={(event) => {
            event.preventDefault();
            handleNavigation("home");
          }}
        >
          <img src="/images/logo.png" alt="Sulwe logo" />
        </a>

        <button
          type="button"
          className={`mobile-menu-toggle ${menuOpen ? "menu-open" : ""}`}
          aria-label={
            menuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav
          id="main-navigation"
          className={`navbar-links ${menuOpen ? "mobile-menu-open" : ""}`}
          aria-label="Main navigation"
        >
          {navigationItems.map((item) => (
            <button
              key={item.page}
              type="button"
              className={`nav-link ${
                activePage === item.page ? "active" : ""
              } ${item.page === "contact" ? "contact-link" : ""}`}
              aria-current={activePage === item.page ? "page" : undefined}
              onClick={() => handleNavigation(item.page)}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}
