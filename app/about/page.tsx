"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import Navbar from "@/components/navigation/Navbar";
import FooterDeck from "@/components/sections/FooterDeck";
import TerminalModal from "@/components/terminal/TerminalModal";
import Preloader from "@/components/preloader/Preloader";
import { motion } from "framer-motion";

const UnderwaterScene = dynamic(() => import("@/components/three/UnderwaterScene"), { ssr: false });

export default function AboutPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <main className="relative min-h-screen w-full select-none bg-gradient-to-b from-[#1e3c72] via-[#071324] to-[#02050e] overflow-x-hidden text-slate-100">
      {/* 3D caustics background */}
      <UnderwaterScene />

      {/* Cinematic Preloader (uses global state to skip if already completed) */}
      <Preloader />

      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />

        <div className="flex-grow pt-32 pb-24 px-6 md:px-8 max-w-6xl mx-auto w-full">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-24"
          >
            {/* Header */}
            <motion.div variants={itemVariants} className="text-center">
              <h1 className="font-orbitron text-4xl md:text-6xl font-black tracking-widest text-slate-100 uppercase">
                ABOUT US
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto mt-6" />
            </motion.div>

            {/* School Profile */}
            <motion.section
              variants={itemVariants}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
            >
              <div className="lg:col-span-7 space-y-6">
                <h2 className="font-orbitron text-2xl md:text-3xl font-black text-cyan-400 tracking-wider">
                  ABOUT OUR SCHOOL
                </h2>
                <div className="space-y-4 font-sans text-sm md:text-base text-slate-300 leading-relaxed">
                  <p>
                    St. Xavier&apos;s Collegiate School stands as a beacon of academic excellence and holistic development. Since our establishment, we have been committed to nurturing young minds and fostering an environment where students can explore their passions and talents.
                  </p>
                  <p>
                    Our school believes in the motto &quot;Nihil Ultra&quot; &mdash; Nothing Beyond, which encourages our students to strive for excellence in all endeavors. We provide a platform where academic rigor meets creative expression through our diverse range of clubs and extracurricular activities.
                  </p>
                  <p>
                    Through our tech platforms, we offer students opportunities to engage in various fields &mdash; from software architecture and systems engineering to web design and analytics.
                  </p>
                </div>
              </div>
              <div className="lg:col-span-5 relative h-64 md:h-80 rounded-2xl overflow-hidden glass-card p-2 border border-cyan-400/20 group hover:scale-[1.02] transition-transform duration-500">
                <div className="relative w-full h-full rounded-xl overflow-hidden">
                  <Image
                    src="/school.png"
                    alt="St. Xavier's Collegiate School"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#02050e]/60 via-transparent to-transparent" />
                </div>
              </div>
            </motion.section>

            {/* Principal's Address */}
            <motion.section
              variants={itemVariants}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center lg:flex-row-reverse"
            >
              <div className="lg:col-span-5 relative h-64 md:h-80 rounded-2xl overflow-hidden glass-card p-2 border border-cyan-400/20 order-last lg:order-first group hover:scale-[1.02] transition-transform duration-500">
                <div className="relative w-full h-full rounded-xl overflow-hidden bg-slate-900/60 flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-bl from-cyan-500/10 via-[#071324] to-[#02050e] opacity-80" />
                  <span className="font-orbitron text-6xl opacity-15 select-none">PRINCIPAL</span>
                </div>
              </div>
              <div className="lg:col-span-7 space-y-6">
                <h2 className="font-orbitron text-2xl md:text-3xl font-black text-cyan-400 tracking-wider">
                  PRINCIPAL&apos;S ADDRESS
                </h2>
                <div className="space-y-4 font-sans text-sm md:text-base text-slate-300 leading-relaxed">
                  <blockquote className="border-l-4 border-cyan-400 pl-4 italic text-slate-200">
                    &quot;Education is not just about academic excellence, but about nurturing the complete personality of each student. Through our diverse club activities, we aim to develop not just scholars, but well-rounded individuals ready to contribute meaningfully to society.&quot;
                  </blockquote>
                  <p className="font-orbitron text-sm font-semibold text-cyan-300">
                    &mdash; Fr. Roshan Tirkey, Principal
                  </p>
                </div>
              </div>
            </motion.section>

            {/* Festival Profile */}
            <motion.section
              variants={itemVariants}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
            >
              <div className="lg:col-span-7 space-y-6">
                <h2 className="font-orbitron text-2xl md:text-3xl font-black text-cyan-400 tracking-wider">
                  ABOUT X-UBERANCE&apos;26
                </h2>
                <div className="space-y-4 font-sans text-sm md:text-base text-slate-300 leading-relaxed">
                  <p>
                    St. Xavier’s Collegiate School takes immense pride in presenting the latest edition of its technology festival, X-Uberance ’26. Celebrating a rich history of student-led innovation, we invite you to witness the fusion of creativity, deep-sea research, and computational challenges.
                  </p>
                  <p>
                    X-Uberance has consistently grown bigger and better with each passing year, encouraging excellence, problem-solving, and ideas that extend far beyond standard classrooms.
                  </p>
                </div>
              </div>
              <div className="lg:col-span-5 relative h-64 md:h-80 rounded-2xl overflow-hidden glass-card p-2 border border-cyan-400/20 group hover:scale-[1.02] transition-transform duration-500">
                <div className="relative w-full h-full rounded-xl overflow-hidden bg-slate-900/60 flex flex-col items-center justify-center p-6 text-center">
                  <div className="relative w-32 h-32 mb-4 drop-shadow-[0_0_20px_rgba(0,242,254,0.4)]">
                    <Image src="/Xub.png" alt="X-Uberance Logo" fill className="object-contain" />
                  </div>
                  <span className="font-orbitron text-lg font-bold tracking-widest text-slate-200">X-UBERANCE&apos;26</span>
                </div>
              </div>
            </motion.section>

          </motion.div>
        </div>

        <FooterDeck />
      </div>

      <TerminalModal />
    </main>
  );
}
