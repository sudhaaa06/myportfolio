import { motion } from "framer-motion";
import SectionWrapper from "../layout/SectionWrapper";
import { Folder, Github, ExternalLink } from "lucide-react";

interface Project {
    title: string;
    badge?: string;
    description: string;
    tags: string[];
    links: { github: string; external?: string };
}

const otherProjects: Project[] = [
    {
        title: "AIWorkSync",
        badge: "AI Platform",
        description: "AI-driven career growth platform with NLP-based skill matching (NLTK) to recommend personalized courses and job roles from user profiles.",
        tags: ["Python", "Django", "PostgreSQL", "NLTK"],
        links: { github: "https://github.com/sudhaaa06", external: "https://github.com/sudhaaa06" }
    },
    {
        title: "Busora",
        badge: "Hackathon Project",
        description: "Smart public transit and bus navigation platform engineered during the hackathon, featuring real-time tracking, route optimization, and enhanced commuter connectivity.",
        tags: ["Python", "Flask", "IoT", "Real-Time Tracking"],
        links: { github: "https://github.com/sudhaaa06/Busora", external: "https://github.com/sudhaaa06/Busora" }
    },
    {
        title: "AIVPA",
        badge: "AI Assistant",
        description: "Full-stack virtual productivity assistant featuring REST APIs for user authentication, real-time dashboard analytics, and automated task notifications.",
        tags: ["Python", "Django", "PostgreSQL", "REST APIs"],
        links: { github: "https://github.com/sudhaaa06", external: "https://github.com/sudhaaa06" }
    }
];

export const OtherProjects = () => {
    return (
        <SectionWrapper id="projects" className="bg-black-rich py-24 md:py-32 relative overflow-hidden">
            {/* Subtle Ambient Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gold/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="w-full max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <span className="text-gold uppercase tracking-[0.25em] text-xs md:text-sm font-semibold">
                        Showcase
                    </span>
                    <h2 className="text-4xl md:text-6xl font-bold font-serif text-white mt-2 mb-4">
                        Featured <span className="text-gold">Projects</span>
                    </h2>
                    <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent mx-auto rounded-full" />
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {otherProjects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -8 }}
                            className="group p-8 lg:p-9 rounded-2xl bg-[#111317]/80 border border-white/5 hover:border-gold/40 transition-all duration-300 shadow-xl hover:shadow-[0_0_25px_rgba(212,175,55,0.15)] flex flex-col h-full backdrop-blur-sm"
                        >
                            <div className="flex justify-between items-start mb-6">
                                <div className="p-3 rounded-xl bg-gold/10 border border-gold/20 text-gold group-hover:bg-gold group-hover:text-black-rich transition-colors duration-300">
                                    <Folder size={28} />
                                </div>
                                <div className="flex gap-3 text-gray-400 items-center">
                                    {project.links.github && (
                                        <a
                                            href={project.links.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={`${project.title} GitHub repository`}
                                            className="hover:text-gold transition-colors p-1"
                                        >
                                            <Github size={20} />
                                        </a>
                                    )}
                                    {project.links.external && (
                                        <a
                                            href={project.links.external}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={`${project.title} external link`}
                                            className="hover:text-gold transition-colors p-1"
                                        >
                                            <ExternalLink size={20} />
                                        </a>
                                    )}
                                </div>
                            </div>

                            <div className="flex items-center gap-2 mb-3">
                                <a
                                    href={project.links.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-xl font-bold text-gray-200 hover:text-gold transition-colors font-serif"
                                >
                                    {project.title}
                                </a>
                                {project.badge && (
                                    <span className="text-[11px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-gold/10 text-gold border border-gold/20 font-medium">
                                        {project.badge}
                                    </span>
                                )}
                            </div>

                            <p className="text-gray-400 text-sm mb-6 flex-grow leading-relaxed font-light">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 text-xs text-gray-400 font-mono pt-4 border-t border-white/5">
                                {project.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/5 group-hover:border-gold/20 transition-colors"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
};
