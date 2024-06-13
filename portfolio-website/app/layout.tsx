import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";
import { ThemeProvider } from "@/src/components/ThemeProvider"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Kevin Brennan",
    default: "Kevin Brennan",
  },
  description: "Check out my portfolio website!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-screen">
      <body className="flex flex-col min-h-screen">
        <ThemeProvider attribute="class">
            <Navbar />
            <main className="flex-grow mx-auto max-w-3xl px-3 py-10">{children}</main>
            <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
