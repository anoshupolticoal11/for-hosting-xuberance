"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import dynamic from "next/dynamic";
import Navbar from "@/components/navigation/Navbar";
import Preloader from "@/components/preloader/Preloader";
import ScrollFadeIn from "@/components/sections/ScrollFadeIn";
import FooterDeck from "@/components/sections/FooterDeck";
import LiquidWrapper from "@/components/navigation/LiquidWrapper";

const VideoBackground = dynamic(
  () => import("@/components/sections/VideoBackground"),
  { ssr: false }
);

type Category = "sporting" | "on-stage" | "off-stage";

const categories: {
  id: Category;
  label: string;
}[] = [
    {
      id: "sporting",
      label: "SPORTING EVENTS",
    },
    {
      id: "on-stage",
      label: "ON-STAGE EVENTS",
    },
    {
      id: "off-stage",
      label: "OFF-STAGE EVENTS",
    },
  ];

export default function EventsPage() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
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

        {/* Page Header */}
        <section className="pt-32 pb-10 md:pt-40 md:pb-12 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="font-orbitron text-4xl md:text-6xl font-black tracking-wider text-slate-100"
          >
            ALL EVENTS
          </motion.h1>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-32 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto mt-6 origin-center"
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="font-mono-custom text-xs md:text-sm text-cyan-400 tracking-[0.25em] mt-4 uppercase"
          >
            40+ events across 3 categories
          </motion.p>
        </section>

        {/* Category Selector */}
        <section className="max-w-5xl mx-auto px-6 md:px-8 pb-28 flex-grow w-full flex items-center justify-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="w-full"
          >
            {/* Desktop View: Grid of 3 vertical aspect-[9/16] cards (hidden on mobile / small screen) */}
            <div className="hidden lg:grid grid-cols-3 gap-8 md:gap-10 w-full">
              {categories.map((cat) => {
                return (
                  <motion.div key={cat.id} variants={itemVariants} className="w-full">
                    <Link href={`/events/${cat.id}`} className="block w-full">
                      <LiquidWrapper
                        className="relative w-full aspect-[9/16] flex flex-col items-center justify-center rounded-2xl border-2 border-cyan-500/20 bg-gradient-to-b from-cyan-950/20 to-slate-950/45 text-cyan-100 shadow-[0_0_15px_rgba(0,242,254,0.1)] hover:shadow-[0_0_40px_rgba(0,242,254,0.35)] hover:border-cyan-400 hover:text-white p-6 md:p-8"
                      >
                        <span className="font-orbitron text-xl sm:text-2xl font-black tracking-[0.15em] text-center uppercase leading-snug">
                          {cat.label}
                        </span>
                      </LiquidWrapper>
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            {/* Mobile / Small Screen View: Vertical list of 3 horizontal rectangular buttons */}
            <div className="flex flex-col gap-5 w-full lg:hidden max-w-md mx-auto">
              {categories.map((cat) => {
                return (
                  <motion.div key={cat.id} variants={itemVariants} className="w-full">
                    <Link href={`/events/${cat.id}`} className="block w-full">
                      <LiquidWrapper
                        className="relative w-full py-5 flex items-center justify-center rounded-xl border-2 border-cyan-500/20 bg-gradient-to-r from-cyan-950/20 via-slate-950/45 to-cyan-950/20 text-cyan-100 shadow-[0_0_15px_rgba(0,242,254,0.1)] hover:shadow-[0_0_35px_rgba(0,242,254,0.3)] hover:border-cyan-400 hover:text-white px-6 cursor-pointer"
                      >
                        <span className="font-orbitron text-base sm:text-lg font-black tracking-[0.2em] text-center uppercase leading-snug">
                          {cat.label}
                        </span>
                      </LiquidWrapper>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </section>

        <ScrollFadeIn>
          <FooterDeck />
        </ScrollFadeIn>
      </div>
    </main>
  );
}
