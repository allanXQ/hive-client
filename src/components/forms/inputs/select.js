import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  useTheme,
} from "@mui/material";
import { useField } from "formik";
import React from "react";
import { useSelector } from "react-redux";
import { selectTheme } from "redux/features/app";

const MUISelectField = ({
  label,
  defaultValue,
  options,
  sx: customSx,
  ...props
}) => {
  const theme = useTheme();
  const [field, meta] = useField(props);
  const currentTheme = useSelector(selectTheme);
  return (
    <FormControl sx={{ m: 1 }} variant="outlined">
      <InputLabel id="demo-customized-select-label">{label}</InputLabel>
      <Select
        variant={props.variant || "outlined"}
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
            // border: "1px solid #ced4da",
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
      >
        {options.map((option) => {
          return <MenuItem value={option.value}>{option.text}</MenuItem>;
        })}
      </Select>
    </FormControl>
  );
};

export default MUISelectField;
