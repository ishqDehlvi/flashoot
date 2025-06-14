import { Users, ArrowRight, Camera, Clock, Sparkles, Instagram, Phone, MapPin, Mail, Quote, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import NavHeader from "../components/NavHeader";
import { Footer } from "../components/Footer";
import { FloatingNav } from "@/components/FloatingNav";
import { useState } from "react";
import { toast } from "sonner";
import { createClient } from '@supabase/supabase-js';
import { TracingBeam } from "@/components/ui/tracing-beam";
// import { TracingBeamNew } from "@/components/ui/tracing-beamNew";

const requirements = [
  {
    title: "iPhone 13 Pro or newer",
    description: "No DSLR. No fancy gear. Just your iPhone",
    icon: Phone
  },
  {
    title: "Strong Reel Knowledge",
    description: "Understanding of reels, editing, and trends",
    icon: Camera
  },
  {
    title: "Local Availability",
    description: "Ready to take up local shoots",
    icon: MapPin
  },
  {
    title: "Work Ethic",
    description: "Clean and punctual work ethic",
    icon: Clock
  },
  {
    title: "Instagram Profile",
    description: "Public profile or reel samples",
    icon: Instagram
  },
  {
    title: "Creativity",
    description: "Creative mindset and hunger to grow",
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
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    whatsappNumber: "",
    city: "",
    instagramProfile: "",
    iphoneModel: "",
    referralSource: "",
    motivation: ""
  });

  const faqs = [
    {
      question: "How much do I get paid per shoot?",
      answer: "You earn 70% of the booking. Most shoots range from ₹1,999–₹4,999."
    },
    {
      question: "I don't have experience. Can I still apply?",
      answer: "Yes. We train you on everything. Your creativity matters more."
    },
    {
      question: "Can I work only on weekends or evenings?",
      answer: "Yes. You choose when to accept bookings."
    },
    {
      question: "Is there any investment or fee?",
      answer: "None. You only need your iPhone. We handle training and gear."
    },
    {
      question: "Will I get support after onboarding?",
      answer: "Yes. Our support and operations team is always available."
    },
    {
      question: "Can I apply if I'm not in India?",
      answer: "Yes! We are live in the UAE, USA and expanding to more countries."
    }
  ];

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
            email: formData.email,
            whatsapp_number: formData.whatsappNumber,
            city: formData.city,
            instagram_profile: formData.instagramProfile,
            iphone_model: formData.iphoneModel,
            referral_source: formData.referralSource,
            motivation: formData.motivation
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
        email: "",
        whatsappNumber: "",
        city: "",
        instagramProfile: "",
        iphoneModel: "",
        referralSource: "",
        motivation: ""
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
                  <span className="text-sm font-medium">Join as a Flashooter</span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  <span className="block">Turn Your iPhone Into</span>
                  <span className="relative inline-block mt-1">
                    <span className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
                      an Income Machine
                    </span>
                    <span className="relative bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
                      an Income Machine
                    </span>
                  </span>
                </h1>
              </div>
            </div>
          </div>
        </section>

        {/* Who Are Flashooters Section */}
        <section id="who-are-flashooters" className="py-20 relative">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-6 hover:border-primary/50 transition-all duration-300">
                  <Camera className="w-3.5 h-3.5 text-primary" />
                  <span className="text-sm font-medium">Who Are Flashooters?</span>
                </div>
              </div>

              <p className="text-white text-lg leading-relaxed max-w-3xl mx-auto">
                Flashooters are trained iPhone creators who shoot, edit, and deliver professional Instagram reels in just 10 minutes. Whether you're a student, hustler, or creative explorer—Flashoot helps you earn through content creation using nothing but your phone. We're live across India, UAE, USA—and growing fast. Join our expanding network of creators worldwide.
              </p>
            </div>
          </div>
        </section>

        {/* Why Join Flashoot Section */}
        <section id="why-join" className="py-20 relative">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">Why Join Flashoot?</h2>
                <p className="text-gray-400 text-lg">Turn your iPhone into a creative business</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-primary/30 transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors duration-300">
                    <span className="text-2xl">📱</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                    Powered by Your iPhone
                  </h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    No DSLR. No fancy gear. Just your iPhone 13 Pro or newer.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-primary/30 transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors duration-300">
                    <span className="text-2xl">💸</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                    Earn Per Shoot
                  </h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    Get paid instantly for every shoot you complete.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-primary/30 transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors duration-300">
                    <span className="text-2xl">⏱️</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                    Super Flexible
                  </h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    Choose your own schedule. Work on weekends, evenings, or go full-time.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-primary/30 transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors duration-300">
                    <span className="text-2xl">🌍</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                    Global Exposure
                  </h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    Work with influencers, startups, cafes, events, and brands—locally and internationally.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-primary/30 transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors duration-300">
                    <span className="text-2xl">🎓</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                    Free Training & Certification
                  </h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    Learn everything from our team. No fees. Just skills, practice, and growth.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-primary/30 transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors duration-300">
                    <span className="text-2xl">🎖</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                    Flashooter Partner Kit
                  </h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    Get your official T-shirt, partner badge, and exclusive access to the Flashoot App.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-primary/30 transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors duration-300">
                    <span className="text-2xl">🧠</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                    Creative Community
                  </h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    Join a high-performance creator network. Share ideas. Get inspired. Grow together.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-primary/30 transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors duration-300">
                    <span className="text-2xl">📈</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                    Growth Path & Campaigns
                  </h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    Top performers get featured in paid brand shoots, international collabs, and more.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Who Can Apply Section */}
        <section id="who-can-apply" className="py-20 relative">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-6 hover:border-primary/50 transition-all duration-300">
                  <Sparkles className="w-3.5 h-3.5 text-primary" />
                  <span className="text-sm font-medium">Who Can Apply?</span>
                </div>
                <h2 className="text-4xl font-bold mb-4">Join Our Creator Network</h2>
                <p className="text-gray-400 text-lg">If you're creative and hungry to grow—you're in.</p>
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

              <div className="mt-12 text-center flex flex-col items-center gap-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-primary/10 text-primary font-medium">
                  <Sparkles className="w-4 h-4" />
                  <span>No degree or prior work experience needed</span>
                </div>
                
                <button
                  onClick={() => {
                    document.getElementById('apply')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary hover:bg-primary/90 transition-colors text-white font-medium group"
                >
                  <span>Apply Now to Become a Flashooter</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-20 relative">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-center mb-16"
              >
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-6 hover:border-primary/50 transition-all duration-300">
                  <ArrowRight className="w-3.5 h-3.5 text-primary" />
                  <span className="text-sm font-medium">How It Works</span>
                </div>
                <h2 className="text-4xl font-bold mb-4">Your Journey to Becoming a Flashooter</h2>
                <p className="text-gray-400 text-lg">Simple steps to start your creative journey</p>
              </motion.div>

              <TracingBeam className="px-6">
                <div className="space-y-8 relative">
                  {/* Step 1 */}
                  <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="relative group"
                  >
                    <div className="flex items-start gap-6 md:gap-8">
                      <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors duration-300 flex-shrink-0 relative z-20">
                        <span className="text-2xl font-bold text-primary">1</span>
                      </div>
                      <div className="flex-1 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 group-hover:border-primary/30 transition-all duration-300 relative z-10">
                        <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                          Apply
                        </h3>
                        <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                          Fill the form below with your details & reel samples
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Step 2 */}
                  <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="relative group"
                  >
                    <div className="flex items-start gap-6 md:gap-8">
                      <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors duration-300 flex-shrink-0 relative z-20">
                        <span className="text-2xl font-bold text-primary">2</span>
                      </div>
                      <div className="flex-1 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 group-hover:border-primary/30 transition-all duration-300 relative z-10">
                        <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                          Workshop
                        </h3>
                        <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                          Attend live orientation on Zoom or in-person
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Step 3 */}
                  <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="relative group"
                  >
                    <div className="flex items-start gap-6 md:gap-8">
                      <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors duration-300 flex-shrink-0 relative z-20">
                        <span className="text-2xl font-bold text-primary">3</span>
                      </div>
                      <div className="flex-1 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 group-hover:border-primary/30 transition-all duration-300 relative z-10">
                        <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                          Demo Shoots
                        </h3>
                        <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                          Complete 3–4 sample shoots with instant editing
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Step 4 */}
                  <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="relative group"
                  >
                    <div className="flex items-start gap-6 md:gap-8">
                      <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors duration-300 flex-shrink-0 relative z-20">
                        <span className="text-2xl font-bold text-primary">4</span>
                      </div>
                      <div className="flex-1 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 group-hover:border-primary/30 transition-all duration-300 relative z-10">
                        <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                          Get Rated
                        </h3>
                        <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                          Based on creativity, speed, professionalism
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Step 5 */}
                  <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="relative group"
                  >
                    <div className="flex items-start gap-6 md:gap-8">
                      <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors duration-300 flex-shrink-0 relative z-20">
                        <span className="text-2xl font-bold text-primary">5</span>
                      </div>
                      <div className="flex-1 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 group-hover:border-primary/30 transition-all duration-300 relative z-10">
                        <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                          Onboarded
                        </h3>
                        <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                          Get app access, partner kit, and start earning
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </TracingBeam>
            </div>
          </div>
        </section>

        {/* Who You'll Work With Section */}
        <section id="who-youll-work-with" className="py-20 relative">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-6 hover:border-primary/50 transition-all duration-300">
                  <Users className="w-3.5 h-3.5 text-primary" />
                  <span className="text-sm font-medium">Who You'll Work With</span>
                </div>
                <h2 className="text-4xl font-bold mb-4">Diverse Opportunities</h2>
                <p className="text-gray-400 text-lg">Connect with amazing clients and grow your portfolio</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-primary/30 transition-all duration-300 group">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors duration-300 flex-shrink-0">
                      <span className="text-2xl">📸</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold group-hover:text-primary transition-colors duration-300 mb-1">
                        Influencers & Solo Creators
                      </h3>
                      <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                        Work with content creators and build your network
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-primary/30 transition-all duration-300 group">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors duration-300 flex-shrink-0">
                      <span className="text-2xl">🛍</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold group-hover:text-primary transition-colors duration-300 mb-1">
                        Small Businesses & Startups
                      </h3>
                      <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                        Help growing businesses showcase their products
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-primary/30 transition-all duration-300 group">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors duration-300 flex-shrink-0">
                      <span className="text-2xl">🍽</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold group-hover:text-primary transition-colors duration-300 mb-1">
                        Restaurants, Cafes, Salons
                      </h3>
                      <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                        Capture the essence of local businesses
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-primary/30 transition-all duration-300 group">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors duration-300 flex-shrink-0">
                      <span className="text-2xl">🎓</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold group-hover:text-primary transition-colors duration-300 mb-1">
                        Colleges, Events, Communities
                      </h3>
                      <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                        Document special moments and gatherings
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-primary/30 transition-all duration-300 group md:col-span-2">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors duration-300 flex-shrink-0">
                      <span className="text-2xl">🌐</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold group-hover:text-primary transition-colors duration-300 mb-1">
                        Global Brand Campaigns
                      </h3>
                      <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                        Work with international brands and expand your reach
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Flashooter Success Stories Section */}
        <section id="success-stories" className="py-20 relative">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-6 hover:border-primary/50 transition-all duration-300">
                  <Sparkles className="w-3.5 h-3.5 text-primary" />
                  <span className="text-sm font-medium">Flashooter Success Stories</span>
                </div>
                <h2 className="text-4xl font-bold mb-4">Real Stories, Real Success</h2>
                <p className="text-gray-400 text-lg">See how Flashooters are turning their iPhones into income</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative bg-black/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-primary/30 transition-all duration-300 group">
                  <div className="absolute -top-4 left-6">
                    <div className="p-2 rounded-lg bg-primary/20 backdrop-blur-sm border border-primary/20">
                      <Quote className="w-5 h-5 text-primary" />
                    </div>
                  </div>

                  <div className="pt-4">
                    <p className="text-lg text-gray-300 mb-6 group-hover:text-white transition-colors duration-300">
                      "Started as a student, now making ₹25K+ every month part-time."
                    </p>

                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                        <span className="text-xl">👨‍🎓</span>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold group-hover:text-primary transition-colors duration-300">
                          Aarav
                        </h4>
                        <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                          Hyderabad
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative bg-black/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-primary/30 transition-all duration-300 group">
                  <div className="absolute -top-4 left-6">
                    <div className="p-2 rounded-lg bg-primary/20 backdrop-blur-sm border border-primary/20">
                      <Quote className="w-5 h-5 text-primary" />
                    </div>
                  </div>

                  <div className="pt-4">
                    <p className="text-lg text-gray-300 mb-6 group-hover:text-white transition-colors duration-300">
                      "Flashoot gave me freedom and high-paying gigs. All I needed was my iPhone."
                    </p>

                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                        <span className="text-xl">👩‍💼</span>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold group-hover:text-primary transition-colors duration-300">
                          Riya
                        </h4>
                        <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                          Dubai
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        

        {/* Application Form Section */}
        <section id="apply" className="py-20 relative">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Ready to Start?</h2>
                <p className="text-gray-400 text-lg mb-8">
                  Join the world's fastest-growing creator network. Shoot. Edit. Deliver. Earn. All through your iPhone.
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
                  <label className="block text-sm font-medium mb-2">Email ID</label>
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

                <div>
                  <label className="block text-sm font-medium mb-2">WhatsApp Number</label>
                  <div className="relative">
                    <input
                      type="tel"
                      required
                      value={formData.whatsappNumber}
                      onChange={(e) => setFormData({ ...formData, whatsappNumber: e.target.value })}
                      className="w-full px-4 py-3 pl-12 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 focus:border-primary/30 transition-all focus:ring-2 focus:ring-primary/20"
                      placeholder="Your WhatsApp number"
                    />
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">City & Area</label>
                  <div className="relative">
                    <input
                      type="text"
                      required
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full px-4 py-3 pl-12 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 focus:border-primary/30 transition-all focus:ring-2 focus:ring-primary/20"
                      placeholder="Your city and area"
                    />
                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Instagram Profile / Reel Samples</label>
                  <div className="relative">
                    <input
                      type="text"
                      required
                      value={formData.instagramProfile}
                      onChange={(e) => setFormData({ ...formData, instagramProfile: e.target.value })}
                      className="w-full px-4 py-3 pl-12 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 focus:border-primary/30 transition-all focus:ring-2 focus:ring-primary/20"
                      placeholder="Link to your Instagram profile or reel samples"
                    />
                    <Instagram className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Which iPhone do you use?</label>
                  <div className="relative">
                    <input
                      type="text"
                      required
                      value={formData.iphoneModel}
                      onChange={(e) => setFormData({ ...formData, iphoneModel: e.target.value })}
                      className="w-full px-4 py-3 pl-12 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 focus:border-primary/30 transition-all focus:ring-2 focus:ring-primary/20"
                      placeholder="Your iPhone model"
                    />
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">How did you hear about Flashoot?</label>
                  <div className="relative">
                    <input
                      type="text"
                      required
                      value={formData.referralSource}
                      onChange={(e) => setFormData({ ...formData, referralSource: e.target.value })}
                      className="w-full px-4 py-3 pl-12 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 focus:border-primary/30 transition-all focus:ring-2 focus:ring-primary/20"
                      placeholder="IG / Friend / Ad / Shoot"
                    />
                    <Users className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Why do you want to join?</label>
                  <div className="relative">
                    <textarea
                      required
                      value={formData.motivation}
                      onChange={(e) => setFormData({ ...formData, motivation: e.target.value })}
                      className="w-full px-4 py-3 pl-12 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 focus:border-primary/30 transition-all focus:ring-2 focus:ring-primary/20 h-32"
                      placeholder="Tell us in 1-2 lines why you want to join Flashoot"
                    />
                    <Sparkles className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                  </div>
                </div>

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
                        <span>📲 Apply Now to Become a Flashooter</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </div>
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-20 relative">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-center mb-16"
              >
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-6 hover:border-primary/50 transition-all duration-300">
                  <Sparkles className="w-3.5 h-3.5 text-primary" />
                  <span className="text-sm font-medium">Frequently Asked Questions</span>
                </div>
                <h2 className="text-4xl font-bold mb-4">Got Questions?</h2>
                <p className="text-gray-400 text-lg">Everything you need to know about becoming a Flashooter</p>
              </motion.div>

              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <button
                      onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                      className="w-full text-left group"
                    >
                      <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-primary/30 transition-all duration-300">
                        <div className="flex items-center justify-between gap-4">
                          <h3 className="text-lg font-semibold group-hover:text-primary transition-colors duration-300">
                            {faq.question}
                          </h3>
                          <ChevronDown 
                            className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                              openFaqIndex === index ? 'rotate-180 text-primary' : ''
                            }`} 
                          />
                        </div>
                        <motion.div
                          initial={false}
                          animate={{ 
                            height: openFaqIndex === index ? 'auto' : 0,
                            opacity: openFaqIndex === index ? 1 : 0,
                            marginTop: openFaqIndex === index ? 16 : 0
                          }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                            {faq.answer}
                          </p>
                        </motion.div>
                      </div>
                    </button>
                  </motion.div>
                ))}
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