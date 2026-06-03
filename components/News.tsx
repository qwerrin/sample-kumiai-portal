import Reveal from "./Reveal";

const NEWS = [
  {
    date: "2024.03.15",
    tag: "お知らせ",
    title: "令和6年度 定期総会の開催について",
  },
  {
    date: "2024.02.28",
    tag: "事業案内",
    title: "共同購買事業における新規取引先との契約締結のお知らせ",
  },
  {
    date: "2024.02.01",
    tag: "研修・セミナー",
    title: "2024年度 経営者向け研修プログラムのご案内",
  },
  {
    date: "2024.01.10",
    tag: "補助金情報",
    title: "中小企業省エネルギー設備導入支援補助金の申請受付開始",
  },
];

export default function News() {
  return (
    <section
      id="news"
      style={{
        maxWidth: 1200,
        margin: "0 auto",
        padding: "10rem 4rem",
      }}
    >
      <Reveal>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: "4rem",
          }}
        >
          <div>
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
              News
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
              お知らせ
            </h2>
          </div>
          <a
            href="#"
            style={{
              fontFamily: "var(--font-noto)",
              fontSize: ".78rem",
              color: "var(--gray)",
              textDecoration: "none",
              letterSpacing: ".1em",
              borderBottom: "1px solid var(--line)",
              paddingBottom: "2px",
            }}
          >
            一覧を見る →
          </a>
        </div>
      </Reveal>

      <div style={{ borderTop: "1px solid var(--line)" }}>
        {NEWS.map((item, i) => (
          <Reveal key={i} delay={1}>
            <NewsRow item={item} />
          </Reveal>
        ))}
      </div>

      <style>{`
        @media (max-width: 860px) {
          #news { padding: 5rem 1.5rem !important; }
        }
      `}</style>
    </section>
  );
}

function NewsRow({ item }: { item: typeof NEWS[number] }) {
  return (
    <a
      href="#"
      className="news-row"
      style={{
        display: "grid",
        gridTemplateColumns: "auto auto 1fr auto",
        alignItems: "center",
        gap: "2rem",
        padding: "1.4rem 0",
        borderBottom: "1px solid var(--line-soft)",
        textDecoration: "none",
        transition: "padding-left .3s cubic-bezier(.16,1,.3,1)",
      }}
    >
      <span
        style={{
          fontFamily: "var(--font-cormorant)",
          fontSize: ".9rem",
          color: "var(--gray-soft)",
          letterSpacing: ".08em",
          whiteSpace: "nowrap",
        }}
      >
        {item.date}
      </span>
      <span
        style={{
          fontFamily: "var(--font-noto)",
          fontSize: ".7rem",
          color: "var(--gray)",
          border: "1px solid var(--line)",
          padding: ".2rem .6rem",
          letterSpacing: ".06em",
          whiteSpace: "nowrap",
        }}
      >
        {item.tag}
      </span>
      <span
        style={{
          fontFamily: "var(--font-noto)",
          fontSize: ".88rem",
          color: "var(--sumi)",
          letterSpacing: ".04em",
        }}
      >
        {item.title}
      </span>
      <span
        className="news-arrow"
        style={{
          fontFamily: "var(--font-cormorant)",
          fontSize: "1rem",
          color: "var(--gray-soft)",
          transition: "color .25s",
        }}
      >
        →
      </span>
      <style>{`
        .news-row:hover { padding-left: 1rem; }
        .news-row:hover .news-arrow { color: var(--shu); }
        .news-row:hover span:nth-child(3) { color: var(--shu); }
        @media (max-width: 860px) {
          .news-row { grid-template-columns: 1fr auto !important; }
          .news-row span:nth-child(2) { order: -1; grid-column: 1 / -1; }
        }
      `}</style>
    </a>
  );
}
