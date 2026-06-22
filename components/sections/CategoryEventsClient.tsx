"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import dynamic from "next/dynamic";
import Navbar from "@/components/navigation/Navbar";
import Preloader from "@/components/preloader/Preloader";
import EventCard from "@/components/sections/EventCard";
import ScrollFadeIn from "@/components/sections/ScrollFadeIn";
import FooterDeck from "@/components/sections/FooterDeck";
import HaloSearch from "@/components/ui/halo-search/HaloSearch";
import {
  sportingEvents,
  offStageEvents,
  onStageEvents,
  type EventData,
} from "@/data/events";

const VideoBackground = dynamic(
  () => import("@/components/sections/VideoBackground"),
  { ssr: false }
);

interface CategoryEventsClientProps {
  category: string;
}

export default function CategoryEventsClient({ category }: CategoryEventsClientProps) {
  const [searchQuery, setSearchQuery] = useState("");

  let activeEvents: EventData[] = [];
  let categoryLabel = "";

  if (category === "sporting") {
    activeEvents = sportingEvents;
    categoryLabel = "SPORTING EVENTS";
  } else if (category === "on-stage") {
    activeEvents = onStageEvents;
    categoryLabel = "ON-STAGE EVENTS";
  } else if (category === "off-stage") {
    activeEvents = offStageEvents;
    categoryLabel = "OFF-STAGE EVENTS";
  }

  const filteredEvents = activeEvents.filter((event) => {
    const query = searchQuery.toLowerCase().trim();
    return (
      event.title.toLowerCase().includes(query) ||
      event.subtitle.toLowerCase().includes(query) ||
      event.description.toLowerCase().includes(query)
    );
  });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <main className="relative min-h-screen w-full select-none bg-transparent overflow-x-clip">
      <VideoBackground />
      <Preloader />

      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />

        <div className="max-w-7xl mx-auto w-full px-6 md:px-8 pt-24 md:pt-28 flex flex-col">
          <div className="pt-4 pb-6">
            <Link
              href="/events"
              className="inline-flex items-center gap-2.5 text-cyan-400/80 hover:text-cyan-300 font-orbitron font-black text-xs md:text-sm tracking-widest transition-all duration-300 group cursor-pointer bg-cyan-950/20 px-5 py-2.5 rounded-full border border-cyan-500/10 hover:border-cyan-400/40 hover:shadow-[0_0_15px_rgba(0,242,254,0.15)]"
            >
              <ArrowLeft
                size={14}
                className="group-hover:-translate-x-1.5 transition-transform duration-300 text-cyan-400"
              />
              BACK TO ALL EVENTS
            </Link>
          </div>

          <div className="text-center pb-10">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="font-orbitron text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-wider text-slate-100 uppercase"
            >
              {categoryLabel}
            </motion.h1>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-24 h-[3px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto mt-5 origin-center rounded-full"
            />
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="font-mono-custom text-[10px] sm:text-xs text-cyan-400 tracking-[0.25em] mt-3 uppercase"
            >
              {filteredEvents.length} {filteredEvents.length === 1 ? "EVENT" : "EVENTS"} AVAILABLE
            </motion.p>
          </div>

          <div className="relative z-0 flex w-full flex-col items-center justify-center mb-10">
            <HaloSearch
              placeholder="SEARCH FOR AN EVENT..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="pb-28 flex-grow">
            <AnimatePresence mode="wait">
              {filteredEvents.length > 0 ? (
                <motion.div
                  key={`grid-${searchQuery}`}
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  className="flex flex-wrap justify-center gap-8 w-full"
                >
                  {filteredEvents.map((event, i) => {
                    // Convert event title like "X-GOAL" to "xgoal" to match the repsprofile PNG filename
                    const slug = event.title.toLowerCase().replace(/-/g, "");
                    const profileHref = `/repsprofile/${slug}.png`;
                    return (
                      <motion.div
                        key={event.title}
                        variants={itemVariants}
                        className="w-full sm:w-[calc((100%-32px)/2)] lg:w-[calc((100%-64px)/3)]"
                      >
                        <EventCard {...event} href={profileHref} />
                      </motion.div>
                    );
                  })}
                </motion.div>
              ) : (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="text-center py-20 bg-slate-950/20 rounded-3xl border border-cyan-500/5 backdrop-blur-sm"
                >
                  <p className="font-mono-custom text-cyan-500/40 text-xs sm:text-sm tracking-[0.2em] uppercase">
                    NO DEEP-SEA TRANSMISSIONS MATCH &quot;{searchQuery}&quot;
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <ScrollFadeIn>
          <FooterDeck />
        </ScrollFadeIn>
      </div>
    </main>
  );
}
