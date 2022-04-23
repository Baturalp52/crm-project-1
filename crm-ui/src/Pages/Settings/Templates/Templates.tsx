import React, { useEffect, useState } from "react";
// @mui
import {
  Modal,
  IconButton,
  Card,
  CardHeader,
  CardContent,
  TableContainer,
  Table,
  Paper,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Checkbox,
  Stack,
  Button,
} from "@mui/material";
import { CloseRounded, ModeEdit } from "@mui/icons-material";
//
import TemplateModal from "./TemplateModal";
// swr
import useSWR from "swr";
// react-i18next
import { useTranslation } from "react-i18next";
// components
import Loading from "../../../components/Loading";
// interfaces
import ITemplate from "../../../interfaces/Template";

interface ITemplatesProps {
  open: boolean;
  setOpen(open: boolean): any;
  type: number;
}
function getTemplate(type: number) {
  switch (type) {
    case 1:
      return "sms-templates";
    case 2:
      return "email-templates";
  }
}

const Templates = (props: ITemplatesProps) => {
  const { open, setOpen, type } = props;
  const { t } = useTranslation("pages", {
    keyPrefix: "settings." + getTemplate(type),
  });
  const { data, error, mutate } = useSWR(`settings/templates?type=${type}`);

  const [templatesData, setTemplatesData] = useState(data);
  const [templateModalData, setTemplateModalData] = useState<
    ITemplate | undefined
  >(undefined);
  const [templateModalOpen, setTemplateModalOpen] = useState(false);

  useEffect(() => {
    setTemplatesData(data);
  }, [open, data]);

  const handleClose = () => {
    setOpen(false);
  };
  const handleTemplateModalOpen = (template: ITemplate) => {
    setTemplateModalData(template);
    setTemplateModalOpen(true);
  };
  const handleNew = () => {
    setTemplateModalData(undefined);
    setTemplateModalOpen(true);
  };

  if (error) return <div>{error}</div>;
  if (!templatesData) return <React.Suspense fallback={<Loading />} />;
  return (
    <>
      <TemplateModal
        open={templateModalOpen}
        setOpen={setTemplateModalOpen}
        mutate={mutate}
        template={templateModalData}
        type={type}
      />
      <Modal open={open} onClose={handleClose}>
        <Card
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
          <CardHeader
            sx={{ p: 2, bgcolor: "success.dark", color: "white" }}
            title={t("title")}
            action={
              <IconButton onClick={handleClose}>
                <CloseRounded htmlColor="white" />
              </IconButton>
            }
          />
          <CardContent sx={{ height: "76%", overflow: "auto" }}>
            <Stack>
              <Button
                sx={{ ml: "auto" }}
                variant="contained"
                color="success"
                onClick={handleNew}
              >
                Create New
              </Button>
            </Stack>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell />
                    <TableCell>id</TableCell>
                    <TableCell>{t("table.name")}</TableCell>
                    <TableCell />
                  </TableRow>
                </TableHead>
                <TableBody>
                  {templatesData.map((template: ITemplate) => (
                    <TableRow key={template.id}>
                      <TableCell>
                        <Checkbox />
                      </TableCell>
                      <TableCell>{template.id}</TableCell>
                      <TableCell>{template.name}</TableCell>
                      <TableCell align="right">
                        <IconButton
                          onClick={() => handleTemplateModalOpen(template)}
                        >
                          <ModeEdit />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                  {templatesData.length === 0 && (
                    <TableRow>
                      <TableCell colSpan={4} align="center">
                        {t("table.no-data")}
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </TableContainer>
          </CardContent>
        </Card>
      </Modal>
    </>
  );
};

export default Templates;
