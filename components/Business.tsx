import Reveal from "./Reveal";

const ITEMS = [
  {
    num: "01",
    title: "共同購買事業",
    desc: "原材料・資材・機械設備の一括購買により、コスト削減と安定調達を実現します。",
  },
  {
    num: "02",
    title: "共同受注事業",
    desc: "組合員の技術・設備を結集し、単独では受注困難な大型案件に対応します。",
  },
  {
    num: "03",
    title: "教育研修事業",
    desc: "業界動向・法規制・技術革新に対応した研修プログラムを年間通じて提供します。",
  },
  {
    num: "04",
    title: "経営支援事業",
    desc: "専門家ネットワークを活かした財務・税務・法務・ITの総合的な経営支援を行います。",
  },
  {
    num: "05",
    title: "福利厚生事業",
    desc: "健康保険・退職金共済・慶弔見舞いなど、中小企業の人材定着を支援します。",
  },
  {
    num: "06",
    title: "情報提供事業",
    desc: "業界情報・補助金・政策動向など、経営に役立つ最新情報を定期的に発信します。",
  },
];

export default function Business() {
  return (
    <section
      id="business"
      style={{
        background: "var(--paper-2)",
        borderTop: "1px solid var(--line)",
        borderBottom: "1px solid var(--line)",
        padding: "10rem 4rem",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <Reveal>
          <div style={{ marginBottom: "5rem" }}>
            <p
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: ".8rem",
                letterSpacing: ".3em",
                color: "var(--shu)",
                textTransform: "uppercase",
                marginBottom: "1rem",
              }}
            >
              Our Business
            </p>
            <h2
              style={{
                fontFamily: "var(--font-shippori)",
                fontWeight: 700,
                fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
                color: "var(--sumi)",
                letterSpacing: ".04em",
              }}
            >
              事業案内
            </h2>
          </div>
        </Reveal>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
          }}
        >
          {ITEMS.map((item, i) => (
            <Reveal key={item.num} delay={((i % 3) + 1) as 1 | 2 | 3}>
              <BusinessCard item={item} />
            </Reveal>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          #business { padding: 5rem 1.5rem !important; }
          #business [data-grid] { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

function BusinessCard({ item }: { item: typeof ITEMS[number] }) {
  return (
    <div
      className="business-card"
      style={{
        padding: "2.5rem 2rem",
        borderRight: "1px solid var(--line)",
        borderBottom: "1px solid var(--line)",
        cursor: "default",
        transition: "background .25s",
        position: "relative",
      }}
    >
      <span
        style={{
          display: "block",
          fontFamily: "var(--font-cormorant)",
          fontSize: "1.5rem",
          color: "var(--shu)",
          letterSpacing: ".1em",
          marginBottom: "1rem",
        }}
      >
        {item.num}
      </span>
      <h3
        style={{
          fontFamily: "var(--font-shippori)",
          fontWeight: 600,
          fontSize: "1.05rem",
          color: "var(--sumi)",
          letterSpacing: ".06em",
          marginBottom: "1rem",
        }}
      >
        {item.title}
      </h3>
      <p
        style={{
          fontFamily: "var(--font-noto)",
          fontSize: ".85rem",
          color: "var(--gray)",
          lineHeight: 1.85,
          letterSpacing: ".03em",
          marginBottom: "1.5rem",
        }}
      >
        {item.desc}
      </p>
      <div
        className="card-line"
        style={{
          height: 1,
          background: "var(--sumi)",
          width: 30,
          transition: "width .35s cubic-bezier(.16,1,.3,1)",
        }}
      />
      <style>{`
        .business-card:hover { background: var(--paper); }
        .business-card:hover .card-line { width: 60px; }
        .business-card:nth-child(3n) { border-right: none; }
      `}</style>
    </div>
  );
}
