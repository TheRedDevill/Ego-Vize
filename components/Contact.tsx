import React, { useState } from 'react';
import { Phone, Mail, ArrowRight, MapPin, AlertCircle, CheckCircle2 } from 'lucide-react';
import GlassCard from './ui/GlassCard';

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
            newErrors.name = 'Ad Soyad alanı zorunludur.';
            isValid = false;
        } else if (formData.name.trim().split(' ').length < 2) {
            newErrors.name = 'Lütfen adınızı ve soyadınızı tam giriniz.';
            isValid = false;
        }

        // Telefon Kontrolü (0 ile başlayan 11 hane)
        const cleanPhone = formData.phone.replace(/[^0-9]/g, '');
        if (!formData.phone.trim()) {
            newErrors.phone = 'Telefon numarası zorunludur.';
            isValid = false;
        } else if (cleanPhone.length !== 11 || !cleanPhone.startsWith('0')) {
            newErrors.phone = 'Telefon numarası 0 ile başlamalı ve toplam 11 rakamdan oluşmalıdır (Örn: 0532 123 45 67).';
            isValid = false;
        }

        // Vize Türü Kontrolü
        if (!formData.visaType || formData.visaType === 'Seçiniz' || formData.visaType === '') {
            newErrors.visaType = 'Lütfen bir vize türü seçiniz.';
            isValid = false;
        }

        // Mesaj Kontrolü
        if (!formData.message.trim()) {
            newErrors.message = 'Mesaj alanı zorunludur.';
            isValid = false;
        } else if (formData.message.trim().length < 10) {
            newErrors.message = 'Mesajınız en az 10 karakter olmalıdır.';
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
        <section id="contact" className="py-24 px-6 relative">
            <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-slate-50 to-brand-50/50 -skew-y-3 transform origin-top-left scale-110 z-0"></div>

            <div className="max-w-5xl mx-auto relative z-10">
                <GlassCard className="p-8 md:p-16 !bg-white/80 !backdrop-blur-2xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">Bizimle İletişime Geçin</h2>
                        <p className="text-slate-500 text-lg">Hayallerinizi ertelemeyin. Profesyonel destek almak için formu doldurun.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
                        <div className="space-y-10">
                            <div>
                                <h3 className="font-bold text-slate-900 text-xl mb-6">İletişim Bilgileri</h3>
                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center text-brand-600 flex-shrink-0">
                                            <Phone size={24} />
                                        </div>
                                        <div>
                                            <h5 className="font-bold text-slate-900">Telefon / WhatsApp</h5>
                                            <a href="tel:+905536007468" className="text-lg text-slate-600 hover:text-brand-600 transition-colors">0 553 600 74 68</a>
                                            <p className="text-sm text-slate-400 mt-1">Hafta içi 09:00 - 18:00</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center text-brand-600 flex-shrink-0">
                                            <Mail size={24} />
                                        </div>
                                        <div>
                                            <h5 className="font-bold text-slate-900">E-Posta</h5>
                                            <a href="mailto:egoiletisim@egovizedanismanlik.com" className="text-lg text-slate-600 hover:text-brand-600 transition-colors break-all">egoiletisim@egovizedanismanlik.com</a>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center text-brand-600 flex-shrink-0">
                                            <MapPin size={24} />
                                        </div>
                                        <div>
                                            <h5 className="font-bold text-slate-900">Adres</h5>
                                            <p className="text-lg text-slate-600">Akarca, Yerguzlar Cad. No:16/2 Fethiye/Muğla</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="rounded-3xl overflow-hidden h-64 w-full shadow-lg border border-slate-200 relative bg-slate-100">
                                <iframe 
                                    width="100%" 
                                    height="100%" 
                                    title="Ego Vize Ofis Konumu"
                                    src="https://maps.google.com/maps?q=Akarca,+Yerguzlar+Cad.+No:16/2,+Fethiye,+Mugla&t=&z=15&ie=UTF8&iwloc=&output=embed"
                                    style={{ border: 0 }}
                                    allowFullScreen={false}
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className="filter grayscale-[20%] hover:grayscale-0 transition-all duration-500"
                                ></iframe>
                            </div>
                        </div>

                        {isSubmitted ? (
                            <div className="flex flex-col items-center justify-center text-center h-full space-y-4 p-8 bg-green-50 rounded-2xl border border-green-100 animate-in fade-in zoom-in duration-500">
                                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                                    <CheckCircle2 size={40} />
                                </div>
                                <h3 className="text-2xl font-bold text-green-800">Başvurunuz Alındı!</h3>
                                <p className="text-green-700">Talebiniz bize ulaştı. Uzman danışmanlarımız en kısa sürede sizinle iletişime geçecektir.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">Adınız Soyadınız <span className="text-red-500">*</span></label>
                                    <input 
                                        type="text" 
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className={`w-full bg-slate-50 border rounded-xl px-4 py-3.5 text-slate-900 focus:outline-none focus:ring-2 transition-all ${errors.name ? 'border-red-400 focus:ring-red-200' : 'border-slate-200 focus:ring-brand-500/20 focus:border-brand-500'}`}
                                        placeholder="Adınız Soyadınız" 
                                    />
                                    {errors.name && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><AlertCircle size={12}/> {errors.name}</p>}
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">Telefon Numaranız <span className="text-red-500">*</span></label>
                                    <input 
                                        type="tel" 
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        maxLength={15}
                                        className={`w-full bg-slate-50 border rounded-xl px-4 py-3.5 text-slate-900 focus:outline-none focus:ring-2 transition-all ${errors.phone ? 'border-red-400 focus:ring-red-200' : 'border-slate-200 focus:ring-brand-500/20 focus:border-brand-500'}`}
                                        placeholder="05XX XXX XX XX" 
                                    />
                                    {errors.phone && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><AlertCircle size={12}/> {errors.phone}</p>}
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">Vize Türü <span className="text-red-500">*</span></label>
                                    <div className="relative">
                                        <select 
                                            name="visaType"
                                            value={formData.visaType}
                                            onChange={handleChange}
                                            className={`w-full bg-slate-50 border rounded-xl px-4 py-3.5 text-slate-900 focus:outline-none focus:ring-2 transition-all appearance-none ${errors.visaType ? 'border-red-400 focus:ring-red-200' : 'border-slate-200 focus:ring-brand-500/20 focus:border-brand-500'}`}
                                        >
                                            <option value="">Seçiniz</option>
                                            <option value="81a">81a Ön Onaylı Başvurular</option>
                                            <option value="JobSeeker">İş Arama Vizesi</option>
                                            <option value="Student">Öğrenci Vizesi</option>
                                            <option value="Tourist">Turistik Vize</option>
                                            <option value="Family">Aile Birleşimi</option>
                                            <option value="Other">Diğer</option>
                                        </select>
                                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                                        </div>
                                    </div>
                                    {errors.visaType && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><AlertCircle size={12}/> {errors.visaType}</p>}
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">Mesajınız <span className="text-red-500">*</span></label>
                                    <textarea 
                                        rows={4} 
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        className={`w-full bg-slate-50 border rounded-xl px-4 py-3.5 text-slate-900 focus:outline-none focus:ring-2 transition-all ${errors.message ? 'border-red-400 focus:ring-red-200' : 'border-slate-200 focus:ring-brand-500/20 focus:border-brand-500'}`}
                                        placeholder="Sorunuzu kısaca açıklayınız..."
                                    ></textarea>
                                    {errors.message && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><AlertCircle size={12}/> {errors.message}</p>}
                                </div>
                                <button type="submit" className="w-full bg-brand-600 hover:bg-brand-700 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-brand-500/25 flex items-center justify-center gap-2 group">
                                    Gönder
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