import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

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

const team = [
  { name: "Alexander Petrov", role: "Founder & CEO", exp: "12", initial: "AP" },
  {
    name: "Marina Kostava",
    role: "Operations Director",
    exp: "9",
    initial: "MK",
  },
  {
    name: "David Beridze",
    role: "Head of Residential",
    exp: "7",
    initial: "DB",
  },
  {
    name: "Nino Kvaratskhelia",
    role: "Head of Commercial",
    exp: "8",
    initial: "NK",
  },
];

export default function About() {
  const [heroVisible, setHeroVisible] = useState(false);
  const [storyRef, storyInView] = useInView();
  const [valuesRef, valuesInView] = useInView();
  const [teamRef, teamInView] = useInView();
  const [ctaRef, ctaInView] = useInView();
  const { t } = useTranslation();

  useEffect(() => {
    const timer = setTimeout(() => setHeroVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const values = [
    {
      icon: "💎",
      title: t("about.values.v1.title"),
      desc: t("about.values.v1.desc"),
    },
    {
      icon: "🤝",
      title: t("about.values.v2.title"),
      desc: t("about.values.v2.desc"),
    },
    {
      icon: "⏱️",
      title: t("about.values.v3.title"),
      desc: t("about.values.v3.desc"),
    },
    {
      icon: "🌿",
      title: t("about.values.v4.title"),
      desc: t("about.values.v4.desc"),
    },
  ];

  return (
    <>
      <Helmet>
        <title>{t("about.pageTitle")}</title>
        <meta name="description" content={t("about.pageMeta")} />
        <meta
          name="keywords"
          content="about cleaning holding, professional cleaning team, cleaning company history, trusted cleaners"
        />
      </Helmet>

      {/* HERO */}
      <section
        style={{
          minHeight: "55vh",
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
            {t("about.label")}
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
            {t("about.title")}
          </h1>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.95rem",
              color: "var(--white)",
              opacity: heroVisible ? 0.5 : 0,
              maxWidth: "500px",
              lineHeight: 1.8,
              transition: "all 0.8s ease 0.4s",
            }}
          >
            {t("about.subtitle")}
          </p>
        </div>
      </section>

      {/* STORY */}
      <section
        ref={storyRef}
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "80px clamp(24px, 5vw, 60px)",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "100px",
          alignItems: "center",
        }}
      >
        <div
          style={{
            opacity: storyInView ? 1 : 0,
            transform: storyInView ? "translateX(0)" : "translateX(-40px)",
            transition: "all 0.9s ease",
          }}
        >
          <div
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.65rem",
              letterSpacing: "5px",
              textTransform: "uppercase",
              color: "var(--gold)",
              marginBottom: "20px",
            }}
          >
            {t("about.since")}
          </div>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 300,
              color: "var(--white)",
              marginBottom: "28px",
              lineHeight: 1.2,
            }}
          >
            {t("about.storyTitle")}
          </h2>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.9rem",
              color: "var(--white)",
              opacity: 0.6,
              lineHeight: 1.9,
              marginBottom: "20px",
            }}
          >
            {t("about.story1")}
          </p>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.9rem",
              color: "var(--white)",
              opacity: 0.6,
              lineHeight: 1.9,
            }}
          >
            {t("about.story2")}
          </p>
        </div>

        <div
          style={{
            opacity: storyInView ? 1 : 0,
            transform: storyInView ? "translateX(0)" : "translateX(40px)",
            transition: "all 0.9s ease 0.2s",
          }}
        >
          <div
            style={{
              border: "1px solid rgba(201,168,76,0.2)",
              padding: "48px 40px",
              position: "relative",
              background: "var(--dark-2)",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "-20px",
                left: "40px",
                fontFamily: "var(--font-display)",
                fontSize: "5rem",
                color: "var(--gold)",
                lineHeight: 1,
                opacity: 0.4,
              }}
            >
              "
            </div>
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.3rem",
                fontWeight: 300,
                color: "var(--white)",
                lineHeight: 1.7,
                fontStyle: "italic",
                marginBottom: "32px",
                marginTop: "20px",
              }}
            >
              {t("about.quote")}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "50%",
                  background: "rgba(201,168,76,0.15)",
                  border: "1px solid rgba(201,168,76,0.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "var(--font-display)",
                  color: "var(--gold)",
                  fontSize: "0.9rem",
                }}
              >
                AP
              </div>
              <div>
                <div
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.8rem",
                    color: "var(--white)",
                    letterSpacing: "1px",
                  }}
                >
                  Alexander Petrov
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.65rem",
                    color: "var(--gold)",
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                  }}
                >
                  Founder & CEO
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section
        ref={valuesRef}
        style={{
          padding: "100px clamp(24px, 5vw, 60px)",
          background: "var(--dark-2)",
          borderTop: "1px solid rgba(201,168,76,0.1)",
          borderBottom: "1px solid rgba(201,168,76,0.1)",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div
            style={{
              textAlign: "center",
              marginBottom: "72px",
              opacity: valuesInView ? 1 : 0,
              transform: valuesInView ? "translateY(0)" : "translateY(30px)",
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
              {t("about.valuesLabel")}
            </div>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 300,
                color: "var(--white)",
              }}
            >
              {t("about.valuesTitle")}
            </h2>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "32px",
            }}
          >
            {values.map((v, i) => (
              <div
                key={i}
                style={{
                  padding: "40px 32px",
                  border: "1px solid rgba(201,168,76,0.08)",
                  background: "var(--dark)",
                  opacity: valuesInView ? 1 : 0,
                  transform: valuesInView
                    ? "translateY(0)"
                    : "translateY(30px)",
                  transition: `all 0.7s ease ${i * 0.15}s`,
                }}
              >
                <div style={{ fontSize: "2rem", marginBottom: "20px" }}>
                  {v.icon}
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.3rem",
                    color: "var(--white)",
                    marginBottom: "12px",
                    fontWeight: 400,
                  }}
                >
                  {v.title}
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
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section
        ref={teamRef}
        style={{
          padding: "100px clamp(24px, 5vw, 60px)",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            textAlign: "center",
            marginBottom: "72px",
            opacity: teamInView ? 1 : 0,
            transform: teamInView ? "translateY(0)" : "translateY(30px)",
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
            {t("about.teamLabel")}
          </div>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 300,
              color: "var(--white)",
            }}
          >
            {t("about.teamTitle")}
          </h2>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "32px",
          }}
        >
          {team.map((member, i) => (
            <div
              key={i}
              style={{
                padding: "40px 32px",
                textAlign: "center",
                border: "1px solid rgba(201,168,76,0.08)",
                background: "var(--dark-2)",
                opacity: teamInView ? 1 : 0,
                transform: teamInView ? "translateY(0)" : "translateY(30px)",
                transition: `all 0.7s ease ${i * 0.15}s`,
              }}
            >
              <div
                style={{
                  width: "72px",
                  height: "72px",
                  borderRadius: "50%",
                  background: "rgba(201,168,76,0.1)",
                  border: "1px solid rgba(201,168,76,0.25)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 24px",
                  fontFamily: "var(--font-display)",
                  fontSize: "1.2rem",
                  color: "var(--gold)",
                }}
              >
                {member.initial}
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.2rem",
                  color: "var(--white)",
                  marginBottom: "8px",
                  fontWeight: 400,
                }}
              >
                {member.name}
              </h3>
              <div
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.65rem",
                  letterSpacing: "3px",
                  textTransform: "uppercase",
                  color: "var(--gold)",
                  marginBottom: "12px",
                }}
              >
                {member.role}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.8rem",
                  color: "var(--white)",
                  opacity: 0.4,
                }}
              >
                {member.exp} {t("about.team.exp")}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section
        ref={ctaRef}
        style={{
          padding: "100px clamp(24px, 5vw, 60px)",
          textAlign: "center",
          borderTop: "1px solid rgba(201,168,76,0.1)",
          opacity: ctaInView ? 1 : 0,
          transform: ctaInView ? "translateY(0)" : "translateY(30px)",
          transition: "all 0.8s ease",
        }}
      >
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: 300,
            color: "var(--white)",
            marginBottom: "16px",
          }}
        >
          {t("about.ctaTitle")}
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
          {t("about.ctaSub")}
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
          }}
        >
          {t("about.ctaBtn")}
        </Link>
      </section>
    </>
  );
}
