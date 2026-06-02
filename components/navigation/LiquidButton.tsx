"use client";

import Link from "next/link";
import LiquidWrapper from "./LiquidWrapper";

export default function LiquidButton() {
  return (
    <Link href="/registration" className="block">
      <LiquidWrapper
        className="px-8 py-3 rounded-full border-2 border-cyan-400 font-orbitron text-xs md:text-sm font-bold tracking-widest text-cyan-400 group-hover:text-slate-950 shadow-[0_0_15px_rgba(0,242,254,0.25)] hover:shadow-[0_0_30px_rgba(0,242,254,0.6)] cursor-pointer"
      >
        REGISTER NOW
      </LiquidWrapper>
    </Link>
  );
}
