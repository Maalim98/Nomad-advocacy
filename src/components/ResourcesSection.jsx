import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaPhoneAlt, FaHospital, FaBalanceScale, 
  FaHome, FaHandHoldingHeart, FaGraduationCap,
  FaUsers, FaBookMedical, FaHandsHelping 
} from 'react-icons/fa';

const ResourcesSection = () => {
  const resources = [
    {
      title: "24/7 Crisis Support",
      icon: <FaPhoneAlt className="text-2xl" />,
      description: "Immediate support available in English, Swahili, and Somali",
      services: [
        "Emergency hotline: 0800-xxx-xxx",
        "SMS support: 21393",
        "WhatsApp support available",
        "Confidential crisis counseling"
      ]
    },
    {
      title: "Medical Services",
      icon: <FaHospital className="text-2xl" />,
      description: "Comprehensive medical care and support services",
      services: [
        "Emergency medical care",
        "Post-assault care",
        "Referral to specialized care",
        "Mobile clinic services"
      ]
    },
    {
      title: "Legal Aid",
      icon: <FaBalanceScale className="text-2xl" />,
      description: "Free legal assistance and advocacy support",
      services: [
        "Legal consultation",
        "Court representation",
        "Document preparation",
        "Rights education"
      ]
    }
  ];

  return (
    <section className="pt-28 pb-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Available Resources
          </h2>
          <p className="text-gray-600">
            Comprehensive support services for survivors
          </p>
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((resource, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              {/* Icon & Title */}
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                  {resource.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {resource.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-gray-600 mb-4">
                {resource.description}
              </p>

              {/* Services */}
              <ul className="space-y-2">
                {resource.services.map((service, idx) => (
                  <li key={idx} className="flex items-center text-gray-600">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                    {service}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Emergency Contact */}
        <div className="mt-12 bg-red-50 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-red-600 mb-4">
            Need Immediate Help?
          </h3>
          <p className="text-lg mb-6">
            Our 24/7 emergency hotline is always available
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="tel:0717069813"
              className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors flex items-center justify-center gap-2"
            >
              <FaPhoneAlt />
              <span>Call Now: 0717 069 813</span>
            </a>
            <a 
              href="sms:21393"
              className="bg-red-100 text-red-600 px-6 py-3 rounded-lg hover:bg-red-200 transition-colors flex items-center justify-center gap-2"
            >
              <FaPhoneAlt />
              <span>SMS: 21393</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;