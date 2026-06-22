"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { use } from "react";
import dynamic from "next/dynamic";
import Navbar from "@/components/navigation/Navbar";
import Preloader from "@/components/preloader/Preloader";

const VideoBackground = dynamic(
  () => import("@/components/sections/VideoBackground"),
  { ssr: false }
);

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default function EventProfilePage({ params }: PageProps) {
  const { slug } = use(params);
  const router = useRouter();

  return (
    <main className="relative min-h-screen w-full select-none bg-transparent overflow-x-clip">
      <VideoBackground />
      <Preloader />

      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />

        <div className="flex-grow flex flex-col items-center px-4 pt-24 md:pt-28 pb-16">
          {/* Back Button */}
          <div className="w-full max-w-4xl mb-6">
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => router.back()}
              className="inline-flex items-center gap-2.5 text-cyan-400/80 hover:text-cyan-300 font-orbitron font-black text-xs md:text-sm tracking-widest transition-all duration-300 group cursor-pointer bg-cyan-950/20 px-5 py-2.5 rounded-full border border-cyan-500/10 hover:border-cyan-400/40 hover:shadow-[0_0_15px_rgba(0,242,254,0.15)]"
            >
              <ArrowLeft
                size={14}
                className="group-hover:-translate-x-1.5 transition-transform duration-300 text-cyan-400"
              />
              GO BACK
            </motion.button>
          </div>

          {/* Event Profile Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-4xl rounded-2xl overflow-hidden border border-cyan-500/15 shadow-[0_0_40px_rgba(0,242,254,0.08)] bg-slate-950/30 backdrop-blur-sm"
          >
            <img
              src={`/repsprofile/${slug}.png`}
              alt={`${slug.toUpperCase()} Event Profile`}
              className="w-full h-auto object-contain"
            />
          </motion.div>
        </div>
      </div>
    </main>
  );
}
