import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-gray-500">
            © {new Date().getFullYear()} Your Company Name. All rights reserved.
          </div>
          
          <nav className="flex gap-6 mt-4 md:mt-0">
            <Link 
              href="/privacy" 
              className="text-sm text-gray-500 hover:text-gray-700"
            >
              Privacy Policy
            </Link>
            <Link 
              href="/terms" 
              className="text-sm text-gray-500 hover:text-gray-700"
            >
              Terms of Service
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
} 