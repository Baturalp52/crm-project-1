import React, { useState } from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  TextField,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { Add } from "@mui/icons-material";

interface IFormCommentsAreaProps {
  title: string;
  onChange: (e: any) => void;
  values: string[];
}

const FormCommentsArea = (props: IFormCommentsAreaProps) => {
  const { title, onChange } = props;
  const [commentArea, setCommentArea] = useState<string>();
  return (
    <Card>
      <CardHeader title={title} />
      <CardContent></CardContent>
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
                <IconButton onClick={() => onChange(commentArea)}>
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
