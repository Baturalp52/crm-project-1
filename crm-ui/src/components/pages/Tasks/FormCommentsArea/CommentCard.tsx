import React from "react";
import { Avatar, Card, CardContent, CardHeader } from "@mui/material";
import { stringAvatar } from "./helpers";
import { IComment } from "../../../../interfaces/Comment";
import { useTranslation } from "react-i18next";

interface ICommentCardProps {
  comment: IComment;
}

const CommentCard = (props: ICommentCardProps) => {
  const { comment } = props;
  const { t } = useTranslation("components", { keyPrefix: "formCommentsArea" });
  return comment.owner ? (
    <Card>
      <CardHeader
        avatar={
          <Avatar
            {...stringAvatar(
              comment.owner.name +
                (comment.owner.surname ? " " + comment.owner.surname : "")
            )}
          />
        }
        title={
          comment.owner.name +
          (comment.owner.surname ? " " + comment.owner.surname : "")
        }
        subheader={
          comment.createdDate
            ? comment.createdDate.toLocaleString()
            : t("unknown-date")
        }
      />
      <CardContent>{comment.content}</CardContent>
    </Card>
  ) : null;
};

export default CommentCard;
