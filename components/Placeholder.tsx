type Props = {
  label: string;
  tone: string;
  ratio: string;
  className?: string;
};

export default function Placeholder({ label, tone, ratio, className = "" }: Props) {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-2 bg-[var(--paper-3)] border border-[var(--line)] ${className}`}
      style={{ aspectRatio: ratio.replace(":", "/") }}
    >
      <span className="font-[family-name:var(--font-cormorant)] text-xs tracking-widest text-[var(--gray)] uppercase">
        {label}
      </span>
      <span className="text-[10px] text-[var(--gray-soft)]">{tone}</span>
      <span className="text-[10px] text-[var(--gray-soft)]">{ratio}</span>
    </div>
  );
}
