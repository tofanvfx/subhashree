import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, MousePointer2, LayoutTemplate, Palette } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-50 via-white to-white">
            {/* Background Elements */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
                {/* Grid Pattern */}
                <div className="absolute inset-0 bg-[radial-gradient(#94a3b8_1px,transparent_1px)] [background-size:16px_16px]"></div>

                {/* Gradient Blobs */}
                <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-b from-secondary/10 to-transparent rounded-bl-full blur-3xl opacity-50" />
                <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-t from-accent/10 to-transparent rounded-tr-full blur-3xl opacity-50" />
            </div>

            <div className="container mx-auto px-6 text-center relative pointer-events-none"> {/* Content Container */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto pointer-events-auto"
                >

                    <h1 className="text-5xl md:text-7xl font-bold font-heading text-primary leading-tight mb-6">
                        Designing Stories Through <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent">
                            Visuals & Interfaces
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl text-text/80 max-w-2xl mx-auto mb-10 leading-relaxed">
                        I’m Subhashree, a passionate designer with 3+ years of experience creating impactful graphics and intuitive user interfaces in the EdTech industry.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="#work"
                            className="px-8 py-3.5 rounded-full bg-primary text-white font-medium flex items-center gap-2 shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all group"
                        >
                            View Work
                            <motion.div
                                animate={{ x: [0, 5, 0] }}
                                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                            >
                                <ArrowRight size={18} />
                            </motion.div>
                        </motion.a>

                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="/Resume_subhashree.pdf"
                            download
                            className="px-8 py-3.5 rounded-full border border-gray-300 text-text font-medium flex items-center gap-2 hover:border-secondary hover:text-secondary transition-all bg-white/50 backdrop-blur-sm"
                        >
                            Download Resume
                            <Download size={18} />
                        </motion.a>
                    </div>
                </motion.div>

                {/* Floating UI Elements */}
                {/* 1. Glassmorphic Card */}
                <motion.div
                    animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                    className="absolute top-20 left-10 md:left-20 hidden md:block"
                >
                    <div className="w-40 h-28 bg-white/40 backdrop-blur-md rounded-xl border border-white/60 shadow-lg p-3 flex flex-col gap-2">
                        <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center">
                            <LayoutTemplate size={16} className="text-secondary" />
                        </div>
                        <div className="w-full h-2 bg-text/5 rounded-full mt-auto"></div>
                        <div className="w-2/3 h-2 bg-text/5 rounded-full"></div>
                    </div>
                </motion.div>

                {/* 2. Color Palette */}
                <motion.div
                    animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
                    transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 1 }}
                    className="absolute bottom-20 right-10 md:right-20 hidden md:block"
                >
                    <div className="bg-white p-3 rounded-2xl shadow-xl flex gap-2 rotate-12">
                        <div className="w-8 h-8 rounded-full bg-secondary"></div>
                        <div className="w-8 h-8 rounded-full bg-accent"></div>
                        <div className="w-8 h-8 rounded-full bg-primary"></div>
                    </div>
                </motion.div>

                {/* 3. Cursor */}
                <motion.div
                    initial={{ x: -50, y: 50, opacity: 0 }}
                    animate={{ x: 0, y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="absolute top-1/3 right-1/4 hidden lg:block"
                >
                    <div className="relative">
                        <MousePointer2 size={32} className="text-black fill-white drop-shadow-md" />
                        <div className="absolute top-8 left-4 bg-primary text-white text-xs px-2 py-1 rounded-md whitespace-nowrap">
                            Subhashree
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default Hero;
