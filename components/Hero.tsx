import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const Hero: React.FC = () => {
    const { t } = useLanguage();

    const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            // Increased offset to prevent section from being hidden behind fixed navbar
            const headerOffset = 140;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
            {/* Background Blobs */}
            <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-200 dark:bg-brand-500 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-30 dark:opacity-20 animate-blob" />
                <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-200 dark:bg-purple-500 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-30 dark:opacity-20 animate-blob animation-delay-2000" />
                <div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-pink-200 dark:bg-pink-500 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-30 dark:opacity-20 animate-blob animation-delay-4000" />
            </div>

            {/* Grid Pattern Overlay */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light dark:mix-blend-overlay"></div>
            
            <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
                <div className="flex flex-col items-center text-center gap-8 max-w-5xl mx-auto">
                    
                    <motion.h1 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-5xl lg:text-8xl font-display font-extrabold text-slate-900 dark:text-white leading-[1.1] tracking-tight"
                    >
                        {t.hero.titlePart1} <br className="hidden md:block"/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 via-blue-500 to-purple-600 dark:from-brand-400 dark:via-blue-400 dark:to-purple-400">
                            {t.hero.titlePart2}
                        </span>
                        {" "}{t.hero.titlePart3}
                    </motion.h1>

                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed"
                    >
                        {t.hero.desc}
                    </motion.p>

                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
                    >
                        <a 
                            href="#contact" 
                            onClick={(e) => handleScrollTo(e, 'contact')}
                            className="group inline-flex justify-center items-center gap-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-8 py-4 rounded-full font-bold hover:bg-brand-600 dark:hover:bg-brand-200 transition-all shadow-xl shadow-slate-900/20 dark:shadow-white/5 hover:shadow-brand-500/30 hover:-translate-y-1"
                        >
                            {t.hero.ctaPrimary}
                            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                        </a>
                        <a 
                            href="#services" 
                            onClick={(e) => handleScrollTo(e, 'services')}
                            className="inline-flex justify-center items-center gap-3 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm text-slate-700 dark:text-slate-200 border border-white/60 dark:border-white/10 px-8 py-4 rounded-full font-bold hover:bg-white dark:hover:bg-slate-800 transition-all hover:shadow-lg"
                        >
                            {t.hero.ctaSecondary}
                        </a>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 1 }}
                        className="pt-8 flex flex-wrap justify-center gap-4 md:gap-8 text-sm font-medium text-slate-500 dark:text-slate-400"
                    >
                        {t.hero.badges.map((item) => (
                            <div key={item} className="flex items-center gap-2 bg-white/40 dark:bg-slate-800/40 px-3 py-1 rounded-lg backdrop-blur-sm">
                                <CheckCircle2 size={16} className="text-green-500 dark:text-green-400" />
                                {item}
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
            
            {/* Decorative bottom fade */}
            <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#F4F5F7] dark:from-slate-950 to-transparent z-10" />
        </section>
    );
};

export default Hero;