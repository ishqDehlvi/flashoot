import { Users, ArrowRight, Camera, Clock, Sparkles, Instagram, Phone, MapPin, Mail } from "lucide-react";
import NavHeader from "../components/NavHeader";
import { Footer } from "../components/Footer";
import { FloatingNav } from "@/components/FloatingNav";
import { useState } from "react";
import { toast } from "sonner";
import { createClient } from '@supabase/supabase-js';

const requirements = [
  {
    title: "Latest iPhone models",
    description: "iPhone 13 or newer for optimal quality",
    icon: Phone
  },
  {
    title: "Experience",
    description: "Minimum 1 year of creative work",
    icon: Clock
  },
  {
    title: "Portfolio",
    description: "Strong showcase of your work",
    icon: Camera
  },
  {
    title: "Communication",
    description: "Excellent client interaction skills",
    icon: Users
  },
  {
    title: "Social Media",
    description: "Active presence on Instagram",
    icon: Instagram
  },
  {
    title: "Creativity",
    description: "Unique perspective and style",
    icon: Sparkles
  }
];

// Initialize Supabase client
const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

// API URL for the Express server
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

export default function Partner() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    iphoneModel: "",
    location: "",
    contactNumber: "",
    email: "",
    instagramId: "",
    recentWorks: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Insert into Supabase
      const { data, error } = await supabase
        .from('partners')
        .insert([
          {
            full_name: formData.fullName,
            iphone_model: formData.iphoneModel,
            location: formData.location,
            contact_number: formData.contactNumber,
            email: formData.email,
            instagram_id: formData.instagramId,
            recent_works: formData.recentWorks
          }
        ])
        .select()
        .single();

      if (error) throw error;

      // Send email notification through our Express server
      const emailResponse = await fetch(`${API_URL}/api/send-email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          formData,
          applicationId: data.id
        }),
      });

      if (!emailResponse.ok) {
        throw new Error('Failed to send email notification');
      }

      toast.success("Application submitted successfully! We'll review it and get back to you soon.");
      
      // Reset form
      setFormData({
        fullName: "",
        iphoneModel: "",
        location: "",
        contactNumber: "",
        email: "",
        instagramId: "",
        recentWorks: ""
      });
    } catch (error) {
      console.error('Error submitting application:', error);
      toast.error("Failed to submit application. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background relative">
      {/* Global Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-primary/10 to-primary/5" />
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,#ff000030,#00000000)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,#ff000020,transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,#ff000020,transparent_50%)]" />
        </div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full md:w-[800px] h-[300px] md:h-[500px] bg-primary/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full md:w-[600px] h-[300px] md:h-[400px] bg-primary/10 blur-[120px] rounded-full" />
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-30 mix-blend-overlay" />
      </div>

      <NavHeader />

      <main className="relative pt-20">
        {/* Hero Section */}
        <section id="hero" className="relative p-4 flex items-center overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-primary/5 to-transparent" />
            <div className="absolute left-1/2 top-1/3 -translate-x-1/2 w-[600px] h-[400px] bg-primary/20 blur-[120px] rounded-full" />
            <div className="absolute right-0 top-0 w-[300px] h-[300px] bg-pink-500/10 blur-[100px] rounded-full" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              {/* Main Content */}
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-6 hover:border-primary/50 transition-all duration-300">
                  <Sparkles className="w-3.5 h-3.5 text-primary" />
                  <span className="text-sm font-medium">Join the Future of Reel-Making</span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  <span className="block">Transform Your</span>
                  <span className="relative inline-block mt-1">
                    <span className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
                      iPhone
                    </span>
                    <span className="relative bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
                      iPhone
                    </span>
                  </span>
                  <span className="block mt-1">Into Your Success Story</span>
                </h1>

                <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
                  Join our elite network of iPhone photographers and videographers. Turn your passion into a thriving career with premium clients and projects.
                </p>

                {/* <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
                  <button className="group relative px-6 py-3 rounded-xl bg-primary text-white font-medium overflow-hidden hover:bg-primary/90 transition-colors">
                    <span className="relative z-10 flex items-center gap-2">
                      Start Your Journey
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </button>
                  <button className="px-6 py-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 text-white font-medium hover:bg-white/10 transition-colors">
                    Explore Opportunities
                  </button>
                </div> */}

                {/* Stats Grid */}
                {/* <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
                  <div className="p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-primary/30 transition-all duration-300">
                    <div className="text-2xl font-bold text-primary mb-1">500+</div>
                    <div className="text-sm text-gray-400">Active Creators</div>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-primary/30 transition-all duration-300">
                    <div className="text-2xl font-bold text-primary mb-1">10k+</div>
                    <div className="text-sm text-gray-400">Projects Completed</div>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-primary/30 transition-all duration-300">
                    <div className="text-2xl font-bold text-primary mb-1">4.9/5</div>
                    <div className="text-sm text-gray-400">Client Rating</div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </section>

        {/* Why Join Flashoot Section */}
        <section id="why-join" className="py-20 relative">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">Why Join Flashoot as a Creator?</h2>
                <p className="text-gray-400 text-lg">Turn your iPhone into a creative business</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-primary/30 transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors duration-300">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                    Shoot Events, Not Just Reels
                  </h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    Use your phone camera to shoot live events for real clients — from friends' birthdays to fashion pop-ups.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-primary/30 transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors duration-300">
                    <span className="text-2xl">💸</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                    Earn for Every Click
                  </h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    Get paid for the reels you take. We handle the delivery, you focus on capturing the vibe.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-primary/30 transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors duration-300">
                    <span className="text-2xl">🚀</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                    Build a Creative Portfolio
                  </h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    Grow your work profile as a freelance creator. Great for students, side-hustlers, or aspiring content pros.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-primary/30 transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors duration-300">
                    <span className="text-2xl">👥</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                    No Fancy Gear Needed
                  </h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    Your iPhone is enough. Just show up, shoot smart, and let Flashoot take care of the rest.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-primary/30 transition-all duration-300 group md:col-span-2">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors duration-300">
                    <span className="text-2xl">🌍</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                    Join a Community of Young Creators
                  </h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    Connect with a growing tribe of flashers who are turning weekend gigs into income and impact.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Requirements Section */}
        <section id="requirements" className="py-20 relative">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">Requirements</h2>
                <p className="text-gray-400 text-lg">What you need to join our network of iPhone creators</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {requirements.map((requirement, index) => {
                  const Icon = requirement.icon;
                  return (
                    <div
                      key={index}
                      className="group relative p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-primary/30 transition-all duration-300"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
                      <div className="relative flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors duration-300 flex-shrink-0">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold group-hover:text-primary transition-colors duration-300 mb-1">
                            {requirement.title}
                          </h3>
                          <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                            {requirement.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Application Form Section */}
        <section id="apply" className="py-20 relative">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Ready to Create and Get Paid?</h2>
                <p className="text-gray-400 text-lg mb-8">
                  Sign up now to become a Flashoot Partner and start taking gigs around you. Whether you're a student, hobbyist, or content junkie — your phone can now open the door to real opportunities.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Full Name</label>
                  <div className="relative">
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-4 py-3 pl-12 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 focus:border-primary/30 transition-all focus:ring-2 focus:ring-primary/20"
                      placeholder="Enter your full name"
                    />
                    <Users className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Current iPhone Model</label>
                  <div className="relative">
                    <input
                      type="text"
                      required
                      value={formData.iphoneModel}
                      onChange={(e) => setFormData({ ...formData, iphoneModel: e.target.value })}
                      className="w-full px-4 py-3 pl-12 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 focus:border-primary/30 transition-all focus:ring-2 focus:ring-primary/20"
                      placeholder="Minimum iPhone 13 Pro"
                    />
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Location</label>
                  <div className="relative">
                    <input
                      type="text"
                      required
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="w-full px-4 py-3 pl-12 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 focus:border-primary/30 transition-all focus:ring-2 focus:ring-primary/20"
                      placeholder="City you are based in"
                    />
                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Contact Number</label>
                  <div className="relative">
                    <input
                      type="tel"
                      required
                      value={formData.contactNumber}
                      onChange={(e) => setFormData({ ...formData, contactNumber: e.target.value })}
                      className="w-full px-4 py-3 pl-12 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 focus:border-primary/30 transition-all focus:ring-2 focus:ring-primary/20"
                      placeholder="Your contact number"
                    />
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">E-Mail ID</label>
                  <div className="relative">
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 pl-12 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 focus:border-primary/30 transition-all focus:ring-2 focus:ring-primary/20"
                      placeholder="Your email address"
                    />
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  </div>
                </div>

                {/* <div>
                  <label className="block text-sm font-medium mb-2">Instagram ID</label>
                  <div className="relative">
                    <input
                      type="text"
                      required
                      value={formData.instagramId}
                      onChange={(e) => setFormData({ ...formData, instagramId: e.target.value })}
                      className="w-full px-4 py-3 pl-12 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 focus:border-primary/30 transition-all focus:ring-2 focus:ring-primary/20"
                      placeholder="Your Instagram username"
                    />
                    <Instagram className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  </div>
                </div> */}

                {/* <div>
                  <label className="block text-sm font-medium mb-2">Your Recent Works</label>
                  <div className="relative">
                    <textarea
                      required
                      value={formData.recentWorks}
                      onChange={(e) => setFormData({ ...formData, recentWorks: e.target.value })}
                      className="w-full px-4 py-3 pl-12 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 focus:border-primary/30 transition-all focus:ring-2 focus:ring-primary/20 h-32"
                      placeholder="Share links to your recent photography/videography works"
                    />
                    <Camera className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                  </div>
                </div> */}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="relative w-full group"
                >
                  <div className="relative w-full h-14 rounded-xl bg-primary flex items-center justify-center gap-2 font-medium hover:bg-primary/90 transition-colors">
                    {isSubmitting ? (
                      <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        <span>📲 Join the Creator Network</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </div>
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingNav />
    </div>
  );
} 