import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Reginald Reed Jr. | Systems Designer. Liberation Architect.",
  description:
    "Founder of House Reed — an integrated ecosystem of enterprises in Milwaukee engineered to reverse urban poverty. 525+ people trained. $60M+ in wages generated. Zero tuition.",
  keywords: [
    "Reginald Reed Jr",
    "House Reed",
    "workforce development",
    "Milwaukee",
    "53206",
    "liberation infrastructure",
    "systems design",
    "AI architect",
    "REIGN",
    "Mindful Group",
  ],
  openGraph: {
    title: "Reginald Reed Jr. | Systems Designer. Liberation Architect.",
    description:
      "Founder of House Reed — reversing urban poverty through integrated enterprise infrastructure in Milwaukee.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
