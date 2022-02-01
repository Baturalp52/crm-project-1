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
      filter: 0,
      searchKey: "",
    },
    onSubmit: (e: any) => {
      console.log(e);
      setCandidatesData(candidates);
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
        searchProps={{
          searchFields: ["distance", "job", "diploma", "keywords"],
          filters: [],
        }}
        searchForm={searchForm}
      />
    </>
  );
};
export default CandidatesTable;
