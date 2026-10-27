<<<<<<< HEAD
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper from "../layout/SectionWrapper";
import {
    FileText,
    Download,
    Eye,
    ExternalLink,
    X,
    Sparkles,
    GraduationCap,
    Briefcase,
    CheckCircle2,
    Award,
    ShieldCheck
} from "lucide-react";

export const Resume = () => {
    const [isViewerOpen, setIsViewerOpen] = useState(false);

    // Close modal on Escape key
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") setIsViewerOpen(false);
        };
        if (isViewerOpen) {
            window.addEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "hidden";
        }
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "unset";
        };
    }, [isViewerOpen]);

    const resumePdfUrl = "/Sudhaa%20Resume.pdf";
    const downloadFileName = "Sudhagar_M_Resume.pdf";

    return (
        <SectionWrapper id="resume" className="bg-black-rich py-24 md:py-32 relative overflow-hidden">
            {/* Atmospheric Ambient Glows */}
            <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gold/10 blur-[150px] rounded-full pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 translate-x-1/3 translate-y-1/3 w-[500px] h-[300px] bg-yellow-500/5 blur-[140px] rounded-full pointer-events-none" />

            <div className="max-w-6xl mx-auto px-6 relative z-10">

                {/* Section Header */}
=======
import { motion } from "framer-motion";
import SectionWrapper from "../layout/SectionWrapper";
import { FileText, Download, Eye } from "lucide-react";

export const Resume = () => {
    return (
        <SectionWrapper id="resume" className="bg-black-rich py-20 relative overflow-hidden">
            <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">

                {/* Header */}
>>>>>>> 7809539102a77c4a2d5532e473e0f02192b6ce77
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
<<<<<<< HEAD
                    className="mb-16 md:mb-20 text-center flex flex-col items-center gap-3"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/10 border border-gold/30 text-gold text-xs font-semibold tracking-widest uppercase shadow-[0_0_15px_rgba(212,175,55,0.15)]">
                        <Sparkles size={13} className="text-gold animate-pulse" />
                        <span>Curriculum Vitae</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold font-serif text-white tracking-tight">
                        Professional <span className="text-gold italic">Resume</span>
                    </h2>

                    <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-gold to-transparent rounded-full mt-1" />

                    <p className="text-gray-400 font-light max-w-xl text-center text-sm md:text-base mt-2">
                        A verified record of technical competencies, academic foundation, and engineering experience.
                    </p>
                </motion.div>

                {/* Main Interactive Showcase Card */}
=======
                    className="mb-12 flex flex-col items-center gap-4"
                >
                    <h2 className="text-4xl md:text-5xl font-bold font-serif text-white tracking-tight">
                        Resume
                    </h2>
                    <div className="h-[1px] w-24 bg-gold rounded-full" />
                    <p className="text-gray-400 font-light max-w-xl mx-auto">
                        A detailed overview of my skills, projects, and technical expertise.
                    </p>
                </motion.div>

                {/* Resume Card */}
>>>>>>> 7809539102a77c4a2d5532e473e0f02192b6ce77
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
<<<<<<< HEAD
                    className="relative max-w-5xl mx-auto rounded-3xl p-6 sm:p-8 md:p-12 bg-gradient-to-br from-[#1c1e27] via-[#14161f] to-[#0c0d12] border border-gold/25 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)] backdrop-blur-xl group hover:border-gold/40 transition-all duration-500 overflow-hidden"
                >
                    {/* Subtle Golden Grid Pattern & Watermark */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.06),transparent_60%)] pointer-events-none" />
                    <div className="absolute -top-12 -right-12 w-48 h-48 bg-gold/5 blur-[60px] rounded-full pointer-events-none" />

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">

                        {/* Left Column: Realistic 3D Interactive CV Sheet Mockup */}
                        <div className="lg:col-span-5 flex justify-center">
                            <motion.div
                                whileHover={{ scale: 1.02, rotate: 0.5 }}
                                transition={{ duration: 0.3 }}
                                onClick={() => setIsViewerOpen(true)}
                                className="relative w-full max-w-[340px] cursor-pointer group/paper select-none"
                            >
                                {/* Back Glow */}
                                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-gold/30 via-yellow-400/20 to-gold/30 blur-md opacity-60 group-hover/paper:opacity-100 transition-opacity duration-500" />

                                {/* Document Sheet */}
                                <div className="relative rounded-2xl bg-gradient-to-b from-[#1f232f] via-[#161821] to-[#101217] p-6 border border-gold/40 shadow-2xl overflow-hidden flex flex-col justify-between min-h-[440px]">

                                    {/* Top Corner Ribbon / Badge */}
                                    <div className="flex items-center justify-between pb-4 border-b border-white/10">
                                        <div className="flex items-center gap-1.5">
                                            <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                                            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                                            <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                                        </div>
                                        <span className="text-[10px] font-mono font-semibold tracking-wider text-gold bg-gold/10 px-2.5 py-0.5 rounded-full border border-gold/30 flex items-center gap-1">
                                            <ShieldCheck size={11} /> 2026 VERIFIED
                                        </span>
                                    </div>

                                    {/* Simulated Resume Content Header */}
                                    <div className="mt-4 space-y-1">
                                        <div className="text-xl font-bold font-serif text-white tracking-wide flex items-center justify-between">
                                            <span>SUDHAGAR M</span>
                                            <FileText size={18} className="text-gold" />
                                        </div>
                                        <p className="text-xs text-gold/90 font-medium">Software Engineer • ML Data Specialist</p>
                                        <p className="text-[11px] text-gray-400">Anna University • Tamil Nadu, India</p>
                                    </div>

                                    {/* Mini Simulated Sections */}
                                    <div className="space-y-3.5 my-4 text-left">
                                        {/* Education */}
                                        <div className="p-2.5 rounded-lg bg-white/5 border border-white/5">
                                            <div className="flex items-center gap-2 text-xs font-semibold text-gray-200 mb-1">
                                                <GraduationCap size={13} className="text-gold shrink-0" />
                                                <span>B.Tech Information Technology</span>
                                            </div>
                                            <div className="text-[11px] text-gray-400 pl-5">
                                                Anna University • CGPA: 8.0 / 10
                                            </div>
                                        </div>

                                        {/* Experience */}
                                        <div className="p-2.5 rounded-lg bg-white/5 border border-white/5">
                                            <div className="flex items-center gap-2 text-xs font-semibold text-gray-200 mb-1">
                                                <Briefcase size={13} className="text-gold shrink-0" />
                                                <span>ML Data Operations</span>
                                            </div>
                                            <div className="text-[11px] text-gray-400 pl-5">
                                                Amazon • 99%+ Accuracy Benchmark
                                            </div>
                                        </div>

                                        {/* Skills Pill Row */}
                                        <div className="flex flex-wrap gap-1.5 pt-1">
                                            {["Python", "Django", "PostgreSQL", "ML Ops", "REST APIs", "Docker"].map((sk) => (
                                                <span key={sk} className="text-[10px] px-2 py-0.5 rounded bg-gold/10 text-gold/90 border border-gold/20 font-mono">
                                                    {sk}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Bottom Verified Gold Stamp */}
                                    <div className="pt-3 border-t border-white/10 flex items-center justify-between text-gray-400 text-[11px]">
                                        <div className="flex items-center gap-1.5 text-gray-400">
                                            <Award size={13} className="text-gold" />
                                            <span>10+ Certifications</span>
                                        </div>
                                        <span className="font-mono text-gray-500">PDF • ~30 KB</span>
                                    </div>

                                    {/* Hover Overlay with Live Inspection Prompt */}
                                    <div className="absolute inset-0 bg-black/60 backdrop-blur-[3px] opacity-0 group-hover/paper:opacity-100 transition-all duration-300 flex flex-col items-center justify-center gap-3 p-6 text-center">
                                        <div className="w-14 h-14 rounded-full bg-gold/20 border border-gold flex items-center justify-center text-gold shadow-[0_0_20px_rgba(212,175,55,0.5)] transform group-hover/paper:scale-110 transition-transform">
                                            <Eye size={24} />
                                        </div>
                                        <div>
                                            <p className="text-white font-bold text-sm">Interactive Preview</p>
                                            <p className="text-gold text-xs">Click to read full CV</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Right Column: Executive Overview & Key Stats */}
                        <div className="lg:col-span-7 flex flex-col justify-center space-y-6 text-left">

                            {/* Identity Title */}
                            <div>
                                <div className="inline-flex items-center gap-2 text-xs font-semibold text-gold tracking-wider uppercase mb-2">
                                    <span className="w-2 h-2 rounded-full bg-gold animate-ping" />
                                    Available For Full-Time Roles
                                </div>
                                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif text-white leading-tight">
                                    Sudhagar M
                                </h3>
                                <p className="text-base text-gray-300 font-light mt-1">
                                    Software Engineer & ML Operations Associate
                                </p>
                            </div>

                            {/* Key Metrics Grid */}
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-1">
                                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 hover:border-gold/30 transition-colors">
                                    <div className="text-2xl font-bold text-gold font-mono">8.0</div>
                                    <div className="text-[11px] text-gray-400 uppercase tracking-wider mt-0.5">CGPA (B.Tech)</div>
                                </div>
                                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 hover:border-gold/30 transition-colors">
                                    <div className="text-2xl font-bold text-gold font-mono">99%+</div>
                                    <div className="text-[11px] text-gray-400 uppercase tracking-wider mt-0.5">ML Accuracy</div>
                                </div>
                                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 hover:border-gold/30 transition-colors">
                                    <div className="text-2xl font-bold text-gold font-mono">10+</div>
                                    <div className="text-[11px] text-gray-400 uppercase tracking-wider mt-0.5">Certificates</div>
                                </div>
                                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 hover:border-gold/30 transition-colors">
                                    <div className="text-2xl font-bold text-gold font-mono">ATS</div>
                                    <div className="text-[11px] text-gray-400 uppercase tracking-wider mt-0.5">Optimized</div>
                                </div>
                            </div>

                            {/* Executive Summary Bullet Points */}
                            <div className="space-y-2.5 text-sm text-gray-300">
                                <div className="flex items-start gap-2.5">
                                    <CheckCircle2 size={16} className="text-gold shrink-0 mt-0.5" />
                                    <span>
                                        <strong className="text-white font-medium">B.Tech IT Graduate:</strong> Strong foundation in algorithms, databases, data structures, and computer networks.
                                    </span>
                                </div>
                                <div className="flex items-start gap-2.5">
                                    <CheckCircle2 size={16} className="text-gold shrink-0 mt-0.5" />
                                    <span>
                                        <strong className="text-white font-medium">Backend & APIs:</strong> Production experience developing Python/Django services, REST APIs, and PostgreSQL integrations.
                                    </span>
                                </div>
                                <div className="flex items-start gap-2.5">
                                    <CheckCircle2 size={16} className="text-gold shrink-0 mt-0.5" />
                                    <span>
                                        <strong className="text-white font-medium">Amazon ML Ops Experience:</strong> Maintained high-volume dataset validation, error audits, and model evaluation standards.
                                    </span>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="pt-2 flex flex-wrap items-center gap-4">
                                {/* Download Button */}
                                <a
                                    href={resumePdfUrl}
                                    download={downloadFileName}
                                    className="group relative inline-flex items-center gap-2.5 px-7 py-3.5 bg-gradient-to-r from-gold via-yellow-400 to-gold text-black-rich font-bold rounded-xl shadow-[0_0_25px_rgba(212,175,55,0.35)] hover:shadow-[0_0_35px_rgba(212,175,55,0.6)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
                                >
                                    <Download size={18} className="transition-transform group-hover:-translate-y-0.5" />
                                    <span>Download CV</span>
                                    <span className="text-[11px] opacity-75 font-mono">PDF</span>
                                </a>

                                {/* Live In-App Preview Button */}
                                <button
                                    onClick={() => setIsViewerOpen(true)}
                                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-gold/40 text-white font-semibold hover:bg-gold/10 hover:border-gold hover:text-gold transition-all duration-300 cursor-pointer shadow-lg backdrop-blur-sm"
                                >
                                    <Eye size={18} className="text-gold" />
                                    <span>Interactive Preview</span>
                                </button>

                                {/* Direct Fullscreen / External Link */}
                                <a
                                    href={resumePdfUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3.5 rounded-xl border border-white/10 text-gray-400 hover:text-gold hover:border-gold/30 hover:bg-white/5 transition-all duration-300"
                                    title="Open PDF in new tab"
                                >
                                    <ExternalLink size={18} />
                                </a>
                            </div>

                        </div>

=======
                    whileHover={{ y: -5 }}
                    className="glass max-w-2xl mx-auto p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl group hover:border-gold/30 transition-all duration-300"
                >
                    <div className="flex flex-col md:flex-row items-center gap-8">
                        {/* Icon / Preview Placeholder */}
                        <div className="w-24 h-32 bg-charcoal rounded-lg border border-white/10 flex items-center justify-center shadow-lg group-hover:shadow-[0_0_20px_rgba(212,175,55,0.1)] transition-all">
                            <FileText size={40} className="text-gray-500 group-hover:text-gold transition-colors" />
                        </div>

                        {/* Content & Actions */}
                        <div className="flex-1 text-left space-y-6">
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-1">Sudhagar M - Resume</h3>
                                <p className="text-sm text-gray-400">PDF Document • Professional CV</p>
                            </div>

                            <div className="flex flex-wrap gap-4">
                                <a
                                    href="/Sudhaa%20Resume.pdf"
                                    download="Sudhaa_Resume.pdf"
                                    className="flex items-center gap-2 px-6 py-3 bg-gold text-black-rich font-bold rounded-full hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all transform hover:scale-105"
                                >
                                    <Download size={18} />
                                    Download
                                </a>
                                <a
                                    href="/Sudhaa%20Resume.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-6 py-3 border border-white/20 text-white rounded-full hover:bg-white/5 hover:border-gold/50 hover:text-gold transition-all"
                                >
                                    <Eye size={18} />
                                    View File
                                </a>
                            </div>
                        </div>
>>>>>>> 7809539102a77c4a2d5532e473e0f02192b6ce77
                    </div>
                </motion.div>

            </div>
<<<<<<< HEAD

            {/* Interactive PDF Live Viewer Modal */}
            <AnimatePresence>
                {isViewerOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsViewerOpen(false)}
                        className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xl flex items-center justify-center p-3 sm:p-5 md:p-8"
                    >
                        <motion.div
                            initial={{ scale: 0.94, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.94, opacity: 0, y: 20 }}
                            transition={{ type: "spring", duration: 0.4 }}
                            onClick={(e) => e.stopPropagation()}
                            className="relative w-full max-w-5xl h-[88vh] bg-[#14161f] border border-gold/40 rounded-2xl shadow-[0_25px_70px_rgba(0,0,0,0.9)] flex flex-col overflow-hidden"
                        >
                            {/* Modal Header */}
                            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#1a1d27]/90 backdrop-blur-md">
                                <div className="flex items-center gap-3">
                                    <div className="w-9 h-9 rounded-lg bg-gold/10 border border-gold/30 flex items-center justify-center text-gold">
                                        <FileText size={18} />
                                    </div>
                                    <div>
                                        <h3 className="text-white font-semibold text-sm sm:text-base leading-tight">
                                            Sudhagar M — Curriculum Vitae
                                        </h3>
                                        <p className="text-[11px] text-gray-400">PDF Document • Verified 2026</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-2 sm:gap-3">
                                    {/* Direct Download in Modal */}
                                    <a
                                        href={resumePdfUrl}
                                        download={downloadFileName}
                                        className="flex items-center gap-1.5 px-3.5 py-1.5 bg-gold text-black-rich text-xs font-bold rounded-lg hover:shadow-[0_0_15px_rgba(212,175,55,0.4)] transition-all"
                                    >
                                        <Download size={14} />
                                        <span className="hidden sm:inline">Download</span>
                                    </a>

                                    {/* Open in New Window */}
                                    <a
                                        href={resumePdfUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2 rounded-lg border border-white/10 text-gray-300 hover:text-gold hover:border-gold/40 transition-colors"
                                        title="Open in new window"
                                    >
                                        <ExternalLink size={16} />
                                    </a>

                                    {/* Close Button */}
                                    <button
                                        onClick={() => setIsViewerOpen(false)}
                                        className="p-2 rounded-lg border border-white/10 text-gray-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                                        title="Close viewer"
                                    >
                                        <X size={18} />
                                    </button>
                                </div>
                            </div>

                            {/* Modal Body: Embedded PDF iframe */}
                            <div className="flex-1 w-full bg-[#0e1015] relative">
                                <iframe
                                    src={`${resumePdfUrl}#view=FitH`}
                                    title="Sudhagar M Resume"
                                    className="w-full h-full border-none"
                                />

                                {/* Fallback notice in case browser blocks iframe preview */}
                                <div className="absolute inset-0 -z-10 flex flex-col items-center justify-center p-6 text-center text-gray-400">
                                    <p className="mb-4">Unable to display PDF preview directly in this browser frame.</p>
                                    <a
                                        href={resumePdfUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-5 py-2.5 bg-gold text-black-rich font-bold rounded-lg"
                                    >
                                        Open PDF in New Window
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
=======
>>>>>>> 7809539102a77c4a2d5532e473e0f02192b6ce77
        </SectionWrapper>
    );
};
