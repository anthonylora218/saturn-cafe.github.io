import { Home, Hammer, Wrench } from 'lucide-react';

export default function Services() {
  return (
    <section id="services" className="py-24 relative bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            SERVICES
          </h2>
          <div className="w-20 h-1 bg-yellow-400 mx-auto"></div>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
            <div className="h-64 relative">
              <img
                src="https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Roofing services"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent"></div>
            </div>
            <div className="p-8">
              <div className="flex items-center mb-4">
                <div className="bg-yellow-400 p-3 rounded-lg mr-4">
                  <Home className="text-blue-900" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Roofing</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Reparing, replacing and installing roofs on residential and commercial properties. 50 Years Warranty! GAF Certified! Hundreds of people has trusted us.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
            <div className="h-64 relative">
              <img
                src="https://images.pexels.com/photos/280221/pexels-photo-280221.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Siding services"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent"></div>
            </div>
            <div className="p-8">
              <div className="flex items-center mb-4">
                <div className="bg-yellow-400 p-3 rounded-lg mr-4">
                  <Hammer className="text-blue-900" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Siding</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Golden Key Construction offers professional siding services! We offer top quality and guaranteed products to our clients.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
            <div className="h-64 relative">
              <img
                src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Masonry services"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent"></div>
            </div>
            <div className="p-8">
              <div className="flex items-center mb-4">
                <div className="bg-yellow-400 p-3 rounded-lg mr-4">
                  <Wrench className="text-blue-900" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Masonry</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Golden Key Construction, located in Staten Island & New Jersey, offers one of the largest selections of masonry services in the industry.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
