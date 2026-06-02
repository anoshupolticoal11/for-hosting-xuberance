"use client";

import { useAppStore } from "@/store/useAppStore";
import { useEffect, useState } from "react";

export default function DepthCounter() {
  const scrollDepth = useAppStore((state) => state.scrollDepth);
  const [displayDepth, setDisplayDepth] = useState(0);


  useEffect(() => {
    let animationFrameId: number;
    const startValue = displayDepth;
    const endValue = scrollDepth;
    const duration = 300;
    const startTime = performance.now();

    const updateDepth = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);


      const ease = progress * (2 - progress);
      const currentValue = Math.round(startValue + (endValue - startValue) * ease);

      setDisplayDepth(currentValue);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(updateDepth);
      }
    };

    animationFrameId = requestAnimationFrame(updateDepth);

    return () => cancelAnimationFrame(animationFrameId);
  }, [scrollDepth]);

  return (
    <div className="flex items-center space-x-2 font-mono-custom text-xs md:text-sm text-cyan-400 bg-cyan-950/20 px-3 py-1.5 rounded-md border border-cyan-500/20 shadow-[0_0_15px_rgba(0,242,254,0.15)] backdrop-blur-md">
      <span className="animate-pulse w-2 h-2 rounded-full bg-cyan-400" />
      <span className="text-cyan-500/60 uppercase">DEPTH:</span>
      <span className="font-bold tracking-wider">{displayDepth.toLocaleString()}m</span>
    </div>
  );
}
