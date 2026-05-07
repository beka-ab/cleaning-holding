import { Link } from "react-router-dom";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        background: "var(--dark-2)",
        borderTop: "1px solid rgba(201,168,76,0.12)",
        padding: "80px 60px 40px",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* TOP GRID */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr 1fr",
            gap: "60px",
            marginBottom: "72px",
          }}
        >
          {/* Brand */}
          <div>
            <Link to="/" style={{ textDecoration: "none" }}>
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.8rem",
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
                  opacity: 0.5,
                  textTransform: "uppercase",
                  marginTop: "3px",
                  marginBottom: "24px",
                }}
              >
                HOLDING
              </div>
            </Link>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.85rem",
                color: "var(--white)",
                opacity: 0.45,
                lineHeight: 1.9,
                maxWidth: "280px",
              }}
            >
              Premium residential and commercial cleaning services. Trusted by
              thousands since 2012.
            </p>
            {/* Social icons */}
            <div style={{ display: "flex", gap: "12px", marginTop: "28px" }}>
              {["f", "in", "ig"].map((s, i) => (
                <div
                  key={i}
                  style={{
                    width: "36px",
                    height: "36px",
                    border: "1px solid rgba(201,168,76,0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    fontFamily: "var(--font-body)",
                    fontSize: "0.7rem",
                    color: "var(--white)",
                    opacity: 0.5,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "var(--gold)";
                    e.currentTarget.style.opacity = "1";
                    e.currentTarget.style.color = "var(--gold)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(201,168,76,0.2)";
                    e.currentTarget.style.opacity = "0.5";
                    e.currentTarget.style.color = "var(--white)";
                  }}
                >
                  {s}
                </div>
              ))}
            </div>
          </div>

          {/* Pages */}
          <div>
            <div
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.65rem",
                letterSpacing: "4px",
                textTransform: "uppercase",
                color: "var(--gold)",
                marginBottom: "28px",
              }}
            >
              Pages
            </div>
            {[
              { to: "/", label: "Home" },
              { to: "/services", label: "Services" },
              { to: "/about", label: "About Us" },
              { to: "/contact", label: "Contact" },
            ].map((link, i) => (
              <Link
                key={i}
                to={link.to}
                style={{
                  display: "block",
                  textDecoration: "none",
                  fontFamily: "var(--font-body)",
                  fontSize: "0.85rem",
                  color: "var(--white)",
                  opacity: 0.5,
                  marginBottom: "14px",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.target.style.opacity = "1";
                  e.target.style.color = "var(--gold)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.opacity = "0.5";
                  e.target.style.color = "var(--white)";
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Services */}
          <div>
            <div
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.65rem",
                letterSpacing: "4px",
                textTransform: "uppercase",
                color: "var(--gold)",
                marginBottom: "28px",
              }}
            >
              Services
            </div>
            {[
              "Residential",
              "Commercial",
              "Deep Cleaning",
              "Move In/Out",
              "Post-Construction",
              "Recurring",
            ].map((s, i) => (
              <Link
                key={i}
                to="/services"
                style={{
                  display: "block",
                  textDecoration: "none",
                  fontFamily: "var(--font-body)",
                  fontSize: "0.85rem",
                  color: "var(--white)",
                  opacity: 0.5,
                  marginBottom: "14px",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.target.style.opacity = "1";
                  e.target.style.color = "var(--gold)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.opacity = "0.5";
                  e.target.style.color = "var(--white)";
                }}
              >
                {s}
              </Link>
            ))}
          </div>

          {/* Contact */}
          <div>
            <div
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.65rem",
                letterSpacing: "4px",
                textTransform: "uppercase",
                color: "var(--gold)",
                marginBottom: "28px",
              }}
            >
              Contact
            </div>
            {[
              { icon: "📍", text: "Batumi, Georgia" },
              { icon: "📞", text: "+995 599 90 46 11" },
              { icon: "✉️", text: "info@cleaningholding.ge" },
              { icon: "🕐", text: "Mon–Sun: 8:00 – 20:00" },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "10px",
                  marginBottom: "16px",
                  fontFamily: "var(--font-body)",
                  fontSize: "0.82rem",
                  color: "var(--white)",
                  opacity: 0.5,
                }}
              >
                <span style={{ fontSize: "0.85rem", marginTop: "1px" }}>
                  {item.icon}
                </span>
                {item.text}
              </div>
            ))}
          </div>
        </div>

        {/* DIVIDER */}
        <div
          style={{
            height: "1px",
            background: "rgba(201,168,76,0.1)",
            marginBottom: "32px",
          }}
        />

        {/* BOTTOM */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "16px",
          }}
        >
          <div
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.75rem",
              color: "var(--white)",
              opacity: 0.3,
              letterSpacing: "1px",
            }}
          >
            © {year} Cleaning Holding. All rights reserved.
          </div>
          <div
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.7rem",
              color: "var(--white)",
              opacity: 0.3,
              letterSpacing: "2px",
              textTransform: "uppercase",
            }}
          >
            Premium Cleaning Services
          </div>
        </div>
      </div>

      {/* Mobile responsive */}
      <style>{`
        @media (max-width: 768px) {
          footer > div > div:first-child {
            grid-template-columns: 1fr 1fr !important;
            gap: 40px !important;
          }
          footer {
            padding: 60px 24px 32px !important;
          }
        }
        @media (max-width: 480px) {
          footer > div > div:first-child {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
