import i18n from "../i18n";
// import { setLang } from "./localstorage-service";

export const ChangeLanguage = (lang: string) => {
  i18n.changeLanguage(lang);
  // setLang(lang);
};
