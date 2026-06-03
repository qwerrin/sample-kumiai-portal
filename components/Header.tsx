"use client";

import { useEffect, useState } from "react";

const NAV = [
  { label: "組合について", href: "#about" },
  { label: "事業案内", href: "#business" },
  { label: "加入のご案内", href: "#admission" },
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
        width: "100%",
        zIndex: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: scrolled ? "1.1rem 3.5rem" : "1.7rem 3.5rem",
        transition: "all .5s",
        background: scrolled ? "rgba(233,228,216,.9)" : "transparent",
        backdropFilter: scrolled ? "blur(8px)" : "none",
        borderBottom: scrolled ? "1px solid var(--line-soft)" : "1px solid transparent",
      }}
    >
      {/* ブランド */}
      <a href="#" style={{ textDecoration: "none", lineHeight: 1.25 }}>
        <div
          style={{
            fontFamily: "var(--font-shippori)",
            fontSize: "1.3rem",
            fontWeight: 700,
            color: "var(--sumi)",
            letterSpacing: ".14em",
          }}
        >
          〇〇事業協同組合
        </div>
        <div
          style={{
            fontFamily: "var(--font-cormorant)",
            fontSize: ".6rem",
            letterSpacing: ".34em",
            color: "var(--gray-soft)",
          }}
        >
          SAMPLE COOPERATIVE ASSOCIATION
        </div>
      </a>

      {/* ナビ */}
      <nav>
        <ul
          style={{
            listStyle: "none",
            display: "flex",
            gap: "2.6rem",
            alignItems: "center",
          }}
        >
          {NAV.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="nav-link"
                style={{
                  textDecoration: "none",
                  color: "var(--sumi-2)",
                  fontSize: ".82rem",
                  letterSpacing: ".16em",
                  fontWeight: 400,
                  transition: "color .4s",
                }}
              >
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              style={{
                textDecoration: "none",
                color: "var(--sumi-2)",
                fontSize: ".82rem",
                letterSpacing: ".16em",
                border: "1px solid var(--sumi)",
                padding: ".55rem 1.4rem",
                transition: "all .4s",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "var(--sumi)";
                el.style.color = "var(--paper)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "transparent";
                el.style.color = "var(--sumi-2)";
              }}
            >
              お問い合わせ
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
