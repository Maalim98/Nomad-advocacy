import React from 'react';
import { FaPhone, FaEnvelope, FaUsers, FaCalendarCheck, FaShieldAlt, FaGavel, FaBook } from 'react-icons/fa';

const GetSupport = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-blue-600 mb-6">
            Get Support
          </h1>
          <p className="text-xl text-gray-600">
            You're not alone. Our support network is here for you 24/7.
          </p>
        </div>

        {/* Emergency Contact Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-gradient-to-r from-rose-50 to-rose-100 p-8 rounded-2xl shadow-lg border border-rose-200">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-rose-500 p-3 rounded-full">
                <FaPhone className="text-white text-xl" />
              </div>
              <h2 className="text-3xl font-bold text-rose-900">Emergency Support</h2>
            </div>
            <p className="text-rose-800 mb-6 text-lg">If you're in immediate danger, please call:</p>
            <div className="grid sm:grid-cols-2 gap-4">
              <a href="tel:911" 
                className="flex items-center gap-4 bg-white/50 p-4 rounded-xl hover:bg-white transition-all duration-300">
                <span className="text-xl font-bold text-rose-800">Emergency:</span>
                <span className="text-2xl font-bold text-rose-700">911</span>
              </a>
              <a href="tel:0800-150-150" 
                className="flex items-center gap-4 bg-white/50 p-4 rounded-xl hover:bg-white transition-all duration-300">
                <span className="text-xl font-bold text-rose-800">Hotline:</span>
                <span className="text-2xl font-bold text-rose-700">0800-150-150</span>
              </a>
            </div>
          </div>
        </div>

        {/* Support Options Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-teal-500 p-3 rounded-full group-hover:scale-110 transition-transform duration-300">
                <FaCalendarCheck className="text-white text-xl" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Counseling Services</h3>
            </div>
            <p className="text-gray-600 mb-8 text-lg">
              Connect with our professional counselors for confidential support and guidance.
            </p>
            <button className="w-full bg-gradient-to-r from-teal-500 to-teal-600 text-white px-6 py-3 rounded-xl hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
              Schedule Consultation
            </button>
          </div>

          <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-blue-500 p-3 rounded-full group-hover:scale-110 transition-transform duration-300">
                <FaUsers className="text-white text-xl" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Support Groups</h3>
            </div>
            <p className="text-gray-600 mb-8 text-lg">
              Join our support groups to connect with others and share experiences.
            </p>
            <button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-xl hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
              Find a Group
            </button>
          </div>
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-lg mb-16">
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-indigo-500 p-3 rounded-full">
              <FaEnvelope className="text-white text-xl" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800">Contact Us</h2>
          </div>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-700 mb-2 font-medium">Name</label>
              <input
                type="text"
                id="name"
                className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 mb-2 font-medium">Email</label>
              <input
                type="email"
                id="email"
                className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300"
                placeholder="Your email"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700 mb-2 font-medium">Message</label>
              <textarea
                id="message"
                rows="4"
                className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300"
                placeholder="How can we help you?"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-indigo-500 to-indigo-600 text-white px-8 py-3 rounded-xl hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Additional Resources */}
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Additional Resources</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: FaShieldAlt, title: 'Safety Planning', desc: 'Learn how to create a personal safety plan' },
              { icon: FaGavel, title: 'Legal Resources', desc: 'Information about legal support and rights' },
              { icon: FaBook, title: 'Self-Help Guide', desc: 'Access our comprehensive self-help materials' }
            ].map((resource, index) => (
              <a
                key={index}
                href="#"
                className="group bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-gray-100 p-3 rounded-full group-hover:scale-110 transition-transform duration-300">
                    <resource.icon className="text-gray-600 text-xl" />
                  </div>
                  <h3 className="font-bold text-xl text-gray-800">{resource.title}</h3>
                </div>
                <p className="text-gray-600">{resource.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetSupport;
