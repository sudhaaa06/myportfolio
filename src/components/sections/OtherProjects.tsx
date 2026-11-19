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
        <SectionWrapper id="projects" className="bg-black-rich py-24 md:py-32 relative overflow-hidden">
            {/* Subtle Ambient Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#6B8E7B]/10 blur-[140px] rounded-full pointer-events-none" />

            <div className="w-full max-w-6xl xl:max-w-7xl mx-auto relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16 md:mb-20">
                    <span className="text-[#B7C9B1] uppercase tracking-[0.25em] text-xs md:text-sm font-semibold">
                        Showcase
                    </span>
                    <h2 className="text-4xl md:text-6xl font-bold font-serif text-white mt-2 mb-4">
                        Featured <span className="text-[#F1E9D2]">Projects</span>
                    </h2>
                    <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-[#B7C9B1] to-transparent mx-auto rounded-full" />
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
                                className={`relative group rounded-3xl bg-[#14231E]/95 backdrop-blur-md transition-all duration-500 shadow-2xl flex flex-col lg:flex-row items-stretch ${
                                    isHackathon
                                        ? "border border-[#6B8E7B]/60 shadow-[0_0_35px_rgba(107,142,123,0.25)] hover:border-[#B7C9B1] hover:shadow-[0_0_45px_rgba(183,201,177,0.35)]"
                                        : "border border-white/10 hover:border-[#6B8E7B]/50 hover:shadow-[0_0_35px_rgba(107,142,123,0.2)]"
                                }`}
                            >
                                {/* King Crown Symbol on Outer Top-Left Corner for Busora */}
                                {project.id === "busora" && (
                                    <motion.div
                                        initial={{ scale: 0, y: -20 }}
                                        animate={{ scale: 1, y: 0 }}
                                        whileHover={{ scale: 1.15, y: -4 }}
                                        transition={{ type: "spring", stiffness: 400, damping: 15 }}
                                        className="absolute -top-6 -left-3 sm:-top-7 sm:-left-4 z-40 flex items-center gap-2 px-4 py-2 rounded-2xl bg-gradient-to-br from-[#F1E9D2] via-[#B7C9B1] to-[#6B8E7B] text-[#243B35] shadow-[0_15px_35px_rgba(0,0,0,0.9),0_0_35px_rgba(241,233,210,0.8),inset_0_2px_3px_rgba(255,255,255,0.9),inset_0_-2px_4px_rgba(36,59,53,0.6)] border-2 border-[#14231E] select-none"
                                        title="King of Projects - Flagship Hackathon Winner"
                                    >
                                        {/* Ambient intense pulsing crown glow */}
                                        <div className="absolute -inset-2 bg-gradient-to-r from-[#F1E9D2] via-[#B7C9B1] to-[#6B8E7B] rounded-2xl blur-lg opacity-80 animate-pulse -z-10 pointer-events-none" />

                                        <div className="relative flex items-center justify-center">
                                            <Crown size={22} className="fill-[#243B35] text-[#243B35] drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)] shrink-0" />
                                        </div>
                                        <div className="flex flex-col text-left leading-none pr-1">
                                            <span className="font-serif font-black tracking-widest text-[11px] sm:text-xs uppercase text-[#243B35]">
                                                KING
                                            </span>
                                            <span className="font-mono text-[8px] font-bold text-[#243B35]/80 uppercase tracking-wider">
                                                FLAGSHIP
                                            </span>
                                        </div>
                                    </motion.div>
                                )}

                                {/* Top corner highlight for Featured Hackathon */}
                                {isHackathon && (
                                    <div
                                        className="absolute -top-3.5 -right-3.5 flex items-center justify-center w-9 h-9 rounded-full bg-gradient-to-br from-[#F1E9D2] via-[#B7C9B1] to-[#6B8E7B] text-[#243B35] shadow-[0_0_20px_rgba(183,201,177,0.7)] border-2 border-[#14231E] z-30 transition-transform group-hover:scale-110"
                                        title="Featured Hackathon Project"
                                    >
                                        <Star size={16} className="fill-[#243B35] text-[#243B35]" />
                                    </div>
                                )}

                                {/* Left Side: Visual Project Preview Mockup */}
                                <div className="w-full lg:w-[48%] xl:w-[46%] p-6 sm:p-8 flex items-center justify-center bg-black/40 border-b lg:border-b-0 lg:border-r border-white/5 relative">
                                    {project.image ? (
                                        /* Real Image Preview (Busora) */
                                        <div className="w-full h-full min-h-[240px] sm:min-h-[280px] lg:min-h-[300px] rounded-2xl overflow-hidden border border-white/10 bg-[#0B1512] flex flex-col shadow-xl relative group/preview">
                                            {/* Browser Window Header */}
                                            <div className="flex items-center justify-between px-4 py-2.5 bg-[#162721] border-b border-white/5">
                                                <div className="flex items-center gap-1.5">
                                                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                                                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                                                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                                                </div>
                                                <div className="flex items-center gap-1.5 px-3 py-0.5 rounded-md bg-black/50 border border-white/5 text-[11px] font-mono text-gray-400">
                                                    <Lock size={10} className="text-emerald-400" />
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
                                                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1512]/60 via-transparent to-transparent pointer-events-none" />

                                                {/* Hover Action Overlay */}
                                                <a
                                                    href={project.links.external || project.links.github}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="absolute inset-0 bg-black/60 backdrop-blur-sm opacity-0 group-hover/preview:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2"
                                                >
                                                    <span className="px-5 py-2.5 rounded-full bg-[#B7C9B1] text-[#243B35] font-bold text-xs uppercase tracking-wider shadow-lg flex items-center gap-2 transform hover:scale-105 transition-transform">
                                                        <span>Preview App</span>
                                                        <ExternalLink size={14} />
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                    ) : project.id === "aiworksync" ? (
                                        /* AIWorkSync Interactive Mockup */
                                        <div className="w-full h-full min-h-[240px] sm:min-h-[280px] lg:min-h-[300px] rounded-2xl overflow-hidden border border-white/10 bg-[#0B1512] flex flex-col shadow-xl relative p-5 justify-between">
                                            <div className="flex items-center justify-between pb-3 border-b border-white/5">
                                                <div className="flex items-center gap-1.5">
                                                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                                                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                                                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                                                </div>
                                                <span className="text-[11px] font-mono text-gray-400">aiworksync.engine</span>
                                                <Brain size={16} className="text-[#B7C9B1]" />
                                            </div>

                                            <div className="space-y-3 my-auto py-2">
                                                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-between">
                                                    <div>
                                                        <span className="text-[11px] text-gray-400 block font-mono">Semantic Matching</span>
                                                        <span className="text-base font-bold text-white">Backend & AI Specialist</span>
                                                    </div>
                                                    <span className="text-xl font-bold font-serif text-[#F1E9D2]">98%</span>
                                                </div>

                                                <div className="p-3 rounded-xl bg-[#243B35]/40 border border-[#6B8E7B]/30 flex items-center gap-2.5">
                                                    <Sparkles size={16} className="text-[#B7C9B1] shrink-0" />
                                                    <span className="text-xs text-gray-300">NLTK natural language profile analysis</span>
                                                </div>
                                            </div>

                                            <div className="flex items-center justify-between text-[11px] font-mono text-gray-500 pt-2 border-t border-white/5">
                                                <span>Engine: Python & Django</span>
                                                <span className="text-emerald-400 font-medium">● Online</span>
                                            </div>
                                        </div>
                                    ) : (
                                        /* AIVPA Interactive Mockup */
                                        <div className="w-full h-full min-h-[240px] sm:min-h-[280px] lg:min-h-[300px] rounded-2xl overflow-hidden border border-white/10 bg-[#0B1512] flex flex-col shadow-xl relative p-5 justify-between">
                                            <div className="flex items-center justify-between pb-3 border-b border-white/5">
                                                <div className="flex items-center gap-1.5">
                                                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                                                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                                                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                                                </div>
                                                <span className="text-[11px] font-mono text-gray-400">aivpa.analytics</span>
                                                <Layers size={16} className="text-[#B7C9B1]" />
                                            </div>

                                            <div className="space-y-3 my-auto py-2">
                                                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-between">
                                                    <div>
                                                        <span className="text-[11px] text-gray-400 block font-mono">REST API Engine</span>
                                                        <span className="text-base font-bold text-white">Task Notification Hub</span>
                                                    </div>
                                                    <span className="text-xs font-mono px-2 py-1 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">200 OK</span>
                                                </div>

                                                <div className="grid grid-cols-2 gap-2 text-center">
                                                    <div className="p-2 rounded-xl bg-white/[0.02] border border-white/5">
                                                        <span className="text-[10px] text-gray-500 font-mono block">Auth System</span>
                                                        <span className="text-xs font-bold text-gray-300">JWT Token</span>
                                                    </div>
                                                    <div className="p-2 rounded-xl bg-white/[0.02] border border-white/5">
                                                        <span className="text-[10px] text-gray-500 font-mono block">Latency</span>
                                                        <span className="text-xs font-bold text-[#F1E9D2]">18ms</span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="flex items-center justify-between text-[11px] font-mono text-gray-500 pt-2 border-t border-white/5">
                                                <span>Database: PostgreSQL</span>
                                                <span className="text-emerald-400 font-medium">● Connected</span>
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
                                                className={`text-2xl sm:text-3xl lg:text-4xl font-bold font-serif tracking-tight transition-all duration-300 ${
                                                    isHackathon
                                                        ? "bg-gradient-to-r from-[#F1E9D2] via-[#B7C9B1] to-[#6B8E7B] bg-clip-text text-transparent drop-shadow-[0_2px_12px_rgba(183,201,177,0.4)] hover:brightness-110"
                                                        : "text-white group-hover:text-[#F1E9D2]"
                                                }`}
                                            >
                                                {project.title}
                                            </a>
                                            {project.badge && (
                                                <span
                                                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] uppercase font-mono font-bold tracking-wider ${
                                                        isHackathon
                                                            ? "bg-gradient-to-r from-[#243B35] to-[#1E302A] border border-[#6B8E7B]/70 text-[#F1E9D2] shadow-[0_0_15px_rgba(107,142,123,0.35)]"
                                                            : "bg-[#243B35]/70 text-[#B7C9B1] border border-[#6B8E7B]/40"
                                                    }`}
                                                >
                                                    {isHackathon && <Star size={11} className="fill-[#F1E9D2] text-[#F1E9D2] shrink-0" />}
                                                    {project.badge}
                                                </span>
                                            )}
                                        </div>

                                        {/* Description */}
                                        <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-light mb-6">
                                            {project.description}
                                        </p>

                                        {/* Tech Stack Tags */}
                                        <div className="flex flex-wrap gap-2 mb-6">
                                            {project.tags.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="px-3 py-1 rounded-lg bg-white/[0.04] border border-white/10 text-gray-300 font-mono text-xs group-hover:border-[#6B8E7B]/40 transition-colors"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="flex flex-wrap items-center gap-3.5 pt-5 border-t border-white/5">
                                        {project.links.external && (
                                            <a
                                                href={project.links.external}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#243B35] hover:bg-[#B7C9B1] text-[#F1E9D2] hover:text-[#243B35] border border-[#6B8E7B]/50 font-semibold text-xs sm:text-sm transition-all duration-300 shadow-md hover:shadow-[0_0_20px_rgba(183,201,177,0.4)]"
                                            >
                                                <ExternalLink size={15} />
                                                <span>Live Demo</span>
                                                {project.image && <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse ml-0.5" />}
                                            </a>
                                        )}
                                        {project.links.github && (
                                            <a
                                                href={project.links.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/[0.04] hover:bg-white/10 text-gray-200 hover:text-white border border-white/10 hover:border-[#6B8E7B]/40 font-medium text-xs sm:text-sm transition-all duration-300"
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
