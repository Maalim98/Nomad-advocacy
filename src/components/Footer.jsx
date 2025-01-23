import React from 'react';
import { Link } from 'react-router-dom';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900">
      {/* Emergency Banner */}
      <div className="bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <h3 className="text-xl md:text-2xl font-bold text-white">24/7 Emergency Helpline</h3>
              <p className="text-gray-300 text-sm md:text-base">Immediate support available anytime</p>
            </div>
            <a 
              href="tel:+254717069813" 
              className="bg-white text-gray-900 px-6 py-2 rounded-md font-bold hover:bg-gray-100 transition-colors flex items-center gap-2"
            >
              <FaPhone className="animate-pulse" />
              0717 069 813
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* About Section */}
          <div>
            <div className="text-2xl font-bold text-white mb-4">
              <span className="text-gray-300">Nomad</span> Advocacy
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Empowering communities and supporting survivors in Garissa County through compassion, 
              action, and lasting change.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: 'About Us', path: '/who-we-are/about' },
                { name: 'Our Services', path: '/services' },
                { name: 'Get Help', path: '/emergency' },
                { name: 'Resources', path: '/resources' },
                { name: 'Contact', path: '/contact' }
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Information</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <FaMapMarkerAlt className="mt-1 flex-shrink-0" />
                <span>Garissa County, Kenya<br />P.O. Box 123-70100</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <FaEnvelope className="flex-shrink-0" />
                <a href="mailto:info@nomadupport.org" className="hover:text-white transition-colors">
                  info@nomadupport.org
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaInstagram size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="text-center text-gray-400 text-sm">
            <p>&copy; {new Date().getFullYear()} Nomad Advocacy. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
