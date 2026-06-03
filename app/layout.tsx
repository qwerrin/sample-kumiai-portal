import type { Metadata } from "next";
import { Shippori_Mincho, Noto_Sans_JP, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const shippori = Shippori_Mincho({
  variable: "--font-shippori",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const noto = Noto_Sans_JP({
  variable: "--font-noto",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "【サンプル】〇〇事業協同組合",
  description: "ポートフォリオ用サンプルサイト — 事業協同組合ポータルのUI/UX実装例",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" className={`${shippori.variable} ${noto.variable} ${cormorant.variable}`}>
      <body>{children}</body>
    </html>
  );
}
