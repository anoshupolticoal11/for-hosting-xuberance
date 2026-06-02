import type { Metadata } from "next";
import { Orbitron, Seaweed_Script, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import FluidCursorLoader from "@/components/sections/FluidCursorLoader";

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  display: "swap",
});

const seaweedScript = Seaweed_Script({
  weight: "400",
  variable: "--font-seaweed",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono-custom",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "X-Uberance'26",
  description: "A premium, animated interactive deep sea digital voyage exploring the Mariana Trench and epic epochs of eminence.",
  icons: {
    icon: "/Xub.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${orbitron.variable} ${seaweedScript.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="bg-[#02050e] text-slate-100 min-h-full font-sans overflow-x-clip selection:bg-cyan-500/30 selection:text-cyan-200">
        {children}
        <FluidCursorLoader />
      </body>
    </html>
  );
}
