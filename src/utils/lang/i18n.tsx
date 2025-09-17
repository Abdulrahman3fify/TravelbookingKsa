import AsyncStorage from '@react-native-async-storage/async-storage';
import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import arabic from './ar';
import english from './en';

// Import your translations
const resources = {
  en: {
    translation: english,
  },
  ar: {
    translation: arabic,
  },
};

// Detect language

const languageDetector = {
  type: 'languageDetector',
  async: true,
  detect: async cb => {
    try {
      const savedLang = await AsyncStorage.getItem('appLanguage');
      cb(savedLang || 'ar'); // Default = Arabic
    } catch (e) {
      cb('ar');
    }
  },
  init: () => {},
  cacheUserLanguage: async lng => {
    await AsyncStorage.setItem('appLanguage', lng);
  },
};

i18n
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    compatibilityJSON: 'v3',
    resources,
    fallbackLng: 'ar', // default fallback
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
