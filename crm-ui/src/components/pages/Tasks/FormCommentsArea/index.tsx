// react
import React, { useState } from "react";
// @mui
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
// react-18next
import { useTranslation } from "react-i18next";
// interfaces
import { IComment } from "../../../../interfaces/Comment";
// components
import CommentCard from "./CommentCard";
// formik
import { useFormikContext } from "formik";

type Values = {
  id: number;
  comments: IComment[];
};
interface IFormCommentsAreaProps {
  title: string;
  user: any;
}

const FormCommentsArea = (props: IFormCommentsAreaProps) => {
  const { title, user } = props;
  const { values, setFieldValue } = useFormikContext();
  const { comments, id } = values as Values;

  const [commentArea, setCommentArea] = useState<string>("");
  const { t } = useTranslation("components", { keyPrefix: "formCommentsArea" });

  const onChange = (data: IComment) => {
    const newComments = comments ? [...(comments as Array<IComment>)] : [];
    data.task = id;
    data.owner = user;
    newComments.push(data);
    setFieldValue("comments", comments);
  };

  return (
    <Card sx={{ width: "100%" }}>
      <CardHeader title={title} />
      <CardContent sx={{ height: "30vh", maxHeight: "30vh", overflow: "auto" }}>
        {comments && comments?.length > 0 ? (
          comments.map((comment, index) => (
            <Paper key={index} sx={{ m: 2, p: 2 }} elevation={10}>
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
