import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Inter,
  Lato,
  Nunito,
} from "next/font/google";

import "./globals.css";
import { AuthInitializer } from "@/features/auth";
import DevNavigation from "@/components/layout/DevNavigation";
import { Providers } from "./providers";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: "400",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ELOQ",
  description: "Learn English. Practice it. Live it.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${geistSans.variable} ${geistMono.variable} ${nunito.variable} ${lato.variable} h-full antialiased`}
    >
      <body className="min-h-dvh bg-background text-foreground">
        <Providers>
          <AuthInitializer />
          <DevNavigation />
          {children}
        </Providers>
      </body>
    </html>
  );
}
