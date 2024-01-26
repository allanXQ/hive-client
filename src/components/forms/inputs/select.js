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
  return (
    <FormControl variant="outlined" focused required={props.required}>
      <InputLabel error={meta.touched && !!meta.error}>{label}</InputLabel>
      <Select
        variant={props.variant || "outlined"}
        {...field}
        {...props}
        error={meta.touched && !!meta.error}
        value={field.value}
        label={label}
        displayEmpty
        sx={{
          width: "20rem",
          ...customSx,
        }}
      >
        <MenuItem
          sx={{
            color: themeColor,
          }}
          value=""
        >
          None
        </MenuItem>
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
