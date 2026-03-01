import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Template one",
  description: "For wedding",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Toaster />
        <div className="relative z-10">{children}</div>
        <div
          className="fixed inset-0 -z-10"
          style={{
            backgroundImage: "url(/paper-texture.jpg)",
            backgroundRepeat: "repeat",
            opacity: 0.5,
          }}
        />
        <div className="absolute inset-0 bg-linear-to-b from-gray-400/20 to-transparent pointer-events-none z-0" />
      </body>
    </html>
  );
}
