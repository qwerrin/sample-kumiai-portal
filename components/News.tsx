import Reveal from "./Reveal";

const NEWS = [
  { date: "2026.05.28", tag: "行事", title: "第56回 通常総会開催のご案内を掲載しました" },
  { date: "2026.05.14", tag: "共済", title: "共済制度の給付内容改定について（2026年度版）" },
  { date: "2026.04.30", tag: "募集", title: "経営力強化セミナー（6月開催）の参加申込受付を開始" },
  { date: "2026.04.02", tag: "重要", title: "事務局ゴールデンウィーク期間中の休業日のお知らせ" },
];

export default function News() {
  return (
    <section
      id="news"
      style={{
        background: "var(--paper-2)",
        padding: "8rem 3.5rem",
      }}
    >
      <Reveal>
        <div
          className="sec-head"
          style={{ maxWidth: 920, marginLeft: "auto", marginRight: "auto", marginBottom: "4.5rem" }}
        >
          <span className="sec-label">NEWS</span>
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
            お知らせ
          </h2>
        </div>
      </Reveal>

      <div style={{ maxWidth: 920, margin: "0 auto" }}>
        {NEWS.map((item, i) => (
          <Reveal key={i}>
            <a
              href="#"
              className="news-item"
              style={{
                display: "grid",
                gridTemplateColumns: "130px 110px 1fr 30px",
                gap: "1.5rem",
                alignItems: "center",
                padding: "1.8rem 0",
                borderBottom: "1px solid var(--line-soft)",
                borderTop: i === 0 ? "1px solid var(--line-soft)" : "none",
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "1rem",
                  color: "var(--gray)",
                  letterSpacing: ".06em",
                }}
              >
                {item.date}
              </span>
              <span
                style={{
                  fontSize: ".68rem",
                  letterSpacing: ".14em",
                  padding: ".35rem .7rem",
                  border: "1px solid var(--sumi)",
                  textAlign: "center",
                }}
              >
                {item.tag}
              </span>
              <span style={{ fontSize: ".96rem" }}>{item.title}</span>
              <span
                className="arr"
                style={{ justifySelf: "end" }}
              >
                →
              </span>
            </a>
          </Reveal>
        ))}
      </div>

      <style>{`
        @media (max-width: 860px) {
          .news-item { grid-template-columns: 90px 1fr !important; gap: .6rem 1rem !important; }
          .news-item span:nth-child(2) { order: -1; justify-self: start; }
          .news-item .arr { display: none; }
        }
      `}</style>
    </section>
  );
}
