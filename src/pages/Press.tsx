import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { Download, Mail, Calendar, ArrowRight, Newspaper } from "lucide-react";
import { Link } from "wouter";
import { format } from "date-fns";
import NavHeader from "../components/NavHeader";
import { Footer } from "../components/Footer";
import { FloatingNav } from "@/components/FloatingNav";
import { getPosts } from "@/lib/ghost";

const pressArticles = [
  {
    title: "Flashoot secures ₹24 million investment, valuation soars to ₹220 million",
    source: "Economic Times CIO",
    date: "March 25, 2025",
    category: "Investment",
    image:
      "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=2000&auto=format&fit=crop",
    url: "https://cio.economictimes.indiatimes.com/news/corporate-news/flashoot-secures-24-million-investment-valuation-soars-to-220-million/119484233",
    excerpt:
      "Flashoot has successfully raised ₹24 million in its second round of funding at a valuation of ₹220 million. The latest capital infusion will fuel Flashoot's expansion plans across multiple Indian cities...",
  },
  {
    title: "Flashoot: India's Only Platform Where You Can Book Reelmakers",
    source: "Business Standard",
    date: "April 8, 2024",
    category: "Press Release",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2000&auto=format&fit=crop",
    url: "https://www.business-standard.com/content/press-releases-ani/flashoot-india-s-only-platform-where-you-can-book-reelmakers-124040800529_1.html",
    excerpt:
      "Flashoot, India's pioneering platform, is revolutionizing the content creation industry by offering a unique service that connects businesses with professional reel makers...",
  },
  {
    title: "Flashoot Raises ₹6 Million in Seed Funding, Valuating it at ₹55 Million",
    source: "Outlook India",
    date: "July 17, 2024",
    category: "Featured",
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2000&auto=format&fit=crop",
    url: "https://www.outlookindia.com/hub4business/flashoot-raises-6-million-in-seed-funding-valuating-it-at-55-million",
    excerpt:
      "Founded by Voleti Karthik, Manikanta Bukka, and Shreyak Singh, Flashoot is poised to disrupt the digital content creation industry by simplifying the process of sourcing and collaborating with talented reel-makers...",
  },
];

export default function Press() {
  // Fetch all posts from Ghost
  const { data: posts = [], isLoading } = useQuery({
    queryKey: ["posts"],
    queryFn: () => getPosts(),
  });

  const PressArticleCard = ({
    article,
  }: {
    article: (typeof pressArticles)[0];
  }) => (
    <motion.div
      whileHover={{ y: -5 }}
      className="group relative rounded-[2rem] p-1 transition-all duration-300"
    >
      {/* Enhanced Gradient Border with multiple layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/0 to-primary/20 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
      <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-white/5 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Main Card */}
      <div className="relative rounded-[1.9rem] bg-black/40 backdrop-blur-xl border border-white/10 overflow-hidden transition-all duration-500 group-hover:border-primary/20 group-hover:shadow-[0_0_30px_rgba(255,0,0,0.1)]">
        {/* Image Container with enhanced hover effects */}
        <div className="relative h-56 overflow-hidden">
          <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px] z-10 transition-opacity duration-500 group-hover:opacity-0" />
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover transform group-hover:scale-105 transition-all duration-700 ease-out"
          />
          {/* Enhanced gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-500" />

          {/* Floating accent elements */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
            <div className="absolute top-0 left-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2" />
          </div>
        </div>

        <div className="p-8 relative">
          {/* Enhanced floating background elements */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
            <div className="absolute top-0 left-0 w-48 h-48 bg-primary/5 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-48 h-48 bg-primary/5 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2" />
          </div>

          <div className="relative">
            {/* Tags with enhanced styling */}
            <div className="flex items-center gap-3 mb-6">
              <span className="px-4 py-1.5 rounded-full bg-primary/20 backdrop-blur-sm text-xs font-medium border border-primary/20 shadow-[0_0_15px_rgba(255,0,0,0.1)]">
                {article.source}
              </span>
              <span className="px-4 py-1.5 rounded-full bg-white/5 backdrop-blur-sm text-xs font-medium border border-white/10">
                {article.category}
              </span>
            </div>

            {/* Title with enhanced hover effect */}
            <h3 className="text-2xl font-bold mb-4 line-clamp-2 group-hover:text-primary transition-colors duration-300">
              {article.title}
            </h3>

            {/* Excerpt with improved typography */}
            <p className="text-base text-gray-400/90 mb-8 line-clamp-3 leading-relaxed">
              {article.excerpt}
            </p>

            {/* Footer with enhanced layout */}
            <div className="flex items-center justify-between mt-auto border-t border-white/5 pt-6">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-primary/80" />
                <span className="text-sm text-gray-400/90 font-medium">
                  {article.date}
                </span>
              </div>
              <motion.a
                href={article.url}
                whileHover={{ x: 5 }}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-300"
              >
                <span className="text-sm font-medium">Read More</span>
                <ArrowRight className="w-4 h-4" />
              </motion.a>
            </div>
          </div>
        </div>

        {/* Enhanced decorative corner lines */}
        <div className="absolute top-0 left-0 w-24 h-24">
          <div className="absolute top-[1px] left-[1px] w-12 h-[1px] bg-gradient-to-r from-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute top-[1px] left-[1px] h-12 w-[1px] bg-gradient-to-b from-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
        <div className="absolute bottom-0 right-0 w-24 h-24">
          <div className="absolute bottom-[1px] right-[1px] w-12 h-[1px] bg-gradient-to-l from-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute bottom-[1px] right-[1px] h-12 w-[1px] bg-gradient-to-t from-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>

        {/* Shine effect on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent rotate-180 transform translate-y-full group-hover:translate-y-0 transition-transform duration-1000" />
        </div>
      </div>
    </motion.div>
  );

  const BlogPostCard = ({ post }: { post: any }) => (
    <motion.div
      whileHover={{ y: -5 }}
      className="group relative rounded-[2rem] p-1 transition-all duration-300"
    >
      {/* Enhanced Gradient Border with multiple layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/0 to-primary/20 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
      <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-white/5 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Main Card */}
      <div className="relative rounded-[1.9rem] bg-black/40 backdrop-blur-xl border border-white/10 overflow-hidden transition-all duration-500 group-hover:border-primary/20 group-hover:shadow-[0_0_30px_rgba(255,0,0,0.1)]">
        {/* Image Container with enhanced hover effects */}
        {post.feature_image && (
          <div className="relative h-56 overflow-hidden">
            <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px] z-10 transition-opacity duration-500 group-hover:opacity-0" />
            <img
              src={post.feature_image}
              alt={post.title}
              className="w-full h-full object-cover transform group-hover:scale-105 transition-all duration-700 ease-out"
            />
            {/* Enhanced gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-500" />

            {/* Floating accent elements */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
              <div className="absolute top-0 left-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2" />
            </div>
          </div>
        )}

        <div className="p-8 relative">
          {/* Enhanced floating background elements */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
            <div className="absolute top-0 left-0 w-48 h-48 bg-primary/5 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-48 h-48 bg-primary/5 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2" />
          </div>

          <div className="relative">
            {/* Tags with enhanced styling */}
            <div className="flex items-center gap-3 mb-6">
              {post.primary_tag && (
                <span className="px-4 py-1.5 rounded-full bg-primary/20 backdrop-blur-sm text-xs font-medium border border-primary/20 shadow-[0_0_15px_rgba(255,0,0,0.1)]">
                  {post.primary_tag.name}
                </span>
              )}
              <span className="px-4 py-1.5 rounded-full bg-white/5 backdrop-blur-sm text-xs font-medium border border-white/10">
                {format(new Date(post.published_at), "MMM dd, yyyy")}
              </span>
            </div>

            {/* Title with enhanced hover effect */}
            <h3 className="text-2xl font-bold mb-4 line-clamp-2 group-hover:text-primary transition-colors duration-300">
              {post.title}
            </h3>

            {/* Excerpt with improved typography */}
            <p className="text-base text-gray-400/90 mb-8 line-clamp-3 leading-relaxed">
              {post.excerpt}
            </p>

            {/* Footer with enhanced layout - simplified without author */}
            <div className="flex items-center justify-between mt-auto border-t border-white/5 pt-6">
              <div className="flex items-center gap-2">
                <div className="text-sm">
                  <p className="text-gray-400/80">
                    {post.reading_time} min read
                  </p>
                </div>
              </div>
              <Link href={`/blog/${post.slug}`}>
                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-300"
                >
                  <span className="text-sm font-medium">Read More</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.div>
              </Link>
            </div>
          </div>
        </div>

        {/* Enhanced decorative corner lines */}
        <div className="absolute top-0 left-0 w-24 h-24">
          <div className="absolute top-[1px] left-[1px] w-12 h-[1px] bg-gradient-to-r from-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute top-[1px] left-[1px] h-12 w-[1px] bg-gradient-to-b from-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
        <div className="absolute bottom-0 right-0 w-24 h-24">
          <div className="absolute bottom-[1px] right-[1px] w-12 h-[1px] bg-gradient-to-l from-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute bottom-[1px] right-[1px] h-12 w-[1px] bg-gradient-to-t from-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>

        {/* Shine effect on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent rotate-180 transform translate-y-full group-hover:translate-y-0 transition-transform duration-1000" />
        </div>
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-background relative">
      {/* Global Background Effects - Enhanced version */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Primary gradient layer - increased opacity */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-primary/10 to-primary/5" />

        {/* Multiple radial gradients for better effect */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,#ff000030,#00000000)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,#ff000020,transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,#ff000020,transparent_50%)]" />
        </div>

        {/* Enhanced floating orbs */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full md:w-[800px] h-[300px] md:h-[500px] bg-primary/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full md:w-[600px] h-[300px] md:h-[400px] bg-primary/10 blur-[120px] rounded-full animate-pulse" />

        {/* Noise texture with increased opacity */}
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-30 mix-blend-overlay" />
      </div>

      <NavHeader />

      <main className="relative pt-20">
        <div className="max-w-7xl mx-auto px-4">
          <section className="py-20 relative">
            {/* Decorative background elements */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-primary/10 to-transparent" />
              <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-primary/10 to-transparent" />
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] animate-pulse" />
            </div>

            {/* Section Header */}
            <div className="text-center relative mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-primary/20 to-primary/5 border border-primary/20 backdrop-blur-xl mb-6"
              >
                <Newspaper className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium bg-gradient-to-r from-white to-white/80 text-transparent bg-clip-text">
                  Latest Coverage
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-5xl font-bold mb-4"
              >
                Featured in{" "}
                <span className="relative">
                  <span className="relative z-10 gradient-text">
                    Leading Media
                  </span>
                  <motion.span
                    initial={{ width: "0%" }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="absolute bottom-0 left-0 h-[6px] bg-gradient-to-r from-primary/50 to-transparent rounded-full blur-sm"
                  />
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-lg text-gray-300/90 max-w-2xl mx-auto"
              >
                Discover how Flashoot is making waves in the content creation
                industry
              </motion.p>
            </div>

            {/* Press Articles Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
              {pressArticles.map((article, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <PressArticleCard article={article} />
                </motion.div>
              ))}
            </div>

            {/* Bottom CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <button className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary/90 to-primary/70 hover:from-primary hover:to-primary/80 transition-all duration-300 font-medium text-white shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30">
                <span>View All Press Releases</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </section>

          {/* Blog Posts Section */}
          {isLoading ? (
            <div className="flex items-center justify-center h-64">
              <div className="animate-pulse text-gray-400">
                Loading posts...
              </div>
            </div>
          ) : posts.length > 0 ? (
            <section className="py-20 relative">
              {/* Decorative background elements */}
              <div className="absolute inset-0 -z-10">
                <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-primary/10 to-transparent" />
                <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-primary/10 to-transparent" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] animate-pulse" />
              </div>

              {/* Section Header */}
              <div className="text-center relative mb-16">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-primary/20 to-primary/5 border border-primary/20 backdrop-blur-xl mb-6"
                >
                  <Newspaper className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium bg-gradient-to-r from-white to-white/80 text-transparent bg-clip-text">
                    Latest Posts
                  </span>
                </motion.div>

                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="text-4xl md:text-5xl font-bold mb-4"
                >
                  Latest from the{" "}
                  <span className="relative">
                    <span className="relative z-10 gradient-text">Blog</span>
                    <motion.span
                      initial={{ width: "0%" }}
                      whileInView={{ width: "100%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className="absolute bottom-0 left-0 h-[6px] bg-gradient-to-r from-primary/50 to-transparent rounded-full blur-sm"
                    />
                  </span>
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-lg text-gray-300/90 max-w-2xl mx-auto"
                >
                  Stay updated with our latest insights and announcements
                </motion.p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                {posts.slice(0, 6).map((post: any, index: number) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <BlogPostCard post={post} />
                  </motion.div>
                ))}
              </div>

              {/* Bottom CTA for Blog */}
              {posts.length > 6 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="text-center"
                >
                  <Link href="/blog">
                    <button className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary/90 to-primary/70 hover:from-primary hover:to-primary/80 transition-all duration-300 font-medium text-white shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30">
                      <span>View All Blog Posts</span>
                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </button>
                  </Link>
                </motion.div>
              )}
            </section>
          ) : null}

          {/* Contact Section */}
          <div className="mb-20">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 rounded-3xl bg-black/40 backdrop-blur-xl border border-white/10 p-8">
              <div className="flex items-center gap-3 text-sm text-gray-400">
                <Mail className="w-4 h-4" />
                <span>press@flashoot.com</span>
                <span className="hidden sm:inline-block">•</span>
                <span className="hidden sm:inline-block">
                  +91 (800) 123-4567
                </span>
              </div>

              <div className="flex items-center gap-3">
                <button className="px-4 py-2 text-sm rounded-lg bg-white/5 hover:bg-white/10 transition-colors backdrop-blur-sm border border-white/10 flex items-center gap-2">
                  <Download className="w-4 h-4" />
                  <span>Press Kit</span>
                </button>
                <button className="px-4 py-2 text-sm rounded-lg bg-gradient-to-r from-primary/90 to-primary/70 hover:from-primary hover:to-primary/80 transition-colors font-medium flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>Contact PR</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-white/10 bg-black/20 backdrop-blur-sm">
          <Footer />
        </div>
      </main>

      <FloatingNav />
    </div>
  );
}

