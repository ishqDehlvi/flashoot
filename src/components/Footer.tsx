import { Link } from 'wouter';
import gdpr from '../images/GDPRLogo.svg';
import iso from '../images/isoLogo.svg';

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-black/40 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Certifications - Will appear first on mobile */}
          <div className="flex justify-center md:justify-end items-center gap-6 order-first md:order-last">
            <img src={gdpr} alt="GDPR Compliant" className="h-24 w-auto opacity-80 hover:opacity-100 transition-opacity" />
            <img src={iso} alt="ISO Certified" className="h-24 w-auto opacity-80 hover:opacity-100 transition-opacity" />
          </div>

          {/* Company Info */}
          <div className="text-sm text-gray-400 space-y-2 order-2">
            <p>© 2025 Flashoot</p>
            <p>A product of{' '}
              <a 
                href="https://www.konchamkode.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                Konchamkode Private Limited
              </a>
            </p>
          </div>

          {/* Navigation Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-center order-3">
            <Link href="/press">
              <span className="text-sm text-gray-400 hover:text-white transition-colors cursor-pointer block">
                Press & Blog
              </span>
            </Link>
            <Link href="/patent">
              <span className="text-sm text-gray-400 hover:text-white transition-colors cursor-pointer block">
                Patent
              </span>
            </Link>
            <Link href="/privacy">
              <span className="text-sm text-gray-400 hover:text-white transition-colors cursor-pointer block">
                Privacy
              </span>
            </Link>
            <Link href="/terms">
              <span className="text-sm text-gray-400 hover:text-white transition-colors cursor-pointer block">
                Terms
              </span>
            </Link>
            <Link href="/cookies">
              <span className="text-sm text-gray-400 hover:text-white transition-colors cursor-pointer block">
                Cookies
              </span>
            </Link>
            <Link href="/contact">
              <span className="text-sm text-gray-400 hover:text-white transition-colors cursor-pointer block">
                Contact
              </span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}