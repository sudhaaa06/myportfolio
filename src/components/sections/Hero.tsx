import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { SiFacebook, SiX, SiLinkedin, SiInstagram } from 'react-icons/si';
import { Link } from 'react-scroll';

export const Hero = () => {
    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center relative bg-black-rich overflow-hidden px-6 lg:px-20"
        >
            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full relative z-10">

                {/* Left Side: Profile Image */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="relative order-2 lg:order-1 flex justify-center lg:justify-end"
                >
                    <div className="relative w-[300px] h-[400px] lg:w-[450px] lg:h-[600px] grayscale hover:grayscale-0 transition-all duration-700 ease-in-out">
                        {/* Soft Shadow/Glow Background */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-black-rich via-transparent to-transparent z-20" />
                        <div className="absolute -inset-4 bg-gold/10 blur-[50px] rounded-full opacity-50" />

                        <img
<<<<<<< HEAD
                            src="/profile.jpg"
=======
                            src="/my%20photo.jpg"
>>>>>>> 7809539102a77c4a2d5532e473e0f02192b6ce77
                            alt="SUDHAGAR M"
                            className="w-full h-full object-cover object-center rounded-sm shadow-[0_0_50px_rgba(0,0,0,0.8)]"
                        />

                        {/* Overlay to blend bottom into background */}
                        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black-rich to-transparent z-10" />
                    </div>
                </motion.div>

                {/* Right Side: Content */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                    className="order-1 lg:order-2 text-left relative z-30"
                >
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="text-gray-400 text-lg tracking-[0.2em] mb-4 font-sans"
                    >
                        I'M
                    </motion.p>

                    <h1 className="text-6xl lg:text-8xl font-bold mb-6 font-serif text-gold leading-tight">
                        SUDHAGAR M
                    </h1>

                    <div className="h-[40px] mb-8 text-xl lg:text-2xl font-light text-gray-300 font-sans">
                        <TypeAnimation
                            sequence={[
                                'AI Developer',
                                2000,
                                'Software Engineer',
                                2000,
                                'Full Stack Developer',
                                2000,
                                'Tech Innovator',
                                2000,
                            ]}
                            wrapper="span"
                            speed={50}
                            className="text-white tracking-widest uppercase"
                            repeat={Infinity}
                        />
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        className="flex flex-wrap gap-4"
                    >
                        <Link
                            to="contact"
                            smooth={true}
                            className="inline-block px-10 py-4 border border-gold text-gold hover:bg-gold hover:text-black-rich transition-all duration-300 uppercase tracking-widest text-sm font-semibold cursor-pointer"
                        >
                            Contact Me
                        </Link>

                        <a
                            href="/Sudhaa%20Resume.pdf"
                            download="Sudhaa_Resume.pdf"
                            className="inline-block px-10 py-4 border border-gold text-gold hover:bg-gold hover:text-black-rich transition-all duration-300 uppercase tracking-widest text-sm font-semibold cursor-pointer"
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
                transition={{ delay: 1.5, duration: 0.8 }}
                className="hidden lg:flex flex-col gap-6 fixed right-8 bottom-0 z-50 items-center justify-end h-[50vh]"
            >
                {/* Top Gold Line */}
                <div className="w-[1px] h-24 bg-gradient-to-b from-transparent via-gold to-gold mb-4" />

                <div className="flex flex-col gap-6 bg-black-rich/80 backdrop-blur-sm p-4 rounded-full border border-white/5 shadow-2xl">
                    <SocialLink href="https://www.facebook.com/profile.php?id=100051049081436" icon={<SiFacebook size={20} />} />
                    <SocialLink href="https://x.com/SUDHAGAR2506" icon={<SiX size={20} />} />
                    <SocialLink href="https://www.linkedin.com/in/sudhagar-m-323117333/" icon={<SiLinkedin size={20} />} />
                    <SocialLink href="https://www.instagram.com/viper.zz__/" icon={<SiInstagram size={20} />} />
                </div>

                {/* Bottom Line (Visual Balance) */}
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
