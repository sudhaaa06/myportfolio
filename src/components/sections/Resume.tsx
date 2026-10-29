import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper from "../layout/SectionWrapper";
import {
    Download,
    Eye,
    ExternalLink,
    X,
    Maximize2,
    FileText,
    ArrowUpRight,
    GraduationCap,
    Briefcase,
    Code2,
    Check
} from "lucide-react";

export const Resume = () => {
    const [viewMode, setViewMode] = useState<"spec" | "preview">("spec");
    const [isViewerOpen, setIsViewerOpen] = useState(false);
    const [copied, setCopied] = useState(false);
    const dialogRef = useRef<HTMLDialogElement>(null);

    const resumePdfUrl = "/Sudhaa%20Resume.pdf";
    const downloadFileName = "Sudhagar_M_Resume.pdf";

    // Handle modal dialog using native <dialog> with modern light-dismiss & fallbacks
    useEffect(() => {
        const dialog = dialogRef.current;
        if (!dialog) return;

        if (isViewerOpen) {
            dialog.showModal();
            document.body.style.overflow = "hidden";
        } else {
            dialog.close();
            document.body.style.overflow = "unset";
        }

        const handleCancel = () => setIsViewerOpen(false);
        dialog.addEventListener("cancel", handleCancel);

        // Fallback for browsers without native closedby support
        const handleBackdropClick = (e: MouseEvent) => {
            if (e.target !== dialog) return;
            const rect = dialog.getBoundingClientRect();
            const isInDialog = (
                rect.top <= e.clientY &&
                e.clientY <= rect.top + rect.height &&
                rect.left <= e.clientX &&
                e.clientX <= rect.left + rect.width
            );
            if (!isInDialog) {
                setIsViewerOpen(false);
            }
        };

        dialog.addEventListener("click", handleBackdropClick);

        return () => {
            dialog.removeEventListener("cancel", handleCancel);
            dialog.removeEventListener("click", handleBackdropClick);
            document.body.style.overflow = "unset";
        };
    }, [isViewerOpen]);

    const handleCopyDetails = () => {
        navigator.clipboard.writeText("Sudhagar M - Software Engineer & ML Operations Associate | sudhagar06112003@gmail.com");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <SectionWrapper id="resume" className="bg-black-rich py-24 md:py-32 relative overflow-hidden">
            {/* Subtle atmospheric ambient glow */}
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gold/[0.04] blur-[160px] rounded-full pointer-events-none" />

            <div className="w-full max-w-5xl mx-auto relative z-10">

                {/* Minimal Header */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12 md:mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8"
                >
                    <div>
                        <div className="flex items-center gap-2 font-mono text-xs text-gold/80 tracking-widest uppercase mb-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
                            <span>INDEX 06 // CURRICULUM VITAE</span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white tracking-tight">
                            Professional <span className="italic text-gold">Dossier</span>
                        </h2>
                    </div>

                    <div className="flex items-center gap-3">
                        {/* View Switcher: Minimalist Segmented Control */}
                        <div className="inline-flex p-1 rounded-xl bg-white/[0.04] border border-white/10 text-xs font-mono">
                            <button
                                onClick={() => setViewMode("spec")}
                                className={`relative px-4 py-1.5 rounded-lg transition-colors cursor-pointer ${
                                    viewMode === "spec" ? "text-black-rich font-semibold" : "text-gray-400 hover:text-white"
                                }`}
                            >
                                {viewMode === "spec" && (
                                    <motion.div
                                        layoutId="resume-tab-highlight"
                                        className="absolute inset-0 bg-gold rounded-lg -z-10"
                                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                    />
                                )}
                                Spec Sheet
                            </button>

                            <button
                                onClick={() => setViewMode("preview")}
                                className={`relative px-4 py-1.5 rounded-lg transition-colors cursor-pointer flex items-center gap-1.5 ${
                                    viewMode === "preview" ? "text-black-rich font-semibold" : "text-gray-400 hover:text-white"
                                }`}
                            >
                                {viewMode === "preview" && (
                                    <motion.div
                                        layoutId="resume-tab-highlight"
                                        className="absolute inset-0 bg-gold rounded-lg -z-10"
                                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                    />
                                )}
                                <Eye size={12} />
                                Live Canvas
                            </button>
                        </div>
                    </div>
                </motion.div>

                {/* Main Minimalist Monolith Container */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="relative rounded-2xl border border-white/10 bg-[#0c0d12]/90 backdrop-blur-xl shadow-2xl overflow-hidden"
                >
                    {/* Top Status Strip */}
                    <div className="flex flex-wrap items-center justify-between gap-4 px-6 sm:px-8 py-3.5 border-b border-white/5 bg-white/[0.02] text-[11px] font-mono text-gray-400">
                        <div className="flex items-center gap-4">
                            <span className="flex items-center gap-2 text-white">
                                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                                AVAILABLE FOR FULL-TIME ROLES
                            </span>
                            <span className="hidden sm:inline text-white/20">|</span>
                            <span className="hidden sm:inline">REF: SM-ENG-2026</span>
                        </div>

                        <div className="flex items-center gap-4 text-gray-400">
                            <span>FORMAT: PDF (ATS-PARSED)</span>
                            <span className="text-white/20">|</span>
                            <span className="text-gold font-medium">TAMIL NADU, INDIA</span>
                        </div>
                    </div>

                    {/* Content View Switching with Framer Motion */}
                    <AnimatePresence mode="wait">
                        {viewMode === "spec" ? (
                            /* VIEW 1: Minimalist Executive Spec Sheet */
                            <motion.div
                                key="spec-view"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.3 }}
                                className="p-6 sm:p-8 md:p-10 lg:p-12 space-y-10"
                            >
                                {/* Candidate Overview Header */}
                                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                                    <div className="lg:col-span-7 space-y-3">
                                        <div className="inline-block px-2.5 py-0.5 rounded text-[10px] font-mono tracking-wider uppercase text-gold bg-gold/10 border border-gold/20">
                                            Curriculum Vitae
                                        </div>
                                        <h3 className="text-3xl sm:text-4xl font-serif text-white tracking-tight">
                                            Sudhagar M
                                        </h3>
                                        <p className="text-sm sm:text-base text-gold/90 font-medium font-sans">
                                            Software Engineer &bull; ML Operations Associate
                                        </p>
                                        <p className="text-gray-400 text-sm leading-relaxed font-light pt-1">
                                            Information Technology graduate from Anna University with professional experience spanning backend engineering in Python & Django, relational databases in PostgreSQL, and high-volume ML dataset operations at Amazon with 99%+ accuracy benchmarks.
                                        </p>
                                    </div>

                                    {/* Minimalist Telemetry Matrix */}
                                    <div className="lg:col-span-5 grid grid-cols-2 gap-px bg-white/10 rounded-xl overflow-hidden border border-white/10">
                                        <div className="bg-[#0e1017] p-4 flex flex-col justify-between">
                                            <span className="text-[10px] font-mono uppercase tracking-wider text-gray-400">Undergraduate</span>
                                            <div className="mt-2">
                                                <div className="text-2xl font-bold font-mono text-gold">8.0</div>
                                                <div className="text-[11px] text-gray-400">CGPA &bull; Anna Univ</div>
                                            </div>
                                        </div>

                                        <div className="bg-[#0e1017] p-4 flex flex-col justify-between">
                                            <span className="text-[10px] font-mono uppercase tracking-wider text-gray-400">ML Benchmark</span>
                                            <div className="mt-2">
                                                <div className="text-2xl font-bold font-mono text-gold">99%+</div>
                                                <div className="text-[11px] text-gray-400">Amazon ML Ops QA</div>
                                            </div>
                                        </div>

                                        <div className="bg-[#0e1017] p-4 flex flex-col justify-between">
                                            <span className="text-[10px] font-mono uppercase tracking-wider text-gray-400">Credentials</span>
                                            <div className="mt-2">
                                                <div className="text-2xl font-bold font-mono text-gold">10+</div>
                                                <div className="text-[11px] text-gray-400">Verified Certificates</div>
                                            </div>
                                        </div>

                                        <div className="bg-[#0e1017] p-4 flex flex-col justify-between">
                                            <span className="text-[10px] font-mono uppercase tracking-wider text-gray-400">Resume Format</span>
                                            <div className="mt-2">
                                                <div className="text-2xl font-bold font-mono text-gold">ATS</div>
                                                <div className="text-[11px] text-gray-400">100% Machine Parsed</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Divider */}
                                <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                                {/* 3-Column Core Highlights */}
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    <div className="p-5 rounded-xl bg-white/[0.02] border border-white/5 space-y-2 hover:border-gold/30 transition-colors">
                                        <div className="flex items-center gap-2 text-gold text-xs font-mono uppercase tracking-wider">
                                            <GraduationCap size={15} />
                                            <span>01 / Academics</span>
                                        </div>
                                        <h4 className="text-sm font-semibold text-white">B.Tech Information Technology</h4>
                                        <p className="text-xs text-gray-400 leading-relaxed font-light">
                                            Anna University graduate. Rigorous coursework in algorithms, data structures, database design, and systems engineering.
                                        </p>
                                    </div>

                                    <div className="p-5 rounded-xl bg-white/[0.02] border border-white/5 space-y-2 hover:border-gold/30 transition-colors">
                                        <div className="flex items-center gap-2 text-gold text-xs font-mono uppercase tracking-wider">
                                            <Briefcase size={15} />
                                            <span>02 / Experience</span>
                                        </div>
                                        <h4 className="text-sm font-semibold text-white">ML Operations Associate</h4>
                                        <p className="text-xs text-gray-400 leading-relaxed font-light">
                                            Amazon ML Data Operations. Maintained high-volume dataset validation, root-cause error audits, and model evaluation standards.
                                        </p>
                                    </div>

                                    <div className="p-5 rounded-xl bg-white/[0.02] border border-white/5 space-y-2 hover:border-gold/30 transition-colors">
                                        <div className="flex items-center gap-2 text-gold text-xs font-mono uppercase tracking-wider">
                                            <Code2 size={15} />
                                            <span>03 / Engineering</span>
                                        </div>
                                        <h4 className="text-sm font-semibold text-white">Backend & REST APIs</h4>
                                        <p className="text-xs text-gray-400 leading-relaxed font-light">
                                            Proficient in Python, Django, PostgreSQL, and scalable API architecture with containerized deployment workflows.
                                        </p>
                                    </div>
                                </div>

                                {/* Skills Pill Strip */}
                                <div className="space-y-3">
                                    <span className="text-[10px] font-mono uppercase tracking-wider text-gray-400 block">
                                        Verified Tech Stack
                                    </span>
                                    <div className="flex flex-wrap gap-2">
                                        {[
                                            "Python",
                                            "Django",
                                            "PostgreSQL",
                                            "REST APIs",
                                            "Machine Learning Ops",
                                            "Docker",
                                            "Git",
                                            "Data Structures",
                                            "Algorithms",
                                            "Database Schema Design"
                                        ].map((skill) => (
                                            <span
                                                key={skill}
                                                className="px-3 py-1 rounded-md text-xs font-mono bg-white/[0.03] text-gray-300 border border-white/10 hover:border-gold/40 hover:text-gold transition-colors"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Minimal Action Bar */}
                                <div className="pt-4 border-t border-white/5 flex flex-wrap items-center justify-between gap-4">
                                    <div className="flex flex-wrap items-center gap-3">
                                        {/* Primary Download Button */}
                                        <a
                                            href={resumePdfUrl}
                                            download={downloadFileName}
                                            className="group relative inline-flex items-center gap-2 px-6 py-3 bg-gold text-black-rich font-semibold text-xs rounded-xl hover:bg-gold-light active:scale-[0.98] transition-all shadow-md shadow-gold/10"
                                        >
                                            <Download size={15} className="transition-transform group-hover:-translate-y-0.5" />
                                            <span>Download Curriculum Vitae</span>
                                            <span className="text-[10px] opacity-70 font-mono">PDF &bull; ~30 KB</span>
                                        </a>

                                        {/* Quick Interactive Preview Trigger */}
                                        <button
                                            onClick={() => setIsViewerOpen(true)}
                                            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-white/15 bg-white/[0.02] text-xs font-semibold text-white hover:border-gold/40 hover:text-gold hover:bg-gold/5 transition-all cursor-pointer"
                                        >
                                            <Eye size={15} className="text-gold" />
                                            <span>Fullscreen Inspection</span>
                                        </button>

                                        {/* Open in New Window */}
                                        <a
                                            href={resumePdfUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-3 rounded-xl border border-white/10 text-gray-400 hover:text-white hover:border-white/20 transition-colors"
                                            title="Open raw PDF in new browser tab"
                                        >
                                            <ExternalLink size={15} />
                                        </a>
                                    </div>

                                    {/* Quick Copy Contact Details Button */}
                                    <button
                                        onClick={handleCopyDetails}
                                        className="text-[11px] font-mono text-gray-400 hover:text-gold transition-colors flex items-center gap-1.5 cursor-pointer"
                                    >
                                        {copied ? (
                                            <>
                                                <Check size={13} className="text-emerald-400" />
                                                <span className="text-emerald-400">Copied to clipboard</span>
                                            </>
                                        ) : (
                                            <>
                                                <span>Copy Bio & Contact</span>
                                                <ArrowUpRight size={13} />
                                            </>
                                        )}
                                    </button>
                                </div>
                            </motion.div>
                        ) : (
                            /* VIEW 2: Inline Live Document Canvas */
                            <motion.div
                                key="canvas-view"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.3 }}
                                className="flex flex-col"
                            >
                                {/* Canvas Sub-Toolbar */}
                                <div className="flex items-center justify-between px-6 py-3 border-b border-white/5 bg-black/40 text-xs">
                                    <div className="flex items-center gap-2 text-gray-400 font-mono text-[11px]">
                                        <FileText size={14} className="text-gold" />
                                        <span>Sudhaa Resume.pdf &bull; 1 Page Document</span>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <button
                                            onClick={() => setIsViewerOpen(true)}
                                            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/10 text-xs text-gray-300 hover:text-white hover:border-gold/30 transition-colors cursor-pointer"
                                        >
                                            <Maximize2 size={13} />
                                            <span>Fullscreen</span>
                                        </button>
                                        <a
                                            href={resumePdfUrl}
                                            download={downloadFileName}
                                            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gold text-black-rich text-xs font-semibold hover:bg-gold-light transition-colors"
                                        >
                                            <Download size={13} />
                                            <span>Download</span>
                                        </a>
                                    </div>
                                </div>

                                {/* Embedded Iframe Frame */}
                                <div className="w-full h-[580px] bg-[#08090c] relative">
                                    <iframe
                                        src={`${resumePdfUrl}#view=FitH`}
                                        title="Sudhagar M Resume Live Canvas"
                                        className="w-full h-full border-none"
                                    />
                                    {/* Fallback container if iframe blocked */}
                                    <div className="absolute inset-0 -z-10 flex flex-col items-center justify-center p-6 text-center text-gray-400">
                                        <p className="text-sm mb-4">PDF preview unavailable directly inside this frame.</p>
                                        <a
                                            href={resumePdfUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="px-4 py-2 bg-gold text-black-rich font-semibold text-xs rounded-lg"
                                        >
                                            Open in New Window
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>

            </div>

            {/* Modern Native HTML <dialog> Modal Viewer with light-dismiss */}
            <dialog
                ref={dialogRef}
                {...({ closedby: "any" } as any)}
                aria-labelledby="dialog-resume-title"
                className="backdrop:bg-black/80 backdrop:backdrop-blur-md bg-transparent p-3 sm:p-6 md:p-8 w-full max-w-5xl h-[90vh] max-h-[90vh] m-auto outline-none border-none overflow-hidden"
            >
                <div className="relative w-full h-full bg-[#111319] border border-white/15 rounded-2xl shadow-2xl flex flex-col overflow-hidden">
                    {/* Modal Chrome Header */}
                    <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#161822]">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-lg bg-gold/10 border border-gold/25 flex items-center justify-center text-gold">
                                <FileText size={16} />
                            </div>
                            <div>
                                <h3 id="dialog-resume-title" className="text-white font-medium text-sm sm:text-base leading-tight">
                                    Sudhagar M &mdash; Curriculum Vitae
                                </h3>
                                <p className="text-[11px] text-gray-400 font-mono">PDF Document &bull; Verified 2026</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-2">
                            <a
                                href={resumePdfUrl}
                                download={downloadFileName}
                                className="flex items-center gap-1.5 px-3 py-1.5 bg-gold text-black-rich text-xs font-semibold rounded-lg hover:bg-gold-light transition-colors"
                            >
                                <Download size={13} />
                                <span className="hidden sm:inline">Download</span>
                            </a>

                            <a
                                href={resumePdfUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-lg border border-white/10 text-gray-400 hover:text-white transition-colors"
                                title="Open in new window"
                            >
                                <ExternalLink size={15} />
                            </a>

                            <button
                                onClick={() => setIsViewerOpen(false)}
                                className="p-2 rounded-lg border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                                title="Close modal (Esc)"
                            >
                                <X size={16} />
                            </button>
                        </div>
                    </div>

                    {/* Modal Body Iframe */}
                    <div className="flex-1 w-full bg-[#0a0b0e] relative">
                        <iframe
                            src={`${resumePdfUrl}#view=FitH`}
                            title="Sudhagar M Fullscreen Resume"
                            className="w-full h-full border-none"
                        />
                    </div>
                </div>
            </dialog>
        </SectionWrapper>
    );
};

