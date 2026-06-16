import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/LanguageContext";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { ScrollProgress } from "@/components/ui/ScrollProgress";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Praveen Skanda Rupan | Data Analyst & AI Consultant",
  description: "Premium Portfolio of Praveen Skanda Rupan - Data Analyst and AI Consultant based in Hamburg.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${inter.variable} ${outfit.variable} antialiased dark scroll-smooth md:cursor-none`}
    >
      <body className="min-h-screen bg-[#030305] text-slate-200 selection:bg-blue-500/30">
        <LanguageProvider>
          <ScrollProgress />
          <CustomCursor />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
