import { MapPin, Heart, Sparkles } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-800 via-indigo-900 to-purple-950"></div>
      <div className="absolute top-20 right-20 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Support Local. Order Direct.
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-400 via-purple-500 to-indigo-500 mx-auto mb-8"></div>
          </div>

          <div className="bg-gradient-to-br from-purple-900/40 via-indigo-900/40 to-purple-800/40 border-2 border-purple-500/30 rounded-3xl p-8 md:p-12 backdrop-blur-md shadow-2xl shadow-purple-900/50">
            <div className="space-y-6 text-purple-100 text-lg leading-relaxed">
              <div className="flex items-start space-x-4">
                <MapPin className="text-purple-300 flex-shrink-0 mt-1" size={28} />
                <p>
                  Enjoy the best Cafe in Queens. We're located at <span className="text-white">1818 College Point Blvd, Queens, NY 11356, USA</span> and deliver up to 5 miles from our location.
                </p>
              </div>

              <div className="flex items-start space-x-4">
                <Sparkles className="text-indigo-300 flex-shrink-0 mt-1" size={28} />
                <p>
                  Order here directly through our official website.
                </p>
              </div>

              <div className="flex items-start space-x-4">
                <Heart className="text-purple-400 flex-shrink-0 mt-1" size={28} />
                <p>
                  Thanks for supporting local restaurants by ordering direct and not through 3rd party platforms!
                </p>
              </div>

              <p className="text-center pt-6 text-xl text-purple-200 font-semibold">
                Feel free to make a pickup order as well!
              </p>
            </div>

            <div className="mt-10 text-center">
              <a
                href="#order"
                className="inline-block bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold px-10 py-5 rounded-full transition-all shadow-xl shadow-purple-500/50 transform hover:scale-105"
              >
                Order Delivery & Pickup
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
