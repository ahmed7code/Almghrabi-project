import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function Navbar() {
    const Navlinks = [
        { name: 'Home', href: '#home' },
        { name: 'Skills', href: '#skills' },
        { name: 'Work', href: '#work' },
        { name: 'Services', href: '#services' },
        { name: 'Testimonials', href: '#testimonials' }
    ];

    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('#home');

    const toggleMenu = () => setIsOpen((open) => !open);

    // مراقبة التمرير لتحديد القسم الحالي
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 250;

            Navlinks.forEach((link) => {
                const section = document.querySelector(link.href);
                if (section) {
                    const top = section.offsetTop;
                    const height = section.offsetHeight;
                    if (scrollPosition >= top && scrollPosition < top + height) {
                        setActiveSection(link.href);
                    }
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className='fixed top-4 sm:top-6 left-0 w-full z-40 flex flex-col items-center px-4'>
            <motion.nav
                initial={{ y: -30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="bg-zinc-900/90 backdrop-blur-md px-5 sm:px-8 py-3 sm:py-4 rounded-full flex items-center justify-between gap-4 sm:gap-10 shadow-2xl shadow-black/50 w-full sm:w-auto max-w-7xl border border-white/10"
            >
                <a
                    href="#home"
                    onClick={() => setActiveSection('#home')}
                    className="text-lg sm:text-xl font-black tracking-widest text-white shrink-0"
                >
                    Ahmed<span className="text-emerald-400">.</span>
                </a>

                <div className='hidden md:flex items-center gap-6 lg:gap-8'>
                    {Navlinks.map((link, index) => {
                        const isActive = activeSection === link.href;
                        return (
                            <a
                                href={link.href}
                                key={index}
                                onClick={() => setActiveSection(link.href)}
                                className={`relative text-sm font-medium transition-colors duration-300 tracking-wide ${isActive ? 'text-emerald-400' : 'text-zinc-300 hover:text-emerald-400'
                                    }`}
                            >
                                {link.name}
                                {isActive && (
                                    <motion.span
                                        layoutId="activeDot"
                                        className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-emerald-400"
                                    />
                                )}
                            </a>
                        );
                    })}
                </div>

                <motion.a
                    href="#contact"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className='hidden md:inline-block px-5 lg:px-7 py-2.5 lg:py-3 rounded-full bg-emerald-500 cursor-pointer text-black font-medium text-sm hover:bg-emerald-400 transition-colors duration-300'
                >
                    Contact Me
                </motion.a>

                <button
                    onClick={toggleMenu}
                    className='md:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-white/10 transition-colors duration-300'
                    aria-label='Toggle Menu'
                >
                    <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                    <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
                    <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                </button>
            </motion.nav>

            {/* قائمة الجوال المنسدلة */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -15, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -15, scale: 0.95 }}
                        transition={{ duration: 0.25, ease: 'easeOut' }}
                        className="md:hidden mt-3 w-full max-w-sm bg-zinc-900/95 backdrop-blur-md rounded-3xl p-6 shadow-2xl shadow-black/60 border border-white/10 flex flex-col items-center gap-4"
                    >
                        {Navlinks.map((link, index) => {
                            const isActive = activeSection === link.href;
                            return (
                                <a
                                    href={link.href}
                                    key={index}
                                    onClick={() => {
                                        setActiveSection(link.href);
                                        setIsOpen(false);
                                    }}
                                    className={`w-full text-center py-2 text-base font-medium transition-colors duration-300 ${isActive ? 'text-emerald-400' : 'text-zinc-300 hover:text-emerald-400'
                                        }`}
                                >
                                    {link.name}
                                </a>
                            );
                        })}
                        <a
                            href="#contact"
                            onClick={() => setIsOpen(false)}
                            className="w-full text-center mt-2 py-3 rounded-full bg-emerald-500 text-black font-medium text-sm hover:bg-emerald-400 transition-colors duration-300"
                        >
                            Contact Me
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default Navbar;
