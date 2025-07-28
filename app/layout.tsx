import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { JetBrains_Mono } from "next/font/google";
import Header from "@/components/Header";
import PageTransition from "@/components/pageTransition";
// import StairTransition from "@/components/stairTransition";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alejandro | Web 3 Developer",
  description: "Portfolio of Alejandro, a Web 3 Developer specializing in smart contracts, blockchain integration, and web development.",
  icons: {
    icon: '/assets/faviconAle.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${jetBrainsMono.variable} font-[family-name:var(--font-jetbrains-mono)] bg-primary text-white antialiased overflow-x-hidden`}
        suppressHydrationWarning={true}
      >
        <Header />
        {/* <StairTransition></StairTransition> */}
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
