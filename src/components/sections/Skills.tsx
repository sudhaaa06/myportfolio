<<<<<<< HEAD
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper from "../layout/SectionWrapper";
import {
    SiPython,
    SiDjango,
    SiPostgresql,
    SiJavascript,
    SiNumpy,
    SiHtml5,
    SiCss3,
    SiGithub,
    SiLinux,
    SiDocker,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { Database, Server, Brain, ShieldCheck, CheckCircle2, Star } from "lucide-react";

interface Skill {
    name: string;
    category: "Languages" | "Backend & Web" | "Databases" | "Data & ML" | "Tools & Platforms";
    icon: React.ComponentType<{ size?: number; className?: string; style?: React.CSSProperties }>;
    color: string;
    level: string;
    featured?: boolean;
}

const skills: Skill[] = [
    // Languages
    {
        name: "Python",
        category: "Languages",
        icon: SiPython,
        color: "#3776AB",
        level: "Core & Advanced",
        featured: true,
    },
    {
        name: "JavaScript",
        category: "Languages",
        icon: SiJavascript,
        color: "#F7DF1E",
        level: "ES6+ & Modern",
    },
    {
        name: "SQL",
        category: "Languages",
        icon: Database,
        color: "#F29111",
        level: "Queries & Joins",
        featured: true,
    },

    // Backend & Web
    {
        name: "Django",
        category: "Backend & Web",
        icon: SiDjango,
        color: "#44B78B",
        level: "Backend & ORM",
        featured: true,
    },
    {
        name: "REST APIs",
        category: "Backend & Web",
        icon: Server,
        color: "#10B981",
        level: "API Architecture",
    },
    {
        name: "HTML5",
        category: "Backend & Web",
        icon: SiHtml5,
        color: "#E34F26",
        level: "Semantic Web",
    },
    {
        name: "CSS3",
        category: "Backend & Web",
        icon: SiCss3,
        color: "#264DE4",
        level: "Responsive UI",
    },

    // Databases
    {
        name: "PostgreSQL",
        category: "Databases",
        icon: SiPostgresql,
        color: "#4169E1",
        level: "Relational DB",
        featured: true,
    },
    {
        name: "RDBMS Schema",
        category: "Databases",
        icon: Database,
        color: "#E38C00",
        level: "Design & Optimization",
    },

    // Data & ML
    {
        name: "NumPy",
        category: "Data & ML",
        icon: SiNumpy,
        color: "#4DABCF",
        level: "Array Computing",
    },
    {
        name: "NLTK (NLP)",
        category: "Data & ML",
        icon: Brain,
        color: "#FFD700",
        level: "Natural Language",
        featured: true,
    },
    {
        name: "ML Data Operations",
        category: "Data & ML",
        icon: ShieldCheck,
        color: "#FF9900",
        level: "Validation & 99%+ QA",
        featured: true,
    },

    // Tools & Platforms
    {
        name: "Docker",
        category: "Tools & Platforms",
        icon: SiDocker,
        color: "#2496ED",
        level: "Containers & DevOps",
        featured: true,
    },
    {
        name: "Git & GitHub",
        category: "Tools & Platforms",
        icon: SiGithub,
        color: "#F05032",
        level: "Version Control",
    },
    {
        name: "Linux",
        category: "Tools & Platforms",
        icon: SiLinux,
        color: "#FCC624",
        level: "OS & Shell Scripting",
    },
    {
        name: "VS Code",
        category: "Tools & Platforms",
        icon: VscVscode,
        color: "#007ACC",
        level: "Development IDE",
    },
    {
        name: "Testing & Debugging",
        category: "Tools & Platforms",
        icon: CheckCircle2,
        color: "#22C55E",
        level: "Unit Tests & QA",
    },
];

const categories = [
    "All",
    "Languages",
    "Backend & Web",
    "Databases",
    "Data & ML",
    "Tools & Platforms",
] as const;

export const Skills = () => {
    const [activeTab, setActiveTab] = useState<string>("All");

    const filteredSkills = activeTab === "All"
        ? skills
        : skills.filter((skill) => skill.category === activeTab);

    return (
        <SectionWrapper id="skills" className="bg-[#181920] py-24 md:py-28 relative overflow-hidden">
            {/* Subtle Ambient Lighting */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-gold/5 blur-[140px] rounded-full pointer-events-none" />

            <div className="max-w-6xl mx-auto px-6 relative z-10">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <span className="text-gold uppercase tracking-[0.25em] text-xs md:text-sm font-semibold">
                        Technical Stack
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold font-serif text-white mt-2 mb-4 tracking-tight">
                        My <span className="text-gold">Skills</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto rounded-full" />
                </motion.div>

                {/* Interactive Category Filter Tabs */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-14"
                >
                    {categories.map((cat) => {
                        const isActive = activeTab === cat;
                        return (
                            <button
                                key={cat}
                                onClick={() => setActiveTab(cat)}
                                className={`px-4 py-2 rounded-full text-xs md:text-sm font-medium transition-all duration-300 border ${
                                    isActive
                                        ? "bg-gold text-black-rich border-gold font-bold shadow-[0_0_15px_rgba(212,175,55,0.35)]"
                                        : "bg-[#232630]/80 text-gray-400 border-white/5 hover:border-gold/30 hover:text-white"
                                }`}
                            >
                                {cat}
                            </button>
                        );
                    })}
                </motion.div>

                {/* Skills Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-5"
                >
                    <AnimatePresence>
                        {filteredSkills.map((skill) => {
                            const IconComponent = skill.icon;
                            return (
                                <motion.div
                                    layout
                                    key={skill.name}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.3 }}
                                    whileHover={{ y: -6, scale: 1.02 }}
                                    className={`relative p-6 rounded-2xl flex flex-col items-center justify-center text-center gap-3.5 group transition-all duration-300 backdrop-blur-sm ${
                                        skill.featured
                                            ? "bg-gradient-to-br from-gold/15 to-yellow-600/10 border border-gold/40 shadow-[0_0_20px_rgba(212,175,55,0.12)] hover:border-gold hover:shadow-[0_0_30px_rgba(212,175,55,0.25)]"
                                            : "bg-[#232630]/70 border border-white/5 hover:border-gold/30 hover:bg-[#2a2e3a] shadow-lg"
                                    }`}
                                >
                                    {/* Featured Badge */}
                                    {skill.featured && (
                                        <div className="absolute -top-2 -right-2 flex items-center justify-center w-6 h-6 rounded-full bg-gold text-black-rich shadow-[0_0_10px_rgba(212,175,55,0.6)] z-10" title="Core Expertise">
                                            <Star size={12} className="fill-black-rich" />
                                        </div>
                                    )}

                                    {/* Icon Container */}
                                    <div
                                        className="w-14 h-14 rounded-2xl flex items-center justify-center bg-black/40 border border-white/10 group-hover:scale-110 group-hover:border-gold/40 transition-all duration-300 shadow-inner"
                                        style={{ color: skill.color }}
                                    >
                                        <IconComponent size={30} />
                                    </div>

                                    {/* Skill Name */}
                                    <h3 className="font-bold text-white text-base md:text-lg group-hover:text-gold transition-colors leading-tight">
                                        {skill.name}
                                    </h3>

                                    {/* Level / Subtitle Badge */}
                                    <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-white/[0.04] text-gray-400 border border-white/5 group-hover:border-gold/20 font-mono tracking-wide">
                                        {skill.level}
                                    </span>
                                </motion.div>
                            );
                        })}
                    </AnimatePresence>
                </motion.div>

=======
import { motion } from "framer-motion";
import SectionWrapper from "../layout/SectionWrapper";
import {
    SiC, SiJavascript, SiPython, SiGithub,
    SiPostgresql, SiHtml5, SiCss3, SiPycharm
} from "react-icons/si";
import { FaBrain } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";

const skills = [
    { name: "C", icon: SiC, color: "#A8B9CC" },
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    { name: "Python", icon: SiPython, color: "#3776AB", featured: true },
    { name: "GitHub", icon: SiGithub, color: "#181717" },
    { name: "VS Code", icon: VscVscode, color: "#007ACC" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
    { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
    { name: "CSS3", icon: SiCss3, color: "#1572B6" },
    { name: "AI Integration", icon: FaBrain, color: "#FFD700" },
    { name: "PyCharm", icon: SiPycharm, color: "#000000" },
];

export const Skills = () => {
    return (
        <SectionWrapper id="skills" className="bg-[#1e1f26] py-24 relative overflow-hidden">
            {/* Background Texture/Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-black-rich/50 via-transparent to-black-rich/50 pointer-events-none" />

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold font-serif text-white mb-6 tracking-tight">
                        My Skills
                    </h2>
                    <div className="w-20 h-1 bg-gold mx-auto rounded-full opacity-80" />
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                            viewport={{ once: true }}
                            whileHover={{
                                y: -10,
                                scale: 1.05,
                                boxShadow: "0 10px 30px -10px rgba(0,0,0,0.5)"
                            }}
                            className={`
                                relative p-6 rounded-2xl flex flex-col items-center justify-center gap-4 group transition-all duration-300
                                ${skill.featured
                                    ? "bg-gradient-to-br from-gold/20 to-orange-500/20 border border-gold/40 shadow-[0_0_20px_rgba(212,175,55,0.15)]"
                                    : "bg-white/5 border border-white/5 hover:border-white/10 hover:bg-white/10"
                                }
                            `}
                        >
                            {/* Icon Container */}
                            <div className={`
                                p-4 rounded-full transition-transform duration-300 group-hover:scale-110
                                ${skill.featured ? "bg-gold/20 text-gold" : "bg-black/30 text-gray-300 group-hover:text-white"}
                            `}>
                                <skill.icon size={32} />
                            </div>

                            {/* Skill Name */}
                            <h3 className={`
                                font-medium text-lg tracking-wide
                                ${skill.featured ? "text-gold font-bold" : "text-gray-400 group-hover:text-white"}
                            `}>
                                {skill.name}
                            </h3>

                            {/* Featured Badge */}
                            {skill.featured && (
                                <div className="absolute -top-3 -right-3">
                                    <span className="flex h-6 w-6 relative">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-6 w-6 bg-gold items-center justify-center text-[10px] text-black-rich font-bold">★</span>
                                    </span>
                                </div>
                            )}

                            {/* Hover Glow Effect */}
                            <div className={`
                                absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none
                                ${skill.featured ? "bg-gold/5" : "bg-white/5"}
                            `} />
                        </motion.div>
                    ))}
                </div>
>>>>>>> 7809539102a77c4a2d5532e473e0f02192b6ce77
            </div>
        </SectionWrapper>
    );
};
