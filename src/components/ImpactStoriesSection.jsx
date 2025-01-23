import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

import woman1 from "../assets/images/smilinglady.jpg";
import woman4 from "../assets/images/wuman4.jpg"; 
import dimple from "../assets/images/dimpledlady.jpg"; 
import xalimo from "../assets/images/halimo.jpg"; // Using xalimo.jpg as a fallback for missing images

const ImpactStoriesSection = () => {
    const [activeTestimonial, setActiveTestimonial] = useState(0);

    const testimonials = [
        {
            name: "Catherine Ndunge Wambua",
            role: "CAREGIVER TO GBV SURVIVOR",
            story: `I lived with my daughter and I noticed that she was not okay. She used to sit alone and think 
            a lot. At some point she wanted to commit suicide. I interrogated her to find out what was wrong and she 
            told me what the pastor had done to her. I took her to Karen hospital where we found out she was pregnant. 
            We were then referred to GVRC. Getting to learn what the pastor had done was so painful to me.`,
            image: woman1,
        },
        {
            name: "Amina Hassan Mohamed",
            role: "COMMUNITY ADVOCATE",
            story: `As a community leader in Eastleigh, I've seen many women suffer in silence. When I discovered GVRC, 
            it became a beacon of hope. We've helped over 50 women from our community access counseling and medical care. 
            The cultural sensitivity and respect shown by the staff has made a huge difference in breaking down barriers.`,
            image: woman4,
        },
        {
            name: "Fatuma Abdi Nur",
            role: "SURVIVOR & MENTOR",
            story: `After my experience, I felt lost and ashamed. GVRC not only helped me heal but also empowered me 
            to become a voice for others. Today, I lead support groups for young Somali women, showing them that 
            seeking help is not a sign of weakness but of strength.`,
            image: xalimo, // Replaced woman3.jpg with xalimo.jpg
        },
        {
            name: "Zahra Ibrahim Ahmed",
            role: "YOUTH COUNSELOR",
            story: `Working with teenage survivors has shown me how crucial early intervention is. One young girl's 
            story particularly moved me - she went from barely speaking to becoming a peer counselor herself. GVRC's 
            approach to healing considers both emotional and cultural aspects.`,
            image: dimple,
        },
        {
            name: "Halima Omar Sheikh",
            role: "SUPPORT GROUP FACILITATOR",
            story: `When I started the women's support group, many were hesitant to share. Now, our sessions are a 
            safe space where healing happens collectively. We've created a sisterhood that extends beyond our weekly 
            meetings, supporting each other through recovery and growth.`,
            image: xalimo,
        },
    ];

    return (
        <section className="py-8 md:py-16 bg-gradient-to-b from-gray-50 to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                {/* Section Header */}
                <div className="text-center mb-8 md:mb-16">
                    <span className="text-emerald-600 text-sm md:text-base font-semibold tracking-wider uppercase">
                        Real Stories, Real Impact
                    </span>
                    <h2 className="text-2xl md:text-4xl font-bold text-emerald-800 mt-2">
                        Voices of Change
                    </h2>
                    <div className="h-1 w-24 bg-gradient-to-r from-emerald-500 to-yellow-400 mx-auto mt-4"></div>
                </div>

                {/* Featured Testimonial */}
                <div className="mb-12 md:mb-20">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTestimonial}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="bg-white rounded-xl md:rounded-2xl shadow-lg overflow-hidden"
                        >
                            <div className="flex flex-col md:flex-row h-auto md:h-[400px]">
                                {/* Image Side */}
                                <div className="relative h-64 md:h-auto w-full md:w-1/2">
                                    <img
                                        src={testimonials[activeTestimonial].image}
                                        alt={testimonials[activeTestimonial].name}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                                    <div className="absolute bottom-4 left-4 text-white">
                                        <h3 className="text-xl font-bold">{testimonials[activeTestimonial].name}</h3>
                                        <p className="text-sm text-emerald-300">{testimonials[activeTestimonial].role}</p>
                                    </div>
                                </div>

                                {/* Text Side */}
                                <div className="p-6 md:p-8 md:w-1/2 flex flex-col justify-center">
                                    <p className="text-gray-600 text-lg leading-relaxed">
                                        {testimonials[activeTestimonial].story}
                                    </p>
                                </div>
                            </div>

                            {/* Navigation Dots */}
                            <div className="flex justify-center p-4 bg-gray-50">
                                {testimonials.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setActiveTestimonial(index)}
                                        className={`w-2 h-2 mx-1 rounded-full transition-all duration-300
                                            ${index === activeTestimonial ? 'w-6 bg-emerald-500' : 'bg-gray-300'}`}
                                        aria-label={`Testimonial ${index + 1}`}
                                    />
                                ))}
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Add More Testimonials Button */}
                
            </div>
        </section>
    );
};

export default ImpactStoriesSection;
