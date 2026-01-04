import React from 'react';
import { motion } from 'framer-motion';
import { Figma, PenTool, Image, Video, Layers, Monitor } from 'lucide-react';

const Skills = () => {
    const skills = [
        { name: 'Figma', icon: <Figma size={32} />, color: 'text-purple-500', bg: 'bg-purple-500/10' },
        { name: 'Photoshop', icon: <Image size={32} />, color: 'text-blue-500', bg: 'bg-blue-500/10' },
        { name: 'Illustrator', icon: <PenTool size={32} />, color: 'text-orange-500', bg: 'bg-orange-500/10' },
        { name: 'Adobe XD', icon: <Monitor size={32} />, color: 'text-pink-500', bg: 'bg-pink-500/10' },
        { name: 'After Effects', icon: <Video size={32} />, color: 'text-indigo-500', bg: 'bg-indigo-500/10' },
        { name: 'Adobe Animate', icon: <Layers size={32} />, color: 'text-red-500', bg: 'bg-red-500/10' },
    ];

    return (
        <section id="skills" className="py-20 bg-background relative">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold font-heading text-primary mb-4">Core Tools & Skills</h2>
                        <p className="text-text/70 max-w-2xl mx-auto">
                            My creative arsenal includes industry-standard tools for visual design, UI prototyping, and motion graphics.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -5, scale: 1.02 }}
                            className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center justify-center gap-4 group hover:shadow-lg transition-all"
                        >
                            <div className={`p-4 rounded-full ${skill.bg} ${skill.color} transition-colors group-hover:scale-110 duration-300`}>
                                {skill.icon}
                            </div>
                            <h3 className="font-semibold text-text group-hover:text-primary transition-colors">{skill.name}</h3>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
