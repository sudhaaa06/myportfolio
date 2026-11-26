import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles } from "lucide-react";

interface InfinityLoaderProps {
    onEnter: () => void;
}

export const InfinityLoader = ({ onEnter }: InfinityLoaderProps) => {
    const [isExiting, setIsExiting] = useState(false);
    const [isReadyToEnter, setIsReadyToEnter] = useState(false);

    const handleEnter = () => {
        if (isExiting) return;
        setIsExiting(true);
        setTimeout(() => {
            onEnter();
        }, 600);
    };

    useEffect(() => {
        // Show the interactive "Touch to Enter" prompt
        const readyTimer = setTimeout(() => {
            setIsReadyToEnter(true);
        }, 400);

        // Auto-enter smoothly after 4.5s if untouched
        const autoEnterTimer = setTimeout(() => {
            handleEnter();
        }, 4500);

        return () => {
            clearTimeout(readyTimer);
            clearTimeout(autoEnterTimer);
        };
    }, []);

    // Keyboard support (Enter or Space to enter)
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Enter" || e.key === " ") {
                handleEnter();
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [isExiting]);

    return (
        <AnimatePresence>
            {!isExiting && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    onClick={handleEnter}
                    onTouchStart={handleEnter}
                    className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#FAFAFA] cursor-pointer select-none overflow-hidden px-4"
                >
                    {/* Ambient Background Glows */}
                    <div className="absolute w-[500px] h-[300px] bg-[#059669]/10 blur-[130px] rounded-full pointer-events-none -z-10 animate-pulse" />
                    <div className="absolute w-[300px] h-[300px] bg-[#10B981]/10 blur-[100px] rounded-full pointer-events-none -z-10" />

                    {/* Central Infinity & Brand Container */}
                    <div className="relative flex flex-col items-center text-center">

                        {/* Infinity Symbol (∞) SVG Loading Animation */}
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="relative mb-6"
                        >
                            <svg
                                viewBox="0 0 300 150"
                                className="w-56 sm:w-72 md:w-80 h-auto overflow-visible"
                            >
                                <defs>
                                    <linearGradient id="infinityGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" stopColor="#059669" />
                                        <stop offset="50%" stopColor="#10B981" />
                                        <stop offset="100%" stopColor="#047857" />
                                    </linearGradient>

                                    <filter id="infinityGlow" x="-50%" y="-50%" width="200%" height="200%">
                                        <feGaussianBlur stdDeviation="6" result="blur1" />
                                        <feGaussianBlur stdDeviation="12" result="blur2" />
                                        <feMerge>
                                            <feMergeNode in="blur2" />
                                            <feMergeNode in="blur1" />
                                            <feMergeNode in="SourceGraphic" />
                                        </feMerge>
                                    </filter>
                                </defs>

                                {/* Background Ambient Track */}
                                <path
                                    d="M 150,75 C 105,25 45,25 45,75 C 45,125 105,125 150,75 C 195,25 255,25 255,75 C 255,125 195,125 150,75 Z"
                                    fill="none"
                                    stroke="#E4E4E7"
                                    strokeWidth="6"
                                    strokeLinecap="round"
                                />

                                {/* Flowing Glowing Gradient Beam */}
                                <motion.path
                                    d="M 150,75 C 105,25 45,25 45,75 C 45,125 105,125 150,75 C 195,25 255,25 255,75 C 255,125 195,125 150,75 Z"
                                    fill="none"
                                    stroke="url(#infinityGrad)"
                                    strokeWidth="6"
                                    strokeLinecap="round"
                                    filter="url(#infinityGlow)"
                                    initial={{ pathOffset: 0, pathLength: 0.35 }}
                                    animate={{
                                        pathOffset: [0, 1],
                                        pathLength: [0.25, 0.5, 0.25],
                                    }}
                                    transition={{
                                        pathOffset: { duration: 2.2, ease: "linear", repeat: Infinity },
                                        pathLength: { duration: 2.2, ease: "easeInOut", repeat: Infinity },
                                    }}
                                />

                                {/* Bright Core Light Beam */}
                                <motion.path
                                    d="M 150,75 C 105,25 45,25 45,75 C 45,125 105,125 150,75 C 195,25 255,25 255,75 C 255,125 195,125 150,75 Z"
                                    fill="none"
                                    stroke="#059669"
                                    strokeWidth="2.5"
                                    strokeLinecap="round"
                                    initial={{ pathOffset: 0, pathLength: 0.15 }}
                                    animate={{
                                        pathOffset: [0, 1],
                                        pathLength: [0.1, 0.25, 0.1],
                                    }}
                                    transition={{
                                        pathOffset: { duration: 2.2, ease: "linear", repeat: Infinity },
                                        pathLength: { duration: 2.2, ease: "easeInOut", repeat: Infinity },
                                    }}
                                />
                            </svg>
                        </motion.div>

                        {/* Name & Title */}
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                            className="flex flex-col items-center"
                        >
                            <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold tracking-[0.25em] text-[#18181B] uppercase mb-2">
                                SUDHAGAR M
                            </h1>
                            <p className="font-sans text-xs sm:text-sm text-[#52525B] tracking-[0.2em] uppercase font-medium">
                                Software Engineer &bull; Portfolio
                            </p>
                        </motion.div>

                        {/* Interactive "Touch to Enter" Indicator */}
                        {isReadyToEnter && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4 }}
                                className="mt-8 flex flex-col items-center gap-3"
                            >
                                <div className="group relative flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#059669] hover:bg-[#047857] text-white shadow-[0_4px_16px_rgba(5,150,105,0.35)] transition-all duration-300 transform active:scale-95">
                                    <Sparkles size={15} className="text-white animate-pulse" />
                                    <span className="font-serif text-xs sm:text-sm font-bold tracking-widest uppercase">
                                        Touch to Enter
                                    </span>
                                </div>
                                <span className="text-[10px] text-[#52525B] font-mono tracking-widest uppercase">
                                    Tap anywhere to enter
                                </span>
                            </motion.div>
                        )}

                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
