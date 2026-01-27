import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, ArrowRight } from 'lucide-react';
import { ServiceData } from '../types';

interface ServiceModalProps {
    isOpen: boolean;
    onClose: () => void;
    service: ServiceData | null;
}

const ServiceModal: React.FC<ServiceModalProps> = ({ isOpen, onClose, service }) => {
    if (!service) return null;

    const bgColors: Record<string, string> = {
        blue: "bg-blue-50 text-blue-600",
        amber: "bg-amber-50 text-amber-600",
        pink: "bg-pink-50 text-pink-600",
        purple: "bg-purple-50 text-purple-600",
        teal: "bg-teal-50 text-teal-600",
        indigo: "bg-indigo-50 text-indigo-600",
        orange: "bg-orange-50 text-orange-600"
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

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    <motion.div 
                        initial={{ opacity: 0 }} 
                        animate={{ opacity: 1 }} 
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm cursor-pointer"
                    />
                    
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="relative w-full max-w-2xl bg-white rounded-[2rem] shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
                    >
                        <button onClick={onClose} className="absolute top-6 right-6 p-2 bg-slate-100 rounded-full hover:bg-slate-200 transition-colors z-10">
                            <X size={20} className="text-slate-500" />
                        </button>

                        <div className="p-8 md:p-10 overflow-y-auto custom-scrollbar">
                            <div className="flex items-center gap-4 mb-6">
                                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${bgColors[service.color]}`}>
                                    <service.icon size={32} />
                                </div>
                                <div>
                                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Hizmet Detayları</span>
                                    <h3 className="text-2xl font-bold font-display text-slate-900">{service.title}</h3>
                                </div>
                            </div>

                            <p className="text-slate-600 text-lg leading-relaxed mb-8">
                                {service.fullDesc}
                            </p>

                            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                                <h4 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                                    <span className="w-1.5 h-6 bg-brand-500 rounded-full"/>
                                    Süreç ve Gereksinimler
                                </h4>
                                <ul className="space-y-3">
                                    {service.list.map((item, index) => (
                                        <li key={index} className="flex items-start gap-3 text-slate-600">
                                            <CheckCircle2 size={18} className="text-green-500 mt-1 flex-shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="p-6 bg-slate-50 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-4">
                             <p className="text-sm text-slate-500 font-medium hidden sm:block">
                                Kişisel durumunuz için
                            </p>
                            <a 
                                href="#contact" 
                                onClick={handleContactClick}
                                className="w-full sm:w-auto inline-flex justify-center items-center gap-2 rounded-xl bg-slate-900 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-slate-900/10 hover:bg-brand-600 transition-all"
                            >
                                Ücretsiz Danışın
                                <ArrowRight size={16} />
                            </a>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default ServiceModal;