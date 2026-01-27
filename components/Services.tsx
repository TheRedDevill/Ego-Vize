import React, { useState } from 'react';
import { SERVICES } from '../constants';
import { ArrowRight } from 'lucide-react';
import GlassCard from './ui/GlassCard';
import ServiceModal from './ServiceModal';
import { ServiceData } from '../types';

const Services: React.FC = () => {
    const [selectedService, setSelectedService] = useState<ServiceData | null>(null);

    // Renk haritası (Tailwind sınıflarını güvenli bir şekilde oluşturmak için)
    const colorMap: Record<string, string> = {
        blue: "bg-blue-50 text-blue-600",
        amber: "bg-amber-50 text-amber-600",
        pink: "bg-pink-50 text-pink-600",
        purple: "bg-purple-50 text-purple-600",
        teal: "bg-teal-50 text-teal-600",
        indigo: "bg-indigo-50 text-indigo-600",
        orange: "bg-orange-50 text-orange-600"
    };

    return (
        <section id="services" className="py-24 relative z-10">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-brand-600 font-bold uppercase tracking-widest text-sm">Hizmetlerimiz</span>
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mt-3 mb-6">Profesyonel Vize Çözümleri</h2>
                    <p className="text-slate-500 text-lg">
                        Almanya ve Avrupa hedefleriniz için uçtan uca, şeffaf ve sonuç odaklı danışmanlık hizmetleri.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {SERVICES.map((service) => (
                        <GlassCard 
                            key={service.id} 
                            className="p-8 h-full flex flex-col items-start hover:border-brand-200 transition-colors group"
                            onClick={() => setSelectedService(service)}
                            hoverEffect={true}
                        >
                            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 duration-300 ${colorMap[service.color]}`}>
                                <service.icon size={28} />
                            </div>
                            
                            <h3 className="text-xl font-display font-bold text-slate-900 mb-3 group-hover:text-brand-600 transition-colors">
                                {service.title}
                            </h3>
                            
                            <p className="text-slate-500 mb-8 text-sm leading-relaxed flex-grow">
                                {service.shortDesc}
                            </p>
                            
                            <div className="flex items-center text-brand-600 font-bold text-sm mt-auto group-hover:translate-x-1 transition-transform cursor-pointer">
                                Detayları İncele <ArrowRight size={16} className="ml-2" />
                            </div>
                        </GlassCard>
                    ))}
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