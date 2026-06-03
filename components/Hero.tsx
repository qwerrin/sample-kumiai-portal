import Placeholder from "./Placeholder";

export default function Hero() {
  return (
    <section
      style={{
        position: "relative",
        minHeight: "100svh",
        display: "grid",
        gridTemplateColumns: "1.15fr 0.85fr",
        alignItems: "center",
        padding: "0 4rem",
        gap: "4rem",
        maxWidth: 1200,
        margin: "0 auto",
        paddingTop: 72,
      }}
    >
      {/* 背景：巨大な「協」 */}
      <span
        aria-hidden="true"
        style={{
          position: "absolute",
          fontFamily: "var(--font-shippori)",
          fontWeight: 800,
          fontSize: "clamp(16rem, 30vw, 36rem)",
          color: "var(--sumi)",
          opacity: 0.04,
          top: "50%",
          left: "50%",
          transform: "translate(-20%, -50%)",
          userSelect: "none",
          pointerEvents: "none",
          lineHeight: 1,
        }}
      >
        協
      </span>

      {/* 縦罫線 */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: "50%",
          width: 1,
          background: "var(--line-soft)",
        }}
      />

      {/* 左：コピー */}
      <div style={{ position: "relative", zIndex: 1 }}>
        <p
          className="hero-fade d1"
          style={{
            fontFamily: "var(--font-cormorant)",
            fontSize: ".85rem",
            letterSpacing: ".3em",
            color: "var(--shu)",
            textTransform: "uppercase",
            marginBottom: "1.5rem",
          }}
        >
          Tokyo Chuo Business Cooperative
        </p>

        <h1
          className="hero-fade d2"
          style={{
            fontFamily: "var(--font-shippori)",
            fontWeight: 700,
            fontSize: "clamp(2rem, 4vw, 3.2rem)",
            color: "var(--sumi)",
            lineHeight: 1.5,
            letterSpacing: ".04em",
            marginBottom: "2rem",
          }}
        >
          中小企業の力を、<br />
          ひとつに束ねる。
        </h1>

        <p
          className="hero-fade d3"
          style={{
            fontFamily: "var(--font-noto)",
            fontSize: ".95rem",
            color: "var(--gray)",
            lineHeight: 1.9,
            letterSpacing: ".04em",
            marginBottom: "3rem",
            maxWidth: "34ch",
          }}
        >
          地域とともに、半世紀。<br />
          組合員の連帯と信頼を礎に、<br />
          ともに持続可能な未来を切り拓く。
        </p>

        <div className="hero-fade d4" style={{ display: "flex", gap: "1.5rem", alignItems: "center" }}>
          <a
            href="#about"
            style={{
              fontFamily: "var(--font-noto)",
              fontSize: ".82rem",
              letterSpacing: ".1em",
              color: "var(--paper-2)",
              background: "var(--sumi)",
              textDecoration: "none",
              padding: ".85rem 2.2rem",
              transition: "background .3s",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "var(--sumi-2)")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "var(--sumi)")}
          >
            組合について
          </a>
          <a
            href="#cta"
            style={{
              fontFamily: "var(--font-noto)",
              fontSize: ".82rem",
              letterSpacing: ".1em",
              color: "var(--sumi)",
              textDecoration: "none",
              borderBottom: "1px solid var(--shu)",
              paddingBottom: "2px",
            }}
          >
            加入のご案内 →
          </a>
        </div>

        {/* SCROLL インジケーター */}
        <div
          style={{
            position: "absolute",
            bottom: "-3rem",
            left: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: ".5rem",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: ".65rem",
              letterSpacing: ".3em",
              color: "var(--gray-soft)",
              textTransform: "uppercase",
            }}
          >
            Scroll
          </span>
          <div
            style={{
              width: 1,
              height: 48,
              background: "var(--line)",
              overflow: "hidden",
            }}
          >
            <div
              className="scroll-line"
              style={{ width: "100%", height: "100%", background: "var(--shu)" }}
            />
          </div>
        </div>
      </div>

      {/* 右：ビジュアル */}
      <div style={{ position: "relative", zIndex: 1 }}>
        <Placeholder
          label="組合事務所外観 or 総会俯瞰"
          tone="低彩度〜モノクロ寄り、和紙地と馴染ませる"
          ratio="3:4"
          className="w-full"
        />
      </div>

      <style>{`
        @media (max-width: 860px) {
          section[data-section="hero"] {
            grid-template-columns: 1fr !important;
            padding: 8rem 1.5rem 5rem !important;
          }
        }
      `}</style>
    </section>
  );
}
