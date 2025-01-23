import { Link } from 'react-router-dom';
import communitySupport from '../assets/images/communitysapport.jpg';
import { FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';

const IntroSection = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.3,
                ease: "easeOut"
            }
        }
    };

    return (
        <section className="pt-20 md:pt-40 pb-20 bg-gradient-to-b from-white to-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div 
                    className="mb-12 md:mb-16 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ margin: "-100px" }}
                    transition={{ duration: 0.3 }}
                >
                    <div className="inline-block">
                        <h2 className="text-3xl md:text-4xl font-bold text-emerald-800 relative">
                            <span className="absolute -left-4 md:-left-6 top-0 text-5xl md:text-6xl text-emerald-200/50">N</span>
                            Nomad Advocacy
                        </h2>
                        <div className="h-1 w-full bg-gradient-to-r from-emerald-500 to-yellow-400 mt-4"></div>
                    </div>
                </motion.div>

                <div className="max-w-6xl mx-auto space-y-12">
                    {/* New Who We Are Section */}
                    <div className="relative py-12">
                        <motion.div 
                            className="grid md:grid-cols-2 gap-8 relative z-10"
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ margin: "-100px" }}
                        >
                            {/* Left Column - Image */}
                            <motion.div 
                                className="relative rounded-2xl overflow-hidden shadow-xl h-[500px]"
                                variants={itemVariants}
                            >
                                <img 
                                    src={communitySupport}
                                    alt="Our community" 
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/90 to-transparent">
                                    <div className="absolute bottom-0 left-0 p-6">
                                        <h3 className="text-white text-2xl font-bold mb-2">Local Roots, Global Impact</h3>
                                        <p className="text-emerald-100">Founded in Garissa, serving humanity.</p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Right Column - Content */}
                            <motion.div 
                                className="space-y-6 md:p-6"
                                variants={itemVariants}
                            >
                                <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                                    <h3 className="text-xl font-semibold text-emerald-800 mb-3">Community-Led Organization</h3>
                                    <p className="text-gray-700">
                                        We are more than just an organization – we are a movement led by the community, 
                                        for the community. Our team consists of local leaders, survivors, and dedicated 
                                        professionals working together.
                                    </p>
                                </div>

                                <div className="bg-emerald-50/50 backdrop-blur-sm rounded-xl p-6 shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                                    <h3 className="text-xl font-semibold text-emerald-800 mb-3">Cultural Understanding</h3>
                                    <p className="text-gray-700">
                                        Our approach is deeply rooted in local traditions while embracing modern solutions. 
                                        We understand the delicate balance between cultural sensitivity and progressive change.
                                    </p>
                                </div>

                                <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                                    <div className="flex items-center justify-between mb-4">
                                        <h3 className="text-xl font-semibold text-emerald-800">Our Reach</h3>
                                        <span className="text-3xl font-bold text-emerald-600">300+</span>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {[
                                            "Garissa Township",
                                            "Dadaab",
                                            "Fafi",
                                            "Ijara",
                                            "Balambala",
                                            "Lagdera"
                                        ].map((location, index) => (
                                            <span 
                                                key={index}
                                                className="px-3 py-1 bg-emerald-100/50 text-emerald-800 rounded-full text-sm"
                                            >
                                                {location}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Background Elements */}
                        <div className="absolute inset-0 z-0">
                            <div className="absolute top-10 left-10 w-32 h-32 bg-emerald-200/20 rounded-full blur-3xl"></div>
                            <div className="absolute bottom-10 right-10 w-32 h-32 bg-yellow-200/20 rounded-full blur-3xl"></div>
                        </div>
                    </div>

                    {/* Rest of your sections */}
                    <div className="grid md:grid-cols-2 gap-8 mt-12">
                        {/* Story Section */}
                        <motion.div 
                            className="bg-white p-8 rounded-2xl shadow-lg transform hover:-translate-y-1 transition-transform duration-300"
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ margin: "-100px" }}
                            transition={{ delay: 0.8 }}
                        >
                            <h3 className="text-xl font-semibold text-emerald-800 mb-6">Our Story</h3>
                            <div className="space-y-6">
                                <motion.p variants={itemVariants} className="text-gray-700 leading-relaxed">
                                    In the heart of Garissa County, we stand as a beacon of hope and support for survivors of gender-based violence. Our community-based organization was founded on the principle that healing requires both understanding and action.
                                </motion.p>
                                <motion.div variants={itemVariants} className="border-l-4 border-emerald-500 pl-4 my-8">
                                    <p className="text-emerald-800 italic text-lg">
                                        "Building bridges between traditional wisdom and modern support systems"
                                    </p>
                                </motion.div>
                                <motion.p variants={itemVariants} className="text-gray-700 leading-relaxed">
                                    Through our dedicated team of local experts, we combine professional expertise with deep cultural understanding. This unique approach allows us to create meaningful change while respecting community values and traditions.
                                </motion.p>
                            </div>
                        </motion.div>

                        {/* Impact Section */}
                        <motion.div 
                            className="bg-emerald-50 p-8 rounded-2xl shadow-lg"
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ margin: "-100px" }}
                            transition={{ delay: 1.2 }}
                        >
                            <h3 className="text-xl font-semibold text-emerald-800 mb-6">Our Impact</h3>
                            <div className="space-y-6">
                                <motion.div variants={itemVariants} className="flex items-center gap-4 mb-8">
                                    <div className="bg-emerald-100 p-4 rounded-full">
                                        <span className="text-3xl text-emerald-600 font-bold">300+</span>
                                    </div>
                                    <p className="text-gray-700 text-lg">Survivors supported across Garissa County</p>
                                </motion.div>
                                <motion.p variants={itemVariants} className="text-gray-700 leading-relaxed text-lg">
                                    From urban centers to remote pastoral communities, our reach extends through:
                                </motion.p>
                                <motion.ul variants={itemVariants} className="list-none space-y-3 ml-4">
                                    {[
                                        "Mobile outreach programs",
                                        "'Deris wanaag' support groups",
                                        "'Youth Champions' initiatives",
                                        "Economic empowerment programs"
                                    ].map((item, index) => (
                                        <li key={index} className="flex items-center gap-3 text-gray-700">
                                            <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                                            {item}
                                        </li>
                                    ))}
                                </motion.ul>
                            </div>
                        </motion.div>
                    </div>

                    {/* CTA Button */}
                    <motion.div 
                        className="text-center mt-16"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ margin: "-100px" }}
                        transition={{ duration: 1, delay: 1.5 }}
                    >
                        <Link 
                            to="/who-we-are/about"
                            className="group inline-flex items-center gap-3 bg-gradient-to-r from-emerald-600 to-emerald-800 
                                     text-white px-8 py-4 rounded-full text-lg font-semibold
                                     hover:from-emerald-700 hover:to-emerald-900 transition-all duration-500
                                     shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                        >
                            Learn More About Us
                            <FaArrowRight className="group-hover:translate-x-2 transition-transform duration-500" />
                        </Link>
                    </motion.div>

                    {/* Quote Section */}
                    <motion.div 
                        className="relative mt-20 md:mt-32"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ margin: "-100px" }}
                        transition={{ duration: 1.2, delay: 1.8 }}
                    >
                        <div className="absolute inset-0 bg-emerald-800/10 rounded-3xl transform rotate-1"></div>
                        <div className="absolute inset-0 bg-yellow-400/10 rounded-3xl transform -rotate-1"></div>
                        <div className="relative overflow-hidden rounded-3xl shadow-xl">
                            <img 
                                src={communitySupport}
                                alt="Community support" 
                                className="w-full h-[300px] md:h-[400px] object-cover transform hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="max-w-3xl px-6 text-center transform hover:scale-105 transition-transform duration-500">
                                        <div className="bg-white/10 backdrop-blur-md p-6 md:p-8 rounded-3xl border border-white/20">
                                            <span className="text-yellow-400 text-4xl md:text-5xl font-light">❝</span>
                                            <p className="text-white text-xl md:text-3xl font-light mt-2 mb-4 leading-relaxed">
                                                Together, we&apos;re building a future where
                                                <span className="block text-2xl md:text-4xl font-semibold text-emerald-400 my-2">
                                                    every voice is heard
                                                </span>
                                                and every survivor finds their path to healing
                                            </p>
                                            <span className="text-yellow-400 text-4xl md:text-5xl font-light rotate-180 inline-block">❝</span>
                                            <div className="mt-3">
                                                <span className="text-emerald-300 text-sm md:text-base font-medium tracking-wider uppercase">
                                                    — Our Promise —
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default IntroSection;
