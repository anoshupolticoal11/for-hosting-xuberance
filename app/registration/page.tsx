"use client";

import React, { useState } from "react";
import Navbar from "@/components/navigation/Navbar";
import FooterDeck from "@/components/sections/FooterDeck";
import VideoBackground from "@/components/sections/VideoBackground";
import Preloader from "@/components/preloader/Preloader";
import { motion } from "framer-motion";

export default function RegistrationPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!username || !password) return;
    setIsSubmitted(true);
  };

  return (
    <main className="relative min-h-screen w-full select-none overflow-x-hidden text-slate-100">
      {/* Background with simple bg.jpg image under overlay */}
      <VideoBackground />

      {/* Instantly skipping preloader */}
      <Preloader />

      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />

        {/* Form Area */}
        <div className="flex-grow flex items-center justify-center pt-32 pb-20 px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="glass-card w-full max-w-md p-8 md:p-10 rounded-3xl border border-cyan-500/20 shadow-[0_20px_50px_rgba(0,242,254,0.15)] bg-slate-950/80 backdrop-blur-2xl"
          >
            <div className="text-center mb-8">
              <h2 className="font-orbitron text-2xl md:text-3xl font-black tracking-widest text-slate-100">
                REGISTRATION
              </h2>
              <div className="w-16 h-0.5 bg-cyan-400 mx-auto mt-3" />
            </div>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-6 space-y-4"
              >
                <div className="text-5xl">⚡</div>
                <h3 className="font-orbitron text-lg font-bold text-white tracking-wider">
                  TRANSMISSION BUFFERED
                </h3>
                <p className="text-slate-400 text-xs md:text-sm font-sans leading-relaxed">
                  Pilot <span className="font-bold text-slate-100">{username}</span> registration signal received. Connection parameters are ready.
                </p>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setUsername("");
                    setPassword("");
                  }}
                  className="mt-6 px-8 py-2.5 rounded-full border border-white hover:bg-white hover:text-slate-950 font-orbitron font-bold tracking-widest text-xs text-white transition-all duration-300"
                >
                  REGISTER ANOTHER
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">

                {/* Username */}
                <div className="flex flex-col space-y-2">
                  <label className="font-orbitron text-sm font-bold text-white/80 tracking-widest uppercase">
                    Username
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="ENTER YOUR USERNAME..."
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="terminal-input font-mono-custom text-base"
                  />
                </div>

                {/* Password */}
                <div className="flex flex-col space-y-2">
                  <label className="font-orbitron text-sm font-bold text-white/80 tracking-widest uppercase">
                    Password
                  </label>
                  <input
                    type="password"
                    required
                    placeholder="ENTER YOUR PASSWORD..."
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="terminal-input font-mono-custom text-base"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full mt-8 py-3 rounded-full bg-cyan-400 text-slate-950 hover:bg-white font-orbitron font-bold tracking-widest text-xs transition-all duration-300 cursor-pointer shadow-[0_0_15px_rgba(0,242,254,0.3)] hover:shadow-[0_0_25px_rgba(255,255,255,0.5)]"
                >
                  REGISTER
                </button>
              </form>
            )}
          </motion.div>
        </div>

        <FooterDeck />
      </div>
    </main>
  );
}
