'use client';

import { createContext, useState, useEffect } from 'react';

// Create Language Context
export const LanguageContext = createContext();

export const Providers = ({ children,lang }) => {
  // Initialize language state, default to 'pl'


  const [language, setLanguage] = useState(lang);

  // Function to set the language cookie
  const setLanguageCookie = (lang) => {
    const daysToExpire = 7;
    const date = new Date();
    date.setTime(date.getTime() + (daysToExpire * 24 * 60 * 60 * 1000)); // Set the expiration date (7 days in this example)
    document.cookie = `language=${lang};expires=${date.toUTCString()};path=/`;
  };

  // Function to get the language from the cookie
  const getLanguageCookie = () => {
    const name = "language=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookieArr = decodedCookie.split(';');
    
    for (let i = 0; i < cookieArr.length; i++) {
      let cookie = cookieArr[i].trim();
      if (cookie.indexOf(name) === 0) {
        return cookie.substring(name.length, cookie.length);
      }
    }
    return null;
  };

  // Function to toggle language and update the cookie
  const toggleLanguage = (lang) => {
    setLanguage(lang);
    setLanguageCookie(lang);
  };

  // Load language from cookie when component mounts
  useEffect(() => {
    const savedLanguage = getLanguageCookie();
    if (savedLanguage) {
      setLanguage(savedLanguage); // Set language from cookie if available
    }
  }, []);

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};