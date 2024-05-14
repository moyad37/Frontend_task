import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationDE from './translation/de_translation.json'
import translationAR from './translation/ar_translation.json'
import { useState } from 'react';

const resources = {
  ar: {
    translation: translationAR,
  },
  de: {
    translation: translationDE,
  },
};
/* const LanguageSwith = () => {
  const [language, setLanguage ] = useState("en");

  return(
    <div>
      <label for="cars">Choose a language:</label>

      <select name="cars" id="cars">
      <option value="en">English</option>
      <option value="de">Deutsch</option>
      <option value="ar">العربية </option>
      </select>
    </div>
  )
} */

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;