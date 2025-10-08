import { Award, Clock, Shield } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 relative bg-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          <div>
            <div className="mb-6">
              <p className="text-blue-600 font-semibold mb-2 tracking-wider">Experience A Better Way To Build</p>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                ABOUT
              </h2>
              <div className="w-20 h-1 bg-yellow-400"></div>
            </div>

            <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
              <p>
                Golden Key Construction Group is a <strong>Residential, Commercial Roofing -Siding & Construction</strong> Company with 2 Locations: Staten Island & New Jersey.
              </p>

              <p>
                We have founded our group on the principles of integrity, goodwill and reliability.
              </p>

              <p>
                We rely highly on customer's experience and feedback. Our passion and core aim is to provide excellence and timely services.
              </p>

              <p>
                Our customized services run the spectrum, from pre-construction and construction project managements, to design/build construction and post-construction services. We work closely with our customers to ensure the projects envision their expectancies within the desired timeframe.
              </p>
            </div>
          </div>

          <div
            className="relative h-[600px] rounded-lg overflow-hidden shadow-2xl"
            style={{
              backgroundImage: 'url(https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent"></div>
          </div>
        </div>

        <div className="mt-20 bg-yellow-400 py-12">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Award className="text-blue-900" size={40} />
                </div>
                <h3 className="text-2xl font-bold text-blue-900 mb-3">Experienced Staff</h3>
                <p className="text-blue-900">
                  We have been in this business for 25 years and our philosophy is to give our customers the best service, that's why our reviews
                </p>
              </div>

              <div className="text-center">
                <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Shield className="text-blue-900" size={40} />
                </div>
                <h3 className="text-2xl font-bold text-blue-900 mb-3">GAF Master Elite®</h3>
                <p className="text-blue-900">
                  We give our customers 50 years warranty on Material and 25 Years on Workmanship.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Clock className="text-blue-900" size={40} />
                </div>
                <h3 className="text-2xl font-bold text-blue-900 mb-3">Quick Response</h3>
                <p className="text-blue-900">
                  24/7 Service! We offer our 24 Hour Emergency Roof Repair Response Program. You can just call us at (929) 564-4310 We will be available immediately!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
