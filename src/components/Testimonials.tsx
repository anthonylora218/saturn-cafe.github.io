import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    text: "Absolutely amazing. Quaint little hole in the wall. Clean and cozy inside with a really cute astrology-ish theme. The barista was really genuine and sweet. I got the mango magic of Macadamia Milk!",
    author: "Customer Review"
  },
  {
    text: "If you come by, do get the mocha! Their drip coffee is also very nice.",
    author: "Customer Review"
  },
  {
    text: "They've two small tables by the window, two little ottomans, and a couch. I had a lovely time studying here.",
    author: "Customer Review"
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950 to-indigo-950"></div>
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-indigo-400/20 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 1000 1000">
            <path d="M 500 100 L 550 300 L 750 350 L 600 500 L 650 700 L 500 600 L 350 700 L 400 500 L 250 350 L 450 300 Z" stroke="#c084fc" strokeWidth="2" fill="none" />
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Read what our customers have to say...
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-400 via-purple-500 to-indigo-500 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-gradient-to-br from-purple-900/40 via-indigo-900/40 to-purple-800/40 border-2 border-purple-500/30 rounded-3xl p-8 md:p-16 backdrop-blur-md min-h-[300px] flex flex-col items-center justify-center shadow-2xl shadow-purple-900/50">
            <Quote className="text-purple-300 mb-6" size={56} />

            <div className="text-center space-y-6">
              <p className="text-white text-lg md:text-xl leading-relaxed max-w-2xl font-medium">
                {testimonials[currentIndex].text}
              </p>
              <p className="text-purple-300 font-semibold">
                — {testimonials[currentIndex].author}
              </p>
            </div>

            <button
              onClick={prev}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-purple-800/50 hover:bg-purple-700/60 backdrop-blur-sm border-2 border-purple-400/40 rounded-full p-3 transition-all transform hover:scale-110"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="text-white" size={24} />
            </button>

            <button
              onClick={next}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-purple-800/50 hover:bg-purple-700/60 backdrop-blur-sm border-2 border-purple-400/40 rounded-full p-3 transition-all transform hover:scale-110"
              aria-label="Next testimonial"
            >
              <ChevronRight className="text-white" size={24} />
            </button>
          </div>

          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? 'bg-purple-400 w-8' : 'bg-purple-800'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
