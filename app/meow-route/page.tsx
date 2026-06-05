"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function MeowRoutePage() {
  const router = useRouter();
  const [authorized, setAuthorized] = useState<boolean | null>(null);

  useEffect(() => {
    const allowed = sessionStorage.getItem("allowMeow");
    if (allowed === "true") {
      setAuthorized(true);
    } else {
      setAuthorized(false);
      router.replace("/");
    }
  }, [router]);

  if (authorized === null) {
    return (
      <main className="min-h-screen bg-black flex items-center justify-center text-slate-500 font-mono-custom text-xs uppercase tracking-widest">
        Verifying access...
      </main>
    );
  }

  if (!authorized) {
    return null; // Will redirect in useEffect
  }

  return (
    <main className="min-h-screen bg-black flex items-center justify-center select-none overflow-hidden">
      <h1 className="font-orbitron text-xl sm:text-2xl md:text-3xl font-black tracking-widest text-slate-100 uppercase drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]">
        You have passed
      </h1>
    </main>
  );
}
