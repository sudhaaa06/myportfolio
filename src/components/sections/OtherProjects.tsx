import { motion } from "framer-motion";
import SectionWrapper from "../layout/SectionWrapper";
import { Folder, Github, ExternalLink, Star } from "lucide-react";

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
                    {otherProjects.map((project, index) => {
                        const isHackathon = project.badge?.toLowerCase().includes("hackathon");

                        return (
                            <motion.div
                                key={project.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -8 }}
                                className={`relative group p-8 lg:p-9 rounded-2xl bg-[#111317]/80 transition-all duration-300 shadow-xl flex flex-col h-full backdrop-blur-sm ${
                                    isHackathon
                                        ? "border border-gold/40 shadow-[0_0_25px_rgba(212,175,55,0.12)] hover:border-gold hover:shadow-[0_0_35px_rgba(212,175,55,0.25)]"
                                        : "border border-white/5 hover:border-gold/40 hover:shadow-[0_0_25px_rgba(212,175,55,0.15)]"
                                }`}
                            >
                                {/* Full Highlight Star Badge on Card Top */}
                                {isHackathon && (
                                    <div
                                        className="absolute -top-3.5 -right-3.5 flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-yellow-300 via-gold to-yellow-600 text-black-rich shadow-[0_0_20px_rgba(212,175,55,0.85)] border-2 border-[#111317] z-20 transition-transform group-hover:scale-110"
                                        title="Featured Hackathon Project"
                                    >
                                        <Star size={15} className="fill-black-rich text-black-rich" />
                                    </div>
                                )}

                                <div className="flex justify-between items-start mb-6">
                                    <div className={`p-3 rounded-xl transition-colors duration-300 ${
                                        isHackathon
                                            ? "bg-gradient-to-br from-gold/20 to-yellow-500/10 border border-gold/40 text-yellow-300 group-hover:bg-gold group-hover:text-black-rich"
                                            : "bg-gold/10 border border-gold/20 text-gold group-hover:bg-gold group-hover:text-black-rich"
                                    }`}>
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

                                <div className="flex flex-wrap items-center gap-2.5 mb-3">
                                    <a
                                        href={project.links.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`transition-all duration-300 ${
                                            isHackathon
                                                ? "text-2xl sm:text-3xl font-extrabold font-serif tracking-tight bg-gradient-to-r from-yellow-100 via-gold to-yellow-400 bg-clip-text text-transparent drop-shadow-[0_2px_14px_rgba(212,175,55,0.45)] hover:brightness-110"
                                                : "text-xl sm:text-2xl font-bold font-serif text-gray-200 hover:text-gold"
                                        }`}
                                    >
                                        {project.title}
                                    </a>
                                    {project.badge && (
                                        <span
                                            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] uppercase transition-all duration-300 ${
                                                isHackathon
                                                    ? "bg-gradient-to-r from-gold/25 via-yellow-400/15 to-gold/25 border border-gold/70 text-yellow-300 shadow-[0_0_16px_rgba(212,175,55,0.4)] font-mono font-bold tracking-[0.2em]"
                                                    : "bg-gold/10 text-gold border border-gold/20 font-medium tracking-wider"
                                            }`}
                                        >
                                            {isHackathon && <Star size={11} className="fill-yellow-400 text-yellow-400 shrink-0" />}
                                            <span className={isHackathon ? "bg-gradient-to-r from-yellow-200 via-gold to-yellow-400 bg-clip-text text-transparent font-extrabold tracking-widest" : ""}>
                                                {project.badge}
                                            </span>
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
                    );
                })}
                </div>
            </div>
        </SectionWrapper>
    );
};
