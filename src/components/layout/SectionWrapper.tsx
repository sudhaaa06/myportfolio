import type { ReactNode } from "react";

interface SectionWrapperProps {
    children: ReactNode;
    id: string;
    className?: string;
}

const SectionWrapper = ({ children, id, className = "" }: SectionWrapperProps) => {
    return (
        <section id={id} className={`py-20 md:py-28 lg:py-32 min-h-screen w-full relative flex flex-col justify-center items-center ${className}`}>
            <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 z-10">
                {children}
            </div>
        </section>
    );
};

export default SectionWrapper;
