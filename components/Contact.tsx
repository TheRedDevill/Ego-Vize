import React, { useState } from 'react';
import { Phone, Mail, ArrowRight, MapPin, AlertCircle, CheckCircle2 } from 'lucide-react';
import GlassCard from './ui/GlassCard';
import { useLanguage } from '../context/LanguageContext';

interface FormData {
    name: string;
    phone: string;
    visaType: string;
    message: string;
}

interface FormErrors {
    name?: string;
    phone?: string;
    visaType?: string;
    message?: string;
}

const Contact: React.FC = () => {
    const { t } = useLanguage();
    const [formData, setFormData] = useState<FormData>({
        name: '',
        phone: '',
        visaType: '',
        message: ''
    });

    const [errors, setErrors] = useState<FormErrors>({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const validateForm = (): boolean => {
        const newErrors: FormErrors = {};
        let isValid = true;

        // Ad Soyad Kontrolü
        if (!formData.name.trim()) {
            newErrors.name = t.contact.form.errors.required;
            isValid = false;
        } else if (formData.name.trim().split(' ').length < 2) {
            newErrors.name = t.contact.form.errors.nameLength;
            isValid = false;
        }

        // Telefon Kontrolü (0 ile başlayan 11 hane)
        // Basit regex kontrolü, ülke kodlarına göre değişebilir ama şimdilik basic tutuyoruz
        const cleanPhone = formData.phone.replace(/[^0-9]/g, '');
        if (!formData.phone.trim()) {
            newErrors.phone = t.contact.form.errors.required;
            isValid = false;
        } else if (cleanPhone.length < 10) {
            newErrors.phone = t.contact.form.errors.phoneInvalid;
            isValid = false;
        }

        // Vize Türü Kontrolü
        if (!formData.visaType || formData.visaType === '') {
            newErrors.visaType = t.contact.form.errors.required;
            isValid = false;
        }

        // Mesaj Kontrolü
        if (!formData.message.trim()) {
            newErrors.message = t.contact.form.errors.required;
            isValid = false;
        } else if (formData.message.trim().length < 10) {
            newErrors.message = t.contact.form.errors.messageLength;
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validateForm()) {
            // API call would go here
            console.log('Form Submitted:', formData);
            setIsSubmitted(true);
            // Reset form after 5 seconds
            setTimeout(() => {
                setIsSubmitted(false);
                setFormData({ name: '', phone: '', visaType: '', message: '' });
                setErrors({});
            }, 5000);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        // Kullanıcı yazarken hatayı temizle
        if (errors[name as keyof FormErrors]) {
            setErrors(prev => ({ ...prev, [name]: undefined }));
        }
    };

    return (
        <section id="contact" className="py-24 px-6 relative overflow-hidden">
            <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-slate-50 to-brand-50/50 dark:from-slate-900 dark:to-slate-950 -skew-y-3 transform origin-top-left scale-110 z-0"></div>

            <div className="max-w-5xl mx-auto relative z-10">
                <GlassCard className="p-8 md:p-16 !bg-white/80 dark:!bg-slate-800/80 !backdrop-blur-2xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 dark:text-white mb-4">{t.contact.title}</h2>
                        <p className="text-slate-500 dark:text-slate-400 text-lg">{t.contact.desc}</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
                        <div className="space-y-10">
                            <div>
                                <h3 className="font-bold text-slate-900 dark:text-white text-xl mb-6">{t.contact.infoTitle}</h3>
                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-brand-50 dark:bg-brand-900/30 rounded-xl flex items-center justify-center text-brand-600 dark:text-brand-400 flex-shrink-0">
                                            <Phone size={24} />
                                        </div>
                                        <div>
                                            <h5 className="font-bold text-slate-900 dark:text-white">Telefon / WhatsApp</h5>
                                            <a href="tel:+905536007468" className="text-lg text-slate-600 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-400 transition-colors">0 553 600 74 68</a>
                                            <p className="text-sm text-slate-400 dark:text-slate-500 mt-1">Hafta içi 09:00 - 18:00</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-brand-50 dark:bg-brand-900/30 rounded-xl flex items-center justify-center text-brand-600 dark:text-brand-400 flex-shrink-0">
                                            <Mail size={24} />
                                        </div>
                                        <div>
                                            <h5 className="font-bold text-slate-900 dark:text-white">E-Posta</h5>
                                            <a href="mailto:egoiletisim@egovizedanismanlik.com" className="text-lg text-slate-600 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-400 transition-colors break-all">egoiletisim@egovizedanismanlik.com</a>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-brand-50 dark:bg-brand-900/30 rounded-xl flex items-center justify-center text-brand-600 dark:text-brand-400 flex-shrink-0">
                                            <MapPin size={24} />
                                        </div>
                                        <div>
                                            <h5 className="font-bold text-slate-900 dark:text-white">Adres</h5>
                                            <p className="text-lg text-slate-600 dark:text-slate-300">Akarca, Yerguzlar Cad. No:16/2 Fethiye/Muğla</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="rounded-3xl overflow-hidden h-64 w-full shadow-lg border border-slate-200 dark:border-slate-700 relative bg-slate-100 dark:bg-slate-800">
                                <iframe 
                                    width="100%" 
                                    height="100%" 
                                    title="Ego Vize Ofis Konumu"
                                    src="https://maps.google.com/maps?q=Akarca,+Yerguzlar+Cad.+No:16/2,+Fethiye,+Mugla&t=&z=15&ie=UTF8&iwloc=&output=embed"
                                    style={{ border: 0 }}
                                    allowFullScreen={false}
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className="filter grayscale-[20%] dark:grayscale-[50%] dark:invert-[90%] hover:grayscale-0 dark:hover:grayscale-0 dark:hover:invert-0 transition-all duration-500"
                                ></iframe>
                            </div>
                        </div>

                        {isSubmitted ? (
                            <div className="flex flex-col items-center justify-center text-center h-full space-y-4 p-8 bg-green-50 dark:bg-green-900/20 rounded-2xl border border-green-100 dark:border-green-800 animate-in fade-in zoom-in duration-500">
                                <div className="w-20 h-20 bg-green-100 dark:bg-green-900/40 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center mb-4">
                                    <CheckCircle2 size={40} />
                                </div>
                                <h3 className="text-2xl font-bold text-green-800 dark:text-green-300">{t.contact.form.successTitle}</h3>
                                <p className="text-green-700 dark:text-green-400">{t.contact.form.successDesc}</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">{t.contact.form.name} <span className="text-red-500">*</span></label>
                                    <input 
                                        type="text" 
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className={`w-full bg-slate-50 dark:bg-slate-900/50 border rounded-xl px-4 py-3.5 text-slate-900 dark:text-white focus:outline-none focus:ring-2 transition-all ${errors.name ? 'border-red-400 focus:ring-red-200' : 'border-slate-200 dark:border-slate-700 focus:ring-brand-500/20 focus:border-brand-500'}`}
                                        placeholder={t.contact.form.name}
                                    />
                                    {errors.name && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><AlertCircle size={12}/> {errors.name}</p>}
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">{t.contact.form.phone} <span className="text-red-500">*</span></label>
                                    <input 
                                        type="tel" 
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className={`w-full bg-slate-50 dark:bg-slate-900/50 border rounded-xl px-4 py-3.5 text-slate-900 dark:text-white focus:outline-none focus:ring-2 transition-all ${errors.phone ? 'border-red-400 focus:ring-red-200' : 'border-slate-200 dark:border-slate-700 focus:ring-brand-500/20 focus:border-brand-500'}`}
                                        placeholder="+90 ..." 
                                    />
                                    {errors.phone && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><AlertCircle size={12}/> {errors.phone}</p>}
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">{t.contact.form.visaType} <span className="text-red-500">*</span></label>
                                    <div className="relative">
                                        <select 
                                            name="visaType"
                                            value={formData.visaType}
                                            onChange={handleChange}
                                            className={`w-full bg-slate-50 dark:bg-slate-900/50 border rounded-xl px-4 py-3.5 text-slate-900 dark:text-white focus:outline-none focus:ring-2 transition-all appearance-none ${errors.visaType ? 'border-red-400 focus:ring-red-200' : 'border-slate-200 dark:border-slate-700 focus:ring-brand-500/20 focus:border-brand-500'}`}
                                        >
                                            <option value="">{t.contact.form.select}</option>
                                            <option value="81a">{t.contact.form.options['81a']}</option>
                                            <option value="JobSeeker">{t.contact.form.options['JobSeeker']}</option>
                                            <option value="Student">{t.contact.form.options['Student']}</option>
                                            <option value="Tourist">{t.contact.form.options['Tourist']}</option>
                                            <option value="Family">{t.contact.form.options['Family']}</option>
                                            <option value="Other">{t.contact.form.options['Other']}</option>
                                        </select>
                                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                                        </div>
                                    </div>
                                    {errors.visaType && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><AlertCircle size={12}/> {errors.visaType}</p>}
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">{t.contact.form.message} <span className="text-red-500">*</span></label>
                                    <textarea 
                                        rows={4} 
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        className={`w-full bg-slate-50 dark:bg-slate-900/50 border rounded-xl px-4 py-3.5 text-slate-900 dark:text-white focus:outline-none focus:ring-2 transition-all ${errors.message ? 'border-red-400 focus:ring-red-200' : 'border-slate-200 dark:border-slate-700 focus:ring-brand-500/20 focus:border-brand-500'}`}
                                        placeholder="..."
                                    ></textarea>
                                    {errors.message && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><AlertCircle size={12}/> {errors.message}</p>}
                                </div>
                                <button type="submit" className="w-full bg-brand-600 dark:bg-brand-500 hover:bg-brand-700 dark:hover:bg-brand-600 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-brand-500/25 flex items-center justify-center gap-2 group">
                                    {t.contact.form.btn}
                                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                </button>
                            </form>
                        )}
                    </div>
                </GlassCard>
            </div>
        </section>
    );
};

export default Contact;