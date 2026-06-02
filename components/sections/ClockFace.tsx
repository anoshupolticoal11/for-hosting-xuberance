"use client";

import { useAppStore } from "@/store/useAppStore";
import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";

export default function ClockFace() {
  const { activeTimeSlot, setActiveTimeSlot } = useAppStore();
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [dragAngle, setDragAngle] = useState<number | null>(null);

  const slots = [
    { label: "09:00", angle: 270, title: "DESCENT INITIALIZATION" },
    { label: "12:00", angle: 0, title: "HYDRO-NET HACKING" },
    { label: "15:00", angle: 90, title: "BIOLUMINESCENT DESIGN" },
    { label: "18:00", angle: 180, title: "ABYSSAL EXPLORATION" },
  ];

  // Map pointer angle
  const currentSlot = slots.find((s) => s.label === activeTimeSlot) || slots[0];
  const displayedAngle = dragAngle !== null ? dragAngle : currentSlot.angle;

  const calculateAngle = (clientX: number, clientY: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = clientX - cx;
    const dy = clientY - cy;

    // Angle relative to positive y-axis (top = 0 deg, right = 90 deg, etc.)
    let rad = Math.atan2(dx, -dy);
    let deg = rad * (180 / Math.PI);
    if (deg < 0) deg += 360;

    setDragAngle(deg);

    // Find the closest slot
    let minDiff = Infinity;
    let closest = slots[0];
    slots.forEach((slot) => {
      let diff = Math.abs(deg - slot.angle);
      if (diff > 180) diff = 360 - diff;
      if (diff < minDiff) {
        minDiff = diff;
        closest = slot;
      }
    });

    if (activeTimeSlot !== closest.label) {
      setActiveTimeSlot(closest.label);
    }
  };

  const handleStart = (clientX: number, clientY: number) => {
    setIsDragging(true);
    calculateAngle(clientX, clientY);
  };

  useEffect(() => {
    if (!isDragging) return;

    const handleMove = (e: MouseEvent) => {
      calculateAngle(e.clientX, e.clientY);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length === 0) return;
      calculateAngle(e.touches[0].clientX, e.touches[0].clientY);
    };

    const handleEnd = () => {
      setIsDragging(false);
      setDragAngle(null); // Snap back to nearest active slot angle
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseup", handleEnd);
    window.addEventListener("touchmove", handleTouchMove);
    window.addEventListener("touchend", handleEnd);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseup", handleEnd);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleEnd);
    };
  }, [isDragging, activeTimeSlot]);

  return (
    <div
      ref={containerRef}
      onMouseDown={(e) => handleStart(e.clientX, e.clientY)}
      onTouchStart={(e) => {
        if (e.touches.length > 0) {
          handleStart(e.touches[0].clientX, e.touches[0].clientY);
        }
      }}
      className="relative w-72 h-72 md:w-[400px] md:h-[400px] flex items-center justify-center select-none cursor-grab active:cursor-grabbing"
    >
      {/* Astrolabe Background Glowing Ring */}
      <div className="absolute inset-0 rounded-full border border-cyan-500/10 pointer-events-none" />

      {/* Rotating Mechanical Compass Outer Ring */}
      <motion.svg
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute w-[95%] h-[95%] opacity-30 pointer-events-none text-cyan-400"
        viewBox="0 0 100 100"
      >
        <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1 3" />
        <circle cx="50" cy="50" r="44" fill="none" stroke="currentColor" strokeWidth="0.2" />
        {/* Ticks */}
        {Array.from({ length: 12 }).map((_, i) => {
          const angle = (i * 30 * Math.PI) / 180;
          const x1 = 50 + Math.cos(angle) * 44;
          const y1 = 50 + Math.sin(angle) * 44;
          const x2 = 50 + Math.cos(angle) * 48;
          const y2 = 50 + Math.sin(angle) * 48;
          return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="currentColor" strokeWidth="0.5" />;
        })}
      </motion.svg>

      {/* Counter-Rotating Middle Astrolabe Ring */}
      <motion.svg
        animate={{ rotate: -360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute w-[80%] h-[80%] opacity-40 pointer-events-none text-cyan-400"
        viewBox="0 0 100 100"
      >
        <circle cx="50" cy="50" r="46" fill="none" stroke="currentColor" strokeWidth="0.5" />
        <circle cx="50" cy="50" r="38" fill="none" stroke="currentColor" strokeWidth="0.3" strokeDasharray="3 6" />
        <path d="M 50 4 L 50 12 M 50 88 L 50 96 M 4 50 L 12 50 M 88 50 L 96 50" stroke="currentColor" strokeWidth="0.8" />
      </motion.svg>

      {/* Interactive Dial Pointer Needle */}
      <motion.div
        animate={{ rotate: displayedAngle }}
        transition={isDragging ? { type: "tween", duration: 0.05 } : { type: "spring", stiffness: 120, damping: 15 }}
        className="absolute w-full h-full pointer-events-none flex items-center justify-center z-10"
      >
        <div className="relative w-1.5 h-full flex flex-col items-center">
          {/* Glowing Pointer Arrow */}
          <div className="absolute top-4 w-4 h-4 bg-cyan-400 border border-white rotate-45 rounded-[2px] shadow-[0_0_15px_#00f2fe] z-10" />
          <div className="absolute top-6 w-[2px] h-[40%] bg-gradient-to-b from-cyan-400 to-transparent" />
          {/* Center Pivot */}
          <div className="absolute top-1/2 -translate-y-1/2 w-8 h-8 rounded-full border border-cyan-400 bg-slate-950 flex items-center justify-center shadow-[0_0_20px_rgba(0,242,254,0.5)]">
            <div className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse" />
          </div>
        </div>
      </motion.div>

      {/* Time Slots (Interactive Nodes) */}
      {slots.map((slot) => {
        const rad = (slot.angle * Math.PI) / 180;
        const distance = 42;
        const x = 50 + Math.sin(rad) * distance;
        const y = 50 - Math.cos(rad) * distance;

        const isActive = activeTimeSlot === slot.label;

        return (
          <button
            key={slot.label}
            onClick={(e) => {
              e.stopPropagation(); // Prevent container click trigger
              setActiveTimeSlot(slot.label);
            }}
            className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center group focus:outline-none z-20 cursor-pointer"
            style={{
              left: `${x}%`,
              top: `${y}%`,
            }}
          >
            {/* Active/Inactive states */}
            <div
              className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-500 ${
                isActive
                  ? "border-cyan-400 bg-cyan-950/60 shadow-[0_0_25px_rgba(0,242,254,0.6)] scale-110"
                  : "border-cyan-500/25 bg-slate-950/80 hover:border-cyan-400/60 hover:scale-105"
              }`}
            >
              <span className={`font-mono-custom text-xs font-black tracking-wider ${isActive ? "text-cyan-300" : "text-cyan-500/50 group-hover:text-cyan-300/80"}`}>
                {slot.label.split(":")[0]}
              </span>
            </div>
            {/* Time label */}
            <span
              className={`absolute top-14 whitespace-nowrap font-mono-custom text-[9px] tracking-widest px-2 py-0.5 rounded border bg-slate-950/90 transition-all duration-300 ${
                isActive
                  ? "border-cyan-400 text-cyan-400 opacity-100 scale-100"
                  : "border-cyan-500/10 text-cyan-500/40 opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100"
              }`}
            >
              {slot.label}
            </span>
          </button>
        );
      })}
    </div>
  );
}
