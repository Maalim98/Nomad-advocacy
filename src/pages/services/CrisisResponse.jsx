import { motion } from 'framer-motion';
import { FaPhone, FaShieldAlt, FaAmbulance, FaHandHoldingHeart, FaLock } from 'react-icons/fa';
import heroBg from '../../assets/images/awareeness2.jpg';

const CrisisResponse = () => {
  const emergencyServices = [
    {
      icon: <FaPhone className="text-3xl" />,
      title: "24/7 Emergency Hotline",
      description: "Immediate phone support and crisis intervention available round the clock.",
      services: [
        "Immediate safety planning",
        "Emergency shelter coordination",
        "Medical assistance dispatch",
        "Law enforcement liaison"
      ]
    },
    {
      icon: <FaAmbulance className="text-3xl" />,
      title: "Rapid Response Team",
      description: "Mobile response unit ready to provide immediate in-person assistance.",
      services: [
        "On-site emergency response",
        "Safe transport services",
        "Medical care coordination",
        "Immediate protection measures"
      ]
    },
    {
      icon: <FaShieldAlt className="text-3xl" />,
      title: "Safe Shelter Access",
      description: "Immediate access to secure, temporary accommodation for those in danger.",
      services: [
        "Emergency accommodation",
        "Basic necessities provision",
        "Child protection services",
        "Security arrangements"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Emergency Alert Banner */}
      <div className="bg-blue-800 text-white py-1.5 px-4 text-center text-xs sm:text-sm">
        <div className="container mx-auto flex items-center justify-center gap-2">
          <FaPhone className="text-blue-200" />
          <span>24/7 Helpline: </span>
          <a href="tel:0717069813" className="font-bold hover:text-blue-200 transition-colors">
            0717 069 813
          </a>
        </div>
      </div>

      {/* Hero Section with Background Image */}
      <section 
        className="relative h-[60vh] bg-cover bg-center flex items-center" 
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.4)), url(${heroBg})`
        }}
      >
        <div className="absolute inset-0 bg-black/20" /> {/* Subtle overlay */}
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-white">
              Emergency Crisis Response
            </h1>
            <p className="text-lg md:text-xl text-gray-100 leading-relaxed">
              Immediate assistance and protection for survivors of gender-based violence. 
              Available 24/7, confidential, and free of charge.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Introduction */}
            <div className="prose prose-lg mx-auto mb-12">
              <p className="text-gray-600 leading-relaxed">
                Our Crisis Response Team is available 24 hours a day, 7 days a week, to provide 
                immediate assistance to individuals facing gender-based violence in Garissa County. 
                We understand that reaching out for help can be frightening, but you don't have to 
                face this alone. Our trained crisis responders are here to listen without judgment 
                and provide the support you need to ensure your safety.
              </p>
            </div>

            {/* Emergency Services */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {emergencyServices.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-white p-6 rounded-lg shadow-lg"
                >
                  <div className="text-red-600 mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.services.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                        <span className="text-red-500">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            {/* Safety Features */}
            <div className="bg-gray-50 p-8 rounded-xl mb-16">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                Your Safety is Our Priority
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="flex items-start gap-4">
                  <div className="text-red-600">
                    <FaLock className="text-3xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Confidential Support</h3>
                    <p className="text-gray-600">
                      All communications and services are strictly confidential. Your privacy and 
                      safety are our top priorities.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="text-red-600">
                    <FaHandHoldingHeart className="text-3xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Compassionate Care</h3>
                    <p className="text-gray-600">
                      Our trained team provides trauma-informed support with empathy and understanding.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Emergency Contact Box */}
            <div className="bg-red-50 p-8 rounded-xl border border-red-100">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-red-800 mb-4">
                  Need Immediate Help?
                </h2>
                <div className="space-y-4">
                  <p className="text-gray-700">
                    Our crisis line is available 24/7. Don't hesitate to reach out.
                  </p>
                  <a 
                    href="tel:0717069813"
                    className="inline-block bg-red-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-red-700 transition-colors"
                  >
                    <FaPhone className="inline mr-2" />
                    Call Emergency Hotline
                  </a>
                  <p className="text-sm text-gray-600">
                    If you're unable to call, you can also text this number for assistance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CrisisResponse;
