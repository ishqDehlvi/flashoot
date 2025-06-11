"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export const Spotlight = ({
  className = "",
  fill = "white",
}: {
  className?: string;
  fill?: string;
}) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!divRef.current) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!divRef.current) return;
      const rect = divRef.current.getBoundingClientRect();
      setPosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };

    divRef.current.addEventListener("mousemove", handleMouseMove);
    return () => {
      divRef.current?.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <motion.div
      ref={divRef}
      className={`relative overflow-hidden ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, ${fill}10, transparent 40%)`,
        }}
      />
    </motion.div>
  );
}; 