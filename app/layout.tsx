import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rutvi Rathod - Software Engineer & Frontend Developer",
  description:
    "Passionate software engineer specializing in React, Next.js, and modern web technologies. Building beautiful, performant, and accessible web applications.",
  keywords:
    "Rutvi Rathod, Software Engineer, Frontend Developer, React, Next.js, TypeScript, Web Development, Portfolio",
  authors: [{ name: "Rutvi Rathod" }],
  openGraph: {
    title: "Rutvi Rathod - Software Engineer & Frontend Developer",
    description:
      "Passionate software engineer specializing in React, Next.js, and modern web technologies.",
    type: "website",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        {/* <Analytics /> */}
      </body>
    </html>
  );
}
