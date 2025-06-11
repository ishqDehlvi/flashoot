import { motion } from "framer-motion";
import { Shield, Sparkles, Zap, Lock, Code, Target } from "lucide-react";
import NavHeader from "../components/NavHeader";
import { Footer } from "../components/Footer";
import { FloatingNav } from "@/components/FloatingNav";
import { SparklesCore } from "@/components/ui/aceternity";

// const FeatureCard = ({
//   icon: Icon,
//   title,
//   description,
//   delay,
//   gradient
// }: {
//   icon: any;
//   title: string;
//   description: string;
//   delay: number;
//   gradient: string;
// }) => (
//   <motion.div
//     initial={{ opacity: 0, y: 20 }}
//     animate={{ opacity: 1, y: 0 }}
//     transition={{ delay }}
//     className="relative group h-full"
//   >
//     <motion.div
//       className={`absolute inset-0 ${gradient} rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity`}
//       animate={{
//         scale: [1, 1.1, 1],
//       }}
//       transition={{
//         duration: 4,
//         repeat: Infinity,
//         ease: "easeInOut"
//       }}
//     />
//     <div className="relative h-full p-6 rounded-2xl bg-black/40 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-300">
//       <div className="flex flex-col gap-4 h-full">
//         <div className={`p-3 rounded-xl ${gradient} backdrop-blur-sm w-fit`}>
//           <Icon className="w-6 h-6 text-white" />
//         </div>
//         <div className="space-y-2 flex-grow">
//           <h4 className="text-lg font-semibold bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
//             {title}
//           </h4>
//           <p className="text-sm text-gray-400 leading-relaxed">
//             {description}
//           </p>
//         </div>
//       </div>
//     </div>
//   </motion.div>
// );

export default function Patent() {
  return (
    <div className="min-h-screen bg-background relative">
      {/* Global Background Effects - Copied from Features page */}
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

      {/* Content */}
      <div className="relative flex flex-col min-h-screen">
        <NavHeader />

        <main className="flex-1 relative py-16 md:py-24 flex items-center justify-center">
          <div className="container max-w-6xl mx-auto px-4">
            <div className="rounded-3xl bg-black/40 backdrop-blur-xl border border-white/10 p-6 md:p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Column - Header */}
                <div className="space-y-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10"
                  >
                    <Shield className="w-4 h-4 text-primary" />
                    <span className="text-sm">Patent Pending Technology</span>
                  </motion.div>

                  <div className="relative">
                    <div className="absolute inset-0 -z-10">
                      <SparklesCore
                        background="transparent"
                        minSize={0.4}
                        maxSize={1}
                        particleDensity={100}
                        className="w-full h-full"
                        particleColor="#fff"
                      />
                    </div>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-[1.1]">
                      Innovation in{" "}
                      <span className="bg-gradient-to-r from-[#FF6B6B] via-[#9B6BFF] to-[#6B9BFF] bg-clip-text text-transparent">
                        Progress
                      </span>
                    </h1>

                    <p className="text-base md:text-lg text-gray-400 leading-relaxed">
                      Our latest technology is{" "}
                      <span className="text-primary">patent pending</span>,
                      showcasing our commitment to pioneering innovation in
                      content creation and creator-business matchmaking.
                    </p>
                  </div>

                  {/* Patent Details Section */}
                  <div className="space-y-4 bg-black/20 rounded-xl p-6 border border-white/10">
                    <div className="space-y-2">
                      <h3 className="text-sm font-medium text-gray-400">
                        Indian Patent Application
                      </h3>
                      <div className="flex items-center gap-2">
                        <span className="text-xl font-mono text-primary">
                          IN 202341069420
                        </span>
                        <div className="px-2 py-1 rounded-md bg-primary/10 border border-primary/20">
                          <span className="text-xs text-primary">Pending</span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-sm font-medium text-gray-400">
                        Filing Date
                      </h3>
                      <p className="text-white">December 15, 2023</p>
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-sm font-medium text-gray-400">
                        Patent Title
                      </h3>
                      <p className="text-white">
                        System and Method for Automated Content Creator-Business
                        Matchmaking Using AI
                      </p>
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-sm font-medium text-gray-400">
                        Key Claims
                      </h3>
                      <ul className="text-sm text-gray-300 space-y-2 list-disc list-inside">
                        <li>AI-powered creator matching algorithm</li>
                        <li>Automated scheduling and booking system</li>
                        <li>Real-time content delivery platform</li>
                        <li>Secure payment processing method</li>
                      </ul>
                    </div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-yellow-500/20 to-yellow-500/10 backdrop-blur-sm border border-yellow-500/20"
                  >
                    <Sparkles className="w-5 h-5 text-yellow-500" />
                    <span className="text-sm md:text-base text-yellow-400">
                      Patent Application Under Review
                    </span>
                  </motion.div>

                  {/* Additional Information */}
                  <div className="text-sm text-gray-400">
                    <p>
                      This patent application is currently under review by the
                      Indian Patent Office. The technology described in this
                      patent focuses on revolutionizing the content creation
                      industry through innovative AI-driven solutions.
                    </p>
                  </div>
                </div>

                {/* Right Column - Features */}
                <div className="space-y-8">
                  {/* Features Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                      {
                        icon: Zap,
                        title: "AI Platform",
                        description:
                          "Next-gen content creation platform with intelligent matching algorithms",
                        gradient: "from-primary/20 to-primary/10",
                        delay: 0.4,
                      },
                      {
                        icon: Lock,
                        title: "Security",
                        description:
                          "Military-grade encryption with blockchain verification",
                        gradient: "from-primary/20 to-primary/5",
                        delay: 0.5,
                      },
                      {
                        icon: Target,
                        title: "Smart Matching",
                        description:
                          "Neural networks analyze data points for perfect creator-client fits",
                        gradient: "from-primary/20 to-primary/10",
                        delay: 0.6,
                      },
                      {
                        icon: Code,
                        title: "Automation",
                        description:
                          "Self-learning algorithms optimize workflows in real-time",
                        gradient: "from-primary/20 to-primary/5",
                        delay: 0.7,
                      },
                    ].map((feature) => (
                      <motion.div
                        key={feature.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: feature.delay }}
                        className="group relative"
                      >
                        <motion.div
                          className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                        />
                        <div className="relative h-full p-6 rounded-2xl bg-black/40 backdrop-blur-xl border border-white/10 hover:border-primary/20 transition-all duration-300">
                          <div className="flex flex-col gap-4">
                            <div className="flex items-center justify-between">
                              <div className="p-3 rounded-xl bg-primary/10 border border-primary/20">
                                <feature.icon className="w-6 h-6 text-primary" />
                              </div>
                              <div className="h-8 w-[2px] rounded-full bg-gradient-to-b from-primary/30 to-transparent" />
                            </div>
                            <div>
                              <h4 className="text-lg font-semibold text-white mb-2">
                                {feature.title}
                              </h4>
                              <p className="text-sm text-gray-400">
                                {feature.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Patent Progress Timeline */}
                  <div className="relative p-6 rounded-2xl bg-black/40 backdrop-blur-xl border border-white/10">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent rounded-2xl" />
                    <div className="relative">
                      <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-3">
                        <div className="w-1 h-8 rounded-full bg-gradient-to-b from-primary to-transparent" />
                        Patent Progress
                      </h3>

                      <div className="space-y-6">
                        {[
                          {
                            date: "Dec 2023",
                            title: "Initial Filing",
                            status: "Completed",
                            gradient: "from-primary to-[#FF6B6B]",
                          },
                          {
                            date: "Jan 2024",
                            title: "Technical Review",
                            status: "In Progress",
                            gradient: "from-primary/80 to-primary",
                          },
                          {
                            date: "Q2 2024",
                            title: "Final Examination",
                            status: "Upcoming",
                            gradient: "from-primary/40 to-primary/20",
                          },
                        ].map((stage, index) => (
                          <div key={stage.title} className="relative">
                            {/* Connecting Line */}
                            {index !== 2 && (
                              <div className="absolute left-[22px] top-8 w-[2px] h-[calc(100%+1.5rem)] bg-gradient-to-b from-primary/20 to-transparent" />
                            )}

                            <div className="flex items-start gap-4">
                              {/* Timeline Dot */}
                              <div
                                className={`relative w-[12px] h-[12px] mt-2 rounded-full bg-gradient-to-r ${stage.gradient} p-[2px]`}
                              >
                                <div className="absolute inset-0 rounded-full bg-black/40 backdrop-blur-xl" />
                              </div>

                              {/* Content */}
                              <div className="flex-1 flex items-start justify-between">
                                <div>
                                  <h4 className="font-medium text-white">
                                    {stage.title}
                                  </h4>
                                  <p className="text-sm text-gray-400">
                                    {stage.date}
                                  </p>
                                </div>
                                <div
                                  className={`px-3 py-1 rounded-full text-xs ${
                                    stage.status === "Completed"
                                      ? "bg-primary/20 text-primary border border-primary/20"
                                      : stage.status === "In Progress"
                                      ? "bg-primary/10 text-primary/80 border border-primary/10 animate-pulse"
                                      : "bg-white/5 text-gray-400 border border-white/10"
                                  }`}
                                >
                                  {stage.status}
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Bottom Stats */}
                      <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-white/5">
                        {[
                          { label: "Processing Time", value: "45 Days" },
                          { label: "Review Phase", value: "2 of 3" },
                          { label: "Completion", value: "60%" },
                        ].map((stat) => (
                          <div key={stat.label} className="text-center">
                            <div className="text-lg font-semibold text-white">
                              {stat.value}
                            </div>
                            <div className="text-xs text-gray-400">
                              {stat.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        <Footer />
        <FloatingNav />
      </div>
    </div>
  );
}
