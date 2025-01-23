import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaUsers, FaHandHoldingHeart, FaGraduationCap, FaHospital, FaPaperPlane } from 'react-icons/fa';

const OurAchievements = () => {
  const impactStats = [
    {
      icon: FaUsers,
      number: "10,000+",
      label: "Survivors Supported",
      description: "Providing direct aid and unwavering support to GBV survivors."
    },
    {
      icon: FaHandHoldingHeart,
      number: "50+",
      label: "Community Programs",
      description: "Empowering communities through targeted outreach and education."
    },
    {
      icon: FaGraduationCap,
      number: "5,000+",
      label: "People Trained",
      description: "Training individuals to advocate and act against GBV."
    },
    {
      icon: FaHospital,
      number: "15",
      label: "Partner Facilities",
      description: "Collaborating with healthcare providers to expand support services."
    }
  ];

  const milestones = [
    {
      year: "2023",
      achievements: [
        "Launched a 24/7 emergency response system.",
        "Opened a new safe house facility.",
        "Reached 100,000 people through awareness campaigns.",
        "Received the Excellence in Service Award."
      ]
    },
    {
      year: "2022",
      achievements: [
        "Expanded services to three additional counties.",
        "Trained over 1,000 community advocates.",
        "Introduced a trauma counseling program.",
        "Partnered with UN Women Kenya."
      ]
    },
    {
      year: "2021",
      achievements: [
        "Opened a specialized children's support center.",
        "Launched a mobile clinic initiative.",
        "Built a legal aid partnership network.",
        "Honored with the Community Leadership Recognition Award."
      ]
    }
  ];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-900 to-teal-700 text-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-extrabold mb-4">Impact That Inspires</h1>
          <p className="text-lg text-teal-200 max-w-3xl mx-auto">
            Together, we are changing lives and creating a brighter future for communities in need.
          </p>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {impactStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg p-6 shadow-md text-center"
            >
              <stat.icon className="text-emerald-600 text-5xl mx-auto mb-3" />
              <h3 className="text-3xl font-bold text-emerald-800 mb-1">{stat.number}</h3>
              <p className="text-xl font-semibold text-gray-700 mb-2">{stat.label}</p>
              <p className="text-gray-600 text-sm">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Milestone Timeline */}
      <section className="bg-teal-50 py-12">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-teal-800 text-center mb-10">
            Milestones of Excellence
          </h2>
          <div className="space-y-10">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ type: "spring", stiffness: 70 }}
                className="flex flex-col md:flex-row items-start gap-6"
              >
                <div className="md:w-1/4 text-teal-800 text-5xl font-extrabold">{milestone.year}</div>
                <div className="md:w-3/4 bg-white rounded-lg p-6 shadow-md">
                  <ul className="space-y-3">
                    {milestone.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-3 h-3 bg-teal-500 rounded-full mt-1" />
                        <span className="text-gray-700 text-sm">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-emerald-50 to-white rounded-2xl shadow-xl p-8"
          >
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-emerald-800 mb-4">
                Share Your Story
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We'd love to hear about your experience with our services. Your feedback helps us improve and better serve our community.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name and Email Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label 
                    htmlFor="name" 
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition duration-200"
                    placeholder="Enter your name"
                    required
                  />
                </div>

                <div>
                  <label 
                    htmlFor="email" 
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition duration-200"
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>

              {/* Phone Number */}
              <div>
                <label 
                  htmlFor="phone" 
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Phone Number (Optional)
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition duration-200"
                  placeholder="Enter your phone number"
                />
              </div>

              {/* Message */}
              <div>
                <label 
                  htmlFor="message" 
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition duration-200 resize-none"
                  placeholder="Share your experience with us..."
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  className="inline-flex items-center px-8 py-3 rounded-lg bg-emerald-600 text-white font-medium hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-colors duration-200"
                >
                  <FaPaperPlane className="mr-2" />
                  Send Message
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default OurAchievements;
