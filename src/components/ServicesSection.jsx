import { FaShieldAlt, FaHandsHelping, FaUsers } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const ServicesSection = () => {
  const services = [
    {
      icon: <FaShieldAlt className="w-6 h-6" />,
      title: "Crisis Response",
      description: "24/7 emergency response and safe shelter services for those in immediate danger.",
      color: "from-red-500/10 to-orange-500/10"
    },
    {
      icon: <FaHandsHelping className="w-6 h-6" />,
      title: "Counseling Support",
      description: "Professional trauma-informed counseling and emotional support services.",
      color: "from-emerald-500/10 to-teal-500/10"
    },
    {
      icon: <FaUsers className="w-6 h-6" />,
      title: "Support Groups",
      description: "Join our healing community through peer support groups and empowerment programs for survivors.",
      color: "from-blue-500/10 to-indigo-500/10"
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 relative inline-block">
            Our Services
            <div className="absolute -bottom-4 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 transform scale-x-50 group-hover:scale-x-100 transition-transform duration-300"></div>
          </h2>
        </div>
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className={`group relative bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl 
                transition-all duration-300 hover:-translate-y-1 border border-gray-100
                ${index === 1 ? 'sm:translate-y-4 lg:translate-y-8' : ''}`}
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} 
                opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl`}></div>
              
              {/* Icon */}
              <div className="relative mb-6">
                <div className="w-14 h-14 flex items-center justify-center rounded-xl 
                  bg-emerald-100 text-emerald-600 group-hover:bg-emerald-50 transition-colors">
                  {service.icon}
                </div>
              </div>

              {/* Content */}
              <div className="relative">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 
                  group-hover:text-emerald-700 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {service.description}
                </p>
                <Link 
                  to={`/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium"
                >
                  Learn More
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>

              {/* Hover Arrow */}
              <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 
                transition-opacity duration-300">
                <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center">
                  <svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Scroll Indicator */}
        <div className="flex gap-2 justify-center mt-6 sm:hidden">
          {services.map((_, index) => (
            <div 
              key={index} 
              className={`h-1 rounded-full transition-all duration-300
                ${index === 0 ? 'w-6 bg-emerald-500' : 'w-2 bg-gray-300'}`}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;