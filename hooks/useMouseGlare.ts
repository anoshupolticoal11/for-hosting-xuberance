"use client";

import { useState, MouseEvent } from "react";

export function useMouseGlare() {
  const [glareStyle, setGlareStyle] = useState({
    background: "radial-gradient(circle at 50% 50%, transparent 0%, transparent 100%)",
  });
  const [tiltStyle, setTiltStyle] = useState({
    transform: "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)",
    transition: "transform 0.5s ease",
  });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const xPercent = (x / rect.width) * 100;
    const yPercent = (y / rect.height) * 100;

    const rotateY = ((x / rect.width) - 0.5) * 12;
    const rotateX = -((y / rect.height) - 0.5) * 12;

    setGlareStyle({
      background: `radial-gradient(circle at ${xPercent}% ${yPercent}%, rgba(0, 242, 254, 0.15) 0%, rgba(0, 0, 0, 0) 60%)`,
    });

    setTiltStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`,
      transition: "transform 0.1s ease",
    });
  };

  const handleMouseLeave = () => {
    setGlareStyle({
      background: "radial-gradient(circle at 50% 50%, transparent 0%, transparent 100%)",
    });

    setTiltStyle({
      transform: "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)",
      transition: "transform 0.5s ease",
    });
  };

  return {
    glareStyle,
    tiltStyle,
    handleMouseMove,
    handleMouseLeave,
  };
}
