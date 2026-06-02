"use client";

import Link from "next/link";
import React from "react";
import LiquidWrapper from "./LiquidWrapper";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent) => void;
}

export default function NavLink({ href, children, onClick }: NavLinkProps) {
  return (
    <Link href={href} onClick={onClick} className="block">
      <LiquidWrapper
        className="px-6 py-2 rounded-full border border-cyan-500/20 font-orbitron text-xs md:text-sm font-semibold tracking-widest text-cyan-100 group-hover:text-slate-950 transition-colors duration-500"
      >
        {children}
      </LiquidWrapper>
    </Link>
  );
}
