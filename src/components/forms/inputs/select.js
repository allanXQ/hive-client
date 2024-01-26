import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  useTheme,
} from "@mui/material";
import { useField } from "formik";
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
      : theme.palette.bgColor.light;
  console.log(field, props);
  return (
    <FormControl variant="outlined" required={props.required}>
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
        value={field.value}
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
                color: themeColor,
              }}
            >
              {option.value}
            </MenuItem>
          );
        })}
      </Select>
      <FormHelperText
        sx={{
          display: meta.touched && meta.error ? "inline" : "hidden",
        }}
        error={meta.touched && !!meta.error}
      >
        {meta.touched && meta.error}
      </FormHelperText>
    </FormControl>
  );
};

export default MUISelectField;
