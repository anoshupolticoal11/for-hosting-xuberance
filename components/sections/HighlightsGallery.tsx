"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import AnimateGrid from "@/components/ui/animate-grid/AnimateGrid";

interface GalleryPhoto {
  src: string;
  title: string;
}

const galleryPhotos: GalleryPhoto[] = [
  { src: "/gallery/X-CALIBRE.JPG", title: "X-CALIBRE" },
  { src: "/gallery/X-ART.JPG", title: "X-ART" },
  { src: "/gallery/X-WICKET.JPG", title: "X-WICKET" },
  { src: "/gallery/X-ALAAP.JPG", title: "X-ALAAP" },
  { src: "/gallery/X-KHO.JPG", title: "X-KHO" },
  { src: "/gallery/X-PONG.JPG", title: "X-PONG" },
  { src: "/gallery/X-TEMPORE.JPG", title: "X-TEMPORE" },
  { src: "/gallery/X-TRAVAGANCE.JPG", title: "X-TRAVAGANCE" },
  { src: "/gallery/X-VIBRANCE.JPG", title: "X-VIBRANCE" },
  { src: "/gallery/X-HIBIT.JPG", title: "X-HIBIT" },
  { src: "/gallery/Guest Performance.jpg", title: "Guest Performance" },
  { src: "/gallery/X-NATAK.jpg", title: "X-NATAK" },
  { src: "/gallery/X-PULL.jpeg", title: "X-PULL" },
  { src: "/gallery/X-CODE.JPG", title: "X-CODE" },
  { src: "/gallery/X-PUZZLE.JPG", title: "X-PUZZLE" },
  { src: "/gallery/X-SPRAY.JPG", title: "X-SPRAY" },
];

export default function HighlightsGallery() {
  const cards = galleryPhotos.map((photo) => ({
    logo: photo.src,
    title: photo.title,
  }));

  return (
    <section id="highlights" className="relative py-24 md:py-32 bg-transparent overflow-hidden">
      {/* Bioluminescent soft backdrop glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] caustic-glow pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-6 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            className="font-orbitron text-3xl md:text-5xl font-black tracking-wider text-slate-100"
          >
            EVENT GALLERY
          </motion.h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto mt-6" />
        </div>

        {/* 4x4 Skew-Animated Grid */}
        <div className="flex items-center justify-center p-4">
          <AnimateGrid
            cards={cards}
            textGlowStartColor="rgba(0, 242, 254, 0.25)"
            textGlowEndColor="rgba(0, 242, 254, 1)"
            perspective={800}
            rotateX={-5}
            rotateY={-10}
            renderCard={(item, index) => (
              <div className="relative group/card flex flex-col h-full justify-between">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-slate-950/40 border border-cyan-500/10">
                  <Image
                    src={item.logo}
                    alt={item.title || ""}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover group-hover/card:scale-105 transition-transform duration-700 ease-out"
                    priority={index < 4}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-60" />
                </div>
                {/* Photo Event Title */}
                <div className="mt-3 text-center">
                  <span className="font-orbitron text-[10px] md:text-xs font-bold text-cyan-400/90 tracking-wider uppercase block truncate">
                    {item.title}
                  </span>
                </div>
              </div>
            )}
          />
        </div>
      </div>
    </section>
  );
}
