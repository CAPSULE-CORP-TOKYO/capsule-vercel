'use client';

import { createContext, useContext, useState, useEffect, useCallback } from 'react';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('ja');

  useEffect(() => {
    const saved = localStorage.getItem('capsule-lang');
    if (saved && saved !== 'ja') {
      setLang(saved);
      document.documentElement.lang = saved;
    }
  }, []);

  const toggleLang = useCallback(() => {
    setLang(prev => {
      const next = prev === 'ja' ? 'en' : 'ja';
      localStorage.setItem('capsule-lang', next);
      document.documentElement.lang = next;
      return next;
    });
  }, []);

  const t = useCallback((ja, en) => lang === 'ja' ? ja : en, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
