"use client";

import { useEffect, useState } from "react";

const NAV = [
  { label: "組合について", href: "#about" },
  { label: "事業案内", href: "#business" },
  { label: "加入のご案内", href: "#cta" },
  { label: "お知らせ", href: "#news" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: "background .4s, border-color .4s, backdrop-filter .4s",
        background: scrolled ? "rgba(233,228,216,.9)" : "transparent",
        backdropFilter: scrolled ? "blur(8px)" : "none",
        borderBottom: scrolled ? "1px solid var(--line)" : "1px solid transparent",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 2rem",
          height: 72,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* ロゴ */}
        <a
          href="#"
          style={{
            fontFamily: "var(--font-shippori)",
            fontWeight: 700,
            fontSize: "1.1rem",
            color: "var(--sumi)",
            textDecoration: "none",
            letterSpacing: ".08em",
          }}
        >
          東京中央事業協同組合
        </a>

        {/* ナビ */}
        <nav style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="nav-link"
              style={{
                fontFamily: "var(--font-noto)",
                fontSize: ".78rem",
                color: "var(--sumi)",
                textDecoration: "none",
                letterSpacing: ".06em",
                position: "relative",
                paddingBottom: "2px",
              }}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            style={{
              fontFamily: "var(--font-noto)",
              fontSize: ".78rem",
              color: "var(--sumi)",
              textDecoration: "none",
              letterSpacing: ".06em",
              border: "1px solid var(--line)",
              padding: ".4rem 1.1rem",
              transition: "background .25s, border-color .25s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "var(--paper-3)";
              (e.currentTarget as HTMLElement).style.borderColor = "var(--shu)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "transparent";
              (e.currentTarget as HTMLElement).style.borderColor = "var(--line)";
            }}
          >
            お問い合わせ
          </a>
        </nav>
      </div>

      <style>{`
        @media (max-width: 860px) {
          header nav { display: none; }
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 1px;
          background: var(--shu);
          transition: width .3s cubic-bezier(.16,1,.3,1);
        }
        .nav-link:hover::after { width: 100%; }
      `}</style>
    </header>
  );
}
