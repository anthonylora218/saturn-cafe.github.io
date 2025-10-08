import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    text: "Professional work, excellent customer service, and outstanding quality. Golden Key Construction exceeded our expectations!",
    author: "Satisfied Customer",
    rating: 5
  },
  {
    text: "Best roofing company in the area. Fast response time and quality workmanship. Highly recommend!",
    author: "Happy Homeowner",
    rating: 5
  },
  {
    text: "From start to finish, the team was professional and thorough. Our new roof looks amazing!",
    author: "Residential Client",
    rating: 5
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
    <section className="py-24 relative overflow-hidden bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <div className="w-20 h-1 bg-yellow-400 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white border-2 border-blue-100 rounded-2xl p-8 md:p-16 min-h-[300px] flex flex-col items-center justify-center shadow-xl">
            <div className="flex mb-6">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="text-yellow-400 fill-yellow-400" size={32} />
              ))}
            </div>

            <div className="text-center space-y-6">
              <p className="text-gray-700 text-lg md:text-xl leading-relaxed max-w-2xl">
                "{testimonials[currentIndex].text}"
              </p>
              <p className="text-blue-600 font-semibold text-lg">
                — {testimonials[currentIndex].author}
              </p>
            </div>

            <button
              onClick={prev}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-blue-600 hover:bg-blue-700 rounded-full p-3 transition-all transform hover:scale-110 shadow-lg"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="text-white" size={24} />
            </button>

            <button
              onClick={next}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-blue-600 hover:bg-blue-700 rounded-full p-3 transition-all transform hover:scale-110 shadow-lg"
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
                  index === currentIndex ? 'bg-blue-600 w-8' : 'bg-blue-300'
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
