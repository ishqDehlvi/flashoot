'use client'
import { motion } from "framer-motion";
import { Users, Check, ArrowRight, Camera, Clock, Sparkles, DollarSign, Shield, IndianRupee, Download, Quote } from "lucide-react";
import NavHeader from "../components/NavHeader";
import { Footer } from "../components/Footer";
import { FloatingNav } from "@/components/FloatingNav";
import outlookLogo from "../images/Outlook-Logo.png";
import etLogo from "../images/et.png";
import htLogo from "../images/ht.png";
import wallet from "../images/wallet.png";
import isb from "../../dist/assets/isb.svg";
import why1 from "../images/why1.png";
import why2 from "../images/why2.png";
import why3 from "../images/why3.png";
import why4 from "../images/why4.png";
import why5 from "../images/why5.png";
import why6 from "../images/why6.png";
import Srikari from "../images/Srikari.jpg";
import Pravallika from "../images/Pravallika.jpg";
import Abhiram from "../images/Abhiram.jpg";
import Prem from "../images/Prem.jpg";
import Shireen from "../images/Shireen.jpg";
import Sharan from "../images/Sharan.jpg";
import Shreenija from "../images/Shreenija.jpg";
import Sindhura from "../images/Sindhura.jpg";
import Swetha from "../images/Swetha.jpg";
import { useState, useEffect } from "react";
const features = [
  {
    title: "Trained & Certified Reel Makers",
    description: "Each Partner clears 6 filters to get their certification",
    icon: why1,
  },
  {
    title: "Easy Booking",
    description: "Stop strugging with complex booking procedure",
    icon: why2,
  },
  {
    title: "Unbelievable Pricing",
    description: "Each Reel starts 1999/-",
    icon: why3,
  },
  {
    title: "Safe & Secure",
    description: "You & Your data is safe and secured.",
    icon: why4,
  },
  {
    title: "Instant Reels, Instant Editing",
    description: "No hidden charges! Clients get upfront pricing, secure payment options, and a seamless checkout experience.",
    icon: why5,
  },
  {
    title: "Women Safety",
    description: "A women can book a female Reel maker",
    icon: why6,
  }
];

const testimonials = [
  {
    name: "Srikari Galigari",
    quote: "Flashoot made booking a reel maker super easy! Great service, skilled creators, and stunning reels. Highly recommend!",
    image: Srikari,
  },
  {
    name: "Lanka Pravallika",
    quote: "Flashoot is a game-changer! Quick booking, talented reel makers, and amazing event coverage. Loved the experience!",
    image: Pravallika,
  },
  {
    name: "Abhiram Kukunuri",
    quote: "Seamless booking, professional creators, and stunning reels! Flashoot made capturing memories effortless and fun.",
    image: Abhiram,
  },
  {
    name: "Prem Kumar",
    quote: "Highly impressed with Flashoot! Easy to use, top-notch reel makers, and fantastic results. Will book again!",
    image: Prem,
  },
  {
    name: "Shireen Fathima",
    quote: "Flashoot delivered exactly what I needed—professional reels, hassle-free booking, and great service. Totally worth it!",
    image: Shireen,
  },
  {
    name: "Sri Sharan",
    quote: "Capturing moments has never been easier! Flashoot connects you with skilled reel makers for perfect event videos.",
    image: Sharan,
  },
  {
    name: "Shreenija Rao",
    quote: "Flashoot truly changed the game! Unlike traditional videographers, they delivered stunning reels instantly after my event.",
    image: Shreenija,
  },
  {
    name: "Sindhura Kolli",
    quote: "The team was super professional and creative! Our reels turned out stylish, high-quality, and way beyond our expectations.",
    image: Sindhura,
  },
  {
    name: "Swetha Bandaru",
    quote: "Flashoot captured my sister's wedding events beautifully, delivering fun, high-quality reels within an hour to share with family and friends!",
    image: Swetha,
  },
];

const packages = [
  {
    title: "Wedding Packages",
    subtitle: "For Your Special Day",
    description: "Professional coverage for your wedding celebrations, specializing in traditional and modern Indian ceremonies with elegant, timeless captures.",
    packageText: "Starting from",
    packageText2: "/package",
    showWeddingCard: true,
    features: [

    ],
    price: "14,999",
    booknowButton: "Know More",
    booknowLink: "/wedding-packages",
    packageInclusion: false,
  },
  {
    title: "Corporate Package",
    subtitle: "For Business Events",
    description: "Professional coverage for your business events, delivering polished content that aligns with your brand identity and marketing goals.",
    packageText: "",
    packageText2: "/only",
    showWeddingCard: false,
    features: [
      "Up to 3 Reels (each up to 60 seconds)",
      "Up to 6 hours of shoot time",
      "Mobile portrait photos complimentary: up to 15",
      "Shot on iPhone",
      "Instant reel delivery",
      "Flashoot branding included",
      "Raw footage provided"
    ],
    price: "9,999",
    booknowButton: "Book Now",
    booknowLink: "/enquiry",
    packageInclusion: true,
  }
];

export default function Landing() {

  const [currentPage, setCurrentPage] = useState(1);
  const testimonialsPerPage = 3;
  const totalPages = Math.ceil(testimonials.length / testimonialsPerPage);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentPage((prev) => (prev === totalPages ? 1 : prev + 1));
    }, 5000);

    return () => clearInterval(timer);
  }, [totalPages]);

  const getCurrentTestimonials = () => {
    const startIndex = (currentPage - 1) * testimonialsPerPage;
    return testimonials.slice(startIndex, startIndex + testimonialsPerPage);
  };

  return (
    <div className="min-h-screen bg-background relative">
      {/* Global Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/15 via-primary/05 to-transparent" />
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,#FE002A20,transparent)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,#FE002A15,transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,#FE002A15,transparent_50%)]" />
        </div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full md:w-[800px] h-[300px] md:h-[500px] bg-primary/05 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full md:w-[600px] h-[300px] md:h-[400px] bg-primary/05 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-30 mix-blend-overlay" />
      </div>

      <NavHeader />

      <main className="relative">
        {/* Hero Section */}
        <section className="min-h-[calc(100vh-4rem)] flex items-center justify-center relative pt-16 md:pt-20 overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col items-center justify-center text-center w-full py-12 md:py-24 max-w-2xl mx-auto">
              <div className="space-y-4">
                <h2 className="text-sm md:text-base font-semibold text-primary/80 uppercase tracking-wider drop-shadow-md">
                  WORLD'S FIRST QUICK CONTENT SERVICE
                </h2>
                <p className="text-xl sm:text-3xl md:text-3xl font-semibold text-gray-200 drop-shadow-sm leading-tight">
                  We Shoot • Edit • Deliver in
                </p>
                <h1 className="text-6xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold leading-tight bg-gradient-to-r from-primary via-red-500 to-orange-400 bg-clip-text text-transparent drop-shadow-lg animate-gradient-x">
                  10 Minutes<span className="relative align-super text-sm md:text-xl lg:text-5xl leading-tight bg-gradient-to-r from-primary via-red-500 to-orange-400 bg-clip-text text-transparent drop-shadow-lg animate-gradient-x ml-[-6px]" style={{ top: '-8px' }}>*</span>
                </h1>
                <div className="flex justify-center gap-2 pt-1">
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
              <div className="flex items-center justify-center gap-4 mt-8 md:mt-10 w-full sm:w-auto">
                <a href="/enquiry">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-auto sm:w-auto px-8 md:px-10 py-4 md:py-5 rounded-2xl bg-primary text-white text-base md:text-lg font-semibold hover:bg-primary/90 transition-colors relative group shadow-xl"
                >
                  <span className="relative z-10">Book Now</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-primary rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.button>
                </a>
                <a href="/partner" className="w-auto sm:w-auto">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-auto px-8 md:px-10 py-4 md:py-5 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 text-white text-base md:text-lg font-semibold hover:bg-white/10 transition-colors shadow-xl"
                  >
                    Become a Partner
                  </motion.button>
                </a>
              </div>
              {/* Client Stats Row */}
              <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 mt-10 md:mt-12 mb-4">
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-primary">50,000+</div>
                  <div className="text-sm md:text-base text-gray-400">Reels Delivered</div>
                </div>
                <div className="hidden sm:block w-px h-10 bg-gray-700/30"></div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-primary">4.9/5</div>
                  <div className="text-sm md:text-base text-gray-400">Rating</div>
                </div>
                <div className="hidden sm:block w-px h-10 bg-gray-700/30"></div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-primary">500+</div>
                  <div className="text-sm md:text-base text-gray-400">Reel-Makers</div>
                </div>
              </div>
              {/* Press Logos Row */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 mt-6 md:mt-8">
                <span className="text-xs sm:text-sm md:text-base font-medium text-gray-400 uppercase tracking-wider">
                  Featured In
                </span>
                <div className="flex items-center justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-10">
                  <a 
                    href="https://www.outlookindia.com/hub4business/flashoot-raises-6-million-in-seed-funding-valuating-it-at-55-million"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-all duration-300"
                  >
                    <img
                      src={outlookLogo}
                      alt="Outlook India"
                      className="h-6 w-[90px] sm:h-7 sm:w-[100px] md:h-8 md:w-[120px] lg:h-9 lg:w-[140px] object-contain opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300"
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
                      className="h-7 w-[120px] sm:h-8 sm:w-[140px] md:h-9 md:w-[160px] lg:h-10 lg:w-[180px] object-contain opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                    />
                  </a>
                  <img
                    src={htLogo}
                    alt="Hindustan Times"
                    className="h-7 w-[120px] sm:h-8 sm:w-[140px] md:h-9 md:w-[160px] lg:h-10 lg:w-[180px] object-contain opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>


        <section className="py-12 md:py-20 relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12 md:mb-16"
            >
              <div className="inline-flex items-center gap-2 px-4 md:px-5 py-2 md:py-2.5 rounded-full bg-gradient-to-r from-primary/20 to-primary/5 border border-primary/20 backdrop-blur-xl mb-4 md:mb-6">
                <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                <span className="text-xs md:text-sm font-medium text-white">Why Choose Us</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Features That Make Us{" "}
                <span className="gradient-text">Stand Out</span>
              </h2>
              {/* <p className="text-base md:text-lg text-gray-300/90 max-w-2xl mx-auto px-4 sm:px-0">
                Experience the next generation of content creation with our innovative platform
              </p> */}
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex flex-col-reverse sm:flex-row items-center gap-6 bg-white/5 rounded-2xl p-4 md:p-6 border border-white/10 hover:border-primary/30 transition-all duration-300 group"
                >
                  {/* Image Section */}
                  <div className="flex-shrink-0 item-end mb-4 sm:mb-0">
                    <div className="w-64 h-28 md:w-[190px] md:h-36  flex items-center justify-center">
                      <img src={feature.icon} alt={feature.title} className="w-[175px] h-[175px] md:w-[600px] md:h-[600px] object-contain" />
                    </div>
                  </div>
                  {/* Text Section */}
                  <div className="flex-1 text-left">
                    <h3 className="text-lg md:text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">{feature.title}</h3>
                    <p className="text-sm md:text-base text-gray-400 group-hover:text-gray-300 transition-colors duration-300 mb-[10px]">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Bestsellers Section */}
        <section className="py-12 md:py-20 relative overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-10 md:mb-14 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">Bestsellers</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 max-w-4xl mx-auto">
              {/* Hourly Plan Card */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                className="relative overflow-hidden rounded-3xl bg-black/40 backdrop-blur-xl border border-white/10 flex flex-col items-center text-center p-6 md:p-10 shadow-2xl group"
                whileHover={{ scale: 1.03, boxShadow: '0 0 40px #FE002A22' }}
              >
                {/* Animated orb behind card */}
                <div className="absolute left-1/2 top-0 -translate-x-1/2 w-60 h-32 bg-gradient-to-br from-primary/30 via-pink-500/20 to-yellow-500/20 blur-[60px] rounded-full z-0 animate-pulse" />
                <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent mb-1 relative z-10">Hourly Plan</h3>
                <div className="text-primary/80 text-sm font-semibold mb-2 relative z-10">Quickest Content</div>
                <div className="text-gray-400 mb-4 text-base relative z-10">Perfect for creators who want a single, fast, high-quality reel.</div>
                <div className="flex items-baseline gap-2 mb-2 relative z-10">
                  <span className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-pink-500 to-yellow-500 bg-clip-text text-transparent animate-gradient-x">₹1,999</span>
                </div>
                <div className="text-xs text-gray-400 mb-2 relative z-10">+ GST</div>
                <div className="text-gray-400 mb-2 text-xs relative z-10">All taxes extra</div>
                <div className="w-full h-px bg-gradient-to-r from-primary/20 via-white/10 to-primary/20 my-4 relative z-10" />
                <div className="text-xs uppercase tracking-wider text-primary/80 mb-2 relative z-10">What's included</div>
                <div className="flex-grow w-full relative z-10">
                  <div className="space-y-3 mb-8">
                    <div className="flex items-center gap-3 group">
                      <Check className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-gray-300 group-hover:text-white transition-colors duration-300">1 Hour Shoot</span>
                    </div>
                    <div className="flex items-center gap-3 group">
                      <Check className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-gray-300 group-hover:text-white transition-colors duration-300">1 Edited Reel Delivered</span>
                    </div>
                    <div className="flex items-center gap-3 group">
                      <Check className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-gray-300 group-hover:text-white transition-colors duration-300">Shot on Latest iPhone</span>
                    </div>
                    <div className="flex items-center gap-3 group">
                      <Check className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-gray-300 group-hover:text-white transition-colors duration-300">Fast Delivery (10 mins post shoot)</span>
                    </div>
                  </div>
                </div>
                <a href="/enquiry" className="w-full px-6 py-3 rounded-xl text-lg font-medium bg-gradient-to-br from-[#FE002A] via-[#FE002A] to-[#B3001E] hover:from-[#FE002A]/95 hover:via-[#FE002A]/95 hover:to-[#B3001E]/95 transition-all shadow-[0_2px_12px_-3px_rgba(254,0,42,0.4)] text-white flex items-center justify-center gap-2 relative z-10">
                  <IndianRupee className="w-5 h-5 mr-1" />Book Now<svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </a>
              </motion.div>
              {/* Half-Day Plan Card */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
                className="relative overflow-hidden rounded-3xl bg-black/40 backdrop-blur-xl border border-white/10 flex flex-col items-center text-center p-6 md:p-10 shadow-2xl group"
                whileHover={{ scale: 1.03, boxShadow: '0 0 40px #FE002A22' }}
              >
                {/* Animated orb behind card */}
                <div className="absolute left-1/2 top-0 -translate-x-1/2 w-60 h-32 bg-gradient-to-br from-yellow-500/20 via-pink-500/20 to-primary/30 blur-[60px] rounded-full z-0 animate-pulse" />
                {/* Most Popular badge */}
                <div className="absolute top-6 right-6 bg-gradient-to-r from-primary/80 to-yellow-500/80 text-white text-[6px] md:text-[8px] font-bold px-3 md:px-4 py-1 rounded-full shadow-lg uppercase tracking-wider z-20">Most Popular</div>
                <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent mb-1 relative z-10">Half-Day Plan</h3>
                <div className="text-yellow-400 text-sm font-semibold mb-2 relative z-10">Event Essential</div>
                <div className="text-gray-400 mb-4 text-base relative z-10">Ideal for events and creators who need more time and more content.</div>
                <div className="flex items-baseline gap-2 mb-2 relative z-10">
                  <span className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-pink-500 to-yellow-500 bg-clip-text text-transparent animate-gradient-x">₹4,999</span>
                </div>
                <div className="text-xs text-gray-400 mb-2 relative z-10">+ GST</div>
                <div className="text-gray-400 mb-2 text-xs relative z-10">All taxes extra</div>
                <div className="w-full h-px bg-gradient-to-r from-primary/20 via-white/10 to-primary/20 my-4 relative z-10" />
                <div className="text-xs uppercase tracking-wider text-primary/80 mb-2 relative z-10">What's included</div>
                <div className="flex-grow w-full relative z-10">
                  <div className="space-y-3 mb-8">
                    <div className="flex items-center gap-3 group">
                      <Check className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-gray-300 group-hover:text-white transition-colors duration-300">Up to 3 Hours Shoot</span>
                    </div>
                    <div className="flex items-center gap-3 group">
                      <Check className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-gray-300 group-hover:text-white transition-colors duration-300">2 Edited reels</span>
                    </div>
                    <div className="flex items-center gap-3 group">
                      <Check className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-gray-300 group-hover:text-white transition-colors duration-300">Shot on Latest iPhone</span>
                    </div>
                    <div className="flex items-center gap-3 group">
                      <Check className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-gray-300 group-hover:text-white transition-colors duration-300">Fast Delivery (10 mins post shoot)</span>
                    </div>
                  </div>
                </div>
                <a href="/enquiry" className="w-full px-6 py-3 rounded-xl text-lg font-medium bg-gradient-to-br from-[#FE002A] via-[#FE002A] to-[#B3001E] hover:from-[#FE002A]/95 hover:via-[#FE002A]/95 hover:to-[#B3001E]/95 transition-all shadow-[0_2px_12px_-3px_rgba(254,0,42,0.4)] text-white flex items-center justify-center gap-2 relative z-10">
                  <IndianRupee className="w-5 h-5 mr-1" />Book Now<svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </a>
              </motion.div>
            </div>
          </div>
        </section>

       

        {/* Pricing Section */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-primary/20 to-primary/5 border border-primary/20 backdrop-blur-xl mb-6">
                <IndianRupee className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium text-white">Pricing Plans</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Choose Your{" "}
                <span className="gradient-text">Perfect Plan</span>
              </h2>
              <p className="text-lg text-gray-300/90 max-w-2xl mx-auto">
                Professional content creation services tailored to your needs
              </p>
            </motion.div>

            {/* Render compact wedding cards if packageInclusion is false */}
            

            {/* Render regular packages if any packageInclusion is true */}
            {packages.some(pkg => pkg.packageInclusion) && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {packages.map((pkg, index) => (
                  <motion.div
                    key={pkg.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="relative overflow-hidden rounded-3xl"
                  >
                    <motion.div className="relative overflow-hidden rounded-3xl bg-black/40 backdrop-blur-xl border border-white/10 h-full flex flex-col">
                      <div className="absolute inset-0">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent opacity-50" />
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,#ff000015,transparent_50%)]" />
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,#ff000015,transparent_50%)]" />
                      </div>

                      <div className="relative p-8 md:p-12 flex flex-col h-full">
                        <div>
                          <h2 className="text-sm uppercase tracking-[0.2em] text-primary mb-3 font-medium">
                            {pkg.subtitle}
                          </h2>
                          <h3 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                            {pkg.title}
                          </h3>
                          <p className="text-gray-400 text-lg mb-6 min-h-[4rem]">{pkg.description}</p>

                          <div className="relative mb-8 w-full">
                            <div className="absolute -inset-4 bg-primary/5 blur-xl rounded-full"></div>
                            <div className="relative">
                              <div className="text-gray-400 text-lg">{pkg.packageText}</div>
                              <div className="flex items-baseline gap-1">
                                <span className="text-4xl md:text-5xl font-bold text-primary">₹{pkg.price}</span>
                                <span className="text-gray-400 text-lg">{pkg.packageText2}</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="flex-grow">
                          {pkg.showWeddingCard && (
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6  mx-auto">
                              {/* Basic Card */}
                              <div className="bg-[#2a1616] rounded-2xl p-4 md:p-6 flex flex-col items-start shadow-lg border border-[#ff000033] mx-auto">
                                <div className="text-xs font-bold text-[#ff6a6a] uppercase mb-1 tracking-widest">Single Event</div>
                                <div className="text-2xl font-bold text-white mb-1">Basic</div>
                              </div>
                              {/* Silver Card */}
                              <div className="bg-[#2a1616] rounded-2xl p-4 md:p-6 flex flex-col items-start shadow-lg border border-[#ff000033] mx-auto">
                                <div className="text-xs font-bold text-[#ff6a6a] uppercase mb-1 tracking-widest">Three Events</div>
                                <div className="text-2xl font-bold text-white mb-1">Silver</div>
                              </div>
                              {/* Gold Card */}
                              <div className="bg-[#2a1616] rounded-2xl p-4 md:p-6 flex flex-col items-start shadow-lg border border-[#ff000033]  mx-auto relative">
                                <div className="text-xs font-bold text-[#ff6a6a] uppercase mb-1 tracking-widest">Four Events</div>
                                <div className="text-2xl font-bold text-white mb-1">Gold</div>
                              </div>
                              {/* Platinum Card */}
                              <div className="bg-[#2a1616] rounded-2xl p-4 md:p-6 flex flex-col items-start shadow-lg border border-[#ff000033]  mx-auto">
                                <div className="text-xs font-bold text-[#ff6a6a] uppercase mb-1 tracking-widest">Complete Wedding</div>
                                <div className="text-2xl font-bold text-white mb-1">Platinum</div>
                              </div>
                            </div>
                          )}
                          {pkg.packageInclusion && (
                            <>
                              <h4 className="text-lg font-semibold text-white/90 mb-4">Package Inclusions:</h4>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                                {/* First Column - 4 features */}
                                <div className="space-y-3">
                                  {pkg.features.slice(0, 4).map((feature, index) => (
                                    <div key={index} className="flex items-start gap-3 group">
                                      <div className="flex-shrink-0 mt-1.5">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary group-hover:scale-125 transition-transform duration-300" />
                                      </div>
                                      <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                                        {feature}
                                      </span>
                                    </div>
                                  ))}
                                </div>
                                {/* Second Column - 3 features */}
                                <div className="space-y-3">
                                  {pkg.features.slice(4).map((feature, index) => (
                                    <div key={index + 4} className="flex items-start gap-3 group">
                                      <div className="flex-shrink-0 mt-1.5">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary group-hover:scale-125 transition-transform duration-300" />
                                      </div>
                                      <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                                        {feature}
                                      </span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </>
                          )}
                        </div>

                        <div className="mt-auto">
                          <a href={pkg.booknowLink}>
                          <button
                            className="w-full md:w-auto md:min-w-[260px] px-6 py-3 rounded-xl text-lg font-medium bg-gradient-to-br from-[#FE002A] via-[#FE002A] to-[#B3001E] hover:from-[#FE002A]/95 hover:via-[#FE002A]/95 hover:to-[#B3001E]/95 transition-all shadow-[0_2px_12px_-3px_rgba(254,0,42,0.4)]"
                          > 
                            <span className="relative flex items-center justify-center gap-2">
                              {pkg.booknowButton}
                              <ArrowRight className="w-5 h-5" />
                            </span>
                          </button>
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </section>


        <section className="py-12 md:py-24 relative backdrop-blur-sm">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                What Our <span className="gradient-text">Loving Customers Say</span>
              </h2>
              <p className="text-base md:text-lg text-gray-400">
                Join thousands of satisfied customers who trust Flashoot
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {getCurrentTestimonials().map((testimonial, index) => (
                <motion.div
                  key={`${testimonial.name}-${currentPage}-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ delay: index * 0.1 }}
                  className="relative bg-black/40 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-8 min-h-[300px] flex flex-col"
                >
                  <div className="absolute -top-4 left-6">
                    <div className="p-2 rounded-lg bg-primary/20 backdrop-blur-sm border border-primary/20">
                      <Quote className="w-5 h-5 text-primary" />
                    </div>
                  </div>

                  <div className="pt-4 h-full flex flex-col justify-between">
                    <p className="text-base md:text-lg text-gray-300 mb-6">
                      {testimonial.quote}
                    </p>

                    <div className="flex items-center gap-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <h4 className="text-lg font-semibold">
                          {testimonial.name}
                        </h4>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex justify-center items-center gap-2 mt-12">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    page === currentPage
                      ? "bg-primary w-8"
                      : "bg-gray-600 hover:bg-primary/50"
                  }`}
                  aria-label={`Go to page ${page}`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Secure Payments Section */}
        <section className="relative py-12 md:py-16 lg:py-24 backdrop-blur-sm">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-8 items-center">
              {/* Left Content */}
              <div className="relative z-10">
                <div className="space-y-6 md:space-y-8 max-w-xl">
                  <div className="inline-flex items-center gap-2 px-4 md:px-5 py-2 md:py-2.5 rounded-full bg-gradient-to-r from-primary/20 to-primary/5 border border-primary/20 backdrop-blur-xl shadow-[0_0_15px_rgba(255,0,0,0.1)] hover:shadow-[0_0_20px_rgba(255,0,0,0.2)] transition-all duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 md:w-5 md:h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a5 5 0 00-10 0v2M5 9h14a2 2 0 012 2v7a2 2 0 01-2 2H5a2 2 0 01-2-2v-7a2 2 0 012-2z" /></svg>
                    <span className="text-xs md:text-sm font-medium bg-gradient-to-r from-white to-white/80 text-transparent bg-clip-text">Secure Payments</span>
                  </div>
                  <div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 md:mb-6 leading-[1.1] tracking-tight">
                      Download The <span className="relative inline-block"><span className="relative z-10 gradient-text">Flashoot App</span><span className="absolute bottom-0 left-0 h-[6px] bg-gradient-to-r from-primary/50 to-transparent rounded-full blur-sm w-full" /></span> Now
                    </h2>
                    <p className="text-base md:text-lg text-gray-300/90 leading-relaxed">
                      Book a Reel-Maker, as easy as booking an Cab.
                    </p>
                  </div>
                  <div className="space-y-4 pt-4 md:pt-6">
                    <div className="group/item relative overflow-hidden rounded-2xl">
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity duration-500" />
                      <div className="relative p-4 md:p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl hover:border-primary/20 transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,0,0,0.1)]">
                        <div className="flex items-start gap-3 md:gap-4">
                          <div className="p-2 md:p-3 rounded-xl bg-primary/20 backdrop-blur-sm border border-primary/20 transition-colors group-hover/item:bg-primary/30">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 md:w-6 md:h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0-1.104.896-2 2-2s2 .896 2 2-.896 2-2 2-2-.896-2-2-2z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a5 5 0 00-10 0v2M5 9h14a2 2 0 012 2v7a2 2 0 01-2 2H5a2 2 0 01-2-2v-7a2 2 0 012-2z" /></svg>
                          </div>
                          <div>
                            <h3 className="text-lg md:text-xl font-semibold mb-2">Get Upto 50% Discount</h3>
                            <p className="text-base md:text-lg text-gray-400"> On Your First Booking </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="group/item relative overflow-hidden rounded-2xl">
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity duration-500" />
                      <div className="relative p-4 md:p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl hover:border-primary/20 transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,0,0,0.1)]">
                        <div className="flex items-start gap-3 md:gap-4">
                          <div>
                            <h3 className="text-lg md:text-xl font-semibold mb-2">Get The App</h3>
                            <div className="space-y-2">
                              <a 
                                href="https://apps.apple.com/in/app/flashoot/id6504755078"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-base md:text-lg text-gray-400 hover:text-white transition-colors"
                              >
                                <Download className="h-4 w-4" />
                                Download on the App Store
                              </a>
                              <a 
                                href="https://play.google.com/store/apps/details?id=com.flashoot.user&hl=en&pli=1"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-base md:text-lg text-gray-400 hover:text-white transition-colors"
                              >
                                <Download className="h-4 w-4" />
                                Get it on Google Play
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Right Image Section */}
              <div className="relative w-full lg:h-[600px] xl:h-[700px] flex items-center justify-center mt-8 lg:mt-0">
                <div className="relative w-full max-w-[600px] lg:max-w-[800px]">
                  <div className="relative">
                    <img
                      src={wallet}
                      alt="Flashoot Wallet Interface"
                      className="w-full h-auto"
                      style={{ filter: "drop-shadow(0 0 30px rgba(255,0,0,0.15))" }}
                    />
                    <div className="absolute inset-0 -z-10">
                      <div className="absolute inset-y-[10%] left-[20%] right-[20%] bg-primary/5 blur-[80px] rounded-full animate-pulse" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingNav />
    </div>
  );
} 