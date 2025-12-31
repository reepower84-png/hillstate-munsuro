import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "힐스테이트 문수로 센트럴 | 울산 남구 프리미엄 주거단지",
  description: "울산 남구 삼산동 힐스테이트 문수로 센트럴. 현대건설의 프리미엄 브랜드 힐스테이트가 울산에 선보이는 랜드마크 주거단지. 분양 상담 및 견본주택 방문 예약 접수 중.",
  keywords: "힐스테이트, 문수로, 울산, 남구, 삼산동, 분양, 아파트, 현대건설",
  openGraph: {
    title: "힐스테이트 문수로 센트럴",
    description: "울산 남구의 새로운 랜드마크, 힐스테이트 문수로 센트럴",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
