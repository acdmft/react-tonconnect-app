import React, { createContext, useState } from 'react';
import i18n from '../i18n';

export const LanguageContext = createContext();
const availableLanguages = [
    { code: 'en', label: 'English'},
    { code: 'ru', label: 'Русский'}
]

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(i18n.language || 'en');

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang); // Changes the language in i18next
    setLanguage(lang); // Updates state
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, availableLanguages }}>
      {children}
    </LanguageContext.Provider>
  );
};
