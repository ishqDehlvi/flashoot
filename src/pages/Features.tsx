import { motion } from "framer-motion";
import {
  Clock,
  Calendar,
  Users,
  Sparkles,
  Zap,
  Wallet,
  Shield,
  Star,
  Quote,
} from "lucide-react";
import NavHeader from "../components/NavHeader";
import { Footer } from "../components/Footer";
import { FloatingNav } from "@/components/FloatingNav";
import { ContainerScrollDemo } from "@/components/ui/container-scroll-demo";
import { SparklesCore } from "@/components/ui/aceternity";
import wallet from "../images/wallet.png";
import scheduling from "../images/scheduling.png";
import verifiedPartner from "../images/verified_prtner.png";
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

// Import feature images
// import downloadContent from "../images/Features/D.png";
// import femaleReelMaker from "../images/Features/Female reel-maker Opt.png";
// import instantBooking from "../images/Features/Instant booking conformation.png";
// import liveTracking from "../images/Features/Live tracking.png";
// import pickPartner from "../images/Features/Pick Partner.png";

const features = [
  {
    title: "Instant Booking Confirmation",
    description: "Get immediate confirmation for your bookings with our streamlined process",
    image: Shireen,
  },
  {
    title: "Live Tracking",
    description: "Track your reel-maker's location in real-time for better coordination",
    image: Shireen,
  },
  {
    title: "Pick Your Partner",
    description: "Choose from our curated list of professional reel-makers",
    image: Shireen,
  },
  {
    title: "Download Content",
    description: "Access and download your content instantly after completion",
    image: Shireen,
  },
  {
    title: "Expert Reel-Makers",
    description: "Work with skilled professionals who understand your vision",
    image: Shireen,
  },
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

export default function Features() {
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
      {/* Global Background Effects - Enhanced version */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Primary gradient layer - increased opacity */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-primary/10 to-primary/5" />

        {/* Multiple radial gradients for better effect */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,#ff000030,#00000000)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,#ff000020,transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,#ff000020,transparent_50%)]" />
        </div>

        {/* Enhanced floating orbs */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full md:w-[800px] h-[300px] md:h-[500px] bg-primary/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full md:w-[600px] h-[300px] md:h-[400px] bg-primary/10 blur-[120px] rounded-full animate-pulse" />

        {/* Noise texture with increased opacity */}
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-30 mix-blend-overlay" />
      </div>

      {/* Content */}
      <div className="relative">
        <NavHeader />
        {/* Hero section - restore original height but add negative margin to next section */}
        <section className="min-h-screen flex items-center justify-center relative">
          <ContainerScrollDemo />
        </section>

        {/* Partner Benefits section - reduce negative margin further */}
        <section className="pt-0 pb-16 relative backdrop-blur-sm -mt-48">
          {" "}
          {/* Changed from -mt-72 to -mt-48 */}
          <div className="max-w-7xl mx-auto px-4">
            {/* Section Header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-primary/20 to-primary/5 border border-primary/20 backdrop-blur-xl mb-6">
                <Users className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium bg-gradient-to-r from-white to-white/80 text-transparent bg-clip-text">
                  Partner Benefits
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Empowering Our <span className="gradient-text">Partners</span>
              </h2>
              <p className="text-lg text-gray-300/90 max-w-2xl mx-auto">
                Join our network of professional creators and experience
                seamless collaboration
              </p>
            </div>

            {/* Benefits Grid */}
            <div className="grid lg:grid-cols-3 gap-6">
              {[
                {
                  title: "On-Time Excellence",
                  description:
                    "Our dedicated network ensures punctual arrivals and professional service delivery.",
                  icon: Clock,
                },
                {
                  title: "Secure Authentication",
                  description:
                    "Experience hassle-free booking with our secure OTP system for safe transactions.",
                  icon: Shield,
                },
                {
                  title: "Quality Assurance",
                  description:
                    "Every creator is vetted to maintain the highest standards of content creation.",
                  icon: Star,
                },
              ].map((benefit) => (
                <div
                  key={benefit.title}
                  className="relative p-6 rounded-2xl bg-black/40 backdrop-blur-xl border border-white/10"
                >
                  <div className="p-3 rounded-xl bg-primary/10 border border-primary/20 w-fit mb-4">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>

                  <h3 className="text-xl font-semibold mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-400">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative py-16 md:py-24 backdrop-blur-sm">
          {/* Wallet Section content */}
          <div className="relative max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
              {/* Left Content */}
              <div className="relative z-10">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="space-y-8 max-w-xl"
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-primary/20 to-primary/5 border border-primary/20 backdrop-blur-xl shadow-[0_0_15px_rgba(255,0,0,0.1)] hover:shadow-[0_0_20px_rgba(255,0,0,0.2)] transition-all duration-300"
                  >
                    <Wallet className="w-5 h-5 text-primary" />
                    <span className="text-sm font-medium bg-gradient-to-r from-white to-white/80 text-transparent bg-clip-text">
                      Secure Payments
                    </span>
                  </motion.div>

                  <div>
                    <h2 className="text-4xl md:text-5xl xl:text-6xl font-bold mb-6 leading-[1.1] tracking-tight">
                      Manage Your{" "}
                      <span className="relative inline-block">
                        <span className="relative z-10 gradient-text">
                          Payments
                        </span>
                        <motion.span
                          initial={{ width: "0%" }}
                          whileInView={{ width: "100%" }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.5 }}
                          className="absolute bottom-0 left-0 h-[6px] bg-gradient-to-r from-primary/50 to-transparent rounded-full blur-sm"
                        />
                        <div className="absolute -inset-x-2 -inset-y-1 bg-primary/10 blur-xl opacity-50 z-0" />
                      </span>{" "}
                      with Ease
                    </h2>
                    <p className="text-lg text-gray-300/90 leading-relaxed">
                      Experience hassle-free transactions with our secure in-app
                      wallet. Add funds, track expenses, and manage payments all
                      in one place.
                    </p>
                  </div>

                  <div className="space-y-4 pt-6">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                      className="group/item relative overflow-hidden rounded-2xl"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity duration-500" />
                      <div className="relative p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl hover:border-primary/20 transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,0,0,0.1)]">
                        <div className="flex items-start gap-4">
                          <div className="p-3 rounded-xl bg-primary/20 backdrop-blur-sm border border-primary/20 transition-colors group-hover/item:bg-primary/30">
                            <Shield className="w-6 h-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="text-xl font-semibold mb-2">
                              Secure Transactions
                            </h3>
                            <p className="text-lg text-gray-400">
                              Bank-grade security ensures your money and data
                              are always protected
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                      className="group/item relative overflow-hidden rounded-2xl"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity duration-500" />
                      <div className="relative p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl hover:border-primary/20 transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,0,0,0.1)]">
                        <div className="flex items-start gap-4">
                          <div className="p-3 rounded-xl bg-primary/20 backdrop-blur-sm border border-primary/20 transition-colors group-hover/item:bg-primary/30">
                            <Zap className="w-6 h-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="text-xl font-semibold mb-2">
                              Instant Transfers
                            </h3>
                            <p className="text-lg text-gray-400">
                              Quick and easy transfers to creators after service
                              completion
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </div>

              {/* Right Image Section */}
              <div className="relative w-full lg:h-[700px] flex items-center justify-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="relative w-full max-w-[800px]"
                >
                  <div className="relative">
                    <motion.img
                      src={wallet}
                      alt="Flashoot Wallet Interface"
                      className="w-full h-auto"
                      style={{
                        filter: "drop-shadow(0 0 30px rgba(255,0,0,0.15))",
                      }}
                    />

                    {/* Enhanced glow effect */}
                    <div className="absolute inset-0 -z-10">
                      <div className="absolute inset-y-[10%] left-[20%] right-[20%] bg-primary/5 blur-[80px] rounded-full animate-pulse" />
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 relative backdrop-blur-sm">
          <div className="max-w-6xl mx-auto px-4">
            {/* Simple Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-primary/20 to-primary/5 border border-primary/20 backdrop-blur-xl mb-6">
                <Calendar className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium text-white">
                  Smart Booking System
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Book Your Shoots with{" "}
                <span className="gradient-text">Confidence</span>
              </h2>
              <p className="text-lg text-gray-300/90 max-w-2xl mx-auto">
                Experience seamless scheduling and booking through our intuitive
                platform
              </p>
            </div>

            {/* Updated Cards Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Smart Scheduling",
                  description:
                    "Choose your preferred time and location. Our AI-powered system ensures perfect matches with available creators.",
                  icon: Calendar,
                  image: scheduling,
                  features: [
                    "Flexible Timing",
                    "Location Selection",
                    "Instant Confirmation",
                  ],
                },
                {
                  title: "Verified Partners",
                  description:
                    "Work with thoroughly vetted professionals who maintain the highest standards of content creation.",
                  icon: Shield,
                  image: verifiedPartner,
                  features: [
                    "Background Checked",
                    "Portfolio Verified",
                    "Quality Assured",
                  ],
                },
              ].map((card) => (
                <div
                  key={card.title}
                  className="flex flex-col bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden"
                >
                  {/* Image Section */}
                  <div className="relative bg-black/20 p-8">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-[240px] object-contain mx-auto"
                    />

                    {/* Icon */}
                    <div className="absolute top-6 right-6 p-3 rounded-xl bg-black/40 backdrop-blur-xl border border-white/10">
                      <card.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>

                  {/* Content Section - Now with flex-grow to fill space */}
                  <div className="flex-grow flex flex-col p-8 border-t border-white/10">
                    <h3 className="text-2xl font-bold mb-3">{card.title}</h3>
                    <p className="text-gray-300/90 mb-6">{card.description}</p>

                    {/* Features - Now pushed to bottom with mt-auto */}
                    <div className="mt-auto flex flex-wrap gap-2">
                      {card.features.map((feature) => (
                        <div
                          key={feature}
                          className="px-4 py-2 rounded-full bg-primary/10 border border-primary/20"
                        >
                          <span className="text-sm text-primary">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
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

        <section className="py-32 relative backdrop-blur-sm">
          {/* Why Choose Flashoot Section content */}
          <div className="max-w-7xl mx-auto px-4">
            {/* Section Header */}
            <div className="relative text-center mb-24">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative z-10"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-primary/20 to-primary/5 border border-primary/20 backdrop-blur-xl mb-8"
                >
                  <Sparkles className="w-5 h-5 text-primary animate-pulse" />
                  <span className="text-sm font-medium bg-gradient-to-r from-white to-white/80 text-transparent bg-clip-text">
                    Why Choose Flashoot
                  </span>
                </motion.div>

                <div className="max-w-4xl mx-auto">
                  <h2 className="text-4xl md:text-6xl xl:text-7xl font-bold mb-8 leading-[1.1]">
                    The Future of{" "}
                    <span className="relative inline-block">
                      <span className="relative z-10 gradient-text">
                        Content
                      </span>
                      <motion.span
                        initial={{ width: "0%" }}
                        whileInView={{ width: "100%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="absolute bottom-0 left-0 h-[6px] bg-gradient-to-r from-primary/50 to-transparent rounded-full blur-sm"
                      />
                    </span>{" "}
                    Creation
                  </h2>
                  <p className="text-xl text-gray-300/90 max-w-2xl mx-auto">
                    Experience the next generation of content creation with our
                    innovative platform
                  </p>
                </div>
              </motion.div>

              {/* Decorative Elements */}
              <div className="absolute inset-0 -z-10">
                <SparklesCore
                  background="transparent"
                  minSize={0.4}
                  maxSize={1}
                  particleDensity={10}
                  className="w-full h-full"
                  particleColor="#ff0000"
                />
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative"
                >
                  <div className="relative h-full rounded-[2rem] p-1 transition-all duration-300">
                    {/* Gradient Border */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/0 to-primary/20 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />

                    {/* Main Card */}
                    <div className="relative h-full rounded-[1.9rem] bg-black/40 backdrop-blur-xl border border-white/10 overflow-hidden transition-all duration-500 group-hover:border-primary/20 group-hover:shadow-[0_0_30px_rgba(255,0,0,0.1)]">
                      {/* Image Container */}
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <motion.img
                          src={feature.image}
                          alt={feature.title}
                          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                      </div>

                      {/* Content */}
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <h3 className="text-2xl font-bold text-white mb-2">
                          {feature.title}
                        </h3>
                        <p className="text-gray-300">
                          {feature.description}
                        </p>
                      </div>

                      {/* Hover Effect */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="absolute top-0 left-0 w-24 h-24 bg-primary/10 rounded-full blur-2xl transform -translate-x-1/2 -translate-y-1/2" />
                        <div className="absolute bottom-0 right-0 w-24 h-24 bg-primary/10 rounded-full blur-2xl transform translate-x-1/2 translate-y-1/2" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>



        <div className="border-t border-white/10 backdrop-blur-sm">
          <Footer />
        </div>

        <FloatingNav />
      </div>
    </div>
  );
}
