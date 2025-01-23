import { FaHeart, FaStar, FaUsers } from 'react-icons/fa';
import { useState } from 'react';

const Empowerment = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const programs = [
    {
      title: "Healing Together",
      description: "Join our supportive community where survivors find strength in shared experiences",
      features: [
        "Weekly Support Groups",
        "Cultural Healing Practices",
        "Trauma-Informed Care",
        "Spiritual Support",
        "Family Counseling"
      ],
      icon: <FaHeart className="text-red-500" />
    },
    {
      title: "Skills & Growth",
      description: "Develop new skills and rediscover your potential",
      features: [
        "Life Skills Training",
        "Leadership Development",
        "Creative Expression",
        "Digital Literacy",
        "Financial Education"
      ],
      icon: <FaStar className="text-blue-500" />
    },
    {
      title: "Community Support",
      description: "Building networks of support and understanding",
      features: [
        "Peer Support Network",
        "Community Advocacy",
        "Cultural Programs",
        "Youth Initiatives",
        "Elder Support"
      ],
      icon: <FaUsers className="text-green-500" />
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="bg-blue-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Empowerment Programs
            </h1>
            <p className="text-xl text-blue-100">
              Comprehensive support designed to help survivors heal, grow, and thrive in Garissa County
            </p>
          </div>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-semibold mb-6 text-center">Our Commitment to Empowerment</h2>
            <div className="space-y-6 text-gray-600">
              <p>
                At the heart of our mission lies a deep commitment to empowering survivors of gender-based violence. 
                We understand that each survivor's journey is unique, and our programs are designed to provide 
                comprehensive support that addresses both immediate needs and long-term healing.
              </p>
              <p>
                Our empowerment programs are built on the principles of trauma-informed care, cultural sensitivity, 
                and holistic support. We believe in creating safe spaces where survivors can heal, learn, and grow 
                at their own pace, supported by compassionate professionals and a community that understands their experiences.
              </p>
              <p>
                Through our various programs, we aim to help survivors rebuild their confidence, develop new skills, 
                and create sustainable pathways to independence. Our approach combines emotional support, practical 
                skills training, and community building to ensure comprehensive care and lasting impact.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Programs Grid */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-12 text-center">Our Programs</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {programs.map((program) => (
              <div 
                key={program.title}
                className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow"
              >
                <div className="text-2xl mb-4">{program.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{program.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{program.description}</p>
                <ul className="space-y-2">
                  {program.features.map((feature, i) => (
                    <li key={i} className="text-gray-700 text-sm flex items-center gap-2">
                      <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Impact Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-semibold mb-6 text-center">Our Impact</h2>
            <div className="space-y-6 text-gray-600">
              <p>
                Since our establishment, we have supported hundreds of survivors in their journey to recovery 
                and empowerment. Our programs have helped survivors rebuild their lives, find employment, 
                start small businesses, and become advocates for change in their communities.
              </p>
              <p>
                Through our skills development programs, many participants have gained financial independence 
                and started their own initiatives. Our support groups have created lasting bonds of friendship 
                and mutual support, proving that healing is possible when we stand together.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section - Clean white background */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-semibold mb-4 text-gray-800">Need Support?</h2>
              <p className="text-gray-600 mb-8">
                fill out the form below and we'll get back to you within 24 hours.
              </p>
             
            </div>

            <div className="max-w-xl mx-auto">
              <h3 className="text-2xl font-semibold mb-6 text-center text-gray-700">Send us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-md p-2"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-md p-2"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-700 mb-2">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full border border-gray-300 rounded-md p-2"
                    required
                  ></textarea>
                </div>

                <div className="text-center mt-6">
                  <button
                    type="submit"
                    className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700"
                  >
                    Send Message
                  </button>
                </div>
              </form>

              <div className="mt-12 text-center">
                <p className="text-gray-700 font-semibold mb-4">Or reach us directly:</p>
                <div className="space-y-3">
                  <div className="flex items-center justify-center space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    <a href="mailto:support@example.com" className="text-green-600 hover:text-green-700 hover:underline">
                      support@example.com
                    </a>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <p className="text-gray-600">
                      Garissa County, Kenya
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Empowerment;
