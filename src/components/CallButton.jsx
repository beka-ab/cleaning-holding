import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function CallButton() {
  const [hovered, setHovered] = useState(false);
  const { i18n } = useTranslation();

  const phoneNumbers = {
    ka: { number: "+995599904611", display: "599 90 46 11" },
    en: { number: "+995598077755", display: "598 07 77 55" },
    ru: { number: "+995598077755", display: "598 07 77 55" },
    uk: { number: "+995598077755", display: "598 07 77 55" },
    tr: { number: "+995598077755", display: "598 07 77 55" },
  };

  const current = phoneNumbers[i18n.language] || phoneNumbers["ka"];

  function handleCall() {
    window.location.href = "tel:" + current.number;
  }

  return (
    <div
      style={{ position: "fixed", bottom: "32px", right: "32px", zIndex: 9999 }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "56px",
          height: "56px",
          borderRadius: "50%",
          background: "rgba(201,168,76,0.3)",
          animation: "ripple 2s ease infinite",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "56px",
          height: "56px",
          borderRadius: "50%",
          background: "rgba(201,168,76,0.15)",
          animation: "ripple 2s ease infinite 0.5s",
          pointerEvents: "none",
        }}
      />

      <button
        onClick={handleCall}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          alignItems: "center",
          gap: "12px",
          background: "var(--gold)",
          color: "var(--dark)",
          border: "none",
          cursor: "pointer",
          padding: "14px 20px",
          borderRadius: "50px",
          boxShadow: hovered
            ? "0 8px 40px rgba(201,168,76,0.5)"
            : "0 4px 24px rgba(201,168,76,0.3)",
          transition: "all 0.4s ease",
          overflow: "hidden",
          maxWidth: hovered ? "260px" : "56px",
          whiteSpace: "nowrap",
        }}
      >
        <div
          style={{
            width: "28px",
            height: "28px",
            flexShrink: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.1 1.18 2 2 0 012.11 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z" />
          </svg>
        </div>

        <div
          style={{
            overflow: "hidden",
            maxWidth: hovered ? "200px" : "0px",
            opacity: hovered ? 1 : 0,
            transition: "all 0.4s ease",
          }}
        >
          <div
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.85rem",
              fontWeight: 500,
              letterSpacing: "1px",
              color: "var(--dark)",
              whiteSpace: "nowrap",
            }}
          >
            {current.display}
          </div>
          <div
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.55rem",
              letterSpacing: "2px",
              textTransform: "uppercase",
              color: "var(--dark)",
              opacity: 0.6,
              marginTop: "1px",
            }}
          >
            Call Now
          </div>
        </div>
      </button>

      <style>{`
        @keyframes ripple {
          0% { transform: scale(1); opacity: 1; }
          100% { transform: scale(2.2); opacity: 0; }
        }
      `}</style>
    </div>
  );
}
