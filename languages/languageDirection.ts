import { useTranslation } from "react-i18next";

export const getLanguageDirection = () => {
  const { i18n } = useTranslation();
  return i18n.language === 'ar' ? 'rtl' : 'ltr';
};
