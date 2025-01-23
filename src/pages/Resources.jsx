import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaGlobe,
  FaBookOpen,
  FaHandHoldingHeart,
  FaDownload,
  FaExternalLinkAlt,
  FaUniversity,
  FaHospital,
  FaBalanceScale,
  FaShieldAlt,
} from "react-icons/fa";

const Resources = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);

  const validateForm = () => {
    const errors = {};
    if (!formData.name) errors.name = "Name is required.";
    if (!formData.email) errors.email = "Email is required.";
    else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email))
      errors.email = "Invalid email address.";
    if (!formData.message) errors.message = "Message is required.";
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      setFormSubmitted(true);
      setFormErrors({});
      setFormData({ name: "", email: "", message: "" });
    } else {
      setFormErrors(errors);
    }
  };

  const allResources = {
    international: [
      {
        id: 1,
        title: "UN Women Virtual Knowledge Centre",
        category: "international",
        description: "Comprehensive resource hub for ending violence against women and girls",
        format: "Website",
        organization: "UN Women",
        url: "https://www.endvawnow.org",
        featured: true,
        tags: ["knowledge", "research", "global"],
        icon: <FaGlobe className="text-blue-500" />,
      },
      {
        id: 2,
        title: "WHO Violence Prevention",
        category: "international",
        description: "World Health Organization's resources on violence prevention and response",
        format: "Website",
        organization: "WHO",
        url: "https://www.who.int/health-topics/violence",
        featured: true,
        tags: ["health", "prevention"],
        icon: <FaHospital className="text-green-500" />,
      },
    ],
    national: [
      {
        id: 3,
        title: "Healthcare Assistance Kenya",
        category: "national",
        description: "Leading healthcare provider for GBV survivors in Kenya",
        format: "Website",
        organization: "HAK",
        url: "https://hak.or.ke",
        featured: true,
        tags: ["healthcare", "support"],
        icon: <FaHandHoldingHeart className="text-red-500" />,
      },
      {
        id: 4,
        title: "FIDA Kenya",
        category: "national",
        description: "Federation of Women Lawyers providing legal aid to GBV survivors",
        format: "Website",
        organization: "FIDA",
        url: "https://fidakenya.org",
        featured: true,
        tags: ["legal", "support"],
        icon: <FaBalanceScale className="text-purple-500" />,
      },
    ],
    // Other categories remain unchanged...
  };

  const ResourceCard = ({ resource }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 overflow-hidden group"
    >
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg bg-gray-50 flex items-center justify-center">
              {resource.icon}
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                {resource.title}
              </h3>
              <span className="text-sm text-gray-500">{resource.organization}</span>
            </div>
          </div>
          {resource.featured && (
            <span className="bg-blue-50 text-blue-600 text-xs px-2 py-1 rounded-full font-medium">
              Featured
            </span>
          )}
        </div>

        <p className="text-gray-600 mb-4">{resource.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {resource.tags.map((tag, index) => (
            <span
              key={index}
              className="text-xs bg-gray-50 text-gray-600 px-3 py-1 rounded-full"
            >
              #{tag}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between mt-6">
          <span className="text-sm text-gray-500">
            {resource.format} {resource.size && `• ${resource.size}`}
          </span>
          <a
            href={resource.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gray-50 text-gray-600 hover:bg-blue-50 hover:text-blue-600 px-4 py-2 rounded-lg transition-colors"
          >
            {resource.format === "PDF" ? <FaDownload /> : <FaExternalLinkAlt />}
            <span>Access Resource</span>
          </a>
        </div>
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Emergency Banner */}
      <div className="bg-gradient-to-r from-red-600 to-red-500 text-white py-3">
        <div className="container mx-auto px-4 text-center">
          <p className="flex items-center justify-center gap-2">
            <FaPhoneAlt className="animate-pulse" />
            <span>24/7 Emergency Hotline:</span>
            <a
              href="tel:1195"
              className="font-bold underline hover:text-red-100 transition-colors"
            >
              1195
            </a>
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            GBV Support Resources
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Access comprehensive support services, educational materials, and emergency contacts.
          </p>
        </div>

        {/* Category Navigation */}
        <div className="flex flex-wrap gap-3 mb-12 justify-center">
          <button
            onClick={() => setActiveCategory("all")}
            className={`px-4 py-2 rounded-lg transition-colors ${
              activeCategory === "all"
                ? "bg-blue-600 text-white"
                : "bg-white text-gray-600 hover:bg-gray-100"
            }`}
          >
            All Resources
          </button>
          {Object.keys(allResources).map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-lg transition-colors ${
                activeCategory === category
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-600 hover:bg-gray-100"
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Resources Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {activeCategory === "all"
            ? Object.values(allResources)
                .flat()
                .map((resource) => <ResourceCard key={resource.id} resource={resource} />)
            : allResources[activeCategory]?.map((resource) => (
                <ResourceCard key={resource.id} resource={resource} />
              ))}
        </div>
      </div>

      {/* Contact Form */}
      <div className="bg-white py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Contact Us
          </h2>
          <form
            onSubmit={handleSubmit}
            className="max-w-lg mx-auto bg-gray-50 p-6 rounded-lg shadow-md"
          >
            {formSubmitted && (
              <div className="bg-green-100 text-green-600 px-4 py-2 rounded mb-4">
                Thank you! Your message has been submitted.
              </div>
            )}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className={`w-full px-4 py-2 border ${
                  formErrors.name ? "border-red-500" : "border-gray-300"
                } rounded-md focus:ring focus:ring-blue-300`}
              />
              {formErrors.name && (
                <p className="text-red-500 text-sm mt-1">{formErrors.name}</p>
              )}
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className={`w-full px-4 py-2 border ${
                  formErrors.email ? "border-red-500" : "border-gray-300"
                } rounded-md focus:ring focus:ring-blue-300`}
              />
              {formErrors.email && (
                <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>
              )}
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                rows="4"
                className={`w-full px-4 py-2 border ${
                  formErrors.message ? "border-red-500" : "border-gray-300"
                } rounded-md focus:ring focus:ring-blue-300`}
              />
              {formErrors.message && (
                <p className="text-red-500 text-sm mt-1">
                  {formErrors.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Resources;
