"use client";

import { useState } from "react";
import Navbar from "@/components/navigation/Navbar";
import FooterDeck from "@/components/sections/FooterDeck";
import VideoBackground from "@/components/sections/VideoBackground";
import Preloader from "@/components/preloader/Preloader";
import { motion, AnimatePresence } from "framer-motion";

interface ScheduleItem {
  event: string;
  venue: string;
  time: string;
}

const day1Schedule: ScheduleItem[] = [
  { event: "Registration", venue: "Front desk", time: "8:00 AM" },
  { event: "OPENING CEREMONY", venue: "Stage Primary Section", time: "9:00 AM" },
  { event: "X-DIGI (Digital Art)", venue: "Art room", time: "11:00 AM" },
  { event: "X-PULL (Boys) (Tug Of War)", venue: "Senior School Main field", time: "11:00 AM" },
  { event: "X-SCRIPT (Creative writing)", venue: "Reading room", time: "2:00 PM" },
  { event: "X-RAPPORTEUR (Vlogging & Journalism)", venue: "School campus", time: "10:30 AM" },
  { event: "X-FIFA (Fifa)", venue: "Fr. Bruylants Hall", time: "10:30 AM" },
  { event: "X-TORKOBITOROKO (Bengali Debate)", venue: "Fr. Bruylants Hall", time: "1:30 PM" },
  { event: "X-KALA (Eastern Dance)", venue: "Stage Primary Section", time: "11:00 AM" },
  { event: "X-NATAK (Stage Play)", venue: "Stage Primary Section", time: "3:00 PM" },
  { event: "X-AVRITTI (Hindi Elocution)", venue: "Fr. Sassel Hall", time: "1:30 PM" },
  { event: "X-PONG (Boys & Girls) (Table Tennis)", venue: "Games room", time: "11:30 AM" },
  { event: "X-GOAL (Girls) (Football)", venue: "Senior back field", time: "2:30 PM" },
  { event: "X-HACK (Hackathon)", venue: "Computer lab", time: "10:30 AM" },
  { event: "X-INNOVATE (Shark Tank)", venue: "Xavier Hall", time: "11:00 AM" },
  { event: "X-PUZZLE (Puzzle Game)", venue: "Xavier Hall", time: "3:00 PM" },
  { event: "X-COOK (Fireless Cooking)", venue: "Big Parlour", time: "11:30 AM" },
  { event: "X-KHO (Boys) (Kho-Kho)", venue: "Senior School Back field", time: "11:00 AM" },
];

const day2Schedule: ScheduleItem[] = [
  { event: "Registration", venue: "Front Desk", time: "7:30 AM" },
  { event: "X-PAINTING (Sketching)", venue: "Art Room", time: "10:30 AM" },
  { event: "X-PULL (Girls) (Tug Of War)", venue: "Senior School Main Field", time: "2:30 PM" },
  { event: "X-HOP (Dance Face Off)", venue: "Primary School Gymnasium", time: "10:30 AM" },
  { event: "X-HACK (Hackathon)", venue: "Computer Lab", time: "8:30 AM" },
  { event: "X-MATE (Chess)", venue: "Big Parlour", time: "9:00 AM" },
  { event: "X-PRESS (Poster Making)", venue: "Big Parlour", time: "1:00 PM" },
  { event: "X-60 (One Minute to Fame)", venue: "Fr. Bruylants Hall", time: "10:00 AM" },
  { event: "X-GOLPO (Bengali Story telling)", venue: "Fr. Bruylants Hall", time: "1:30 PM" },
  { event: "X-ACT (Ad Spoof)", venue: "Stage Primary Section", time: "8:30 AM" },
  { event: "X-RAGA (Eastern Music)", venue: "Stage Primary Section", time: "12:00 PM" },
  { event: "X-ACOUSTIC (Western Music)", venue: "Stage Primary Section", time: "3:00 PM" },
  { event: "X-QUIZITE (Quiz)", venue: "Fr. Sassel Hall", time: "9:00 AM" },
  { event: "X-PROSHNOTTOR (Bengali Quiz)", venue: "Fr. Sassel Hall", time: "12:00 PM" },
  { event: "X-CALIBRE (POOL1) (Debate)", venue: "Fr. Sassel Hall", time: "2:00 PM" },
  { event: "X-GOAL (Boys) (Football)", venue: "Senior Main Field", time: "9:00 AM" },
  { event: "X-HOOP (Girls & Boys) (Basketball)", venue: "Basketball Court", time: "8:30 AM" },
  { event: "X-BID (Cricket Auction)", venue: "Reading Room", time: "9:00 AM" },
  { event: "X-NEGOTIUM (Business Event)", venue: "Xavier Hall", time: "8:30 AM" },
  { event: "X-CALIBRE (POOL2) (Debate)", venue: "Xavier Hall", time: "2:00 PM" },
  { event: "X-RAPPORTEUR (Vlogging & Journalism)", venue: "School Campus", time: "8:30 AM" },
  { event: "X-PIXEL (Photography)", venue: "School Campus & Reading Room", time: "8:30 AM" },
  { event: "X-HUNT (Treasure Hunt)", venue: "School Campus", time: "10:00 AM" },
];

const day3Schedule: ScheduleItem[] = [
  { event: "Registration", venue: "Front Desk", time: "7:30 AM" },
  { event: "X-HIBIT (Display of Science Models)", venue: "Big Parlour", time: "8:30 AM" },
  { event: "X-WICKET (Cricket)", venue: "Senior School Main Field", time: "8:30 AM" },
  { event: "X-KHO (Girls) (Kho Kho)", venue: "Secondary Back Field", time: "8:30 AM" },
  { event: "X-SPRAY (Spray Painting)", venue: "Primary School Gymnasium", time: "8:30 AM" },
  { event: "X-RAPPORTEUR (Vlogging & Journalism)", venue: "Reading Room", time: "10:30 AM" },
  { event: "X-KOBITA (Bengali poem)", venue: "Fr. Bruylants Hall", time: "8:30 AM" },
  { event: "X-ALAAP (Hindi Antakshari)", venue: "Xavier Hall", time: "8:30 AM" },
  { event: "X-CHOLOCHITRO (Bengali Short Film)", venue: "Xavier Hall", time: "11:00 AM" },
  { event: "X-VIBRANCE (Ethnic Display)", venue: "Stage Primary Section", time: "8:30 AM" },
  { event: "X-TRAVAGANCE (Western Dance)", venue: "Stage Primary Section", time: "11:30 AM" },
  { event: "X-TEMPORE (Extempore)", venue: "Fr. Sassel Hall", time: "8:30 AM" },
  { event: "X-CALIBRE (Final) (Debate)", venue: "Fr. Sassel Hall", time: "11:00 AM" },
  { event: "Closing Ceremony", venue: "Stage Primary Section", time: "3:00 PM" },
];

export default function SchedulePage() {
  const [activeDay, setActiveDay] = useState<1 | 2 | 3>(1);

  const getSchedule = () => {
    switch (activeDay) {
      case 1:
        return { date: "10th July", items: day1Schedule };
      case 2:
        return { date: "11th July", items: day2Schedule };
      case 3:
        return { date: "12th July", items: day3Schedule };
    }
  };

  const { date, items } = getSchedule();

  return (
    <main className="relative min-h-screen w-full select-none overflow-x-hidden text-slate-100 bg-transparent">
      {/* Dynamic caustics background using public/bg.jpg */}
      <VideoBackground />

      {/* Cinematic preloader skipping instantly */}
      <Preloader />

      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />

        {/* Schedule Wrapper */}
        <div className="flex-grow pt-32 pb-24 px-6 max-w-4xl mx-auto w-full flex flex-col items-center">

          {/* Day Buttons Header */}
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 mb-12">
            {[1, 2, 3].map((day) => (
              <button
                key={day}
                onClick={() => setActiveDay(day as 1 | 2 | 3)}
                className={`cybr-btn transition-transform active:scale-95 ${activeDay === day
                  ? "shadow-[0_0_20px_rgba(13,255,214,0.6)] ring-2 ring-[#0dffd6]"
                  : "opacity-60 hover:opacity-100"
                  }`}
              >
                Day {day}
                <span aria-hidden></span>
                <span aria-hidden className="cybr-btn__glitch">
                  Day {day}
                </span>
              </button>
            ))}
          </div>

          {/* Date Heading */}
          <motion.h2
            key={activeDay + "-date"}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="kusanagi font-orbitron text-center text-4xl md:text-6xl font-black mb-12 uppercase bg-clip-text text-transparent bg-gradient-to-r from-white via-cyan-100 to-cyan-400 drop-shadow-[0_0_15px_rgba(0,242,254,0.3)]"
          >
            {date}
          </motion.h2>

          {/* Table Container */}
          <div className="w-full flex flex-col items-center gap-4">
            <AnimatePresence mode="popLayout">
              {items.map((item, idx) => (
                <motion.div
                  key={activeDay + "-" + item.event + "-" + idx}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 30 }}
                  transition={{ duration: 0.4, delay: idx * 0.04 }}
                  className="w-full flex justify-center"
                >
                  <div className="events-frame w-full max-w-[580px]">
                    <div className="events">
                      {/* Venue label - slides up on hover */}
                      <div className="venue-block">
                        <p dangerouslySetInnerHTML={{ __html: item.venue }} />
                      </div>

                      {/* Event Name */}
                      <h2>{item.event}</h2>

                      {/* Time label - slides down on hover */}
                      <div className="time-block">
                        <p>{item.time}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>


        </div>

        <FooterDeck />
      </div>
    </main>
  );
}
