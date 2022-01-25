import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import index from "./en/index.json";
import calendar from "./en/pages/calendar.json";
import candidates from "./en/pages/candidates.json";
import companies from "./en/pages/companies.json";
import actionModal from "./en/components/actionModal.json";

const resources = {
  en: {
    index: index,
    calendar: calendar,
    candidates: candidates,
    companies: companies,

    actionModal: actionModal,
  },
};

i18n.use(initReactI18next).init({
  resources,
  defaultNS: "index",
  lng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
