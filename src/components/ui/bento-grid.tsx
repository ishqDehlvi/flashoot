"use client";
import { motion } from "framer-motion";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-4 gap-4 ${className}`}>
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  icon,
}: {
  className?: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className={`group relative col-span-1 bg-black/40 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-primary/50 transition-all duration-300 ${className}`}
    >
      {icon && <div className="mb-2">{icon}</div>}
      <div className="font-bold text-3xl mb-2 gradient-text">{title}</div>
      <div className="text-sm text-gray-400">{description}</div>
    </motion.div>
  );
};