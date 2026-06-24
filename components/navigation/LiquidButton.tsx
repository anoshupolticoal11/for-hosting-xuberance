"use client";

import Link from "next/link";
import LiquidWrapper from "./LiquidWrapper";
import { useEffect, useState } from "react";

export default function LiquidButton() {
  const [role, setRole] = useState<string | null>(null);

  useEffect(() => {
    const checkSession = async () => {
      try {
        const res = await fetch("/api/auth/session");
        const data = await res.json();
        if (data.success && data.session) {
          setRole(data.session.role);
        } else {
          setRole(null);
        }
      } catch (e) {
        setRole(null);
      }
    };
    checkSession();

    window.addEventListener("session-change", checkSession);

    // Poll every 30 seconds to detect if account was deleted by admin
    const interval = setInterval(checkSession, 30000);

    return () => {
      window.removeEventListener("session-change", checkSession);
      clearInterval(interval);
    };
  }, []);

  let href = "/registration";
  let label = "REGISTER NOW";

  if (role === "admin") {
    href = "/registration/admin";
    label = "ADMIN";
  } else if (role === "member") {
    href = "/registration/member";
    label = "MEMBER";
  }

  return (
    <Link href={href} className="block">
      <LiquidWrapper
        className="px-2.5 py-1.5 sm:px-4 sm:py-2 md:px-8 md:py-3 rounded-full border border-cyan-500/20 bg-cyan-950/20 backdrop-blur-sm font-orbitron text-[9px] sm:text-xs lg:text-sm font-bold tracking-widest text-cyan-400 hover:bg-cyan-950/40 hover:border-cyan-400/50 hover:shadow-[0_0_30px_rgba(0,242,254,0.4)] cursor-pointer whitespace-nowrap shadow-[0_0_15px_rgba(0,242,254,0.15)]"
      >
        {label}
      </LiquidWrapper>
    </Link>
  );
}

