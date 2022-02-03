import React, { useState } from "react";

import candidates from "../../mockData/candidates";
import CandidateModal from "./CandidateModal";
import { ICandidate } from "../../interfaces/Candidate";
import { useTranslation } from "react-i18next";
import CRUDTable from "../../components/CRUDTable";
import { useFormik } from "formik";

const CandidatesTable = () => {
  const { t } = useTranslation("pages", { keyPrefix: "candidates.table" });
  const [isCandidateModalOpen, setIsCandidateModalOpen] =
    useState<boolean>(false);
  const [candidateModalCandidate, setCandidateModalCandidate] = useState<
    ICandidate | undefined
  >(undefined);
  const [candidatesData, setCandidatesData] = useState(candidates);

  const searchForm = useFormik({
    initialValues: {
      search: {},
    },
    onSubmit: (e: any) => {
      const result = Object.keys(e.search).reduce(
        (candidates: any, key: string) => {
          const re = new RegExp(".*" + e.search[key].toLowerCase() + ".*");
          return candidates.filter((e: any) =>
            e[key] ? re.test(e[key].toLowerCase()) : false
          );
        },
        candidates
      );
      setCandidatesData(result);
    },
    enableReinitialize: true,
  });
  return (
    <>
      <CandidateModal
        candidate={candidateModalCandidate}
        isOpen={isCandidateModalOpen}
        setIsOpen={setIsCandidateModalOpen}
      />
      <CRUDTable<ICandidate>
        data={candidatesData}
        cellNames={[t("id"), t("name"), t("surname"), t("city")]}
        keysToShow={["id", "name", "surname", "city"]}
        setModalData={setCandidateModalCandidate}
        setIsDataModalOpen={setIsCandidateModalOpen}
        searchForm={searchForm}
        filters={[
          { name: "distance", label: t("search-filters.distance") },
          { name: "diploma", label: t("search-filters.diploma") },
          { name: "keywords", label: t("search-filters.keywords") },
          { name: "job", label: t("search-filters.job") },
        ]}
      />
    </>
  );
};
export default CandidatesTable;
