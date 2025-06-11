import NavHeader from '@/components/NavHeader';
import { FloatingNav } from '@/components/FloatingNav';
import { Footer } from '@/components/Footer';
import { CookieConsent } from '@/components/CookieConsent';

export default function Terms() {
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
            <h1 className="text-4xl sm:text-5xl font-bold text-center mb-12 gradient-text pt-8 sm:pt-12">Terms of Service</h1>

            {/* Introduction */}
            <div className="bg-white/5 p-8 rounded-2xl backdrop-blur-xl border border-white/10 shadow-[0_2px_12px_-3px_rgba(254,0,42,0.2)]">
              <h2 className="text-2xl font-semibold mb-4 gradient-text">Welcome to Flashoot</h2>
              <p className="text-gray-300 leading-relaxed">
                These Terms of Service govern your use of Flashoot's website and services. Please read these terms carefully before using our platform. By accessing or using our services, you agree to be bound by these terms.
              </p>
            </div>

            {/* 1. Acceptance of Terms */}
            <div className="bg-white/5 p-8 rounded-2xl backdrop-blur-xl border border-white/10 shadow-[0_2px_12px_-3px_rgba(254,0,42,0.2)] hover:bg-white/10 transition-all">
              <h2 className="text-2xl font-semibold mb-4 gradient-text">1. Acceptance of Terms</h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>By accessing and using this website, you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to abide by these terms, please do not use our services.</p>
                <ul className="space-y-2 pl-4">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    You must be at least 18 years old to use our services
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    You are responsible for maintaining the confidentiality of your account
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    You agree to provide accurate and complete information
                  </li>
                </ul>
              </div>
            </div>

            {/* 2. Use License */}
            <div className="bg-white/5 p-8 rounded-2xl backdrop-blur-xl border border-white/10 shadow-[0_2px_12px_-3px_rgba(254,0,42,0.2)] hover:bg-white/10 transition-all">
              <h2 className="text-2xl font-semibold mb-4 gradient-text">2. Use License</h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>Permission is granted to temporarily download one copy of the materials for personal, non-commercial transitory viewing only.</p>
                <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                  <h4 className="text-lg font-medium mb-2 text-primary">This license shall not allow you to:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      Modify or copy the materials
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      Use the materials for any commercial purpose
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      Transfer the materials to another person
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      'Mirror' the materials on any other server
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 3. Disclaimer */}
            <div className="bg-white/5 p-8 rounded-2xl backdrop-blur-xl border border-white/10 shadow-[0_2px_12px_-3px_rgba(254,0,42,0.2)] hover:bg-white/10 transition-all">
              <h2 className="text-2xl font-semibold mb-4 gradient-text">3. Disclaimer</h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>The materials on this website are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties, including:</p>
                <ul className="space-y-2 pl-4">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    Implied warranties or conditions of merchantability
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    Fitness for a particular purpose
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    Non-infringement of intellectual property rights
                  </li>
                </ul>
              </div>
            </div>

            {/* 4. Limitations */}
            <div className="bg-white/5 p-8 rounded-2xl backdrop-blur-xl border border-white/10 shadow-[0_2px_12px_-3px_rgba(254,0,42,0.2)] hover:bg-white/10 transition-all">
              <h2 className="text-2xl font-semibold mb-4 gradient-text">4. Limitations</h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>In no event shall Flashoot or our suppliers be liable for any damages arising out of the use or inability to use our services, including but not limited to:</p>
                <ul className="space-y-2 pl-4">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    Loss of data or profits
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    Business interruption
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    Any other financial loss
                  </li>
                </ul>
              </div>
            </div>

            {/* 5. Revisions and Errata */}
            <div className="bg-white/5 p-8 rounded-2xl backdrop-blur-xl border border-white/10 shadow-[0_2px_12px_-3px_rgba(254,0,42,0.2)] hover:bg-white/10 transition-all">
              <h2 className="text-2xl font-semibold mb-4 gradient-text">5. Revisions and Errata</h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>The materials appearing on our website could include technical, typographical, or photographic errors. We do not warrant that any of the materials are accurate, complete or current. We reserve the right to:</p>
                <ul className="space-y-2 pl-4">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    Make changes to the materials at any time without notice
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    Update or change our services at any time
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    Modify these terms of service at our discretion
                  </li>
                </ul>
              </div>
            </div>

            {/* 6. Governing Law */}
            <div className="bg-white/5 p-8 rounded-2xl backdrop-blur-xl border border-white/10 shadow-[0_2px_12px_-3px_rgba(254,0,42,0.2)] hover:bg-white/10 transition-all">
              <h2 className="text-2xl font-semibold mb-4 gradient-text">6. Governing Law</h2>
              <p className="text-gray-300 leading-relaxed">
                These terms and conditions are governed by and construed in accordance with applicable laws, and any disputes shall be subject to the exclusive jurisdiction of the courts in the applicable jurisdiction.
              </p>
            </div>

            <div className="text-sm text-gray-400 text-center pt-8">
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