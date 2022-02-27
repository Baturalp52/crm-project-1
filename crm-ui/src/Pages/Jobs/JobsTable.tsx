import React, { useEffect, useState } from "react";

import JobModal from "./JobModal";
import { IJob } from "../../interfaces/Job";
import { useTranslation } from "react-i18next";
import CRUDTable from "../../components/CRUDTable";
import useSWR from "swr";
import Loading from "../../components/Loading";

const JobsTable = () => {
  const { t } = useTranslation("pages", { keyPrefix: "jobs.table" });
  const { data, error } = useSWR("jobs");

  const [isJobModalOpen, setIsJobModalOpen] = useState<boolean>(false);
  const [jobModalJob, setJobModalJob] = useState<IJob | undefined>(undefined);
  const [jobsData, setJobsData] = useState<IJob[]>(data);

  useEffect(() => {
    setJobsData(data);
  }, [data]);

  if (error) return <div>{error}</div>;
  if (!data) return <React.Suspense fallback={<Loading />} />;
  return (
    <>
      <JobModal
        job={jobModalJob}
        isOpen={isJobModalOpen}
        setIsOpen={setIsJobModalOpen}
      />
      <CRUDTable<IJob>
        data={jobsData || []}
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
