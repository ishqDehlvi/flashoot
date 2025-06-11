import React, { useState } from "react";
import { motion } from "framer-motion";
import NavHeader from "../components/NavHeader";
import { Footer } from "../components/Footer";
import { FloatingNav } from "@/components/FloatingNav";
import { BookingForm } from "@/components/BookingForm";

const packages = [
  {
    title: "Wedding Packages",
    subtitle: "For Your Special Day",
    description:
      "Professional coverage for your wedding celebrations, specializing in traditional and modern Indian ceremonies with elegant, timeless captures.",
    features: [
      "Full Day Coverage",
      "Multiple Reel-Makers",
      "Same Day Preview",
      "Social Media Page Handling",
    ],
    price: "14,999"
  },
  {
    title: "Corporate Packages",
    subtitle: "For Business Events",
    description:
      "Professional coverage for your business events, delivering polished content that aligns with your brand identity and marketing goals.",
    features: [
      "Event Documentation",
      "Professional Editing",
      "Brand Guidelines",
      "Digital Delivery",
    ],
    price: "9,999"
  },
  {
    title: "Half-Day Package",
    subtitle: "For Special Moments",
    description:
      "Professional coverage for your special events, providing high-quality content with quick turnaround time and immediate delivery.",
    features: [
      "Upto 3 Hours Coverage",
      "Quick Turnaround",
      "Professional Reel-Makers",
      "Immediate Delivery",
    ],
    price: "4,999"
  },
];

const PackageCard = ({
  title,
  subtitle,
  description,
  features,
  price,
}: any) => {
  const [isBookingFormOpen, setIsBookingFormOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="relative overflow-hidden rounded-3xl h-full"
    >
      <motion.div className="relative overflow-hidden rounded-3xl bg-black/40 backdrop-blur-xl border border-white/10 h-full flex flex-col">
        {/* Enhanced gradient background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent opacity-50" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,#ff000015,transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,#ff000015,transparent_50%)]" />
        </div>

        <div className="relative p-8 md:p-12 flex flex-col h-full">
          {/* Header Section */}
          <div>
            <h2 className="text-sm uppercase tracking-[0.2em] text-primary mb-3 font-medium">
              {subtitle}
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              {title}
            </h3>
            <p className="text-gray-400 text-lg mb-6 min-h-[4rem]">{description}</p>

            {/* Price Section */}
            <div className="relative mb-8 w-full">
              <div className="absolute -inset-4 bg-primary/5 blur-xl rounded-full"></div>
              <div className="relative">
                <div className="text-gray-400 text-lg">starting from</div>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl md:text-5xl font-bold text-primary">₹{price}</span>
                  <span className="text-gray-400 text-lg">/package</span>
                </div>
              </div>
            </div>
          </div>

          {/* Features List */}
          <div className="flex-grow">
            <h4 className="text-lg font-semibold text-white/90 mb-4">Package Inclusions:</h4>
            <div className="space-y-3 mb-8">
              {features.map((feature: string, index: number) => (
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
          </div>

          {/* Book Now Button */}
          <div className="mt-auto">
            <button
              onClick={() => setIsBookingFormOpen(true)}
              className="w-full md:w-auto md:min-w-[260px] px-6 py-3 rounded-xl text-lg font-medium bg-gradient-to-br from-[#FE002A] via-[#FE002A] to-[#B3001E] hover:from-[#FE002A]/95 hover:via-[#FE002A]/95 hover:to-[#B3001E]/95 transition-all shadow-[0_2px_12px_-3px_rgba(254,0,42,0.4)]"
            >
              <span className="relative flex items-center justify-center gap-2">
                Book Your Session
                <svg 
                  className="w-5 h-5" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M17 8l4 4m0 0l-4 4m4-4H3" 
                  />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </motion.div>

      <BookingForm 
        isOpen={isBookingFormOpen}
        onClose={() => setIsBookingFormOpen(false)}
      />
    </motion.div>
  );
};

export default function Pricing() {
  const [isBookingFormOpen, setIsBookingFormOpen] = useState(false);

  // Add useEffect for scroll restoration
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background relative">
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
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full md:w-[800px] h-[300px] md:h-[500px] bg-primary/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full md:w-[600px] h-[300px] md:h-[400px] bg-primary/10 blur-[120px] rounded-full animate-pulse" />

        {/* Noise texture */}
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-30 mix-blend-overlay" />
      </div>

      <NavHeader />

      <main className="relative pt-24 pb-16">
        {/* Remove the old background effects */}
        {/* <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-primary/5 to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,#ff000022,#00000000)]" />
          <motion.div
            className="absolute -right-64 top-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 blur-[120px] rounded-full"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div> */}

        {/* Rest of the main content */}
        <div className="max-w-7xl mx-auto px-4">
          {/* Hourly Rate Banner */}
          <section className="mb-20 pt-20 md:pt-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="relative overflow-hidden rounded-3xl bg-black/40 backdrop-blur-xl border border-white/10 p-8 md:p-12"
            >
              {/* Enhanced gradient background */}
              <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent opacity-50" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,#ff000015,transparent_50%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,#ff000015,transparent_50%)]" />
              </div>
              
              <div className="relative z-10">
                <div className="flex flex-col lg:flex-row gap-12">
                  {/* Left Section */}
                  <div className="flex-1">
                    <div className="sticky top-8">
                      <h2 className="text-sm uppercase tracking-[0.2em] text-primary mb-3 font-medium">
                        Hourly Creation
                      </h2>
                      <h3 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                        Quick & Flexible Solution
                      </h3>
                      <p className="text-gray-400 text-lg mb-8">Transform your ideas into engaging stories</p>
                      
                      <div className="relative inline-block mb-6">
                        <div className="absolute -inset-4 bg-primary/5 blur-xl rounded-full"></div>
                        <div className="relative">
                          <div className="text-6xl md:text-7xl font-bold text-primary mb-2">₹1,999<span className="text-lg text-gray-400 ml-2">+GST</span></div>
                          <div className="text-gray-400 text-xl">per hour</div>
                        </div>
                      </div>

                      <div className="mt-8">
                        <button
                          onClick={() => setIsBookingFormOpen(true)}
                          className="w-full md:w-auto md:min-w-[260px] px-6 py-3 rounded-xl text-lg font-medium bg-gradient-to-br from-[#FE002A] via-[#FE002A] to-[#B3001E] hover:from-[#FE002A]/95 hover:via-[#FE002A]/95 hover:to-[#B3001E]/95 transition-all shadow-[0_2px_12px_-3px_rgba(254,0,42,0.4)]"
                        >
                          <span className="relative flex items-center justify-center gap-2">
                            Book Your Session
                            <svg 
                              className="w-5 h-5" 
                              fill="none" 
                              stroke="currentColor" 
                              viewBox="0 0 24 24"
                            >
                              <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth={2} 
                                d="M17 8l4 4m0 0l-4 4m4-4H3" 
                              />
                            </svg>
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Right Section */}
                  <div className="flex-1">
                    <div className="space-y-6">
                      <div className="group hover:scale-105 transition-transform duration-300">
                        <div className="flex items-start gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/30 transition-colors duration-300">
                          <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors duration-300">
                            <div className="w-4 h-4 rounded-full bg-primary group-hover:scale-110 transition-transform duration-300" />
                          </div>
                          <div>
                            <h3 className="font-medium text-xl mb-2 text-white/90">Shot on iPhones</h3>
                            <p className="text-gray-400">Latest iPhone Pro Max models for stunning quality</p>
                          </div>
                        </div>
                      </div>

                      <div className="group hover:scale-105 transition-transform duration-300">
                        <div className="flex items-start gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/30 transition-colors duration-300">
                          <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors duration-300">
                            <div className="w-4 h-4 rounded-full bg-primary group-hover:scale-110 transition-transform duration-300" />
                          </div>
                          <div>
                            <h3 className="font-medium text-xl mb-2 text-white/90">Expert Team</h3>
                            <p className="text-gray-400">Professional reel-makers at your service</p>
                          </div>
                        </div>
                      </div>

                      <div className="group hover:scale-105 transition-transform duration-300">
                        <div className="flex items-start gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/30 transition-colors duration-300">
                          <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors duration-300">
                            <div className="w-4 h-4 rounded-full bg-primary group-hover:scale-110 transition-transform duration-300" />
                          </div>
                          <div>
                            <h3 className="font-medium text-xl mb-2 text-white/90">Quick Delivery</h3>
                            <p className="text-gray-400">Same-day content delivery</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </section>

          {/* Updated Hero Section with more aesthetic heading */}
          <section className="text-center mb-20">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-primary mb-4 font-medium tracking-wide uppercase text-sm"
            >
              Reel Packages
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-4xl mx-auto mb-6"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                Choose Your{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 text-primary">
                    Perfect Plan
                  </span>
                  <div className="absolute -bottom-2 left-0 right-0 h-3 bg-primary/10 -skew-x-6"></div>
                </span>
              </h1>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-gray-400 max-w-2xl mx-auto text-lg"
            >
              Professional reel and content creation services tailored to your
              needs
            </motion.p>
          </section>

          {/* Package Cards */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {packages.map((pkg) => (
              <PackageCard key={pkg.title} {...pkg} />
            ))}
          </section>
        </div>
      </main>

      <Footer />
      <FloatingNav />
      <BookingForm 
        isOpen={isBookingFormOpen}
        onClose={() => setIsBookingFormOpen(false)}
      />
    </div>
  );
}
