import { motion } from "framer-motion";
import SectionWrapper from "../layout/SectionWrapper";
import { Server, Database, Brain, Award } from "lucide-react";

export const About = () => {
    const highlights = [
        {
            icon: Brain,
            title: "ML Data Operations",
            org: "Amazon",
            description: "Managed & validated large-scale datasets for ML training with 99%+ accuracy standards and systematic root-cause analysis.",
        },
        {
            icon: Server,
            title: "Backend & REST APIs",
            org: "Python & Django",
            description: "Engineered scalable backend services, clean REST APIs, and automated system workflows translating complex requirements into code.",
        },
        {
            icon: Database,
            title: "Database Engineering",
            org: "PostgreSQL & RDBMS",
            description: "Designed normalized schemas, optimized complex analytical queries, and ensured bulletproof data integrity at scale.",
        },
        {
            icon: Award,
            title: "B.Tech in IT",
            org: "Anna University • 8.0 CGPA",
            description: "Information Technology graduate with comprehensive foundation in software engineering, algorithms, and AI development.",
        },
    ];

    return (
        <SectionWrapper id="about" className="bg-black-rich relative overflow-hidden py-24 md:py-32">
            <div className="w-full max-w-6xl xl:max-w-7xl mx-auto relative z-10">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 flex flex-col items-center text-center gap-3"
                >
                    <span className="text-gold uppercase tracking-[0.25em] text-xs md:text-sm font-semibold">
                        Who I Am
                    </span>
                    <h2 className="text-4xl md:text-6xl font-bold font-serif text-white tracking-tight">
                        About <span className="text-gold">Me</span>
                    </h2>
                    <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-gold to-transparent rounded-full mt-1" />
                </motion.div>

                {/* Main Bio Card */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="glass p-8 md:p-12 lg:p-14 rounded-3xl border border-white/10 bg-charcoal/40 backdrop-blur-md shadow-2xl relative overflow-hidden mb-12 hover:border-gold/30 transition-all duration-500"
                >
                    {/* Background Ambient Glows */}
                    <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-[110px] -z-10 pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-80 h-80 bg-gold/5 rounded-full blur-[100px] -z-10 pointer-events-none" />

                    <div className="space-y-6 text-gray-300 leading-relaxed text-lg md:text-xl font-light font-sans text-center md:text-left">
                        <p>
                            I am a <span className="text-white font-medium">B.Tech Information Technology</span> graduate with hands-on expertise in{" "}
                            <span className="text-gold font-medium">Python, Django, PostgreSQL</span>, and{" "}
                            <span className="text-white font-medium">REST API development</span>. With professional experience spanning{" "}
                            <span className="text-white font-medium">ML Data Operations at Amazon</span> and backend software engineering, I specialize in building reliable, data-driven applications backed by rigorous quality assurance and systematic validation.
                        </p>

                        <p>
                            My engineering journey includes designing scalable relational database schemas, developing intelligent NLP-powered platforms like <span className="text-white font-medium">AIWorkSync</span>, and maintaining <span className="text-gold font-medium">99%+ accuracy</span> across high-volume machine learning workflows. I thrive on translating real-world operational challenges into clean, automated, and maintainable software systems.
                        </p>

                        <blockquote className="border-t border-white/10 pt-6 mt-6 text-center">
                            <span className="text-gold font-serif italic text-xl md:text-2xl block">
                                "Engineering resilient backend architectures and intelligent automation where precision and performance converge."
                            </span>
                        </blockquote>
                    </div>
                </motion.div>

                {/* Resume Highlights Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
                    {highlights.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -6, scale: 1.02 }}
                                className="group relative p-6 md:p-7 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-gold/30 hover:bg-white/[0.06] transition-all duration-300 shadow-lg flex flex-col justify-between"
                            >
                                <div>
                                    <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/20 text-gold group-hover:bg-gold group-hover:text-black-rich transition-colors duration-300 flex items-center justify-center shrink-0 mb-4">
                                        <Icon size={24} />
                                    </div>
                                    <div className="space-y-2">
                                        <div className="flex flex-col gap-1.5">
                                            <h3 className="text-lg font-semibold text-white group-hover:text-gold transition-colors">
                                                {item.title}
                                            </h3>
                                            <span className="text-xs px-2.5 py-0.5 rounded-full bg-gold/10 text-gold border border-gold/20 font-medium w-fit">
                                                {item.org}
                                            </span>
                                        </div>
                                        <p className="text-sm text-gray-400 font-light leading-relaxed pt-1">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

            </div>

            {/* Ambient Background Blur Details */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-gold/5 rounded-full blur-[90px] pointer-events-none" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-charcoal/60 rounded-full blur-[100px] pointer-events-none" />
        </SectionWrapper>
    );
};
