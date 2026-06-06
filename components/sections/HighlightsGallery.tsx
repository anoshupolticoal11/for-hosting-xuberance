"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import AnimateGrid from "@/components/ui/animate-grid/AnimateGrid";
import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface GalleryPhoto {
  src: string;
  title: string;
}

const galleryPhotos: GalleryPhoto[] = [
  { src: "/gallery/X-CALIBRE.JPG", title: "X-CALIBRE" },
  { src: "/gallery/X-ART.JPG", title: "X-ART" },
  { src: "/gallery/X-WICKET.JPG", title: "X-WICKET" },
  { src: "/gallery/X-ALAAP.JPG", title: "X-ALAAP" },
  { src: "/gallery/X-KHO.JPG", title: "X-KHO" },
  { src: "/gallery/X-PONG.JPG", title: "X-PONG" },
  { src: "/gallery/X-TEMPORE.JPG", title: "X-TEMPORE" },
  { src: "/gallery/X-TRAVAGANCE.JPG", title: "X-TRAVAGANCE" },
  { src: "/gallery/X-VIBRANCE.JPG", title: "X-VIBRANCE" },
  { src: "/gallery/X-HIBIT.JPG", title: "X-HIBIT" },
  { src: "/gallery/Guest Performance.jpg", title: "Guest Performance" },
  { src: "/gallery/X-NATAK.jpg", title: "X-NATAK" },
  { src: "/gallery/X-PULL.jpeg", title: "X-PULL" },
  { src: "/gallery/X-CODE.JPG", title: "X-CODE" },
  { src: "/gallery/X-PUZZLE.JPG", title: "X-PUZZLE" },
  { src: "/gallery/X-SPRAY.JPG", title: "X-SPRAY" },
];

export default function HighlightsGallery() {
  const [isMobile, setIsMobile] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);

  const cards = galleryPhotos.map((photo) => ({
    logo: photo.src,
    title: photo.title,
  }));

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Start Autoplay for 3D Carousel on Mobile
  useEffect(() => {
    if (!isMobile) return;
    const startAutoplay = () => {
      autoplayRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % galleryPhotos.length);
      }, 3500);
    };
    startAutoplay();
    return () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
    };
  }, [isMobile]);

  const handlePrev = () => {
    if (autoplayRef.current) clearInterval(autoplayRef.current);
    setActiveIndex((prev) => (prev - 1 + galleryPhotos.length) % galleryPhotos.length);
  };

  const handleNext = () => {
    if (autoplayRef.current) clearInterval(autoplayRef.current);
    setActiveIndex((prev) => (prev + 1) % galleryPhotos.length);
  };

  const getCardStyle = (index: number) => {
    const N = galleryPhotos.length;
    let diff = index - activeIndex;

    // Account for wrap-around to show the closest cards
    if (diff > N / 2) diff -= N;
    if (diff < -N / 2) diff += N;

    const absDiff = Math.abs(diff);

    // Hide cards that are far away to prevent clutter
    if (absDiff > 2) {
      return {
        opacity: 0,
        scale: 0.5,
        x: diff > 0 ? 300 : -300,
        zIndex: 0,
        rotateY: diff > 0 ? -45 : 45,
        pointerEvents: "none" as const,
      };
    }

    const scale = 1 - absDiff * 0.15;
    const x = diff * 120; // translation in pixels
    const zIndex = 10 - absDiff;
    const rotateY = -diff * 30; // rotation in degrees
    const opacity = 1 - absDiff * 0.35;

    return {
      opacity,
      scale,
      x,
      zIndex,
      rotateY,
      pointerEvents: absDiff === 0 ? ("auto" as const) : ("none" as const),
    };
  };

  return (
    <section id="highlights" className="relative py-20 md:py-32 bg-transparent overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] caustic-glow pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="text-center mb-16 md:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            className="font-orbitron text-3xl md:text-5xl font-black tracking-wider text-slate-100"
          >
            EVENT GALLERY
          </motion.h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto mt-6" />
        </div>

        {isMobile ? (
          /* Mobile 3D Carousel View */
          <div className="relative flex flex-col items-center justify-center py-10 w-full min-h-[460px] overflow-visible select-none">
            <div 
              className="relative w-full flex items-center justify-center h-[340px]"
              style={{ perspective: "1000px", transformStyle: "preserve-3d" }}
            >
              <AnimatePresence initial={false}>
                {galleryPhotos.map((photo, index) => {
                  const style = getCardStyle(index);
                  return (
                    <motion.div
                      key={photo.src}
                      animate={style}
                      transition={{ type: "spring", stiffness: 300, damping: 28 }}
                      className="absolute w-[220px] h-[290px] rounded-2xl bg-slate-950/80 border border-cyan-500/20 shadow-[0_15px_35px_rgba(0,0,0,0.6)] overflow-hidden cursor-pointer"
                      onClick={() => {
                        if (autoplayRef.current) clearInterval(autoplayRef.current);
                        setActiveIndex(index);
                      }}
                      drag="x"
                      dragConstraints={{ left: 0, right: 0 }}
                      onDragEnd={(e, info) => {
                        const threshold = 50;
                        if (info.offset.x < -threshold) handleNext();
                        else if (info.offset.x > threshold) handlePrev();
                      }}
                    >
                      <div className="relative w-full h-[85%] overflow-hidden">
                        <Image
                          src={photo.src}
                          alt={photo.title}
                          fill
                          sizes="220px"
                          className="object-cover pointer-events-none"
                          priority={index === activeIndex}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
                      </div>
                      <div className="h-[15%] flex items-center justify-center px-4 bg-slate-950 border-t border-cyan-500/10">
                        <span className="font-orbitron text-[10px] font-bold text-cyan-400 tracking-wider uppercase truncate max-w-full">
                          {photo.title}
                        </span>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>

            {/* Control indicators & buttons */}
            <div className="flex items-center gap-6 mt-6 z-20">
              <button
                onClick={handlePrev}
                className="w-10 h-10 rounded-full bg-cyan-950/45 border border-cyan-500/30 flex items-center justify-center text-cyan-400 hover:bg-cyan-900/60 active:scale-90 transition-all cursor-pointer"
              >
                <ChevronLeft size={20} />
              </button>
              <span className="font-mono-custom text-[11px] text-cyan-300 tracking-widest bg-cyan-950/20 px-3 py-1 rounded-md border border-cyan-500/10">
                {activeIndex + 1} / {galleryPhotos.length}
              </span>
              <button
                onClick={handleNext}
                className="w-10 h-10 rounded-full bg-cyan-950/45 border border-cyan-500/30 flex items-center justify-center text-cyan-400 hover:bg-cyan-900/60 active:scale-90 transition-all cursor-pointer"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        ) : (
          /* PC Grid View */
          <div className="flex items-center justify-center p-4">
            <AnimateGrid
              cards={cards}
              textGlowStartColor="rgba(0, 242, 254, 0.25)"
              textGlowEndColor="rgba(0, 242, 254, 1)"
              perspective={800}
              rotateX={-5}
              rotateY={-10}
              renderCard={(item, index) => (
                <div className="relative group/card flex flex-col h-full justify-between">
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-slate-950/40 border border-cyan-500/10">
                    <Image
                      src={item.logo}
                      alt={item.title || ""}
                      fill
                      sizes="(max-width: 768px) 50vw, 25vw"
                      className="object-cover group-hover/card:scale-105 transition-transform duration-700 ease-out"
                      priority={index < 4}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-60" />
                  </div>
                  <div className="mt-3 text-center">
                    <span className="font-orbitron text-[10px] md:text-xs font-bold text-cyan-400/90 tracking-wider uppercase block truncate">
                      {item.title}
                    </span>
                  </div>
                </div>
              )}
            />
          </div>
        )}
      </div>
    </section>
  );
}
