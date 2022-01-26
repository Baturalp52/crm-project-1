import React, { useState } from "react";

import jobs from "../../mockData/jobs";
import JobModal from "./JobModal";
import { IJob } from "../../mockData/interfaces/Job";
import { useTranslation } from "react-i18next";
import CRUDTable from "../../components/CRUDTable";

const JobsTable = () => {
  const [isJobModalOpen, setIsJobModalOpen] = useState<boolean>(false);
  const [jobModalJob, setJobModalJob] = useState<IJob | undefined>(undefined);
  const { t } = useTranslation("pages", { keyPrefix: "jobs.table" });

  return (
    <>
      <JobModal
        job={jobModalJob}
        isOpen={isJobModalOpen}
        setIsOpen={setIsJobModalOpen}
      />
      <CRUDTable<IJob>
        data={jobs}
        cellNames={[
          t("id"),
          t("name"),
          t("experience"),
          t("salary-expectation"),
        ]}
        keysToShow={["id", "name", "experience", "salaryExpectation"]}
        setModalData={setJobModalJob}
        setIsDataModalOpen={setIsJobModalOpen}
      />
    </>
  );
};
export default JobsTable;
