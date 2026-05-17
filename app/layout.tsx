import type { Metadata } from "next";
// Grouped imports for cleaner code
import { Geist, Geist_Mono, JetBrains_Mono } from "next/font/google";
import Header from "@/components/Header";
import PageTransition from "@/components/pageTransition";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

// Added display: "swap" to prevent Flash of Invisible Text (FOIT) and improve FCP
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap", 
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

// Loading 8 weights blocks FCP. Remove the ones you don't use in your CSS (e.g., keep only 300, 400, 700).
// Added display: "swap" for instant text rendering
const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"], 
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  // Base URL for relative links in metadata 
  metadataBase: new URL('https://alejandroalonzo.com'),
  // Title template dynamically adds the site name to specific pages
  title: {
    default: 'Alejandro Alonzo | Full-Stack & Blockchain Developer',
    template: '%s | Alejandro Alonzo Portfolio',
  },
  description: "Portfolio of Alejandro, a Web 3 Developer specializing in smart contracts, blockchain integration, and web development.",
  // Relevant keywords for search engines
  keywords: ['Web Development', 'Blockchain', 'Smart Contracts', 'SEO Services', 'Next.js', 'Firebase', 'React', 'Angular', 'full stack'],
  icons: {
    icon: '/assets/faviconAle.png',
  },
  // Open Graph metadata for social media sharing (LinkedIn, Twitter, etc.)
  openGraph: {
    title: 'Alejandro Alonzo | Full-Stack & Blockchain Developer',
    description: 'Specializing in Web3, modern web architecture, and technical SEO.',
    url: 'https://alejandroalonzo.com',
    siteName: 'Alejandro Alonzo Portfolio',
    images: [
      {
        url: '/og-image.png', 
        width: 1200,
        height: 630,
        alt: 'Alejandro Alonzo Portfolio Preview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  // Twitter specific metadata
  twitter: {
    card: 'summary_large_image',
    title: 'Alejandro Alonzo | Web & Blockchain Developer',
    description: 'Specializing in Web3, modern web architecture, and technical SEO.',
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
        <PageTransition>{children}</PageTransition>
        <SpeedInsights />
      </body>
    </html>
  );
}