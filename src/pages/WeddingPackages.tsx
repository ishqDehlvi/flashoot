import { motion } from "framer-motion";
import NavHeader from "../components/NavHeader";
import { Footer } from "../components/Footer";
import { FloatingNav } from "@/components/FloatingNav";
import { Heart, Camera, Clock, Star, Sparkles } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { useLocation } from "wouter";

const packages = [
  {
    name: "Basic",
    title: "Single Event",
    price: "14,999",
    description:
      "Perfect for couples looking for a stunning, professionally crafted wedding shoot that won't break the bank.",
    features: [
      "Covers One  Event",
      "Include 3 Reels, Shot on iPhone",
      "RAW Content provided upon request",
      "Instant Reel Delivery",
      "Flashoot Logo Mandatory",
    ],
  },
  {
    name: "Silver",
    title: "Three Events",
    price: "44,999",
    description:
      "Perfect for those who want comprehensive coverage with an extra touch of elegance.",
    features: [
      "3 Events Covered",
      "10 Reels Included, shot on iPhone",
      "RAW Content provided upon request",
      "Instant Reel Delivery",
      "Flashoot Logo Mandatory",
    ],
  },
  {
    name: "Gold",
    title: "Four Events",
    price: "59,999",
    description:
      "Perfect for those who want comprehensive coverage with an extra touch of elegance.",
    features: [
      "4 Events Covered",
      "15 Reels Included, shot on iPhone",
      "RAW Content provided upon request",
      "Instant Reel Delivery",
      "Complimentary 50 Photos",
      "Flashoot Logo Mandatory",
    ],
    popular: true,
  },
  {
    name: "Platinum",
    title: "Complete Wedding",
    price: "99,999",
    description:
      "For couples who want it all—every moment captured with unmatched attention to detail.",
    features: [
      "6 Events Covered",
      "25 Reels Included, shot on iPhone",
      "RAW Content provided upon request",
      "Instant Reel Delivery",
      "Complimentary 100 Photos",
      "Flashoot Logo Mandatory",
    ],
  },
];

const HeroSection = () => {
  const [, navigate] = useLocation();
  
  return (
    <div className="relative overflow-hidden  flex items-center">
      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto"
        >
          {/* Enhanced Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-8 group cursor-pointer"
          >
            <div className="relative">
              <Heart className="w-4 h-4 text-[#FE002A] relative z-10" />
              <div className="absolute inset-0 bg-[#FE002A]/20 blur-lg group-hover:blur-xl transition-all duration-300" />
            </div>
            <span className="text-sm bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent font-medium">
              Wedding Reel Packages
            </span>
          </motion.div>

          {/* Enhanced Heading with Animated Gradient */}
          <div className="relative mb-8">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-7xl font-bold leading-tight"
            >
              Capture Your Wedding
              <div className="relative inline-block mx-4">
                <span className="relative z-10 bg-gradient-to-r from-[#FE002A] to-[#B3001E] bg-clip-text text-transparent">
                  Memories
                </span>
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="absolute -bottom-2 left-0 h-3 bg-[#FE002A]/10 -skew-x-6 w-full"
                />
              </div>
            </motion.h1>
          </div>

          {/* Enhanced Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl text-gray-300 mb-12 leading-relaxed max-w-2xl mx-auto"
          >
            Professional wedding reel services to preserve your special moments
            forever
          </motion.p>

          {/* Enhanced Features Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto mb-">
            {[
              {
                icon: Camera,
                text: "Professional Team",
                color: "from-[#FE002A]/20 to-[#B3001E]/20",
              },
              {
                icon: Clock,
                text: "Same Day Edits",
                color: "from-[#FE002A]/20 to-[#B3001E]/20",
              },
              {
                icon: Star,
                text: "Premium Quality",
                color: "from-[#FE002A]/20 to-[#B3001E]/20",
              },
              {
                icon: Heart,
                text: "Candid Moments",
                color: "from-[#FE002A]/20 to-[#B3001E]/20",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="group relative"
              >
                {/* Enhanced Hover Glow Effect */}
                <div
                  className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
                  style={{
                    background: `linear-gradient(to right, ${feature.color})`,
                  }}
                />

                {/* Enhanced Card Content */}
                <div className="relative h-32 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 group-hover:border-[#FE002A]/30 transition-all duration-300 p-6 flex flex-col items-center justify-center gap-3">
                  <div className="relative">
                    <div className="absolute inset-0 bg-[#FE002A]/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-300" />
                    <div className="relative w-12 h-12 rounded-xl bg-gradient-to-r from-[#FE002A]/20 to-[#B3001E]/20 border border-[#FE002A]/20 flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-[#FE002A] group-hover:scale-110 transition-transform duration-300" />
                    </div>
                  </div>
                  <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-300">
                    {feature.text}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Enhanced Call to Action */}
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex items-center justify-center gap-6 flex-wrap"
          >
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => navigate('/coming-soon')}
              className="px-8 py-4 rounded-xl text-lg font-medium bg-gradient-to-br from-[#FE002A] via-[#FE002A] to-[#B3001E] hover:from-[#FE002A]/95 hover:via-[#FE002A]/95 hover:to-[#B3001E]/95 transition-all shadow-[0_2px_12px_-3px_rgba(254,0,42,0.4)]"
            >
              Enquire Now
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => navigate('/contact')}
              className="px-8 py-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 font-medium text-lg hover:bg-white/10 hover:border-[#FE002A]/30 transition-all duration-300"
            >
              Learn More
            </motion.button>
          </motion.div> */}
        </motion.div>
      </div>
    </div>
  );
};

const PricingCard = ({
  name,
  title,
  price,
  description,
  features,
  popular,
}: any) => {
  const [, navigate] = useLocation();
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="relative overflow-hidden rounded-2xl h-full"
    >
      <motion.div className="relative overflow-hidden rounded-2xl bg-black/40 backdrop-blur-xl border border-white/10 h-full flex flex-col">
        {/* Enhanced gradient background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent opacity-50" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,#ff000015,transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,#ff000015,transparent_50%)]" />
        </div>

        <div className="relative p-6 flex flex-col h-full">
          {/* Popular Badge */}
          {popular && (
            <div className="absolute top-3 right-3 px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/20 border border-primary/30 text-primary">
              Most Popular
            </div>
          )}

          {/* Header Section */}
          <div>
            <h2 className="text-xs uppercase tracking-[0.2em] text-primary mb-2 font-medium">
              {title}
            </h2>
            <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              {name}
            </h3>
            <p className="text-gray-400 text-sm mb-4 min-h-[3rem]">{description}</p>

            {/* Price Section */}
            <div className="relative mb-6 w-full">
              <div className="absolute -inset-3 bg-primary/5 blur-xl rounded-full"></div>
              <div className="relative flex items-baseline gap-1">
                <span className="text-3xl font-bold text-primary">₹{price}</span>
                <span className="text-gray-400 text-sm">+ GST</span>
              </div>
            </div>
          </div>

          {/* Features List */}
          <div className="flex-grow">
            <h4 className="text-sm font-semibold text-white/90 mb-3">Package Inclusions:</h4>
            <div className="space-y-2.5 mb-6">
              {features.map((feature: string, index: number) => (
                <div key={index} className="flex items-start gap-2 group">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-1 h-1 rounded-full bg-primary group-hover:scale-125 transition-transform duration-300" />
                  </div>
                  <span className="text-sm text-gray-300 group-hover:text-white transition-colors duration-300">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Book Now Button */}
          <div className="mt-auto">
            <button
              onClick={() => navigate('/coming-soon')}
              className="w-full px-4 py-2.5 rounded-xl text-sm font-medium bg-gradient-to-br from-[#FE002A] via-[#FE002A] to-[#B3001E] hover:from-[#FE002A]/95 hover:via-[#FE002A]/95 hover:to-[#B3001E]/95 transition-all shadow-[0_2px_12px_-3px_rgba(254,0,42,0.4)]"
            >
              <span className="relative flex items-center justify-center gap-1.5">
                Enquire Now
                <svg 
                  className="w-4 h-4" 
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
    </motion.div>
  );
};

const CTASection = () => {
  const [, navigate] = useLocation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    weddingDate: "",
    eventDetails: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/package-inquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          packageType: "Wedding",
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to submit inquiry");
      }

      // Show success message
      toast.success("Thank you for your inquiry!", {
        description: "We'll get back to you within 24 hours.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        weddingDate: "",
        eventDetails: "",
      });
    } catch (error) {
      // Show error message
      toast.error("Failed to submit inquiry", {
        description: error instanceof Error ? error.message : "Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-20 relative">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_50%,#ff000010,transparent)]" />
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_50%,#00000050,transparent)]" />
      </div>

      <div className="relative rounded-[2.5rem] overflow-hidden backdrop-blur-xl border border-white/10">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/80" />

        {/* Decorative patterns */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
        </div>

        <div className="relative p-8 md:p-12">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            {/* Enhanced badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-gradient-to-r from-primary/20 to-primary/10 border border-primary/20 backdrop-blur-sm"
            >
              <Sparkles className="w-5 h-5 text-primary animate-pulse" />
              <span className="text-sm font-medium bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Let's Create Something Special
              </span>
            </motion.div>

            {/* Enhanced heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="space-y-4"
            >
              <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                Need a <span className="text-primary">Custom Package</span> for
                Your
                <span className="relative mx-3">
                  <span className="relative z-10">Wedding?</span>
                  <div className="absolute -bottom-2 left-0 right-0 h-3 bg-primary/10 -skew-x-6"></div>
                </span>
              </h2>

              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Tell us about your dream wedding, and we'll create a perfect reel
                package just for you.
              </p>
            </motion.div>

            {/* Enhanced form */}
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              onSubmit={handleSubmit}
              className="space-y-6 max-w-xl mx-auto"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { name: "name", placeholder: "Your Name", type: "text", icon: "👤" },
                  { name: "email", placeholder: "Email Address", type: "email", icon: "📧" },
                  { name: "phone", placeholder: "Phone Number", type: "tel", icon: "📱" },
                  { name: "weddingDate", placeholder: "Preferred Date", type: "text", icon: "📅" },
                ].map((input, index) => (
                  <div key={index} className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative flex items-center">
                      <span className="absolute left-4">{input.icon}</span>
                      <input
                        type={input.type}
                        name={input.name}
                        value={formData[input.name as keyof typeof formData]}
                        onChange={handleChange}
                        placeholder={input.placeholder}
                        className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all duration-300"
                        required
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <textarea
                  name="eventDetails"
                  value={formData.eventDetails}
                  onChange={handleChange}
                  placeholder="Tell us about your wedding vision and requirements..."
                  rows={4}
                  className="relative w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all duration-300"
                  required
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => navigate('/coming-soon')}
                type="submit"
                disabled={isSubmitting}
                className="relative w-full px-8 py-4 rounded-xl overflow-hidden group/button"
              >
                {/* Button background */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#FE002A] via-[#FE002A] to-[#B3001E] opacity-80 group-hover/button:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" />

                {/* Animated shine effect */}
                <div className="absolute inset-0 translate-x-[-100%] group-hover/button:translate-x-[100%] transition-transform duration-1000">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform rotate-45" />
                </div>

                {/* Button text */}
                <span className="relative text-white font-medium">
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin mx-auto" />
                  ) : (
                    "Get Your Custom Quote"
                  )}
                </span>
              </motion.button>
            </motion.form>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="pt-8 flex flex-wrap justify-center gap-8 text-sm text-gray-400"
            >
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary" />
                <span>24hr Response Time</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="w-4 h-4 text-primary" />
                <span>100% Satisfaction Guaranteed</span>
              </div>
              <div className="flex items-center gap-2">
                <Camera className="w-4 h-4 text-primary" />
                <span>Shot on iPhone</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function WeddingPackages() {
  return (
    <div className="min-h-screen bg-background relative">
      {/* Global Background Effects - Matching homepage */}
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

      <main className="relative">
        <HeroSection />

        <div className="max-w-7xl mx-auto px-4">
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
            {packages.map((pkg) => (
              <PricingCard key={pkg.name} {...pkg} />
            ))}
          </section>
        </div>

        <CTASection />
      </main>

      <Footer />
      <FloatingNav />
    </div>
  );
}
