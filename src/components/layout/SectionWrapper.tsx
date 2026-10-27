import type { ReactNode } from "react";

interface SectionWrapperProps {
    children: ReactNode;
    id: string;
    className?: string;
}

const SectionWrapper = ({ children, id, className = "" }: SectionWrapperProps) => {
    return (
        <section id={id} className={`py-20 md:py-28 min-h-screen relative flex items-center justify-center ${className}`}>
            <div className="container mx-auto px-6 md:px-12 z-10">
                {children}
            </div>
        </section>
    );
};

export default SectionWrapper;
