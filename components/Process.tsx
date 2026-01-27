import React from 'react';
import GlassCard from './ui/GlassCard';

const Process: React.FC = () => {
    const steps = [
        { id: '01', title: 'Ücretsiz Ön Görüşme', desc: 'Durumunuzu analiz ediyor ve size en uygun vize türünü belirliyoruz.', color: 'from-blue-600 to-cyan-500' },
        { id: '02', title: 'Evrak Hazırlığı', desc: 'Kişiye özel evrak listesi oluşturuyor ve dosyalarınızı eksiksiz hazırlıyoruz.', color: 'from-blue-600 to-cyan-500' },
        { id: '03', title: 'Randevu ve Başvuru', desc: 'Konsolosluk veya aracı kurum randevunuzu alıyor, süreci yönetiyoruz.', color: 'from-blue-600 to-cyan-500' },
        { id: '04', title: 'Sonuç Takibi', desc: 'Pasaportunuz size ulaşana kadar süreci takip ediyoruz.', color: 'from-green-500 to-emerald-400' }
    ];

    return (
        <section className="py-24 px-6 relative overflow-hidden">
             {/* Background elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
                <div className="absolute top-40 left-20 w-72 h-72 bg-brand-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
                <div className="absolute top-40 right-20 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-brand-600 font-bold uppercase tracking-wider text-xs bg-brand-50 px-3 py-1 rounded-full border border-brand-100">Nasıl Çalışıyoruz?</span>
                    <h2 className="text-4xl font-display font-bold text-slate-900 mt-4 mb-4">4 Adımda Vizeniz Cebinizde</h2>
                    <p className="text-slate-500 text-lg">Profesyonel sürecimizle karmaşık vize işlemlerini basitleştiriyoruz.</p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {steps.map((step) => (
                        <div key={step.id} className="group relative">
                            <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-white/0 rounded-[2rem] transform scale-95 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500 -z-10" />
                            
                            <GlassCard className="h-full p-8 flex flex-col items-start text-left border border-white/60 shadow-sm hover:shadow-2xl hover:shadow-brand-900/5 transition-all duration-500 relative overflow-hidden">
                                {/* Decorative Gradient Blur on Hover */}
                                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-brand-400/20 rounded-full blur-3xl group-hover:opacity-100 opacity-0 transition-opacity duration-500 pointer-events-none" />

                                <div className="mb-6 relative">
                                    <div className="w-16 h-16 rounded-2xl bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                        <span className={`text-2xl font-bold font-display bg-clip-text text-transparent bg-gradient-to-br ${step.color}`}>
                                            {step.id}
                                        </span>
                                    </div>
                                    <div className={`absolute -inset-2 bg-gradient-to-br ${step.color} rounded-3xl opacity-0 group-hover:opacity-10 blur-lg transition-opacity duration-300`} />
                                </div>

                                <h4 className="text-xl font-bold font-display text-slate-800 mb-3 group-hover:text-brand-700 transition-colors">
                                    {step.title}
                                </h4>
                                
                                <p className="text-slate-500 leading-relaxed text-sm relative z-10">
                                    {step.desc}
                                </p>
                            </GlassCard>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Process;