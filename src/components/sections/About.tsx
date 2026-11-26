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
        <SectionWrapper id="about" className="bg-[#FAFAFA] relative overflow-hidden py-24 md:py-32">
            <div className="w-full max-w-5xl xl:max-w-6xl mx-auto relative z-10">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 flex flex-col items-center text-center gap-3"
                >
                    <span className="text-[#059669] uppercase tracking-[0.25em] text-xs md:text-sm font-bold">
                        Who I Am
                    </span>
                    <h2 className="text-4xl md:text-6xl font-bold font-serif text-[#18181B] tracking-tight">
                        About <span className="text-[#059669]">Me</span>
                    </h2>
                    <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-[#059669] to-transparent rounded-full mt-1" />
                </motion.div>

                {/* Main Bio Card */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="p-8 md:p-12 lg:p-14 rounded-3xl border border-[#E4E4E7] bg-white shadow-xl relative overflow-hidden hover:border-[#059669]/40 transition-all duration-500"
                >
                    {/* Background Ambient Glows */}
                    <div className="absolute top-0 right-0 w-96 h-96 bg-[#059669]/5 rounded-full blur-[110px] -z-10 pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#059669]/5 rounded-full blur-[100px] -z-10 pointer-events-none" />

                    <div className="space-y-6 text-[#52525B] leading-relaxed text-lg md:text-xl font-light font-sans text-center md:text-left">
                        <p>
                            I am a <span className="text-[#18181B] font-semibold">Software Engineer</span> and{" "}
                            <span className="text-[#18181B] font-semibold">B.Tech Information Technology</span> graduate specializing in building scalable backend systems, robust REST APIs, and high-precision data workflows. My core stack centers on{" "}
                            <span className="text-[#059669] font-semibold">Python, Django, PostgreSQL</span>, and{" "}
                            <span className="text-[#18181B] font-semibold">RESTful API Architecture</span>, reinforced by containerized deployments using{" "}
                            <span className="text-[#059669] font-semibold">Docker</span> in modern <span className="text-[#18181B] font-semibold">Linux</span> environments.
                        </p>

                        <p>
                            My engineering focus centers on building reliable software with clean, test-driven architecture and high data integrity. From engineering the hackathon-recognized <span className="text-[#18181B] font-semibold">Busora</span> real-time transit platform to architecting <span className="text-[#18181B] font-semibold">AIWorkSync</span> using NLP (<span className="text-[#059669] font-semibold">NLTK</span>) for intelligent skill vector alignment, I specialize in designing scalable database schemas, optimizing complex queries, and translating real-world operational challenges into dependable, automated software.
                        </p>

                        {/* Core Competencies Quick Strip */}
                        <div className="pt-2">
                            <span className="text-xs uppercase tracking-widest text-[#059669] font-mono block mb-3 font-bold text-center md:text-left">
                                Core Competencies
                            </span>
                            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
                                {keyCompetencies.map((skill) => (
                                    <span
                                        key={skill}
                                        className="text-xs px-3.5 py-1.5 rounded-full bg-[#FAFAFA] border border-[#E4E4E7] text-[#18181B] font-mono hover:border-[#059669] hover:text-[#059669] transition-colors duration-300"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <blockquote className="border-t border-[#E4E4E7] pt-6 mt-8 text-center">
                            <span className="text-[#18181B] font-serif italic text-xl md:text-2xl block">
                                "Architecting resilient backend systems and intelligent data pipelines where precision, scalability, and performance converge."
                            </span>
                        </blockquote>
                    </div>
                </motion.div>

            </div>

            {/* Ambient Background Blur Details */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-[#059669]/5 rounded-full blur-[90px] pointer-events-none" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#059669]/5 rounded-full blur-[100px] pointer-events-none" />
        </SectionWrapper>
    );
};
