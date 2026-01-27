import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Moon, Sun, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface NavbarProps {
    darkMode: boolean;
    toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ darkMode, toggleTheme }) => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { t, language, toggleLanguage } = useLanguage();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: t.nav.home, href: '#' },
        { name: t.nav.services, href: '#services' },
        { name: t.nav.jobs, href: '#market-data' },
        { name: t.nav.contact, href: '#contact' },
    ];

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        setMobileMenuOpen(false);
        
        if (href === '#') {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        } else {
            const element = document.querySelector(href);
            if (element) {
                const headerOffset = 140;
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        }
    };

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'py-4' : 'py-6'}`}>
            <div className={`
                absolute inset-0 transition-all duration-300 
                ${scrolled ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-sm border-b border-white/20 dark:border-white/5' : 'bg-transparent'}
            `} />
            
            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative flex justify-between items-center">
                {/* Logo */}
                <a 
                    href="#" 
                    onClick={(e) => handleNavClick(e, '#')}
                    className="flex items-center gap-2 group"
                >
                    <div className="relative w-10 h-10 bg-brand-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-brand-500/30 group-hover:scale-105 transition-transform">
                        E
                    </div>
                    <div className="flex flex-col">
                        <span className="text-xl font-display font-bold text-slate-900 dark:text-white leading-none tracking-tight group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">EGOVİZE</span>
                        <span className="text-[10px] uppercase tracking-widest text-slate-500 dark:text-slate-400 font-semibold">{t.nav.subtitle}</span>
                    </div>
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a 
                            key={link.name}
                            href={link.href}
                            onClick={(e) => handleNavClick(e, link.href)}
                            className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-400 transition-colors relative group"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-600 dark:bg-brand-400 transition-all group-hover:w-full rounded-full" />
                        </a>
                    ))}
                </div>

                {/* Right Actions */}
                <div className="hidden md:flex items-center gap-4">
                     <button 
                        onClick={toggleLanguage}
                        className="h-10 px-3 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 flex items-center justify-center gap-2 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors font-bold text-xs"
                        aria-label="Toggle Language"
                     >
                        <Globe size={16} />
                        {language.toUpperCase()}
                     </button>
                     <button 
                        onClick={toggleTheme}
                        className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 flex items-center justify-center hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                        aria-label="Toggle Dark Mode"
                     >
                        {darkMode ? <Sun size={18} /> : <Moon size={18} />}
                     </button>
                     <a href="tel:+905536007468" className="w-10 h-10 rounded-full bg-brand-50 dark:bg-brand-900/30 flex items-center justify-center text-brand-600 dark:text-brand-400 hover:bg-brand-100 dark:hover:bg-brand-900/50 transition-colors">
                        <Phone size={18} />
                    </a>
                    <a 
                        href="#contact" 
                        onClick={(e) => handleNavClick(e, '#contact')}
                        className="bg-slate-900 dark:bg-white hover:bg-brand-600 dark:hover:bg-brand-200 text-white dark:text-slate-900 px-6 py-2.5 rounded-full text-sm font-bold transition-all shadow-lg shadow-slate-900/10 hover:shadow-brand-600/20 transform hover:-translate-y-0.5"
                    >
                        {t.nav.apply}
                    </a>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="flex items-center gap-4 md:hidden">
                    <button 
                        onClick={toggleLanguage}
                        className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 flex items-center justify-center font-bold text-xs"
                    >
                        {language.toUpperCase()}
                    </button>
                    <button 
                        onClick={toggleTheme}
                        className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 flex items-center justify-center"
                    >
                        {darkMode ? <Sun size={18} /> : <Moon size={18} />}
                    </button>
                    <button 
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="text-slate-800 dark:text-white p-2"
                    >
                        {mobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="absolute top-full left-0 w-full bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-t border-slate-100 dark:border-slate-800 p-6 shadow-xl md:hidden flex flex-col gap-4 animate-in slide-in-from-top-5">
                    {navLinks.map((link) => (
                        <a 
                            key={link.name}
                            href={link.href}
                            onClick={(e) => handleNavClick(e, link.href)}
                            className="text-lg font-medium text-slate-700 dark:text-slate-200 py-2 border-b border-slate-50 dark:border-slate-800"
                        >
                            {link.name}
                        </a>
                    ))}
                    <a 
                        href="#contact" 
                        onClick={(e) => handleNavClick(e, '#contact')}
                        className="bg-brand-600 dark:bg-brand-500 text-white py-3 rounded-xl text-center font-bold mt-2"
                    >
                        {t.nav.mobileApply}
                    </a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;