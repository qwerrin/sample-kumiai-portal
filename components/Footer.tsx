const MENU = [
  { label: "組合について", href: "#about" },
  { label: "事業案内", href: "#business" },
  { label: "加入のご案内", href: "#cta" },
  { label: "お知らせ", href: "#news" },
  { label: "お問い合わせ", href: "#contact" },
];

const INFO = [
  { label: "設立", value: "昭和42年4月" },
  { label: "組合員数", value: "320社（2024年3月現在）" },
  { label: "所在地", value: "東京都中央区〇〇〇 ×-×-×" },
  { label: "TEL", value: "03-XXXX-XXXX" },
];

export default function Footer() {
  return (
    <footer
      id="contact"
      style={{
        background: "var(--sumi)",
        color: "var(--paper)",
        padding: "6rem 4rem 3rem",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "2fr 1fr 1.5fr",
          gap: "4rem",
          marginBottom: "4rem",
        }}
      >
        {/* 組合情報 */}
        <div>
          <p
            style={{
              fontFamily: "var(--font-shippori)",
              fontWeight: 700,
              fontSize: "1.1rem",
              letterSpacing: ".08em",
              marginBottom: "1rem",
              color: "var(--paper-2)",
            }}
          >
            東京中央事業協同組合
          </p>
          <p
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: ".75rem",
              letterSpacing: ".2em",
              color: "rgba(233,228,216,.4)",
              textTransform: "uppercase",
              marginBottom: "2rem",
            }}
          >
            Tokyo Chuo Business Cooperative
          </p>
          <p
            style={{
              fontFamily: "var(--font-noto)",
              fontSize: ".82rem",
              color: "rgba(233,228,216,.55)",
              lineHeight: 1.9,
              letterSpacing: ".04em",
            }}
          >
            中小企業の相互扶助と発展を目的とした<br />
            事業協同組合。地域とともに半世紀。
          </p>
        </div>

        {/* MENU */}
        <div>
          <p
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: ".72rem",
              letterSpacing: ".25em",
              color: "var(--shu)",
              textTransform: "uppercase",
              marginBottom: "1.5rem",
            }}
          >
            Menu
          </p>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: ".8rem" }}>
            {MENU.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  style={{
                    fontFamily: "var(--font-noto)",
                    fontSize: ".82rem",
                    color: "rgba(233,228,216,.6)",
                    textDecoration: "none",
                    letterSpacing: ".04em",
                    transition: "color .2s",
                  }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--paper-2)")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(233,228,216,.6)")}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* INFORMATION */}
        <div>
          <p
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: ".72rem",
              letterSpacing: ".25em",
              color: "var(--shu)",
              textTransform: "uppercase",
              marginBottom: "1.5rem",
            }}
          >
            Information
          </p>
          <dl style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {INFO.map((item) => (
              <div key={item.label} style={{ display: "grid", gridTemplateColumns: "4em 1fr", gap: "1rem" }}>
                <dt
                  style={{
                    fontFamily: "var(--font-noto)",
                    fontSize: ".72rem",
                    color: "rgba(233,228,216,.4)",
                    letterSpacing: ".06em",
                  }}
                >
                  {item.label}
                </dt>
                <dd
                  style={{
                    fontFamily: "var(--font-noto)",
                    fontSize: ".78rem",
                    color: "rgba(233,228,216,.6)",
                    letterSpacing: ".04em",
                    margin: 0,
                  }}
                >
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* コピーライト */}
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          paddingTop: "2rem",
          borderTop: "1px solid rgba(233,228,216,.08)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-cormorant)",
            fontSize: ".72rem",
            color: "rgba(233,228,216,.3)",
            letterSpacing: ".15em",
          }}
        >
          © 2024 Tokyo Chuo Business Cooperative. All rights reserved.
        </p>
        <p
          style={{
            fontFamily: "var(--font-cormorant)",
            fontSize: ".65rem",
            color: "rgba(233,228,216,.2)",
            letterSpacing: ".1em",
          }}
        >
          ※ This is a portfolio sample site.
        </p>
      </div>

      <style>{`
        @media (max-width: 860px) {
          footer > div:first-child { grid-template-columns: 1fr !important; padding: 0 1.5rem !important; }
          footer { padding: 4rem 1.5rem 2rem !important; }
        }
      `}</style>
    </footer>
  );
}
