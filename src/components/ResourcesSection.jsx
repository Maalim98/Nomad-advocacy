import React from 'react';
import { 
  FaPhoneAlt, FaHeartbeat, FaShieldAlt, 
  FaComments
} from 'react-icons/fa';

const ResourcesSection = () => {
  const resources = [
    {
      title: "Emergency Support",
      icon: <FaPhoneAlt />,
      description: "24/7 crisis support in English, Swahili, and Somali",
      contacts: [
        { label: "Hotline", value: "0717 069 813" },
        { label: "SMS", value: "0717069813" }
      ]
    },
    {
      title: "Medical Care",
      icon: <FaHeartbeat />,
      description: "Professional medical support and trauma care",
      services: [
        "Emergency medical response",
        "Post-assault care",
        "Mental health support",
        "Ongoing healthcare"
      ]
    },
    {
      title: "Legal Aid",
      icon: <FaShieldAlt />,
      description: "Free legal assistance and protection",
      services: [
        "Legal consultation",
        "Court representation",
        "Documentation support",
        "Rights advocacy"
      ]
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">
            Support Resources
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Comprehensive support services available 24/7
          </p>
        </div>

        {/* Emergency Contact Banner */}
        <div className="mb-12 bg-red-50 rounded-xl p-6 border border-red-100">
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-center md:text-left">
                <h3 className="text-xl font-semibold text-red-700 mb-2">
                  Need Immediate Help?
                </h3>
                <p className="text-red-600">
                  Our support team is available 24/7
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="tel:0717069813"
                  className="inline-flex items-center px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                >
                  <FaPhoneAlt className="mr-2" />
                  Call: 0717 069 813
                </a>
                <a 
                  href="sms:0717069813"
                  className="inline-flex items-center px-4 py-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-colors"
                >
                  <FaComments className="mr-2" />
                  SMS: 0717069813
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Resources Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="text-2xl text-gray-600">
                  {resource.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {resource.title}
                </h3>
              </div>

              <p className="text-gray-600 mb-4">
                {resource.description}
              </p>

              {resource.contacts ? (
                <div className="space-y-2">
                  {resource.contacts.map((contact, idx) => (
                    <div key={idx} className="flex items-center justify-between text-gray-700">
                      <span>{contact.label}:</span>
                      <span className="font-medium">{contact.value}</span>
                    </div>
                  ))}
                </div>
              ) : (
                <ul className="space-y-2">
                  {resource.services.map((service, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2"></span>
                      {service}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;