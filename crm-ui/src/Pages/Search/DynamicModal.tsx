import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  Grid,
  IconButton,
  Modal,
} from "@mui/material";
import { CloseRounded } from "@mui/icons-material";

interface IDynamicModalProps {
  isOpen: boolean;
  setIsOpen(isOpen: boolean): any;
  title: string;
  data: any;
}

const DynamicModal = (props: IDynamicModalProps) => {
  const { isOpen, setIsOpen, title, data } = props;
  return (
    <Modal open={isOpen} onClose={() => setIsOpen(false)}>
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
          title={title}
          action={
            <IconButton
              onClick={() => {
                setIsOpen(false);
              }}
            >
              <CloseRounded htmlColor="white" />
            </IconButton>
          }
        />
        <CardContent sx={{ height: "76%", overflow: "auto" }}>
          <Grid container spacing={2} padding={2}>
            {Object.keys(data).map((key) => {
              return (
                <Grid item xs={12} md={4}>
                  {key}: {data[key]}
                </Grid>
              );
            })}
          </Grid>
        </CardContent>
      </Card>
    </Modal>
  );
};

export default DynamicModal;
