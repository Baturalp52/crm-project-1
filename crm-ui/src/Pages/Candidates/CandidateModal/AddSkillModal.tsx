import React, { useState } from "react";
import { Box, Button, Modal } from "@mui/material";
import { ISkill } from "../../../interfaces/Skill";
import { useTranslation } from "react-i18next";
import FormInput from "../../../components/FormInput";

interface IAddSkillModalProps {
  isOpen: boolean;
  setIsOpen: (state: boolean) => void;
  addSkill: (skill: ISkill) => void;
}

const AddSkillModal = (props: IAddSkillModalProps) => {
  const { isOpen, setIsOpen, addSkill } = props;
  const [skill, setSkill] = useState<ISkill>({
    id: 0,
    name: "",
    level: "",
  });
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
          width: "95%",
          height: "85%",
          bgcolor: "background.paper",
          border: "none",
        }}
      >
        <FormInput
          label={t("name")}
          type="text"
          value={skill.name}
          name="skill-name"
          onChange={(e) => {
            const prevSkill = { ...skill };
            prevSkill.name = e.target.value;
            setSkill(prevSkill);
          }}
        />
        <FormInput
          label={t("level")}
          type="text"
          value={skill.level}
          name="skill-level"
          onChange={(e) => {
            const prevSkill = { ...skill };
            prevSkill.level = e.target.value;
            setSkill(prevSkill);
          }}
        />
        <Button
          variant="contained"
          color="success"
          onClick={() => {
            addSkill(skill);
            setIsOpen(false);
          }}
        >
          {t("save-skill")}
        </Button>
      </Box>
    </Modal>
  );
};

export default AddSkillModal;
