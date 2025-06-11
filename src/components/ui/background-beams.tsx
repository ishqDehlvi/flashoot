"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export const BackgroundBeams = () => {
  const beamRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!beamRef.current) return;

    const moveBeam = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const bounds = beamRef.current!.getBoundingClientRect();
      const x = clientX - bounds.left;
      const y = clientY - bounds.top;
      beamRef.current!.style.setProperty("--x", `${x}px`);
      beamRef.current!.style.setProperty("--y", `${y}px`);
    };

    window.addEventListener("mousemove", moveBeam);
    return () => window.removeEventListener("mousemove", moveBeam);
  }, []);

  return (
    <div className="relative">
      <motion.div
        ref={beamRef}
        className="absolute inset-0 overflow-hidden [mask-image:radial-gradient(circle_at_var(--x,50%)_var(--y,50%),transparent_30%,black)]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_var(--x,50%)_var(--y,50%),rgba(255,0,0,0.12),transparent_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_400px_at_var(--x,50%)_var(--y,50%),rgba(255,0,0,0.15),transparent_100%)]" />
      </motion.div>
    </div>
  );
}; 