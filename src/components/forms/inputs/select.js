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
  const themeColor =
    currentTheme === "light"
      ? theme.palette.bgColor.dark
      : theme.palette.bgColor.dark;
  return (
    <FormControl variant="outlined" focused required={props.required}>
      <InputLabel
        id="demo-customized-select-label"
        error={meta.touched && !!meta.error}
        sx={{
          px: 1,
          backgroundColor: themeColor,
        }}
      >
        {label}
      </InputLabel>
      <Select
        variant={props.variant || "outlined"}
        {...field}
        {...props}
        error={meta.touched && !!meta.error}
        helperText={meta.touched && meta.error ? meta.error : ""}
        autoComplete="off"
        defaultValue={defaultValue}
        sx={{
          width: "20rem",
          color: themeColor,

          "& .MuiInputBase-input": {
            // border: "1px solid #ced4da",
            color: themeColor,
            boxShadow: "none",
            "&:focus": {
              backgroundColor: "transparent",
            },
          },
          "& .MuiInput-input": {
            color: themeColor,
            boxShadow: "none",
            "&:focus": {
              backgroundColor: "transparent",
            },
          },
          ...customSx,
        }}
      >
        {options.map((option) => {
          return (
            <MenuItem
              value={option.value}
              sx={{
                color:
                  currentTheme === "light"
                    ? theme.palette.bgColor.dark
                    : theme.palette.bgColor.light,
              }}
            >
              {option.value}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

export default MUISelectField;
