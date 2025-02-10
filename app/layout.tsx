import type { Metadata } from "next";
import "./globals.css";
import Gnb from "@components/common/Gnb";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="font-pretendard bg-gray-100 antialiased">
        <Gnb />
        {children}
      </body>
    </html>
  );
}
