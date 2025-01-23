import { FaMapMarkerAlt, FaUsers, FaHandHoldingHeart, FaCalendar, FaAmbulance, FaPhoneVolume } from 'react-icons/fa';
import { motion } from 'framer-motion';
import awareness from '../../assets/images/awareeness2.jpg';

const Outreach = () => {
  const upcomingVisits = [
    {
      location: "Balambala Sub-County",
      date: "March 25-27, 2024",
      services: ["Medical Support", "Counseling", "Legal Aid"],
      beneficiaries: "150+ households"
    },
    {
      location: "Dadaab Sub-County",
      date: "April 1-3, 2024",
      services: ["Emergency Response", "Support Groups", "Youth Programs"],
      beneficiaries: "200+ households"
    },
    {
      location: "Ijara Sub-County",
      date: "April 8-10, 2024",
      services: ["Healthcare Services", "Community Education", "Resource Distribution"],
      beneficiaries: "175+ households"
    }
  ];

  const impactStats = [
    { number: "15+", label: "Villages Reached" },
    { number: "500+", label: "Cases Supported" },
    { number: "24/7", label: "Emergency Response" },
    { number: "100%", label: "Free Services" }
  ];

  const services = [
    {
      icon: <FaAmbulance />,
      title: "Emergency Response",
      description: "24/7 mobile response team providing immediate assistance and safe transport"
    },
    {
      icon: <FaHandHoldingHeart />,
      title: "Crisis Support",
      description: "On-site counseling and immediate psychological support"
    },
    {
      icon: <FaUsers />,
      title: "Community Education",
      description: "Awareness sessions and prevention programs"
    },
    {
      icon: <FaPhoneVolume />,
      title: "Remote Support",
      description: "Phone counseling and follow-up services"
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gradient-to-b from-white via-emerald-50 to-white py-16"
    >
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Hero Section */}
        <div className="relative rounded-3xl overflow-hidden mb-16">
          <img 
            src={awareness}
            alt="Mobile Outreach"
            className="w-full h-[500px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/90 to-teal-900/80 flex items-center">
            <div className="px-8 md:px-12 max-w-3xl">
              <span className="inline-block bg-emerald-500 text-white px-4 py-1 rounded-full text-sm font-medium mb-4">
                Mobile Support Services
              </span>
              <h1 className="text-5xl font-bold text-white mb-6">
                Bringing Support to Your Community
              </h1>
              <p className="text-emerald-100 text-xl mb-8">
                Our mobile teams are breaking barriers by bringing essential GBV support 
                services directly to communities across Garissa County.
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="tel:0717069813"
                  className="bg-emerald-500 text-white px-8 py-3 rounded-full hover:bg-emerald-400 transition-colors"
                >
                  Request Mobile Service
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Impact Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {impactStats.map((stat, index) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              key={index}
              className="bg-white rounded-2xl p-6 text-center shadow-lg border border-emerald-100"
            >
              <div className="text-3xl font-bold text-emerald-600 mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-3xl text-emerald-600 mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Upcoming Visits */}
        <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl p-12 mb-16">
          <h2 className="text-3xl font-bold text-center text-emerald-900 mb-12">
            Upcoming Community Visits
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {upcomingVisits.map((visit, index) => (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                key={index}
                className="bg-white p-8 rounded-xl shadow-md relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 bg-emerald-500 text-white px-3 py-1 rounded-bl-lg text-sm">
                  {visit.beneficiaries}
                </div>
                <div className="flex items-center text-emerald-600 mb-4">
                  <FaCalendar className="mr-2" />
                  {visit.date}
                </div>
                <h3 className="text-xl font-semibold mb-4">{visit.location}</h3>
                <ul className="space-y-2">
                  {visit.services.map((service, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></div>
                      {service}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-white rounded-2xl shadow-xl p-12 text-center">
          <h2 className="text-3xl font-bold text-emerald-900 mb-6">
            Request Mobile Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Our mobile teams are ready to support your community. Contact us to schedule 
            a visit or request emergency assistance.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a 
              href="tel:0717069813"
              className="bg-emerald-600 text-white px-8 py-4 rounded-full hover:bg-emerald-700 transition-colors inline-flex items-center justify-center"
            >
              Call Now: 0717 069 813
            </a>
            <a 
              href="mailto:ashrafzani585@gmail.com"
              className="bg-emerald-100 text-emerald-800 px-8 py-4 rounded-full hover:bg-emerald-200 transition-colors inline-flex items-center justify-center"
            >
              Email Us
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Outreach; 