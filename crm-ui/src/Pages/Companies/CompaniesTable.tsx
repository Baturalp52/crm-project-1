import React, { useState } from "react";

import companies from "../../mockData/companies";
import CompanyModal from "./CompanyModal";
import { ICompany } from "../../mockData/interfaces/Company";
import { useTranslation } from "react-i18next";
import CRUDTable from "../../components/CRUDTable";

const CompanysTable = () => {
  const { t } = useTranslation("pages", { keyPrefix: "companies.table" });
  const [isCompanyModalOpen, setIsCompanyModalOpen] = useState<boolean>(false);
  const [companyModalCompany, setCompanyModalCompany] = useState<
    ICompany | undefined
  >(undefined);

  return (
    <>
      <CompanyModal
        company={companyModalCompany}
        isOpen={isCompanyModalOpen}
        setIsOpen={setIsCompanyModalOpen}
      />
      <CRUDTable<ICompany>
        data={companies}
        cellNames={[t("id"), t("name"), t("city")]}
        keysToShow={["id", "name", "city"]}
        setModalData={setCompanyModalCompany}
        setIsDataModalOpen={setIsCompanyModalOpen}
      />
    </>
  );
};
export default CompanysTable;
