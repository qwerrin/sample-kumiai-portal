import Reveal from "./Reveal";

export default function Cta() {
  return (
    <section
      id="admission"
      style={{
        textAlign: "center",
        background: "var(--paper-3)",
        borderTop: "1px solid var(--line-soft)",
        padding: "8rem 3.5rem",
      }}
    >
      <Reveal>
        <div>
          {/* CTA用ラベル（両側ライン） */}
          <div
            style={{
              justifyContent: "center",
              display: "inline-flex",
              alignItems: "center",
              gap: "1rem",
              color: "var(--shu)",
              fontFamily: "var(--font-cormorant)",
              fontSize: ".72rem",
              letterSpacing: ".32em",
              marginBottom: "1.4rem",
            }}
          >
            <span style={{ display: "block", width: 34, height: 1, background: "var(--shu)" }} />
            JOIN US
            <span style={{ display: "block", width: 34, height: 1, background: "var(--shu)" }} />
          </div>

          <h2
            style={{
              fontFamily: "var(--font-shippori)",
              fontWeight: 600,
              fontSize: "clamp(1.9rem,3.6vw,2.9rem)",
              marginBottom: "1.4rem",
              letterSpacing: ".04em",
            }}
          >
            共に、次の半世紀へ。
          </h2>

          <p
            style={{
              color: "var(--gray)",
              maxWidth: 560,
              margin: "0 auto 2.8rem",
            }}
          >
            加入のご相談・資料請求はお気軽にお問い合わせください。
            組合の事業内容や加入条件について、担当者が丁寧にご説明いたします。
          </p>

          <a href="#contact" className="btn btn-solid">
            加入のご案内・お問い合わせ <span className="arr">→</span>
          </a>
        </div>
      </Reveal>
    </section>
  );
}
