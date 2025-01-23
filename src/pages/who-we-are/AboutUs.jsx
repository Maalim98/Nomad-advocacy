import React from 'react';
import { motion } from 'framer-motion';
import { FaHandHoldingHeart, FaUsers, FaLightbulb, FaBalanceScale } from 'react-icons/fa';
import womanImage from '../../assets/images/halimo.jpg'; // Ensure this path is correct
import { Link } from 'react-router-dom';

export const AboutUs = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Hero Section with Parallax Effect */}
      <div className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={womanImage}
            alt="Garissa Community"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-emerald-900/70 mix-blend-multiply" />
        </div>
        <motion.div 
          className="relative h-full flex items-center justify-center text-center px-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Our Journey in Garissa
            </h1>
            <p className="text-xl md:text-2xl text-emerald-100 max-w-3xl mx-auto">
              Supporting over 1000 survivors since 2014
            </p>
          </div>
        </motion.div>
      </div>

      {/* Mission Statement Card */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-10">
        <motion.div 
          className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <p className="text-gray-600 leading-relaxed mb-6">
            Since our establishment in Garissa in 2014, the Gender-based Violence  Centre has been a beacon of hope 
            in Kenya's North Eastern region. Our center has played a pivotal role in shaping local and national 
            responses to Gender-Based Violence, particularly in adapting the Sexual Offenses Act 2006 to address 
            the unique challenges faced by the Garissa community.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaHandHoldingHeart className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-emerald-800 mb-2">Our Mission</h3>
              <p className="text-gray-600">Leading the fight against gender-based violence in North Eastern Kenya</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaLightbulb className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-emerald-800 mb-2">Our Vision</h3>
              <p className="text-gray-600">A Garissa where every person lives free from violence</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaBalanceScale className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-emerald-800 mb-2">Our Values</h3>
              <p className="text-gray-600">Dignity, respect, and justice for all</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Impact Numbers */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl p-12 text-white"
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-center mb-12">Our Impact in Numbers</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: "58,000+", label: "Survivors Supported" },
                { number: "24/7", label: "Support Available" },
                { number: "100+", label: "Community Leaders" },
                { number: "15", label: "Outreach Centers" }
              ].map((stat, index) => (
                <motion.div 
                  key={index}
                  className="text-center p-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-4xl lg:text-5xl font-bold mb-2">{stat.number}</div>
                  <div className="text-emerald-100 text-sm lg:text-base">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Key Initiatives Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="prose prose-lg max-w-none"
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-emerald-800 text-center mb-12">Key Initiatives</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div className="group">
                  <h3 className="text-xl font-semibold text-emerald-700">Community Mobilization</h3>
                  <p className="text-gray-600">
                    Our "1 Million Fathers Movement" has gained significant traction in Garissa, engaging local religious 
                    leaders and community elders in the fight against GBV, while respecting cultural values.
                  </p>
                  <Link 
                    to="/blogs/community-mobilization"
                    className="inline-block mt-4 text-emerald-600 hover:text-emerald-700 font-medium group-hover:underline"
                  >
                    Read More →
                  </Link>
                </div>

                <div className="group">
                  <h3 className="text-xl font-semibold text-emerald-700">Law Enforcement Partnership</h3>
                  <p className="text-gray-600">
                    Working with the Garissa County Government, we've established a network of gender-friendly desks 
                    across police stations in the region, with specially trained officers who handle cases with cultural 
                    sensitivity.
                  </p>
                  <Link 
                    to="/blogs/law-enforcement"
                    className="inline-block mt-4 text-emerald-600 hover:text-emerald-700 font-medium group-hover:underline"
                  >
                    Read More →
                  </Link>
                </div>
              </div>

              <div className="space-y-6">
                <div className="group">
                  <h3 className="text-xl font-semibold text-emerald-700">Healthcare Integration</h3>
                  <p className="text-gray-600">
                    We've pioneered the establishment of GBV Recovery Centres in Garissa's public health facilities, 
                    ensuring accessible care for survivors in remote areas.
                  </p>
                  <Link 
                    to="/blogs/healthcare-integration"
                    className="inline-block mt-4 text-emerald-600 hover:text-emerald-700 font-medium group-hover:underline"
                  >
                    Read More →
                  </Link>
                </div>

                <div className="group">
                  <h3 className="text-xl font-semibold text-emerald-700">Cultural Engagement</h3>
                  <p className="text-gray-600">
                    Our partnership with local Islamic leaders and community elders has been instrumental in creating 
                    sustainable change while respecting traditional values and religious teachings.
                  </p>
                  <Link 
                    to="/blogs/cultural-engagement"
                    className="inline-block mt-4 text-emerald-600 hover:text-emerald-700 font-medium group-hover:underline"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Call to Action */}
      <motion.div 
        className="bg-emerald-800 text-white py-20"
        variants={fadeIn}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Us in Making a Difference</h2>
          <p className="text-emerald-100 mb-8 max-w-2xl mx-auto">
            Together, we can create a safer and more equitable Garissa for all
          </p>
          <button className="bg-white text-emerald-800 px-8 py-3 rounded-full font-semibold hover:bg-emerald-100 transition-colors">
            Get Involved
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutUs;
