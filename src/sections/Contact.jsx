import React from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Linkedin, Instagram, Dribbble } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-primary text-white relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6">Let’s Create Something Meaningful</h2>
                    <p className="text-white/70 text-lg mb-8">
                        Looking for a designer who understands both visuals and usability? Let's talk about how I can help your team.
                    </p>

                    <div className="flex justify-center gap-6 mb-12">
                        {[
                            { icon: <Linkedin size={24} />, href: 'https://in.linkedin.com/in/subhashree-hota-0b26112ba?trk=people-guest_people_search-card' },
                            { icon: <Dribbble size={24} />, href: '#' },
                            { icon: <Instagram size={24} />, href: '#' },
                            { icon: <Mail size={24} />, href: 'mailto:subhashreesubhahota@gmail.com' },
                        ].map((social, idx) => (
                            <a
                                key={idx}
                                href={social.href}
                                target={social.href.startsWith('http') ? "_blank" : undefined}
                                rel={social.href.startsWith('http') ? "noopener noreferrer" : undefined}
                                className="p-3 bg-white/10 rounded-full hover:bg-secondary hover:text-white transition-all transform hover:-translate-y-1"
                            >
                                {social.icon}
                            </a>
                        ))}
                    </div>
                </div>

                <div className="max-w-2xl mx-auto bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10">
                    <form className="space-y-6" onSubmit={(e) => {
                        e.preventDefault();
                        const formData = new FormData(e.target);
                        const name = formData.get('name');
                        const email = formData.get('email');
                        const message = formData.get('message');
                        const subject = `Portfolio Contact from ${name}`;
                        const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0AMessage:%0D%0A${message}`;
                        window.location.href = `mailto:subhashreesubhahota@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
                    }}>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-white/80">Name</label>
                                <input name="name" type="text" required className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-secondary focus:bg-white/10 transition-colors text-white" placeholder="John Doe" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-white/80">Email</label>
                                <input name="email" type="email" required className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-secondary focus:bg-white/10 transition-colors text-white" placeholder="john@example.com" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-white/80">Message</label>
                            <textarea name="message" rows="4" required className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-secondary focus:bg-white/10 transition-colors text-white resize-none" placeholder="Tell me about your project..."></textarea>
                        </div>
                        <button type="submit" className="w-full py-4 bg-secondary text-white rounded-xl font-bold text-lg hover:bg-secondary/90 transition-all flex items-center justify-center gap-2 group">
                            Send Message
                            <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
