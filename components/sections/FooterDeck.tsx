"use client";

import Image from "next/image";

export default function FooterDeck() {
  return (
    <footer className="relative bg-[#02050e] border-t border-cyan-500/15 py-16 md:py-20 overflow-hidden z-10">
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">

          <div className="lg:col-span-5 space-y-4 flex flex-col items-start">
            <div className="relative w-28 h-28 md:w-36 md:h-36 drop-shadow-[0_0_20px_rgba(0,242,254,0.3)]">
              <Image
                src="/Xub.png"
                alt="X-Uberance Logo"
                fill
                className="object-contain"
              />
            </div>

            <h3 className="font-orbitron text-2xl md:text-3xl font-black tracking-widest text-slate-100 uppercase">
              X-Uberance&apos;26
            </h3>
            <p className="font-seaweed text-xl md:text-2xl text-cyan-200 tracking-wider -mt-1">
              epochs of eminence
            </p>
          </div>

          <div className="lg:col-span-3 space-y-6">
            <div className="space-y-4">
              <h4 className="font-orbitron text-lg font-black tracking-wider text-slate-200 uppercase">
                Contact Us:
              </h4>
              <div className="space-y-3 font-orbitron text-xs tracking-wider text-slate-400">
                <p className="hover:text-cyan-400 transition-colors">
                  Debayan Pathak: <span className="font-sans text-cyan-400">+91 62912 88391</span>
                </p>
                <p className="hover:text-cyan-400 transition-colors">
                  Jonathan Benjamin: <span className="font-sans text-cyan-400">+91 89814 08592</span>
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-orbitron text-lg font-black tracking-wider text-slate-200 uppercase">
                Socials:
              </h4>
              <div className="space-y-3 font-orbitron text-xs tracking-wider text-slate-400">
                <p className="hover:text-cyan-400 transition-colors">
                  Email: <a href="mailto:info@sxcs-xuberance.com" className="font-sans text-cyan-400 hover:underline">info@sxcs-xuberance.com</a>
                </p>
                <p className="hover:text-cyan-400 transition-colors">
                  Instagram: <a href="https://www.instagram.com/xuberance.26_/" target="_blank" rel="noopener noreferrer" className="font-sans text-cyan-400 hover:underline">@xuberance.26_</a>
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 w-full h-[220px] relative rounded-2xl overflow-hidden border border-cyan-500/20 bg-slate-950/40 shadow-2xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.6401673822165!2d88.35245847604179!3d22.545791233633842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02771239aa5c8f%3A0xe54d32095f9227f4!2sSt.%20Xavier&#39;s%20Collegiate%20School!5e0!3m2!1sen!2sin!4v1717180000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale opacity-75 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
            ></iframe>
          </div>

        </div>

        <div className="mt-16 pt-8 border-t border-cyan-500/10 text-center font-mono-custom text-[10px] text-cyan-500/40">
          © {new Date().getFullYear()} X-UBERANCE. ALL RIGHTS RESERVED. ST. XAVIER&apos;S COLLEGIATE SCHOOL.
        </div>
      </div>
    </footer>
  );
}
