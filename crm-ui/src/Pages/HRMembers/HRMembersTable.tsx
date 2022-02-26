import React, { useEffect, useState } from "react";

import HRMemberModal from "./HRMemberModal";
import { IHRMember } from "../../interfaces/HRMember";
import { useTranslation } from "react-i18next";
import CRUDTable from "../../components/CRUDTable";
import useSWR from "swr";
import Loading from "../../components/Loading";

const HRMembersTable = () => {
  const { t } = useTranslation("pages", { keyPrefix: "hrMembers.table" });
  const { data, error } = useSWR("hr-members");

  const [isHRMemberModalOpen, setIsHRMemberModalOpen] =
    useState<boolean>(false);
  const [hrMemberModalrHRMember, setHRMemberModalHRMember] = useState<
    IHRMember | undefined
  >(undefined);
  const [hrmembersData, setHrmembersData] = useState<IHRMember[]>(data);

  useEffect(() => {
    setHrmembersData(data);
  }, [data]);

  if (error) return <div>{error}</div>;
  if (!data) return <React.Suspense fallback={<Loading />} />;

  return (
    <>
      <HRMemberModal
        hrmember={hrMemberModalrHRMember}
        isOpen={isHRMemberModalOpen}
        setIsOpen={setIsHRMemberModalOpen}
      />
      <CRUDTable<IHRMember>
        data={hrmembersData || []}
        cellNames={[t("id"), t("name"), t("surname")]}
        keysToShow={["id", "name", "surname"]}
        setModalData={setHRMemberModalHRMember}
        setIsDataModalOpen={setIsHRMemberModalOpen}
      />
    </>
  );
};
export default HRMembersTable;
