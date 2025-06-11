import { Play, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'wouter';
import { Toaster } from 'sonner';
import NavHeader from './components/NavHeader';
import { Footer } from './components/Footer';
import { CookieConsent } from './components/CookieConsent';
import { FloatingNav } from './components/FloatingNav';
import outlookLogo from './images/Outlook-Logo.png';
import etLogo from './images/et.png';
import htLogo from './images/ht.png';
import SEO from "./components/SEO";

function App() {
  const [, navigate] = useLocation();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Flashoot",
    "url": "https://flashoot.com",
    "logo": "https://flashoot.com/logo.png",
    "description": "Book professional content creators instantly. Transform your vision into stunning reels with Flashoot's network of skilled Reel-Makers™.",
    "sameAs": [
      "https://www.instagram.com/flashoot",
      "https://www.linkedin.com/company/flashoot"
    ],
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "INR",
      "lowPrice": "5000",
      "highPrice": "50000",
      "offerCount": "3"
    }
  };

  return (
    <div className="min-h-screen bg-background relative">
      <Toaster richColors position="top-right" />
      <SEO 
        structuredData={structuredData}
      />
      {/* Global Background Effects - Matching Journey page */}
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
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full md:w-[800px] h-[200px] sm:h-[300px] md:h-[500px] bg-primary/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full md:w-[600px] h-[200px] sm:h-[300px] md:h-[400px] bg-primary/10 blur-[120px] rounded-full animate-pulse" />
        
        {/* Noise texture */}
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-30 mix-blend-overlay" />
      </div>

      <NavHeader />

      {/* Hero Section - Remove section-dark class */}
      <section className="min-h-screen flex flex-col justify-between relative overflow-hidden">
        {/* Main Hero Content */}
        <div className="flex-1 flex items-center justify-center pt-16 sm:pt-20 md:pt-24 relative z-10">
          <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
            <div className="text-center max-w-4xl mx-auto">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="relative space-y-4 sm:space-y-6 md:space-y-8 lg:space-y-10"
              >
                {/* Main Heading */}
                <div className="space-y-2 sm:space-y-3 md:space-y-4">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1]">
                    Book <span className="gradient-text">Reel-Makers</span>™
                    <span className="block mt-1 sm:mt-2 md:mt-3">Instantly, Effortlessly.</span>
                  </h1>
                  <p className="text-base sm:text-lg md:text-xl lg:text-2xl bg-clip-text text-transparent bg-gradient-to-r from-gray-100 via-gray-300 to-gray-100 font-medium max-w-2xl mx-auto leading-relaxed px-4 sm:px-0">
                    Connect with professional content creators and
                    <span className="block">transform your vision into stunning reels</span>
                  </p>
                </div>

                {/* CTA Buttons */}
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 md:gap-6 px-4 sm:px-0"
                >
                  <Link href="/enquiry" className="w-full sm:w-auto px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-xl text-base sm:text-lg md:text-xl font-medium bg-gradient-to-br from-[#FE002A] via-[#FE002A] to-[#B3001E] hover:from-[#FE002A]/95 hover:via-[#FE002A]/95 hover:to-[#B3001E]/95 transition-all shadow-[0_2px_12px_-3px_rgba(254,0,42,0.4)]">
                    <div className="relative">
                      <div className="absolute inset-0 bg-primary/20 rounded-full blur" />
                      <Users className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 relative" />
                    </div>
                    Book Now
                  </Link>
                  <Link href="/partner">
                    <button className="w-full sm:w-auto group flex items-center justify-center gap-2 sm:gap-3 md:gap-4 px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-xl bg-white/5 hover:bg-white/10 transition-all backdrop-blur-sm border border-white/10 text-base sm:text-lg md:text-xl font-medium">
                      <div className="relative">
                        <div className="absolute inset-0 bg-primary/20 rounded-full blur" />
                        <Users className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 relative" />
                      </div>
                      Become a Partner
                    </button>
                  </Link>
                </motion.div>

                {/* Featured In Section */}
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="pt-4 sm:pt-6 md:pt-8"
                >
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-10">
                    <span className="text-xs sm:text-sm md:text-base font-medium text-gray-400 uppercase tracking-wider">
                      Featured In
                    </span>
                    <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-10">
                      <a 
                        href="https://www.outlookindia.com/hub4business/flashoot-raises-6-million-in-seed-funding-valuating-it-at-55-million"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-all duration-300"
                      >
                        <img
                          src={outlookLogo}
                          alt="Outlook India"
                          className="h-5 sm:h-6 md:h-7 w-[80px] sm:w-[100px] md:w-[120px] object-contain opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                        />
                      </a>
                      <a 
                        href="https://cio.economictimes.indiatimes.com/news/corporate-news/flashoot-secures-24-million-investment-valuation-soars-to-220-million/119484233"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-all duration-300"
                      >
                        <img
                          src={etLogo}
                          alt="Economic Times"
                          className="h-6 sm:h-8 md:h-9 w-[100px] sm:w-[140px] md:w-[160px] object-contain opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                        />
                      </a>
                      <img
                        src={htLogo}
                        alt="Hindustan Times"
                        className="h-6 sm:h-8 md:h-9 w-[100px] sm:w-[140px] md:w-[160px] object-contain opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                      />
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom Stats Section - Update background */}
        <div className="relative z-10 border-t border-white/10 bg-black/40 backdrop-blur-xl">
          <div className="container mx-auto px-4 py-3 sm:py-4">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
              <div className="flex flex-wrap justify-center sm:flex-row items-center gap-4 sm:gap-6 lg:gap-12">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-primary/20 to-transparent flex items-center justify-center backdrop-blur-xl border border-primary/10">
                    <Play className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-xl sm:text-2xl font-bold">500+</div>
                    <div className="text-sm text-gray-400">Active Creators</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-primary/20 to-transparent flex items-center justify-center backdrop-blur-xl border border-primary/10">
                    <Play className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-xl sm:text-2xl font-bold">10K+</div>
                    <div className="text-sm text-gray-400">Videos Delivered</div>
                  </div>
                </div>
              </div>
              <Link href="/pricing">
                <button className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-gradient-to-br from-[#FE002A]/10 via-[#FE002A]/10 to-[#B3001E]/10 hover:from-[#FE002A]/20 hover:via-[#FE002A]/15 hover:to-[#B3001E]/15 transition-all backdrop-blur-sm border border-[#FE002A]/20 font-medium text-sm sm:text-base shadow-[0_2px_12px_-3px_rgba(254,0,42,0.2)]">
                  View Pricing
                </button>
              </Link>
            </div>
          </div>
          <Footer />
        </div>
      </section>

      <FloatingNav />
      <CookieConsent />
    </div>
  );
}

export default App;