import TextField, { TextFieldProps } from "@mui/material/TextField";

import "./index.css";
export function FccTextFields(props: TextFieldProps): JSX.Element {
  const sx = {
    "& .MuiInputBase-root": {
      "&:hover fieldset": {
        borderColor: "var(--sc-primary)",
      },
    },
  };

  return (
    <div>
      <TextField
        variant="outlined"
        label="Basic example"
        hiddenLabel
        sx={sx}
        {...props}
      />
    </div>
  );
}
