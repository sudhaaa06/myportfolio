import { motion } from "framer-motion";
import SectionWrapper from "../layout/SectionWrapper";

interface ExperienceItem {
    year: string;
    role: string;
    company: string;
    duration: string;
    description: string;
    skills: string[];
}

const experiences: ExperienceItem[] = [
    {
        year: "2026",
        role: "Associate, ML Data Operations",
        company: "Amazon",
        duration: "Jun 2026 – Present",
        description:
            "Validate and manage large-scale datasets used in machine learning model training and evaluation, ensuring rigorous adherence to data quality standards. Conduct systematic root-cause analysis and comprehensive quality audits to eliminate downstream errors, maintaining a 99%+ accuracy benchmark across high-volume ML workflows.",
        skills: ["Machine Learning", "Data Operations", "Quality Audits", "Root-Cause Analysis", "Data Validation"],
    },
    {
        year: "2025",
        role: "Python Developer Intern",
        company: "Shalom InfoTech Private Limited",
        duration: "Aug 2025 – Oct 2025",
        description:
            "Designed and developed scalable backend components and REST APIs using Python, Django, JavaScript, and PostgreSQL to translate core functional requirements into reliable code. Performed rigorous testing, debugging, and issue resolution to enhance software stability and operational performance.",
        skills: ["Python", "Django", "PostgreSQL", "REST APIs", "JavaScript", "Unit Testing"],
    },
];

export const Experience = () => {
    return (
        <SectionWrapper id="experience" className="bg-[#181920] py-24 md:py-28 relative overflow-hidden">
            {/* Subtle Ambient Glow */}
            <div className="absolute top-1/3 left-10 w-[500px] h-[300px] bg-gold/5 blur-[130px] rounded-full pointer-events-none" />

            <div className="max-w-4xl mx-auto px-6 relative z-10">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 md:mb-20 text-center md:text-left"
                >
                    <h2 className="text-4xl md:text-5xl font-bold font-serif text-white tracking-tight">
                        Experience
                    </h2>
                    <div className="w-20 h-1 bg-gold/60 rounded-full mt-4 mx-auto md:mx-0" />
                </motion.div>

                {/* Timeline Container */}
                <div className="relative">
                    {/* Vertical Connecting Line */}
                    <div className="absolute left-[70px] md:left-[96px] top-4 bottom-4 w-[2px] bg-gradient-to-b from-gold/60 via-white/10 to-transparent" />

                    <div className="space-y-12 md:space-y-16">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={exp.company + exp.year}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.15 }}
                                viewport={{ once: true }}
                                className="relative flex items-start gap-6 md:gap-10 group"
                            >
                                {/* Left Year Badge & Node */}
                                <div className="flex items-center gap-3 md:gap-4 shrink-0 pt-1">
                                    {/* Year Pill */}
                                    <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-gray-300 font-mono text-xs md:text-sm font-medium tracking-wider group-hover:border-gold/40 group-hover:text-gold transition-colors">
                                        {exp.year}
                                    </span>

                                    {/* Glowing Timeline Dot */}
                                    <div className="relative flex items-center justify-center">
                                        <div className="w-3.5 h-3.5 rounded-full bg-gold shadow-[0_0_12px_rgba(212,175,55,0.7)] group-hover:scale-125 transition-transform duration-300 z-10" />
                                        <div className="absolute w-6 h-6 rounded-full bg-gold/20 animate-ping pointer-events-none" />
                                    </div>
                                </div>

                                {/* Right Content Card */}
                                <div className="flex-1 pb-4">
                                    <div className="mb-3">
                                        <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-gold transition-colors font-serif">
                                            {exp.role}
                                        </h3>
                                        <div className="flex flex-wrap items-center gap-2 mt-1">
                                            <span className="text-gray-300 text-sm md:text-base font-medium">
                                                {exp.company}
                                            </span>
                                            <span className="text-gray-500 text-xs">•</span>
                                            <span className="text-gold/90 text-xs md:text-sm font-mono">
                                                {exp.duration}
                                            </span>
                                        </div>
                                    </div>

                                    <p className="text-gray-400 text-sm md:text-base leading-relaxed font-light mb-4">
                                        {exp.description}
                                    </p>

                                    {/* Skills Tags */}
                                    <div className="flex flex-wrap gap-2 pt-1">
                                        {exp.skills.map((skill) => (
                                            <span
                                                key={skill}
                                                className="text-xs px-2.5 py-0.5 rounded-full bg-white/[0.04] text-gray-300 border border-white/5 group-hover:border-gold/20 transition-colors"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </SectionWrapper>
    );
};
