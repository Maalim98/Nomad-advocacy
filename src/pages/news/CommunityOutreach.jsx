import { FaMapMarkerAlt, FaUsers, FaHandHoldingHeart, FaCalendar, FaCheck, FaArrowRight, FaPhone } from 'react-icons/fa';
import { motion } from 'framer-motion';
import supportCenter from '../../assets/images/sapport center.jpg';

const CommunityOutreach = () => {
  const upcomingVisits = [
    {
      location: "Balambala Sub-County",
      date: "March 25-27, 2024",
      services: ["Medical Support", "Counseling", "Legal Aid"],
      image: supportCenter
    },
    {
      location: "Dadaab Sub-County",
      date: "April 1-3, 2024",
      services: ["Emergency Response", "Support Groups", "Youth Programs"],
      image: supportCenter
    },
    {
      location: "Ijara Sub-County",
      date: "April 8-10, 2024",
      services: ["Healthcare Services", "Community Education", "Resource Distribution"],
      image: supportCenter
    }
  ];

  const impactStats = [
    { number: "5,000+", label: "People Reached" },
    { number: "15", label: "Communities Served" },
    { number: "24/7", label: "Support Available" },
    { number: "100%", label: "Confidential" }
  ];

  const successStories = [
    {
      name: "Mama Amina's Vision",
      role: "Community Elder & Advocate",
      quote: "As a village elder, I've seen how our community has transformed. The mobile clinics and support groups have given women a voice and hope. We've created a network where survivors support each other, and our daughters now know their rights.",
      impact: "Led 12 Community Forums",
      image: supportCenter
    },
    {
      name: "Youth Champions Initiative",
      role: "Student Leaders Collective",
      quote: "Our school-based awareness program has reached over 1,000 students. We're breaking the silence around GBV through peer education, drama clubs, and youth-led discussions. Change is happening one conversation at a time.",
      impact: "20 Schools Reached",
      image: supportCenter
    },
    {
      name: "Saida's Empowerment Center",
      role: "Skills Training Program",
      quote: "After receiving support and skills training, I started a small tailoring center. Now we employ and mentor other survivors, providing both income and a safe space for healing. Economic independence changes everything.",
      impact: "Trained 50+ Women",
      image: supportCenter
    }
  ];

  const programHighlights = [
    {
      title: "Mobile Health Clinics",
      description: "Free medical checkups, trauma counseling, and immediate care for survivors.",
      stats: "1,200+ served"
    },
    {
      title: "Community Workshops",
      description: "Educational sessions on GBV prevention, rights awareness, and available support.",
      stats: "50+ workshops held"
    },
    {
      title: "Emergency Response",
      description: "24/7 rapid response team providing immediate assistance and safe transport.",
      stats: "100% response rate"
    },
    {
      title: "Legal Support",
      description: "Free legal counseling and court accompaniment services.",
      stats: "300+ cases supported"
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white py-16"
    >
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Hero Section */}
        <motion.div 
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          className="relative rounded-3xl overflow-hidden mb-16"
        >
          <img 
            src={supportCenter}
            alt="Community Outreach"
            className="w-full h-[500px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/95 to-emerald-800/80 flex items-center">
            <div className="px-8 md:px-12 max-w-3xl">
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-block bg-emerald-500 text-white px-4 py-1 rounded-full text-sm font-medium mb-4"
              >
                Community Initiative
              </motion.span>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight"
              >
                Bringing Support Closer to Communities
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-emerald-100 text-xl leading-relaxed mb-8"
              >
                Our mobile support units are bringing essential GBV services directly to rural 
                communities across Garissa County, ensuring help is always within reach.
              </motion.p>
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap gap-4"
              >
                <a 
                  href="#schedule"
                  className="bg-emerald-500 text-white px-8 py-3 rounded-full hover:bg-emerald-400 transition-colors inline-flex items-center group"
                >
                  View Schedule
                  <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href="#contact"
                  className="bg-white/10 text-white px-8 py-3 rounded-full hover:bg-white/20 transition-colors backdrop-blur-sm"
                >
                  Get Involved
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>

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

        {/* Key Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: <FaMapMarkerAlt />,
              title: "Mobile Services",
              description: "Bringing medical care, counseling, and support services directly to remote communities."
            },
            {
              icon: <FaUsers />,
              title: "Community Education",
              description: "Conducting awareness sessions and training programs for community members."
            },
            {
              icon: <FaHandHoldingHeart />,
              title: "Emergency Response",
              description: "Providing immediate support and safe transportation for survivors."
            }
          ].map((feature, index) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg border border-emerald-100 hover:shadow-xl transition-shadow"
            >
              <div className="text-4xl text-emerald-600 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Upcoming Visits Schedule */}
        <div id="schedule" className="bg-white rounded-2xl shadow-xl p-8 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Upcoming Community Visits</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find out when we'll be in your area. Our team provides comprehensive support 
              services during each community visit.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {upcomingVisits.map((visit, index) => (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                key={index}
                className="group relative overflow-hidden rounded-xl border border-emerald-100 hover:shadow-lg transition-all duration-300"
              >
                <div className="absolute inset-0">
                  <img 
                    src={visit.image}
                    alt={visit.location}
                    className="w-full h-full object-cover opacity-10"
                  />
                </div>
                <div className="relative p-6">
                  <div className="flex items-center text-emerald-600 mb-4">
                    <FaCalendar className="mr-2" />
                    {visit.date}
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{visit.location}</h3>
                  <ul className="space-y-2">
                    {visit.services.map((service, idx) => (
                      <li key={idx} className="text-gray-600 flex items-center">
                        <FaCheck className="text-emerald-500 mr-2" />
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Program Highlights Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <span className="text-emerald-600 text-sm font-semibold tracking-wider uppercase">
              Our Impact
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mt-2">
              Program Highlights
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {programHighlights.map((highlight, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-emerald-50"
              >
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    {highlight.title}
                  </h3>
                  <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm">
                    {highlight.stats}
                  </span>
                </div>
                <p className="text-gray-600">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Success Stories Section */}
        <div className="mb-16 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl p-12">
          <div className="text-center mb-12">
            <span className="text-emerald-600 text-sm font-semibold tracking-wider uppercase">
              Community Voices
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mt-2">
              Success Stories
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-xl shadow-md relative"
              >
                <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
                  <span className="bg-emerald-600 text-white text-xs px-3 py-1 rounded-full">
                    {story.impact}
                  </span>
                </div>
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-800">{story.name}</h3>
                  <p className="text-emerald-600">{story.role}</p>
                </div>
                <blockquote className="text-gray-600 italic">
                  "{story.quote}"
                </blockquote>
              </div>
            ))}
          </div>
        </div>

        {/* Resources Section */}
        <div className="mb-16 bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Available Resources</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We provide comprehensive support through various channels to ensure help is always accessible.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-emerald-800 mb-4">Immediate Support</h3>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <FaCheck className="text-emerald-500 mr-3" />
                  24/7 Emergency Helpline
                </li>
                <li className="flex items-center text-gray-700">
                  <FaCheck className="text-emerald-500 mr-3" />
                  Crisis Counseling
                </li>
                <li className="flex items-center text-gray-700">
                  <FaCheck className="text-emerald-500 mr-3" />
                  Safe Transportation
                </li>
                <li className="flex items-center text-gray-700">
                  <FaCheck className="text-emerald-500 mr-3" />
                  Emergency Shelter Access
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-emerald-800 mb-4">Long-term Support</h3>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <FaCheck className="text-emerald-500 mr-3" />
                  Ongoing Counseling
                </li>
                <li className="flex items-center text-gray-700">
                  <FaCheck className="text-emerald-500 mr-3" />
                  Legal Assistance
                </li>
                <li className="flex items-center text-gray-700">
                  <FaCheck className="text-emerald-500 mr-3" />
                  Support Groups
                </li>
                <li className="flex items-center text-gray-700">
                  <FaCheck className="text-emerald-500 mr-3" />
                  Skills Training Programs
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Get Involved Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          id="contact"
          className="bg-gradient-to-br from-emerald-800 via-emerald-700 to-teal-800 rounded-2xl p-12 text-white overflow-hidden relative"
        >
          <div className="absolute inset-0 bg-pattern opacity-10"></div>
          <div className="relative max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Get Involved</h2>
            <p className="text-emerald-100 text-lg mb-8">
              Join us in making a difference in your community. We welcome volunteers, 
              community leaders, and organizations to partner with us.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <a 
                href="tel:0717069813"
                className="bg-white text-emerald-800 px-8 py-4 rounded-full hover:bg-emerald-50 transition-colors flex items-center justify-center group"
              >
                <FaPhone className="mr-2" />
                Call: 0717 069 813
                <FaArrowRight className="ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </a>
              <a 
                href="mailto:ashrafzani585@gmail.com"
                className="bg-emerald-600 text-white px-8 py-4 rounded-full hover:bg-emerald-500 transition-colors flex items-center justify-center group"
              >
                Email Us
                <FaArrowRight className="ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CommunityOutreach; 