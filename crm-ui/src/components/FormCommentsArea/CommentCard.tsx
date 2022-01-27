import React from "react";
import { Avatar, Card, CardContent, CardHeader } from "@mui/material";
import { stringAvatar } from "./helpers";
import { IComment } from "../../interfaces/Comment";
import { useTranslation } from "react-i18next";

interface ICommentCardProps {
  comment: IComment;
}

const CommentCard = (props: ICommentCardProps) => {
  const { comment } = props;
  const { t } = useTranslation("components", { keyPrefix: "formCommentsArea" });
  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar
            {...stringAvatar(
              comment.owner
                ? comment.owner.name + comment.owner.surname
                : "Admin"
            )}
          />
        }
        title={
          comment.owner ? comment.owner.name + comment.owner.surname : "Admin"
        }
        subheader={
          comment.createdDate
            ? comment.createdDate.toLocaleString()
            : t("unknown-date")
        }
      />
      <CardContent>{comment.content}</CardContent>
    </Card>
  );
};

export default CommentCard;
