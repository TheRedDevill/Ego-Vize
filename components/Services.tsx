import React, { useState } from 'react';
import { SERVICES_CONFIG } from '../constants';
import { ArrowRight } from 'lucide-react';
import GlassCard from './ui/GlassCard';
import ServiceModal from './ServiceModal';
import { ServiceContent, ServiceConfig } from '../types';
import { useLanguage } from '../context/LanguageContext';

// Combine config and content types for internal use
type FullServiceData = ServiceConfig & ServiceContent;

const Services: React.FC = () => {
    const [selectedService, setSelectedService] = useState<FullServiceData | null>(null);
    const { t } = useLanguage();

    // Renk haritası (Tailwind sınıflarını güvenli bir şekilde oluşturmak için)
    const colorMap: Record<string, string> = {
        blue: "bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400",
        amber: "bg-amber-50 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400",
        pink: "bg-pink-50 text-pink-600 dark:bg-pink-900/30 dark:text-pink-400",
        purple: "bg-purple-50 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400",
        teal: "bg-teal-50 text-teal-600 dark:bg-teal-900/30 dark:text-teal-400",
        indigo: "bg-indigo-50 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400",
        orange: "bg-orange-50 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400"
    };

    return (
        <section id="services" className="py-24 relative z-10">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-brand-600 dark:text-brand-400 font-bold uppercase tracking-widest text-sm">{t.services.tag}</span>
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 dark:text-white mt-3 mb-6">{t.services.title}</h2>
                    <p className="text-slate-500 dark:text-slate-400 text-lg">
                        {t.services.desc}
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {SERVICES_CONFIG.map((config) => {
                        const content = t.services.items[config.id as keyof typeof t.services.items];
                        const service: FullServiceData = { ...config, ...content };

                        return (
                            <GlassCard 
                                key={service.id} 
                                className="p-8 h-full flex flex-col items-start hover:border-brand-200 dark:hover:border-brand-500/30 transition-colors group"
                                onClick={() => setSelectedService(service)}
                                hoverEffect={true}
                            >
                                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 duration-300 ${colorMap[service.color]}`}>
                                    <service.icon size={28} />
                                </div>
                                
                                <h3 className="text-xl font-display font-bold text-slate-900 dark:text-white mb-3 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                                    {service.title}
                                </h3>
                                
                                <p className="text-slate-500 dark:text-slate-400 mb-8 text-sm leading-relaxed flex-grow">
                                    {service.shortDesc}
                                </p>
                                
                                <div className="flex items-center text-brand-600 dark:text-brand-400 font-bold text-sm mt-auto group-hover:translate-x-1 transition-transform cursor-pointer">
                                    {t.services.cta} <ArrowRight size={16} className="ml-2" />
                                </div>
                            </GlassCard>
                        );
                    })}
                </div>
            </div>

            <ServiceModal 
                isOpen={!!selectedService} 
                onClose={() => setSelectedService(null)} 
                service={selectedService} 
            />
        </section>
    );
};

export default Services;