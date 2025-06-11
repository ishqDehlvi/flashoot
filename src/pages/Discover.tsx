import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, Play, Loader2, X } from "lucide-react";
import NavHeader from "../components/NavHeader";
import { FloatingNav } from "@/components/FloatingNav";
import { Footer } from "@/components/Footer";

const categories = [
  "All",
  "Events & Weddings",
  "Car Delivery",
  "Celebrities",
  "Outfit Shoots",
  "Concerts",
  "Collaborations",
  "Decor & Interiors",
  "Caterers"
];

const reels = [
  // Celebrities
  {
    id: 1,
    category: "Celebrities",
    video: "https://d3b8wlkco88yji.cloudfront.net/webiste-videos/9.mp4",
    title: "Celebrity Moments",
  },
  {
    id: 2,
    category: "Celebrities",
    video: "https://d3b8wlkco88yji.cloudfront.net/webiste-videos/15.mp4",
    title: "Star Encounters",
  },
  {
    id: 3,
    category: "Celebrities",
    video: "https://d3b8wlkco88yji.cloudfront.net/webiste-videos/21.mp4",
    title: "Celebrity Highlights",
  },

  // Caterers
  {
    id: 4,
    category: "Caterers",
    video: "https://d3b8wlkco88yji.cloudfront.net/webiste-videos/24.mp4",
    title: "Culinary Excellence",
  },

  // Car Delivery
  {
    id: 5,
    category: "Car Delivery",
    video: "https://d3b8wlkco88yji.cloudfront.net/webiste-videos/25.mp4",
    title: "Luxury Vehicle Delivery",
  },

  // Outfit Shoots
  {
    id: 6,
    category: "Outfit Shoots",
    video: "https://d3b8wlkco88yji.cloudfront.net/webiste-videos/1.mp4",
    title: "Fashion Showcase",
  },
  {
    id: 7,
    category: "Outfit Shoots",
    video: "https://d3b8wlkco88yji.cloudfront.net/webiste-videos/6.mp4",
    title: "Style Highlights",
  },
  {
    id: 8,
    category: "Outfit Shoots",
    video: "https://d3b8wlkco88yji.cloudfront.net/webiste-videos/26.mp4",
    title: "Fashion Moments",
  },

  // Events & Weddings
  {
    id: 9,
    category: "Events & Weddings",
    video: "https://d3b8wlkco88yji.cloudfront.net/webiste-videos/2.mp4",
    title: "Wedding Memories",
  },
  {
    id: 10,
    category: "Events & Weddings",
    video: "https://d3b8wlkco88yji.cloudfront.net/webiste-videos/4.mp4",
    title: "Special Day",
  },
  {
    id: 11,
    category: "Events & Weddings",
    video: "https://d3b8wlkco88yji.cloudfront.net/webiste-videos/10.mp4",
    title: "Wedding Highlights",
  },
  {
    id: 12,
    category: "Events & Weddings",
    video: "https://d3b8wlkco88yji.cloudfront.net/webiste-videos/18.mp4",
    title: "Wedding Moments",
  },
  {
    id: 13,
    category: "Events & Weddings",
    video: "https://d3b8wlkco88yji.cloudfront.net/webiste-videos/20.mp4",
    title: "Wedding Celebration",
  },
  {
    id: 14,
    category: "Events & Weddings",
    video: "https://d3b8wlkco88yji.cloudfront.net/webiste-videos/23.mp4",
    title: "Wedding Special",
  },
  {
    id: 15,
    category: "Events & Weddings",
    video: "https://d3b8wlkco88yji.cloudfront.net/webiste-videos/32.mp4",
    title: "Wedding Day",
  },
  {
    id: 20,
    category: "Events & Weddings",
    video: "https://d3b8wlkco88yji.cloudfront.net/webiste-videos/5.mp4",
    title: "Event Highlights",
  },
  {
    id: 21,
    category: "Events & Weddings",
    video: "https://d3b8wlkco88yji.cloudfront.net/webiste-videos/8.mp4",
    title: "Special Occasion",
  },
  {
    id: 22,
    category: "Events & Weddings",
    video: "https://d3b8wlkco88yji.cloudfront.net/webiste-videos/13.mp4",
    title: "Event Moments",
  },
  {
    id: 23,
    category: "Events & Weddings",
    video: "https://d3b8wlkco88yji.cloudfront.net/webiste-videos/14.mp4",
    title: "Event Celebration",
  },
  {
    id: 24,
    category: "Events & Weddings",
    video: "https://d3b8wlkco88yji.cloudfront.net/webiste-videos/19.mp4",
    title: "Event Special",
  },
  {
    id: 25,
    category: "Events & Weddings",
    video: "https://d3b8wlkco88yji.cloudfront.net/webiste-videos/22.mp4",
    title: "Event Day",
  },
  {
    id: 26,
    category: "Events & Weddings",
    video: "https://d3b8wlkco88yji.cloudfront.net/webiste-videos/27.mp4",
    title: "Event Experience",
  },
  {
    id: 27,
    category: "Events & Weddings",
    video: "https://d3b8wlkco88yji.cloudfront.net/webiste-videos/29.mp4",
    title: "Event Memories",
  },
  {
    id: 28,
    category: "Events & Weddings",
    video: "https://d3b8wlkco88yji.cloudfront.net/webiste-videos/30.mp4",
    title: "Event Highlights",
  },
  {
    id: 29,
    category: "Events & Weddings",
    video: "https://d3b8wlkco88yji.cloudfront.net/webiste-videos/34.mp4",
    title: "Event Special",
  },
  {
    id: 30,
    category: "Events & Weddings",
    video: "https://d3b8wlkco88yji.cloudfront.net/webiste-videos/35.mp4",
    title: "Event Celebration",
  },
  {
    id: 31,
    category: "Events & Weddings",
    video: "https://d3b8wlkco88yji.cloudfront.net/webiste-videos/39.mp4",
    title: "Event Day",
  },

  // Concerts
  {
    id: 16,
    category: "Concerts",
    video: "https://d3b8wlkco88yji.cloudfront.net/webiste-videos/7.mp4",
    title: "Concert Experience",
  },
  {
    id: 17,
    category: "Concerts",
    video: "https://d3b8wlkco88yji.cloudfront.net/webiste-videos/37.mp4",
    title: "Live Music",
  },
  {
    id: 47,
    category: "Concerts",
    video: "https://d3b8wlkco88yji.cloudfront.net/webiste-videos/7.mp4",
    title: "Concert Highlights",
  },

  // Collaborations
  {
    id: 18,
    category: "Collaborations",
    video: "https://d3b8wlkco88yji.cloudfront.net/webiste-videos/31.mp4",
    title: "Creative Collab",
  },
  {
    id: 19,
    category: "Collaborations",
    video: "https://d3b8wlkco88yji.cloudfront.net/webiste-videos/38.mp4",
    title: "Team Work",
  },
  {
    id: 48,
    category: "Collaborations",
    video: "https://d3b8wlkco88yji.cloudfront.net/webiste-videos/31.mp4",
    title: "Joint Ventures",
  },

  // Decor & Interiors
  {
    id: 34,
    category: "Decor & Interiors",
    video: "https://d3b8wlkco88yji.cloudfront.net/webiste-videos/11.mp4",
    title: "Interior Design",
  },
  {
    id: 35,
    category: "Decor & Interiors",
    video: "https://d3b8wlkco88yji.cloudfront.net/webiste-videos/17.mp4",
    title: "Decor Highlights",
  },
  {
    id: 36,
    category: "Decor & Interiors",
    video: "https://d3b8wlkco88yji.cloudfront.net/webiste-videos/28.mp4",
    title: "Decor Special",
  },
  {
    id: 37,
    category: "Decor & Interiors",
    video: "https://d3b8wlkco88yji.cloudfront.net/webiste-videos/33.mp4",
    title: "Decor Moments",
  },
  {
    id: 38,
    category: "Decor & Interiors",
    video: "https://d3b8wlkco88yji.cloudfront.net/webiste-videos/42.mp4",
    title: "Decor Excellence",
  },
];

const VideoModal = ({ reel, onClose }: { reel: (typeof reels)[0]; onClose: () => void }) => {
  const [isLoading, setIsLoading] = useState(true);
  const videoRef = React.useRef<HTMLVideoElement>(null);

  const handleVideoLoad = () => {
    setIsLoading(false);
  };

  React.useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Auto-play was prevented, we'll let the user start playback
      });
    }

    // Cleanup function to pause video when modal closes
    return () => {
      if (videoRef.current) {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
    };
  }, []);

  const handleModalClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
      onClick={handleModalClick}
    >
      <div className="relative w-full max-w-4xl mx-4 aspect-video">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/40">
            <Loader2 className="w-8 h-8 text-primary animate-spin" />
          </div>
        )}
        
        <video
          ref={videoRef}
          src={reel.video}
          className="w-full h-full object-contain"
          controls
          onLoadedData={handleVideoLoad}
        />

        <button
          onClick={onClose}
          className="absolute -top-12 right-0 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>
      </div>
    </motion.div>
  );
};

const VideoCard = ({ reel, onVideoClick }: { reel: (typeof reels)[0]; onVideoClick: (reel: (typeof reels)[0]) => void }) => {
  const [isLoading, setIsLoading] = useState(true);
  const videoRef = React.useRef<HTMLVideoElement>(null);

  const handleVideoLoad = () => {
    setIsLoading(false);
  };

  const handleVideoClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  };

  return (
    <div 
      className="relative h-full rounded-2xl overflow-hidden bg-black/40 backdrop-blur-xl border border-white/10 group cursor-pointer"
      onClick={() => onVideoClick(reel)}
    >
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/40">
          <Loader2 className="w-8 h-8 text-primary animate-spin" />
        </div>
      )}

      <video
        ref={videoRef}
        src={reel.video}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        onLoadedData={handleVideoLoad}
        onClick={handleVideoClick}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

      {/* Play Button */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-16 h-16 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30 flex items-center justify-center"
          onClick={handleVideoClick}
        >
          <Play className="w-8 h-8 text-white" />
        </motion.button>
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform">
        <div className="bg-black/60 backdrop-blur-sm rounded-xl p-3">
          <h3 className="text-lg font-semibold">{reel.title}</h3>
        </div>
      </div>
    </div>
  );
};

export default function Discover() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedReel, setSelectedReel] = useState<(typeof reels)[0] | null>(null);

  const filteredReels =
    activeCategory === "All"
      ? reels
      : reels.filter((reel) => reel.category === activeCategory);

  const videosPerPage = 6;
  const totalPages = Math.ceil(filteredReels.length / videosPerPage);
  const currentReels = filteredReels.slice(
    currentPage * videosPerPage,
    (currentPage + 1) * videosPerPage
  );

  const nextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  React.useEffect(() => {
    setCurrentPage(0);
  }, [activeCategory]);

  return (
    <div className="min-h-screen flex flex-col bg-background overflow-x-hidden">
      <NavHeader />

      <main className="flex-1 relative">
        {/* Background Effects - Updated to match Journey page */}
        <div className="fixed inset-0 pointer-events-none">
          {/* Primary gradient layer */}
          <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-primary/10 to-primary/5" />

          {/* Multiple radial gradients */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,#ff000030,#00000000)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,#ff000020,transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,#ff000020,transparent_50%)]" />
          </div>

          {/* Enhanced floating orbs */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full md:w-[800px] h-[300px] md:h-[500px] bg-primary/10 blur-[120px] rounded-full animate-pulse" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full md:w-[600px] h-[300px] md:h-[400px] bg-primary/10 blur-[120px] rounded-full animate-pulse" />

          {/* Noise texture */}
          <div className="absolute inset-0 bg-[url('/noise.png')] opacity-30 mix-blend-overlay" />
        </div>

        <div className="relative pt-32 md:pt-40 pb-24">
          <div className="container mx-auto px-4">
            {/* Header */}
            <div className="text-center mb-8">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl font-bold mb-3"
              >
                Discover with <span className="gradient-text">Vibe</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-gray-400 text-lg"
              >
                Explore trending reels from our creators
              </motion.p>
            </div>

            {/* Category Tabs */}
            <div className="flex justify-center mb-8 px-4">
              <div className="flex items-center gap-2 overflow-x-auto pb-2 max-w-full no-scrollbar">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => {
                      setActiveCategory(category);
                      setCurrentPage(0);
                    }}
                    className={`px-4 md:px-6 py-2 md:py-2.5 text-sm md:text-base rounded-full whitespace-nowrap transition-colors ${
                      activeCategory === category
                        ? "bg-primary text-white"
                        : "bg-white/5 hover:bg-white/10 border border-white/10"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Reels Section with Navigation */}
            <div className="flex items-center gap-8 mb-8">
              {/* Left Arrow - Hidden on Mobile */}
              <motion.button
                onClick={prevPage}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`hidden md:block p-4 rounded-full backdrop-blur-sm border transition-colors ${
                  currentPage === 0
                    ? "bg-black/20 border-white/5 cursor-not-allowed opacity-50"
                    : "bg-black/40 border-white/10 hover:bg-white/10"
                }`}
                disabled={currentPage === 0}
              >
                <ArrowLeft className="w-6 h-6" />
              </motion.button>

              {/* Reels Container */}
              <div className="flex-1 h-[600px] md:h-[600px]">
                <div className="relative h-full overflow-hidden">
                  <motion.div
                    className="h-full flex gap-6 transition-all duration-500 ease-out"
                    style={{
                      transform: `translateX(-${
                        currentPage * (window.innerWidth < 768 ? 100 : 100)
                      }%)`,
                      display: "grid",
                      gridAutoFlow: "column",
                      gridAutoColumns:
                        window.innerWidth < 768
                          ? "100%"
                          : "calc(33.333% - 1rem)",
                    }}
                  >
                    {currentReels.map((reel) => (
                      <div
                        key={reel.id}
                        className="h-full w-full flex-shrink-0"
                      >
                        <VideoCard reel={reel} onVideoClick={setSelectedReel} />
                      </div>
                    ))}
                  </motion.div>
                </div>
              </div>

              {/* Right Arrow - Hidden on Mobile */}
              <motion.button
                onClick={nextPage}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`hidden md:block p-4 rounded-full backdrop-blur-sm border transition-colors ${
                  currentPage === totalPages - 1
                    ? "bg-black/20 border-white/5 cursor-not-allowed opacity-50"
                    : "bg-black/40 border-white/10 hover:bg-white/10"
                }`}
                disabled={currentPage === totalPages - 1}
              >
                <ArrowRight className="w-6 h-6" />
              </motion.button>
            </div>

            {/* Mobile Navigation Buttons */}
            <div className="flex justify-center gap-4 md:hidden mb-8">
              <motion.button
                onClick={prevPage}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`p-4 rounded-full backdrop-blur-sm border transition-colors ${
                  currentPage === 0
                    ? "bg-black/20 border-white/5 cursor-not-allowed opacity-50"
                    : "bg-black/40 border-white/10 hover:bg-white/10"
                }`}
                disabled={currentPage === 0}
              >
                <ArrowLeft className="w-6 h-6" />
              </motion.button>

              <motion.button
                onClick={nextPage}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`p-4 rounded-full backdrop-blur-sm border transition-colors ${
                  currentPage === totalPages - 1
                    ? "bg-black/20 border-white/5 cursor-not-allowed opacity-50"
                    : "bg-black/40 border-white/10 hover:bg-white/10"
                }`}
                disabled={currentPage === totalPages - 1}
              >
                <ArrowRight className="w-6 h-6" />
              </motion.button>
            </div>

            {/* Page Dots */}
            {totalPages > 1 && (
              <div className="flex justify-center gap-2 mb-8">
                {Array.from({ length: totalPages }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentPage(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-colors ${
                      index === currentPage ? "bg-primary" : "bg-white/20"
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Navigation */}
      <FloatingNav />

      {/* Video Modal */}
      <AnimatePresence>
        {selectedReel && (
          <VideoModal reel={selectedReel} onClose={() => setSelectedReel(null)} />
        )}
      </AnimatePresence>
    </div>
  );
}
