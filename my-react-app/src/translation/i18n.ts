import i18n, { ParseKeys } from 'i18next';
import {  initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './en_translation.json'; 
import de from './de_translation.json';
import ar from './ar_translation.json';

export const defaultNS = 'translations';

export const resources = {
    'en-US': { name: 'English (US)', translations: en },
    'en-GB': { name: 'English (UK)', translations: en },
    'de': { name: 'German', translations: de },
    'ar' : {name: 'Arabic', translations: ar}
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: ['en-US'],
        detection: {
            order: ['cookie', 'localStorage', 'navigator'],
            caches: ['cookie', 'localStorage']
        },
        defaultNS,
        resources,
        returnNull: false,
        interpolation: {
            escapeValue: false,
            format: (value, format, lng) => {
                if (format === 'uppercase') {
                    return value.toUpperCase();
                }
                if (format === 'lowercase') {
                    return value.toLowerCase();
                }
                // if (format === 'en-handle-an') {
                //     return !lng || lng === 'en' ? getVariationOfAOrAn(value, false) : '';
                // }
                // if (format === 'en-handle-an-capitalized') {
                //     return !lng || lng === 'en' ? getVariationOfAOrAn(value, true) : '';
                // }
                if (format === 'en-handle-lowercase') {
                    return !lng || lng === 'en' ? value.toLowerCase() : value;
                }
                return value;
            }
        }
    });

    declare module 'i18next' {
        interface CustomTypeOptions {
            defaultNS: typeof defaultNS;
            resources: (typeof resources)['en-US'];
            returnNull: false;
        }
    }

export type TranslationKeys = ParseKeys<'translations'>;

export default i18n;
