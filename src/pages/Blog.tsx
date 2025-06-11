import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { format } from "date-fns";
import { Link } from "wouter";
import NavHeader from "../components/NavHeader";
import { Footer } from "../components/Footer";
import { FloatingNav } from "@/components/FloatingNav";
import { SparklesCore } from "@/components/ui/aceternity";
import { getPosts } from "@/lib/ghost";

export default function Blog() {
  const { data: posts = [], isLoading } = useQuery({
    queryKey: ["posts"],
    queryFn: () => getPosts(),
  });

  return (
    <div className="min-h-screen bg-background">
      <NavHeader />

      <main className="relative pt-20">
        {/* Enhanced Background Effects */}
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

        {/* Enhanced Hero Section */}
        <section className="relative py-12">
          <div className="container mx-auto px-4">
            <div className="text-center relative">
              {/* Decorative elements */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-primary/20 to-primary/5 border border-primary/20 backdrop-blur-xl mb-6"
              >
                <span className="text-sm font-medium bg-gradient-to-r from-white to-white/80 text-transparent bg-clip-text">
                  Insights & Updates
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 relative"
              >
                Welcome to Our{" "}
                <span className="relative">
                  <span className="relative z-10 gradient-text">Blog</span>
                  <motion.span
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="absolute bottom-0 left-0 h-[6px] bg-gradient-to-r from-primary/50 to-transparent rounded-full blur-sm"
                  />
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-gray-300/90 max-w-2xl mx-auto text-lg mb-8"
              >
                Discover stories, insights, and the latest updates from the
                Flashoot team
              </motion.p>

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
            </div>
          </div>
        </section>

        {/* Enhanced Blog Posts Grid */}
        <section className="py-4">
          <div className="container mx-auto px-4">
            {isLoading ? (
              <div className="flex items-center justify-center h-64">
                <div className="animate-pulse text-gray-400">
                  Loading posts...
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post: any, index: number) => (
                  <Link key={post.slug} href={`/blog/${post.slug}`}>
                    <motion.article
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ y: -5 }}
                      className="group relative rounded-[2rem] p-1 transition-all duration-300"
                    >
                      {/* Enhanced Gradient Border */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/0 to-primary/20 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
                      <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-white/5 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      {/* Main Card */}
                      <div className="relative rounded-[1.9rem] bg-black/40 backdrop-blur-xl border border-white/10 overflow-hidden transition-all duration-500 group-hover:border-primary/20 group-hover:shadow-[0_0_30px_rgba(255,0,0,0.1)]">
                        {post.feature_image && (
                          <div className="relative h-56 overflow-hidden">
                            <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px] z-10 transition-opacity duration-500 group-hover:opacity-0" />
                            <img
                              src={post.feature_image}
                              alt={post.title}
                              className="w-full h-full object-cover transform group-hover:scale-105 transition-all duration-700 ease-out"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-500" />
                          </div>
                        )}

                        <div className="p-8">
                          <div className="flex items-center gap-3 mb-6">
                            {post.primary_tag && (
                              <span className="px-4 py-1.5 rounded-full bg-primary/20 backdrop-blur-sm text-xs font-medium border border-primary/20 shadow-[0_0_15px_rgba(255,0,0,0.1)]">
                                {post.primary_tag.name}
                              </span>
                            )}
                            <span className="px-4 py-1.5 rounded-full bg-white/5 backdrop-blur-sm text-xs font-medium border border-white/10">
                              {format(
                                new Date(post.published_at),
                                "MMM dd, yyyy"
                              )}
                            </span>
                          </div>

                          <h3 className="text-2xl font-bold mb-4 line-clamp-2 group-hover:text-primary transition-colors duration-300">
                            {post.title}
                          </h3>

                          <p className="text-base text-gray-400/90 mb-8 line-clamp-3 leading-relaxed">
                            {post.excerpt}
                          </p>

                          {/* Footer - simplified without author */}
                          <div className="flex items-center justify-between mt-auto border-t border-white/5 pt-6">
                            <div className="flex items-center gap-2">
                              <p className="text-sm text-gray-400/80">
                                {post.reading_time} min read
                              </p>
                            </div>
                            <motion.div
                              whileHover={{ x: 5 }}
                              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-300"
                            >
                              <span className="text-sm font-medium">
                                Read More
                              </span>
                              <ArrowRight className="w-4 h-4" />
                            </motion.div>
                          </div>
                        </div>

                        {/* Decorative corner lines */}
                        <div className="absolute top-0 left-0 w-24 h-24">
                          <div className="absolute top-[1px] left-[1px] w-12 h-[1px] bg-gradient-to-r from-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                          <div className="absolute top-[1px] left-[1px] h-12 w-[1px] bg-gradient-to-b from-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </div>
                        <div className="absolute bottom-0 right-0 w-24 h-24">
                          <div className="absolute bottom-[1px] right-[1px] w-12 h-[1px] bg-gradient-to-l from-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                          <div className="absolute bottom-[1px] right-[1px] h-12 w-[1px] bg-gradient-to-t from-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </div>
                      </div>
                    </motion.article>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Footer */}
        <div className="border-t border-white/10 bg-black/20 backdrop-blur-sm">
          <Footer />
        </div>
      </main>

      <FloatingNav />
    </div>
  );
}
