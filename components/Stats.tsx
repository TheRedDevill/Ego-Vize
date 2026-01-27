import React from 'react';
import { STATS } from '../constants';

const Stats: React.FC = () => {
    return (
        <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
            {/* Abstract Background */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-brand-500 rounded-full blur-[128px] opacity-20"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-purple-500 rounded-full blur-[100px] opacity-20"></div>
            
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center divide-x divide-white/10">
                    {STATS.map((stat, idx) => (
                        <div key={idx} className="px-4 group">
                            <div className="text-4xl lg:text-5xl font-bold font-display text-transparent bg-clip-text bg-gradient-to-br from-white to-brand-200 mb-2 group-hover:scale-110 transition-transform duration-300">
                                {stat.value}
                            </div>
                            <p className="text-brand-100/60 font-medium text-sm tracking-wide uppercase">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;