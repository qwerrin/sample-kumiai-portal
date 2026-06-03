const MENU = [
  { label: "組合について", href: "#about" },
  { label: "事業案内", href: "#business" },
  { label: "加入のご案内", href: "#admission" },
  { label: "お知らせ", href: "#news" },
];

const INFO = [
  { label: "組合概要", href: "#" },
  { label: "アクセス", href: "#" },
  { label: "個人情報保護方針", href: "#" },
  { label: "お問い合わせ", href: "#contact" },
];

export default function Footer() {
  return (
    <footer
      id="contact"
      style={{
        background: "var(--sumi)",
        color: "rgba(241,237,227,.6)",
        padding: "4.5rem 3.5rem 2rem",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1.4fr 1fr 1fr",
          gap: "3rem",
          maxWidth: 1200,
          margin: "0 auto 3rem",
        }}
      >
        {/* ブランド */}
        <div>
          <div
            style={{
              fontFamily: "var(--font-shippori)",
              fontSize: "1.4rem",
              color: "var(--paper-2)",
              letterSpacing: ".12em",
              marginBottom: "1rem",
            }}
          >
            〇〇事業協同組合
          </div>
          <p style={{ fontSize: ".84rem", lineHeight: 1.9 }}>
            〒000-0000 ○○都○○区○○ 0-0-0 ○○ビル0F<br />
            TEL 00-0000-0000 / FAX 00-0000-0000<br />
            受付時間 平日 9:00 – 17:30
          </p>
        </div>

        {/* MENU */}
        <div>
          <h4
            style={{
              fontSize: ".72rem",
              letterSpacing: ".24em",
              color: "rgba(241,237,227,.45)",
              marginBottom: "1.4rem",
            }}
          >
            MENU
          </h4>
          <ul style={{ listStyle: "none" }}>
            {MENU.map((item) => (
              <li key={item.href} style={{ marginBottom: ".9rem" }}>
                <a
                  href={item.href}
                  className="foot-link"
                  style={{
                    color: "rgba(241,237,227,.6)",
                    textDecoration: "none",
                    fontSize: ".86rem",
                    transition: "color .3s",
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* INFORMATION */}
        <div>
          <h4
            style={{
              fontSize: ".72rem",
              letterSpacing: ".24em",
              color: "rgba(241,237,227,.45)",
              marginBottom: "1.4rem",
            }}
          >
            INFORMATION
          </h4>
          <ul style={{ listStyle: "none" }}>
            {INFO.map((item) => (
              <li key={item.href} style={{ marginBottom: ".9rem" }}>
                <a
                  href={item.href}
                  className="foot-link"
                  style={{
                    color: "rgba(241,237,227,.6)",
                    textDecoration: "none",
                    fontSize: ".86rem",
                    transition: "color .3s",
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ボトム */}
      <div
        style={{
          borderTop: "1px solid rgba(241,237,227,.12)",
          paddingTop: "1.8rem",
          maxWidth: 1200,
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          fontSize: ".74rem",
          letterSpacing: ".08em",
          color: "rgba(241,237,227,.4)",
        }}
      >
        <span>© 2026 〇〇事業協同組合 ※ポートフォリオ用サンプルサイト</span>
        <span style={{ fontFamily: "var(--font-cormorant)" }}>SAMPLE COOPERATIVE ASSOCIATION</span>
      </div>

      <style>{`
        .foot-link:hover { color: var(--paper-2) !important; }
        @media (max-width: 860px) {
          footer [style*="repeat"] { grid-template-columns: 1fr !important; gap: 2rem !important; }
          footer [style*="space-between"] { flex-direction: column; gap: .6rem; }
        }
      `}</style>
    </footer>
  );
}
