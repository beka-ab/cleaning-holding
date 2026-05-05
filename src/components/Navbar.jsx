import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const links = [
    { to: "/", label: t("nav.home") },
    { to: "/services", label: t("nav.services") },
    { to: "/about", label: t("nav.about") },
    { to: "/contact", label: t("nav.contact") },
  ];

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: scrolled
          ? "16px clamp(24px, 5vw, 60px)"
          : "28px clamp(24px, 5vw, 60px)",
        background: scrolled ? "rgba(13,13,13,0.97)" : "transparent",
        borderBottom: scrolled ? "1px solid rgba(201,168,76,0.15)" : "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        transition: "all 0.4s ease",
        backdropFilter: scrolled ? "blur(12px)" : "none",
      }}
    >
      {/* Logo */}
      <Link to="/" style={{ textDecoration: "none" }}>
        <div>
          <div
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "1.6rem",
              fontWeight: 600,
              color: "var(--gold)",
              letterSpacing: "2px",
              lineHeight: 1,
            }}
          >
            CLEANING
          </div>
          <div
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.55rem",
              letterSpacing: "6px",
              color: "var(--white)",
              opacity: 0.7,
              textTransform: "uppercase",
              marginTop: "2px",
            }}
          >
            HOLDING
          </div>
        </div>
      </Link>

      {/* Desktop Nav */}
      <div
        style={{ display: "flex", gap: "40px", alignItems: "center" }}
        className="desktop-nav"
      >
        {links.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            style={{
              textDecoration: "none",
              fontFamily: "var(--font-body)",
              fontSize: "0.75rem",
              letterSpacing: "3px",
              textTransform: "uppercase",
              color:
                location.pathname === link.to ? "var(--gold)" : "var(--white)",
              opacity: location.pathname === link.to ? 1 : 0.75,
              transition: "all 0.3s ease",
              borderBottom:
                location.pathname === link.to
                  ? "1px solid var(--gold)"
                  : "1px solid transparent",
              paddingBottom: "2px",
            }}
          >
            {link.label}
          </Link>
        ))}

        {/* Language Switcher */}
        <LanguageSwitcher />

        {/* Book Now */}
        <Link
          to="/contact"
          style={{
            textDecoration: "none",
            fontFamily: "var(--font-body)",
            fontSize: "0.7rem",
            letterSpacing: "3px",
            textTransform: "uppercase",
            color: "var(--dark)",
            background: "var(--gold)",
            padding: "10px 28px",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) =>
            (e.target.style.background = "var(--gold-light)")
          }
          onMouseLeave={(e) => (e.target.style.background = "var(--gold)")}
        >
          {t("nav.book")}
        </Link>
      </div>

      {/* Mobile Hamburger */}
      <div
        style={{ display: "none", alignItems: "center", gap: "16px" }}
        className="mobile-controls"
      >
        <LanguageSwitcher />
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            display: "flex",
            flexDirection: "column",
            gap: "5px",
          }}
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{
                display: "block",
                width: "24px",
                height: "1px",
                background: "var(--gold)",
                transition: "all 0.3s ease",
              }}
            />
          ))}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "var(--dark)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "40px",
            zIndex: 999,
          }}
        >
          {/* Close button */}
          <button
            onClick={() => setMenuOpen(false)}
            style={{
              position: "absolute",
              top: "32px",
              right: "32px",
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "var(--gold)",
              fontSize: "1.5rem",
            }}
          >
            ✕
          </button>

          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              style={{
                textDecoration: "none",
                fontFamily: "var(--font-display)",
                fontSize: "2.5rem",
                color: "var(--white)",
                letterSpacing: "4px",
              }}
            >
              {link.label}
            </Link>
          ))}

          <Link
            to="/contact"
            style={{
              textDecoration: "none",
              fontFamily: "var(--font-body)",
              fontSize: "0.72rem",
              letterSpacing: "3px",
              textTransform: "uppercase",
              color: "var(--dark)",
              background: "var(--gold)",
              padding: "14px 40px",
              marginTop: "16px",
            }}
          >
            {t("nav.book")}
          </Link>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-controls { display: flex !important; }
        }
      `}</style>
    </nav>
  );
}
