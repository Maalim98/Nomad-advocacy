import { FaTag, FaArrowRight, FaSearch, FaFilter } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useState } from 'react';
import awareness from '../../assets/images/awareness2.jpg';
import woman5 from '../../assets/images/woman5.jpg';
import xalimo from '../../assets/images/xalimo.jpg';

const AllUpdates = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', label: 'All Updates' },
    { id: 'outreach', label: 'Outreach' },
    { id: 'empowerment', label: 'Empowerment' },
    { id: 'community', label: 'Community' },
    { id: 'events', label: 'Events' }
  ];

  const updates = [
    {
      title: "Mobile Clinic Reaches Remote Villages",
     
      category: "outreach",
      excerpt: "Our mobile support unit provided essential services to five remote villages in Garissa County, reaching over 200 individuals.",
      image: awareness,
      link: "/news/outreach"
    },
    {
      title: "Women's Empowerment Workshop Success",
      
      category: "empowerment",
      excerpt: "50 women completed our comprehensive skills training program, gaining tools for economic independence.",
      image: woman5,
      link: "/news/empowerment"
    },
    {
      title: "Community Leaders Unite Against GBV",
      
      category: "community",
      excerpt: "Local leaders and religious figures gathered to strengthen community response to gender-based violence.",
      image: xalimo,
      link: "/news/community"
    },
    // Add more updates as needed
  ];

  const filteredUpdates = updates.filter(update => {
    const matchesFilter = activeFilter === 'all' || update.category === activeFilter;
    const matchesSearch = update.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         update.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
      {/* Hero Section */}
      <div className="relative h-[400px] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={awareness}
            alt="Updates"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/90 to-emerald-800/90">
            <div className="container mx-auto px-4 h-full flex items-center">
              <div className="max-w-3xl">
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-5xl font-bold text-white mb-6"
                >
                  Latest Updates & Stories
                </motion.h1>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-emerald-100 text-xl"
                >
                  Stay informed about our initiatives, success stories, and the impact 
                  we're making in communities across Garissa County.
                </motion.p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="py-8 bg-white shadow-sm sticky top-0 z-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search Bar */}
            <div className="relative w-full md:w-96">
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search updates..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            {/* Category Filters */}
            <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setActiveFilter(category.id)}
                  className={`px-4 py-2 rounded-full whitespace-nowrap transition-all
                    ${activeFilter === category.id 
                      ? 'bg-emerald-600 text-white' 
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Updates Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredUpdates.map((update, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-all"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={update.image}
                  alt={update.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-white/90 text-emerald-600 text-xs font-semibold px-3 py-1 rounded-full">
                    {update.category.charAt(0).toUpperCase() + update.category.slice(1)}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {update.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {update.excerpt}
                </p>
                <a 
                  href={update.link}
                  className="inline-flex items-center text-emerald-600 font-medium hover:text-emerald-700"
                >
                  Read More 
                  <FaArrowRight className="ml-2 text-sm transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-emerald-900 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Stay Updated
            </h2>
            <p className="text-emerald-100 mb-8">
              Subscribe to our newsletter to receive regular updates about our work 
              and impact in the community.
            </p>
            <form className="flex flex-col md:flex-row gap-4 justify-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-6 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-emerald-500 md:w-80"
              />
              <button
                type="submit"
                className="bg-emerald-600 text-white px-8 py-3 rounded-full hover:bg-emerald-700 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllUpdates; 