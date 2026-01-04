import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
    const experiences = [
        {
            company: 'AvetiLearning',
            role: 'Graphics Designer',
            duration: '3 Years',
            type: 'Full-time',
            description: [
                'Designed educational graphics and visual content for learning platforms.',
                'Created UI designs for learning platforms and mobile apps.',
                'Supported visual storytelling for educational videos.',
                'Collaborated with content & development teams to improve user engagement.'
            ]
        },
        // Placeholder for more experience if needed
    ];

    return (
        <section id="experience" className="py-20 bg-background relative overflow-hidden text-left">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-4xl font-bold font-heading text-primary mb-4">Experience</h2>
                    <p className="text-text/70">My professional journey in the EdTech industry.</p>
                </motion.div>

                <div className="max-w-3xl mx-auto relative">
                    {/* Vertical Line */}
                    <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 transform md:-translate-x-1/2"></div>

                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className={`mb-12 flex flex-col md:flex-row gap-8 relative ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                        >
                            {/* Timeline Dot */}
                            <div className="absolute left-8 md:left-1/2 top-0 w-4 h-4 rounded-full bg-secondary border-4 border-white shadow-sm transform -translate-x-1/2 z-10"></div>

                            {/* Content Side */}
                            <div className="pl-20 md:pl-0 md:w-1/2 md:px-10">
                                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow relative text-left">
                                    {/* Arrow */}
                                    {/* Simplified arrow implementation or remove for clean look */}

                                    <div className="flex items-center gap-2 text-sm text-secondary font-semibold mb-2">
                                        <Briefcase size={16} />
                                        {exp.company}
                                    </div>
                                    <h3 className="text-xl font-bold text-primary mb-1">{exp.role}</h3>
                                    <div className="flex items-center gap-2 text-sm text-text/60 mb-4">
                                        <Calendar size={14} />
                                        {exp.duration} • {exp.type}
                                    </div>
                                    <ul className="space-y-2">
                                        {exp.description.map((item, i) => (
                                            <li key={i} className="text-text/80 text-sm flex items-start gap-2">
                                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-secondary/60 flex-shrink-0"></span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Empty Side for alignment */}
                            <div className="hidden md:block md:w-1/2"></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
