"use client";

import dynamic from "next/dynamic";
import { useEffect } from "react";
import { useAppStore } from "@/store/useAppStore";
import Preloader from "@/components/preloader/Preloader";
import Navbar from "@/components/navigation/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import StatsBar from "@/components/sections/StatsBar";
import AboutSection from "@/components/sections/AboutSection";
import EventTracks from "@/components/sections/EventTracks";


import FooterDeck from "@/components/sections/FooterDeck";
import ScrollFadeIn from "@/components/sections/ScrollFadeIn";

// Load client components dynamically with SSR disabled to prevent server-side window/document errors
const VideoBackground = dynamic(() => import("@/components/sections/VideoBackground"), { ssr: false });
const HighlightsGallery = dynamic(() => import("@/components/sections/HighlightsGallery"), { ssr: false });
const TrueFocus = dynamic(() => import("@/components/sections/TrueFocus"), { ssr: false });

export default function Home() {
  const setScrollDepth = useAppStore((state) => state.setScrollDepth);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight;
      const winHeight = window.innerHeight;
      const maxScroll = docHeight - winHeight;

      if (maxScroll <= 0) return;

      const percent = Math.min(Math.max(scrollY / maxScroll, 0), 1);
      // Map percentage to Challenger Deep depth (1m - 10,994m)
      const depth = Math.round(percent * (10994 - 1)) + 1;
      setScrollDepth(depth);
    };

    window.addEventListener("scroll", handleScroll);
    // Initial check
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [setScrollDepth]);

  return (
    <main className="relative min-h-screen w-full select-none overflow-x-clip">
      {/* Background Gradient Layer (placed below the canvas background at -z-30) */}
      <div className="fixed inset-0 -z-30 pointer-events-none bg-gradient-to-b from-[#1b3e6c] from-0% via-[#10294c] via-35% via-[#071428] via-65% to-[#010206] to-100%" />

      {/* Looped background video with scroll depth darkening */}
      <VideoBackground />

      {/* Preloader (disabled — skips instantly) */}
      <Preloader />

      {/* Main UI Page Elements */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />

        <div className="flex-grow">
          <HeroSection />

          <ScrollFadeIn>
            <StatsBar />
          </ScrollFadeIn>

          {/* True Focus Vertical Dates Animation */}
          <div className="pt-0 pb-10 md:pb-16 flex flex-col items-center justify-center bg-transparent">
            <TrueFocus
              sentence="10TH JULY|11TH JULY|12TH JULY"
              manualMode={false}
              blurAmount={5}
              borderColor="#0066FF"
              glowColor="rgba(0, 102, 255, 0.4)"
              animationDuration={0.5}
              pauseBetweenAnimations={1}
            />
          </div>

          <ScrollFadeIn delay={0.1}>
            <AboutSection />
          </ScrollFadeIn>



          <ScrollFadeIn delay={0.1}>
            <EventTracks />
          </ScrollFadeIn>
          {/* Highlights Staggered Horizontal Gallery (Lando Norris style) */}
          <HighlightsGallery />
        </div>

        <ScrollFadeIn>
          <FooterDeck />
        </ScrollFadeIn>
      </div>
    </main>
  );
}
