import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rezso Dubiczki — Senior Front-End Developer",
  description:
    "Rezso Dubiczki senior front-end fejlesztő online önéletrajza. React, Next.js, TypeScript és modern webes alkalmazások.",
  metadataBase: new URL("https://rezsodubiczki.com"),
  openGraph: {
    title: "Rezso Dubiczki — Senior Front-End Developer",
    description: "Senior Front-End Developer · Brisbane, Australia",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
