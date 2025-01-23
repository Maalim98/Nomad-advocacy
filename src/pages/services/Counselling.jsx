import { motion } from 'framer-motion';
import { FaHeart, FaUsers, FaChild, FaCalendarAlt, FaLock, FaHandHoldingHeart } from 'react-icons/fa';

const Counselling = () => {
  const counsellingTypes = [
    {
      icon: <FaHeart className="text-3xl" />,
      title: "GBV Trauma Counselling",
      description: "Specialized counseling for survivors of gender-based violence in a safe, confidential environment.",
      benefits: [
        "Trauma-informed care approach",
        "Crisis intervention support",
        "Safety planning assistance",
        "Emotional healing strategies"
      ]
    },
    {
      icon: <FaUsers className="text-3xl" />,
      title: "Women's Empowerment",
      description: "Empowering survivors through counseling focused on rebuilding confidence and independence.",
      benefits: [
        "Self-esteem building",
        "Economic empowerment guidance",
        "Decision-making support",
        "Personal growth development"
      ]
    },
    {
      icon: <FaChild className="text-3xl" />,
      title: "Child & Youth Support",
      description: "Specialized counseling for young survivors and children affected by GBV.",
      benefits: [
        "Age-appropriate counseling",
        "Play therapy sessions",
        "Educational support",
        "Family healing guidance"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="bg-emerald-900 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Professional GBV Counselling Services
            </h1>
            <p className="text-lg md:text-xl text-emerald-100">
              Confidential, trauma-informed counseling to support your healing journey. 
              You are not alone in this.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg mx-auto mb-12">
              <p className="text-gray-600 leading-relaxed">
                At Nomad GBV Support Center, we provide specialized counseling services for survivors 
                of gender-based violence in Garissa County. Our professional counselors are trained 
                in trauma-informed care and understand the unique challenges faced by GBV survivors. 
                We create a safe, confidential, and supportive environment where you can begin your 
                healing journey at your own pace.
              </p>
            </div>

            {/* Counselling Types */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {counsellingTypes.map((type, index) => (
                <motion.div
                  key={type.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-white p-6 rounded-lg shadow-lg"
                >
                  <div className="text-emerald-600 mb-4">{type.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{type.title}</h3>
                  <p className="text-gray-600 mb-4">{type.description}</p>
                  <ul className="space-y-2">
                    {type.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                        <span className="text-emerald-500">•</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            {/* Our Approach Section */}
            <div className="bg-gray-50 p-8 rounded-xl mb-16">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                Our Counselling Approach
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="flex items-start gap-4">
                  <div className="text-emerald-600">
                    <FaLock className="text-3xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Confidential & Safe Space</h3>
                    <p className="text-gray-600">
                      Your privacy and safety are our top priorities. All sessions are strictly 
                      confidential and held in a secure environment.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="text-emerald-600">
                    <FaHandHoldingHeart className="text-3xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Trauma-Informed Care</h3>
                    <p className="text-gray-600">
                      Our counselors are specially trained in trauma-informed approaches to support 
                      GBV survivors with sensitivity and understanding.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Appointment Section */}
            <div className="bg-emerald-50 p-8 rounded-xl border border-emerald-100">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Schedule a Confidential Session
                </h2>
                <p className="text-gray-600">
                  Take the first step towards healing. Our counselors are here to support you 
                  in a safe, non-judgmental environment.
                </p>
              </div>
              
              <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                <a 
                  href="tel:0717069813"
                  className="bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors flex items-center gap-2"
                >
                  <FaCalendarAlt />
                  Book Appointment
                </a>
                <span className="text-gray-500">or</span>
                <a 
                  href="#contact"
                  className="text-emerald-600 hover:text-emerald-700 font-semibold"
                >
                  Request More Information
                </a>
              </div>
              <p className="text-sm text-gray-500 text-center mt-4">
                All inquiries are confidential. We're here to help when you're ready.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Counselling;
