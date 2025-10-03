export default function Footer() {
  return (
    <footer className="border-t-2 border-purple-400/30 bg-gradient-to-b from-black to-purple-950 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center justify-center space-y-6">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 border-2 border-purple-300 flex items-center justify-center shadow-lg shadow-purple-500/50">
              <div className="relative">
                <div className="w-6 h-6 rounded-full border-2 border-white"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-1 bg-white rotate-12"></div>
              </div>
            </div>
            <span className="text-white text-lg font-bold tracking-wide">House of Saturn</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-purple-200">
            <a href="#home" className="hover:text-purple-300 transition-colors font-medium">Home</a>
            <span className="text-purple-700">•</span>
            <a href="#about" className="hover:text-purple-300 transition-colors font-medium">About</a>
            <span className="text-purple-700">•</span>
            <a href="#gallery" className="hover:text-purple-300 transition-colors font-medium">Gallery</a>
            <span className="text-purple-700">•</span>
            <a href="#order" className="hover:text-purple-300 transition-colors font-medium">Order Online</a>
            <span className="text-purple-700">•</span>
            <a href="#contact" className="hover:text-purple-300 transition-colors font-medium">Contact</a>
          </div>

          <div className="text-center text-sm text-purple-300">
            <p>1818 College Point Blvd, Queens, NY 11356, USA</p>
            <p className="mt-2">(929) 822-5614</p>
          </div>

          <div className="pt-6 border-t border-purple-400/20 w-full max-w-4xl">
            <p className="text-center text-xs text-purple-400">
              © {new Date().getFullYear()} House of Saturn Cafe. Best Cafe, Online Ordering, Online deliveries, Cafe delivery in Queens, pickup in Queens, House of Saturn Cafe delivery and Pickup.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
