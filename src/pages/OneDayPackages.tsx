import { motion } from "framer-motion";
import NavHeader from "../components/NavHeader";
import { Footer } from "../components/Footer";
import { FloatingNav } from "@/components/FloatingNav";
import { Check, Camera, Clock, Video, Star, Sparkles } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { useLocation } from "wouter";

const packages = [
  {
    name: "Basic Coverage",
    title: "3-Hour Package",
    price: "4,999",
    description:
      "Perfect for quick events and social media content creation that demands professional quality.",
    features: [
      "Upto 3 Hours",
      "2 Reels Provided",
      "Live Stories",
      "RAW Content",
      "Instant Reels and Delivery",
      "Well Trained Professionals",
    ],
    gradient: "from-primary/20 to-primary/10",
    popular: true,
  },
];

// Add proper type definition for the package
interface Package {
  name: string;
  title: string;
  price: string;
  description: string;
  features: string[];
  gradient: string;
  popular: boolean;
}

// Add type for PricingCard props
interface PricingCardProps extends Package {}

// Use the same HeroSection component structure but with updated content
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
              <Camera className="w-4 h-4 text-[#FE002A] relative z-10" />
              <div className="absolute inset-0 bg-[#FE002A]/20 blur-lg group-hover:blur-xl transition-all duration-300" />
            </div>
            <span className="text-sm bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent font-medium">
              Quick Event Coverage
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
              Professional Coverage
              <div className="relative inline-block mx-4">
                <span className="relative z-10 bg-gradient-to-r from-[#FE002A] to-[#B3001E] bg-clip-text text-transparent">
                  Made Simple
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
            High-quality event coverage with quick delivery for your special
            moments
          </motion.p>

          {/* Enhanced Features Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto mb-12">
            {[
              {
                icon: Clock,
                text: "3-Hour Coverage",
                color: "from-[#FE002A]/20 to-[#B3001E]/20",
              },
              {
                icon: Video,
                text: "Instant Delivery",
                color: "from-[#FE002A]/20 to-[#B3001E]/20",
              },
              {
                icon: Star,
                text: "Professional Team",
                color: "from-[#FE002A]/20 to-[#B3001E]/20",
              },
              {
                icon: Camera,
                text: "Quality Content",
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

const PricingCard = ({
  name,
  title,
  price,
  description,
  features,
  popular,
}: PricingCardProps) => {
  const [, navigate] = useLocation();
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative group"
    >
      <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-primary/10 rounded-3xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="relative rounded-3xl bg-black/40 backdrop-blur-xl border border-white/10 p-8">
        {popular && (
          <div className="absolute -top-4 right-4">
            <div className="bg-primary text-white text-sm px-3 py-1 rounded-full">
              Popular Choice
            </div>
          </div>
        )}

        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-bold mb-1">{name}</h3>
            <p className="text-gray-400">{title}</p>
          </div>

          <div className="flex items-baseline gap-1">
            <span className="text-4xl font-bold">₹{price}</span>
            <span className="text-gray-400 text-sm">+ GST</span>
          </div>

          <p className="text-gray-300">{description}</p>

          <div className="space-y-3">
            {features.map((feature: string, index: number) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                  <Check className="w-3 h-3 text-primary" />
                </div>
                <span className="text-gray-300">{feature}</span>
              </div>
            ))}
          </div>

          <button 
            onClick={() => navigate('/coming-soon')}
            className="gradient-button w-full px-6 py-3 rounded-xl"
          >
            Book Now
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const CTASection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
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
          packageType: "One Day",
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
        email: "",
        phone: "",
        eventType: "",
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
    <div className="max-w-7xl mx-auto px-4 py-20 relative">
      <div className="relative rounded-3xl overflow-hidden bg-black/40 backdrop-blur-xl border border-white/10">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-primary/5 to-transparent" />
        <div className="relative p-8 md:p-12">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/20">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">Quick Response Time</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              Need Coverage for a{" "}
              <span className="text-primary">Different Duration</span>?
            </h2>

            <p className="text-gray-400 text-lg">
              We can customize the package duration and deliverables according to
              your needs.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4 max-w-xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/50"
                  required
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/50"
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/50"
                  required
                />
                <input
                  type="text"
                  name="eventType"
                  value={formData.eventType}
                  onChange={handleChange}
                  placeholder="Event Type"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/50"
                  required
                />
              </div>
              <textarea
                name="eventDetails"
                value={formData.eventDetails}
                onChange={handleChange}
                placeholder="Tell us about your event requirements"
                rows={4}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/50"
                required
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-primary/80 font-semibold hover:opacity-90 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/20 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin mx-auto" />
                ) : (
                  "Get Custom Quote"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function OneDayPackages() {
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
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-20">
            {/* Left Content */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/20">
                  <Sparkles className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">Most Popular Choice</span>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                  Perfect for <span className="text-primary">Quick Events</span>
                </h2>

                <p className="text-gray-400 text-lg">
                  Our 3-hour package is designed for those who need professional coverage for shorter events, delivering high-quality content with quick turnaround.
                </p>
              </motion.div>

              {/* Features Grid */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  {
                    icon: Clock,
                    title: "Same Day Delivery",
                    description: "Get your content ready for social media within hours"
                  },
                  {
                    icon: Camera,
                    title: "Storytelling Focus",
                    description: "Capturing authentic moments that tell your story"
                  },
                  {
                    icon: Video,
                    title: "Multi-Format Content",
                    description: "Reels, stories, and high-res photos included"
                  },
                  {
                    icon: Star,
                    title: "Creative Direction",
                    description: "Expert guidance for perfect shots"
                  }
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="group relative"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative p-4 rounded-2xl bg-white/5 border border-white/10 group-hover:border-primary/20 transition-all duration-300">
                      <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center mb-3">
                        <feature.icon className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="font-semibold mb-1">{feature.title}</h3>
                      <p className="text-sm text-gray-400">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Replace What's Included with Why Choose Us */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="relative group"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-primary/10 rounded-3xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative p-8 rounded-3xl bg-black/40 backdrop-blur-xl border border-white/10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                      <Star className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">Why Choose Us?</h3>
                  </div>
                  
                  <div className="grid gap-6">
                    {[
                      {
                        title: "Authentic Storytelling",
                        description: "We focus on capturing genuine moments that reflect your event's true essence, not just staged photos.",
                        icon: Camera
                      },
                      {
                        title: "Social Media Ready",
                        description: "Content optimized for Instagram, Facebook, and other platforms with trending formats and styles.",
                        icon: Clock
                      },
                      {
                        title: "Creative Freedom",
                        description: "Full creative control over your content with no watermarks or branding restrictions.",
                        icon: Video
                      }
                    ].map((item, index) => (
                      <div key={index} className="flex gap-4">
                        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <item.icon className="w-4 h-4 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium mb-1">{item.title}</h4>
                          <p className="text-sm text-gray-400">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 pt-6 border-t border-white/10">
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <Check className="w-4 h-4 text-primary" />
                      <span>100% Satisfaction Guaranteed</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Content - Pricing Card */}
            <div className="lg:sticky lg:top-8">
              <PricingCard {...packages[0]} />
            </div>
          </section>
        </div>

        <CTASection />
      </main>

      <Footer />
      <FloatingNav />
    </div>
  );
}
