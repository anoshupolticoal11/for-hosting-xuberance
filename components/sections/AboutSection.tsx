"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about" className="relative py-20 md:py-28 bg-transparent overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] caustic-glow pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-6 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-orbitron text-3xl md:text-5xl font-black tracking-wider text-slate-100"
          >
            ABOUT US
          </motion.h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto mt-6" />
        </div>

        {/* Glass Card Container */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-3xl overflow-hidden"
        >
          {/* Glass background layers */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-950/30 via-slate-950/50 to-blue-950/30 backdrop-blur-2xl" />
          <div className="absolute inset-0 border border-cyan-400/15 rounded-3xl" />
          <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/5 via-transparent to-blue-500/5" />
          {/* Subtle inner shimmer */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />

          <div className="relative z-10 p-8 md:p-12 lg:p-16">
            {/* School Section */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-16">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="lg:col-span-7 space-y-5"
              >
                <h3 className="font-orbitron text-xl md:text-2xl font-black text-cyan-400 tracking-wider">
                  ABOUT OUR SCHOOL
                </h3>
                <div className="space-y-4 font-sans text-sm md:text-base text-slate-300 leading-relaxed">
                  <p>
                    St. Xavier&apos;s Collegiate School stands as a beacon of academic excellence and holistic development. Since our establishment, we have been committed to nurturing young minds and fostering an environment where students can explore their passions and talents.
                  </p>
                  <p>
                    Our school believes in the motto &quot;Nihil Ultra&quot; &mdash; Nothing Beyond, which encourages our students to strive for excellence in all endeavors. We provide a platform where academic rigor meets creative expression through our diverse range of clubs and extracurricular activities.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="lg:col-span-5 relative h-64 md:h-80 rounded-2xl overflow-hidden border border-cyan-400/20 group hover:scale-[1.02] transition-transform duration-500"
              >
                <Image
                  src="/school.png"
                  alt="St. Xavier's Collegiate School"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#02050e]/60 via-transparent to-transparent" />
              </motion.div>
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent mb-16" />

            {/* Festival Section */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="lg:col-span-5 relative h-64 md:h-80 rounded-2xl overflow-hidden border border-cyan-400/20 order-last lg:order-first group hover:scale-[1.02] transition-transform duration-500"
              >
                <Image
                  src="/Xub.png"
                  alt="X-Uberance Festival"
                  fill
                  className="object-contain p-6 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#02050e]/60 via-transparent to-transparent" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="lg:col-span-7 space-y-5"
              >
                <h3 className="font-orbitron text-xl md:text-2xl font-black text-cyan-400 tracking-wider">
                  ABOUT X-UBERANCE&apos;26
                </h3>
                <div className="space-y-4 font-sans text-sm md:text-base text-slate-300 leading-relaxed">
                  <p>
                    St. Xavier&apos;s Collegiate School takes immense pride in presenting the latest edition of its technology festival, X-Uberance &apos;26. Celebrating a rich history of student-led innovation, we invite you to witness the fusion of creativity, deep-sea research, and computational challenges.
                  </p>
                  <p>
                    X-Uberance has consistently grown bigger and better with each passing year, encouraging excellence, problem-solving, and ideas that extend far beyond standard classrooms.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
