import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaHeart, FaHandHoldingMedical, FaUserMd, FaClinicMedical } from 'react-icons/fa';

const HealthcareIntegration = () => {
  const services = [
    {
      icon: <FaHandHoldingMedical />,
      title: "Medical Care",
      description: "24/7 access to essential medical treatments"
    },
    {
      icon: <FaHeart />,
      title: "Counseling",
      description: "Professional psychological support services"
    },
    {
      icon: <FaUserMd />,
      title: "Trained Staff",
      description: "Specialized healthcare workers"
    },
    {
      icon: <FaClinicMedical />,
      title: "Safe Spaces",
      description: "Confidential and culturally sensitive environments"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50/50 to-white">
      {/* Hero Section */}
      <div className="bg-emerald-800 text-white relative">
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '32px 32px'
          }}
        />
        
        <div className="max-w-4xl mx-auto px-6 py-24 relative">
          <Link 
            to="/who-we-are/about" 
            className="inline-flex items-center text-emerald-100 hover:text-white mb-12 group"
          >
            <FaArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to About Us
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Healthcare Integration
            </h1>
            <p className="text-xl text-emerald-100 max-w-2xl">
              Building a network of care and support across Garissa County
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Key Services Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 -mt-16 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-emerald-600 text-2xl mb-3">{service.icon}</div>
              <h3 className="font-semibold text-emerald-800 mb-2">{service.title}</h3>
              <p className="text-sm text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="prose prose-lg max-w-none"
        >
          {/* Impact Stats */}
          <div className="my-12 grid grid-cols-3 gap-6 text-center">
            <div className="bg-emerald-50 rounded-lg p-6">
              <div className="text-3xl font-bold text-emerald-700 mb-2">24/7</div>
              <div className="text-sm text-emerald-600">Care Available</div>
            </div>
            <div className="bg-emerald-50 rounded-lg p-6">
              <div className="text-3xl font-bold text-emerald-700 mb-2">100+</div>
              <div className="text-sm text-emerald-600">Trained Staff</div>
            </div>
            <div className="bg-emerald-50 rounded-lg p-6">
              <div className="text-3xl font-bold text-emerald-700 mb-2">15</div>
              <div className="text-sm text-emerald-600">Recovery Centers</div>
            </div>
          </div>

          <p className="text-xl leading-relaxed">
            In remote regions like Garissa County, access to comprehensive healthcare has long been a challenge. 
            However, for survivors of gender-based violence (GBV), this challenge has been even greater.
          </p>

          {/* Featured Quote */}
          <div className="my-12 p-8 bg-gradient-to-r from-emerald-50 to-white rounded-lg border-l-4 border-emerald-500">
            <p className="text-xl text-emerald-800 font-medium italic mb-4">
              "These centers are more than medical facilities—they are beacons of hope, offering survivors 
              a path to recovery and renewal."
            </p>
            <cite className="text-emerald-600 not-italic">- Healthcare Provider</cite>
          </div>

          <div className="grid md:grid-cols-2 gap-8 my-12">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-emerald-800 font-semibold mb-3">Holistic Care</h3>
              <p className="text-gray-600 m-0">
                Our centers provide comprehensive support including medical treatment, counseling, and social services.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-emerald-800 font-semibold mb-3">Cultural Sensitivity</h3>
              <p className="text-gray-600 m-0">
                Services are delivered with respect for local traditions and values, ensuring comfort for all survivors.
              </p>
            </div>
          </div>

          <p>
            The integration of GBV Recovery Centres into Garissa's public healthcare system ensures that survivors can 
            access care without stigma or fear. For women and children in remote areas, who may previously have had to 
            travel long distances or forego care altogether, these centers provide a much-needed safety net.
          </p>

          <p>
            Beyond providing direct care, these centers serve as hubs for education and advocacy. Healthcare workers 
            receive specialized training to handle GBV cases with empathy and professionalism, ensuring survivors feel 
            supported throughout their recovery journey.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default HealthcareIntegration; 