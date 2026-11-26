import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "About", href: "#about" },
        { name: "Experience", href: "#experience" },
        { name: "Skills", href: "#skills" },
        { name: "Projects", href: "#projects" },
        { name: "Certificates", href: "#certificates" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${
                scrolled ? "bg-white/90 backdrop-blur-md border-b border-[#E4E4E7] shadow-sm" : "bg-transparent"
            }`}
        >
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                {/* Brand name removed */}
                <div />

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-8 items-center">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-[#52525B] hover:text-[#059669] transition-colors text-sm uppercase tracking-widest font-medium"
                        >
                            {link.name}
                        </a>
                    ))}
                    <a
                        href="#contact"
                        className="px-6 py-2 rounded-full border border-[#059669] text-[#059669] hover:bg-[#059669] hover:text-white transition-all duration-300 text-sm font-bold uppercase tracking-wider hover:shadow-[0_0_15px_rgba(5,150,105,0.25)]"
                    >
                        Hire Me
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-[#18181B] hover:text-[#059669] transition-colors p-1"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-[#E4E4E7] py-6 px-6 flex flex-col space-y-4 shadow-xl">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-lg text-[#52525B] hover:text-[#059669] font-serif transition-colors"
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </a>
                    ))}
                    <a
                        href="#contact"
                        onClick={() => setIsOpen(false)}
                        className="inline-block text-center px-6 py-2.5 rounded-full bg-[#059669] text-white font-bold uppercase text-sm tracking-wider shadow-sm"
                    >
                        Hire Me
                    </a>
                </div>
            )}
        </nav>
    );
};
