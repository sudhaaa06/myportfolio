import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import SectionWrapper from "../layout/SectionWrapper";
import { Download, Eye, ExternalLink, X, FileText, Sparkles } from "lucide-react";

export const Resume = () => {
    const [isViewerOpen, setIsViewerOpen] = useState(false);
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

    return (
        <SectionWrapper id="resume" className="bg-black-rich py-28 md:py-36 relative overflow-hidden flex flex-col justify-center items-center">
            {/* Ambient Background Aura */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#6B8E7B]/10 blur-[150px] rounded-full pointer-events-none" />

            <div className="w-full max-w-3xl mx-auto relative z-10 px-4 sm:px-6">

                {/* Section Header: Summary / Synopsis */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12 sm:mb-14"
                >
                    <span className="text-[#B7C9B1] uppercase tracking-[0.25em] text-xs md:text-sm font-semibold">
                        Curriculum Vitae
                    </span>
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold font-serif text-white tracking-tight mt-2">
                        Summary <span className="text-[#F1E9D2] italic font-serif">/ Synopsis</span>
                    </h2>
                    <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-[#B7C9B1] to-transparent mx-auto rounded-full mt-4" />
                </motion.div>

                {/* Minimalist Showcase Card in Sage Serenity */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="relative rounded-3xl border border-white/10 bg-gradient-to-b from-[#182923]/90 via-[#14231E] to-[#0B1512] p-8 sm:p-12 md:p-16 text-center backdrop-blur-2xl shadow-[0_20px_70px_rgba(0,0,0,0.85)] hover:border-[#6B8E7B]/50 transition-all duration-500 overflow-hidden"
                >
                    {/* Subtle Top Accent Ribbon */}
                    <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.03] border border-white/10 text-[#B7C9B1] text-[11px] font-mono tracking-widest uppercase mb-8">
                        <Sparkles size={12} className="text-[#B7C9B1]" />
                        <span>Professional Synopsis</span>
                    </div>

                    {/* Name & Title */}
                    <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold font-serif text-[#F1E9D2] tracking-tight leading-tight">
                        Sudhagar M
                    </h3>

                    <p className="text-sm sm:text-base text-gray-300 font-light mt-3 max-w-md mx-auto">
                        Software Engineer &bull; ML Operations Associate
                    </p>

                    <div className="h-px w-20 bg-gradient-to-r from-transparent via-[#B7C9B1]/50 to-transparent mx-auto my-8" />

                    {/* Resume Download & View Options Only */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
                        {/* Download Option */}
                        <a
                            href={resumePdfUrl}
                            download={downloadFileName}
                            className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-gradient-to-r from-[#B7C9B1] via-[#F1E9D2] to-[#B7C9B1] text-[#243B35] font-bold text-sm rounded-2xl shadow-[0_0_25px_rgba(183,201,177,0.35)] hover:shadow-[0_0_35px_rgba(241,233,210,0.6)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
                        >
                            <Download size={18} className="transition-transform group-hover:-translate-y-0.5" />
                            <span>Download Resume</span>
                            <span className="text-[11px] opacity-75 font-mono">PDF</span>
                        </a>

                        {/* View Option */}
                        <button
                            onClick={() => setIsViewerOpen(true)}
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl border border-white/15 bg-white/[0.03] text-white font-semibold text-sm hover:border-[#B7C9B1]/60 hover:bg-[#243B35]/40 hover:text-[#F1E9D2] transition-all duration-300 cursor-pointer shadow-lg backdrop-blur-sm"
                        >
                            <Eye size={18} className="text-[#B7C9B1]" />
                            <span>View Resume</span>
                        </button>

                        {/* External Tab View */}
                        <a
                            href={resumePdfUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-4 rounded-2xl border border-white/10 text-gray-400 hover:text-[#F1E9D2] hover:border-[#6B8E7B]/40 hover:bg-white/5 transition-all duration-300 hidden sm:inline-flex"
                            title="Open in new window"
                        >
                            <ExternalLink size={18} />
                        </a>
                    </div>
                </motion.div>

            </div>

            {/* Accessible Native HTML <dialog> Modal Viewer with light-dismiss */}
            <dialog
                ref={dialogRef}
                {...({ closedby: "any" } as Record<string, unknown>)}
                aria-labelledby="dialog-resume-title"
                className="backdrop:bg-black/80 backdrop:backdrop-blur-md bg-transparent p-3 sm:p-6 md:p-8 w-full max-w-5xl h-[90vh] max-h-[90vh] m-auto outline-none border-none overflow-hidden"
            >
                <div className="relative w-full h-full bg-[#121E1A] border border-white/15 rounded-2xl shadow-2xl flex flex-col overflow-hidden">
                    {/* Modal Chrome Header */}
                    <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#182923]">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-lg bg-[#243B35] border border-[#6B8E7B]/40 flex items-center justify-center text-[#B7C9B1]">
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
                                className="flex items-center gap-1.5 px-3 py-1.5 bg-[#B7C9B1] text-[#243B35] text-xs font-semibold rounded-lg hover:bg-[#F1E9D2] transition-colors"
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
                    <div className="flex-1 w-full bg-[#0B1311] relative">
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
