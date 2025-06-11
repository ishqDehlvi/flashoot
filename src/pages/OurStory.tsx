import { motion, useScroll, useTransform } from 'framer-motion';
import NavHeader from '@/components/NavHeader';
import { FloatingNav } from '@/components/FloatingNav';
import { Footer } from '@/components/Footer';
import { Sparkles, Camera, Users, Zap, Star, Heart, Clock } from 'lucide-react';

export default function OurStory() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.95]);

  return (
    <div className="min-h-screen bg-background relative">
      {/* Global Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Primary gradient layer */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-primary/5 to-transparent" />
        
        {/* Subtle radial gradients */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,#ff000015,#00000000)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,#ff000010,transparent_50%)]" />
        </div>
        
        {/* Noise texture */}
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay" />
      </div>

      <NavHeader />
      
      <main className="relative">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center relative">
          {/* Subtle background elements */}
          <div className="absolute inset-0 pointer-events-none">
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-primary/5 rounded-full blur-[100px]"
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.3, 0.4, 0.3],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              style={{ opacity, scale }}
              className="max-w-4xl mx-auto"
            >
              <div className="space-y-16">
                {/* Title Section */}
                <div className="space-y-8">
                  <div className="flex justify-center">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/40 backdrop-blur-sm border border-white/5"
                    >
                      <Sparkles className="w-4 h-4 text-primary" />
                      <span className="text-sm font-medium text-white/80">Our Journey</span>
                    </motion.div>
                  </div>

                  <div className="space-y-6">
                    <motion.h1
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                      className="text-5xl md:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight text-white"
                    >
                      The Story of{" "}
                      <span className="relative">
                        <span className="relative z-10 gradient-text">Flashoot</span>
                        <motion.div
                          initial={{ scale: 0.8, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ duration: 0.8, delay: 0.4 }}
                          className="absolute inset-0 bg-primary/10 blur-xl -z-10"
                        />
                      </span>
                    </motion.h1>
                    
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                      className="text-xl text-white/70 max-w-2xl leading-relaxed"
                    >
                      Making event reelmaking instant, accessible, and joyful for everyone
                    </motion.p>
                  </div>
                </div>

                {/* Decorative Line */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
                  className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
                />

                {/* Stats Grid */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
                  className="grid grid-cols-2 md:grid-cols-4 gap-6"
                >
                  {[
                    { value: "10k+", label: "Events Captured" },
                    { value: "500+", label: "Active Creators" },
                    { value: "50k+", label: "Photos Delivered" },
                    { value: "4.9/5", label: "Client Rating" }
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="p-6 rounded-xl bg-black/20 backdrop-blur-sm border border-white/5 hover:border-primary/20 transition-colors duration-300"
                    >
                      <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                      <div className="text-sm text-white/60">{stat.label}</div>
                    </div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* What is Flashoot Section */}
        <section className="py-32 relative">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-primary/20 to-primary/5 border border-primary/20 backdrop-blur-xl">
                  <Camera className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium text-white">What is Flashoot?</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold leading-tight text-white">
                  Capturing Moments, <span className="gradient-text">Instantly</span>
                </h2>
                <p className="text-xl text-gray-400 leading-relaxed">
                  Flashoot is a platform that makes capturing and sharing event memories seamless, instant, and joyful. Whether it's a birthday, college fest, pre-wedding shoot, or campus gig — we connect you with creators who capture your moments and deliver high-quality reels instantly, right to your phone.
                </p>
              </motion.div>
            </div>

            {/* Values Grid */}
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-8 rounded-2xl bg-black/40 backdrop-blur-xl border border-white/10 hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-6">
                  <Star className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">Quality First</h3>
                <p className="text-gray-400">We never compromise on the quality of memories we capture and deliver.</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="p-8 rounded-2xl bg-black/40 backdrop-blur-xl border border-white/10 hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-6">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">Creator Empowerment</h3>
                <p className="text-gray-400">We believe in empowering creators to showcase their talent and grow their portfolio.</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="p-8 rounded-2xl bg-black/40 backdrop-blur-xl border border-white/10 hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-6">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">Instant Delivery</h3>
                <p className="text-gray-400">We ensure your memories are delivered instantly, right to your phone.</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-32 relative">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div className="flex justify-center">
                  <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-primary/20 to-primary/5 border border-primary/20 backdrop-blur-xl">
                    <Users className="w-5 h-5 text-primary" />
                    <span className="text-sm font-medium text-white">Our Story</span>
                  </div>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold leading-tight text-center text-white">
                  The Journey That <span className="gradient-text">Shaped Us</span>
                </h2>
                <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
                  <p>
                    Flashoot started with a simple realization: amazing moments often go uncaptured or get lost in someone else's gallery. We believed reelmaking at events shouldn't be slow, expensive, or stuck in traditional formats.
                  </p>
                  <p>
                    So, we built Flashoot — a platform where anyone with a phone and creative eye can become a creator, and where hosts and guests receive their best moments instantly.
                  </p>
                  <p>
                    From college campuses to private parties.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-32 relative">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              {/* Mission Header */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center space-y-8 mb-20"
              >
                <div className="flex justify-center">
                  <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-primary/20 to-primary/5 border border-primary/20 backdrop-blur-xl">
                    <Zap className="w-5 h-5 text-primary" />
                    <span className="text-sm font-medium text-white">Our Mission</span>
                  </div>
                </div>
                
                <h2 className="text-4xl md:text-5xl font-bold leading-tight text-white">
                  Building the Future of{" "}
                  <span className="relative">
                    <span className="relative z-10 gradient-text">Content Creation</span>
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      className="absolute inset-0 bg-primary/10 blur-xl -z-10"
                    />
                  </span>
                </h2>
              </motion.div>

              {/* Mission Cards */}
              <div className="grid md:grid-cols-3 gap-8">
                {/* Card 1 - Creator Empowerment */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                  <div className="relative p-8 rounded-2xl bg-black/40 backdrop-blur-xl border border-white/10 group-hover:border-primary/30 transition-all duration-500 h-full flex flex-col">
                    <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                      <Users className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">Empower the Next Generation of Creators</h3>
                    <p className="text-white/70 leading-relaxed flex-grow">
                      Give young, smartphone-savvy individuals the tools and opportunities to earn, grow, and express themselves through event reelmaking.
                    </p>
                  </div>
                </motion.div>

                {/* Card 2 - Instant Memories */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                  <div className="relative p-8 rounded-2xl bg-black/40 backdrop-blur-xl border border-white/10 group-hover:border-primary/30 transition-all duration-500 h-full flex flex-col">
                    <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                      <Zap className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">Make Event Memories Instant & Accessible</h3>
                    <p className="text-white/70 leading-relaxed flex-grow">
                      Redefine how moments are captured and delivered — fast, seamless, and personalized, without the wait or complexity.
                    </p>
                  </div>
                </motion.div>

                {/* Card 3 - Social Era */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                  <div className="relative p-8 rounded-2xl bg-black/40 backdrop-blur-xl border border-white/10 group-hover:border-primary/30 transition-all duration-500 h-full flex flex-col">
                    <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                      <Camera className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">Reimagine Reelmaking for the Social Era</h3>
                    <p className="text-white/70 leading-relaxed flex-grow">
                      Build a new-age platform where reelmaking is real-time, community-driven, and as easy as sharing a story.
                    </p>
                  </div>
                </motion.div>
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