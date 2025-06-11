import { motion } from 'framer-motion';
import NavHeader from '../components/NavHeader';
import { Footer } from '../components/Footer';
import { FloatingNav } from '@/components/FloatingNav';
import { Check, Building2, Clock, Video, Star, Sparkles, Mail, Phone } from 'lucide-react';
import { useState } from "react";
import { toast } from "sonner";
import { useLocation } from "wouter";

const packages = [
  {
    name: "One Day Booking",
    title: "One-Time Coverage",
    price: "9,999",
    description: "Perfect for businesses looking for high-quality coverage of individual events or campaigns.",
    features: [
      "2-3 Reels Provided",
      "Upto 7 Hours",
      "Live Stories",
      "RAW Content upon request",
      "Instant Reels and Delivery"
    ],
    gradient: "from-blue-500/20 to-purple-500/20"
  },
  {
    name: "Monthly",
    title: "Comprehensive Coverage",
    price: "39,999",
    description: "For comprehensive coverage, our Monthly Package captures the entirety of your event, from start to finish, delivering a complete visual narrative that reflects your brand's excellence.",
    features: [
      "10 Reels Provided",
      "Live Stories",
      "BTS Videos",
      "Interaction Videos",
      "RAW Content upon request",
      "Interview Videos",
      "Content Conceptualisation"
    ],
    popular: true,
    gradient: "from-primary/20 to-primary/10"
  }
];

const HeroSection = () => {
  const [, navigate] = useLocation();
  
  return (
    <div className="relative overflow-hidden min-h-screen flex items-center">
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
              <Building2 className="w-4 h-4 text-[#FE002A] relative z-10" />
              <div className="absolute inset-0 bg-[#FE002A]/20 blur-lg group-hover:blur-xl transition-all duration-300" />
            </div>
            <span className="text-sm bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent font-medium">
              Corporate Event Coverage
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
              Elevate Your Brand
              <div className="relative inline-block mx-4">
                <span className="relative z-10 bg-gradient-to-r from-[#FE002A] to-[#B3001E] bg-clip-text text-transparent">
                  Story
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
            Professional corporate event coverage that showcases your brand's excellence
          </motion.p>

          {/* Enhanced Features Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto mb-12">
            {[
              {
                icon: Video,
                text: "Premium Content",
                color: "from-[#FE002A]/20 to-[#B3001E]/20"
              },
              {
                icon: Clock,
                text: "Quick Delivery",
                color: "from-[#FE002A]/20 to-[#B3001E]/20"
              },
              {
                icon: Star,
                text: "Brand Focus",
                color: "from-[#FE002A]/20 to-[#B3001E]/20"
              },
              {
                icon: Sparkles,
                text: "Professional Edit",
                color: "from-[#FE002A]/20 to-[#B3001E]/20"
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
                <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
                  style={{ background: `linear-gradient(to right, ${feature.color})` }}
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
          <motion.div
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
              Book Now
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => navigate('/contact')}
              className="px-8 py-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 font-medium text-lg hover:bg-white/10 hover:border-[#FE002A]/30 transition-all duration-300"
            >
              Learn More
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

// Use the same PricingCard component from WeddingPackages.tsx
const PricingCard = ({ name, title, price, description, features, gradient, popular }: any) => {
  const [, navigate] = useLocation();
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="relative group h-full"
    >
      <div className={`relative rounded-3xl overflow-hidden bg-black/40 backdrop-blur-xl border border-white/10 h-full p-8 flex flex-col ${
        popular ? 'border-primary/50 shadow-lg shadow-primary/20' : ''
      }`}>
        {popular && (
          <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium bg-primary/20 border border-primary/30 text-primary">
            Most Popular
          </div>
        )}

        <div className="mb-6">
          <div className={`w-12 h-12 rounded-2xl bg-gradient-to-r ${gradient} flex items-center justify-center mb-4`}>
            <Star className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-2xl font-bold mb-2">{name}</h3>
          <p className="text-sm text-gray-400 mb-4">{title}</p>
          <div className="flex items-baseline gap-1">
            <span className="text-4xl font-bold">₹{price}</span>
            <span className="text-gray-400 text-sm">+ GST</span>
          </div>
        </div>

        <p className="text-sm text-gray-400 mb-6 min-h-[48px]">
          {description}
        </p>

        <div className="space-y-3 mb-8 flex-grow">
          {features.map((feature: string, index: number) => (
            <div key={index} className="flex items-start gap-2 text-sm">
              <div className={`mt-1 w-4 h-4 rounded-full bg-gradient-to-r ${gradient} flex items-center justify-center flex-shrink-0`}>
                <Check className="w-3 h-3 text-white" />
              </div>
              <span className="text-gray-300">{feature}</span>
            </div>
          ))}
        </div>

        <button 
          onClick={() => navigate('/coming-soon')}
          className="gradient-button w-full px-6 py-3 rounded-xl mt-auto"
        >
          Book Now
        </button>
      </div>
    </motion.div>
  );
};

// Add this component after your existing components
const CTASection = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
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
          packageType: "Corporate",
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to submit inquiry");
      }

      toast.success("Inquiry submitted successfully!", {
        description: "We'll get back to you with a custom quote soon.",
      });

      // Reset form
      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        eventDetails: "",
      });
    } catch (error) {
      toast.error("Failed to submit inquiry", {
        description: "Please try again later.",
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
    <div className="relative overflow-hidden py-20">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
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
      
      <div className="relative max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl overflow-hidden bg-black/40 backdrop-blur-xl border border-white/10 p-8 md:p-12"
        >
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/20">
                  <Sparkles className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">Custom Solutions Available</span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                  Let's Create Your <span className="text-primary">Perfect Package</span>
                </h2>
                
                <p className="text-gray-400 text-lg">
                  Tell us about your event, and we'll tailor a solution that perfectly matches your requirements.
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { number: "2 Hours", label: "Delivery Time" },
                  { number: "24/7", label: "Support" },
                  { number: "99%", label: "Satisfaction" },
                  { number: "100+", label: "Happy Clients" },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center group hover:bg-white/10 transition-colors duration-300"
                  >
                    <div className="text-xl font-bold text-primary mb-1 group-hover:scale-105 transition-transform duration-300">{stat.number}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right Content - Contact Form */}
            <div className="space-y-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm text-gray-400">Name</label>
                    <input 
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-colors duration-300 outline-none text-white"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-gray-400">Company</label>
                    <input 
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-colors duration-300 outline-none text-white"
                      placeholder="Company name"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm text-gray-400">Email</label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input 
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-colors duration-300 outline-none text-white"
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-gray-400">Phone</label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input 
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-colors duration-300 outline-none text-white"
                        placeholder="Your phone"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm text-gray-400">Event Details</label>
                  <textarea 
                    name="eventDetails"
                    value={formData.eventDetails}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-colors duration-300 outline-none text-white h-32 resize-none"
                    placeholder="Tell us about your event..."
                    required
                  />
                </div>

                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="gradient-button w-full px-6 py-3 rounded-xl flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      Send Request
                      <Sparkles className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

// Update your main component to include the CTA section
export default function CorporatePackages() {
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
          <section className="grid grid-cols-1 md:grid-cols-2 gap-6 auto-rows-fr mb-20">
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