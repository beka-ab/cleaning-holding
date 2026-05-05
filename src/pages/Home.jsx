import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

function WipeAnimation() {
  return (
    <>
      <style>{`
        @keyframes wipe1 {
          0% { transform: translateX(-100%) rotate(-15deg); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 0.6; }
          100% { transform: translateX(120vw) rotate(-15deg); opacity: 0; }
        }
        @keyframes wipe2 {
          0% { transform: translateX(-100%) rotate(-10deg); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 0.4; }
          100% { transform: translateX(120vw) rotate(-10deg); opacity: 0; }
        }
        @keyframes wipe3 {
          0% { transform: translateX(-100%) rotate(-20deg); opacity: 0; }
          10% { opacity: 0.6; }
          90% { opacity: 0.3; }
          100% { transform: translateX(120vw) rotate(-20deg); opacity: 0; }
        }
        @keyframes shimmer {
          0% { opacity: 0.03; }
          50% { opacity: 0.07; }
          100% { opacity: 0.03; }
        }
      `}</style>
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
          background:
            "linear-gradient(135deg, transparent 30%, rgba(201,168,76,0.06) 50%, transparent 70%)",
          animation: "shimmer 4s ease infinite",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "18%",
          left: 0,
          zIndex: 0,
          pointerEvents: "none",
          width: "60vw",
          height: "2px",
          background:
            "linear-gradient(90deg, transparent, rgba(201,168,76,0.25), rgba(201,168,76,0.5), rgba(201,168,76,0.25), transparent)",
          animation: "wipe1 5s ease-in-out infinite",
          animationDelay: "0.5s",
          filter: "blur(1px)",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "42%",
          left: 0,
          zIndex: 0,
          pointerEvents: "none",
          width: "80vw",
          height: "1px",
          background:
            "linear-gradient(90deg, transparent, rgba(201,168,76,0.15), rgba(201,168,76,0.4), rgba(201,168,76,0.15), transparent)",
          animation: "wipe2 7s ease-in-out infinite",
          animationDelay: "2s",
          filter: "blur(0.5px)",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "68%",
          left: 0,
          zIndex: 0,
          pointerEvents: "none",
          width: "50vw",
          height: "1.5px",
          background:
            "linear-gradient(90deg, transparent, rgba(201,168,76,0.1), rgba(201,168,76,0.3), rgba(201,168,76,0.1), transparent)",
          animation: "wipe3 6s ease-in-out infinite",
          animationDelay: "1s",
          filter: "blur(1px)",
        }}
      />
      {[
        { top: "25%", left: "10%", delay: "0s", dur: "6s" },
        { top: "60%", left: "85%", delay: "2s", dur: "8s" },
        { top: "80%", left: "20%", delay: "4s", dur: "7s" },
        { top: "35%", left: "75%", delay: "1s", dur: "9s" },
      ].map((p, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            top: p.top,
            left: p.left,
            width: "3px",
            height: "3px",
            borderRadius: "50%",
            background: "var(--gold)",
            zIndex: 0,
            pointerEvents: "none",
            animation: `shimmer ${p.dur} ease infinite`,
            animationDelay: p.delay,
            opacity: 0.4,
          }}
        />
      ))}
    </>
  );
}

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

function PartnersStrip() {
  const { t } = useTranslation();
  const logos = [
    {
      src: "/logos/logo_vakhtangadze.jpg",
      alt: "Mukhran Vakhtangadze Batumi Sports Palace",
    },
    { src: "/logos/logo_metrocity.jpg", alt: "Metro City Forum" },
    { src: "/logos/logo_alliance.webp", alt: "Alliance Palace" },
    {
      src: "/logos/logo_eurochampionship.jpeg",
      alt: "Batumi 2026 EWF Championships",
    },
    { src: "/logos/logo_sportcenter.jpg", alt: "Batumi Sport Center" },
  ];
  const allLogos = [...logos, ...logos, ...logos];

  return (
    <div
      style={{
        width: "100%",
        borderTop: "1px solid rgba(201,168,76,0.12)",
        borderBottom: "1px solid rgba(201,168,76,0.12)",
        background: "rgba(255,255,255,0.02)",
        padding: "36px 0",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          left: "0",
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 2,
          background: "linear-gradient(90deg, var(--dark) 65%, transparent)",
          padding: "0 40px 0 24px",
          height: "100%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.58rem",
            letterSpacing: "4px",
            textTransform: "uppercase",
            color: "var(--gold)",
            opacity: 0.7,
            whiteSpace: "nowrap",
          }}
        >
          {t("partners")}
        </span>
      </div>
      <div
        style={{
          position: "absolute",
          right: 0,
          top: 0,
          bottom: 0,
          width: "120px",
          zIndex: 2,
          background: "linear-gradient(270deg, var(--dark) 40%, transparent)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "24px",
          animation: "scrollLogos 28s linear infinite",
          width: "max-content",
          paddingLeft: "180px",
        }}
      >
        {allLogos.map((logo, i) => (
          <div
            key={i}
            style={{
              flexShrink: 0,
              width: "160px",
              height: "90px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "4px",
              padding: "12px 16px",
              opacity: 0.7,
              transition: "all 0.3s ease",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = "1";
              e.currentTarget.style.background = "rgba(255,255,255,0.15)";
              e.currentTarget.style.borderColor = "rgba(201,168,76,0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = "0.7";
              e.currentTarget.style.background = "rgba(255,255,255,0.08)";
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
            }}
          >
            <img
              src={logo.src}
              alt={logo.alt}
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
                objectFit: "contain",
              }}
            />
          </div>
        ))}
      </div>
      <style>{`
        @keyframes scrollLogos {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
      `}</style>
    </div>
  );
}

export default function Home() {
  const [heroVisible, setHeroVisible] = useState(false);
  const [statsRef, statsInView] = useInView();
  const [servicesRef, servicesInView] = useInView();
  const [ctaRef, ctaInView] = useInView();
  const { t } = useTranslation();

  useEffect(() => {
    const timer = setTimeout(() => setHeroVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const stats = [
    { value: "12+", label: t("stats.exp") },
    { value: "3,800+", label: t("stats.clients") },
    { value: "99%", label: t("stats.satisfaction") },
    { value: "24/7", label: t("stats.support") },
  ];

  const services = [
    {
      icon: "🏠",
      title: t("services.residential.title"),
      desc: t("services.residential.desc"),
    },
    {
      icon: "🏢",
      title: t("services.commercial.title"),
      desc: t("services.commercial.desc"),
    },
    {
      icon: "✨",
      title: t("services.deep.title"),
      desc: t("services.deep.desc"),
    },
    {
      icon: "📦",
      title: t("services.move.title"),
      desc: t("services.move.desc"),
    },
  ];

  return (
    <>
      <Helmet>
        <title>Cleaning Holding — Luxury Cleaning Services</title>
        <meta
          name="description"
          content="Cleaning Holding offers premium residential and commercial cleaning services. Experience white-glove cleaning with 12+ years of excellence."
        />
        <meta
          property="og:title"
          content="Cleaning Holding — Luxury Cleaning Services"
        />
        <meta
          property="og:description"
          content="Premium residential and commercial cleaning services with 12+ years of excellence."
        />
        <meta
          name="keywords"
          content="luxury cleaning service, residential cleaning, commercial cleaning, deep cleaning, professional cleaners"
        />
      </Helmet>

      {/* HERO */}
      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "0 clamp(24px, 5vw, 60px)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 0,
            background:
              "radial-gradient(ellipse at 60% 40%, rgba(201,168,76,0.07) 0%, transparent 65%), radial-gradient(ellipse at 20% 80%, rgba(201,168,76,0.04) 0%, transparent 50%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 0,
            backgroundImage:
              "linear-gradient(rgba(201,168,76,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.03) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
        <WipeAnimation />

        <div style={{ position: "relative", zIndex: 1, maxWidth: "860px" }}>
          <div
            style={{
              display: "inline-block",
              fontFamily: "var(--font-body)",
              fontSize: "0.65rem",
              letterSpacing: "6px",
              textTransform: "uppercase",
              color: "var(--gold)",
              border: "1px solid rgba(201,168,76,0.3)",
              padding: "8px 24px",
              marginBottom: "48px",
              opacity: heroVisible ? 1 : 0,
              transform: heroVisible ? "translateY(0)" : "translateY(20px)",
              transition: "all 0.8s ease 0.1s",
            }}
          >
            {t("hero.badge")}
          </div>

          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.8rem, 8vw, 6.5rem)",
              fontWeight: 300,
              lineHeight: 1.05,
              color: "var(--white)",
              marginBottom: "12px",
              opacity: heroVisible ? 1 : 0,
              transform: heroVisible ? "translateY(0)" : "translateY(30px)",
              transition: "all 0.9s ease 0.25s",
            }}
          >
            {t("hero.line1")}
          </h1>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.8rem, 8vw, 6.5rem)",
              fontWeight: 600,
              lineHeight: 1.05,
              color: "var(--gold)",
              marginBottom: "36px",
              opacity: heroVisible ? 1 : 0,
              transform: heroVisible ? "translateY(0)" : "translateY(30px)",
              transition: "all 0.9s ease 0.4s",
            }}
          >
            {t("hero.line2")}
          </h1>

          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "1rem",
              fontWeight: 300,
              color: "var(--white)",
              opacity: heroVisible ? 0.6 : 0,
              maxWidth: "520px",
              margin: "0 auto 56px",
              lineHeight: 1.9,
              transform: heroVisible ? "translateY(0)" : "translateY(20px)",
              transition: "all 0.9s ease 0.55s",
            }}
          >
            {t("hero.sub")}
          </p>

          <div
            style={{
              display: "flex",
              gap: "20px",
              justifyContent: "center",
              flexWrap: "wrap",
              opacity: heroVisible ? 1 : 0,
              transform: heroVisible ? "translateY(0)" : "translateY(20px)",
              transition: "all 0.9s ease 0.7s",
            }}
          >
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
                padding: "18px 48px",
                transition: "all 0.3s ease",
                display: "inline-block",
              }}
              onMouseEnter={(e) =>
                (e.target.style.background = "var(--gold-light)")
              }
              onMouseLeave={(e) => (e.target.style.background = "var(--gold)")}
            >
              {t("hero.btn1")}
            </Link>
            <Link
              to="/services"
              style={{
                textDecoration: "none",
                fontFamily: "var(--font-body)",
                fontSize: "0.72rem",
                letterSpacing: "3px",
                textTransform: "uppercase",
                color: "var(--gold)",
                border: "1px solid rgba(201,168,76,0.4)",
                padding: "18px 48px",
                transition: "all 0.3s ease",
                display: "inline-block",
              }}
              onMouseEnter={(e) => {
                e.target.style.borderColor = "var(--gold)";
                e.target.style.background = "rgba(201,168,76,0.05)";
              }}
              onMouseLeave={(e) => {
                e.target.style.borderColor = "rgba(201,168,76,0.4)";
                e.target.style.background = "transparent";
              }}
            >
              {t("hero.btn2")}
            </Link>
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            bottom: "40px",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "8px",
            opacity: heroVisible ? 0.4 : 0,
            transition: "opacity 1s ease 1.2s",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.6rem",
              letterSpacing: "3px",
              textTransform: "uppercase",
            }}
          >
            {t("hero.scroll")}
          </span>
          <div
            style={{
              width: "1px",
              height: "48px",
              background: "linear-gradient(var(--gold), transparent)",
              animation: "pulse 2s ease infinite",
            }}
          />
        </div>
      </section>

      <PartnersStrip />

      {/* STATS */}
      <section
        ref={statsRef}
        style={{
          padding: "80px clamp(24px, 5vw, 60px)",
          borderTop: "1px solid rgba(201,168,76,0.1)",
          borderBottom: "1px solid rgba(201,168,76,0.1)",
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "40px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {stats.map((stat, i) => (
          <div
            key={i}
            style={{
              textAlign: "center",
              opacity: statsInView ? 1 : 0,
              transform: statsInView ? "translateY(0)" : "translateY(30px)",
              transition: `all 0.7s ease ${i * 0.15}s`,
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "3rem",
                fontWeight: 300,
                color: "var(--gold)",
                lineHeight: 1,
              }}
            >
              {stat.value}
            </div>
            <div
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.7rem",
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: "var(--white)",
                opacity: 0.5,
                marginTop: "8px",
              }}
            >
              {stat.label}
            </div>
          </div>
        ))}
      </section>

      {/* SERVICES PREVIEW */}
      <section
        ref={servicesRef}
        style={{
          padding: "120px clamp(24px, 5vw, 60px)",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            textAlign: "center",
            marginBottom: "80px",
            opacity: servicesInView ? 1 : 0,
            transform: servicesInView ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.7s ease",
          }}
        >
          <div
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.65rem",
              letterSpacing: "5px",
              textTransform: "uppercase",
              color: "var(--gold)",
              marginBottom: "16px",
            }}
          >
            {t("services.label")}
          </div>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: 300,
              color: "var(--white)",
            }}
          >
            {t("services.title")}
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "2px",
          }}
        >
          {services.map((s, i) => (
            <div
              key={i}
              style={{
                padding: "48px 40px",
                background: "var(--dark-2)",
                border: "1px solid rgba(201,168,76,0.08)",
                cursor: "pointer",
                opacity: servicesInView ? 1 : 0,
                transform: servicesInView
                  ? "translateY(0)"
                  : "translateY(40px)",
                transition: `all 0.7s ease ${0.1 + i * 0.15}s`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(201,168,76,0.35)";
                e.currentTarget.style.background = "var(--dark-3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(201,168,76,0.08)";
                e.currentTarget.style.background = "var(--dark-2)";
              }}
            >
              <div style={{ fontSize: "2rem", marginBottom: "24px" }}>
                {s.icon}
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.4rem",
                  fontWeight: 400,
                  color: "var(--white)",
                  marginBottom: "16px",
                }}
              >
                {s.title}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.85rem",
                  color: "var(--white)",
                  opacity: 0.5,
                  lineHeight: 1.8,
                }}
              >
                {s.desc}
              </p>
              <div
                style={{
                  marginTop: "32px",
                  fontFamily: "var(--font-body)",
                  fontSize: "0.65rem",
                  letterSpacing: "3px",
                  textTransform: "uppercase",
                  color: "var(--gold)",
                }}
              >
                {t("services.learnMore")} →
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "60px" }}>
          <Link
            to="/services"
            style={{
              textDecoration: "none",
              fontFamily: "var(--font-body)",
              fontSize: "0.72rem",
              letterSpacing: "3px",
              textTransform: "uppercase",
              color: "var(--gold)",
              border: "1px solid rgba(201,168,76,0.4)",
              padding: "16px 48px",
              transition: "all 0.3s ease",
              display: "inline-block",
            }}
          >
            {t("services.viewAll")}
          </Link>
        </div>
      </section>

      {/* CTA BANNER */}
      <section
        ref={ctaRef}
        style={{
          padding: "100px clamp(24px, 5vw, 60px)",
          textAlign: "center",
          background:
            "linear-gradient(135deg, rgba(201,168,76,0.08) 0%, transparent 100%)",
          borderTop: "1px solid rgba(201,168,76,0.1)",
          opacity: ctaInView ? 1 : 0,
          transform: ctaInView ? "translateY(0)" : "translateY(30px)",
          transition: "all 0.8s ease",
        }}
      >
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            fontWeight: 300,
            color: "var(--white)",
            marginBottom: "16px",
          }}
        >
          {t("cta.title")}
        </h2>
        <p
          style={{
            fontFamily: "var(--font-body)",
            color: "var(--white)",
            opacity: 0.5,
            marginBottom: "48px",
            fontSize: "0.9rem",
          }}
        >
          {t("cta.sub")}
        </p>
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
            padding: "18px 56px",
            display: "inline-block",
            transition: "all 0.3s ease",
          }}
        >
          {t("cta.btn")}
        </Link>
      </section>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; } 50% { opacity: 0.3; }
        }
        @media (max-width: 768px) {
          section[style*="repeat(4"] {
            grid-template-columns: repeat(2, 1fr) !important;
            padding: 60px 24px !important;
          }
        }
      `}</style>
    </>
  );
}
