"use client";

import { useAppStore } from "@/store/useAppStore";
import Image from "next/image";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function VideoBackground() {
  const scrollDepth = useAppStore((state) => state.scrollDepth);
  const setScrollDepth = useAppStore((state) => state.setScrollDepth);
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== "/") {
      setScrollDepth(0);
    }
  }, [pathname, setScrollDepth]);

  // Map scrollDepth (0 to 10994) to a black overlay opacity (from 0 at surface to 0.9 at challenger deep)
  // If not on the home page, keep a static subtle dark overlay for readability
  const baseOverlay = pathname === "/" ? (scrollDepth / 10994) * 0.9 : 0.4;
  const overlayOpacity = Math.min(Math.max(baseOverlay, 0), 0.9);

  return (
    <div className="fixed inset-0 w-full h-full -z-20 pointer-events-none overflow-hidden select-none">
      {/* Background Image */}
      <Image
        src="/bg.png"
        alt="Ocean Abyss Background"
        fill
        priority
        className="object-cover opacity-60"
      />

      {/* Darkening Overlay mask based on scroll depth */}
      <div 
        className="absolute inset-0 bg-slate-950 transition-opacity duration-300 ease-out pointer-events-none"
        style={{ opacity: overlayOpacity }}
      />
    </div>
  );
}
