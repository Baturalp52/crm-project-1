import React, { useState } from "react";

import candidates from "../../mockData/candidates";
import CandidateModal from "./CandidateModal";
import { ICandidate } from "../../interfaces/Candidate";
import { useTranslation } from "react-i18next";
import CRUDTable from "../../components/CRUDTable";
import { useFormik } from "formik";
import IFilter from "../../interfaces/Filter";
import calculateDistance from "../../helpers/calculateDistance";
import mainCoord from "../../mockData/coords";

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
      search: {} as any,
    },
    onSubmit: (e: any) => {
      const result = Object.keys(e.search).reduce(
        (candidates: any, key: string) => {
          const filterFunc = filters.filter((filter) => filter.name === key)[0]
            .filterFunc;
          if (filterFunc) {
            return candidates.filter(filterFunc);
          } else {
            const re = new RegExp(
              ".*" + e.search[key].value.toLowerCase() + ".*"
            );
            return candidates.filter((e: any) =>
              e[key] ? re.test(e[key].toLowerCase()) : false
            );
          }
        },
        candidates
      );
      setCandidatesData(result);
    },
    enableReinitialize: true,
  });

  const filters: IFilter[] = [
    {
      name: "distance",
      label: t("search-filters.distance"),
      filterFunc: (candidate: ICandidate) => {
        const d = calculateDistance(mainCoord, candidate.mapsCoord!);
        console.log(d);

        return d < searchForm.values.search.distance;
      },
    },
    { name: "diploma", label: t("search-filters.diploma") },
    { name: "keywords", label: t("search-filters.keywords") },
    { name: "requestedJob", label: t("search-filters.job") },
  ];

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
        filters={filters}
      />
    </>
  );
};
export default CandidatesTable;
