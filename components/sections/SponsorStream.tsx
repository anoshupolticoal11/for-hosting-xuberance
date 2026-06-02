"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface Sponsor {
  tier: string;
  name: string;
  desc: string;
  accent: string;
}

function SponsorCard({ s }: { s: Sponsor }) {
  const [isHovered, setIsHovered] = useState(false);

  const bubbleVariants = {
    hover: (i: number) => ({
      y: [-20, -220],
      x: [0, (i % 2 === 0 ? 1 : -1) * (15 + i * 4)],
      scale: [1, 1.6, 0],
      opacity: [0, 0.7, 0],
      transition: {
        duration: 1.8 + i * 0.2,
        repeat: Infinity,
        delay: i * 0.15,
        ease: "easeOut" as const,
      },
    }),
    initial: {
      y: 0,
      opacity: 0,
    },
  };

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`glass-card ${s.accent} w-[320px] md:w-[420px] p-8 rounded-2xl flex flex-col justify-between h-[260px] flex-shrink-0 relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300 cursor-pointer`}
    >
      {/* Rising Liquid Background */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 z-0 transition-transform duration-500 ease-out origin-bottom scale-y-0 group-hover:scale-y-100"
        style={{ borderRadius: "inherit" }}
      />

      {/* Floating Bubbles */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 7 }).map((_, i) => (
          <motion.span
            key={i}
            custom={i}
            variants={bubbleVariants}
            animate={isHovered ? "hover" : "initial"}
            className="absolute bottom-0 left-1/2 w-2 h-2 bg-white rounded-full"
            style={{ marginLeft: `${(i - 3) * 20}px` }}
          />
        ))}
      </div>

      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

      <div className="relative z-10">
        <span className="font-orbitron text-[10px] tracking-widest text-cyan-400 group-hover:text-slate-900/80 font-bold uppercase transition-colors duration-500">
          {s.tier}
        </span>
        <h3 className="font-orbitron text-xl md:text-2xl font-bold tracking-wider text-slate-100 mt-3 group-hover:text-slate-950 transition-colors duration-500">
          {s.name}
        </h3>
      </div>

      <p className="font-sans text-sm text-slate-400 leading-relaxed group-hover:text-slate-900 transition-colors duration-500 relative z-10">
        {s.desc}
      </p>
    </div>
  );
}

export default function SponsorStream() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Map vertical scroll to horizontal translation (sponsors section is scroll-locked)
  const x = useTransform(scrollYProgress, [0, 1], ["5%", "-65%"]);

  const sponsors = [
    {
      tier: "Title Sponsor",
      name: "NEPTUNE SYSTEMS",
      desc: "Deep ocean instrumentation and bathymetric radar lattices powering next-gen marine research.",
      accent: "border-cyan-400/60 shadow-[0_0_35px_rgba(0,242,254,0.25)]",
    },
    {
      tier: "Gold Sponsor",
      name: "MARIANA LOGISTICS",
      desc: "Autonomous deep-diving cargo transports and thermal grid routing across the ocean floor.",
      accent: "border-cyan-500/20",
    },
    {
      tier: "Gold Sponsor",
      name: "ABYSSAL COMPUTING",
      desc: "Distributed databases designed for extreme high-pressure underwater environments.",
      accent: "border-cyan-500/20",
    },
    {
      tier: "Silver Sponsor",
      name: "DEEP-SEA DYNAMICS",
      desc: "Pressure hull stabilization alloys and titanium exoskeleton structures for submersibles.",
      accent: "border-cyan-500/20",
    },
    {
      tier: "Silver Sponsor",
      name: "SUBSEA TELECOM",
      desc: "Ultra-low frequency sonar communications and abyssal network routers.",
      accent: "border-cyan-500/20",
    },
    {
      tier: "Silver Sponsor",
      name: "OCEANIC ALLIANCE",
      desc: "Ecological boundary protection and hydrothermal vent conservancy initiatives.",
      accent: "border-cyan-500/20",
    },
  ];

  return (
    <section ref={containerRef} id="sponsors" className="relative h-[250vh] bg-transparent">
      {/* Sticky Viewport Container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-center">
        {/* Section Title */}
        <div className="max-w-7xl mx-auto px-6 md:px-8 w-full mb-12 relative z-20">
          <h2 className="font-orbitron text-3xl md:text-5xl font-black tracking-wider text-slate-100 uppercase">
            SPONSORS
          </h2>
          <div className="w-16 h-1 bg-cyan-400 mt-4" />
        </div>

        {/* Horizontal Moving Track */}
        <div className="relative w-full z-20 overflow-hidden flex items-center">
          <motion.div style={{ x }} className="flex gap-8 px-6 md:px-32 w-max">
            {sponsors.map((s) => (
              <SponsorCard key={s.name} s={s} />
            ))}
          </motion.div>
        </div>

        {/* Scroll progress indicator */}
        <div className="absolute bottom-12 left-6 right-6 md:left-32 md:right-32 flex items-center z-20">
          <div className="flex-1 h-[2px] bg-cyan-950/40 rounded-full relative overflow-hidden">
            <motion.div
              style={{ scaleX: scrollYProgress }}
              className="absolute inset-0 bg-cyan-400 origin-left shadow-[0_0_10px_#00f2fe]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
