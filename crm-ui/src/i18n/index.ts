import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import index from "./en/index.json";
import pages from "./en/pages";
import components from "./en/components";

const resources = {
  en: {
    index: index,
    pages,
    components,
  },
};
console.log(resources);

i18n.use(initReactI18next).init({
  resources,
  defaultNS: "index",
  lng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
