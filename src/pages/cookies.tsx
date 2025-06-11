import NavHeader from '@/components/NavHeader';
import { FloatingNav } from '@/components/FloatingNav';
import { Footer } from '@/components/Footer';
import { CookieConsent } from '@/components/CookieConsent';

export default function Cookies() {
  return (
    <div className="min-h-screen bg-background">
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-primary/10 to-primary/5" />
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,#ff000030,#00000000)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,#ff000020,transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,#ff000020,transparent_50%)]" />
        </div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full md:w-[800px] h-[500px] bg-primary/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full md:w-[600px] h-[400px] bg-primary/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-30 mix-blend-overlay" />
      </div>

      <div className="relative flex flex-col min-h-screen">
        <NavHeader />
        
        <main className="flex-1 container mx-auto px-4 py-16 sm:py-20">
          <div className="max-w-4xl mx-auto space-y-8">
            <h1 className="text-4xl sm:text-5xl font-bold text-center mb-12 gradient-text pt-8 sm:pt-12">Cookie Policy</h1>

            {/* Introduction Section */}
            <div className="bg-white/5 p-8 rounded-2xl backdrop-blur-xl border border-white/10 shadow-[0_2px_12px_-3px_rgba(254,0,42,0.2)]">
              <h2 className="text-2xl font-semibold mb-4 gradient-text">Understanding Our Cookies</h2>
              <p className="text-gray-300 leading-relaxed">
                Cookies help us deliver the best experience on our website. By using Flashoot, you agree to our use of cookies and similar technologies. This policy explains how we use cookies, what types of cookies we use, and how you can control them.
              </p>
            </div>

            {/* What Are Cookies Section */}
            <div className="bg-white/5 p-8 rounded-2xl backdrop-blur-xl border border-white/10 shadow-[0_2px_12px_-3px_rgba(254,0,42,0.2)]">
              <h2 className="text-2xl font-semibold mb-4 gradient-text">What Are Cookies?</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Cookies are small text files that are stored on your device when you visit our website. They serve various purposes and help us provide you with a better, more personalized experience.
              </p>
              <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                <h4 className="text-lg font-medium mb-2 text-primary">Key Things to Know:</h4>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    Cookies are standard practice across the internet
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    They're safe and can't carry viruses
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    You can manage or delete them at any time
                  </li>
                </ul>
              </div>
            </div>

            {/* Types of Cookies Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/5 p-6 rounded-2xl backdrop-blur-xl border border-white/10 shadow-[0_2px_12px_-3px_rgba(254,0,42,0.2)] hover:bg-white/10 transition-all">
                <h3 className="text-xl font-semibold mb-4 gradient-text">Essential Cookies</h3>
                <div className="space-y-4">
                  <p className="text-gray-300 leading-relaxed">
                    Required for basic site functionality. These cannot be disabled as they are necessary for the website to work properly.
                  </p>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      Authentication and security
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      Session management
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      Account preferences
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-white/5 p-6 rounded-2xl backdrop-blur-xl border border-white/10 shadow-[0_2px_12px_-3px_rgba(254,0,42,0.2)] hover:bg-white/10 transition-all">
                <h3 className="text-xl font-semibold mb-4 gradient-text">Analytics Cookies</h3>
                <div className="space-y-4">
                  <p className="text-gray-300 leading-relaxed">
                    Help us understand how visitors interact with our website, allowing us to improve user experience.
                  </p>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      Usage patterns and trends
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      Performance monitoring
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      Error tracking
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-white/5 p-6 rounded-2xl backdrop-blur-xl border border-white/10 shadow-[0_2px_12px_-3px_rgba(254,0,42,0.2)] hover:bg-white/10 transition-all">
                <h3 className="text-xl font-semibold mb-4 gradient-text">Functional Cookies</h3>
                <div className="space-y-4">
                  <p className="text-gray-300 leading-relaxed">
                    Enable enhanced functionality and personalization features on our website.
                  </p>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      Language preferences
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      Location-based content
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      Customized layouts
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-white/5 p-6 rounded-2xl backdrop-blur-xl border border-white/10 shadow-[0_2px_12px_-3px_rgba(254,0,42,0.2)] hover:bg-white/10 transition-all">
                <h3 className="text-xl font-semibold mb-4 gradient-text">Marketing Cookies</h3>
                <div className="space-y-4">
                  <p className="text-gray-300 leading-relaxed">
                    Used to track visitors across websites to display relevant advertisements.
                  </p>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      Ad personalization
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      Campaign effectiveness
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      Partner integrations
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Managing Cookies Section */}
            <div className="bg-white/5 p-8 rounded-2xl backdrop-blur-xl border border-white/10 shadow-[0_2px_12px_-3px_rgba(254,0,42,0.2)]">
              <h2 className="text-2xl font-semibold mb-4 gradient-text">Managing Your Cookie Preferences</h2>
              <div className="space-y-4">
                <p className="text-gray-300 leading-relaxed">
                  You can control and/or delete cookies as you wish. You can delete all cookies that are already on your computer and you can set most browsers to prevent them from being placed.
                </p>
                <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                  <h4 className="text-lg font-medium mb-2 text-primary">Browser Settings:</h4>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      Chrome: Settings → Privacy and Security → Cookies
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      Firefox: Options → Privacy & Security → Cookies
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      Safari: Preferences → Privacy → Cookies
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Last Updated Section */}
            <div className="text-center text-sm text-gray-400">
              <p>Last updated: {new Date().toLocaleDateString()}</p>
            </div>
          </div>
        </main>

        <Footer />
      </div>

      <FloatingNav />
      <CookieConsent />
    </div>
  );
} 