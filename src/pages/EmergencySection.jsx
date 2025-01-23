import { 
  FaPhone, 
  FaShieldAlt, 
  FaAmbulance, 
  FaHandHoldingHeart, 
  FaHome, 
  FaLock, 
  FaUserShield,
  FaArrowRight 
} from 'react-icons/fa';

const EmergencySection = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-50 to-blue-50 py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Emergency Support
          </h1>
          <p className="text-lg text-gray-600">
            Immediate assistance available 24/7. Your safety is our priority.
          </p>
        </div>

        {/* Main Emergency Numbers */}
        <div className="space-y-6 mb-16">
          <a href="tel:0800xxxxxx" 
            className="group flex items-center justify-between p-6 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all"
          >
            <div className="flex items-center gap-6">
              <FaPhone className="text-3xl" />
              <div>
                <h3 className="text-xl font-semibold">Crisis Hotline</h3>
                <p className="text-2xl font-bold mt-1">0800-XXX-XXX</p>
              </div>
            </div>
            <FaArrowRight className="opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all" />
          </a>

          <a href="tel:112" 
            className="group flex items-center justify-between p-6 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-all"
          >
            <div className="flex items-center gap-6">
              <FaShieldAlt className="text-3xl" />
              <div>
                <h3 className="text-xl font-semibold">Police Emergency</h3>
                <p className="text-2xl font-bold mt-1">112</p>
              </div>
            </div>
            <FaArrowRight className="opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all" />
          </a>

          <a href="tel:911" 
            className="group flex items-center justify-between p-6 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-all"
          >
            <div className="flex items-center gap-6">
              <FaAmbulance className="text-3xl" />
              <div>
                <h3 className="text-xl font-semibold">Medical Emergency</h3>
                <p className="text-2xl font-bold mt-1">911</p>
              </div>
            </div>
            <FaArrowRight className="opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all" />
          </a>
        </div>

        {/* Support Services */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Additional Support Services
          </h2>
          <div className="space-y-4">
            <a href="tel:0800xxxxxx" className="group block p-5 hover:bg-white rounded-lg transition-all">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                  <FaHome className="text-xl" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-lg font-semibold text-gray-900">Safe Houses</h3>
                  <p className="text-gray-600">Immediate safe accommodation and protection</p>
                </div>
                <p className="text-blue-600 font-semibold flex items-center gap-2">
                  0800-XXX-XXX
                  <FaArrowRight className="opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all" />
                </p>
              </div>
            </a>

            <a href="tel:0800xxxxxx" className="group block p-5 hover:bg-white rounded-lg transition-all">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                  <FaUserShield className="text-xl" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-lg font-semibold text-gray-900">Legal Support</h3>
                  <p className="text-gray-600">Free legal consultation and representation</p>
                </div>
                <p className="text-blue-600 font-semibold flex items-center gap-2">
                  0800-XXX-XXX
                  <FaArrowRight className="opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all" />
                </p>
              </div>
            </a>

            <a href="tel:0800xxxxxx" className="group block p-5 hover:bg-white rounded-lg transition-all">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                  <FaHandHoldingHeart className="text-xl" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-lg font-semibold text-gray-900">Counseling</h3>
                  <p className="text-gray-600">Professional mental health support</p>
                </div>
                <p className="text-blue-600 font-semibold flex items-center gap-2">
                  0800-XXX-XXX
                  <FaArrowRight className="opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all" />
                </p>
              </div>
            </a>
          </div>
        </div>

        {/* Quick Exit */}
        <div className="text-center">
          <button className="bg-gray-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300 flex items-center gap-2 mx-auto">
            <FaLock />
            Quick Exit
          </button>
        </div>
      </div>
    </section>
  );
};

export default EmergencySection;
