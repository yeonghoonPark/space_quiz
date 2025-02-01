import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from '../../locales/en.json';
import ko from '../../locales/ko.json';

const resources = {
  en: { translation: en },
  ko: { translation: ko },
};

const options = {
  resources,
  lng: "ko", // Default language
  fallbackLng: "en", // Default fallback language
  interpolation: { escapeValue: false },
};

i18n.use(initReactI18next).init(options);

export default i18n;
