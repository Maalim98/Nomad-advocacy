import { FaPhone, FaArrowRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import support from '../assets/images/darkbg.jpg';

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-[85vh]">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${support})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 md:px-12 py-8">
        <div className="max-w-3xl text-white space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Supporting Survivors,
            <span className="block text-blue-300">Building Hope</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-100 max-w-2xl">
            Confidential support and resources for survivors of gender-based violence in Garissa County.
          </p>

          <p className="text-base md:text-lg text-gray-200 max-w-2xl">
            We provide immediate assistance, counseling, and long-term support to help survivors rebuild their lives with dignity and strength.
          </p>

          {/* Emergency Box */}
          <div className="bg-black/30 backdrop-blur-sm p-3 rounded-lg inline-block mt-2 border border-blue-300">
            <p className="text-blue-200 text-sm mb-1">24/7 Emergency Helpline</p>
            <a 
              href="tel:0717069813" 
              className="text-2xl md:text-3xl font-bold hover:text-blue-300 transition-colors flex items-center gap-2"
            >
              <FaPhone className="text-xl animate-pulse" />
              0717 069 813
            </a>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <button 
              onClick={() => navigate('/emergency')}
              className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg font-semibold flex items-center gap-2 transition-all text-sm md:text-base group"
            >
              Get Help Now
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
            <a 
              href="https://unhabitat.org/sites/default/files/download-manager-files/Report%20Preventing%20Gender-based%20Violence%20in%20the%20Horn%2C%20East%20and%20Southern%20Africa.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/20 border border-white/20 px-6 py-3 rounded-lg font-semibold transition-all text-sm md:text-base"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
