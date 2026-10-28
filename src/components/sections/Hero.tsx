import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { SiFacebook, SiX, SiLinkedin, SiInstagram } from 'react-icons/si';
import { Link } from 'react-scroll';

export const Hero = () => {
    return (
        <section
            id="home"
            className="min-h-screen w-full flex items-center justify-center relative bg-black-rich overflow-hidden px-6 sm:px-8 lg:px-12 py-20 lg:py-0"
        >
            <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 xl:gap-16 items-center relative z-10">

                {/* Left Side: Profile Image */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.9, ease: "easeOut" }}
                    className="relative order-2 lg:order-1 lg:col-span-5 flex justify-center lg:justify-end"
                >
                    <div className="relative w-[280px] h-[370px] sm:w-[320px] sm:h-[420px] md:w-[350px] md:h-[460px] lg:w-[390px] lg:h-[510px] xl:w-[420px] xl:h-[550px] rounded-2xl overflow-hidden border border-gold/30 shadow-[0_10px_40px_rgba(0,0,0,0.8)] group transition-all duration-500">
                        {/* Ambient Back Glow */}
                        <div className="absolute -inset-4 bg-gold/15 blur-[40px] rounded-full opacity-60 pointer-events-none" />

                        <img
                            src="/profile.jpg"
                            alt="SUDHAGAR M"
                            className="w-full h-full object-cover object-center grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out"
                        />

                        {/* Subtle bottom gradient overlay */}
                        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black-rich via-black-rich/40 to-transparent z-10" />
                    </div>
                </motion.div>

                {/* Right Side: Content */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
                    className="order-1 lg:order-2 lg:col-span-7 text-left relative z-30"
                >
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-gray-400 text-sm sm:text-base lg:text-lg tracking-[0.25em] mb-3 font-sans font-medium uppercase"
                    >
                        I'M
                    </motion.p>

                    <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl font-bold mb-5 font-serif text-gold leading-tight tracking-tight">
                        SUDHAGAR M
                    </h1>

                    <div className="h-[40px] mb-8 text-lg sm:text-xl md:text-2xl lg:text-3xl font-light text-gray-300 font-sans">
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

                    {/* Clear, High-Contrast Action Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                        className="flex flex-wrap items-center gap-4 sm:gap-5"
                    >
                        {/* Primary Button: Contact Me */}
                        <Link
                            to="contact"
                            smooth={true}
                            className="inline-block px-8 sm:px-10 py-3.5 sm:py-4 bg-gradient-to-r from-gold via-yellow-400 to-gold text-black-rich font-bold rounded-full shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:shadow-[0_0_30px_rgba(212,175,55,0.6)] hover:scale-105 active:scale-95 transition-all duration-300 uppercase tracking-wider text-xs sm:text-sm cursor-pointer"
                        >
                            Contact Me
                        </Link>

                        {/* Secondary Button: Download Resume */}
                        <a
                            href="/Sudhaa%20Resume.pdf"
                            download="Sudhaa_Resume.pdf"
                            className="inline-block px-8 sm:px-10 py-3.5 sm:py-4 bg-white/10 hover:bg-gold border-2 border-gold text-white hover:text-black-rich font-bold rounded-full shadow-lg hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:scale-105 active:scale-95 transition-all duration-300 uppercase tracking-wider text-xs sm:text-sm cursor-pointer backdrop-blur-sm"
                        >
                            Download Resume
                        </a>
                    </motion.div>

                </motion.div>
            </div>

            {/* Social Icons - Fixed Right Sidebar */}
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="hidden lg:flex flex-col gap-6 fixed right-8 bottom-0 z-50 items-center justify-end h-[50vh]"
            >
                {/* Top Gold Line */}
                <div className="w-[1px] h-24 bg-gradient-to-b from-transparent via-gold to-gold mb-4" />

                <div className="flex flex-col gap-6 bg-black-rich/80 backdrop-blur-sm p-4 rounded-full border border-white/5 shadow-2xl">
                    <SocialLink href="https://www.facebook.com/profile.php?id=100051049081436" icon={<SiFacebook size={20} />} />
                    <SocialLink href="https://x.com/SUDHAGAR2506" icon={<SiX size={20} />} />
                    <SocialLink href="https://www.linkedin.com/in/sudhagar-m-323117333/" icon={<SiLinkedin size={20} />} />
                    <SocialLink href="https://www.instagram.com/sudhagarrr_/" icon={<SiInstagram size={20} />} />
                </div>

                {/* Bottom Line */}
                <div className="w-[1px] h-24 bg-gradient-to-t from-transparent via-gold/50 to-gold mt-4" />
            </motion.div>

            {/* Background Subtle Gradient */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/5 blur-[150px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-charcoal/50 blur-[150px] rounded-full pointer-events-none" />
        </section>
    );
};

const SocialLink = ({ href, icon }: { href: string; icon: React.ReactNode }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-gold transition-all duration-300 transform hover:-translate-x-1 hover:scale-110 p-2 rounded-full hover:bg-white/5 hover:shadow-[0_0_15px_rgba(212,175,55,0.3)]"
    >
        {icon}
    </a>
);
