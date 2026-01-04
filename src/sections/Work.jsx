import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import img1 from '../assets/images/1.png';
import img2 from '../assets/images/2.png';
import img3 from '../assets/images/3.png';
import img4 from '../assets/images/4.png';
import img5 from '../assets/images/5.png';
import img6 from '../assets/images/6.png';
import img7 from '../assets/images/7.png';
import img8 from '../assets/images/8.png';
import img9 from '../assets/images/9.png';

const Work = () => {
    const [filter, setFilter] = useState('all');
    const [selectedProject, setSelectedProject] = useState(null);

    const projects = [
        // Graphic Design (1-6)
        {
            id: 1,
            title: 'Creative Brand Identity',
            category: 'graphic',
            image: img1,
            tags: ['Illustrator', 'Branding', 'Typography'],
            description: "A complete brand identity overhaul focusing on modern typography and vibrant colors to reflect the client's creative vision."
        },
        {
            id: 2,
            title: 'Marketing Campaign',
            category: 'graphic',
            image: img2,
            tags: ['Photoshop', 'Social Media', 'Advertising'],
            description: "Social media visual assets designed to boost engagement and brand awareness across multiple platforms."
        },
        {
            id: 3,
            title: 'Events & Promotions',
            category: 'graphic',
            image: img3,
            tags: ['InDesign', 'Print', 'Layout'],
            description: "Print and digital collateral for a major industry event, ensuring consistent messaging and visual appeal."
        },
        {
            id: 4,
            title: 'Digital Art Series',
            category: 'graphic',
            image: img4,
            tags: ['Photoshop', 'Digital Painting'],
            description: "An experimental digital art series exploring themes of technology and nature."
        },
        {
            id: 5,
            title: 'Character Design',
            category: 'graphic',
            image: img5,
            tags: ['Illustrator', 'Vector Art', 'Logos'],
            description: "A vector-based character design exploring multiple poses and expressions to ensure consistency, flexibility, and clarity across illustrations, animations, and storytelling projects."
        },
        {
            id: 6,
            title: 'Composition Work',
            category: 'graphic',
            image: img6,
            tags: ['Dimension', 'Packaging', '3D'],
            description: "A detailed illustration composition depicting a lively Indian marketplace and fair environment. The artwork focuses on visual balance, depth, character placement, and storytelling through everyday scenes, creating a rich and engaging narrative-driven composition."
        },
        // UI/UX Design (7-9)
        {
            id: 7,
            title: 'UX research Process',
            category: 'ui-ux',
            image: img7,
            tags: ['Figma', 'Mobile App', 'Prototyping'],
            description: "A visual representation of the UX research process, showcasing a user-centered approach from problem discovery to solution validation."
        },
        {
            id: 8,
            title: 'Wireframing',
            category: 'ui-ux',
            image: img8,
            tags: ['Figma', 'Web Design', 'Data Viz'],
            description: "Low-fidelity mobile wireframes created to define screen structure, content hierarchy, and user flow. These wireframes focus on usability, navigation clarity, and layout consistency before moving into visual design."
        },
        {
            id: 9,
            title: 'Low-High Fidelity Mockups',
            category: 'ui-ux',
            image: img9,
            tags: ['Adobe XD', 'Web App', 'Interaction'],
            description: "A visual journey from wireframes to high-fidelity mockups, showcasing structured thinking and polished UI execution."
        }
    ];

    const filteredProjects = filter === 'all'
        ? projects
        : projects.filter(project => project.category === filter);

    return (
        <section id="work" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold font-heading text-primary mb-6">Featured Work</h2>

                    {/* Filters */}
                    <div className="flex flex-wrap justify-center gap-4">
                        {['all', 'ui-ux', 'graphic'].map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`px-6 py-2 rounded-full border transition-all duration-300 capitalize
                                    ${filter === cat
                                        ? 'bg-primary text-white border-primary'
                                        : 'bg-transparent text-text border-gray-200 hover:border-primary/50'
                                    }`}
                            >
                                {cat === 'ui-ux' ? 'UI/UX Design' : cat === 'graphic' ? 'Graphic Design' : 'All Projects'}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
                    <AnimatePresence mode='popLayout'>
                        {filteredProjects.map((project) => (
                            <motion.div
                                key={project.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                onClick={() => setSelectedProject(project)}
                                className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
                            >
                                <div className="aspect-[16/10] overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                                    <h3 className="text-2xl font-bold text-white mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                                        {project.title}
                                    </h3>
                                    <div className="flex gap-2 flex-wrap translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                                        {project.tags.map(tag => (
                                            <span key={tag} className="text-xs font-medium px-2 py-1 rounded bg-white/20 text-white backdrop-blur-sm">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="absolute top-6 right-6 p-2 bg-white rounded-full text-primary opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-150">
                                        <ArrowUpRight size={20} />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>

            {/* Project Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
                        onClick={() => setSelectedProject(null)}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="bg-white rounded-2xl overflow-hidden max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="relative">
                                <img
                                    src={selectedProject.image}
                                    alt={selectedProject.title}
                                    className="w-full h-auto max-h-[60vh] object-contain bg-gray-100"
                                />
                                <button
                                    onClick={() => setSelectedProject(null)}
                                    className="absolute top-4 right-4 p-2 bg-white/50 hover:bg-white text-primary rounded-full backdrop-blur-md transition-colors"
                                >
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                                </button>
                            </div>

                            <div className="p-8">
                                <div className="flex flex-wrap items-center gap-4 mb-4">
                                    <span className="px-3 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-medium uppercase tracking-wide">
                                        {selectedProject.category === 'ui-ux' ? 'UI/UX Design' : 'Graphic Design'}
                                    </span>
                                    <div className="flex gap-2">
                                        {selectedProject.tags.map(tag => (
                                            <span key={tag} className="text-sm text-text/60 border border-gray-200 px-2 py-0.5 rounded">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <h3 className="text-3xl font-bold text-primary mb-4">{selectedProject.title}</h3>
                                <p className="text-text/80 leading-relaxed text-lg mb-8">
                                    {selectedProject.description || "Project description not available."}
                                </p>

                                <button onClick={() => setSelectedProject(null)} className="px-6 py-2.5 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors">
                                    Close Details
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Work;
