"use client";
import React, { useRef } from "react";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";

export const ContainerScroll = ({
  titleComponent,
  children,
}: {
  titleComponent: string | React.ReactNode;
  children: React.ReactNode;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const scaleDimensions = () => {
    return isMobile ? [0.7, 0.9] : [1.05, 1];
  };

  const rotate = useTransform(scrollYProgress, [0, 1], [20, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions());
  const translate = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <div
      className="h-[65rem] md:h-[75rem] flex items-center justify-center relative px-4 md:px-20"
      ref={containerRef}
    >
      <div
        className="py-8 md:py-24 w-full relative"
        style={{
          perspective: "1000px",
        }}
      >
        <Header translate={translate} titleComponent={titleComponent} />
        <Card rotate={rotate} translate={translate} scale={scale}>
          {children}
        </Card>
      </div>
    </div>
  );
};

export const Header = ({ translate, titleComponent }: any) => {
  return (
    <motion.div
      style={{
        translateY: translate,
      }}
      className="div max-w-5xl mx-auto text-center"
    >
      {titleComponent}
    </motion.div>
  );
};

export const Card = ({
  rotate,
  scale,
  children,
}: {
  rotate: MotionValue<number>;
  scale: MotionValue<number>;
  translate: MotionValue<number>;
  children: React.ReactNode;
}) => {
  return (
    <motion.div
      style={{
        rotateX: rotate,
        scale,
        boxShadow:
          "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
      }}
      className="relative max-w-[280px] mt-[-130px] md:mt-[-70px]  mx-auto h-[580px] w-full border-[10px] border-[#1a1a1a] p-0 bg-[#000000] rounded-[40px] shadow-2xl"
    >
      {/* Dynamic Island with Gradient Animation */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[90px] h-[26px] rounded-b-[14px] z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#FF2D55] via-[#5856D6] to-[#FF2D55] animate-gradient-x" />
        <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" />
      </div>
      
      {/* Screen */}
      <div className="h-full w-full overflow-hidden rounded-[30px] bg-[#000000] flex items-center justify-center relative">
        {/* Screen Content */}
        <div className="absolute inset-0 flex items-center justify-center">
          {children}
        </div>
        
        {/* Notch Camera */}
        <div className="absolute top-[8px] left-1/2 transform -translate-x-1/2 w-[4px] h-[4px] bg-[#1a1a1a] rounded-full z-20" />
      </div>

      <style jsx>{`
        @keyframes gradient-x {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }
      `}</style>
    </motion.div>
  );
};
