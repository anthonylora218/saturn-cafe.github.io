import { ArrowRight, Truck, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-950 via-indigo-950 to-black"></div>

      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-purple-500/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-indigo-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 1000 1000">
          <circle cx="200" cy="200" r="100" stroke="#c084fc" strokeWidth="2" fill="none" opacity="0.5" />
          <circle cx="800" cy="300" r="150" stroke="#a78bfa" strokeWidth="2" fill="none" opacity="0.5" />
          <circle cx="600" cy="700" r="80" stroke="#818cf8" strokeWidth="2" fill="none" opacity="0.5" />
          <path d="M 100 500 Q 300 300 500 500 T 900 500" stroke="#c084fc" strokeWidth="2" fill="none" opacity="0.3" />
          <circle cx="400" cy="150" r="3" fill="#fbbf24" opacity="0.8" />
          <circle cx="700" cy="500" r="2" fill="#60a5fa" opacity="0.7" />
          <circle cx="150" cy="650" r="2" fill="#c084fc" opacity="0.8" />
        </svg>
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              opacity: Math.random() * 0.7 + 0.3
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <div className="mb-8 bg-purple-900/30 backdrop-blur-md border-2 border-purple-500/40 rounded-full px-8 py-3 flex items-center space-x-3 shadow-lg shadow-purple-500/20">
            <Truck size={20} className="text-purple-300" />
            <span className="text-purple-200 font-medium">FREE DELIVERY! Up to 5 miles, on orders above $30</span>
          </div>

          <div className="mb-6">
            <Sparkles className="text-purple-400 mx-auto animate-pulse" size={40} />
          </div>

          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight drop-shadow-2xl">
            Unlock Your Senses
          </h1>

          <p className="text-2xl md:text-3xl text-purple-300 mb-4 font-semibold drop-shadow-lg">
            Explore the House of Saturn
          </p>

          <p className="text-lg text-purple-400 mb-12 max-w-2xl">
            Where cosmic vibes meet artisan coffee and fresh pastries
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#order"
              className="bg-gradient-to-r from-purple-700 to-indigo-700 hover:from-purple-600 hover:to-indigo-600 text-white font-bold px-10 py-5 rounded-full transition-all flex items-center justify-center space-x-2 group shadow-2xl shadow-purple-500/40 transform hover:scale-105"
            >
              <span>Order Delivery & Pickup</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#menu"
              className="border-2 border-purple-500 hover:border-purple-400 bg-purple-500/10 backdrop-blur-sm text-purple-300 hover:text-white font-semibold px-10 py-5 rounded-full transition-all transform hover:scale-105"
            >
              View Menu
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-2 border-purple-400/60 rounded-full flex items-start justify-center p-2">
          <div className="w-2 h-3 bg-purple-400 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
