"use client";

import { useEffect } from "react";
import Placeholder from "./Placeholder";

export default function Hero() {
  // ページロード時にヒーロー内 .reveal を一括 .in 付与
  useEffect(() => {
    const onLoad = () => {
      document.querySelectorAll(".hero-section .reveal").forEach((el) => {
        el.classList.add("in");
      });
    };
    if (document.readyState === "complete") {
      onLoad();
    } else {
      window.addEventListener("load", onLoad);
      return () => window.removeEventListener("load", onLoad);
    }
  }, []);

  return (
    <section
      className="hero-section"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "grid",
        gridTemplateColumns: "1.15fr .85fr",
        alignItems: "stretch",
      }}
    >
      {/* 左：コピー */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          padding: "0 3.5rem",
          position: "relative",
        }}
      >
        {/* 縦罫 */}
        <span
          aria-hidden="true"
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: 1,
            height: "100%",
            background: "var(--line-soft)",
          }}
        />
        {/* 「協」ウォーターマーク */}
        <span
          aria-hidden="true"
          style={{
            position: "absolute",
            left: "-4%",
            bottom: "-6%",
            fontFamily: "var(--font-shippori)",
            fontWeight: 800,
            fontSize: "30vw",
            lineHeight: 0.78,
            color: "var(--sumi)",
            opacity: 0.04,
            userSelect: "none",
            pointerEvents: "none",
          }}
        >
          協
        </span>

        <div style={{ position: "relative", maxWidth: 620 }}>
          {/* eyebrow */}
          <div
            className="reveal"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "1rem",
              color: "var(--shu)",
              fontSize: ".76rem",
              letterSpacing: ".34em",
              marginBottom: "2.2rem",
            }}
          >
            <span
              aria-hidden="true"
              style={{ display: "block", width: 46, height: 1, background: "var(--shu)", flexShrink: 0 }}
            />
            <span style={{ fontFamily: "var(--font-cormorant)" }}>
              SINCE 1968 — COOPERATIVE ASSOCIATION
            </span>
          </div>

          <h1
            className="reveal d1"
            style={{
              fontFamily: "var(--font-shippori)",
              fontWeight: 700,
              fontSize: "clamp(2.3rem,4.4vw,3.9rem)",
              lineHeight: 1.44,
              letterSpacing: ".05em",
              color: "var(--sumi)",
              marginBottom: "2.2rem",
            }}
          >
            中小企業の力を、<br />
            ひとつに束ねる。<br />
            <span
              style={{
                fontSize: ".6em",
                fontWeight: 600,
                color: "var(--gray)",
              }}
            >
              地域とともに、半世紀。
            </span>
          </h1>

          <p
            className="reveal d2"
            style={{
              color: "var(--gray)",
              maxWidth: 480,
              fontSize: "1rem",
              marginBottom: "3rem",
            }}
          >
            組合員企業の経営基盤を支え、共同事業を通じて地域産業の発展に貢献する。
            半世紀にわたり培ってきた信頼と連携の力で、次の時代へ。
          </p>

          <div
            className="reveal d3"
            style={{ display: "flex", gap: "1.2rem", flexWrap: "wrap" }}
          >
            <a href="#admission" className="btn btn-solid">
              加入のご案内 <span className="arr">→</span>
            </a>
            <a href="#business" className="btn btn-ghost">
              事業案内を見る
            </a>
          </div>
        </div>
      </div>

      {/* 右：ビジュアル */}
      <div style={{ position: "relative" }}>
        <Placeholder
          ic="KEY VISUAL"
          title="組合を象徴するメインビジュアル"
          dir={"組合事務所の外観、または通常総会の俯瞰。\n低彩度〜モノクロ寄りに整え、和紙地と馴染ませる。\n人物が写る場合は後ろ姿・引きの構図で。"}
          ratio="縦長 3:4 / next/image・WebP"
          style={{
            position: "absolute",
            inset: 0,
            border: "none",
            borderLeft: "1px solid var(--line)",
          }}
        />
      </div>

      {/* SCROLL */}
      <div
        style={{
          position: "absolute",
          bottom: "2.5rem",
          left: "3.5rem",
          display: "flex",
          alignItems: "center",
          gap: ".8rem",
          color: "var(--gray-soft)",
          fontSize: ".64rem",
          letterSpacing: ".3em",
          zIndex: 3,
        }}
      >
        <span
          style={{
            display: "block",
            width: 1,
            height: 46,
            background: "linear-gradient(var(--gray-soft),transparent)",
          }}
          className="scroll-line"
        />
        <span style={{ fontFamily: "var(--font-cormorant)" }}>SCROLL</span>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .hero-section { grid-template-columns: 1fr !important; min-height: auto !important; }
          .hero-section > div:first-child { padding: 7rem 1.5rem 4rem !important; }
          .hero-section > div:first-child > span:first-of-type { display: none; }
          .hero-section > div:last-of-type { min-height: 60vh; }
          .hero-section > div[style*="absolute"][style*="2.5rem"] { display: none; }
        }
      `}</style>
    </section>
  );
}
