"use client";

import React, { useEffect, useRef } from "react";

interface ParticleImageProps {
  imageSrc: string;
  className?: string;
  canvasWidth?: string;
  canvasHeight?: string;
  gravity?: string;
  particleSize?: string;
  particleGap?: string;
  mouseForce?: string;
  renderer?: "default" | "webgl";
  color?: string;
  colorArr?: number[];
  initPosition?: "random" | "top" | "left" | "bottom" | "right" | "misplaced" | "none";
  initDirection?: "random" | "top" | "left" | "bottom" | "right" | "none";
  fadePosition?: "explode" | "top" | "left" | "bottom" | "right" | "random" | "none";
  fadeDirection?: "random" | "top" | "left" | "bottom" | "right" | "none";
  noise?: number;
  responsiveWidth?: boolean;
}

export default function ParticleImage({
  imageSrc,
  className = "",
  canvasWidth,
  canvasHeight,
  gravity,
  particleSize = "1.5",
  particleGap = "3",
  mouseForce = "40",
  renderer = "default",
  color,
  colorArr,
  initPosition = "random",
  initDirection = "random",
  fadePosition = "none",
  fadeDirection = "none",
  noise = 8,
  responsiveWidth = true,
}: ParticleImageProps) {
  const imageRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !imageRef.current) return;

    let active = true;
    let particlesInstance: any = null;

    // Load the dynamic engine
    import("./inspiraImageParticles").then(({ inspiraImageParticles }) => {
      if (!active || !imageRef.current) return;
      const { InspiraImageParticle } = inspiraImageParticles();
      particlesInstance = new InspiraImageParticle(imageRef.current);
    });

    return () => {
      active = false;
      if (particlesInstance) {
        particlesInstance.stop();
        if (particlesInstance.canvas && particlesInstance.canvas.parentNode) {
          particlesInstance.canvas.parentNode.removeChild(particlesInstance.canvas);
        }
      }
    };
  }, [imageSrc]);

  return (
    <div ref={containerRef} className="flex items-center justify-center w-full h-full">
      <img
        ref={imageRef}
        src={imageSrc}
        data-particle-gap={particleGap}
        data-width={canvasWidth}
        data-height={canvasHeight}
        data-gravity={gravity}
        data-particle-size={particleSize}
        data-mouse-force={mouseForce}
        data-renderer={renderer}
        data-color={color}
        data-color-arr={colorArr ? JSON.stringify(colorArr) : undefined}
        data-init-position={initPosition}
        data-init-direction={initDirection}
        data-fade-position={fadePosition}
        data-fade-direction={fadeDirection}
        data-noise={noise}
        data-responsive-width={responsiveWidth ? "true" : "false"}
        className={`hidden ${className}`}
        alt="Particle logo source"
      />
    </div>
  );
}
