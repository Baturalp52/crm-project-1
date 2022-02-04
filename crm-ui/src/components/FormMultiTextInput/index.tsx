import React, { useState } from "react";
import {
  Button,
  Card,
  CardActions,
  CardHeader,
  CardContent,
  IconButton,
  InputAdornment,
  Grid,
  TextField,
} from "@mui/material";
import { Add, Remove } from "@mui/icons-material";

interface IFormMultiTextInputProps {
  label: string;
  id: string;
  data?: string[];
}

const FormMultiTextInput = (props: IFormMultiTextInputProps) => {
  const { label, id, data } = props;
  const [hovered, setHovered] = useState(Array(data ? data.length : 0).fill(0));
  return (
    <Card sx={{ border: "none", width: "100%", m: 1 }}>
      <CardHeader title={label} />
      <CardContent>
        <Grid container spacing={2} mx="auto">
          {data
            ? data.map((item, index) => {
                return (
                  <Grid key={index} item xs={12}>
                    <Button
                      key={index}
                      variant="outlined"
                      color={hovered[index] ? "error" : "inherit"}
                      sx={{
                        width: "100%",
                      }}
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
                  </Grid>
                );
              })
            : "No data"}
        </Grid>
      </CardContent>
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
