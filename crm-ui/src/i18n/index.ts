import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en_index from "./en/index.json";
import en_pages from "./en/pages";
import en_components from "./en/components";

import fr_index from "./fr/index.json";
import fr_pages from "./fr/pages";
import fr_components from "./fr/components";

const resources = {
  en: {
    index: en_index,
    pages: en_pages,
    components: en_components,
  },
  fr: {
    index: fr_index,
    pages: fr_pages,
    components: fr_components,
  },
};
i18n.use(initReactI18next).init({
  resources,
  defaultNS: "index",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
