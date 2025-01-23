import { FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';

// Import team member images
import training1 from '../../assets/images/training1.jpg';
import training2 from '../../assets/images/training2.jpg';
import training3 from '../../assets/images/training3.webp';
import training4 from '../../assets/images/training4.png';

const OurTeam = () => {
    const departments = [
        {
            title: "Leadership",
            members: [
                {
                    name: "Dr. Amina Hassan",
                    role: "Executive Director",
                    image: training1,
                    bio: "Leading our mission with 15 years of experience in GBV prevention. Dr. Hassan has pioneered several community outreach programs.",
                    expertise: "Crisis Management & Policy Development",
                    experience: [
                        "15+ years in GBV prevention and advocacy",
                        "PhD in Social Work from University of Nairobi",
                        "Led implementation of 3 major community programs"
                    ],
                    achievements: "Recipient of the 2022 Community Leadership Award"
                },
                {
                    name: "Fatuma Omar",
                    role: "Deputy Director",
                    image: training2,
                    bio: "Overseeing program implementation and strategic partnerships with over a decade of experience in community development.",
                    expertise: "Program Management & Strategy",
                    experience: [
                        "12 years in community development",
                        "Masters in Public Health",
                        "Former UN Women Program Coordinator"
                    ],
                    achievements: "Successfully managed projects worth over $2M"
                },
                {
                    name: "Ahmed Ibrahim",
                    role: "Operations Director",
                    image: training3,
                    bio: "Managing day-to-day operations with expertise in resource allocation and team management.",
                    expertise: "Operations & Resource Management",
                    experience: [
                        "10 years in operations management",
                        "MBA from Strathmore University",
                        "Certified Project Management Professional"
                    ],
                    achievements: "Improved operational efficiency by 40%"
                }
            ]
        },
        {
            title: "Mental Health & Counseling",
            members: [
                {
                    name: "Dr. Fatuma Ibrahim",
                    role: "Clinical Psychologist",
                    image: training4,
                    bio: "Specializing in trauma therapy with extensive experience in PTSD treatment and crisis intervention.",
                    expertise: "Trauma Therapy & PTSD Treatment",
                    experience: [
                        "PhD in Clinical Psychology",
                        "8 years specializing in trauma therapy",
                        "Certified EMDR practitioner"
                    ],
                    achievements: "Developed innovative trauma therapy program reaching 500+ survivors"
                },
                {
                    name: "Halima Abdi",
                    role: "Senior Counselor",
                    image: training1,
                    bio: "Certified trauma counselor specializing in youth support services.",
                    expertise: "Youth Counseling & Group Therapy",
                    experience: [
                        "10 years counseling experience",
                        "Masters in Clinical Psychology",
                        "Specialized in youth trauma"
                    ],
                    achievements: "Established youth support program serving 200+ annually"
                },
                {
                    name: "Maryam Hussein",
                    role: "Family Counselor",
                    image: training2,
                    bio: "Specialized in family therapy and relationship counseling.",
                    expertise: "Family Therapy & Counseling",
                    experience: [
                        "7 years in family counseling",
                        "Advanced certification in family therapy",
                        "Group therapy specialist"
                    ],
                    achievements: "Successfully facilitated 100+ family reconciliations"
                }
            ]
        },
        {
            title: "Legal Support",
            members: [
                {
                    name: "Advocate Zainab Omar",
                    role: "Senior Legal Coordinator",
                    image: training3,
                    bio: "Human rights lawyer with 10 years experience in GBV cases.",
                    expertise: "Legal Aid & Rights Advocacy",
                    experience: [
                        "10 years in human rights law",
                        "LLM in Human Rights Law",
                        "Certified mediator"
                    ],
                    achievements: "Won landmark cases protecting survivors' rights"
                },
                {
                    name: "Advocate Hassan Ali",
                    role: "Legal Officer",
                    image: training4,
                    bio: "Specializing in family law and protection orders.",
                    expertise: "Family Law & Protection Orders",
                    experience: [
                        "8 years legal practice",
                        "Specialized in family law",
                        "Protection order expert"
                    ],
                    achievements: "Secured protection orders for 300+ survivors"
                },
                {
                    name: "Advocate Amina Yusuf",
                    role: "Legal Counsel",
                    image: training1,
                    bio: "Expert in criminal law and GBV case prosecution.",
                    expertise: "Criminal Law & Prosecution",
                    experience: [
                        "6 years in criminal law",
                        "Former state prosecutor",
                        "GBV case specialist"
                    ],
                    achievements: "90% success rate in GBV case prosecution"
                }
            ]
        },
        {
            title: "Community Outreach",
            members: [
                {
                    name: "Ahmed Omar",
                    role: "Outreach Director",
                    image: training2,
                    bio: "Leading community engagement and awareness programs.",
                    expertise: "Community Engagement & Education",
                    experience: [
                        "12 years in community work",
                        "Masters in Community Development",
                        "Program design specialist"
                    ],
                    achievements: "Reached 50,000+ community members through awareness programs"
                },
                {
                    name: "Khadija Ali",
                    role: "Community Mobilizer",
                    image: training3,
                    bio: "Working with communities on GBV prevention.",
                    expertise: "Community Mobilization & Training",
                    experience: [
                        "8 years field experience",
                        "Community health specialist",
                        "Training program developer"
                    ],
                    achievements: "Trained 1000+ community advocates"
                },
                {
                    name: "Ibrahim Hassan",
                    role: "Youth Coordinator",
                    image: training4,
                    bio: "Coordinating youth programs and school outreach.",
                    expertise: "Youth Programs & Education",
                    experience: [
                        "5 years in youth work",
                        "Education specialist",
                        "Program coordinator"
                    ],
                    achievements: "Established programs in 30+ schools"
                }
            ]
        },
        {
            title: "Medical Support",
            members: [
                {
                    name: "Dr. Farhiya Mohamed",
                    role: "Medical Director",
                    image: training1,
                    bio: "Overseeing medical services and health programs.",
                    expertise: "Medical Care & Health Services",
                    experience: [
                        "15 years medical practice",
                        "Emergency medicine specialist",
                        "Healthcare program director"
                    ],
                    achievements: "Established 24/7 medical response protocol"
                },
                {
                    name: "Nurse Asha Ali",
                    role: "Senior Nurse",
                    image: training2,
                    bio: "Providing direct medical care to survivors.",
                    expertise: "Emergency Care & Support",
                    experience: [
                        "10 years nursing experience",
                        "Trauma care specialist",
                        "Emergency response coordinator"
                    ],
                    achievements: "Trained 50+ medical staff in trauma response"
                },
                {
                    name: "Dr. Hassan Abdi",
                    role: "Health Coordinator",
                    image: training3,
                    bio: "Coordinating with healthcare partners and facilities.",
                    expertise: "Healthcare Coordination",
                    experience: [
                        "8 years in healthcare management",
                        "Public health specialist",
                        "Partnership coordinator"
                    ],
                    achievements: "Established partnerships with 15 healthcare facilities"
                }
            ]
        }
    ];

    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-emerald-900 to-emerald-700 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">
                        Our Professional Team
                    </h1>
                    <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
                        Meet our dedicated team of professionals working together to support survivors 
                        and prevent gender-based violence in Garissa County
                    </p>
                </div>
            </div>

            {/* Team Sections */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {departments.map((department, index) => (
                    <div key={department.title} className="mb-16">
                        <h2 className="text-3xl font-bold text-emerald-800 mb-8 relative">
                            {department.title}
                            <div className="absolute bottom-0 left-0 w-24 h-1 bg-emerald-500"></div>
                        </h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {department.members.map((member) => (
                                <div 
                                    key={member.name} 
                                    className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300"
                                >
                                    <div className="relative">
                                        <img 
                                            src={member.image} 
                                            alt={member.name}
                                            className="w-full h-64 object-cover"
                                        />
                                        <div className="absolute inset-0 bg-emerald-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                            <div className="flex space-x-4">
                                                <a href="#" className="text-white hover:text-emerald-300 transition-colors">
                                                    <FaLinkedin size={24} />
                                                </a>
                                                <a href="#" className="text-white hover:text-emerald-300 transition-colors">
                                                    <FaTwitter size={24} />
                                                </a>
                                                <a href="#" className="text-white hover:text-emerald-300 transition-colors">
                                                    <FaEnvelope size={24} />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-xl font-semibold text-emerald-800 mb-2">
                                            {member.name}
                                        </h3>
                                        <p className="text-emerald-600 font-medium mb-3">
                                            {member.role}
                                        </p>
                                        <p className="text-gray-600 mb-4">
                                            {member.bio}
                                        </p>
                                        <div className="bg-emerald-50 text-emerald-700 text-sm px-3 py-1 rounded-full inline-block">
                                            {member.expertise}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* Join Us Section */}
            <div className="bg-emerald-800 text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold mb-6">Join Our Team</h2>
                    <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
                        We're always looking for passionate professionals to join our mission. 
                        Make a difference in your community.
                    </p>
                    <button className="bg-white text-emerald-800 px-8 py-3 rounded-full font-semibold hover:bg-emerald-50 transition-colors">
                        View Open Positions
                    </button>
                </div>
            </div>
        </div>
    );
};

export default OurTeam;