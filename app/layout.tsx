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
  title: "東京中央事業協同組合",
  description: "中小企業の力を、ひとつに束ねる。地域とともに、半世紀。",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" className={`${shippori.variable} ${noto.variable} ${cormorant.variable}`}>
      <body>{children}</body>
    </html>
  );
}
