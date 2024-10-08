// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './locales/en.json';
import fr from './locales/fr.json';
import es from './locales/es.json';
import pt from './locales/pt.json';
import it from './locales/it.json';
import de from './locales/de.json';
import ru from './locales/ru.json';
import zh from './locales/zh.json';

i18n
  .use(LanguageDetector) // Detects user language automatically
  .use(initReactI18next) // Connects i18next to React
  .init({
    resources: {
      en: {
        translation: en,
      },
      fr: {
        translation: fr,
      },
      es: {
        translation: es,
      },
      pt: {
        translation: pt,
      },
      it: {
        translation: it,
      },
      de: {
        translation: de,
      },
      ru: {
        translation: ru,
      },
      zh: {
        translation: zh,
      },
    },
    fallbackLng: 'en', // Default language
    detection: {
      order: ['localStorage', 'navigator'], // Detect via localStorage first, then browser settings
      caches: ['localStorage'], // Cache the detected language in localStorage
    },
    interpolation: {
      escapeValue: false, // React already escapes values
    },
  });

export default i18n;
