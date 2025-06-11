import React, { useState } from "react";
import { Mail, ArrowRight, Star, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { SparklesCore } from "@/components/ui/aceternity";
import { toast } from "sonner";
// import { supabase } from "@/lib/supabase";

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  // const [setMessage] = useState('');
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted with email:", email);
    setStatus("loading");

    try {
      // const { error } = await supabase.from("newsletter_subscribers").insert([
      //   {
      //     email,
      //     metadata: {
      //       source: "website",
      //       campaign: "50_percent_off",
      //       timestamp: new Date().toISOString(),
      //     },
      //   },
      // ]);

      // if (error) {
      //   if (error.code === "23505") {
      //     // Unique violation
      //     throw new Error("This email is already subscribed to our newsletter");
      //   }
      //   throw error;
      // }

      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/flashoot/send-newsletter-email`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        },
      );

      if (!response.ok) {
        throw new Error("Failed to send newsletter email");
      }

      setStatus("success");
      setEmail("");
      toast.success("Successfully subscribed!", {
        description:
          "Thank you for subscribing to our newsletter. You will receive a confirmation email shortly.",
      });
    } catch (error: any) {
      console.error("Subscription error:", error);
      setStatus("error");

      // Handle specific error messages
      const errorMessage = error.message || "Failed to subscribe";
      const errorDescription =
        error.message === "This email is already subscribed to our newsletter"
          ? "You are already subscribed to our newsletter."
          : "Please try again later or contact support if the problem persists.";

      toast.error(errorMessage, {
        description: errorDescription,
      });
    } finally {
      console.log("Final form status:", status);
      setStatus("idle");
    }
  };

  return (
    <section className="relative py-24 overflow-hidden backdrop-blur-sm">
      {/* Remove any dark backgrounds, keep only subtle overlays */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#ff000015,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,#ff000015,transparent_50%)]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        <div className="relative">
          {/* Main Content Container */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-[2.5rem] bg-black/40 backdrop-blur-xl border border-white/10 overflow-hidden"
          >
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Left Column - Visual Appeal */}
              <div className="relative p-12 lg:p-16 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent" />
                <div className="absolute inset-0">
                  <SparklesCore
                    background="transparent"
                    minSize={0.4}
                    maxSize={1}
                    particleDensity={12}
                    className="w-full h-full"
                    particleColor="#ff0000"
                  />
                </div>

                <div className="relative space-y-8">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl"
                  >
                    <Sparkles className="w-5 h-5 text-primary animate-pulse" />
                    <span className="text-sm font-medium bg-gradient-to-r from-white to-white/80 text-transparent bg-clip-text">
                      Limited Time Offer
                    </span>
                  </motion.div>

                  <div className="space-y-6">
                    <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight">
                      Get{" "}
                      <span className="relative inline-block">
                        <span className="relative z-10 gradient-text">
                          50% Off
                        </span>
                        <motion.span
                          initial={{ width: "0%" }}
                          whileInView={{ width: "100%" }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.5 }}
                          className="absolute bottom-0 left-0 h-[6px] bg-gradient-to-r from-primary/50 to-transparent rounded-full blur-sm"
                        />
                      </span>{" "}
                      Your First Shoot
                    </h2>
                    <p className="text-xl text-gray-300/90 leading-relaxed max-w-lg">
                      Join thousands of creators and get exclusive access to
                      premium features and early-bird discounts.
                    </p>
                  </div>

                  {/* Stats/Social Proof */}
                  <div className="flex flex-wrap gap-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                      className="flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10"
                    >
                      <div className="p-2.5 rounded-xl bg-primary/20 border border-primary/20">
                        <Star className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold text-lg">5,000+</p>
                        <p className="text-sm text-gray-400">Active Creators</p>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                      className="flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10"
                    >
                      <div className="p-2.5 rounded-xl bg-primary/20 border border-primary/20">
                        <Mail className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold text-lg">Weekly</p>
                        <p className="text-sm text-gray-400">Pro Tips</p>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* Right Column - Form */}
              <div className="relative lg:border-l border-white/10">
                <div className="h-full p-12 lg:p-16 flex items-center">
                  <div className="w-full space-y-8">
                    <div className="space-y-2">
                      <h3 className="text-2xl font-semibold">Subscribe Now</h3>
                      <p className="text-gray-400">
                        Enter your email to claim your discount
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="space-y-2">
                        <div className="relative">
                          <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            className="w-full h-14 pl-14 pr-4 rounded-xl bg-white/5 border border-white/10 focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-colors"
                            required
                          />
                          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400" />
                        </div>
                      </div>

                      <button
                        type="submit"
                        disabled={status === "loading"}
                        className="group relative w-full h-14 rounded-xl bg-black/40 backdrop-blur-xl border border-white/10 text-white font-medium flex items-center justify-center gap-2 disabled:opacity-50 transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:shadow-[0_0_20px_rgba(255,0,0,0.1)]"
                      >
                        {status === "loading" ? (
                          <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                        ) : (
                          <>
                            <span>Claim Your 50% Discount</span>
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                          </>
                        )}
                      </button>

                      <div className="space-y-4">
                        <div className="h-px bg-white/10" />
                        <p className="text-sm text-gray-500">
                          By subscribing, you agree to our Terms of Service and
                          Privacy Policy. You'll receive weekly updates and
                          exclusive offers.
                        </p>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Keep the sparkles effect */}
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
    </section>
  );
}
