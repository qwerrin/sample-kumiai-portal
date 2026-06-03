import Placeholder from "./Placeholder";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section
      id="about"
      style={{
        maxWidth: 1200,
        margin: "0 auto",
        padding: "10rem 4rem",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "6rem",
        alignItems: "center",
      }}
    >
      {/* テキスト */}
      <div>
        <Reveal>
          <p
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: ".8rem",
              letterSpacing: ".3em",
              color: "var(--shu)",
              textTransform: "uppercase",
              marginBottom: "1.5rem",
            }}
          >
            About Us
          </p>
        </Reveal>

        <Reveal delay={1}>
          <h2
            style={{
              fontFamily: "var(--font-shippori)",
              fontWeight: 700,
              fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
              color: "var(--sumi)",
              lineHeight: 1.6,
              letterSpacing: ".04em",
              marginBottom: "2.5rem",
            }}
          >
            半世紀を超えて、<br />
            地域産業の礎となる。
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
              marginBottom: "1.5rem",
            }}
          >
            東京中央事業協同組合は、昭和40年代の創立以来、中小企業の相互扶助と
            共同事業を通じて、地域経済の発展に貢献してきました。
          </p>
          <p
            style={{
              fontFamily: "var(--font-noto)",
              fontSize: ".92rem",
              color: "var(--gray)",
              lineHeight: 2,
              letterSpacing: ".04em",
            }}
          >
            現在320社を超える組合員とともに、共同購買・共同受注・教育研修・
            経営支援など多岐にわたる事業を展開し、中小企業が持続的に成長できる
            環境づくりに取り組んでいます。
          </p>
        </Reveal>
      </div>

      {/* ビジュアル */}
      <Reveal delay={1}>
        <Placeholder
          label="歴史ある建物外観 or 役員集合写真"
          tone="暖色寄り、伝統と人"
          ratio="4:5"
          className="w-full"
        />
      </Reveal>

      <style>{`
        @media (max-width: 860px) {
          #about { grid-template-columns: 1fr !important; padding: 5rem 1.5rem !important; gap: 3rem !important; }
          #about > div:last-child { order: -1; }
        }
      `}</style>
    </section>
  );
}
