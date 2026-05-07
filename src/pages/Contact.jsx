import { Helmet } from "react-helmet-async";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return [ref, inView];
}

export default function Contact() {
  const [heroVisible, setHeroVisible] = useState(false);
  const [formRef, formInView] = useInView();
  const [infoRef, infoInView] = useInView();
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => setHeroVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_h7h1uev",
        "template_ucjm7kc",
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          service: formData.service,
          message: formData.message,
        },
        "M_Ao_SwtymIwHpjFN",
      )
      .then(() => {
        setSubmitted(true);
      })
      .catch((err) => {
        console.error("EmailJS error:", err);
        alert("Failed to send. Please try again.");
      });
  };

  const contactInfo = [
    { icon: "📍", label: t("contact.address"), value: "Batumi, Georgia" },
    { icon: "📞", label: t("contact.phoneLabel"), value: "+995 555 123 456" },
    {
      icon: "✉️",
      label: t("contact.emailLabel"),
      value: "info@cleaningholding.ge",
    },
    {
      icon: "🕐",
      label: t("contact.hoursLabel"),
      value: "Mon–Sun: 8:00 – 20:00",
    },
  ];

  const inputStyle = (name) => ({
    width: "100%",
    background: "transparent",
    border: "none",
    borderBottom: `1px solid ${focused === name ? "var(--gold)" : "rgba(255,255,255,0.15)"}`,
    padding: "14px 0",
    fontFamily: "var(--font-body)",
    fontSize: "0.9rem",
    color: "var(--white)",
    outline: "none",
    transition: "border-color 0.3s ease",
    marginBottom: "36px",
  });

  const labelStyle = {
    fontFamily: "var(--font-body)",
    fontSize: "0.65rem",
    letterSpacing: "3px",
    textTransform: "uppercase",
    color: "var(--gold)",
    display: "block",
    marginBottom: "4px",
  };

  return (
    <>
      <Helmet>
        <title>{t("contact.pageTitle")}</title>
        <meta name="description" content={t("contact.pageMeta")} />
        <meta
          name="keywords"
          content="contact cleaning holding, cleaning quote, book cleaning service, cleaning Tbilisi"
        />
      </Helmet>

      {/* HERO */}
      <section
        style={{
          minHeight: "50vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "140px clamp(24px, 5vw, 60px) 80px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse at 50% 50%, rgba(201,168,76,0.06) 0%, transparent 70%)",
          }}
        />
        <div style={{ position: "relative", zIndex: 1 }}>
          <div
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.65rem",
              letterSpacing: "6px",
              textTransform: "uppercase",
              color: "var(--gold)",
              marginBottom: "24px",
              opacity: heroVisible ? 1 : 0,
              transition: "all 0.8s ease 0.1s",
            }}
          >
            {t("contact.label")}
          </div>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.5rem, 7vw, 5rem)",
              fontWeight: 300,
              color: "var(--white)",
              marginBottom: "24px",
              opacity: heroVisible ? 1 : 0,
              transition: "all 0.8s ease 0.25s",
            }}
          >
            {t("contact.title")}
          </h1>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.95rem",
              color: "var(--white)",
              opacity: heroVisible ? 0.5 : 0,
              maxWidth: "480px",
              lineHeight: 1.8,
              transition: "all 0.8s ease 0.4s",
            }}
          >
            {t("contact.subtitle")}
          </p>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "40px clamp(24px, 5vw, 60px) 120px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "100px",
          alignItems: "start",
        }}
      >
        {/* FORM */}
        <div
          ref={formRef}
          style={{
            opacity: formInView ? 1 : 0,
            transform: formInView ? "translateX(0)" : "translateX(-40px)",
            transition: "all 0.9s ease",
          }}
        >
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "2rem",
              fontWeight: 300,
              color: "var(--white)",
              marginBottom: "8px",
            }}
          >
            {t("contact.formTitle")}
          </h2>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.8rem",
              color: "var(--white)",
              opacity: 0.4,
              marginBottom: "48px",
              letterSpacing: "1px",
            }}
          >
            {t("contact.formSub")}
          </p>

          {submitted ? (
            <div
              style={{
                padding: "48px 40px",
                textAlign: "center",
                border: "1px solid rgba(201,168,76,0.3)",
                background: "rgba(201,168,76,0.05)",
              }}
            >
              <div style={{ fontSize: "2.5rem", marginBottom: "20px" }}>✨</div>
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.8rem",
                  color: "var(--gold)",
                  marginBottom: "12px",
                  fontWeight: 300,
                }}
              >
                {t("contact.successTitle")}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.85rem",
                  color: "var(--white)",
                  opacity: 0.6,
                  lineHeight: 1.8,
                }}
              >
                {t("contact.successMsg")}
              </p>
            </div>
          ) : (
            <div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "24px",
                }}
              >
                <div>
                  <label style={labelStyle}>{t("contact.name")}</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => setFocused("name")}
                    onBlur={() => setFocused("")}
                    placeholder="John Smith"
                    style={{ ...inputStyle("name"), marginBottom: "36px" }}
                  />
                </div>
                <div>
                  <label style={labelStyle}>{t("contact.email")}</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocused("email")}
                    onBlur={() => setFocused("")}
                    placeholder="john@email.com"
                    style={{ ...inputStyle("email"), marginBottom: "36px" }}
                  />
                </div>
              </div>

              <label style={labelStyle}>{t("contact.phone")}</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                onFocus={() => setFocused("phone")}
                onBlur={() => setFocused("")}
                placeholder="+995 555 000 000"
                style={inputStyle("phone")}
              />

              <label style={labelStyle}>{t("contact.service")}</label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                onFocus={() => setFocused("service")}
                onBlur={() => setFocused("")}
                style={{
                  ...inputStyle("service"),
                  cursor: "pointer",
                  appearance: "none",
                }}
              >
                <option value="" style={{ background: "#0D0D0D" }}>
                  {t("contact.selectService")}
                </option>
                <option value="residential" style={{ background: "#0D0D0D" }}>
                  {t("contact.services.residential")}
                </option>
                <option value="commercial" style={{ background: "#0D0D0D" }}>
                  {t("contact.services.commercial")}
                </option>
                <option value="deep" style={{ background: "#0D0D0D" }}>
                  {t("contact.services.deep")}
                </option>
                <option value="moveinout" style={{ background: "#0D0D0D" }}>
                  {t("contact.services.moveinout")}
                </option>
                <option
                  value="postconstruction"
                  style={{ background: "#0D0D0D" }}
                >
                  {t("contact.services.postconstruction")}
                </option>
                <option value="recurring" style={{ background: "#0D0D0D" }}>
                  {t("contact.services.recurring")}
                </option>
              </select>

              <label style={labelStyle}>{t("contact.message")}</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                onFocus={() => setFocused("message")}
                onBlur={() => setFocused("")}
                placeholder="Tell us about your space and what you need..."
                rows={4}
                style={{
                  ...inputStyle("message"),
                  resize: "none",
                  display: "block",
                  borderBottom: `1px solid ${focused === "message" ? "var(--gold)" : "rgba(255,255,255,0.15)"}`,
                }}
              />

              <button
                onClick={handleSubmit}
                style={{
                  marginTop: "8px",
                  width: "100%",
                  padding: "18px",
                  background: "var(--gold)",
                  border: "none",
                  fontFamily: "var(--font-body)",
                  fontSize: "0.72rem",
                  letterSpacing: "3px",
                  textTransform: "uppercase",
                  color: "var(--dark)",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) =>
                  (e.target.style.background = "var(--gold-light)")
                }
                onMouseLeave={(e) =>
                  (e.target.style.background = "var(--gold)")
                }
              >
                {t("contact.send")}
              </button>
            </div>
          )}
        </div>

        {/* CONTACT INFO */}
        <div
          ref={infoRef}
          style={{
            opacity: infoInView ? 1 : 0,
            transform: infoInView ? "translateX(0)" : "translateX(40px)",
            transition: "all 0.9s ease 0.2s",
          }}
        >
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "2rem",
              fontWeight: 300,
              color: "var(--white)",
              marginBottom: "8px",
            }}
          >
            {t("contact.infoTitle")}
          </h2>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.8rem",
              color: "var(--white)",
              opacity: 0.4,
              marginBottom: "48px",
              letterSpacing: "1px",
            }}
          >
            {t("contact.infoSub")}
          </p>

          <div style={{ display: "flex", flexDirection: "column" }}>
            {contactInfo.map((item, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "24px",
                  padding: "28px 0",
                  borderBottom: "1px solid rgba(201,168,76,0.08)",
                }}
              >
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    flexShrink: 0,
                    background: "rgba(201,168,76,0.08)",
                    border: "1px solid rgba(201,168,76,0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.1rem",
                  }}
                >
                  {item.icon}
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.62rem",
                      letterSpacing: "3px",
                      textTransform: "uppercase",
                      color: "var(--gold)",
                      marginBottom: "6px",
                    }}
                  >
                    {item.label}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.95rem",
                      color: "var(--white)",
                      opacity: 0.8,
                    }}
                  >
                    {item.value}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Why Choose Us */}
          <div
            style={{
              marginTop: "48px",
              padding: "36px",
              background: "var(--dark-2)",
              border: "1px solid rgba(201,168,76,0.1)",
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.65rem",
                letterSpacing: "4px",
                textTransform: "uppercase",
                color: "var(--gold)",
                marginBottom: "20px",
              }}
            >
              {t("contact.whyTitle")}
            </div>
            {[
              t("contact.why1"),
              t("contact.why2"),
              t("contact.why3"),
              t("contact.why4"),
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  marginBottom: "12px",
                  fontFamily: "var(--font-body)",
                  fontSize: "0.85rem",
                  color: "var(--white)",
                  opacity: 0.65,
                }}
              >
                <span style={{ color: "var(--gold)", fontSize: "0.5rem" }}>
                  ◆
                </span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
