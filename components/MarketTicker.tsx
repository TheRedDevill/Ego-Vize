import React from 'react';
import { JOBS } from '../constants';
import { JobData } from '../types';
import { TrendingUp, Flame } from 'lucide-react';

const JobCard: React.FC<{ job: JobData }> = ({ job }) => {
    const borderColor = {
        blue: 'hover:border-blue-200',
        amber: 'hover:border-amber-200',
        orange: 'hover:border-orange-200',
        pink: 'hover:border-pink-200',
        purple: 'hover:border-purple-200'
    }[job.categoryColor] || 'hover:border-brand-200';

    const bgPill = {
        blue: 'bg-blue-100 text-blue-700',
        amber: 'bg-amber-100 text-amber-800',
        orange: 'bg-orange-100 text-orange-700',
        pink: 'bg-pink-100 text-pink-700',
        purple: 'bg-purple-100 text-purple-700'
    }[job.categoryColor] || 'bg-slate-100 text-slate-700';

    return (
        <div className={`
            w-80 flex-shrink-0 bg-white p-6 rounded-[1.5rem] 
            shadow-sm border border-slate-100 
            transition-all duration-300 hover:-translate-y-2 hover:shadow-xl
            ${borderColor} group mx-4
        `}>
            <div className="flex justify-between items-start mb-3">
                <span className={`px-3 py-1 rounded-full text-xs font-bold ${bgPill}`}>
                    {job.category}
                </span>
                {job.trend === 'urgent' ? (
                    <span className="text-red-500 text-xs font-bold flex items-center gap-1">
                        <Flame size={12} /> Acil
                    </span>
                ) : (
                    <span className="text-green-600 text-xs font-bold flex items-center gap-1">
                        <TrendingUp size={12} /> Yüksek
                    </span>
                )}
            </div>
            <h4 className="text-lg font-bold text-slate-800 font-display">{job.title}</h4>
            <p className="text-slate-500 text-sm mb-4">{job.subtitle}</p>
            <div className="pt-3 border-t border-slate-50">
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Ort. Yıllık Brüt</p>
                <p className="text-xl font-bold text-brand-600">{job.salary}</p>
            </div>
        </div>
    );
};

const MarketTicker: React.FC = () => {
    return (
        <section id="market-data" className="py-20 relative overflow-hidden bg-[#F4F5F7]">
            {/* Background elements */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-multiply"></div>
            
            <div className="max-w-7xl mx-auto px-6 relative z-10 mb-12 flex flex-col md:flex-row justify-between items-end gap-6">
                 <div>
                    <span className="text-brand-600 font-bold uppercase tracking-wider text-xs">Almanya Piyasası 2026</span>
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mt-2">En Çok Aranan Meslekler</h2>
                    <p className="text-slate-500 mt-3 max-w-xl">Bundesagentur für Arbeit verilerine göre Almanya'da en yüksek açık bulunan sektörler ve ortalama yıllık brüt maaşlar.</p>
                </div>
            </div>

            {/* Ticker Container */}
            <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent_0,black_128px,black_calc(100%-128px),transparent_100%)]">
                <div className="flex w-max animate-scroll hover:[animation-play-state:paused]">
                    {[...JOBS, ...JOBS, ...JOBS].map((job, idx) => (
                        <JobCard key={`${job.id}-${idx}`} job={job} />
                    ))}
                </div>
            </div>

             <div className="text-center mt-10">
                <p className="text-xs text-slate-400 italic">
                    * Veriler "Make it in Germany" ve "Gehalt.de" 2025 projeksiyonlarına dayalıdır.
                </p>
            </div>
        </section>
    );
};

export default MarketTicker;