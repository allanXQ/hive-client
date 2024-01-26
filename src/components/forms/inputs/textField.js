import { TextField } from "@mui/material";
import { useField } from "formik";
import React from "react";

const MUITextField = ({ label, defaultValue, sx: customSx, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <TextField
      variant={props.variant || "standard"}
      label={label}
      {...field}
      {...props}
      error={meta.touched && !!meta.error}
      helperText={meta.touched && meta.error ? meta.error : ""}
      autoComplete="off"
      defaultValue={defaultValue}
      focused
      sx={{
        width: "20rem",
        ...customSx,
      }}
    />
  );
};

export default MUITextField;
