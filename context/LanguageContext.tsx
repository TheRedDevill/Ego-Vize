import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../translations';
import { Language } from '../types';

interface LanguageContextType {
    language: Language;
    toggleLanguage: () => void;
    t: typeof translations['tr']; // Type inference for translation object
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [language, setLanguage] = useState<Language>('tr');

    useEffect(() => {
        const savedLang = localStorage.getItem('language') as Language;
        if (savedLang && (savedLang === 'tr' || savedLang === 'de')) {
            setLanguage(savedLang);
        }
    }, []);

    const toggleLanguage = () => {
        const newLang = language === 'tr' ? 'de' : 'tr';
        setLanguage(newLang);
        localStorage.setItem('language', newLang);
    };

    const value = {
        language,
        toggleLanguage,
        t: translations[language]
    };

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};