@AGENTS.md

# CLAUDE.md — sample-kumiai-portal

ポートフォリオ用サンプル。事業協同組合ポータルのUI/UX実装例。

## コマンド

```bash
npm run dev    # 開発サーバー (localhost:3000)
npm run build  # 本番ビルド
npx tsc --noEmit  # 型チェック
```

## 構成

```
app/
  layout.tsx     # フォント読み込み（Shippori Mincho / Noto Sans JP / Cormorant Garamond）
  page.tsx       # ホーム（全セクションを並べるだけ）
  globals.css    # デザイントークン（CSS変数）、共通クラス（.reveal, .btn, .biz-card 等）
components/
  Header.tsx     # 'use client' — スクロール検知
  Hero.tsx       # 'use client' — load時stagger
  About.tsx
  Business.tsx
  Stats.tsx
  News.tsx
  Cta.tsx
  Footer.tsx
  Reveal.tsx     # 'use client' — IntersectionObserver
  Placeholder.tsx  # 画像ディレクション表示（差し替え前提）
```

## デザイントークン

| 変数 | 値 | 用途 |
|---|---|---|
| `--paper` | #e9e4d8 | ベース背景 |
| `--paper-2` | #f1ede3 | 明るい面 |
| `--paper-3` | #e2dccd | 沈んだ面（CTA背景等） |
| `--sumi` | #1c1a16 | 主役の文字・濃色面（Footer等） |
| `--sumi-2` | #2b2823 | hover時の濃色 |
| `--gray` | #6b665c | 本文補助 |
| `--gray-soft` | #8c877b | さらに薄い補助 |
| `--shu` | #9e3b25 | 差し色（ラベル・罫線・hover のみ） |
| `--line` | rgba(28,26,22,.18) | 罫線 |
| `--line-soft` | rgba(28,26,22,.1) | 薄い罫線 |

## ルール

- **Server Component に `onMouseEnter/Leave` を書かない** — CSS hover（`.foot-link:hover` 等）で代替
- **`@theme inline` ブロックは使わない** — Tailwind v4 との競合で CSS 変数が崩れる
- **外部アニメーションライブラリ不使用** — CSS + IntersectionObserver のみ
- **画像は `next/image` + WebP** — `Placeholder.tsx` を差し替える形で実装
- **ブランチ運用**: `feature/*` → `develop` → `main`
