import Reveal from "./Reveal";

const STATS = [
  { value: "56", unit: "年", label: "設立からの歴史" },
  { value: "320", unit: "社", label: "組合員数" },
  { value: "12", unit: "分野", label: "対応事業領域" },
  { value: "98", unit: "%", label: "組合員継続率" },
];

export default function Stats() {
  return (
    <section
      style={{
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* 背景プレースホルダー（実写真差し替え予定） */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background: "var(--sumi)",
        }}
      />
      {/* テキストの読めるオーバーレイ */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(28,26,22,.78)",
        }}
      />
      {/* 背景画像ディレクション表示 */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "var(--font-cormorant)",
          fontSize: ".7rem",
          letterSpacing: ".2em",
          color: "rgba(233,228,216,.2)",
          textTransform: "uppercase",
        }}
      >
        [ 背景：街並み・事業現場 — 墨色オーバーレイ前提 — 16:6横長 ]
      </div>

      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: 1200,
          margin: "0 auto",
          padding: "8rem 4rem",
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "1px",
        }}
      >
        {STATS.map((stat, i) => (
          <Reveal key={stat.label} delay={((i + 1) % 5) as 1 | 2 | 3 | 4}>
            <div
              style={{
                padding: "3rem 2rem",
                textAlign: "center",
                borderRight: i < 3 ? "1px solid rgba(233,228,216,.12)" : "none",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "clamp(3rem, 6vw, 5rem)",
                  fontWeight: 500,
                  color: "var(--paper-2)",
                  lineHeight: 1,
                  letterSpacing: ".02em",
                  marginBottom: ".3rem",
                }}
              >
                {stat.value}
                <span style={{ fontSize: "1.4rem", marginLeft: ".2em" }}>{stat.unit}</span>
              </div>
              <p
                style={{
                  fontFamily: "var(--font-noto)",
                  fontSize: ".78rem",
                  color: "rgba(233,228,216,.55)",
                  letterSpacing: ".1em",
                  marginTop: ".8rem",
                }}
              >
                {stat.label}
              </p>
            </div>
          </Reveal>
        ))}
      </div>

      <style>{`
        @media (max-width: 860px) {
          section [data-stats] { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}
