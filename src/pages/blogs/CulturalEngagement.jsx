import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaMosque, FaBook, FaUsers, FaHandHoldingHeart } from 'react-icons/fa';

const CulturalEngagement = () => {
  const pillars = [
    {
      icon: <FaMosque />,
      title: "Religious Leadership",
      text: "Partnership with Islamic scholars and mosque leaders"
    },
    {
      icon: <FaBook />,
      title: "Cultural Wisdom",
      text: "Integration of traditional Somali values"
    },
    {
      icon: <FaUsers />,
      title: "Community Dialogue",
      text: "Open forums for meaningful discussions"
    },
    {
      icon: <FaHandHoldingHeart />,
      title: "Sustainable Change",
      text: "Long-term impact through cultural alignment"
    }
  ];

  return (
    <div className="min-h-screen bg-[#fcfcfc]">
      {/* Arabic-inspired decorative header */}
      <div className="bg-emerald-900 text-white relative overflow-hidden">
        {/* Geometric pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M60 0l60 60-60 60L0 60 60 0z' fill='%23ffffff' fill-opacity='0.4'/%3E%3C/svg%3E")`,
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="max-w-4xl mx-auto px-6 py-24 relative">
          <Link 
            to="/who-we-are/about" 
            className="inline-flex items-center text-emerald-100 hover:text-white mb-12 group"
          >
            <FaArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to About Us
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Cultural Engagement
            </h1>
            <p className="text-xl text-emerald-100 max-w-2xl">
              Aligning tradition and progress for lasting change in Garissa
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Cultural pillars */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-6 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-emerald-600 text-2xl mb-3">{pillar.icon}</div>
              <h3 className="font-semibold text-emerald-800 mb-2">{pillar.title}</h3>
              <p className="text-sm text-gray-600">{pillar.text}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="prose prose-lg max-w-none"
        >
          {/* Featured quote */}
          <div className="my-12 p-8 bg-emerald-50 rounded-lg border-r-4 border-emerald-600">
            <p className="text-xl text-emerald-900 font-medium italic mb-4">
              "In Garissa, meaningful change grows from the roots of our traditions, nourished by the wisdom of our 
              elders and the teachings of our faith."
            </p>
            <cite className="text-emerald-700 not-italic">- Community Elder</cite>
          </div>

          <p className="text-xl leading-relaxed">
            In a region as culturally rich as Garissa, any meaningful social change must be rooted in respect for 
            tradition. That's why cultural engagement has been at the heart of our efforts to combat gender-based 
            violence (GBV) and promote gender equality.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-emerald-800 font-semibold mb-3">Religious Foundation</h3>
              <p className="text-gray-600 m-0">
                By collaborating with local Islamic leaders and grounding our work in religious teachings, we create 
                change that resonates with community values.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-emerald-800 font-semibold mb-3">Cultural Wisdom</h3>
              <p className="text-gray-600 m-0">
                Our approach integrates traditional Somali values with progressive change, ensuring sustainable impact 
                through cultural alignment.
              </p>
            </div>
          </div>

          <p>
            The cornerstone of this initiative is dialogue. Rather than imposing outside solutions, we've worked to 
            foster meaningful conversations within the community. Islamic leaders, who are highly respected and trusted, 
            have played a pivotal role in shaping narratives around gender roles and equality.
          </p>

          <p>
            This approach has proven transformative. By aligning initiatives with cultural norms, we've created an 
            environment where conversations about sensitive issues like GBV can take place openly and constructively.
          </p>

          <p>
            Cultural engagement is not just about bridging gaps; it's about building lasting connections. By respecting 
            and integrating the values that define Garissa's identity, we've ensured that our initiatives are not only 
            effective but also sustainable.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default CulturalEngagement; 