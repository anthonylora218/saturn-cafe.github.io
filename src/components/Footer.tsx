import { Home as HomeIcon } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-blue-900 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center justify-center space-y-6">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-yellow-400 flex items-center justify-center shadow-lg">
              <HomeIcon className="text-blue-900" size={24} strokeWidth={2.5} />
            </div>
            <div>
              <h2 className="text-white text-lg font-bold tracking-wide leading-tight">GOLDEN KEY</h2>
              <p className="text-yellow-400 text-xs font-semibold tracking-wider">CONSTRUCTION</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-white">
            <a href="#home" className="hover:text-yellow-400 transition-colors font-medium">HOME</a>
            <span className="text-blue-400">•</span>
            <a href="#about" className="hover:text-yellow-400 transition-colors font-medium">About</a>
            <span className="text-blue-400">•</span>
            <a href="#services" className="hover:text-yellow-400 transition-colors font-medium">Services</a>
            <span className="text-blue-400">•</span>
            <a href="#contact" className="hover:text-yellow-400 transition-colors font-medium">Contact</a>
          </div>

          <div className="text-center text-sm text-white">
            <p>Staten Island & New Jersey</p>
            <p className="mt-2">
              <a href="tel:+19295644310" className="hover:text-yellow-400 transition-colors font-semibold">
                +1 (929) 564-4310
              </a>
            </p>
          </div>

          <div className="pt-6 border-t border-blue-700 w-full max-w-4xl">
            <p className="text-center text-xs text-blue-200">
              © {new Date().getFullYear()} Golden Key Construction. Residential-Commercial Roofing-Siding & Construction Company.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
