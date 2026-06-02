"use client";

import { motion } from "framer-motion";
import ClockFace from "./ClockFace";
import SchedulePanel from "./SchedulePanel";

export default function ScheduleClock() {
  return (
    <section id="schedule" className="relative py-28 md:py-36 bg-gradient-to-b from-[#071324] to-[#02050e] overflow-hidden">
      {/* Decorative background caustic mesh */}
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] caustic-glow pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-orbitron text-4xl md:text-6xl font-black tracking-widest text-slate-100 uppercase"
          >
            SCHEDULE
          </motion.h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto mt-6" />
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: COMPASS FACE */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <ClockFace />
            <p className="text-cyan-400/60 font-mono-custom text-[11px] uppercase tracking-widest mt-6 bg-cyan-950/20 border border-cyan-500/10 px-4 py-1.5 rounded-full pointer-events-none">
              Drag dial or nodes to navigate
            </p>
          </div>

          {/* Right: SCHEDULE CARD PANEL */}
          <div className="lg:col-span-7">
            <SchedulePanel />
          </div>
        </div>
      </div>
    </section>
  );
}
