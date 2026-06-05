"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/navigation/Navbar";
import FooterDeck from "@/components/sections/FooterDeck";
import VideoBackground from "@/components/sections/VideoBackground";
import Preloader from "@/components/preloader/Preloader";

const mentors = [
  {
    name: "Fr. Roshan Tirkey S.J",
    title: "Principal",
    image: "/patrons/principal.png",
  },
  {
    name: "Fr. Vivien Andrew",
    title: "Vice Principal",
    image: "/placeholders/placeholder.jpg",
  },
  {
    name: "Mrs. Soma Gomes",
    title: "Vice Principal, Primary School",
    image: "/patrons/soma-gomes.png",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false, margin: "-80px" },
};

export default function MentorsPage() {
  return (
    <main className="relative min-h-screen w-full select-none overflow-x-hidden text-slate-100 bg-transparent">
      <VideoBackground />
      <Preloader />

      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />

        <div className="flex-grow pt-32 pb-24 px-6 max-w-5xl mx-auto w-full">
          {/* Title */}
          <motion.h1
            {...fadeUp}
            transition={{ duration: 0.8 }}
            className="kusanagi font-orbitron text-center text-4xl md:text-7xl font-black mb-16 uppercase bg-clip-text text-transparent bg-gradient-to-r from-white via-cyan-100 to-cyan-400 drop-shadow-[0_0_15px_rgba(0,242,254,0.3)]"
          >
            OUR MENTORS
          </motion.h1>

          {/* Principal's Message Section */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mb-20"
          >
            <h2 className="font-orbitron text-2xl md:text-4xl font-black tracking-wider text-center mb-10 text-slate-100">
              Principal&apos;s Message
            </h2>

            <div className="flex flex-col md:flex-row items-center gap-10 md:gap-14">
              {/* School Logo */}
              <motion.div
                {...fadeUp}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="shrink-0"
              >
                <div className="relative w-48 h-48 md:w-64 md:h-64">
                  <Image
                    src="/patrons/school-logo.png"
                    alt="St. Xavier's Collegiate School Logo"
                    fill
                    className="object-contain drop-shadow-[0_0_20px_rgba(0,242,254,0.2)]"
                  />
                </div>
              </motion.div>

              {/* Message Text */}
              <motion.div
                {...fadeUp}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="space-y-4"
              >
                <blockquote className="text-cyan-300/70 italic text-lg font-sans border-l-2 border-cyan-400/30 pl-4 mb-4">
                  &ldquo;The greatness of a culture can be found in its festivals.&rdquo;
                  <br />
                  <span className="text-cyan-400/50 text-sm not-italic">— Siddharth Katragadda</span>
                </blockquote>
                <p className="font-sans text-slate-300/90 text-sm md:text-base leading-relaxed">
                  Dear friends, This is the time when we, the adroit students of the city of joy, congregate at St. Xavier&apos;s Collegiate School, Kolkata, to celebrate life in friendship and togetherness.
                </p>
                <p className="font-sans text-slate-300/90 text-sm md:text-base leading-relaxed">
                  Over the few years, our fest has aspired to reach greater heights and X-uberance 2026 is no different. With its carousel of activities displaying talents across the spectrum, diversity and inclusion proves to be our greatest motivation and strength.
                </p>
                <p className="font-sans text-slate-300/90 text-sm md:text-base leading-relaxed">
                  As we invest your skills and talents in the passion of healthy competitions, let this celebration be a testament to our unity and friendship. With God&apos;s abundant blessings and your cooperation, we hope to make X-uberance 2026 a memorable experience of our life.
                </p>
                <p className="font-orbitron text-cyan-400 text-sm tracking-widest mt-4">
                  Nihil ultra! — Nothing beyond!
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Patron/Mentor Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 justify-items-center">
            {mentors.map((mentor, idx) => (
              <motion.div
                key={mentor.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-60px" }}
                transition={{ duration: 0.7, delay: idx * 0.1 }}
                className="group flex flex-col items-center text-center w-full"
              >
                {/* Holographic image container */}
                <div className="relative w-56 h-56 md:w-64 md:h-64 rounded-xl overflow-hidden mb-6 shadow-[0_0_30px_rgba(0,255,255,0.15)] group-hover:shadow-[0_0_50px_rgba(0,255,255,0.3)] transition-shadow duration-500">
                  <Image
                    src={mentor.image}
                    alt={mentor.name}
                    fill
                    className="object-cover rounded-xl"
                  />
                  {/* Holographic overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-cyan-950/50 via-transparent to-cyan-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
                  {/* Border glow */}
                  <div className="absolute inset-0 rounded-xl border border-cyan-400/20 group-hover:border-cyan-400/50 transition-colors duration-500" />
                </div>

                <h3 className="font-sans text-lg md:text-xl font-semibold text-slate-100 mb-1">
                  {mentor.name}
                </h3>
                <p className="font-mono-custom text-xs tracking-wider text-cyan-400/70">
                  {mentor.title}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <FooterDeck />
      </div>
    </main>
  );
}
