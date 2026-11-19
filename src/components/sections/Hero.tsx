import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { SiFacebook, SiX, SiLinkedin, SiInstagram } from 'react-icons/si';
import { Link } from 'react-scroll';

interface SocialItem {
    name: string;
    href: string;
    icon: React.ReactNode;
    colorClass: string;
    hoverStyle: string;
}

const socialLinks: SocialItem[] = [
    {
        name: "Facebook",
        href: "https://www.facebook.com/profile.php?id=100051049081436",
        icon: <SiFacebook size={20} />,
        colorClass: "text-[#1877F2]",
        hoverStyle: "hover:from-[#1877F2]/25 hover:to-[#1877F2]/10 hover:shadow-[0_8px_20px_rgba(24,119,242,0.45),inset_0_1px_0_rgba(255,255,255,0.3)]",
    },
    {
        name: "X (Twitter)",
        href: "https://x.com/SUDHAGAR2506",
        icon: <SiX size={18} />,
        colorClass: "text-white",
        hoverStyle: "hover:from-white/25 hover:to-white/10 hover:shadow-[0_8px_20px_rgba(255,255,255,0.35),inset_0_1px_0_rgba(255,255,255,0.4)]",
    },
    {
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/sudhagar-m-323117333/",
        icon: <SiLinkedin size={20} />,
        colorClass: "text-[#0A66C2]",
        hoverStyle: "hover:from-[#0A66C2]/25 hover:to-[#0A66C2]/10 hover:shadow-[0_8px_20px_rgba(10,102,194,0.45),inset_0_1px_0_rgba(255,255,255,0.3)]",
    },
    {
        name: "Instagram",
        href: "https://www.instagram.com/sudhagarrr_/",
        icon: <SiInstagram size={20} style={{ fill: "url(#instagram-gradient)" }} className="text-[#E4405F]" />,
        colorClass: "text-[#E4405F]",
        hoverStyle: "hover:from-[#E4405F]/25 hover:to-[#E4405F]/10 hover:shadow-[0_8px_20px_rgba(228,64,95,0.45),inset_0_1px_0_rgba(255,255,255,0.3)]",
    },
];

export const Hero = () => {
    return (
        <section
            id="home"
            className="min-h-screen w-full flex items-center justify-center relative bg-black-rich overflow-hidden px-6 sm:px-8 lg:px-12 pt-28 pb-16 md:py-24"
        >
            {/* SVG Defs for Instagram Gradient */}
            <svg width="0" height="0" className="absolute -z-50 pointer-events-none opacity-0" aria-hidden="true">
                <defs>
                    <linearGradient id="instagram-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
                        <stop stopColor="#fdf497" offset="0%" />
                        <stop stopColor="#fdf497" offset="5%" />
                        <stop stopColor="#fd5949" offset="45%" />
                        <stop stopColor="#d6249f" offset="60%" />
                        <stop stopColor="#285AEB" offset="90%" />
                    </linearGradient>
                </defs>
            </svg>

            <div className="w-full max-w-4xl mx-auto flex flex-col items-center text-center relative z-10">

                {/* Profile Image & Social Links */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex flex-col items-center gap-5 mb-8"
                >
                    <div className="relative w-[260px] sm:w-[300px] md:w-[340px] aspect-[776/1024] group transition-all duration-500">
                        {/* Ambient Back Glow */}
                        <div className="absolute -inset-6 bg-[#6B8E7B]/25 blur-[60px] rounded-full opacity-80 pointer-events-none" />

                        <img
                            src="/profile.png"
                            alt="SUDHAGAR M"
                            className="w-full h-full object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.85)] group-hover:scale-105 transition-all duration-700 ease-in-out"
                        />
                    </div>

                    {/* 3D Tactile Social Pill in Sage Serenity tones (No Border Lines) */}
                    <div className="flex items-center gap-3 bg-gradient-to-b from-[#1c2e27] via-[#12201b] to-[#09110e] p-2 sm:p-2.5 rounded-full shadow-[0_20px_45px_rgba(0,0,0,0.9),0_8px_16px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(183,201,177,0.2),inset_0_-2px_4px_rgba(0,0,0,0.75)]">
                        {socialLinks.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={item.name}
                                className={`w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-gradient-to-b from-white/[0.08] via-white/[0.02] to-black/60 shadow-[0_4px_8px_rgba(0,0,0,0.65),inset_0_1px_0_rgba(255,255,255,0.18),inset_0_-1px_2px_rgba(0,0,0,0.6)] transition-all duration-300 transform hover:-translate-y-1 hover:scale-110 active:translate-y-0.5 active:shadow-[inset_0_2px_4px_rgba(0,0,0,0.9)] flex items-center justify-center ${item.colorClass} ${item.hoverStyle}`}
                            >
                                {item.icon}
                            </a>
                        ))}
                    </div>
                </motion.div>

                {/* Content: I'M, Name, Animated Roles, Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    className="flex flex-col items-center text-center w-full max-w-3xl"
                >
                    <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-gray-400 text-sm sm:text-base md:text-lg tracking-[0.25em] mb-2 font-sans font-medium uppercase"
                    >
                        I'M
                    </motion.p>

                    <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-4 font-serif text-[#F1E9D2] leading-tight tracking-tight">
                        SUDHAGAR M
                    </h1>

                    <div className="h-[40px] mb-8 text-lg sm:text-xl md:text-2xl lg:text-3xl font-light text-gray-300 font-sans flex items-center justify-center">
                        <TypeAnimation
                            sequence={[
                                'Software Engineer',
                                2500,
                                'Full Stack Developer',
                                2000,
                                'AI & ML Data Specialist',
                                2000,
                                'Python & Django Developer',
                                2000,
                            ]}
                            wrapper="span"
                            speed={50}
                            className="text-white tracking-widest uppercase font-medium"
                            repeat={Infinity}
                        />
                    </div>

                    {/* Action Buttons in Sage Serenity */}
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="flex flex-wrap items-center justify-center gap-4 sm:gap-5"
                    >
                        <Link
                            to="contact"
                            smooth={true}
                            className="inline-block px-8 sm:px-10 py-3.5 sm:py-4 bg-gradient-to-r from-[#B7C9B1] via-[#F1E9D2] to-[#B7C9B1] text-[#243B35] font-bold rounded-full shadow-[0_0_20px_rgba(183,201,177,0.4)] hover:shadow-[0_0_30px_rgba(241,233,210,0.6)] hover:scale-105 active:scale-95 transition-all duration-300 uppercase tracking-wider text-xs sm:text-sm cursor-pointer"
                        >
                            Contact Me
                        </Link>

                        <a
                            href="/Sudhaa%20Resume.pdf"
                            download="Sudhaa_Resume.pdf"
                            className="inline-block px-8 sm:px-10 py-3.5 sm:py-4 bg-white/5 hover:bg-[#F1E9D2] border-2 border-[#B7C9B1] text-[#F1E9D2] hover:text-[#243B35] font-bold rounded-full shadow-lg hover:shadow-[0_0_25px_rgba(183,201,177,0.4)] hover:scale-105 active:scale-95 transition-all duration-300 uppercase tracking-wider text-xs sm:text-sm cursor-pointer backdrop-blur-sm"
                        >
                            Download Resume
                        </a>
                    </motion.div>
                </motion.div>

            </div>

            {/* Background Subtle Gradient */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#6B8E7B]/10 blur-[160px] rounded-full pointer-events-none" />
        </section>
    );
};
