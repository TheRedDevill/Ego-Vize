import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, ArrowRight } from 'lucide-react';
import { ServiceConfig, ServiceContent } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface ServiceModalProps {
    isOpen: boolean;
    onClose: () => void;
    service: (ServiceConfig & ServiceContent) | null;
}

const ServiceModal: React.FC<ServiceModalProps> = ({ isOpen, onClose, service }) => {
    const { t } = useLanguage();

    // Modal açıkken scroll'u engelle
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!service) return null;

    const bgColors: Record<string, string> = {
        blue: "bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400",
        amber: "bg-amber-50 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400",
        pink: "bg-pink-50 text-pink-600 dark:bg-pink-900/30 dark:text-pink-400",
        purple: "bg-purple-50 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400",
        teal: "bg-teal-50 text-teal-600 dark:bg-teal-900/30 dark:text-teal-400",
        indigo: "bg-indigo-50 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400",
        orange: "bg-orange-50 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400"
    };

    const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        onClose();
        
        // Modal kapanma animasyonunun bitmesini ve DOM'un stabil hale gelmesini bekleyelim
        setTimeout(() => {
            const element = document.getElementById('contact');
            if (element) {
                const headerOffset = 140;
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        }, 100);
    };

    return createPortal(
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-40 flex items-center justify-center p-4 pt-24">
                    <motion.div 
                        initial={{ opacity: 0 }} 
                        animate={{ opacity: 1 }} 
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm cursor-pointer"
                    />
                    
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        className="relative w-full max-w-lg bg-white/95 dark:bg-slate-900/95 backdrop-blur-2xl border border-white/50 dark:border-white/10 rounded-[2rem] shadow-2xl overflow-hidden flex flex-col max-h-[85vh]"
                    >
                        <button onClick={onClose} className="absolute top-4 right-4 p-2 bg-slate-100/50 dark:bg-slate-800/50 hover:bg-slate-200/50 dark:hover:bg-slate-700/50 rounded-full transition-colors z-10 backdrop-blur-sm">
                            <X size={18} className="text-slate-500 dark:text-slate-300" />
                        </button>

                        <div className="p-6 md:p-8 overflow-y-auto custom-scrollbar">
                            <div className="flex items-center gap-4 mb-5">
                                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${bgColors[service.color]}`}>
                                    <service.icon size={28} />
                                </div>
                                <div>
                                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">{t.services.modal.tag}</span>
                                    <h3 className="text-xl font-bold font-display text-slate-900 dark:text-white">{service.title}</h3>
                                </div>
                            </div>

                            <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed mb-6">
                                {service.fullDesc}
                            </p>

                            <div className="bg-slate-50/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-xl p-5 border border-slate-100 dark:border-slate-700/50">
                                <h4 className="font-bold text-slate-800 dark:text-slate-200 mb-3 flex items-center gap-2 text-sm">
                                    <span className="w-1 h-5 bg-brand-500 rounded-full"/>
                                    {t.services.modal.processTitle}
                                </h4>
                                <ul className="space-y-2.5">
                                    {service.list.map((item, index) => (
                                        <li key={index} className="flex items-start gap-3 text-slate-600 dark:text-slate-400 text-sm">
                                            <CheckCircle2 size={16} className="text-green-500 dark:text-green-400 mt-0.5 flex-shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="p-5 bg-slate-50/80 dark:bg-slate-800/80 border-t border-slate-100 dark:border-slate-700/50 flex flex-col sm:flex-row justify-between items-center gap-3 backdrop-blur-md">
                             <p className="text-xs text-slate-500 dark:text-slate-400 font-medium hidden sm:block">
                                {t.services.modal.personal}
                            </p>
                            <a 
                                href="#contact" 
                                onClick={handleContactClick}
                                className="w-full sm:w-auto inline-flex justify-center items-center gap-2 rounded-xl bg-slate-900 dark:bg-white px-5 py-2.5 text-sm font-bold text-white dark:text-slate-900 shadow-lg shadow-slate-900/10 dark:shadow-white/5 hover:bg-brand-600 dark:hover:bg-brand-200 transition-all"
                            >
                                {t.services.modal.btn}
                                <ArrowRight size={16} />
                            </a>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>,
        document.body
    );
};

export default ServiceModal;