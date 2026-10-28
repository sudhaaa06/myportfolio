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
        <SectionWrapper id="skills" className="bg-[#181920] py-24 md:py-32 relative overflow-hidden">
            {/* Subtle Ambient Lighting */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-gold/5 blur-[140px] rounded-full pointer-events-none" />

            <div className="w-full max-w-7xl mx-auto relative z-10">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-14"
                >
                    <span className="text-gold uppercase tracking-[0.25em] text-xs md:text-sm font-semibold">
                        Technical Stack
                    </span>
                    <h2 className="text-4xl md:text-6xl font-bold font-serif text-white mt-2 mb-4 tracking-tight">
                        My <span className="text-gold">Skills</span>
                    </h2>
                    <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent mx-auto rounded-full" />
                </motion.div>

                {/* Interactive Category Filter Tabs */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-wrap items-center justify-center gap-2.5 md:gap-3.5 mb-16"
                >
                    {categories.map((cat) => {
                        const isActive = activeTab === cat;
                        return (
                            <button
                                key={cat}
                                onClick={() => setActiveTab(cat)}
                                className={`px-5 py-2.5 rounded-full text-xs md:text-sm font-medium transition-all duration-300 border ${
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
                    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-5 lg:gap-6"
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

            </div>
        </SectionWrapper>
    );
};
