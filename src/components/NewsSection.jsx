import { FaCalendar, FaExternalLinkAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import { mobileClasses } from '../styles/responsive';
import ResponsiveContainer from './layout/ResponsiveContainer';

import supportCenter from "../assets/images/sapport center.jpg"
import awareness from "../assets/images/awareeness2.jpg"
import meeting from "../assets/images/meeeting.jpg"

const NewsSection = () => {
  const news = [
    {
      date: "2024-03-20",
      title: "Women's Economic Empowerment Hub",
      excerpt: "Join our revolutionary program combining skills training, business mentorship, and healing support. Building economic independence for survivors.",
      image: supportCenter,
      link: "/news/empowerment",
      tag: "Empowerment"
    },
    {
      date: "2024-03-15",
      title: "Mobile Outreach Success",
      excerpt: "Our mobile teams have reached 15 remote villages this month, providing essential services and emergency support.",
      image: awareness,
      link: "/news/outreach",
      tag: "Outreach"
    },
    {
      date: "2024-03-10",
      title: "Community Support Network",
      excerpt: "Local leaders unite to create safe spaces and support systems across Garissa County.",
      image: meeting,
      link: "/news/network",
      tag: "Community"
    }
  ];

  return (
    <section className={mobileClasses.section}>
      <ResponsiveContainer>
        <div className="text-center mb-8">
          <h2 className={`${mobileClasses.heading} text-3xl font-bold text-emerald-800`}>
            Latest Updates
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-emerald-500 to-yellow-400 mx-auto mt-4"></div>
        </div>
        <div className={`grid gap-8 ${mobileClasses.grid}`}>
          {news.map((item) => (
            <Link 
              to={item.link}
              key={item.title}
              className="bg-white rounded-xl shadow-md overflow-hidden transform hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-white/90 text-emerald-600 text-xs font-semibold px-3 py-1 rounded-full">
                    {item.tag}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-gray-500 mb-2">
                  <FaCalendar className="mr-2" />
                  {new Date(item.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{item.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{item.excerpt}</p>
                <div className="flex items-center text-emerald-600 font-medium group">
                  Read Full Story 
                  <FaExternalLinkAlt className="ml-2 text-sm transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </ResponsiveContainer>
    </section>
  );
};

export default NewsSection;