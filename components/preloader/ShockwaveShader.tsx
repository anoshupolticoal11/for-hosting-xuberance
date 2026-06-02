"use client";

import { useEffect, useRef } from "react";

interface ShockwaveShaderProps {
  active: boolean;
}

export default function ShockwaveShader({ active }: ShockwaveShaderProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!active) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let rippleRadius = 0;
    const maxRadius = Math.max(width, height) * 0.8;
    const speed = 25; // growth speed
    let opacity = 1;

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      if (opacity > 0) {
        rippleRadius += speed;
        opacity = 1 - rippleRadius / maxRadius;

        if (opacity < 0) opacity = 0;

        // Draw multiple expanding rings
        const centerX = width / 2;
        const centerY = height / 2;

        ctx.strokeStyle = `rgba(0, 242, 254, ${opacity * 0.4})`;
        ctx.lineWidth = 15;
        ctx.beginPath();
        ctx.arc(centerX, centerY, rippleRadius, 0, Math.PI * 2);
        ctx.stroke();

        ctx.strokeStyle = `rgba(79, 172, 254, ${opacity * 0.2})`;
        ctx.lineWidth = 40;
        ctx.beginPath();
        ctx.arc(centerX, centerY, rippleRadius - 30 > 0 ? rippleRadius - 30 : 0, 0, Math.PI * 2);
        ctx.stroke();

        ctx.shadowBlur = 30;
        ctx.shadowColor = "#00f2fe";
        ctx.strokeStyle = `rgba(13, 255, 214, ${opacity * 0.6})`;
        ctx.lineWidth = 4;
        ctx.beginPath();
        ctx.arc(centerX, centerY, rippleRadius + 15, 0, Math.PI * 2);
        ctx.stroke();
        ctx.shadowBlur = 0;

        animationId = requestAnimationFrame(render);
      }
    };

    render();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
    };
  }, [active]);

  if (!active) return null;

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-10 mix-blend-screen"
    />
  );
}
