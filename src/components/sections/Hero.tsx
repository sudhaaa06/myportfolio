import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-scroll';

interface SocialItem {
    name: string;
    href: string;
    icon: React.ReactNode;
    colorClass: string;
    hoverGlow: string;
}

const socialLinks: SocialItem[] = [
    {
        name: "Facebook",
        href: "https://www.facebook.com/profile.php?id=100051049081436",
        icon: <FaFacebookF size={18} />,
        colorClass: "text-[#1877F2]",
        hoverGlow: "hover:drop-shadow-[0_0_12px_rgba(24,119,242,0.8)]",
    },
    {
        name: "Twitter",
        href: "https://x.com/SUDHAGAR2506",
        icon: <FaTwitter size={19} />,
        colorClass: "text-[#1DA1F2]",
        hoverGlow: "hover:drop-shadow-[0_0_12px_rgba(29,161,242,0.8)]",
    },
    {
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/sudhagar-m-323117333/",
        icon: <FaLinkedinIn size={19} />,
        colorClass: "text-[#0A66C2]",
        hoverGlow: "hover:drop-shadow-[0_0_12px_rgba(10,102,194,0.8)]",
    },
    {
        name: "GitHub",
        href: "https://github.com/sudhaaa06",
        icon: <FaGithub size={19} />,
        colorClass: "text-white",
        hoverGlow: "hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.8)]",
    },
    {
        name: "Instagram",
        href: "https://www.instagram.com/sudhagarrr_/",
        icon: <FaInstagram size={19} style={{ fill: "url(#instagram-gradient)" }} className="text-[#E4405F]" />,
        colorClass: "text-[#E4405F]",
        hoverGlow: "hover:drop-shadow-[0_0_12px_rgba(228,64,95,0.8)]",
    },
];

export const Hero = () => {
    return (
        <section
            id="home"
            className="min-h-screen w-full flex items-center justify-center relative bg-[#FAFAFA] overflow-hidden px-6 sm:px-8 lg:px-12 pt-28 pb-16 md:py-24"
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
                    <div className="relative w-[280px] sm:w-[320px] md:w-[350px] aspect-square group transition-all duration-500">
                        {/* Ambient Back Glow */}
                        <div className="absolute -inset-6 bg-[#059669]/15 blur-[60px] rounded-full opacity-70 pointer-events-none" />

                        <img
                            src="/profile.png"
                            alt="SUDHAGAR M"
                            className="w-full h-full object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.18)] group-hover:scale-105 transition-all duration-700 ease-in-out"
                        />
                    </div>

                    {/* Social Bar - Transparent Logos with Brand Colors */}
                    <div className="flex items-center gap-6 sm:gap-7 bg-[#18181B] px-6 sm:px-7 py-3 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.18)]">
                        {socialLinks.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={item.name}
                                className={`${item.colorClass} ${item.hoverGlow} transition-all duration-300 transform hover:-translate-y-1 hover:scale-125 flex items-center justify-center p-1`}
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
                        className="text-[#52525B] text-sm sm:text-base md:text-lg tracking-[0.25em] mb-2 font-sans font-semibold uppercase"
                    >
                        I'M
                    </motion.p>

                    <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-4 font-serif text-[#18181B] leading-tight tracking-tight">
                        SUDHAGAR M
                    </h1>

                    <div className="h-[40px] mb-8 text-lg sm:text-xl md:text-2xl lg:text-3xl font-light text-[#52525B] font-sans flex items-center justify-center">
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
                            className="text-[#059669] tracking-widest uppercase font-bold"
                            repeat={Infinity}
                        />
                    </div>

                    {/* Action Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="flex flex-wrap items-center justify-center gap-4 sm:gap-5"
                    >
                        <Link
                            to="contact"
                            smooth={true}
                            className="inline-block px-8 sm:px-10 py-3.5 sm:py-4 bg-[#059669] hover:bg-[#047857] text-white font-bold rounded-full shadow-[0_4px_16px_rgba(5,150,105,0.35)] hover:shadow-[0_6px_24px_rgba(5,150,105,0.45)] hover:scale-105 active:scale-95 transition-all duration-300 uppercase tracking-wider text-xs sm:text-sm cursor-pointer"
                        >
                            Contact Me
                        </Link>

                        <a
                            href="/Sudhaa%20Resume.pdf"
                            download="Sudhaa_Resume.pdf"
                            className="inline-block px-8 sm:px-10 py-3.5 sm:py-4 bg-white hover:bg-[#059669] border-2 border-[#E4E4E7] hover:border-[#059669] text-[#18181B] hover:text-white font-bold rounded-full shadow-sm hover:shadow-[0_4px_20px_rgba(5,150,105,0.3)] hover:scale-105 active:scale-95 transition-all duration-300 uppercase tracking-wider text-xs sm:text-sm cursor-pointer"
                        >
                            Download Resume
                        </a>
                    </motion.div>
                </motion.div>

            </div>


            {/* Background Subtle Gradient */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#059669]/5 blur-[160px] rounded-full pointer-events-none" />
        </section>
    );
};
