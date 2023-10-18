/* eslint-disable no-dupe-keys */
// import { LocalStorageKeys } from "@/core/services/localstorage-service";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { arStrings } from "@/languages/ar";
import { enStrings } from "./languages/en";
// const storedLang = localStorage.getItem(LocalStorageKeys.language);
const resources = {
  en: {
    translation: enStrings,
  },
  ar: {
    translation: arStrings,
  },
};
i18n.use(initReactI18next).init({
  resources,
  // lng: storedLang || "en",
  lng: "en",
  fallbackLng: "en",
  returnObjects: true,
  // interpolation: {
  //   escapeValue: false,
  // },
});
export default i18n;
