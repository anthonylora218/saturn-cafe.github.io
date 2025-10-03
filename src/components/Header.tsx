import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-purple-900/95 via-indigo-900/95 to-purple-800/95 backdrop-blur-md border-b-2 border-purple-400/30 shadow-lg shadow-purple-900/50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 border-2 border-purple-300 flex items-center justify-center shadow-lg shadow-purple-500/50">
              <div className="relative">
                <div className="w-8 h-8 rounded-full border-2 border-white"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-1 bg-white rotate-12"></div>
              </div>
            </div>
            <span className="text-white text-xl font-bold tracking-wide">House of Saturn</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-purple-100 hover:text-white transition-colors font-medium">Home</a>
            <a href="#about" className="text-purple-100 hover:text-white transition-colors font-medium">About</a>
            <a href="#gallery" className="text-purple-100 hover:text-white transition-colors font-medium">Gallery</a>
            <a href="#order" className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold px-6 py-2 rounded-full transition-all shadow-lg shadow-purple-500/40 transform hover:scale-105">Order Online</a>
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
            <a href="#home" className="block text-purple-100 hover:text-white transition-colors font-medium">Home</a>
            <a href="#about" className="block text-purple-100 hover:text-white transition-colors font-medium">About</a>
            <a href="#gallery" className="block text-purple-100 hover:text-white transition-colors font-medium">Gallery</a>
            <a href="#order" className="block bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold px-6 py-2 rounded-full transition-all text-center">Order Online</a>
          </div>
        )}
      </nav>
    </header>
  );
}
