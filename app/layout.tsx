import type { Metadata } from "next";
import { Orbitron, Seaweed_Script, JetBrains_Mono, Lobster_Two } from "next/font/google";
import "./globals.css";
import FluidCursorLoader from "@/components/sections/FluidCursorLoader";
import HotkeyListener from "@/components/HotkeyListener";

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

const lobsterTwo = Lobster_Two({
  weight: ["400", "700"],
  variable: "--font-lobster-two",
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
      className={`${orbitron.variable} ${seaweedScript.variable} ${jetbrainsMono.variable} ${lobsterTwo.variable} h-full antialiased`}
    >
      <head>
        <meta name="color-scheme" content="dark" />
      </head>
      <body className="bg-[#02050e] text-slate-100 min-h-full font-sans overflow-x-clip selection:bg-cyan-500/30 selection:text-cyan-200">
        {children}
        <FluidCursorLoader />
        <HotkeyListener />
      </body>
    </html>
  );
}
