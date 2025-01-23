import { motion } from 'framer-motion';
import { FaUsers, FaHandHoldingHeart, FaBookReader, FaCalendarCheck } from 'react-icons/fa';

const SupportGroup = () => {
  const groups = [
    {
      title: "Healing Together",
      schedule: "Every Monday, 6:00 PM - 7:30 PM",
      description: "A safe space for survivors to share experiences and support each other's healing journey.",
      focus: [
        "Emotional support and understanding",
        "Shared experiences and coping strategies",
        "Building resilience together",
        "Creating lasting support networks"
      ]
    },
    {
      title: "Youth Empowerment Circle",
      schedule: "Every Wednesday, 4:00 PM - 5:30 PM",
      description: "Dedicated support group for young survivors aged 16-24.",
      focus: [
        "Age-appropriate support and resources",
        "Building self-esteem and confidence",
        "Peer support and friendship",
        "Skills development"
      ]
    },
    {
      title: "Family Support Network",
      schedule: "Every Saturday, 10:00 AM - 11:30 AM",
      description: "Supporting families affected by GBV in their healing journey.",
      focus: [
        "Family healing strategies",
        "Parenting support",
        "Communication skills",
        "Community resources"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="bg-purple-900 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Support Groups
            </h1>
            <p className="text-lg md:text-xl text-purple-100">
              Find strength, healing, and community through our specialized support groups.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Introduction */}
            <div className="prose prose-lg mx-auto mb-16">
              <p className="text-gray-600">
                Our support groups provide a safe, confidential environment where survivors can connect, 
                share experiences, and support each other's healing journey. Led by experienced 
                facilitators, these groups offer both emotional support and practical resources for 
                rebuilding lives affected by gender-based violence.
              </p>
            </div>

            {/* Support Groups */}
            <div className="space-y-8">
              {groups.map((group, index) => (
                <motion.div
                  key={group.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-white p-6 rounded-lg shadow-lg"
                >
                  <div className="md:flex items-start gap-6">
                    <div className="md:w-2/3">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">
                        {group.title}
                      </h3>
                      <p className="text-purple-600 font-medium mb-3">
                        <FaCalendarCheck className="inline mr-2" />
                        {group.schedule}
                      </p>
                      <p className="text-gray-600 mb-4">
                        {group.description}
                      </p>
                      <ul className="space-y-2">
                        {group.focus.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-gray-600">
                            <span className="text-purple-500">•</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="md:w-1/3 mt-4 md:mt-0">
                      <button className="w-full bg-purple-100 text-purple-700 px-6 py-3 rounded-lg font-medium hover:bg-purple-200 transition-colors">
                        Join Group
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Additional Information */}
            <div className="mt-16 bg-purple-50 p-8 rounded-xl">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                Why Join a Support Group?
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <FaUsers className="text-4xl text-purple-600 mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Community Support</h3>
                  <p className="text-gray-600">Connect with others who understand your journey</p>
                </div>
                <div className="text-center">
                  <FaHandHoldingHeart className="text-4xl text-purple-600 mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Emotional Healing</h3>
                  <p className="text-gray-600">Share experiences in a safe, supportive environment</p>
                </div>
                <div className="text-center">
                  <FaBookReader className="text-4xl text-purple-600 mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Practical Resources</h3>
                  <p className="text-gray-600">Learn coping strategies and access helpful resources</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SupportGroup;
