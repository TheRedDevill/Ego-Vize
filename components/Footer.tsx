import React from 'react';
import { Instagram, Facebook, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-white pt-16 pb-8 border-t border-slate-100">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col items-center text-center mb-12">
                     <a href="#" className="flex items-center gap-2 group mb-6">
                        <div className="relative w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center text-white font-bold shadow-md">
                            E
                        </div>
                        <span className="text-xl font-display font-bold text-slate-900">EGOVİZE</span>
                    </a>
                    <p className="text-slate-500 max-w-sm leading-relaxed">
                        Almanya ve Avrupa vize başvurularınızda güvenilir çözüm ortağınız. Profesyonel danışmanlık hizmetlerimizle sürecinizi kolaylaştırın.
                    </p>
                </div>
                <div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400 font-medium">
                    <p>&copy; 2026 Ego Vize Danışmanlık. Tüm hakları saklıdır.</p>
                    <div className="flex gap-4">
                        <a href="#" className="hover:text-brand-600 transition-colors"><Instagram size={20} /></a>
                        <a href="#" className="hover:text-brand-600 transition-colors"><Facebook size={20} /></a>
                        <a href="#" className="hover:text-brand-600 transition-colors"><Youtube size={20} /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;