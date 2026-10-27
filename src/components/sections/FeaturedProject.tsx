import { motion } from "framer-motion";
import SectionWrapper from "../layout/SectionWrapper";
import { ExternalLink, Github, CheckCircle } from "lucide-react";

export const FeaturedProject = () => {
    const features = [
        "Voice Control System", "Smart Task Management", "Pomodoro Focus Timer",
        "Activity Tracking", "Calendar Integration", "AI Context Chatbot"
    ];

    return (
        <SectionWrapper id="featured" className="bg-charcoal/30 relative py-24">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-black-rich via-charcoal/20 to-black-rich pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10 px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mb-20 text-center"
                >
                    <h2 className="text-4xl md:text-5xl font-bold font-serif text-white mb-4">
                        Featured <span className="text-gold">Masterpiece</span>
                    </h2>
                    <div className="w-24 h-1 bg-gold/50 mx-auto rounded-full" />
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Project Image / Mockup */}
                    <motion.div
                        className="relative group perspective-1000"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <div className="absolute -inset-1 bg-gradient-to-r from-gold to-yellow-600 rounded-2xl blur opacity-20 group-hover:opacity-60 transition duration-1000 group-hover:duration-200" />
                        <div className="relative rounded-xl overflow-hidden shadow-2xl border border-white/10 bg-black-rich aspect-video flex items-center justify-center group-hover:scale-[1.01] transition-transform duration-500">
                            {/* Placeholder for project screenshot */}
                            <div className="absolute inset-0 bg-charcoal flex flex-col items-center justify-center text-gray-500 gap-4">
                                <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center text-gold">
                                    <Github size={32} />
                                </div>
                                <span className="font-mono text-sm tracking-widest uppercase">Project Preview</span>
                            </div>
                            <img
                                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop"
                                alt="AIVPA Project"
                                className="w-full h-full object-cover opacity-60 hover:opacity-100 transition-opacity duration-500"
                            />
                        </div>
                    </motion.div>

                    {/* Project Details */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div>
                            <h3 className="text-3xl md:text-4xl font-bold mb-2 text-white font-serif">AIVPA</h3>
                            <p className="text-gold font-medium tracking-wide uppercase text-sm">AI-Powered Virtual Productivity Assistant</p>
                        </div>

                        <p className="text-gray-300 leading-relaxed text-lg font-light">
                            An intelligent ecosystem designed to revolutionize personal productivity.
                            By merging <span className="text-white font-medium">voice commands</span> with <span className="text-white font-medium">AI-driven insights</span>,
                            AIVPA acts as a second brain for developers and professionals, automating the mundane to focus on the extraordinary.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {features.map((feature) => (
                                <div key={feature} className="flex items-center gap-3 text-gray-400">
                                    <CheckCircle size={18} className="text-gold" />
                                    <span className="font-light">{feature}</span>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-wrap gap-4 pt-4">
                            <a href="#" className="flex items-center gap-2 px-8 py-3 bg-gold hover:bg-yellow-400 text-black-rich rounded-full font-bold transition-all hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]">
                                <ExternalLink size={18} /> Live Demo
                            </a>
                            <a href="#" className="flex items-center gap-2 px-8 py-3 border border-white/20 hover:border-white/40 hover:bg-white/5 rounded-full font-medium transition-all text-white">
                                <Github size={18} /> Source Code
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </SectionWrapper>
    );
};
