import React, { useState } from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  TextField,
  IconButton,
  InputAdornment,
  Paper,
} from "@mui/material";
import { Add } from "@mui/icons-material";
import { useTranslation } from "react-i18next";
import { IComment } from "../../interfaces/Comment";

import CommentCard from "./CommentCard";

interface IFormCommentsAreaProps {
  title: string;
  onChange: (e: any) => void;
  values: IComment[] | never[] | undefined;
}

const FormCommentsArea = (props: IFormCommentsAreaProps) => {
  const { title, onChange, values } = props;
  const [commentArea, setCommentArea] = useState<string>();
  const { t } = useTranslation("components", { keyPrefix: "formCommentsArea" });
  return (
    <Card sx={{ width: "100%" }}>
      <CardHeader title={title} />
      <CardContent sx={{ height: "30vh", maxHeight: "30vh", overflow: "auto" }}>
        {values && values?.length > 0 ? (
          values.map((comment) => (
            <Paper sx={{ m: 2, p: 2 }} elevation={10}>
              <CommentCard comment={comment} />
            </Paper>
          ))
        ) : (
          <Paper sx={{ m: 2, p: 2 }} elevation={10}>
            {t("no-comment")}
          </Paper>
        )}
      </CardContent>
      <CardActions>
        <TextField
          multiline
          fullWidth
          maxRows={4}
          value={commentArea}
          onChange={(e) => setCommentArea(e.target.value)}
          variant="standard"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => {
                    const comment = {
                      id: 0,
                      content: commentArea,
                      createdDate: new Date(),
                    };
                    onChange(comment);
                  }}
                >
                  <Add />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </CardActions>
    </Card>
  );
};

export default FormCommentsArea;
