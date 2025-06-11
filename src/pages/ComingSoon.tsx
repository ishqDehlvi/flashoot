import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, ArrowRight, Gift, Check, ArrowLeft, Star } from "lucide-react";
import { toast } from "sonner";
import { Link } from "wouter";
import { Footer } from "@/components/Footer";

export default function ComingSoon() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [waitlistCount, setWaitlistCount] = useState(87);
  const [timeLeft, setTimeLeft] = useState({
    days: 90,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 90);

    const updateTimer = () => {
      const now = new Date().getTime();
      const difference = targetDate.getTime() - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    updateTimer();
    const timer = setInterval(updateTimer, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setWaitlistCount((prev) => prev + 1);

    toast.success("You're on the waitlist!", {
      description: (
        <div className="space-y-2">
          <p>You're one step closer to getting your free shoot!</p>
          <div className="flex items-center gap-2 text-primary">
            <Check className="w-4 h-4" />
            <span className="font-medium">
              Position secured: #{waitlistCount + 1}
            </span>
          </div>
        </div>
      ),
    });

    setIsSubmitting(false);
    setEmail("");
  };

  return (
    <div className="h-screen bg-background relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-primary/10 to-primary/5" />
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,#ff000030,#00000000)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,#ff000020,transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,#ff000020,transparent_50%)]" />
        </div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full md:w-[800px] h-[300px] md:h-[500px] bg-primary/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full md:w-[600px] h-[300px] md:h-[400px] bg-primary/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-30 mix-blend-overlay" />
      </div>

      {/* Back Button */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="absolute top-4 left-4 z-50"
      >
        <Link href="/">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group flex items-center gap-2 px-4 py-2 rounded-full bg-black/20 hover:bg-black/40 backdrop-blur-xl border border-white/10 transition-all duration-300"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back</span>
          </motion.button>
        </Link>
      </motion.div>

      {/* Main Content */}
      <main className="h-screen flex items-center justify-center px-4">
        <div className="max-w-6xl w-full mx-auto">
          <div className="grid lg:grid-cols-12 gap-6 lg:gap-12 items-stretch">
            {/* Left Column - Content */}
            <div className="lg:col-span-7 relative">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                {/* Badge */}
                <motion.div
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  className="relative inline-flex"
                >
                  <div className="relative flex items-center gap-2 px-4 py-2 rounded-full bg-black/40 border border-primary/20 backdrop-blur-xl">
                    <div className="p-1 rounded-full bg-primary/20">
                      <Star className="w-3.5 h-3.5 text-primary animate-pulse" />
                    </div>
                    <span className="text-sm font-medium">Launching Soon</span>
                  </div>
                </motion.div>

                {/* Title Section */}
                <div>
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight mb-4">
                    The Future of{" "}
                    <div className="relative inline-block">
                      <span className="gradient-text">Content</span>
                      <motion.span
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="absolute bottom-0 left-0 h-[6px] bg-gradient-to-r from-primary/50 to-transparent rounded-full blur-sm"
                      />
                    </div>
                    <span className="block mt-2">is Coming</span>
                  </h1>
                  <p className="text-lg text-gray-300/90 max-w-xl">
                    Experience the next generation of content creation. Join our
                    waitlist to be among the first to experience it.
                  </p>
                </div>

                {/* Timer */}
                <div className="grid grid-cols-4 gap-2">
                  {[
                    { value: timeLeft.days, label: "Days" },
                    { value: timeLeft.hours, label: "Hours" },
                    { value: timeLeft.minutes, label: "Minutes" },
                    { value: timeLeft.seconds, label: "Seconds" },
                  ].map(({ value, label }) => (
                    <motion.div
                      key={label}
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="group relative"
                    >
                      <div className="p-3 rounded-xl bg-black/40 backdrop-blur-xl border border-white/10 text-center">
                        <div className="text-xl sm:text-2xl font-bold gradient-text mb-0.5">
                          {value.toString().padStart(2, "0")}
                        </div>
                        <div className="text-xs text-gray-400 font-medium">
                          {label}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Features List */}
                <div className="grid grid-cols-2 gap-3">
                  {[
                    "Professional creators network",
                    "Seamless booking system",
                    "Exclusive launch pricing",
                    "Priority support",
                  ].map((feature, index) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-6 h-6 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center">
                        <Check className="w-3.5 h-3.5 text-primary" />
                      </div>
                      <span className="text-sm text-gray-300">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right Column - Form */}
            <div className="lg:col-span-5 relative flex">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="relative w-full flex"
              >
                <div className="absolute -inset-1.5 bg-gradient-to-r from-primary/30 via-primary/10 to-primary/30 rounded-2xl blur-2xl opacity-20" />
                <div className="relative w-full p-5 rounded-2xl bg-black/40 backdrop-blur-xl border border-white/10 flex flex-col">
                  {/* Promo Banner */}
                  <div className="bg-gradient-to-br from-primary/20 via-black/40 to-black/40 p-4 rounded-xl border border-primary/20">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-primary/20 backdrop-blur-sm border border-primary/30">
                        <Gift className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <div className="text-sm font-medium">
                          First 100 users get
                        </div>
                        <div className="text-xl font-bold text-primary">
                          One Free Shoot!
                        </div>
                        <div className="text-xs text-primary/80 mt-0.5">
                          {100 - waitlistCount} spots remaining
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Form */}
                  <div className="flex-1 flex flex-col justify-between space-y-4 mt-4">
                    <div>
                      <h3 className="text-lg font-bold">Join the Waitlist</h3>
                      <p className="text-xs text-gray-400 mt-1">
                        Be part of our exclusive launch and get early access to
                        all features.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-3">
                      <div className="relative group">
                        <div className="absolute -inset-px bg-gradient-to-r from-primary/50 via-primary/10 to-primary/50 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="relative flex items-center">
                          <Mail className="absolute left-4 w-5 h-5 text-gray-400 group-hover:text-primary transition-colors" />
                          <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            className="w-full h-14 pl-12 pr-4 rounded-xl bg-black/40 border border-white/10 focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all group-hover:border-primary/20"
                            required
                          />
                        </div>
                      </div>
                      <motion.button
                        type="submit"
                        disabled={isSubmitting}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="relative w-full group"
                      >
                        <div className="absolute -inset-px bg-gradient-to-r from-primary via-primary to-primary rounded-xl opacity-70 blur group-hover:opacity-100 transition-opacity" />
                        <div className="relative w-full h-14 rounded-xl bg-black flex items-center justify-center gap-2 font-medium">
                          {isSubmitting ? (
                            <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                          ) : (
                            <>
                              <span>Join Waitlist</span>
                              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </>
                          )}
                        </div>
                      </motion.button>
                    </form>

                    <div className="text-center text-xs text-gray-400">
                      <p>
                        By joining, you agree to our Terms of Service and
                        Privacy Policy
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </main>

      <div className="absolute bottom-0 left-0 right-0">
        <Footer />
      </div>
    </div>
  );
}
