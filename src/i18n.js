import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

//Import all translation files
import English from "./Translation/english.json";
import Russian from "./Translation/russian.json";

const resources = {
  en: {
    translation: English,
  },
  ru: {
    translation: Russian,
  },
};

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources,
    // resources: {
    //   en: {
    //     translation: {
    //       welcome: "Welcome to my site!",
    //       description: "This is an example of i18n with Context.",
    //     },
    //   },
    //   fr: {
    //     translation: {
    //       welcome: "Bienvenue",
    //       description: "Ceci est un exemple d’i18n avec Context.",
    //     },
    //   },
    // },
    fallbackLng: "en", // Default language
  });

export default i18n;
