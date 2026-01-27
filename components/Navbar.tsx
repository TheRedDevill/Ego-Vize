import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const Navbar: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Anasayfa', href: '#' },
        { name: 'Hizmetler', href: '#services' },
        { name: 'İş Fırsatları', href: '#market-data' },
        { name: 'İletişim', href: '#contact' },
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
                // Adjust offset for fixed navbar - increased to 140 for better spacing
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
                absolute inset-0 transition-opacity duration-300 
                ${scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm border-b border-white/20' : 'bg-transparent'}
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
                        <span className="text-xl font-display font-bold text-slate-900 leading-none tracking-tight group-hover:text-brand-600 transition-colors">EGOVİZE</span>
                        <span className="text-[10px] uppercase tracking-widest text-slate-500 font-semibold">Consultancy</span>
                    </div>
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a 
                            key={link.name}
                            href={link.href}
                            onClick={(e) => handleNavClick(e, link.href)}
                            className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors relative group"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-600 transition-all group-hover:w-full rounded-full" />
                        </a>
                    ))}
                </div>

                {/* CTA Button */}
                <div className="hidden md:flex items-center gap-4">
                     <a href="tel:+905536007468" className="w-10 h-10 rounded-full bg-brand-50 flex items-center justify-center text-brand-600 hover:bg-brand-100 transition-colors">
                        <Phone size={18} />
                    </a>
                    <a 
                        href="#contact" 
                        onClick={(e) => handleNavClick(e, '#contact')}
                        className="bg-slate-900 hover:bg-brand-600 text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all shadow-lg shadow-slate-900/10 hover:shadow-brand-600/20 transform hover:-translate-y-0.5"
                    >
                        Randevu Al
                    </a>
                </div>

                {/* Mobile Menu Toggle */}
                <button 
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="md:hidden text-slate-800 p-2"
                >
                    {mobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border-t border-slate-100 p-6 shadow-xl md:hidden flex flex-col gap-4 animate-in slide-in-from-top-5">
                    {navLinks.map((link) => (
                        <a 
                            key={link.name}
                            href={link.href}
                            onClick={(e) => handleNavClick(e, link.href)}
                            className="text-lg font-medium text-slate-700 py-2 border-b border-slate-50"
                        >
                            {link.name}
                        </a>
                    ))}
                    <a 
                        href="#contact" 
                        onClick={(e) => handleNavClick(e, '#contact')}
                        className="bg-brand-600 text-white py-3 rounded-xl text-center font-bold mt-2"
                    >
                        Hemen Başvur
                    </a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;