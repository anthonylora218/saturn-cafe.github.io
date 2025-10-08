import { Phone, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 via-blue-900/85 to-blue-800/90"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          <div className="mb-8 bg-blue-800/60 backdrop-blur-sm border border-yellow-400/30 rounded-lg px-6 py-3 flex items-center space-x-2 shadow-lg">
            <Star className="text-yellow-400 fill-yellow-400" size={20} />
            <span className="text-white font-semibold">5.0</span>
            <span className="text-gray-200">80 REVIEWS</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-2xl">
            Residential-Commercial
          </h1>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight drop-shadow-2xl">
            Roofing-Siding
          </h2>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight drop-shadow-2xl">
            &
          </h2>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-12 leading-tight drop-shadow-2xl">
            Construction Company
          </h2>

          <div className="flex flex-col items-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <div className="h-px w-16 bg-yellow-400 mr-4"></div>
              <div className="h-px w-16 bg-yellow-400 ml-4"></div>
            </div>
          </div>

          <a
            href="tel:+19295644310"
            className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold px-12 py-6 rounded-lg transition-all flex items-center space-x-3 shadow-2xl transform hover:scale-105 text-2xl md:text-3xl"
          >
            <Phone size={32} />
            <span>Call Us: +1 (929) 564-4310</span>
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-2 border-yellow-400/60 rounded-full flex items-start justify-center p-2">
          <div className="w-2 h-3 bg-yellow-400 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
