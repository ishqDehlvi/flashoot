import NavHeader from '@/components/NavHeader';
import { FloatingNav } from '@/components/FloatingNav';
import { Footer } from '@/components/Footer';
import { CookieConsent } from '@/components/CookieConsent';

export default function Privacy() {
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
            <h1 className="text-4xl sm:text-5xl font-bold text-center mb-12 gradient-text pt-8 sm:pt-12">Privacy Policy</h1>
            
            <div className="bg-white/5 p-8 rounded-2xl backdrop-blur-xl border border-white/10 shadow-[0_2px_12px_-3px_rgba(254,0,42,0.2)]">
              <h2 className="text-2xl font-semibold mb-4 gradient-text">Your Privacy Matters</h2>
              <p className="text-gray-300 leading-relaxed">
                At Flashoot, we take your privacy seriously. We believe in being transparent about how we collect, use, and protect your information.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/5 p-6 rounded-2xl backdrop-blur-xl border border-white/10 shadow-[0_2px_12px_-3px_rgba(254,0,42,0.2)] hover:bg-white/10 transition-all">
                <h3 className="text-xl font-semibold mb-4 gradient-text">Data Collection</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center gap-2">
                    <span className="text-primary">•</span>
                    Personal information you provide
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">•</span>
                    Usage analytics and metrics
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">•</span>
                    Device information
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">•</span>
                    Cookies and tracking
                  </li>
                </ul>
              </div>

              <div className="bg-white/5 p-6 rounded-2xl backdrop-blur-xl border border-white/10 shadow-[0_2px_12px_-3px_rgba(254,0,42,0.2)] hover:bg-white/10 transition-all">
                <h3 className="text-xl font-semibold mb-4 gradient-text">Data Protection</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center gap-2">
                    <span className="text-primary">•</span>
                    Industry-standard encryption
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">•</span>
                    Secure data storage
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">•</span>
                    Regular security audits
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">•</span>
                    Limited data retention
                  </li>
                </ul>
              </div>
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