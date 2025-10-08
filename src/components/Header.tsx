import { Menu, X, Home as HomeIcon } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-blue-900/95 backdrop-blur-md border-b border-yellow-400/20 shadow-xl">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-yellow-400 flex items-center justify-center shadow-lg">
              <HomeIcon className="text-blue-900" size={28} strokeWidth={2.5} />
            </div>
            <div>
              <h1 className="text-white text-xl font-bold tracking-wide leading-tight">GOLDEN KEY</h1>
              <p className="text-yellow-400 text-xs font-semibold tracking-wider">CONSTRUCTION</p>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-white hover:text-yellow-400 transition-colors font-medium">HOME</a>
            <a href="#about" className="text-white hover:text-yellow-400 transition-colors font-medium">About</a>
            <a href="#services" className="text-white hover:text-yellow-400 transition-colors font-medium">Services</a>
            <a href="#contact" className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold px-6 py-2 rounded transition-all shadow-lg transform hover:scale-105">Contact</a>
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <a href="#home" className="block text-white hover:text-yellow-400 transition-colors font-medium">HOME</a>
            <a href="#about" className="block text-white hover:text-yellow-400 transition-colors font-medium">About</a>
            <a href="#services" className="block text-white hover:text-yellow-400 transition-colors font-medium">Services</a>
            <a href="#contact" className="block bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold px-6 py-2 rounded transition-all text-center">Contact</a>
          </div>
        )}
      </nav>
    </header>
  );
}
