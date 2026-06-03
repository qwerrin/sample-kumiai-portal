import Placeholder from "./Placeholder";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section
      id="about"
      style={{
        background: "var(--paper-2)",
        borderTop: "1px solid var(--line-soft)",
        borderBottom: "1px solid var(--line-soft)",
        padding: "8rem 3.5rem",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1.15fr 1fr",
          gap: "5rem",
          alignItems: "center",
          maxWidth: 1200,
          margin: "0 auto",
        }}
      >
        {/* テキスト */}
        <Reveal>
          <div>
            <div className="sec-head" style={{ marginBottom: "4.5rem" }}>
              <span className="sec-label">ABOUT US</span>
              <h2
                style={{
                  fontFamily: "var(--font-shippori)",
                  fontWeight: 600,
                  fontSize: "clamp(1.9rem,3.6vw,2.9rem)",
                  letterSpacing: ".04em",
                  lineHeight: 1.4,
                  color: "var(--sumi)",
                }}
              >
                組合について
              </h2>
            </div>

            <p
              style={{
                fontFamily: "var(--font-shippori)",
                fontSize: "1.55rem",
                lineHeight: 2,
                fontWeight: 600,
                marginBottom: "1.8rem",
              }}
            >
              「一社では成し得ないことを、<br />共に成す。」
            </p>

            <p style={{ color: "var(--gray)", marginBottom: "1.4rem" }}>
              当組合は、地域の中小企業が相互扶助の精神のもとに集い、
              共同購買・共同受注・福利厚生などの事業を通じて、
              各企業単独では実現が難しい経営の合理化と競争力の強化を支援してまいりました。
            </p>
            <p style={{ color: "var(--gray)" }}>
              変化の激しい時代にあっても、組合員一社一社の声に耳を傾け、
              地域経済の確かな担い手であり続けることを使命としています。
            </p>
          </div>
        </Reveal>

        {/* ビジュアル */}
        <Reveal delay={2}>
          <div style={{ aspectRatio: "4/5" }}>
            <Placeholder
              ic="ABOUT"
              title="歴史・信頼を感じる一枚"
              dir={"歴史ある建物の外観、\nまたは理事長／役員の集合写真。\n暖色寄りのトーンで「伝統と人」を伝える。"}
              ratio="縦長 4:5 / next/image・WebP"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        </Reveal>
      </div>

      <style>{`
        @media (max-width: 860px) {
          #about [data-grid] { grid-template-columns: 1fr !important; gap: 3rem !important; }
        }
      `}</style>
    </section>
  );
}
