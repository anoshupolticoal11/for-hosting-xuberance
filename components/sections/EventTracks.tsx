"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState, useCallback } from "react";
import EventCard from "./EventCard";
import LiquidWrapper from "@/components/navigation/LiquidWrapper";
import { allEvents } from "@/data/events";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function EventTracks() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const totalEvents = allEvents.length;

  const wrapIndex = useCallback(
    (i: number) => ((i % totalEvents) + totalEvents) % totalEvents,
    [totalEvents]
  );

  const goNext = useCallback(() => {
    setActiveIndex((prev) => wrapIndex(prev + 1));
  }, [wrapIndex]);

  const goPrev = useCallback(() => {
    setActiveIndex((prev) => wrapIndex(prev - 1));
  }, [wrapIndex]);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(goNext, 3000);
    return () => clearInterval(interval);
  }, [isPaused, goNext]);

  const containerRef = useRef<HTMLDivElement>(null);

  const visibleCount = 3;
  const visibleIndices: number[] = [];
  for (let offset = -Math.floor(visibleCount / 2); offset <= Math.floor(visibleCount / 2); offset++) {
    visibleIndices.push(wrapIndex(activeIndex + offset));
  }

  const getCardStyle = (offset: number, eventIdx: number) => {
    const isHovered = hoveredIndex === eventIdx;
    const absOffset = Math.abs(offset);

    let scale = 1;
    let opacity = 1;
    let zIndex = 10;

    if (isHovered) {
      scale = 1.12;
      opacity = 1;
      zIndex = 30;
    } else if (hoveredIndex !== null) {
      scale = absOffset === 0 ? 0.88 : 0.7 - absOffset * 0.06;
      opacity = absOffset === 0 ? 0.7 : 0.4 - absOffset * 0.05;
      zIndex = 5 - absOffset;
    } else {
      if (absOffset === 0) {
        scale = 1.08;
        opacity = 1;
        zIndex = 20;
      } else if (absOffset === 1) {
        scale = 0.88;
        opacity = 0.7;
        zIndex = 10;
      } else {
        scale = 0.72;
        opacity = 0.45;
        zIndex = 5;
      }
    }

    return { scale, opacity, zIndex };
  };

  return (
    <section id="tracks" className="relative py-28 md:py-36 bg-transparent overflow-hidden">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] caustic-glow pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-orbitron text-3xl md:text-5xl font-black tracking-wider text-slate-100"
          >
            EVENTS
          </motion.h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto mt-6" />
        </div>

        <div
          ref={containerRef}
          className="relative w-full"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => {
            setIsPaused(false);
            setHoveredIndex(null);
          }}
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "ArrowLeft") {
              e.preventDefault();
              goPrev();
            } else if (e.key === "ArrowRight") {
              e.preventDefault();
              goNext();
            }
          }}
        >
          <button
            onClick={goPrev}
            className="absolute left-0 md:left-2 top-1/2 -translate-y-1/2 z-30 w-10 h-10 md:w-12 md:h-12 rounded-full bg-cyan-950/60 border border-cyan-400/30 backdrop-blur-md flex items-center justify-center text-cyan-300 hover:text-white hover:bg-cyan-800/60 hover:border-cyan-400/60 transition-all duration-300 cursor-pointer shadow-[0_0_15px_rgba(0,242,254,0.15)]"
            aria-label="Previous event"
          >
            <ChevronLeft size={22} />
          </button>
          <button
            onClick={goNext}
            className="absolute right-0 md:right-2 top-1/2 -translate-y-1/2 z-30 w-10 h-10 md:w-12 md:h-12 rounded-full bg-cyan-950/60 border border-cyan-400/30 backdrop-blur-md flex items-center justify-center text-cyan-300 hover:text-white hover:bg-cyan-800/60 hover:border-cyan-400/60 transition-all duration-300 cursor-pointer shadow-[0_0_15px_rgba(0,242,254,0.15)]"
            aria-label="Next event"
          >
            <ChevronRight size={22} />
          </button>

          <div className="flex items-center justify-center gap-4 md:gap-6 py-8 px-12 md:px-16 min-h-[420px]">
            {visibleIndices.map((eventIdx, posIdx) => {
              const offset = posIdx - Math.floor(visibleCount / 2);
              const { scale, opacity, zIndex } = getCardStyle(offset, eventIdx);
              const event = allEvents[eventIdx];

              return (
                <motion.div
                  key={event.title + "-" + eventIdx}
                  animate={{
                    scale,
                    opacity,
                    zIndex,
                  }}
                  transition={{
                    duration: 0.5,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  className="w-[220px] sm:w-[260px] md:w-[300px] shrink-0 origin-center hidden sm:block"
                  onMouseEnter={() => setHoveredIndex(eventIdx)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  onClick={() => setActiveIndex(eventIdx)}
                >
                  <EventCard {...event} />
                </motion.div>
              );
            })}

            <div className="block sm:hidden w-[300px]">
              <EventCard {...allEvents[activeIndex]} />
            </div>
          </div>


        </div>

        <div className="flex justify-center gap-1.5 mt-4">
          {allEvents.slice(0, Math.min(totalEvents, 20)).map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${
                i === activeIndex
                  ? "bg-cyan-400 w-6 shadow-[0_0_8px_rgba(0,242,254,0.5)]"
                  : "bg-cyan-900/50 hover:bg-cyan-700/50"
              }`}
              aria-label={`Go to event ${i + 1}`}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center mt-12"
        >
          <Link href="/events">
            <LiquidWrapper className="px-12 py-4 rounded-full border-2 border-cyan-400 font-orbitron text-sm md:text-base font-bold tracking-widest text-cyan-400 group-hover:text-slate-950 shadow-[0_0_15px_rgba(0,242,254,0.25)] hover:shadow-[0_0_30px_rgba(0,242,254,0.6)]">
              VIEW ALL EVENTS
            </LiquidWrapper>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
