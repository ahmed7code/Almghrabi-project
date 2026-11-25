import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaInstagram, FaDiscord } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Roles = [
    'Frontend Developer',
    'UI/UX Designer',
    'React Developer',
    'Web/Web App Developer'
];

const SocialLinks = [
    { name: 'GitHub', href: 'https://github.com/ahmed7code', icon: <FaGithub size={20} /> },
    { name: 'Twitter', href: 'https://x.com/Ahmed_Devloper', icon: <FaXTwitter size={20} /> },
    { name: 'Instagram', href: 'https://www.instagram.com/ams111.dev/', icon: <FaInstagram size={20} /> },
    { name: 'Discord', href: 'https://discord.com/users/1528651800431824988', icon: <FaDiscord size={20} /> }
];

function Hero() {
    const [index, setIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentRole = Roles[index];
        const typingSpeed = isDeleting ? 50 : 100;

        const timeout = setTimeout(() => {
            if (!isDeleting) {
                setDisplayedText(currentRole.substring(0, displayedText.length + 1));
                if (displayedText === currentRole) {
                    setTimeout(() => setIsDeleting(true), 1500);
                }
            } else {
                setDisplayedText(currentRole.substring(0, displayedText.length - 1));
                if (displayedText === '') {
                    setIsDeleting(false);
                    setIndex((prev) => (prev + 1) % Roles.length);
                }
            }
        }, typingSpeed);

        return () => clearTimeout(timeout);
    }, [displayedText, isDeleting, index]);

    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center bg-zinc-950 text-white px-4 pt-28 pb-16 overflow-hidden"
        >
            {/* إضاءة خلفية خضراء خفيفة */}
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-75 sm:w-125 h-75 sm:h-125 bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
                {/* شارة ترحيبية */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900/90 border border-white/10 text-xs sm:text-sm font-medium text-zinc-300 mb-6"
                >
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    Available for Freelance & Projects
                </motion.div>

                {/* العنوان الرئيسي */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight mb-4"
                >
                    Hi, I'm <span className="text-emerald-400">Ahmed</span>
                </motion.h1>

                {/* نص الكتابة التلقائية */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="h-10 sm:h-12 flex items-center justify-center text-xl sm:text-3xl font-bold text-zinc-300 mb-6"
                >
                    <span>A Passionate&nbsp;</span>
                    <span className="text-emerald-400">
                        {displayedText}
                        <span className="animate-pulse text-white ml-0.5">|</span>
                    </span>
                </motion.div>

                {/* نبذة تعريفية */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="max-w-2xl text-sm sm:text-base text-zinc-400 leading-relaxed mb-10 px-2"
                >
                    I craft fast, responsive, and modern web applications with clean code and high-speed precision—turning ideas into seamless digital experiences.
                </motion.p>

                {/* أزرار التفاعل */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-10"
                >
                    <motion.a
                        href="#work"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-emerald-500 text-black font-bold text-sm hover:bg-emerald-400 transition-colors duration-300 shadow-lg shadow-emerald-500/20"
                    >
                        View My Work
                    </motion.a>

                    <motion.a
                        href="#contact"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-zinc-900 text-white font-semibold text-sm border border-white/10 hover:border-emerald-400/50 hover:text-emerald-400 transition-colors duration-300"
                    >
                        Contact Me
                    </motion.a>
                </motion.div>

                {/* أزرار السوشيال ميديا */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="flex items-center gap-4"
                >
                    {SocialLinks.map((social, idx) => (
                        <motion.a
                            key={idx}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={social.name}
                            whileHover={{ y: -4, scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className="p-3 rounded-full bg-zinc-900/90 border border-white/10 text-zinc-400 hover:text-emerald-400 hover:border-emerald-400/50 hover:shadow-lg hover:shadow-emerald-500/10 transition-colors duration-300"
                        >
                            {social.icon}
                        </motion.a>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

export default Hero;
