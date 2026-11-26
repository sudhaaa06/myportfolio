import { motion } from "framer-motion";
import SectionWrapper from "../layout/SectionWrapper";
import { Github, ExternalLink, Star, Brain, Sparkles, Lock, Layers, Crown } from "lucide-react";

interface Project {
    id: string;
    title: string;
    badge?: string;
    description: string;
    tags: string[];
    links: { github: string; external?: string };
    image?: string;
}

const otherProjects: Project[] = [
    {
        id: "aiworksync",
        title: "AIWorkSync",
        badge: "AI Platform",
        description: "AI-driven career growth platform with NLP-based skill matching (NLTK) to recommend personalized courses and job roles from user profiles.",
        tags: ["Python", "Django", "PostgreSQL", "NLTK", "REST APIs"],
        links: { github: "https://github.com/sudhaaa06", external: "https://github.com/sudhaaa06" }
    },
    {
        id: "busora",
        title: "Busora",
        badge: "Hackathon Project",
        description: "Smart public transit and bus navigation platform engineered during the hackathon, featuring real-time tracking, route optimization, and enhanced commuter connectivity.",
        tags: ["Python", "Flask", "IoT", "Real-Time Tracking", "Smart Transit APIs"],
        links: { github: "https://github.com/sudhaaa06/Busora", external: "https://busora.vercel.app" },
        image: "/busora.jpg"
    },
    {
        id: "aivpa",
        title: "AIVPA",
        badge: "AI Assistant",
        description: "Full-stack virtual productivity assistant featuring REST APIs for user authentication, real-time dashboard analytics, and automated task notifications.",
        tags: ["Python", "Django", "PostgreSQL", "REST APIs", "Analytics Dashboard"],
        links: { github: "https://github.com/sudhaaa06", external: "https://github.com/sudhaaa06" }
    }
];

export const OtherProjects = () => {
    return (
        <SectionWrapper id="projects" className="bg-[#FAFAFA] py-24 md:py-32 relative overflow-hidden">
            {/* Subtle Ambient Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#059669]/5 blur-[140px] rounded-full pointer-events-none" />

            <div className="w-full max-w-6xl xl:max-w-7xl mx-auto relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16 md:mb-20">
                    <span className="text-[#059669] uppercase tracking-[0.25em] text-xs md:text-sm font-bold">
                        Showcase
                    </span>
                    <h2 className="text-4xl md:text-6xl font-bold font-serif text-[#18181B] mt-2 mb-4">
                        Featured <span className="text-[#059669]">Projects</span>
                    </h2>
                    <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-[#059669] to-transparent mx-auto rounded-full" />
                </div>

                {/* Horizontal Projects - One by One Stack */}
                <div className="flex flex-col gap-10 lg:gap-12">
                    {otherProjects.map((project, index) => {
                        const isHackathon = project.badge?.toLowerCase().includes("hackathon");

                        return (
                            <motion.div
                                key={project.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.15 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -6 }}
                                className={`relative group rounded-3xl bg-white transition-all duration-500 shadow-xl flex flex-col lg:flex-row items-stretch ${
                                    isHackathon
                                        ? "border border-[#059669]/50 shadow-[0_10px_35px_rgba(5,150,105,0.12)] hover:border-[#059669] hover:shadow-[0_15px_45px_rgba(5,150,105,0.2)]"
                                        : "border border-[#E4E4E7] hover:border-[#059669]/40 hover:shadow-xl"
                                }`}
                            >
                                {/* King Crown Symbol on Outer Top-Left Corner for Busora */}
                                {project.id === "busora" && (
                                    <motion.div
                                        initial={{ scale: 0, y: -20 }}
                                        animate={{ scale: 1, y: 0 }}
                                        whileHover={{ scale: 1.15, y: -4 }}
                                        transition={{ type: "spring", stiffness: 400, damping: 15 }}
                                        className="absolute -top-6 -left-3 sm:-top-7 sm:-left-4 z-40 flex items-center gap-2 px-4 py-2 rounded-2xl bg-gradient-to-br from-[#059669] to-[#047857] text-white shadow-[0_10px_25px_rgba(5,150,105,0.4),0_0_25px_rgba(5,150,105,0.3)] border-2 border-white select-none"
                                        title="King of Projects - Flagship Hackathon Winner"
                                    >
                                        <div className="relative flex items-center justify-center">
                                            <Crown size={22} className="fill-white text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.2)] shrink-0" />
                                        </div>
                                        <div className="flex flex-col text-left leading-none pr-1">
                                            <span className="font-serif font-black tracking-widest text-[11px] sm:text-xs uppercase text-white">
                                                KING
                                            </span>
                                            <span className="font-mono text-[8px] font-bold text-white/90 uppercase tracking-wider">
                                                FLAGSHIP
                                            </span>
                                        </div>
                                    </motion.div>
                                )}

                                {/* Top corner highlight for Featured Hackathon */}
                                {isHackathon && (
                                    <div
                                        className="absolute -top-3.5 -right-3.5 flex items-center justify-center w-9 h-9 rounded-full bg-[#059669] text-white shadow-md border-2 border-white z-30 transition-transform group-hover:scale-110"
                                        title="Featured Hackathon Project"
                                    >
                                        <Star size={16} className="fill-white text-white" />
                                    </div>
                                )}

                                {/* Left Side: Visual Project Preview Mockup */}
                                <div className="w-full lg:w-[48%] xl:w-[46%] p-6 sm:p-8 flex items-center justify-center bg-[#FAFAFA] border-b lg:border-b-0 lg:border-r border-[#E4E4E7] relative">
                                    {project.image ? (
                                        /* Real Image Preview (Busora) */
                                        <div className="w-full h-full min-h-[240px] sm:min-h-[280px] lg:min-h-[300px] rounded-2xl overflow-hidden border border-[#E4E4E7] bg-white flex flex-col shadow-md relative group/preview">
                                            {/* Browser Window Header */}
                                            <div className="flex items-center justify-between px-4 py-2.5 bg-white border-b border-[#E4E4E7]">
                                                <div className="flex items-center gap-1.5">
                                                    <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                                                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                                                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                                                </div>
                                                <div className="flex items-center gap-1.5 px-3 py-0.5 rounded-md bg-[#FAFAFA] border border-[#E4E4E7] text-[11px] font-mono text-[#52525B]">
                                                    <Lock size={10} className="text-[#059669]" />
                                                    <span>busora.vercel.app</span>
                                                </div>
                                                <div className="w-8" />
                                            </div>

                                            {/* Screenshot display */}
                                            <div className="relative flex-1 overflow-hidden">
                                                <img
                                                    src={project.image}
                                                    alt={`${project.title} Preview`}
                                                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />

                                                {/* Hover Action Overlay */}
                                                <a
                                                    href={project.links.external || project.links.github}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="absolute inset-0 bg-black/50 backdrop-blur-sm opacity-0 group-hover/preview:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2"
                                                >
                                                    <span className="px-5 py-2.5 rounded-full bg-[#059669] text-white font-bold text-xs uppercase tracking-wider shadow-lg flex items-center gap-2 transform hover:scale-105 transition-transform">
                                                        <span>Preview App</span>
                                                        <ExternalLink size={14} />
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                    ) : project.id === "aiworksync" ? (
                                        /* AIWorkSync Interactive Mockup */
                                        <div className="w-full h-full min-h-[240px] sm:min-h-[280px] lg:min-h-[300px] rounded-2xl overflow-hidden border border-[#E4E4E7] bg-white flex flex-col shadow-md relative p-5 justify-between">
                                            <div className="flex items-center justify-between pb-3 border-b border-[#E4E4E7]">
                                                <div className="flex items-center gap-1.5">
                                                    <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                                                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                                                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                                                </div>
                                                <span className="text-[11px] font-mono text-[#52525B]">aiworksync.engine</span>
                                                <Brain size={16} className="text-[#059669]" />
                                            </div>

                                            <div className="space-y-3 my-auto py-2">
                                                <div className="p-3.5 rounded-xl bg-[#FAFAFA] border border-[#E4E4E7] flex items-center justify-between">
                                                    <div>
                                                        <span className="text-[11px] text-[#52525B] block font-mono">Semantic Matching</span>
                                                        <span className="text-base font-bold text-[#18181B]">Backend & AI Specialist</span>
                                                    </div>
                                                    <span className="text-xl font-bold font-serif text-[#059669]">98%</span>
                                                </div>

                                                <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center gap-2.5">
                                                    <Sparkles size={16} className="text-[#059669] shrink-0" />
                                                    <span className="text-xs text-[#047857] font-medium">NLTK natural language profile analysis</span>
                                                </div>
                                            </div>

                                            <div className="flex items-center justify-between text-[11px] font-mono text-gray-500 pt-2 border-t border-[#E4E4E7]">
                                                <span>Engine: Python & Django</span>
                                                <span className="text-[#059669] font-medium">● Online</span>
                                            </div>
                                        </div>
                                    ) : (
                                        /* AIVPA Interactive Mockup */
                                        <div className="w-full h-full min-h-[240px] sm:min-h-[280px] lg:min-h-[300px] rounded-2xl overflow-hidden border border-[#E4E4E7] bg-white flex flex-col shadow-md relative p-5 justify-between">
                                            <div className="flex items-center justify-between pb-3 border-b border-[#E4E4E7]">
                                                <div className="flex items-center gap-1.5">
                                                    <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                                                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                                                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                                                </div>
                                                <span className="text-[11px] font-mono text-[#52525B]">aivpa.analytics</span>
                                                <Layers size={16} className="text-[#059669]" />
                                            </div>

                                            <div className="space-y-3 my-auto py-2">
                                                <div className="p-3.5 rounded-xl bg-[#FAFAFA] border border-[#E4E4E7] flex items-center justify-between">
                                                    <div>
                                                        <span className="text-[11px] text-[#52525B] block font-mono">REST API Engine</span>
                                                        <span className="text-base font-bold text-[#18181B]">Task Notification Hub</span>
                                                    </div>
                                                    <span className="text-xs font-mono px-2 py-1 rounded bg-emerald-50 text-[#059669] border border-emerald-200 font-semibold">200 OK</span>
                                                </div>

                                                <div className="grid grid-cols-2 gap-2 text-center">
                                                    <div className="p-2 rounded-xl bg-[#FAFAFA] border border-[#E4E4E7]">
                                                        <span className="text-[10px] text-gray-500 font-mono block">Auth System</span>
                                                        <span className="text-xs font-bold text-[#18181B]">JWT Token</span>
                                                    </div>
                                                    <div className="p-2 rounded-xl bg-[#FAFAFA] border border-[#E4E4E7]">
                                                        <span className="text-[10px] text-gray-500 font-mono block">Latency</span>
                                                        <span className="text-xs font-bold text-[#059669]">18ms</span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="flex items-center justify-between text-[11px] font-mono text-gray-500 pt-2 border-t border-[#E4E4E7]">
                                                <span>Database: PostgreSQL</span>
                                                <span className="text-[#059669] font-medium">● Connected</span>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* Right Side: Content Details & Actions */}
                                <div className="w-full lg:w-[52%] xl:w-[54%] p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
                                    <div>
                                        {/* Header Row: Title & Badge */}
                                        <div className="flex flex-wrap items-center gap-3 mb-3">
                                            <a
                                                href={project.links.external || project.links.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-2xl sm:text-3xl lg:text-4xl font-bold font-serif tracking-tight text-[#18181B] group-hover:text-[#059669] transition-colors"
                                            >
                                                {project.title}
                                            </a>
                                            {project.badge && (
                                                <span
                                                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] uppercase font-mono font-bold tracking-wider ${
                                                        isHackathon
                                                            ? "bg-emerald-50 text-[#059669] border border-emerald-200 shadow-sm"
                                                            : "bg-[#FAFAFA] text-[#52525B] border border-[#E4E4E7]"
                                                    }`}
                                                >
                                                    {isHackathon && <Star size={11} className="fill-[#059669] text-[#059669] shrink-0" />}
                                                    {project.badge}
                                                </span>
                                            )}
                                        </div>

                                        {/* Description */}
                                        <p className="text-[#52525B] text-sm sm:text-base leading-relaxed font-light mb-6">
                                            {project.description}
                                        </p>

                                        {/* Tech Stack Tags */}
                                        <div className="flex flex-wrap gap-2 mb-6">
                                            {project.tags.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="px-3 py-1 rounded-lg bg-[#FAFAFA] border border-[#E4E4E7] text-[#52525B] font-mono text-xs group-hover:border-[#059669]/40 group-hover:text-[#18181B] transition-colors"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="flex flex-wrap items-center gap-3.5 pt-5 border-t border-[#E4E4E7]">
                                        {project.links.external && (
                                            <a
                                                href={project.links.external}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#059669] hover:bg-[#047857] text-white font-semibold text-xs sm:text-sm transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer"
                                            >
                                                <ExternalLink size={15} />
                                                <span>Live Demo</span>
                                                {project.image && <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse ml-0.5" />}
                                            </a>
                                        )}
                                        {project.links.github && (
                                            <a
                                                href={project.links.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white hover:bg-[#FAFAFA] text-[#18181B] border border-[#E4E4E7] hover:border-[#059669]/50 font-medium text-xs sm:text-sm transition-all duration-300 shadow-sm cursor-pointer"
                                            >
                                                <Github size={15} />
                                                <span>GitHub Code</span>
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </SectionWrapper>
    );
};
