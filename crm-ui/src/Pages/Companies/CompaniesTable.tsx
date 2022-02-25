import React, { useEffect, useState } from "react";

import CompanyModal from "./CompanyModal";
import { ICompany } from "../../interfaces/Company";
import { useTranslation } from "react-i18next";
import CRUDTable from "../../components/CRUDTable";
import useSWR from "swr";
import Loading from "../../components/Loading";

const CompanysTable = () => {
  const { t } = useTranslation("pages", { keyPrefix: "companies.table" });
  const [isCompanyModalOpen, setIsCompanyModalOpen] = useState<boolean>(false);
  const [companyModalCompany, setCompanyModalCompany] = useState<
    ICompany | undefined
  >(undefined);
  const { data, error } = useSWR("companies");

  const [companiesData, setCompaniesData] = useState<ICompany[]>(data);
  useEffect(() => {
    setCompaniesData(data);
  }, [data]);

  if (error) return <div>{error}</div>;
  if (!data) return <React.Suspense fallback={<Loading />} />;

  return (
    <>
      <CompanyModal
        company={companyModalCompany}
        isOpen={isCompanyModalOpen}
        setIsOpen={setIsCompanyModalOpen}
      />
      <CRUDTable<ICompany>
        data={companiesData || []}
        cellNames={[t("id"), t("name"), t("city")]}
        keysToShow={["id", "name", "city"]}
        setModalData={setCompanyModalCompany}
        setIsDataModalOpen={setIsCompanyModalOpen}
      />
    </>
  );
};
export default CompanysTable;
