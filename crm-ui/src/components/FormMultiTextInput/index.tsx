import React, { useState } from "react";
import {
  Button,
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
} from "@mui/material";
import { Add, Remove } from "@mui/icons-material";

interface IFormMultiTextInputProps {
  label: string;
  id: string;
  data: string[];
}

const FormMultiTextInput = (props: IFormMultiTextInputProps) => {
  const { label, id, data } = props;
  const [hovered, setHovered] = useState(Array(data.length).fill(0));
  return (
    <Card sx={{ border: "none", width: "100%" }}>
      <CardHeader title={label} />
      <CardMedia>
        <Stack padding={2} spacing={2} mx="auto">
          {data.map((item, index) => {
            return (
              <Button
                key={index}
                variant="outlined"
                color={hovered[index] ? "error" : "inherit"}
                onMouseOut={() => {
                  let cHovered = [...hovered];
                  cHovered[index] = 0;
                  setHovered(cHovered);
                }}
                onMouseOver={() => {
                  let cHovered = [...hovered];
                  cHovered[index] = 1;
                  setHovered(cHovered);
                }}
              >
                {hovered[index] ? (
                  <>
                    <Remove /> Delete
                  </>
                ) : (
                  item
                )}
              </Button>
            );
          })}
        </Stack>
      </CardMedia>
      <CardActions>
        <TextField
          label=""
          id={id}
          sx={{ marginLeft: "auto", width: "100%" }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton>
                  <Add />
                </IconButton>
              </InputAdornment>
            ),
          }}
          variant="standard"
        />
      </CardActions>
    </Card>
  );
};

export default FormMultiTextInput;
