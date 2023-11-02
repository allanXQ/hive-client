import { TextField, useTheme } from "@mui/material";
import { useField } from "formik";
import React from "react";
import { useSelector } from "react-redux";
import { selectTheme } from "redux/features/app/configSlice";

const MUITextField = ({ label, defaultValue, sx: customSx, ...props }) => {
  const theme = useTheme();
  const [field, meta] = useField(props);
  const currentTheme = useSelector(selectTheme);
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
        color:
          currentTheme === "light"
            ? theme.palette.bgColor.dark
            : theme.palette.bgColor.light,

        "& .MuiInputBase-input": {
          color:
            currentTheme === "light"
              ? theme.palette.bgColor.dark
              : theme.palette.bgColor.light,
          boxShadow: "none",
          "&:focus": {
            backgroundColor: "transparent",
          },
        },
        "& .MuiInput-input": {
          color:
            currentTheme === "light"
              ? theme.palette.bgColor.dark
              : theme.palette.bgColor.light,
          boxShadow: "none",
          "&:focus": {
            backgroundColor: "transparent",
          },
        },
        ...customSx,
      }}
    />
  );
};

export default MUITextField;
