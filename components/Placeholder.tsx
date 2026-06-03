type Props = {
  ic: string;
  title: string;
  dir: string;
  ratio: string;
  className?: string;
  style?: React.CSSProperties;
};

export default function Placeholder({ ic, title, dir, ratio, className = "", style }: Props) {
  return (
    <div
      className={`ph ${className}`}
      style={{
        position: "relative",
        overflow: "hidden",
        background: "var(--paper-3)",
        border: "1px solid var(--line)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        ...style,
      }}
    >
      {/* グレー諧調で「写真が入る面」を示す */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(135deg,#d8d2c4 0%,#c3bdae 45%,#aaa498 100%)",
          opacity: 0.9,
        }}
      />
      {/* 仮placeholderである明示 */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background:
            "repeating-linear-gradient(45deg,rgba(28,26,22,.04) 0 14px,transparent 14px 28px)",
        }}
      />
      {/* ラベル */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
          color: "var(--sumi-2)",
          padding: "1.5rem",
          maxWidth: "90%",
        }}
      >
        <div
          style={{
            fontFamily: "var(--font-cormorant)",
            fontSize: ".7rem",
            letterSpacing: ".3em",
            color: "var(--shu)",
            marginBottom: ".7rem",
          }}
        >
          {ic}
        </div>
        <div
          style={{
            fontFamily: "var(--font-shippori)",
            fontSize: "1rem",
            fontWeight: 600,
            marginBottom: ".5rem",
          }}
        >
          {title}
        </div>
        <div
          style={{
            fontSize: ".74rem",
            lineHeight: 1.8,
            color: "var(--gray)",
          }}
        >
          {dir}
        </div>
        <div
          style={{
            display: "inline-block",
            marginTop: ".8rem",
            fontFamily: "var(--font-cormorant)",
            fontSize: ".68rem",
            letterSpacing: ".14em",
            color: "var(--gray-soft)",
            borderTop: "1px solid var(--line-soft)",
            paddingTop: ".6rem",
          }}
        >
          {ratio}
        </div>
      </div>
    </div>
  );
}
