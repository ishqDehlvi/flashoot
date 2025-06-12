import { cn } from "@/lib/utils";
import { IconLayoutNavbarCollapse } from "@tabler/icons-react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
} from "framer-motion";
import { Link, useLocation } from "wouter";
import { useRef, useState } from "react";
import React from "react";

export const FloatingDock = ({
  items,
  desktopClassName,
  mobileClassName,
}: {
  items: { title: string; icon: React.ReactNode; href: string; isExternal?: boolean }[];
  desktopClassName?: string;
  mobileClassName?: string;
}) => {
  return (
    <>
      <FloatingDockDesktop items={items} className={desktopClassName} />
      <FloatingDockMobile items={items} className={mobileClassName} />
    </>
  );
};

const FloatingDockMobile = ({
  items,
  className,
}: {
  items: { title: string; icon: React.ReactNode; href: string; isExternal?: boolean }[];
  className?: string;
}) => {
  const [open, setOpen] = useState(false);
  const [location] = useLocation();

  return (
    <div className={cn("relative hidden", className)}>
      <AnimatePresence>
        {open && (
          <motion.div
            layoutId="nav"
            className="absolute left-full ml-2 flex flex-col gap-2"
          >
            {items.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -10 }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                exit={{
                  opacity: 0,
                  x: -10,
                  transition: {
                    delay: idx * 0.05,
                  },
                }}
                transition={{ delay: (items.length - 1 - idx) * 0.05 }}
              >
                {item.isExternal ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <motion.div
                      className={cn(
                        "h-10 w-10 rounded-xl backdrop-blur-xl flex items-center justify-center transition-all duration-300",
                        ""
                      )}
                    >
                      <div className="h-4 w-4 text-white">{item.icon}</div>
                    </motion.div>
                  </a>
                ) : (
                  <Link href={item.href}>
                    <motion.div
                      className={cn(
                        "h-10 w-10 rounded-xl backdrop-blur-xl flex items-center justify-center transition-all duration-300",
                        location === item.href
                          ? ""
                          : "hover:bg-white/5"
                      )}
                    >
                      <div className={cn(
                        "h-4 w-4",
                        location === item.href ? "text-primary" : "text-white"
                      )}>{item.icon}</div>
                    </motion.div>
                  </Link>
                )}
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      <motion.button
        onClick={() => setOpen(!open)}
        className="h-10 w-10 rounded-xl backdrop-blur-xl flex items-center justify-center hover:bg-white/10 transition-colors"
      >
        <IconLayoutNavbarCollapse className="h-5 w-5 text-white" />
      </motion.button>
    </div>
  );
};

const FloatingDockDesktop = ({
  items,
  className,
}: {
  items: { title: string; icon: React.ReactNode; href: string; isExternal?: boolean }[];
  className?: string;
}) => {
  let mouseX = useMotionValue(Infinity);
  const [location] = useLocation();

  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={cn(
        "mx-auto hidden md:flex flex-row items-center rounded-2xl backdrop-blur-xl py-3 px-4 gap-2",
        className
      )}
    >
      {items.map((item, index) => (
        <React.Fragment key={item.title}>
          <IconContainer 
            {...item} 
            isActive={location === item.href}
          />
          {index < items.length - 1 && (
            <div className="h-6 w-px bg-white/10" />
          )}
        </React.Fragment>
      ))}
    </motion.div>
  );
};

function IconContainer({
  title,
  icon,
  href,
  isActive,
  isExternal,
}: {
  title: string;
  icon: React.ReactNode;
  href: string;
  isActive: boolean;
  isExternal?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  const content = (
    <motion.div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className=
        "w-10 h-10 rounded-xl flex items-center justify-center relative transition-colors duration-300 group hover:bg-white/5"
    >
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 5 }}
            className="absolute top-full mt-2 px-2 py-1 rounded-lg backdrop-blur-xl text-white text-xs whitespace-nowrap left-1/2 -translate-x-1/2"
          >
            {title}
          </motion.div>
        )}
      </AnimatePresence>
      <div
        className={cn(
          "w-5 h-5 flex items-center justify-center transition-colors duration-300",
          isActive && !isExternal ? "text-primary" : "text-white/70 group-hover:text-white"
        )}
      >
        {icon}
      </div>
    </motion.div>
  );

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href}>
      {content}
    </Link>
  );
}