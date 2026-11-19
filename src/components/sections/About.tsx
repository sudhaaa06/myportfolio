import { motion } from "framer-motion";
import SectionWrapper from "../layout/SectionWrapper";

export const About = () => {
    const keyCompetencies = [
        "Python",
        "Django",
        "PostgreSQL",
        "REST APIs",
        "Docker",
        "Machine Learning",
        "NLP (NLTK)",
        "Linux",
        "Git & GitHub",
        "SQL Optimization",
    ];

    return (
        <SectionWrapper id="about" className="bg-black-rich relative overflow-hidden py-24 md:py-32">
            <div className="w-full max-w-5xl xl:max-w-6xl mx-auto relative z-10">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 flex flex-col items-center text-center gap-3"
                >
                    <span className="text-[#B7C9B1] uppercase tracking-[0.25em] text-xs md:text-sm font-semibold">
                        Who I Am
                    </span>
                    <h2 className="text-4xl md:text-6xl font-bold font-serif text-white tracking-tight">
                        About <span className="text-[#F1E9D2]">Me</span>
                    </h2>
                    <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-[#B7C9B1] to-transparent rounded-full mt-1" />
                </motion.div>

                {/* Main Bio Card */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="glass p-8 md:p-12 lg:p-14 rounded-3xl border border-white/10 bg-[#162722]/50 backdrop-blur-md shadow-2xl relative overflow-hidden hover:border-[#6B8E7B]/40 transition-all duration-500"
                >
                    {/* Background Ambient Glows */}
                    <div className="absolute top-0 right-0 w-96 h-96 bg-[#6B8E7B]/10 rounded-full blur-[110px] -z-10 pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#243B35]/20 rounded-full blur-[100px] -z-10 pointer-events-none" />

                    <div className="space-y-6 text-gray-300 leading-relaxed text-lg md:text-xl font-light font-sans text-center md:text-left">
                        <p>
                            I am a <span className="text-white font-medium">Software Engineer</span> and{" "}
                            <span className="text-white font-medium">B.Tech Information Technology</span> graduate specializing in building scalable backend systems, robust REST APIs, and high-precision data workflows. My core stack centers on{" "}
                            <span className="text-[#F1E9D2] font-medium">Python, Django, PostgreSQL</span>, and{" "}
                            <span className="text-white font-medium">RESTful API Architecture</span>, reinforced by containerized deployments using{" "}
                            <span className="text-[#B7C9B1] font-medium">Docker</span> in modern <span className="text-white font-medium">Linux</span> environments.
                        </p>

                        <p>
                            My engineering focus centers on building reliable software with clean, test-driven architecture and high data integrity. From engineering the hackathon-recognized <span className="text-white font-medium">Busora</span> real-time transit platform to architecting <span className="text-white font-medium">AIWorkSync</span> using NLP (<span className="text-[#B7C9B1] font-medium">NLTK</span>) for intelligent skill vector alignment, I specialize in designing scalable database schemas, optimizing complex queries, and translating real-world operational challenges into dependable, automated software.
                        </p>

                        {/* Core Competencies Quick Strip */}
                        <div className="pt-2">
                            <span className="text-xs uppercase tracking-widest text-[#B7C9B1] font-mono block mb-3 font-semibold text-center md:text-left">
                                Core Competencies
                            </span>
                            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
                                {keyCompetencies.map((skill) => (
                                    <span
                                        key={skill}
                                        className="text-xs px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-gray-300 font-mono hover:border-[#6B8E7B]/50 hover:text-[#F1E9D2] transition-colors duration-300"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <blockquote className="border-t border-white/10 pt-6 mt-8 text-center">
                            <span className="text-[#F1E9D2] font-serif italic text-xl md:text-2xl block">
                                "Architecting resilient backend systems and intelligent data pipelines where precision, scalability, and performance converge."
                            </span>
                        </blockquote>
                    </div>
                </motion.div>

            </div>

            {/* Ambient Background Blur Details */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-[#6B8E7B]/10 rounded-full blur-[90px] pointer-events-none" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#243B35]/25 rounded-full blur-[100px] pointer-events-none" />
        </SectionWrapper>
    );
};
