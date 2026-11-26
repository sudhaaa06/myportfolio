import { motion } from "framer-motion";
import SectionWrapper from "../layout/SectionWrapper";

interface ExperienceItem {
    year: string;
    role: string;
    company?: string;
    duration: string;
    description: string;
    skills: string[];
}

const experiences: ExperienceItem[] = [
    {
        year: "2026",
        role: "Associate, ML Data Operations",
        duration: "Jun 2026 – Present",
        description:
            "Validate and manage large-scale datasets used in machine learning model training and evaluation, ensuring rigorous adherence to data quality standards. Conduct systematic root-cause analysis and comprehensive quality audits to eliminate downstream errors, maintaining a 99%+ accuracy benchmark across high-volume ML workflows.",
        skills: ["Machine Learning", "Data Operations", "Quality Audits", "Root-Cause Analysis", "Data Validation"],
    },
    {
        year: "2025",
        role: "Python Developer Intern",
        duration: "Aug 2025 – Oct 2025",
        description:
            "Designed and developed scalable backend components and REST APIs using Python, Django, JavaScript, and PostgreSQL to translate core functional requirements into reliable code. Performed rigorous testing, debugging, and issue resolution to enhance software stability and operational performance.",
        skills: ["Python", "Django", "PostgreSQL", "REST APIs", "JavaScript", "Unit Testing"],
    },
];

export const Experience = () => {
    return (
        <SectionWrapper id="experience" className="bg-[#FFFFFF] py-24 md:py-32 relative overflow-hidden">
            {/* Subtle Ambient Glow */}
            <div className="absolute top-1/3 left-10 w-[500px] h-[300px] bg-[#059669]/5 blur-[130px] rounded-full pointer-events-none" />

            <div className="w-full max-w-5xl lg:max-w-6xl mx-auto relative z-10">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 md:mb-20 text-center md:text-left"
                >
                    <span className="text-[#059669] uppercase tracking-[0.25em] text-xs md:text-sm font-bold">
                        Career Path
                    </span>
                    <h2 className="text-4xl md:text-6xl font-bold font-serif text-[#18181B] tracking-tight mt-2">
                        Professional <span className="text-[#059669]">Experience</span>
                    </h2>
                    <div className="w-24 h-[2px] bg-gradient-to-r from-[#059669] via-[#10B981] to-transparent rounded-full mt-4 mx-auto md:mx-0" />
                </motion.div>

                {/* Timeline Container */}
                <div className="relative">
                    {/* Vertical Connecting Line */}
                    <div className="absolute left-[70px] md:left-[96px] top-4 bottom-4 w-[2px] bg-gradient-to-b from-[#059669]/60 via-[#E4E4E7] to-transparent" />

                    <div className="space-y-12 md:space-y-16">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={exp.role + exp.year}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.15 }}
                                viewport={{ once: true }}
                                className="relative flex items-start gap-6 md:gap-10 group"
                            >
                                {/* Left Year Badge & Node */}
                                <div className="flex items-center gap-3 md:gap-4 shrink-0 pt-2">
                                    {/* Year Pill */}
                                    <span className="px-3 py-1.5 rounded-lg bg-white border border-[#E4E4E7] text-[#18181B] font-mono text-xs md:text-sm font-semibold tracking-wider group-hover:border-[#059669] group-hover:text-[#059669] transition-colors shadow-sm">
                                        {exp.year}
                                    </span>

                                    {/* Glowing Timeline Dot */}
                                    <div className="relative flex items-center justify-center">
                                        <div className="w-4 h-4 rounded-full bg-[#059669] shadow-[0_0_12px_rgba(5,150,105,0.6)] group-hover:scale-125 transition-transform duration-300 z-10" />
                                        <div className="absolute w-7 h-7 rounded-full bg-[#059669]/25 animate-ping pointer-events-none" />
                                    </div>
                                </div>

                                {/* Right Content Card */}
                                <div className="flex-1 p-6 md:p-8 lg:p-9 rounded-2xl bg-[#FAFAFA] border border-[#E4E4E7] hover:border-[#059669]/40 hover:bg-white transition-all duration-300 shadow-sm backdrop-blur-sm">
                                    <div className="mb-4">
                                        <h3 className="text-2xl md:text-3xl font-bold text-[#18181B] group-hover:text-[#059669] transition-colors font-serif">
                                            {exp.role}
                                        </h3>
                                        <div className="flex flex-wrap items-center gap-3 mt-2">
                                            {exp.company && (
                                                <>
                                                    <span className="text-[#059669] font-medium text-base md:text-lg">
                                                        {exp.company}
                                                    </span>
                                                    <span className="text-gray-400 text-sm">•</span>
                                                </>
                                            )}
                                            <span className="text-[#059669] font-mono text-xs md:text-sm px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 font-semibold">
                                                {exp.duration}
                                            </span>
                                        </div>
                                    </div>

                                    <p className="text-[#52525B] text-base md:text-lg leading-relaxed font-light mb-6">
                                        {exp.description}
                                    </p>

                                    {/* Skills Tags */}
                                    <div className="flex flex-wrap gap-2.5 pt-1">
                                        {exp.skills.map((skill) => (
                                            <span
                                                key={skill}
                                                className="text-xs md:text-sm px-3.5 py-1 rounded-full bg-white text-[#52525B] border border-[#E4E4E7] group-hover:border-[#059669]/40 group-hover:text-[#18181B] transition-colors shadow-sm"
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
