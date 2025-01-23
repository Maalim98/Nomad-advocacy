import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaUsers, FaHandshake, FaMosque } from 'react-icons/fa';

const CommunityMobilization = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-emerald-900 py-16">
        <div className="max-w-5xl mx-auto px-6">
          <Link 
            to="/who-we-are/about" 
            className="inline-flex items-center text-emerald-100 hover:text-white mb-8 group"
          >
            <FaArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to About Us
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              The 1 Million Fathers Movement
            </h1>
            <p className="text-xl text-emerald-100 max-w-2xl">
              A grassroots revolution in Garissa, uniting communities against gender-based violence
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* Overview Section */}
        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-xl text-gray-600 leading-relaxed">
            In the heart of Garissa County, a wave of change is emerging, powered by the collective strength 
            of communities rallying against gender-based violence (GBV).
          </p>
        </div>

        {/* Key Pillars */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: <FaUsers className="w-6 h-6" />,
              title: "Community Leaders",
              desc: "Engaging respected elders and religious figures in leading change"
            },
            {
              icon: <FaHandshake className="w-6 h-6" />,
              title: "Cultural Integration",
              desc: "Aligning our approach with traditional values and customs"
            },
            {
              icon: <FaMosque className="w-6 h-6" />,
              title: "Religious Support",
              desc: "Working closely with local Islamic institutions and scholars"
            }
          ].map((pillar, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="text-emerald-600 mb-4 p-3 bg-emerald-50 rounded-full w-fit">
                {pillar.icon}
              </div>
              <h3 className="font-bold text-xl mb-2 text-gray-900">{pillar.title}</h3>
              <p className="text-gray-600">{pillar.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Quote Section */}
        <div className="bg-emerald-50 p-8 rounded-xl mb-16">
          <blockquote className="text-xl italic text-emerald-800 mb-4">
            "This movement is not just a campaign—it's a revolution in how our community protects and 
            empowers its members."
          </blockquote>
          <cite className="text-sm text-emerald-600">- Community Elder, Garissa</cite>
        </div>

        {/* Impact Metrics */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-emerald-800 mb-8">Our Progress</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { number: "100+", label: "Community Leaders Engaged" },
              { number: "45", label: "Communities Reached" },
              { number: "1,000+", label: "Fathers Participating" },
              { number: "24/7", label: "Support Available" }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-6 bg-white rounded-lg shadow-sm border border-gray-100"
              >
                <div className="text-3xl font-bold text-emerald-600 mb-2">{stat.number}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-emerald-900 text-white p-8 rounded-xl text-center">
          <h2 className="text-2xl font-bold mb-4">Join the Movement</h2>
          <p className="text-emerald-100 mb-6 max-w-2xl mx-auto">
            Be part of the change in Garissa. Together, we can create a safer community for everyone.
          </p>
          <button className="bg-white text-emerald-900 px-8 py-3 rounded-full font-semibold hover:bg-emerald-50 transition-colors">
            Get Involved
          </button>
        </div>
      </div>
    </div>
  );
};

export default CommunityMobilization; 