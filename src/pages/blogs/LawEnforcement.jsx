import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const LawEnforcement = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Simple Hero */}
      <div className="bg-emerald-900 text-white py-24">
        <div className="max-w-3xl mx-auto px-6">
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
            <h1 className="text-4xl font-bold mb-6">Law Enforcement Impact</h1>
            <p className="text-xl text-emerald-100">
              Real stories of change from Garissa's Gender-Friendly Police Desks
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="prose prose-lg prose-emerald"
        >
          {/* Case Study 1 */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-emerald-800">The First 24 Hours: Emergency Response</h2>
            <div className="bg-emerald-50 p-6 rounded-lg my-4">
              <p className="italic text-emerald-900">
                "When a survivor arrives at our desk, the first 24 hours are crucial. We immediately activate 
                our response protocol - medical care, psychological support, and evidence collection. Last month, 
                this rapid response helped us secure crucial evidence in a domestic violence case, leading to a 
                successful prosecution."
              </p>
              <cite className="text-emerald-700 not-italic">- Officer Fatuma, Gender Desk Lead</cite>
            </div>
            <p>
              Our gender desks operate 24/7, ensuring immediate support when survivors need it most. Each desk 
              is staffed by trained female officers who understand both the legal and cultural sensitivities 
              involved.
            </p>
          </div>

          {/* Case Study 2 */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-emerald-800">Community Outreach Success</h2>
            <div className="bg-gray-50 p-6 rounded-lg my-4">
              <p className="italic text-gray-800">
                "Through our weekly community meetings, we've built trust with local leaders. Last week, a 
                village elder who attended our sessions helped a young survivor reach our desk. This kind of 
                community partnership is transforming how cases are reported and handled."
              </p>
              <cite className="text-gray-600 not-italic">- Community Liaison Officer Hassan</cite>
            </div>
            <p>
              Regular community engagement has led to a 60% increase in case reporting, with community leaders 
              now actively supporting survivors in accessing justice.
            </p>
          </div>

          {/* Impact Statistics */}
          <div className="grid grid-cols-2 gap-6 my-12">
            <div className="bg-emerald-50 p-6 rounded-lg">
              <div className="text-3xl font-bold text-emerald-700">89%</div>
              <div className="text-sm text-emerald-800">Case Resolution Rate</div>
              <p className="text-sm text-gray-600 mt-2">
                Significant improvement from 40% in previous years
              </p>
            </div>
            <div className="bg-emerald-50 p-6 rounded-lg">
              <div className="text-3xl font-bold text-emerald-700">72hrs</div>
              <div className="text-sm text-emerald-800">Average Response Time</div>
              <p className="text-sm text-gray-600 mt-2">
                Reduced from 2 weeks before gender desk implementation
              </p>
            </div>
          </div>

          {/* Current Challenges and Solutions */}
          <h2 className="text-2xl font-bold text-emerald-800">Ongoing Improvements</h2>
          <p>
            While we've made significant progress, we continue to address challenges. Current initiatives include:
          </p>
          <ul>
            <li>Mobile reporting units for remote areas</li>
            <li>Enhanced witness protection programs</li>
            <li>Integrated case management system</li>
            <li>Regular officer trauma support sessions</li>
          </ul>

          {/* Call to Action */}
          <div className="bg-emerald-800 text-white p-8 rounded-lg mt-12">
            <h3 className="text-xl font-bold mb-4">Report Cases or Seek Support</h3>
            <p className="text-emerald-100 mb-4">
              Our gender desks are open 24/7. All cases are handled with strict confidentiality.
            </p>
            <div className="text-emerald-100">
              <div>Emergency Hotline: 0800-XXX-XXX</div>
              <div>WhatsApp: +254 XXX XXX XXX</div>
              <div>Email: support@garissagenderdesk.co.ke</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default LawEnforcement; 