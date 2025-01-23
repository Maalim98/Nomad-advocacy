import { FaCalendar, FaMapMarkerAlt, FaUsers } from 'react-icons/fa';
import awareness from '../../assets/images/awareness2.jpg';

const YouthWorkshop = () => {
  const workshops = [
    {
      title: "Understanding GBV",
      date: "March 25, 2024",
      time: "9:00 AM - 12:00 PM",
      location: "Garissa Youth Center"
    },
    {
      title: "Digital Safety & Cyberbullying",
      date: "March 27, 2024",
      time: "2:00 PM - 5:00 PM",
      location: "Tech Hub Garissa"
    },
    {
      title: "Peer Support Training",
      date: "March 29, 2024",
      time: "10:00 AM - 3:00 PM",
      location: "Community Center"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Hero Image */}
          <div className="relative h-64 md:h-96">
            <img 
              src={awareness} 
              alt="Youth Workshop" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent">
              <div className="absolute bottom-8 left-8 text-white">
                <span className="bg-emerald-500 text-sm px-3 py-1 rounded-full">
                  Free Registration
                </span>
                <h1 className="text-4xl font-bold mt-4">
                  Youth Empowerment Workshop Series
                </h1>
              </div>
            </div>
          </div>

          <div className="p-8 md:p-12">
            <div className="prose max-w-none">
              <div className="flex items-center space-x-4 text-gray-600 mb-8">
                <div className="flex items-center">
                  <FaCalendar className="mr-2" />
                  March 25-29, 2024
                </div>
                <div className="flex items-center">
                  <FaMapMarkerAlt className="mr-2" />
                  Multiple Locations
                </div>
                <div className="flex items-center">
                  <FaUsers className="mr-2" />
                  Ages 15-25
                </div>
              </div>

              <p className="text-lg text-gray-600 mb-8">
                Join us for an innovative workshop series designed specifically for young people 
                in Garissa County. Through interactive sessions, expert-led discussions, and 
                peer-to-peer learning, we'll explore crucial topics around gender-based violence, 
                personal safety, and community action.
              </p>

              <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-6 rounded-xl mb-8">
                <h2 className="text-2xl font-semibold text-indigo-900 mb-4">
                  Why Participate?
                </h2>
                <ul className="grid md:grid-cols-2 gap-4">
                  <li className="flex items-start">
                    <span className="text-indigo-500 text-xl mr-2">•</span>
                    <span>Gain valuable knowledge about GBV prevention</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-500 text-xl mr-2">•</span>
                    <span>Develop leadership skills</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-500 text-xl mr-2">•</span>
                    <span>Network with like-minded peers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-500 text-xl mr-2">•</span>
                    <span>Receive a certificate of completion</span>
                  </li>
                </ul>
              </div>

              <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                Workshop Schedule
              </h2>
              <div className="space-y-6">
                {workshops.map((workshop, index) => (
                  <div 
                    key={index}
                    className="bg-gray-50 p-6 rounded-xl border border-gray-100"
                  >
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      {workshop.title}
                    </h3>
                    <div className="grid md:grid-cols-3 gap-4 text-gray-600">
                      <div>
                        <strong>Date:</strong> {workshop.date}
                      </div>
                      <div>
                        <strong>Time:</strong> {workshop.time}
                      </div>
                      <div>
                        <strong>Location:</strong> {workshop.location}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-emerald-50 p-6 rounded-xl mt-8">
                <h2 className="text-2xl font-semibold text-emerald-800 mb-4">
                  How to Register
                </h2>
                <p className="text-gray-700 mb-4">
                  Registration is free and open to all young people aged 15-25. 
                  Space is limited to ensure quality interaction and learning.
                </p>
                <div className="flex flex-col md:flex-row gap-4">
                  <a 
                    href="mailto:ashrafzani585@gmail.com" 
                    className="bg-emerald-600 text-white px-6 py-3 rounded-lg text-center hover:bg-emerald-700 transition-colors"
                  >
                    Register by Email
                  </a>
                  <a 
                    href="tel:0717069813" 
                    className="bg-emerald-100 text-emerald-800 px-6 py-3 rounded-lg text-center hover:bg-emerald-200 transition-colors"
                  >
                    Call to Register
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YouthWorkshop; 