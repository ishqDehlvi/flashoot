import { motion } from "framer-motion";
import NavHeader from "../components/NavHeader";
import { Footer } from "../components/Footer";
import { FloatingNav } from "@/components/FloatingNav";
import {
  Check,
  Camera,
  Clock,
  Sparkles,
  Phone,

  Calendar,
} from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { toast } from "sonner";

declare global {
  interface Window {
    google: typeof google;
  }
}

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden min-h-[70vh] flex items-center">
      {/* Background Effects */}
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

      <div className="relative max-w-7xl mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-8 group"
          >
            <div className="relative">
              <Camera className="w-4 h-4 text-[#FE002A] relative z-10" />
              <div className="absolute inset-0 bg-[#FE002A]/20 blur-lg group-hover:blur-xl transition-all duration-300" />
            </div>
            <span className="text-sm bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent font-medium">
              Book Reel-Makers™ Instantly
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold leading-tight mb-6"
          >
            Transform Your Vision into{" "}
            <span className="bg-gradient-to-r from-[#FE002A] to-[#B3001E] bg-clip-text text-transparent">
              Stunning Reels
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl text-gray-300 mb-12 leading-relaxed"
          >
            Connect with professional content creators and transform your vision
            into stunning reels.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors duration-300 h-full flex flex-col"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#FE002A]/20 flex items-center justify-center">
                  <Camera className="w-5 h-5 text-[#FE002A]" />
                </div>
                <h3 className="text-lg font-semibold">High-Quality Content</h3>
              </div>
              <p className="text-gray-400 flex-grow">
                Shot on Latest iPhones for cinematic-quality short videos with
                top-tier clarity and stabilisation.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors duration-300 h-full flex flex-col"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#FE002A]/20 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-[#FE002A]" />
                </div>
                <h3 className="text-lg font-semibold">Instant Delivery</h3>
              </div>
              <p className="text-gray-400 flex-grow">
                No waiting, no hassle! 24/7 Service – Because events don't wait!
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors duration-300 h-full flex flex-col"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#FE002A]/20 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-[#FE002A]" />
                </div>
                <h3 className="text-lg font-semibold">Professional Editing</h3>
              </div>
              <p className="text-gray-400 flex-grow">
                Expert editing to make your content stand out with perfect
                transitions and effects.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <Check className="w-4 h-4 text-[#FE002A]" />
              <span>100% Satisfaction Guaranteed</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <Check className="w-4 h-4 text-[#FE002A]" />
              <span>Professional Equipment</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <Check className="w-4 h-4 text-[#FE002A]" />
              <span>Quick Turnaround</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

const EnquiryForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    shootType: "",
    city: "",
    location: "",
    occasion: "",
    personalShootOccasion: "",
    date: "",
    time: "",
    hours: "",
    reels: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const locationInputRef = useRef<HTMLInputElement>(null);
  const autocompleteRef = useRef<google.maps.places.Autocomplete | null>(null);

  useEffect(() => {
    // Load Google Places API
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_GOOGLE_MAPS_API_KEY&libraries=places`;
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);

    script.onload = () => {
      if (locationInputRef.current) {
        autocompleteRef.current = new google.maps.places.Autocomplete(
          locationInputRef.current,
          {
            types: ["address"],
            componentRestrictions: { country: "in" },
          },
        );

        autocompleteRef.current.addListener("place_changed", () => {
          const place = autocompleteRef.current?.getPlace();
          if (place?.formatted_address) {
            setFormData((prev) => ({
              ...prev,
              location: place.formatted_address || "",
            }));
          }
        });
      }
    };

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch(
        'https://api.cohesyn.in/api/email/inquiry-form',
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            fullName: formData.name,
            phoneNumber: formData.phone,
            email: formData.email,
            occasion: formData.occasion,
            city: formData.city,
            date: formData.date
          }),
        },
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to submit enquiry');
      }

      toast.success("Enquiry submitted successfully!");
      // Reset form after successful submission
      setFormData({
        name: "",
        phone: "",
        email: "",
        shootType: "",
        city: "",
        location: "",
        occasion: "",
        personalShootOccasion: "",
        date: "",
        time: "",
        hours: "",
        reels: "",
      });
    } catch (error) {
      console.error("Error submitting enquiry:", error);
      toast.error("An error occurred while submitting the enquiry");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="relative"
      >
        <div className="absolute -inset-4 bg-gradient-to-r from-[#FE002A]/20 to-[#B3001E]/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="relative p-8 rounded-3xl bg-black/40 backdrop-blur-xl border border-white/10">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <label className="block text-sm font-medium text-gray-300">
                Full Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-[#FE002A]/50 focus:ring-1 focus:ring-[#FE002A]/50 transition-colors duration-300 outline-none text-white"
                required
              />
            </div>

            <div className="space-y-4">
              <label className="block text-sm font-medium text-gray-300">
                Contact Number *
              </label>
              <div className="relative">
                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-[#FE002A]/50 focus:ring-1 focus:ring-[#FE002A]/50 transition-colors duration-300 outline-none text-white"
                  required
                />
              </div>
            </div>

            <div className="space-y-4">
              <label className="block text-sm font-medium text-gray-300">
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-[#FE002A]/50 focus:ring-1 focus:ring-[#FE002A]/50 transition-colors duration-300 outline-none text-white"
                required
              />
            </div>

            {/* <div className="space-y-4">
              <label className="block text-sm font-medium text-gray-300">
                Type of Shoot *
              </label>
              <select
                name="shootType"
                value={formData.shootType}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-[#FE002A]/50 focus:ring-1 focus:ring-[#FE002A]/50 transition-colors duration-300 outline-none text-white"
                required
              >
                <option value="">Select type</option>
                <option value="brand">Brand Shoot</option>
                <option value="personal">Personal Shoot</option>
              </select>
            </div> */}

            <div className="space-y-4">
              <label className="block text-sm font-medium text-gray-300">
                Occasion *
              </label>
              <select
                name="occasion"
                value={formData.occasion}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-[#FE002A]/50 focus:ring-1 focus:ring-[#FE002A]/50 transition-colors duration-300 outline-none text-white"
                required
              >
                <option value="">Select occasion</option>
                <option value="Birthday">Birthday</option>
                <option value="Wedding">Wedding</option>
                <option value="Brand Shoot">Brand Shoot</option>
                <option value="Personal Shoot">Personal Shoot</option>
              </select>
            </div>

            {formData.occasion === "Personal Shoot" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-4"
              >
                <label className="block text-sm font-medium text-gray-300">
                  What is the occasion for your personal shoot? *
                </label>
                <input
                  type="text"
                  name="personalShootOccasion"
                  value={formData.personalShootOccasion}
                  onChange={(e) => {
                    const { name, value } = e.target;
                    setFormData((prev) => ({ ...prev, [name]: value }));
                  }}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-[#FE002A]/50 focus:ring-1 focus:ring-[#FE002A]/50 transition-colors duration-300 outline-none text-white"
                  placeholder="e.g., Birthday, Anniversary, Graduation, etc."
                  required
                />
              </motion.div>
            )}

            <div className="space-y-4">
              <label className="block text-sm font-medium text-gray-300">
                City *
              </label>
              <select
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-[#FE002A]/50 focus:ring-1 focus:ring-[#FE002A]/50 transition-colors duration-300 outline-none text-white"
                required
              >
                <option value="">Select city</option>
                <option value="Hyderabad, India">Hyderabad, India</option>
                <option value="Vijaywada, India">Vijaywada, India</option>
                <option value="Warangal, India">Warangal, India</option>
                <option value="Vizag, India">Vizag, India</option>
                <option value="Bangalore, India">Bangalore, India</option>
              </select>
            </div>

            {/* <div className="space-y-4">
              <label className="block text-sm font-medium text-gray-300">
                Event Location (Full address) *
              </label>
              <div className="relative">
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  ref={locationInputRef}
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-[#FE002A]/50 focus:ring-1 focus:ring-[#FE002A]/50 transition-colors duration-300 outline-none text-white"
                  placeholder="Search location or click below to use current location"
                  required
                />
              </div>
              <button
                type="button"
                onClick={handleCurrentLocation}
                className="mt-2 px-4 py-2 text-sm rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors duration-300 flex items-center gap-2"
              >
                <MapPin className="w-4 h-4" />
                Use Current Location
              </button>
            </div> */}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <label className="block text-sm font-medium text-gray-300">
                  Date of the occasion *
                </label>
                <div className="relative">
                  <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-[#FE002A]/50 focus:ring-1 focus:ring-[#FE002A]/50 transition-colors duration-300 outline-none text-white"
                    required
                  />
                </div>
              </div>

              {/* <div className="space-y-4">
                <label className="block text-sm font-medium text-gray-300">
                  Timings of the event *
                </label>
                <div className="relative">
                  <ClockIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-[#FE002A]/50 focus:ring-1 focus:ring-[#FE002A]/50 transition-colors duration-300 outline-none text-white"
                    required
                  />
                </div>
              </div> */}
            </div>

            {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <label className="block text-sm font-medium text-gray-300">
                  How many hours of shoot do you need? *
                </label>
                <input
                  type="number"
                  name="hours"
                  value={formData.hours}
                  onChange={handleChange}
                  min="1"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-[#FE002A]/50 focus:ring-1 focus:ring-[#FE002A]/50 transition-colors duration-300 outline-none text-white"
                  required
                />
              </div>

              <div className="space-y-4">
                <label className="block text-sm font-medium text-gray-300">
                  No of reels required *
                </label>
                <input
                  type="number"
                  name="reels"
                  value={formData.reels}
                  onChange={handleChange}
                  min="1"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-[#FE002A]/50 focus:ring-1 focus:ring-[#FE002A]/50 transition-colors duration-300 outline-none text-white"
                  required
                />
              </div>
            </div> */}

            <div className="pt-6">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 rounded-xl bg-gradient-to-r from-[#FE002A] to-[#B3001E] text-white font-medium hover:opacity-90 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                    Submitting...
                  </>
                ) : (
                  "Submit Enquiry"
                )}
              </button>
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default function Enquiry() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="fixed inset-0 bg-gradient-to-b from-black via-black to-primary/5" />
      <NavHeader />
      <HeroSection />
      <EnquiryForm />
      <Footer />
      <FloatingNav />
    </div>
  );
}
