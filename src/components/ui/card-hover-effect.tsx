"use client";
import { motion } from "framer-motion";

export const HoverEffect = ({ items }: { items: { title: string; description: string }[] }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {items.map((item, idx) => (
        <motion.div
          key={idx}
          className="group relative rounded-xl border border-white/10 bg-black/40 backdrop-blur-sm p-4 hover:border-primary/50 transition-all duration-300"
          whileHover={{ scale: 1.02 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
          <h3 className="font-semibold text-gray-100 relative z-10">{item.title}</h3>
          <p className="text-sm text-gray-400 mt-2 relative z-10">{item.description}</p>
        </motion.div>
      ))}
    </div>
  );
}; 