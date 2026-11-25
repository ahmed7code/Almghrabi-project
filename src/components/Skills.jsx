import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaFigma } from 'react-icons/fa';
import { SiTailwindcss, SiNextdotjs, SiTypescript, SiFramer, SiVite, SiLinux } from 'react-icons/si';

const SkillsList = [
    { name: 'React', category: 'Frontend', icon: <FaReact className="text-sky-400" size={32} /> },
    { name: 'Next.js', category: 'Framework', icon: <SiNextdotjs className="text-white" size={32} /> },
    { name: 'JavaScript', category: 'Language', icon: <FaJs className="text-yellow-400" size={32} /> },
    { name: 'TypeScript', category: 'Language', icon: <SiTypescript className="text-blue-500" size={32} /> },
    { name: 'Tailwind CSS', category: 'Styling', icon: <SiTailwindcss className="text-cyan-400" size={32} /> },
    { name: 'Framer Motion', category: 'Animation', icon: <SiFramer className="text-pink-500" size={32} /> },
    { name: 'HTML5', category: 'Markup', icon: <FaHtml5 className="text-orange-500" size={32} /> },
    { name: 'CSS3', category: 'Styling', icon: <FaCss3Alt className="text-blue-400" size={32} /> },
    { name: 'UI/UX (Figma)', category: 'Design', icon: <FaFigma className="text-purple-400" size={32} /> },
    { name: 'Vite', category: 'Build Tool', icon: <SiVite className="text-amber-400" size={32} /> },
    { name: 'Git & GitHub', category: 'Version Control', icon: <FaGitAlt className="text-red-500" size={32} /> },
    { name: 'Linux', category: 'Environment', icon: <SiLinux className="text-zinc-200" size={32} /> }
];

function Skills() {
    return (
        <section id="skills" className="relative py-24 bg-zinc-950 text-white px-4 overflow-hidden">
            {/* إضاءة خلفية خفيفة متناسقة مع الهيرو */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-87.5 sm:w-150 h-87.5 sm:h-150 bg-emerald-500/5 rounded-full blur-[130px] pointer-events-none" />

            <div className="relative z-10 max-w-6xl mx-auto">
                {/* عنوان القسم */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-emerald-400 text-xs sm:text-sm font-bold uppercase tracking-widest">
                        My Tech Stack
                    </span>
                    <h2 className="text-3xl sm:text-5xl font-black mt-2">
                        Skills & <span className="text-emerald-400">Technologies</span>
                    </h2>
                    <p className="text-zinc-400 text-sm sm:text-base max-w-xl mx-auto mt-4">
                        The tools, frameworks, and technologies I use to bring modern web ideas to life with speed and precision.
                    </p>
                </motion.div>

                {/* شبكة بطاقات المهارات */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
                    {SkillsList.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.4, delay: index * 0.05 }}
                            whileHover={{ y: -6, scale: 1.02 }}
                            className="group bg-zinc-900/70 backdrop-blur-md border border-white/10 hover:border-emerald-400/50 rounded-2xl p-6 flex flex-col items-center justify-center text-center transition-colors duration-300 shadow-lg shadow-black/40"
                        >
                            {/* خلفية الأيقونة */}
                            <div className="p-3.5 rounded-xl bg-zinc-800/80 group-hover:bg-zinc-800 transition-colors duration-300 mb-4">
                                {skill.icon}
                            </div>

                            {/* اسم المهارة */}
                            <h3 className="text-base sm:text-lg font-bold text-zinc-100 group-hover:text-emerald-400 transition-colors duration-300">
                                {skill.name}
                            </h3>

                            {/* تصنيف المهارة */}
                            <span className="text-xs text-zinc-500 mt-1 font-medium">
                                {skill.category}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Skills;
