import Reveal from "./Reveal";

export default function Cta() {
  return (
    <section
      id="cta"
      style={{
        background: "var(--paper-3)",
        borderTop: "1px solid var(--line)",
        padding: "10rem 4rem",
        textAlign: "center",
      }}
    >
      <Reveal>
        <p
          style={{
            fontFamily: "var(--font-cormorant)",
            fontSize: ".8rem",
            letterSpacing: ".3em",
            color: "var(--shu)",
            textTransform: "uppercase",
            marginBottom: "2rem",
          }}
        >
          Join Us
        </p>
      </Reveal>

      <Reveal delay={1}>
        <h2
          style={{
            fontFamily: "var(--font-shippori)",
            fontWeight: 700,
            fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
            color: "var(--sumi)",
            lineHeight: 1.6,
            letterSpacing: ".06em",
            marginBottom: "2rem",
          }}
        >
          共に、次の半世紀へ。
        </h2>
      </Reveal>

      <Reveal delay={2}>
        <p
          style={{
            fontFamily: "var(--font-noto)",
            fontSize: ".92rem",
            color: "var(--gray)",
            lineHeight: 2,
            letterSpacing: ".04em",
            maxWidth: "40ch",
            margin: "0 auto 3rem",
          }}
        >
          東京中央事業協同組合への加入をご検討の方は、<br />
          お気軽にお問い合わせください。<br />
          担当者より詳しいご案内をお送りします。
        </p>
      </Reveal>

      <Reveal delay={3}>
        <div style={{ display: "flex", justifyContent: "center", gap: "1.5rem" }}>
          <a
            href="#contact"
            style={{
              fontFamily: "var(--font-noto)",
              fontSize: ".85rem",
              letterSpacing: ".12em",
              color: "var(--paper-2)",
              background: "var(--sumi)",
              textDecoration: "none",
              padding: "1rem 2.8rem",
              transition: "background .3s",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "var(--sumi-2)")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "var(--sumi)")}
          >
            加入のご相談
          </a>
          <a
            href="#"
            style={{
              fontFamily: "var(--font-noto)",
              fontSize: ".85rem",
              letterSpacing: ".12em",
              color: "var(--sumi)",
              textDecoration: "none",
              border: "1px solid var(--line)",
              padding: "1rem 2.8rem",
              transition: "border-color .25s",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "var(--shu)")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "var(--line)")}
          >
            資料請求
          </a>
        </div>
      </Reveal>

      <style>{`
        @media (max-width: 860px) {
          #cta { padding: 5rem 1.5rem !important; }
        }
      `}</style>
    </section>
  );
}
