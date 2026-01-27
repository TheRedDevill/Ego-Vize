import React from 'react';
import { JOBS_CONFIG } from '../constants';
import { JobConfig, JobContent } from '../types';
import { TrendingUp, Flame } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

type FullJobData = JobConfig & JobContent;

const JobCard: React.FC<{ job: FullJobData }> = ({ job }) => {
    const borderColor = {
        blue: 'hover:border-blue-200 dark:hover:border-blue-700',
        amber: 'hover:border-amber-200 dark:hover:border-amber-700',
        orange: 'hover:border-orange-200 dark:hover:border-orange-700',
        pink: 'hover:border-pink-200 dark:hover:border-pink-700',
        purple: 'hover:border-purple-200 dark:hover:border-purple-700'
    }[job.categoryColor] || 'hover:border-brand-200 dark:hover:border-brand-700';

    const bgPill = {
        blue: 'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300',
        amber: 'bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300',
        orange: 'bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300',
        pink: 'bg-pink-100 text-pink-700 dark:bg-pink-900/40 dark:text-pink-300',
        purple: 'bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300'
    }[job.categoryColor] || 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300';

    return (
        <div className={`
            w-80 flex-shrink-0 bg-white dark:bg-slate-800 p-6 rounded-[1.5rem] 
            shadow-sm dark:shadow-none border border-slate-100 dark:border-slate-700
            transition-all duration-300 hover:-translate-y-2 
            hover:shadow-2xl hover:shadow-slate-200/60 dark:hover:shadow-black/40
            ${borderColor} group mx-4 relative
        `}>
            <div className="flex justify-between items-start mb-3">
                <span className={`px-3 py-1 rounded-full text-xs font-bold ${bgPill}`}>
                    {job.category}
                </span>
                {job.trend === 'urgent' ? (
                    <span className="text-red-500 dark:text-red-400 text-xs font-bold flex items-center gap-1">
                        <Flame size={12} /> {job.trendLabel}
                    </span>
                ) : (
                    <span className="text-green-600 dark:text-green-400 text-xs font-bold flex items-center gap-1">
                        <TrendingUp size={12} /> {job.trendLabel}
                    </span>
                )}
            </div>
            <h4 className="text-lg font-bold text-slate-800 dark:text-slate-100 font-display">{job.title}</h4>
            <p className="text-slate-500 dark:text-slate-400 text-sm mb-4">{job.subtitle}</p>
            <div className="pt-3 border-t border-slate-50 dark:border-slate-700">
                <p className="text-[10px] text-slate-400 dark:text-slate-500 font-bold uppercase tracking-wider">{job.salaryLabel}</p>
                <p className="text-xl font-bold text-brand-600 dark:text-brand-400">{job.salary}</p>
            </div>
        </div>
    );
};

const MarketTicker: React.FC = () => {
    const { t } = useLanguage();

    // Prepare job data
    const jobs: FullJobData[] = JOBS_CONFIG.map(config => {
        const content = t.market.items[config.id as keyof typeof t.market.items];
        return { ...config, ...content };
    });

    // Create a longer list for scrolling effect
    const displayJobs = [...jobs, ...jobs, ...jobs];

    return (
        <section id="market-data" className="py-20 relative overflow-hidden bg-[#F4F5F7] dark:bg-slate-950">
            {/* Background elements */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-multiply dark:mix-blend-overlay"></div>
            
            <div className="max-w-7xl mx-auto px-6 relative z-10 mb-12 flex flex-col md:flex-row justify-between items-end gap-6">
                 <div>
                    <span className="text-brand-600 dark:text-brand-400 font-bold uppercase tracking-wider text-xs">{t.market.tag}</span>
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 dark:text-white mt-2">{t.market.title}</h2>
                    <p className="text-slate-500 dark:text-slate-400 mt-3 max-w-xl">{t.market.desc}</p>
                </div>
            </div>

            {/* Ticker Container */}
            <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent_0,black_128px,black_calc(100%-128px),transparent_100%)]">
                <div className="flex w-max animate-scroll hover:[animation-play-state:paused]">
                    {displayJobs.map((job, idx) => (
                        <JobCard key={`${job.id}-${idx}`} job={job} />
                    ))}
                </div>
            </div>

             <div className="text-center mt-10">
                <p className="text-xs text-slate-400 dark:text-slate-500 italic">
                    {t.market.disclaimer}
                </p>
            </div>
        </section>
    );
};

export default MarketTicker;