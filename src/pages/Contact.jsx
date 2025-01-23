import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaWhatsapp, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
  };

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <span className="text-emerald-600 font-medium text-lg mb-2 block">Want to Reach Us or Share Your Story?</span>
          <h1 className="text-4xl md:text-5xl font-bold text-emerald-800 mb-4">Let's Connect</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Whether you need support, want to share your journey, or join our mission to create positive change,
            we're here to listen. Your story matters to us.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h2 className="text-2xl font-semibold text-emerald-800 mb-6">Ways to Reach Us</h2>
              
              {/* Emergency Contact */}
              <div className="mb-8 bg-red-50 p-4 rounded-xl border border-red-100">
                <div className="text-slate-600-600 font-semibold mb-2">24/7 Emergency Support</div>
                <a 
                  href="tel:0717069813" 
                  className="flex items-center gap-3 text-2xl font-bold text-red-600 hover:text-red-700 transition-colors"
                >
                  <FaPhone className="animate-pulse" />
                  0717 069 813
                </a>
                <p className="text-sm text-slate-600 mt-2">
                  Available 24/7 for immediate assistance and support
                </p>
              </div>

              {/* Other Contact Methods */}
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 hover:bg-gray-50 rounded-lg transition-colors">
                  <FaEnvelope className="text-emerald-600 text-xl mt-1" />
                  <div>
                    <div className="font-semibold text-gray-800">Email Us</div>
                    <p className="text-sm text-gray-600 mb-1">For general inquiries and support</p>
                    <a href="mailto:support@example.com" className="text-emerald-600 hover:text-emerald-700">
                      support@example.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 hover:bg-gray-50 rounded-lg transition-colors">
                  <FaWhatsapp className="text-emerald-600 text-xl mt-1" />
                  <div>
                    <div className="font-semibold text-gray-800">WhatsApp Support</div>
                    <p className="text-sm text-gray-600 mb-1">Chat with us discreetly</p>
                    <a href="https://wa.me/254717069813" className="text-emerald-600 hover:text-emerald-700">
                      +254 717 069 813
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 hover:bg-gray-50 rounded-lg transition-colors">
                  <FaMapMarkerAlt className="text-emerald-600 text-xl mt-1" />
                  <div>
                    <div className="font-semibold text-gray-800">Visit Us</div>
                    <p className="text-sm text-gray-600 mb-1">Our main office</p>
                    <address className="text-gray-600 not-italic">
                      Garissa Town, <br />
                      Garissa County, Kenya
                    </address>
                  </div>
                </div>
              </div>
            </div>

            {/* Safety Notice */}
            <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-200">
              <h3 className="text-lg font-semibold text-yellow-800 mb-2">Your Safety Comes First</h3>
              <p className="text-yellow-700">
                If you're in immediate danger, please call emergency services at 999 or our 24/7 helpline. 
                We're here to help, day or night.
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            className="bg-white p-8 rounded-2xl shadow-lg"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <h2 className="text-2xl font-semibold text-emerald-800 mb-2">Share Your Story</h2>
            <p className="text-gray-600 mb-6">
              Your voice matters. Fill out the form below, and we'll get back to you within 24 hours.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  placeholder="Your email"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  placeholder="Share your story or message..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-emerald-600 text-white py-3 px-6 rounded-lg font-semibold
                         hover:bg-emerald-700 transition-colors duration-200 flex items-center justify-center gap-2"
              >
                Send Message
                <span className="animate-pulse">→</span>
              </button>
            </form>

            <p className="text-sm text-gray-500 mt-6 text-center">
              We respect your privacy. All communications are kept strictly confidential.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
