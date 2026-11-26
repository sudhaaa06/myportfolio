import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper from "../layout/SectionWrapper";
import { Award, X, ExternalLink, Star } from "lucide-react";

interface Certificate {
    title: string;
    issuer: string;
    certificateUrl?: string;
    starBadge?: boolean;
}

const certificates: Certificate[] = [
    {
        title: "Java Full Stack",
        issuer: "SYNKOC IT Services • AICTE",
        certificateUrl: "/certificates/synkoc_java_full_stack.png",
        starBadge: true,
    },
    {
        title: "DSA",
        issuer: "Amazon",
        certificateUrl: "/certificates/amazon_dsa.png",
    },
    {
        title: "Cloud Computing",
        issuer: "NPTEL",
        certificateUrl: "/certificates/nptel_cloud_computing.png",
    },
    {
        title: "The Joy Of Computing Using Python",
        issuer: "NPTEL",
        certificateUrl: "/certificates/nptel_joy_of_computing_python.jpg",
    },
    {
        title: "AI & Machine Learning",
        issuer: "LinkedIn Learning",
        certificateUrl: "/certificates/linkedin_ai_machine_learning.png",
    },
    {
        title: "NVIDIA ACADEMY",
        issuer: "Introduction To Networking",
        certificateUrl: "/certificates/nvidia_networking.jpg",
    },
    {
        title: "DIMLIGHT WORKSHOP",
        issuer: "Rathinam-IDEA Lab CoMake Factory",
        certificateUrl: "/certificates/dimlight_workshop.png",
    },
    {
        title: "Python",
        issuer: "Great Learning",
        certificateUrl: "/certificates/great_learning_python.jpg",
    },
    {
        title: "SIH 2025",
        issuer: "St.Joseph College of Engineering",
        certificateUrl: "/certificates/sih_smarthathon.jpg",
        starBadge: true,
    },
    {
        title: "SQL and relational Database 101",
        issuer: "Cognitive class",
        certificateUrl: "/certificates/sql_relational_databases_101.jpg",
    },
    {
        title: "Network Addressing and Basic Troubleshooting",
        issuer: "CISCO ACADEMY",
        certificateUrl: "/certificates/cisco_network_addressing.jpg",
    },
];

export const Certifications = () => {
    const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

    return (
        <SectionWrapper id="certificates" className="bg-[#121E1A] py-24 md:py-32 relative overflow-hidden">
            {/* Subtle Ambient Lighting */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#6B8E7B]/10 blur-[140px] rounded-full pointer-events-none" />

            <div className="max-w-6xl mx-auto px-6 relative z-10">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-14"
                >
                    <span className="text-[#B7C9B1] uppercase tracking-[0.25em] text-xs md:text-sm font-semibold">
                        Accreditations
                    </span>
                    <h2 className="text-4xl md:text-6xl font-bold font-serif text-white tracking-tight mt-2">
                        Professional <span className="text-[#F1E9D2]">Certificates</span>
                    </h2>
                    <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-[#B7C9B1] to-transparent mx-auto rounded-full mt-4" />
                </motion.div>

                {/* 2-Column Certificates Grid - Tap to Open */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 max-w-5xl mx-auto">
                    {certificates.map((cert, index) => {
                        const hasAttachment = Boolean(cert.certificateUrl);

                        return (
                            <motion.div
                                key={cert.title + cert.issuer + index}
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.35, delay: index * 0.04 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -4, scale: 1.01 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => {
                                    if (hasAttachment) setSelectedCert(cert);
                                }}
                                className="group relative flex items-center justify-between gap-4 px-6 py-5 rounded-2xl bg-[#182923]/80 hover:bg-[#1E332C] border transition-all duration-300 shadow-lg backdrop-blur-sm cursor-pointer border-[#6B8E7B]/40 hover:border-[#B7C9B1] hover:shadow-[0_0_25px_rgba(183,201,177,0.3)]"
                            >
                                {/* Corner Star Badge */}
                                {cert.starBadge && (
                                    <div className="absolute -top-2.5 right-6 flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-gradient-to-r from-[#F1E9D2] via-[#B7C9B1] to-[#6B8E7B] text-[#243B35] text-[10px] font-black uppercase tracking-wider shadow-[0_0_15px_rgba(183,201,177,0.6)] z-20">
                                        <Star size={11} className="fill-[#243B35] text-[#243B35]" />
                                        <span>STAR</span>
                                    </div>
                                )}

                                <div className="flex items-center gap-4 min-w-0">
                                    {/* Sage Rosette Badge Icon */}
                                    <div className="shrink-0 text-[#B7C9B1] transition-transform duration-300 group-hover:scale-110">
                                        <Award size={32} className="stroke-[1.8]" />
                                    </div>

                                    {/* Title & Issuer */}
                                    <div className="flex flex-col min-w-0">
                                        <div className="flex items-center gap-2">
                                            <h3 className="text-white font-semibold text-base md:text-lg group-hover:text-[#F1E9D2] transition-colors leading-snug">
                                                {cert.title}
                                            </h3>
                                            {cert.starBadge && (
                                                <Star size={14} className="fill-[#F1E9D2] text-[#F1E9D2] shrink-0 animate-pulse" />
                                            )}
                                        </div>
                                        <span className="text-gray-400 text-sm font-light mt-0.5">
                                            {cert.issuer}
                                        </span>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

            </div>

            {/* Certificate Preview Modal - Photo View */}
            <AnimatePresence>
                {selectedCert && selectedCert.certificateUrl && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-black/90 backdrop-blur-md"
                        onClick={() => setSelectedCert(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            transition={{ duration: 0.25 }}
                            className="relative max-w-4xl w-full bg-[#121E1A] border border-[#6B8E7B]/50 rounded-3xl p-5 sm:p-6 shadow-[0_0_50px_rgba(107,142,123,0.3)] overflow-hidden"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Modal Header */}
                            <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                                <div>
                                    <h3 className="text-xl font-bold font-serif text-white">
                                        {selectedCert.title}
                                    </h3>
                                    <p className="text-xs text-[#B7C9B1] font-medium mt-0.5">
                                        Issued by {selectedCert.issuer}
                                    </p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <a
                                        href={selectedCert.certificateUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2 text-gray-400 hover:text-[#F1E9D2] hover:bg-white/5 rounded-full transition-colors"
                                        title="Open full photo in new tab"
                                    >
                                        <ExternalLink size={20} />
                                    </a>
                                    <button
                                        onClick={() => setSelectedCert(null)}
                                        className="p-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-full transition-colors cursor-pointer"
                                        aria-label="Close modal"
                                    >
                                        <X size={20} />
                                    </button>
                                </div>
                            </div>

                            {/* Certificate Image - High Clarity Photo View */}
                            <div className="rounded-2xl overflow-hidden bg-black/60 border border-white/10 shadow-inner flex items-center justify-center p-1 sm:p-2">
                                <img
                                    src={selectedCert.certificateUrl}
                                    alt={`${selectedCert.title} Certificate`}
                                    className="w-full h-auto max-h-[75vh] object-contain rounded-xl shadow-lg"
                                />
                            </div>

                            {/* Modal Footer */}
                            <div className="mt-4 flex items-center justify-between">
                                <span className="text-[11px] text-gray-400 font-mono hidden sm:inline">
                                    Photo Preview &bull; Click to expand or open in new tab
                                </span>
                                <a
                                    href={selectedCert.certificateUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#B7C9B1] text-[#243B35] text-xs font-bold uppercase tracking-wider hover:bg-[#F1E9D2] transition-colors shadow-lg ml-auto cursor-pointer"
                                >
                                    <ExternalLink size={14} />
                                    Open Full Photo
                                </a>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </SectionWrapper>
    );
};
