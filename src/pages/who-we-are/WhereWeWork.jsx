import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaHospital, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

const WhereWeWork = () => {
  const [activeTab, setActiveTab] = useState('regions');

  const regions = [
    {
      name: "Garissa Township",
      subLocations: ["Bulla Punda", "Bulla Sheikh", "Bulla Iftin", "Township"],
      services: [
        "24/7 GBV Response Center",
        "Women's Safe House",
        "Legal Aid Center",
        "Counseling Services"
      ],
      hotline: "0700-XXX-XXX"
    },
    {
      name: "Dadaab",
      subLocations: ["Dagahaley", "Ifo", "Hagadera", "Kambioos"],
      services: [
        "Refugee Support Center",
        "Emergency Response Unit",
        "Mobile Clinic Services",
        "Community Outreach"
      ],
      hotline: "0700-XXX-XXX"
    },
    {
      name: "Fafi",
      subLocations: ["Bura", "Dekaharja", "Jarajilla", "Nanighi"],
      services: [
        "Rural Support Center",
        "Mobile Response Unit",
        "Community Safe Spaces"
      ],
      hotline: "0700-XXX-XXX"
    },
    {
      name: "Ijara",
      subLocations: ["Ijara", "Hulugho", "Sangailu", "Masalani"],
      services: [
        "GBV Response Unit",
        "Community Center",
        "Mobile Support Services"
      ],
      hotline: "0700-XXX-XXX"
    },
    {
      name: "Balambala",
      subLocations: ["Balambala", "Danyere", "Janju", "Saka"],
      services: [
        "Community Safe House",
        "Mobile Response Team",
        "Youth Support Center"
      ],
      hotline: "0700-XXX-XXX"
    },
    {
      name: "Lagdera",
      subLocations: ["Modogashe", "Benane", "Goreale", "Maalimin"],
      services: [
        "Emergency Response Center",
        "Mobile Support Unit",
        "Community Outreach"
      ],
      hotline: "0700-XXX-XXX"
    }
  ];

  const hospitals = [
    {
      name: "Garissa County Referral Hospital",
      type: "Level 5",
      services: [
        "24/7 GBV Recovery Center",
        "Trauma Counseling",
        "Forensic Services",
        "Emergency Care"
      ],
      contact: "0700-XXX-XXX",
      location: "Garissa Township"
    },
    {
      name: "Iftin Sub-County Hospital",
      type: "Level 4",
      services: [
        "GBV Response Unit",
        "Basic Emergency Care",
        "Counseling Services"
      ],
      contact: "0700-XXX-XXX",
      location: "Bulla Iftin"
    },
    {
      name: "Dadaab Sub-County Hospital",
      type: "Level 4",
      services: [
        "Emergency Response",
        "Basic GBV Care",
        "Referral Services"
      ],
      contact: "0700-XXX-XXX",
      location: "Dadaab"
    },
    {
      name: "Balambala Sub-County Hospital",
      type: "Level 4",
      services: [
        "Basic Emergency Care",
        "GBV First Response",
        "Referral Services"
      ],
      contact: "0700-XXX-XXX",
      location: "Balambala"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-emerald-900 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-white mb-4 text-center">Where We Work</h1>
          <p className="text-emerald-100 text-lg text-center">
            Comprehensive GBV support across Garissa County's healthcare network
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Tab Navigation */}
        <div className="flex gap-4 mb-8 text-center" >
          <button
            onClick={() => setActiveTab('regions')}
            className={`px-6 py-3 rounded-lg font-medium ${
              activeTab === 'regions' 
                ? 'bg-emerald-600 text-white' 
                : 'bg-white text-emerald-600 hover:bg-emerald-50'
            }`}
          >
            Regions & Services
          </button>
          <button
            onClick={() => setActiveTab('hospitals')}
            className={`px-6 py-3 rounded-lg font-medium ${
              activeTab === 'hospitals' 
                ? 'bg-emerald-600 text-white' 
                : 'bg-white text-emerald-600 hover:bg-emerald-50'
            }`}
          >
            Partner Hospitals
          </button>
        </div>

        {/* Regions Content */}
        {activeTab === 'regions' && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regions.map((region) => (
              <motion.div
                key={region.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-lg shadow-sm p-6"
              >
                <h2 className="text-xl font-bold text-emerald-800 mb-4">
                  {region.name}
                </h2>
                <div className="mb-4">
                  <h3 className="font-medium text-emerald-600 mb-2">Sub-Locations:</h3>
                  <ul className="text-gray-600 text-sm space-y-1">
                    {region.subLocations.map((loc) => (
                      <li key={loc} className="flex items-center gap-2">
                        <FaMapMarkerAlt className="text-emerald-400" />
                        {loc}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mb-4">
                  <h3 className="font-medium text-emerald-600 mb-2">Available Services:</h3>
                  <ul className="text-gray-600 text-sm space-y-1">
                    {region.services.map((service) => (
                      <li key={service}>• {service}</li>
                    ))}
                  </ul>
                </div>
                <div className="flex items-center gap-2 text-emerald-600">
                  <FaPhone />
                  <span className="text-sm">{region.hotline}</span>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Hospitals Content */}
        {activeTab === 'hospitals' && (
          <div className="grid md:grid-cols-2 gap-6">
            {hospitals.map((hospital) => (
              <motion.div
                key={hospital.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-lg shadow-sm p-6"
              >
                <div className="flex items-start gap-4">
                  <FaHospital className="text-emerald-600 text-2xl flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-xl font-bold text-emerald-800 mb-1">
                      {hospital.name}
                    </h2>
                    <p className="text-emerald-600 text-sm mb-4">{hospital.type}</p>
                    <div className="mb-4">
                      <h3 className="font-medium text-emerald-600 mb-2">GBV Services:</h3>
                      <ul className="text-gray-600 text-sm space-y-1">
                        {hospital.services.map((service) => (
                          <li key={service}>• {service}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <FaMapMarkerAlt className="text-emerald-400" />
                        {hospital.location}
                      </div>
                      <div className="flex items-center gap-2">
                        <FaPhone className="text-emerald-400" />
                        {hospital.contact}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Emergency Contact */}
        <div className="mt-12 bg-red-50 border border-red-100 p-6 rounded-lg">
          <h2 className="text-xl font-bold text-red-800 mb-4">24/7 Emergency Response</h2>
          <div className="flex flex-wrap gap-6">
            <div>
              <p className="text-red-600 font-medium mb-1">Main Hotline</p>
              <p className="text-lg">1195 (Toll Free)</p>
            </div>
            <div>
              <p className="text-red-600 font-medium mb-1">WhatsApp Support</p>
              <p className="text-lg">0700-XXX-XXX</p>
            </div>
            <div>
              <p className="text-red-600 font-medium mb-1">SMS Reporting</p>
              <p className="text-lg">0700-XXX-XXX</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhereWeWork;
