import Placeholder from "./Placeholder";
import Reveal from "./Reveal";

const STATS = [
  { value: "56", unit: "年", label: "創立からの歩み" },
  { value: "320", unit: "社", label: "組合員企業数" },
  { value: "12", unit: "分野", label: "共同事業領域" },
  { value: "98", unit: "%", label: "組合員継続率" },
];

export default function Stats() {
  return (
    <section
      style={{
        position: "relative",
        color: "var(--paper)",
        borderTop: "1px solid var(--sumi)",
        overflow: "hidden",
      }}
    >
      {/* 背景プレースホルダー（全面絶対配置） */}
      <Placeholder
        ic="BACKGROUND"
        title="数値帯の背景イメージ"
        dir={"街並み・組合員の事業現場などを暗く沈めて敷く。\n数値が読めるよう墨色のオーバーレイ前提。"}
        ratio="横長 16:6 / next/image・WebP"
        style={{
          position: "absolute",
          inset: 0,
          border: "none",
          // 背景を暗くオーバーライド
          background: "linear-gradient(135deg,#2a2722 0%,#1c1a16 100%)",
        }}
      />

      {/* 数値グリッド */}
      <div
        style={{
          position: "relative",
          zIndex: 3,
          padding: "8rem 3.5rem",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4,1fr)",
            gap: "2rem",
            maxWidth: 1100,
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          {STATS.map((stat, i) => (
            <Reveal key={stat.label} delay={(i % 4) as 0 | 1 | 2 | 3}>
              <div>
                <div
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    fontSize: "3.6rem",
                    lineHeight: 1,
                    color: "var(--paper-2)",
                  }}
                >
                  {stat.value}
                  <small style={{ fontSize: "1.4rem" }}>{stat.unit}</small>
                </div>
                <p
                  style={{
                    fontSize: ".8rem",
                    letterSpacing: ".18em",
                    color: "rgba(241,237,227,.7)",
                    marginTop: ".8rem",
                  }}
                >
                  {stat.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          section [style*="repeat(4"] { grid-template-columns: repeat(2,1fr) !important; gap: 3rem !important; }
        }
      `}</style>
    </section>
  );
}
