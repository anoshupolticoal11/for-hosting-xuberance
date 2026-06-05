"use client";

import { useAppStore } from "@/store/useAppStore";
import { motion, AnimatePresence } from "framer-motion";
import { Anchor, Terminal, Palette, Cpu } from "lucide-react";
import React from "react";

export default function SchedulePanel() {
  const activeTimeSlot = useAppStore((state) => state.activeTimeSlot);

  const scheduleDetails: Record<
    string,
    {
      title: string;
      subtitle: string;
      description: string;
      icon: React.ComponentType<{ className?: string }>;
    }
  > = {
    "09:00": {
      title: "INAUGURATION & KEYNOTE",
      subtitle: "x-uberance'26 opening ceremony",
      description: "Opening address in the main auditorium. Welcoming participating schools, synchronizing schedules, introducing the judges, and official release of event platforms.",
      icon: Anchor,
    },
    "12:00": {
      title: "HYDRO-NET HACKING",
      subtitle: "cybersecurity & network operations",
      description: "The full-spectrum cybersecurity and capture-the-flag event. Decipher signal logs, bypass networks, and breach simulated sub-surface firewalls before the time runs out.",
      icon: Terminal,
    },
    "15:00": {
      title: "BIOLUMINESCENT SYNTHESIS",
      subtitle: "creative coding & frontend UI hackathon",
      description: "Fusing mathematical shaders and fluid designs. Synthesize glowing bioluminescent web interfaces, designing responsive and highly interactive dark mode components.",
      icon: Palette,
    },
    "18:00": {
      title: "ABYSSAL EXPLORATION",
      subtitle: "data science & robotics navigation",
      description: "Parse high-dimensional real-time sensor streams from vent environments. Build pathfinding models to guide autonomous vehicles through hydrothermal fields.",
      icon: Cpu,
    },
  };

  const current = scheduleDetails[activeTimeSlot] || scheduleDetails["09:00"];
  const Icon = current.icon;

  return (
    <div className="glass-card p-8 md:p-12 rounded-2xl relative overflow-hidden h-[360px] flex flex-col justify-between shadow-[0_15px_40px_rgba(0,0,0,0.6)] border border-cyan-500/20">
      <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-cyan-500/10 to-transparent pointer-events-none" />

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTimeSlot}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex-1 flex flex-col justify-between"
        >
          <div>
            <div className="mb-6">
              <span className="font-mono-custom text-xs font-bold text-cyan-400 tracking-widest bg-cyan-950/40 border border-cyan-500/30 px-3.5 py-1.5 rounded-md inline-flex items-center gap-2">
                <Icon className="w-3.5 h-3.5 text-cyan-400" />
                {activeTimeSlot} SLOT
              </span>
            </div>

            <h3 className="font-orbitron text-2xl md:text-3xl font-black text-slate-100 tracking-wider">
              {current.title}
            </h3>
            <p className="font-seaweed text-cyan-300 text-lg md:text-xl mt-1.5 mb-6">
              {current.subtitle}
            </p>

            <p className="text-slate-400 text-sm md:text-base leading-relaxed font-sans max-w-xl">
              {current.description}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
