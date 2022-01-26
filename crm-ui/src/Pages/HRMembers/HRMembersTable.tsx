import React, { useState } from "react";

import hrmembers from "../../mockData/hrmembers";
import HRMemberModal from "./HRMemberModal";
import { IHRMember } from "../../interfaces/HRMember";
import { useTranslation } from "react-i18next";
import CRUDTable from "../../components/CRUDTable";

const HRMembersTable = () => {
  const [isHRMemberModalOpen, setIsHRMemberModalOpen] =
    useState<boolean>(false);
  const [hrMemberModalrHRMember, setHRMemberModalHRMember] = useState<
    IHRMember | undefined
  >(undefined);

  const { t } = useTranslation("pages", { keyPrefix: "hrMembers.table" });

  return (
    <>
      <HRMemberModal
        hrmember={hrMemberModalrHRMember}
        isOpen={isHRMemberModalOpen}
        setIsOpen={setIsHRMemberModalOpen}
      />
      <CRUDTable<IHRMember>
        data={hrmembers}
        cellNames={[t("id"), t("name"), t("surname")]}
        keysToShow={["id", "name", "surname"]}
        setModalData={setHRMemberModalHRMember}
        setIsDataModalOpen={setIsHRMemberModalOpen}
      />
    </>
  );
};
export default HRMembersTable;
