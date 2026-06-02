"use client";

import { useMouseGlare } from "@/hooks/useMouseGlare";
import { motion } from "framer-motion";
import { LucideIcon, Users } from "lucide-react";
import { useState } from "react";

interface EventCardProps {
  title: string;
  subtitle?: string;
  tagline?: string;
  description: string;
  icon: LucideIcon;
  participants?: string;
  tags?: string[];
}

export default function EventCard({
  title,
  subtitle,
  tagline,
  description,
  icon: Icon,
  participants,
  tags,
}: EventCardProps) {
  const { glareStyle, tiltStyle, handleMouseMove, handleMouseLeave } = useMouseGlare();
  const [isHovered, setIsHovered] = useState(false);

  const bubbleVariants = {
    hover: (i: number) => ({
      y: [-20, -280],
      x: [0, (i % 2 === 0 ? 1 : -1) * (20 + i * 5)],
      scale: [1, 1.8, 0],
      opacity: [0, 0.7, 0],
      transition: {
        duration: 2.0 + i * 0.25,
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
    <motion.div
      style={tiltStyle}
      onMouseMove={(e) => {
        handleMouseMove(e);
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        handleMouseLeave();
        setIsHovered(false);
      }}
      className="glass-card relative p-8 rounded-2xl overflow-hidden flex flex-col justify-between h-[320px] cursor-pointer group"
    >
      {/* Glare Overlay */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-300 opacity-0 group-hover:opacity-100 z-20"
        style={glareStyle}
      />

      {/* Rising Liquid Background */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 z-0 transition-transform duration-500 ease-out origin-bottom scale-y-0 group-hover:scale-y-100"
        style={{ borderRadius: "inherit" }}
      />

      {/* Floating Bubbles */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.span
            key={i}
            custom={i}
            variants={bubbleVariants}
            animate={isHovered ? "hover" : "initial"}
            className="absolute bottom-0 left-1/2 w-2 h-2 bg-white rounded-full"
            style={{ marginLeft: `${(i - 3.5) * 25}px` }}
          />
        ))}
      </div>

      {/* Top border accent */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-30 group-hover:opacity-100 transition-opacity duration-500 z-10" />

      {/* Content */}
      <div className="relative z-10 pt-2 flex flex-col h-full">
        {/* Title row */}
        <div className="mb-1">
          <h3 className="font-orbitron text-xl font-black tracking-wider text-slate-100 group-hover:text-slate-950 transition-colors duration-500">
            {title}
          </h3>
          {subtitle && (
            <p className="font-seaweed text-cyan-300 text-base mt-0.5 group-hover:text-slate-900/90 transition-colors duration-500">
              {subtitle}
            </p>
          )}
          {tagline && !subtitle && (
            <p className="font-seaweed text-cyan-300 text-base mt-0.5 group-hover:text-slate-900/90 transition-colors duration-500">
              {tagline}
            </p>
          )}
        </div>

        {/* Description */}
        <p className="font-sans text-sm text-slate-400 leading-relaxed group-hover:text-slate-900 transition-colors duration-500 mt-2 flex-grow">
          {description}
        </p>

        {/* Bottom row: participants */}
        <div className="flex items-center justify-between mt-4 gap-2 flex-wrap">
          {participants && (
            <div className="flex items-center gap-1.5 text-xs font-mono-custom text-cyan-400/70 group-hover:text-slate-900/80 transition-colors duration-500">
              <Users size={13} />
              <span>{participants}</span>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
