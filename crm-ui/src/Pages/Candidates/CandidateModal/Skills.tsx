import React, { useState } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
  IconButton,
  Tooltip,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { ISkill } from "../../../interfaces/Skill";
import { Clear, Edit } from "@mui/icons-material";
import AddSkillModal from "./AddSkillModal";

interface ISkillsProps {
  skills: ISkill[];
  addSkill: (skill: ISkill) => void;
  removeSkill: (skill: ISkill) => void;
  editSkill: (skill: ISkill) => void;
}

const Skills = (props: ISkillsProps) => {
  const { t } = useTranslation("pages", {
    keyPrefix: "candidates.modal.form.skills",
  });
  const { skills, removeSkill, editSkill, addSkill } = props;
  const [isAddModalOpen, setIsAddModalOpen] = useState<boolean>(false);
  return (
    <>
      <AddSkillModal
        isOpen={isAddModalOpen}
        setIsOpen={setIsAddModalOpen}
        addSkill={addSkill}
      />
      <Card sx={{ border: "none", width: "100%", m: 1 }}>
        <CardHeader title={t("title")} />
        <CardContent>
          <Grid container>
            {skills.map((skill, index) => (
              <Grid key={index} item xs={12} sx={{ display: "flex" }}>
                <Tooltip title={t("level") + skill.level} placement="top">
                  <span>{skill.name}</span>
                </Tooltip>
                <IconButton
                  sx={{ ml: "auto" }}
                  onClick={() => {
                    editSkill(skill);
                  }}
                >
                  <Edit />
                </IconButton>
                <IconButton
                  sx={{ ml: 1 }}
                  onClick={() => {
                    removeSkill(skill);
                  }}
                >
                  <Clear />
                </IconButton>
              </Grid>
            ))}
          </Grid>
        </CardContent>
        <CardActions>
          <Button
            onClick={() => {
              setIsAddModalOpen(true);
            }}
          >
            {t("add-new-skill")}
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default Skills;
