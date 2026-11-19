import { motion } from "framer-motion";
import SectionWrapper from "../layout/SectionWrapper";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

export const Contact = () => {
    return (
        <SectionWrapper id="contact" className="bg-[#121E1A] relative py-28 md:py-32 overflow-hidden">
            {/* Subtle Ambient Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#6B8E7B]/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="w-full max-w-6xl xl:max-w-7xl mx-auto relative z-10">

                {/* Header with side sage lines */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex items-center justify-center gap-4 md:gap-8 mb-16"
                >
                    <div className="h-[2px] w-12 md:w-28 bg-[#B7C9B1] rounded-full" />
                    <h2 className="text-4xl md:text-6xl font-bold font-serif text-white tracking-tight shrink-0">
                        Contact <span className="text-[#F1E9D2]">Me</span>
                    </h2>
                    <div className="h-[2px] w-12 md:w-28 bg-[#B7C9B1] rounded-full" />
                </motion.div>

                {/* Contact Pills */}
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row items-center justify-center gap-5 md:gap-6 max-w-6xl mx-auto mb-16"
                >
                    {/* Email Pill */}
                    <motion.a
                        href="mailto:sudhagarmurugan06@gmail.com"
                        whileHover={{ y: -3, scale: 1.02 }}
                        className="w-full md:w-auto flex items-center justify-center md:justify-start gap-3.5 px-6 py-4 rounded-xl bg-[#182923] border border-white/5 hover:border-[#6B8E7B]/50 hover:bg-[#1E332C] transition-all duration-300 shadow-lg group"
                    >
                        <Mail size={18} className="text-[#B7C9B1] shrink-0 group-hover:scale-110 transition-transform" />
                        <span className="text-[#F1E9D2] font-medium text-sm md:text-base tracking-wide">
                            sudhagarmurugan06@gmail.com
                        </span>
                    </motion.a>

                    {/* Phone Pill */}
                    <motion.a
                        href="tel:+916369209187"
                        whileHover={{ y: -3, scale: 1.02 }}
                        className="w-full md:w-auto flex items-center justify-center md:justify-start gap-3.5 px-6 py-4 rounded-xl bg-[#182923] border border-white/5 hover:border-[#6B8E7B]/50 hover:bg-[#1E332C] transition-all duration-300 shadow-lg group"
                    >
                        <Phone size={18} className="text-[#B7C9B1] shrink-0 group-hover:scale-110 transition-transform" />
                        <span className="text-[#F1E9D2] font-medium text-sm md:text-base tracking-wide">
                            (+91) 6369209187
                        </span>
                    </motion.a>

                    {/* Location Pill */}
                    <motion.div
                        whileHover={{ y: -3, scale: 1.02 }}
                        className="w-full md:w-auto flex items-center justify-center md:justify-start gap-3.5 px-6 py-4 rounded-xl bg-[#182923] border border-white/5 hover:border-[#6B8E7B]/50 hover:bg-[#1E332C] transition-all duration-300 shadow-lg group cursor-default"
                    >
                        <MapPin size={18} className="text-[#B7C9B1] shrink-0 group-hover:scale-110 transition-transform" />
                        <span className="text-[#F1E9D2] font-medium text-sm md:text-base tracking-wide">
                            Coimbatore, Tamil Nadu, India
                        </span>
                    </motion.div>
                </motion.div>

                {/* Action CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <a
                        href="mailto:sudhagarmurugan06@gmail.com"
                        className="inline-flex items-center gap-3 px-8 py-3.5 border border-[#B7C9B1]/60 text-[#F1E9D2] rounded-full font-medium text-sm md:text-base hover:bg-[#B7C9B1] hover:text-[#243B35] transition-all duration-300 group hover:shadow-[0_0_25px_rgba(183,201,177,0.4)]"
                    >
                        <span>Let's Connect</span>
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                </motion.div>

                {/* Footer Line */}
                <div className="mt-20 border-t border-white/5 pt-8 text-center">
                    <p className="text-gray-400 text-xs md:text-sm font-sans tracking-widest uppercase">
                        © 2026 SUDHAGAR M. ALL RIGHTS RESERVED.
                    </p>
                </div>
            </div>
        </SectionWrapper>
    );
};
