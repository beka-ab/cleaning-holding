import { useState } from "react";
import { useTranslation } from "react-i18next";

const languages = [
  { code: "ka", label: "ქართული", short: "GE", flag: "🇬🇪" },
  { code: "en", label: "English", short: "EN", flag: "🇬🇧" },
  { code: "uk", label: "Українська", short: "UA", flag: "🇺🇦" },
  { code: "ru", label: "Русский", short: "RU", flag: "🇷🇺" },
  { code: "tr", label: "Türkçe", short: "TR", flag: "🇹🇷" },
];

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);

  const current =
    languages.find((l) => l.code === i18n.language) || languages[0];

  const handleSelect = (code) => {
    i18n.changeLanguage(code);
    setOpen(false);
  };

  return (
    <div style={{ position: "relative", zIndex: 1001 }}>
      {/* Trigger Button */}
      <button
        onClick={() => setOpen(!open)}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          background: open ? "rgba(201,168,76,0.12)" : "transparent",
          border: "1px solid rgba(201,168,76,0.3)",
          padding: "7px 14px",
          cursor: "pointer",
          transition: "all 0.3s ease",
          borderRadius: "2px",
        }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.borderColor = "var(--gold)")
        }
        onMouseLeave={(e) => {
          if (!open) e.currentTarget.style.borderColor = "rgba(201,168,76,0.3)";
        }}
      >
        <span style={{ fontSize: "1rem", lineHeight: 1 }}>{current.flag}</span>
        <span
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.62rem",
            letterSpacing: "2px",
            color: "var(--gold)",
            textTransform: "uppercase",
          }}
        >
          {current.short}
        </span>
        <span
          style={{
            color: "var(--gold)",
            fontSize: "0.5rem",
            opacity: 0.7,
            transform: open ? "rotate(180deg)" : "rotate(0)",
            transition: "transform 0.3s ease",
            display: "inline-block",
          }}
        >
          ▼
        </span>
      </button>

      {/* Dropdown */}
      {open && (
        <>
          {/* Backdrop */}
          <div
            style={{ position: "fixed", inset: 0, zIndex: 999 }}
            onClick={() => setOpen(false)}
          />
          <div
            style={{
              position: "absolute",
              top: "calc(100% + 8px)",
              right: 0,
              background: "#141414",
              border: "1px solid rgba(201,168,76,0.2)",
              minWidth: "180px",
              zIndex: 1000,
              boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
              animation: "dropIn 0.2s ease",
              borderRadius: "2px",
              overflow: "hidden",
            }}
          >
            {languages.map((lang, i) => (
              <button
                key={lang.code}
                onClick={() => handleSelect(lang.code)}
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  padding: "12px 16px",
                  background:
                    i18n.language === lang.code
                      ? "rgba(201,168,76,0.1)"
                      : "transparent",
                  border: "none",
                  borderBottom:
                    i < languages.length - 1
                      ? "1px solid rgba(201,168,76,0.06)"
                      : "none",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                  textAlign: "left",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background = "rgba(201,168,76,0.08)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background =
                    i18n.language === lang.code
                      ? "rgba(201,168,76,0.1)"
                      : "transparent")
                }
              >
                <span style={{ fontSize: "1.1rem" }}>{lang.flag}</span>
                <div>
                  <div
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.8rem",
                      color:
                        i18n.language === lang.code
                          ? "var(--gold)"
                          : "var(--white)",
                      letterSpacing: "1px",
                    }}
                  >
                    {lang.label}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.58rem",
                      color: "var(--gold)",
                      opacity: 0.5,
                      letterSpacing: "2px",
                      textTransform: "uppercase",
                    }}
                  >
                    {lang.short}
                  </div>
                </div>
                {i18n.language === lang.code && (
                  <span
                    style={{
                      marginLeft: "auto",
                      color: "var(--gold)",
                      fontSize: "0.7rem",
                    }}
                  >
                    ✦
                  </span>
                )}
              </button>
            ))}
          </div>
        </>
      )}

      <style>{`
        @keyframes dropIn {
          from { opacity: 0; transform: translateY(-8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
