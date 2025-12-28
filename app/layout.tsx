import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/ui/core/navbar";
import { Footer } from "@/components/ui/core/footer";
import { CommandMenu } from "@/components/ui/core/cmd";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MiniGamesHD",
  description:
    "Ein moderner Minecraft Minigame-Server mit Fokus auf Qualität, Fairness und Community.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="de"
      className={`${geistSans.variable} ${geistMono.variable} dark`}
      suppressHydrationWarning
    >
      <body>
        <Navbar />
        {children}
        <Footer />
        <CommandMenu />
        <Toaster richColors />
      </body>
    </html>
  );
}
