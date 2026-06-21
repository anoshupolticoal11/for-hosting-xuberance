"use client";

import { useEffect, useRef, useState, CSSProperties } from "react";
import { motion } from "framer-motion";
import "./TrueFocus.css";

interface TrueFocusProps {
  sentence?: string;
  separator?: string;
  manualMode?: boolean;
  blurAmount?: number;
  borderColor?: string;
  glowColor?: string;
  animationDuration?: number;
  pauseBetweenAnimations?: number;
}

const TrueFocus = ({
  sentence = "10TH JULY|11TH JULY|12TH JULY",
  separator = "|",
  manualMode = false,
  blurAmount = 5,
  borderColor = "#00f2fe",
  glowColor = "rgba(0, 242, 254, 0.4)",
  animationDuration = 0.5,
  pauseBetweenAnimations = 1,
}: TrueFocusProps) => {
  const words = sentence.split(separator);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lastActiveIndex, setLastActiveIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const wordRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const [focusRect, setFocusRect] = useState({ x: 0, y: 0, width: 0, height: 0 });

  const updateFocusRect = () => {
    if (currentIndex === null || currentIndex === -1) return;
    if (!wordRefs.current[currentIndex] || !containerRef.current) return;

    const parentRect = containerRef.current.getBoundingClientRect();
    const activeElement = wordRefs.current[currentIndex];
    
    if (activeElement) {
      const activeRect = activeElement.getBoundingClientRect();
      const style = window.getComputedStyle(activeElement);
      const letterSpacing = parseFloat(style.letterSpacing) || 0;

      setFocusRect({
        x: activeRect.left - parentRect.left - 12 + (letterSpacing / 2),
        y: activeRect.top - parentRect.top - 6,
        width: activeRect.width + 24 - letterSpacing,
        height: activeRect.height + 12,
      });
    }
  };

  useEffect(() => {
    if (!manualMode) {
      const interval = setInterval(
        () => {
          setCurrentIndex((prev) => (prev + 1) % words.length);
        },
        (animationDuration + pauseBetweenAnimations) * 1000
      );

      return () => clearInterval(interval);
    }
  }, [manualMode, animationDuration, pauseBetweenAnimations, words.length]);

  useEffect(() => {
    updateFocusRect();
    
    // Recalculate on next frame to ensure rendering is complete
    const rafId = requestAnimationFrame(updateFocusRect);
    return () => cancelAnimationFrame(rafId);
  }, [currentIndex, words.length]);

  useEffect(() => {
    const handleResize = () => {
      updateFocusRect();
    };
    window.addEventListener("resize", handleResize);

    // Recalculate when fonts are loaded
    if (typeof document !== "undefined" && document.fonts) {
      document.fonts.ready.then(updateFocusRect);
    }

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [currentIndex]);

  const handleMouseEnter = (index: number) => {
    if (manualMode) {
      setLastActiveIndex(index);
      setCurrentIndex(index);
    }
  };

  const handleMouseLeave = () => {
    if (manualMode) {
      setCurrentIndex(lastActiveIndex !== null ? lastActiveIndex : 0);
    }
  };

  return (
    <div className="focus-container" ref={containerRef}>
      {words.map((word, index) => {
        const isActive = index === currentIndex;
        return (
          <span
            key={index}
            ref={(el) => {
              wordRefs.current[index] = el;
            }}
            className={`focus-word font-orbitron ${manualMode ? "manual" : ""} ${isActive && !manualMode ? "active" : ""}`}
            style={{
              filter: isActive ? "blur(0px)" : `blur(${blurAmount}px)`,
              "--border-color": borderColor,
              "--glow-color": glowColor,
              transition: `filter ${animationDuration}s ease`,
            } as CSSProperties}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            {word}
          </span>
        );
      })}

      <motion.div
        className="focus-frame"
        animate={{
          x: focusRect.x,
          y: focusRect.y,
          width: focusRect.width,
          height: focusRect.height,
          opacity: currentIndex >= 0 ? 1 : 0,
        }}
        transition={{
          duration: animationDuration,
          ease: "easeInOut",
        }}
        style={{
          "--border-color": borderColor,
          "--glow-color": glowColor,
        } as CSSProperties}
      >
        <span className="corner top-left"></span>
        <span className="corner top-right"></span>
        <span className="corner bottom-left"></span>
        <span className="corner bottom-right"></span>
      </motion.div>
    </div>
  );
};

export default TrueFocus;
