import { MapPin, Clock, Phone, Instagram } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-950 via-indigo-950 to-black"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Contact Us
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-400 via-purple-500 to-indigo-500 mx-auto"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-purple-900/40 via-indigo-900/40 to-purple-800/40 border-2 border-purple-500/30 rounded-2xl p-6 backdrop-blur-md shadow-xl shadow-purple-900/30">
                <div className="flex items-start space-x-4">
                  <Clock className="text-purple-300 flex-shrink-0" size={28} />
                  <div>
                    <h3 className="text-white text-lg font-bold mb-3">Opening Hours</h3>
                    <div className="space-y-1 text-purple-100">
                      <p>Monday-Friday: 8AM-5PM</p>
                      <p>Saturday: 9AM-5PM</p>
                      <p>Sunday: 9AM-4PM</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-900/40 via-indigo-900/40 to-purple-800/40 border-2 border-purple-500/30 rounded-2xl p-6 backdrop-blur-md shadow-xl shadow-purple-900/30">
                <div className="flex items-start space-x-4">
                  <MapPin className="text-indigo-300 flex-shrink-0" size={28} />
                  <div>
                    <h3 className="text-white text-lg font-bold mb-3">Address</h3>
                    <p className="text-purple-100">
                      1818 College Point Blvd<br />
                      Queens, NY 11356, USA
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-900/40 via-indigo-900/40 to-purple-800/40 border-2 border-purple-500/30 rounded-2xl p-6 backdrop-blur-md shadow-xl shadow-purple-900/30">
                <div className="flex items-start space-x-4">
                  <Phone className="text-purple-300 flex-shrink-0" size={28} />
                  <div>
                    <h3 className="text-white text-lg font-bold mb-3">Phone</h3>
                    <p className="text-purple-100">(929) 822-5614</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-900/40 via-indigo-900/40 to-purple-800/40 border-2 border-purple-500/30 rounded-2xl p-6 backdrop-blur-md shadow-xl shadow-purple-900/30">
                <div className="flex items-start space-x-4">
                  <Instagram className="text-indigo-300 flex-shrink-0" size={28} />
                  <div>
                    <h3 className="text-white text-lg font-bold mb-3">We're on Social Media</h3>
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-300 hover:text-purple-200 transition-colors font-medium"
                    >
                      Follow us on Instagram
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/10 border border-purple-500/20 rounded-2xl overflow-hidden backdrop-blur-sm h-[600px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.8834!2d-73.8465!3d40.7855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQ3JzA3LjgiTiA3M8KwNTAnNDcuNCJX!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="House of Saturn Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
