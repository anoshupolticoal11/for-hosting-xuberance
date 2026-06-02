"use client";

import { useAppStore } from "@/store/useAppStore";
import { useEffect, useState } from "react";

export default function DepthWaterBar() {
  const scrollDepth = useAppStore((state) => state.scrollDepth);
  const [displayDepth, setDisplayDepth] = useState(0);

  // Smooth out the depth transition for the telemetry text
  useEffect(() => {
    let animationFrameId: number;
    const startValue = displayDepth;
    const endValue = scrollDepth;
    const duration = 400; // ms
    const startTime = performance.now();

    const updateDepth = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Smooth quadratic out easing
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

  // Max depth is 10,994m
  const percentage = Math.min(Math.max(scrollDepth / 10994, 0), 1);

  return (
    <div className="w-full flex flex-col items-center">
      {/* Inlined keyframes to animate background-position-x for liquid wave movement */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes wave-move-1 {
          0% { background-position-x: 0px; }
          100% { background-position-x: 80px; }
        }
        @keyframes wave-move-2 {
          0% { background-position-x: 0px; }
          100% { background-position-x: -60px; }
        }
        .wave-layer-1 {
          animation: wave-move-1 3s linear infinite;
        }
        .wave-layer-2 {
          animation: wave-move-2 2.5s linear infinite;
        }
      `}} />

      {/* Liquid Water Fill Bar Container */}
      <div className="relative w-full h-[8px] bg-slate-950/80 border-b border-cyan-500/10 overflow-hidden shadow-[inset_0_1px_3px_rgba(0,0,0,0.8)]">
        {/* Filled water area background */}
        <div
          className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-700 via-cyan-500 to-cyan-400 transition-all duration-300 ease-out"
          style={{ width: `${percentage * 100}%` }}
        >
          {/* Subtle inner ambient pulse */}
          <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white/10" />
        </div>
        
        {/* Primary animated wave layer */}
        <div 
          className="absolute top-0 bottom-0 left-0 h-full opacity-40 pointer-events-none bg-repeat-x wave-layer-1 transition-all duration-300 ease-out"
          style={{ 
            width: `${percentage * 100}%`,
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120 28'%3E%3Cpath fill='%2300f2fe' d='M0 15 Q 30 5, 60 15 T 120 15 L 120 28 L 0 28 Z'/%3E%3C/svg%3E")`,
            backgroundSize: '80px 100%'
          }}
        />

        {/* Secondary animated wave layer (reverse direction) */}
        <div 
          className="absolute top-0 bottom-0 left-0 h-full opacity-35 pointer-events-none bg-repeat-x wave-layer-2 transition-all duration-300 ease-out"
          style={{ 
            width: `${percentage * 100}%`,
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120 28'%3E%3Cpath fill='%230072ff' d='M0 12 Q 30 22, 60 12 T 120 12 L 120 28 L 0 28 Z'/%3E%3C/svg%3E")`,
            backgroundSize: '60px 100%'
          }}
        />

        {/* Glowing tip indicator */}
        <div
          className="absolute top-0 bottom-0 w-[4px] bg-cyan-300 shadow-[0_0_8px_#00f2fe] transition-all duration-300 ease-out"
          style={{ left: `calc(${percentage * 100}% - 2px)` }}
        />
      </div>

      {/* Telemetry Text */}
      <div className="mt-2 font-mono-custom text-[11px] md:text-xs text-cyan-400 tracking-[0.2em] uppercase drop-shadow-[0_0_8px_rgba(0,242,254,0.3)]">
        Depth : <span className="font-bold font-sans text-cyan-100">{displayDepth.toLocaleString()}m</span>
      </div>
    </div>
  );
}
