import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en";
import ka from "./locales/ka";
import ru from "./locales/ru";
import uk from "./locales/uk";
import tr from "./locales/tr";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    ka: { translation: ka },
    ru: { translation: ru },
    uk: { translation: uk },
    tr: { translation: tr },
  },
  lng: "ka",
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;
