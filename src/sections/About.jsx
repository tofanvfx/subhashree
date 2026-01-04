import React from 'react';
import { motion } from 'framer-motion';
import { Palette, Layers, PenTool } from 'lucide-react';
import subhashreeImg from '../assets/images/subhashree.jpeg';

const About = () => {
    return (
        <section id="about" className="py-20 bg-white relative overflow-hidden">
            <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

                {/* Image / Avatar */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="relative"
                >
                    <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl aspect-[4/5] max-w-md mx-auto">
                        {/* Placeholder for Subhashree's image. Using a professional diverse designer image from Unsplash. */}
                        <img
                            src={subhashreeImg}
                            alt="Subhashree - Designer"
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent mix-blend-multiply opacity-60"></div>
                    </div>
                    {/* Decorative Blob */}
                    <div className="absolute -z-10 top-10 -left-10 w-full h-full bg-secondary/10 rounded-full blur-3xl scale-90"></div>
                </motion.div>

                {/* Content */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <div className="flex items-center gap-2 text-secondary font-semibold mb-4">
                        <span className="w-10 h-0.5 bg-secondary"></span>
                        WHO I AM
                    </div>
                    <h2 className="text-4xl text-primary font-bold font-heading mb-6">
                        Blending creativity with usability to design meaningful experiences.
                    </h2>
                    <p className="text-lg text-text/80 leading-relaxed mb-8">
                        With over <span className="text-secondary font-semibold">3 years of experience</span> at AvetiLearning, I’ve worked on graphics design, UI/UX interfaces, and visual storytelling for educational products. I believe that good design isn't just about how things look—it's about how they work and how they make people feel.
                    </p>

                    {/* Fun Stats or Highlights */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
                        <div className="p-4 rounded-xl bg-background border border-gray-100 hover:border-secondary/30 transition-colors">
                            <Palette className="text-accent mb-2" size={24} />
                            <h4 className="font-bold text-primary">Visual Design</h4>
                        </div>
                        <div className="p-4 rounded-xl bg-background border border-gray-100 hover:border-secondary/30 transition-colors">
                            <Layers className="text-secondary mb-2" size={24} />
                            <h4 className="font-bold text-primary">UI/UX</h4>
                        </div>
                        <div className="p-4 rounded-xl bg-background border border-gray-100 hover:border-secondary/30 transition-colors">
                            <PenTool className="text-pink-500 mb-2" size={24} />
                            <h4 className="font-bold text-primary">Storytelling</h4>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
