import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaPhone, FaChevronDown, FaBars, FaTimes, FaUserShield, FaHandHoldingHeart } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [whoWeAreOpen, setWhoWeAreOpen] = useState(false);

  const handleLinkClick = () => {
    setWhoWeAreOpen(false); // Close "Who We Are" dropdown
    setIsOpen(false); // Close mobile menu
  };

  return (
    <>
      {/* Emergency Banner */}
      <div className="bg-blue-800 text-white py-1.5 px-4 text-center text-xs sm:text-sm">
        <div className="container mx-auto flex items-center justify-center gap-2">
          <FaPhone className="text-blue-200" />
          <span>24/7 Helpline: </span>
          <a href="tel:0717069813" className="font-bold hover:text-blue-200 transition-colors">
            0717 069 813
          </a>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-slate-50 shadow-sm fixed top-0 w-full z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="text-lg sm:text-xl md:text-2xl font-bold flex items-center">
              <span className="text-gray-900">Nomad </span>
              <span className="text-green-700">Advocacy</span>
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-700 p-2 z-50"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-gray-700 hover:text-blue-800 transition-colors font-medium">
                Home
              </Link>

              {/* Who We Are Dropdown */}
              <div className="relative group">
                <button
                  className="flex items-center space-x-1 text-gray-700 hover:text-blue-800 transition-colors font-medium"
                  onClick={() => setWhoWeAreOpen(!whoWeAreOpen)}
                >
                  <span>Who we are</span>
                  <FaChevronDown
                    className={`transform transition-transform duration-200 ${whoWeAreOpen ? 'rotate-180' : 'rotate-0'}`}
                  />
                </button>

                <div
                  className={`absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 transform transition-opacity duration-200 ${
                    whoWeAreOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                  }`}
                >
                  <Link
                    to="/who-we-are/about"
                    onClick={handleLinkClick}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-800 transition-colors"
                  >
                    About us
                  </Link>
                  <Link
                    to="/who-we-are/OurTeam"
                    onClick={handleLinkClick}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-800 transition-colors"
                  >
                    Our Team
                  </Link>
                  <Link
                    to="/who-we-are/board"
                    onClick={handleLinkClick}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-800 transition-colors"
                  >
                    Board of Trustees
                  </Link>
                  <Link
                    to="/who-we-are/locations"
                    onClick={handleLinkClick}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-800 transition-colors"
                  >
                    Where We Work
                  </Link>
                  <Link
                    to="/who-we-are/achievements"
                    onClick={handleLinkClick}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-800 transition-colors"
                  >
                    Our Achievements
                  </Link>
                </div>
              </div>

              <Link to="/blogs" className="text-gray-700 hover:text-blue-800 transition-colors font-medium">
                Blogs
              </Link>

              <Link to="/resources" className="text-gray-700 hover:text-blue-800 transition-colors font-medium">
                Resources
              </Link>

              <Link to="/contact" className="text-gray-700 hover:text-blue-800 transition-colors font-medium">
                Contact
              </Link>

              <Link
                to="/report"
                className="text-gray-700 hover:text-blue-800 transition-colors font-medium flex items-center space-x-2"
              >
                <FaUserShield />
                <span>Report</span>
              </Link>

              <Link
                to="/donate"
                className="text-white bg-green-600 hover:bg-green-700 font-medium px-4 py-2 rounded-md flex items-center space-x-2"
              >
                <FaHandHoldingHeart className="text-pink-200 text-xs" />
                <span>Donate</span>
              </Link>
            </div>

            {/* Mobile Menu */}
            <div
              className={`fixed md:hidden top-0 right-0 h-screen w-[80%] max-w-sm bg-slate-50 shadow-xl z-40 transform transition-transform duration-300 ease-in-out ${
                isOpen ? 'translate-x-0' : 'translate-x-full'
              } flex flex-col pt-20 px-6`}
            >
              <div className="flex flex-col space-y-4">
                <Link to="/" onClick={handleLinkClick} className="text-gray-700 hover:text-blue-800">
                  Home
                </Link>

                <div className="relative">
                  <button
                    onClick={() => setWhoWeAreOpen(!whoWeAreOpen)}
                    className="flex items-center space-x-1 text-gray-700 hover:text-blue-800 transition-colors font-medium"
                  >
                    <span>Who we are</span>
                    <FaChevronDown
                      className={`transform transition-transform duration-200 ${whoWeAreOpen ? 'rotate-180' : 'rotate-0'}`}
                    />
                  </button>

                  {whoWeAreOpen && (
                    <div className="ml-4 mt-2 space-y-2">
                      <Link
                        to="/who-we-are/about"
                        onClick={handleLinkClick}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-800"
                      >
                        About us
                      </Link>
                      <Link
                        to="/who-we-are/OurTeam"
                        onClick={handleLinkClick}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-800"
                      >
                        Our Team
                      </Link>
                      <Link
                        to="/who-we-are/board"
                        onClick={handleLinkClick}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-800"
                      >
                        Board of Trustees
                      </Link>
                      <Link
                        to="/who-we-are/locations"
                        onClick={handleLinkClick}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-800"
                      >
                        Where We Work
                      </Link>
                      <Link
                        to="/who-we-are/achievements"
                        onClick={handleLinkClick}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-800"
                      >
                        Our Achievements
                      </Link>
                    </div>
                  )}
                </div>

                <Link to="/blogs" onClick={handleLinkClick} className="text-gray-700 hover:text-blue-800">
                  Blogs
                </Link>

                <Link to="/resources" onClick={handleLinkClick} className="text-gray-700 hover:text-blue-800">
                  Resources
                </Link>

                <Link to="/contact" onClick={handleLinkClick} className="text-gray-700 hover:text-blue-800">
                  Contact
                </Link>

                <Link
                  to="/report"
                  className="text-gray-700 hover:text-blue-800 transition-colors font-medium flex items-center space-x-2"
                >
                  <FaUserShield />
                  <span>Report</span>
                </Link>

                <Link
                  to="/donate"
                  className="text-white bg-green-600 hover:bg-green-700 font-medium px-4 py-2 rounded-md flex items-center space-x-2"
                >
                  <FaHandHoldingHeart className="text-pink-200 text-xs" />
                  <span>Donate</span>
                </Link>
              </div>
            </div>

            {/* Overlay */}
            <div
              className={`fixed inset-0 bg-black/50 z-30 md:hidden transition-opacity duration-300 ${
                isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
              }`}
              onClick={() => setIsOpen(false)}
            />
          </div>
        </div>
      </nav>

      {/* Add padding for fixed navbar */}
      <div className="pt-16">
        {/* Your page content here */}
      </div>
    </>
  );
};

export default Navbar;
