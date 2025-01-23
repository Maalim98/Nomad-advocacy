import React, { useState } from 'react';
import { FaUsers, FaHandshakeSimple, FaLightbulb, FaChartLine, FaHeart, FaGlobe, FaEnvelope } from 'react-icons/fa6';
import { motion } from 'framer-motion';
import supportCenter from '../../assets/images/sapport center.jpg';

const NetworkPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const networkStats = [
    { number: "50+", label: "Community Partners", icon: <FaHandshakeSimple /> },
    { number: "15", label: "Active Networks", icon: <FaUsers /> },
    { number: "1000+", label: "Members", icon: <FaHeart /> },
    { number: "24/7", label: "Support Available", icon: <FaGlobe /> }
  ];

  const initiatives = [
    {
      title: "Community Support Groups",
      description: "Our local support networks provide comprehensive peer counseling and community-based assistance. We believe in the power of community healing and mutual support.",
      icon: <FaUsers className="text-3xl" />,
      stats: ["500+ Members", "12 Active Groups", "Weekly Meetings"]
    },
    {
      title: "Partner Organizations",
      description: "Through strategic partnerships with local NGOs and community organizations, we're expanding our reach and impact across Garissa County.",
      icon: <FaHandshakeSimple className="text-3xl" />,
      stats: ["25 NGO Partners", "15 Government Agencies", "10 Corporate Partners"]
    },
    {
      title: "Innovation Hub",
      description: "Our innovation hub develops cutting-edge approaches to community-based GBV prevention and support, integrating technology with traditional methods.",
      icon: <FaLightbulb className="text-3xl" />,
      stats: ["5 Research Projects", "3 Mobile Apps", "Digital Training Platform"]
    }
  ];

  const impactMetrics = [
    {
      metric: "85%",
      description: "Increase in community awareness",
      icon: <FaChartLine className="text-2xl" />
    },
    {
      metric: "12,000+",
      description: "People reached through networks",
      icon: <FaUsers className="text-2xl" />
    },
    {
      metric: "95%",
      description: "Partner satisfaction rate",
      icon: <FaHeart className="text-2xl" />
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white"
    >
      {/* Hero Section */}
      <div className="relative h-[600px] overflow-hidden">
        <img 
          src={supportCenter}
          alt="Community Network"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/95 to-emerald-800/90 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <motion.h1 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-5xl md:text-6xl font-bold text-white mb-6"
              >
                Community Support Network
              </motion.h1>
              <motion.p 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-emerald-100 mb-8"
              >
                Building strong connections and support systems across Garissa County through 
                community partnerships and innovative local initiatives.
              </motion.p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-6xl py-16">
        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {networkStats.map((stat, index) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              key={index}
              className="bg-white rounded-2xl p-6 text-center shadow-lg border border-emerald-100"
            >
              <div className="text-emerald-600 mb-3">{stat.icon}</div>
              <div className="text-3xl font-bold text-emerald-600 mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Mission Statement */}
        <div className="text-center mb-20">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Network's Mission</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're building a resilient community network that provides comprehensive support, 
            fosters healing, and creates lasting positive change in Garissa County.
          </p>
        </div>

        {/* Initiatives Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {initiatives.map((initiative, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-emerald-600 mb-4">{initiative.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">{initiative.title}</h3>
              <p className="text-gray-600 mb-6">{initiative.description}</p>
              <ul className="space-y-2">
                {initiative.stats.map((stat, idx) => (
                  <li key={idx} className="text-sm text-emerald-600 flex items-center">
                    <span className="w-1.5 h-1.5 bg-emerald-600 rounded-full mr-2"></span>
                    {stat}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Impact Metrics */}
        <div className="bg-emerald-50 rounded-2xl p-12 mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Impact</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {impactMetrics.map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-emerald-600 mb-4">{item.icon}</div>
                <div className="text-4xl font-bold text-emerald-600 mb-2">{item.metric}</div>
                <div className="text-gray-600">{item.description}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="max-w-2xl mx-auto bg-white rounded-xl p-8 shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-1 text-sm font-medium">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 
                            focus:outline-none focus:ring-2 focus:ring-emerald-500 
                            focus:border-transparent"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-700 mb-1 text-sm font-medium">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 
                            focus:outline-none focus:ring-2 focus:ring-emerald-500 
                            focus:border-transparent"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div>
              <label htmlFor="organization" className="block text-gray-700 mb-1 text-sm font-medium">
                Organization (Optional)
              </label>
              <input
                type="text"
                id="organization"
                name="organization"
                value={formData.organization}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border border-gray-200 
                          focus:outline-none focus:ring-2 focus:ring-emerald-500 
                          focus:border-transparent"
                placeholder="Enter organization name"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-gray-700 mb-1 text-sm font-medium">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="3"
                className="w-full px-4 py-2 rounded-lg border border-gray-200 
                          focus:outline-none focus:ring-2 focus:ring-emerald-500 
                          focus:border-transparent resize-none"
                placeholder="How would you like to get involved?"
              ></textarea>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
              <a 
                href="mailto:ashrafzani585@gmail.com"
                className="flex items-center text-emerald-600 hover:text-emerald-700 text-sm"
              >
                <FaEnvelope className="mr-2" />
                ashrafzani585@gmail.com
              </a>
              <button
                type="submit"
                className="bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700 
                         transition-colors font-medium"
              >
                Submit Request
              </button>
            </div>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default NetworkPage; 