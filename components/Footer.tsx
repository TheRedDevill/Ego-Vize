import React from 'react';
import { Instagram, Facebook, Youtube } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const TiktokIcon = ({ size = 20 }: { size?: number }) => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width={size} 
        height={size} 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
    >
        <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
    </svg>
);

const Footer: React.FC = () => {
    const { t } = useLanguage();
    return (
        <footer className="bg-white dark:bg-slate-900 pt-16 pb-8 border-t border-slate-100 dark:border-slate-800">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col items-center text-center mb-12">
                     <a href="#" className="flex items-center gap-2 group mb-6">
                        <div className="relative w-8 h-8 bg-slate-900 dark:bg-white rounded-lg flex items-center justify-center text-white dark:text-slate-900 font-bold shadow-md">
                            E
                        </div>
                        <span className="text-xl font-display font-bold text-slate-900 dark:text-white">EGOVİZE</span>
                    </a>
                    <p className="text-slate-500 dark:text-slate-400 max-w-sm leading-relaxed">
                        {t.footer.desc}
                    </p>
                </div>
                <div className="border-t border-slate-100 dark:border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400 dark:text-slate-500 font-medium">
                    <p>{t.footer.copyright}</p>
                    <div className="flex gap-4">
                        <a 
                            href="https://www.instagram.com/egovize/" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
                        >
                            <Instagram size={20} />
                        </a>
                        <a 
                            href="https://www.facebook.com/people/EgoVize/61574641852026/" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
                        >
                            <Facebook size={20} />
                        </a>
                        <a 
                            href="https://www.youtube.com/channel/UC7esrUcxUvo4fxzwQS170QA" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
                        >
                            <Youtube size={20} />
                        </a>
                        <a 
                            href="https://www.tiktok.com/@egovize" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
                        >
                            <TiktokIcon size={20} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;