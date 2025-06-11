"use client";
import { motion } from "framer-motion";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { SparklesCore } from "@/components/ui/aceternity";
import webApplication from "@/images/web_application.png";
import isb from "../../../dist/assets/isb.svg";

export function ContainerScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <h1 className="text-3xl font-semibold text-white">
                We Shoot • Edit • Deliver Reels in<br />
                <span className="text-4xl md:text-[8rem] font-bold mt-1 leading-none">
                  <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="gradient-text inline-block"
                  >
                    10 Minutes<sup className="text-[2rem] md:text-[3rem] gradient-text ml-0  top-[-8px] md:top-[-45px] md:top-[-50px] relative">*</sup>
                  </motion.span>
                </span>
              </h1>

              {/* Subtle sparkles effect */}
              <div className="absolute inset-0 -z-10">
                <SparklesCore
                  background="transparent"
                  minSize={0.2}
                  maxSize={0.8}
                  particleDensity={8}
                  className="w-full h-full"
                  particleColor="#ff0000"
                />
              </div>
            </motion.div>
          </>
        }
      >
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="w-full h-full flex items-center justify-center p-8"
        >
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Subtle glow effect */}
            <div className="absolute inset-0">
              <div className="absolute inset-y-[10%] left-[20%] right-[20%] bg-primary/5 blur-[120px] rounded-full" />
            </div>

            <motion.img
              src={webApplication}
              alt="Content Creation Dashboard"
              className="w-full h-full object-contain scale-[2] relative"
              style={{
                maxWidth: "85%",
                maxHeight: "100%",
                objectFit: "contain",
                filter: "drop-shadow(0 0 30px rgba(255,0,0,0.1))"
              }}
              initial={{ scale: 1.5, y: 20 }}
              animate={{ scale: 1.5, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            />
          </div>
        </motion.div>

      </ContainerScroll>
      <div className="flex justify-center gap-2 -mt-[210px]">
                  <span className="inline-block bg-slate-700/50 text-gray-300 text-sm sm:text-base font-medium pl-2 pr-3 py-1.5 rounded-lg border border-slate-600/70 shadow-sm">
                    Shot on  iPhone
                  </span>
                  <a href="https://www.isb.edu/" target="_blank" rel="noopener noreferrer">
                    <span className="inline-block bg-slate-700/50 text-gray-300 text-sm sm:text-base font-medium pl-2 pr-3 py-1.5 rounded-lg border border-slate-600/70 shadow-sm">
                      <img src={isb} alt="ISB" className="w-4 h-4 inline-block mr-1" />
                        Backed by ISB
                    </span>
                  </a>
                </div>
    </div>
  );
}