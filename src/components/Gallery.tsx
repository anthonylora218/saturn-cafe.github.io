import { Camera } from 'lucide-react';

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-950 via-purple-950 to-black"></div>

      <div className="absolute top-10 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Camera className="text-purple-300 mr-3" size={40} />
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Our Cosmic Cafe
            </h2>
          </div>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-400 via-purple-500 to-indigo-500 mx-auto mb-6"></div>
          <p className="text-purple-200 text-lg max-w-2xl mx-auto">
            Experience the cozy, astrology-themed atmosphere where cosmic vibes meet delicious coffee and fresh baked goods
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          <div className="relative group overflow-hidden rounded-2xl border-2 border-purple-400/30 bg-gradient-to-br from-purple-900/50 to-indigo-900/50 aspect-square transition-all hover:border-purple-300/50 hover:shadow-xl hover:shadow-purple-500/30">
            <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
              <Camera className="text-purple-300 mb-4 group-hover:scale-110 transition-transform" size={48} />
              <h3 className="text-white font-bold text-xl mb-2">Fresh Pastries</h3>
              <p className="text-purple-200">Artisan breads and pastries baked daily</p>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          </div>

          <div className="relative group overflow-hidden rounded-2xl border-2 border-indigo-400/30 bg-gradient-to-br from-indigo-900/50 to-purple-900/50 aspect-square transition-all hover:border-indigo-300/50 hover:shadow-xl hover:shadow-indigo-500/30">
            <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
              <Camera className="text-indigo-300 mb-4 group-hover:scale-110 transition-transform" size={48} />
              <h3 className="text-white font-bold text-xl mb-2">Specialty Drinks</h3>
              <p className="text-indigo-100">Unique coffee creations with cosmic flair</p>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          </div>

          <div className="relative group overflow-hidden rounded-2xl border-2 border-purple-400/30 bg-gradient-to-br from-purple-900/50 to-indigo-900/50 aspect-square transition-all hover:border-purple-300/50 hover:shadow-xl hover:shadow-purple-500/30">
            <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
              <Camera className="text-purple-300 mb-4 group-hover:scale-110 transition-transform" size={48} />
              <h3 className="text-white font-bold text-xl mb-2">Cozy Atmosphere</h3>
              <p className="text-purple-100">Perfect space for studying or relaxing</p>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          </div>

          <div className="relative group overflow-hidden rounded-2xl border-2 border-purple-400/30 bg-gradient-to-br from-purple-900/50 to-indigo-900/50 aspect-square transition-all hover:border-purple-300/50 hover:shadow-xl hover:shadow-purple-500/30">
            <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
              <Camera className="text-purple-300 mb-4 group-hover:scale-110 transition-transform" size={48} />
              <h3 className="text-white font-bold text-xl mb-2">Astrology Decor</h3>
              <p className="text-purple-100">Zodiac-themed space design</p>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          </div>

          <div className="relative group overflow-hidden rounded-2xl border-2 border-indigo-400/30 bg-gradient-to-br from-indigo-900/50 to-purple-900/50 aspect-square transition-all hover:border-indigo-300/50 hover:shadow-xl hover:shadow-indigo-500/30">
            <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
              <Camera className="text-indigo-300 mb-4 group-hover:scale-110 transition-transform" size={48} />
              <h3 className="text-white font-bold text-xl mb-2">Signature Drinks</h3>
              <p className="text-indigo-100">Try our famous mocha and macadamia milk drinks</p>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          </div>

          <div className="relative group overflow-hidden rounded-2xl border-2 border-purple-400/30 bg-gradient-to-br from-purple-900/50 to-indigo-900/50 aspect-square transition-all hover:border-purple-300/50 hover:shadow-xl hover:shadow-purple-500/30">
            <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
              <Camera className="text-purple-300 mb-4 group-hover:scale-110 transition-transform" size={48} />
              <h3 className="text-white font-bold text-xl mb-2">Seating Area</h3>
              <p className="text-purple-100">Tables, ottomans, and couch seating</p>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          </div>
        </div>

        <div className="text-center mt-16">
          <p className="text-purple-200 text-lg mb-6">
            These placeholders are ready for your cafe photos!
          </p>
          <p className="text-purple-300 font-semibold">
            Replace the Camera icons with your actual images to showcase your beautiful space
          </p>
        </div>
      </div>
    </section>
  );
}
