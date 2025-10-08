import { MapPin, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Contact
          </h2>
          <div className="w-20 h-1 bg-yellow-400 mx-auto"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div className="space-y-8">
              <div className="bg-blue-50 border-l-4 border-blue-600 rounded-lg p-6 shadow-lg">
                <div className="flex items-start space-x-4">
                  <Phone className="text-blue-600 flex-shrink-0" size={28} />
                  <div>
                    <h3 className="text-gray-900 text-lg font-bold mb-3">Phone</h3>
                    <a href="tel:+19295644310" className="text-blue-600 hover:text-blue-700 text-xl font-semibold">
                      +1 (929) 564-4310
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-600 rounded-lg p-6 shadow-lg">
                <div className="flex items-start space-x-4">
                  <MapPin className="text-blue-600 flex-shrink-0" size={28} />
                  <div>
                    <h3 className="text-gray-900 text-lg font-bold mb-3">Locations</h3>
                    <div className="space-y-2 text-gray-700">
                      <p className="font-semibold">Staten Island & New Jersey</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-lg p-8 shadow-xl text-white">
                <h3 className="text-2xl font-bold mb-4">24/7 Emergency Service</h3>
                <p className="mb-6 leading-relaxed">
                  We offer our 24 Hour Emergency Roof Repair Response Program. Call us anytime - we will be available immediately!
                </p>
                <a
                  href="tel:+19295644310"
                  className="inline-block bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold px-8 py-3 rounded transition-all"
                >
                  Call Now
                </a>
              </div>
            </div>

            <div className="bg-gray-100 rounded-lg overflow-hidden shadow-xl h-[600px] flex items-center justify-center">
              <div className="text-center text-gray-500 p-8">
                <MapPin size={64} className="mx-auto mb-4 text-blue-600" />
                <p className="text-lg">Serving Staten Island & New Jersey</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
