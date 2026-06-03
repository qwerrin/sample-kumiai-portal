import Reveal from "./Reveal";

const ITEMS = [
  { num: "01", title: "共同購買事業", desc: "原材料・資材などをスケールメリットを活かして一括調達。組合員のコスト削減と安定供給を実現します。" },
  { num: "02", title: "共同受注事業", desc: "単独では受けきれない大型案件も、組合員の連携によって受注。新たな事業機会の創出を支援します。" },
  { num: "03", title: "金融・共済事業", desc: "事業資金の融資斡旋や各種共済制度を通じ、組合員企業の経営の安定と従業員の福利厚生を支えます。" },
  { num: "04", title: "教育・情報提供", desc: "経営セミナーや業界動向の情報共有を通じて、組合員の人材育成と意思決定をサポートします。" },
  { num: "05", title: "福利厚生事業", desc: "慰安旅行や健康診断、各種優待制度など、組合員企業の従業員が安心して働ける環境づくりを推進します。" },
  { num: "06", title: "行政・渉外対応", desc: "業界団体・行政との橋渡し役として、制度変更への対応や各種申請を組合として一括サポートします。" },
];

export default function Business() {
  return (
    <section id="business" style={{ padding: "8rem 3.5rem" }}>
      <Reveal>
        <div
          className="sec-head"
          style={{ maxWidth: 1200, marginLeft: "auto", marginRight: "auto", marginBottom: "4.5rem" }}
        >
          <span className="sec-label">OUR BUSINESS</span>
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
            事業案内
          </h2>
        </div>
      </Reveal>

      {/* gap:1px + background で極細罫線 */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: "1px",
          background: "var(--line-soft)",
          border: "1px solid var(--line-soft)",
          maxWidth: 1200,
          margin: "0 auto",
        }}
      >
        {ITEMS.map((item, i) => (
          <Reveal key={item.num} delay={(i % 3) as 0 | 1 | 2}>
            <div
              className="biz-card"
              style={{ padding: "3rem 2.4rem" }}
            >
              <div
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "1rem",
                  color: "var(--shu)",
                  letterSpacing: ".1em",
                  marginBottom: "1.6rem",
                }}
              >
                {item.num}
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-shippori)",
                  fontSize: "1.3rem",
                  fontWeight: 600,
                  marginBottom: "1rem",
                }}
              >
                {item.title}
              </h3>
              <p style={{ color: "var(--gray)", fontSize: ".92rem" }}>{item.desc}</p>
              <div className="ln" />
            </div>
          </Reveal>
        ))}
      </div>

      <style>{`
        @media (max-width: 860px) {
          #business [style*="repeat(3"] { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
