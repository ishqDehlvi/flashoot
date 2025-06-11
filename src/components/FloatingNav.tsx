import {
  Home,
  Sparkles,
  IndianRupee,
  Compass,
  History,
  BookText,
  Instagram,
} from "lucide-react";
import { FloatingDock } from "./ui/floating-dock";
import { useLocation } from "wouter";

export const FloatingNav = () => {
  useLocation();

  const links = [
    {
      title: "Home",
      icon: <Home />,
      href: "/",
    },
    {
      title: "Discover Vibe",
      icon: <Compass className="h-full w-full" />,
      href: "/discover",
    },
    {
      title: "Features",
      icon: <Sparkles className="h-full w-full" />,
      href: "/features",
    },
    // {
    //   title: "Our Story",
    //   icon: <BookText className="h-full w-full" />,
    //   href: "/our-story",
    // },
    {
      title: "Our Journey",
      icon: <History className="h-full w-full" />,
      href: "/journey",
    },
    // {
    //   title: "Pricing",
    //   icon: <IndianRupee className="h-full w-full text-white" />,
    //   href: "/pricing",
    // },
    {
      title: "Instagram",
      icon: <Instagram />,
      href: "https://www.instagram.com/weareflashoot",
      isExternal: true,
    },
    {
      title: "LinkedIn",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-4 h-4"
        >
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect width="4" height="12" x="2" y="9" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      ),
      href: "https://www.linkedin.com/company/flashoot/",
      isExternal: true,
    },
  ];

  return (
    <FloatingDock
      items={links}
      desktopClassName="fixed left-8 top-1/2 -translate-y-1/2 z-50"
      mobileClassName="fixed left-4 top-1/2 -translate-y-1/2 z-50"
    />
  );
};
