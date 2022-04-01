import React from "react";
import { Box, Button, Modal } from "@mui/material";
import { ISkill } from "../../../interfaces/Skill";
import { useTranslation } from "react-i18next";
import FormInput from "../../../components/FormInput";
import { Save } from "@mui/icons-material";

interface ISkillModalProps {
  isOpen: boolean;
  setIsOpen: (state: boolean) => void;
  addSkill: (skill: ISkill) => void;
  editSkill: (skill: ISkill) => void;
  action: "add" | "edit";
  modalSkill: ISkill;
  setModalSkill: (skill: ISkill) => void;
}

const SkillModal = (props: ISkillModalProps) => {
  const {
    isOpen,
    setIsOpen,
    addSkill,
    editSkill,
    action,
    modalSkill,
    setModalSkill,
  } = props;
  const { t } = useTranslation("pages", {
    keyPrefix: "candidates.modal.form.skills",
  });
  return (
    <Modal
      open={isOpen}
      onClose={() => {
        setIsOpen(false);
      }}
    >
      <Box
        sx={{
          position: "absolute" as "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          bgcolor: "background.paper",
          border: "none",
          padding: 2,
        }}
      >
        <FormInput
          label={t("name")}
          type="text"
          value={modalSkill.name}
          name="skill-name"
          onChange={(e) => {
            const prevSkill = { ...modalSkill };
            prevSkill.name = e.target.value;
            setModalSkill(prevSkill);
          }}
        />
        <FormInput
          label={t("skill-level")}
          type="text"
          value={modalSkill.level}
          name="skill-level"
          onChange={(e: any) => {
            const prevSkill = { ...modalSkill };
            prevSkill.level = e.target.value;
            setModalSkill(prevSkill);
          }}
        />
        <Button
          variant="contained"
          color="success"
          onClick={() => {
            action === "add" ? addSkill(modalSkill) : editSkill(modalSkill);
            setIsOpen(false);
          }}
        >
          <Save sx={{ mr: 1 }} />
          {t("save-skill")}
        </Button>
      </Box>
    </Modal>
  );
};

export default SkillModal;
