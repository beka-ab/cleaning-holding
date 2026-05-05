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

export default function Services() {
  const [heroVisible, setHeroVisible] = useState(false);
  const [processRef, processInView] = useInView();
  const { t } = useTranslation();

  useEffect(() => {
    const timer = setTimeout(() => setHeroVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const services = [
    {
      number: "01",
      title: t("services.residential.title"),
      subtitle: t("services.residential.subtitle"),
      desc: t("services.residential.fullDesc"),
      features: [
        t("services.residential.f1"),
        t("services.residential.f2"),
        t("services.residential.f3"),
        t("services.residential.f4"),
      ],
      icon: "🏠",
    },
    {
      number: "02",
      title: t("services.commercial.title"),
      subtitle: t("services.commercial.subtitle"),
      desc: t("services.commercial.fullDesc"),
      features: [
        t("services.commercial.f1"),
        t("services.commercial.f2"),
        t("services.commercial.f3"),
        t("services.commercial.f4"),
      ],
      icon: "🏢",
    },
    {
      number: "03",
      title: t("services.deep.title"),
      subtitle: t("services.deep.subtitle"),
      desc: t("services.deep.fullDesc"),
      features: [
        t("services.deep.f1"),
        t("services.deep.f2"),
        t("services.deep.f3"),
        t("services.deep.f4"),
      ],
      icon: "✨",
    },
    {
      number: "04",
      title: t("services.move.title"),
      subtitle: t("services.move.subtitle"),
      desc: t("services.move.fullDesc"),
      features: [
        t("services.move.f1"),
        t("services.move.f2"),
        t("services.move.f3"),
        t("services.move.f4"),
      ],
      icon: "📦",
    },
    {
      number: "05",
      title: t("services.construction.title"),
      subtitle: t("services.construction.subtitle"),
      desc: t("services.construction.fullDesc"),
      features: [
        t("services.construction.f1"),
        t("services.construction.f2"),
        t("services.construction.f3"),
        t("services.construction.f4"),
      ],
      icon: "🔨",
    },
    {
      number: "06",
      title: t("services.recurring.title"),
      subtitle: t("services.recurring.subtitle"),
      desc: t("services.recurring.fullDesc"),
      features: [
        t("services.recurring.f1"),
        t("services.recurring.f2"),
        t("services.recurring.f3"),
        t("services.recurring.f4"),
      ],
      icon: "🔄",
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: t("process.step1.title"),
      desc: t("process.step1.desc"),
    },
    {
      step: "02",
      title: t("process.step2.title"),
      desc: t("process.step2.desc"),
    },
    {
      step: "03",
      title: t("process.step3.title"),
      desc: t("process.step3.desc"),
    },
    {
      step: "04",
      title: t("process.step4.title"),
      desc: t("process.step4.desc"),
    },
  ];

  return (
    <>
      <Helmet>
        <title>{t("services.pageTitle")}</title>
        <meta name="description" content={t("services.pageMeta")} />
        <meta
          name="keywords"
          content="cleaning services, residential cleaning, commercial cleaning, deep cleaning, move out cleaning, post construction cleaning"
        />
      </Helmet>

      {/* PAGE HEADER */}
      <section
        style={{
          minHeight: "50vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "120px clamp(24px, 5vw, 60px) 80px",
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
            {t("services.label")}
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
            {t("services.title")}
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
            {t("services.pageSubtitle")}
          </p>
        </div>
      </section>

      {/* SERVICES LIST */}
      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 clamp(24px, 5vw, 60px) 120px",
        }}
      >
        {services.map((s, i) => (
          <ServiceCard key={i} service={s} index={i} />
        ))}
      </section>

      {/* PROCESS */}
      <section
        ref={processRef}
        style={{
          padding: "120px clamp(24px, 5vw, 60px)",
          background: "var(--dark-2)",
          borderTop: "1px solid rgba(201,168,76,0.1)",
          borderBottom: "1px solid rgba(201,168,76,0.1)",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div
            style={{
              textAlign: "center",
              marginBottom: "80px",
              opacity: processInView ? 1 : 0,
              transform: processInView ? "translateY(0)" : "translateY(30px)",
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
              {t("process.label")}
            </div>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 300,
                color: "var(--white)",
              }}
            >
              {t("process.title")}
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "48px",
            }}
          >
            {processSteps.map((p, i) => (
              <div
                key={i}
                style={{
                  textAlign: "center",
                  opacity: processInView ? 1 : 0,
                  transform: processInView
                    ? "translateY(0)"
                    : "translateY(30px)",
                  transition: `all 0.7s ease ${i * 0.15}s`,
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "3.5rem",
                    fontWeight: 300,
                    color: "rgba(201,168,76,0.2)",
                    lineHeight: 1,
                    marginBottom: "16px",
                  }}
                >
                  {p.step}
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
                  {p.title}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.85rem",
                    color: "var(--white)",
                    opacity: 0.5,
                    lineHeight: 1.7,
                  }}
                >
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{ padding: "100px clamp(24px, 5vw, 60px)", textAlign: "center" }}
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
          {t("services.ctaTitle")}
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
          {t("services.ctaSub")}
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
          {t("services.ctaBtn")}
        </Link>
      </section>
    </>
  );
}

function ServiceCard({ service, index }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  const isEven = index % 2 === 0;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.1 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "80px",
        alignItems: "center",
        padding: "80px 0",
        borderBottom: "1px solid rgba(201,168,76,0.08)",
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(40px)",
        transition: "all 0.8s ease",
        direction: isEven ? "ltr" : "rtl",
      }}
    >
      <div style={{ direction: "ltr" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "24px",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "1rem",
              color: "rgba(201,168,76,0.4)",
              fontWeight: 300,
            }}
          >
            {service.number}
          </span>
          <div
            style={{
              width: "40px",
              height: "1px",
              background: "rgba(201,168,76,0.3)",
            }}
          />
          <span
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.65rem",
              letterSpacing: "4px",
              textTransform: "uppercase",
              color: "var(--gold)",
            }}
          >
            {service.subtitle}
          </span>
        </div>
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
            fontWeight: 300,
            color: "var(--white)",
            marginBottom: "20px",
          }}
        >
          {service.title}
        </h2>
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.9rem",
            color: "var(--white)",
            opacity: 0.55,
            lineHeight: 1.9,
            marginBottom: "32px",
          }}
        >
          {service.desc}
        </p>
        <ul
          style={{
            listStyle: "none",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          {service.features.map((f, i) => (
            <li
              key={i}
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.8rem",
                color: "var(--white)",
                opacity: 0.7,
                display: "flex",
                alignItems: "center",
                gap: "12px",
              }}
            >
              <span style={{ color: "var(--gold)", fontSize: "0.6rem" }}>
                ◆
              </span>{" "}
              {f}
            </li>
          ))}
        </ul>
      </div>

      <div
        style={{
          direction: "ltr",
          background: "var(--dark-2)",
          border: "1px solid rgba(201,168,76,0.1)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "320px",
          fontSize: "5rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse at center, rgba(201,168,76,0.05) 0%, transparent 70%)",
          }}
        />
        <span style={{ position: "relative", zIndex: 1 }}>{service.icon}</span>
      </div>
    </div>
  );
}
