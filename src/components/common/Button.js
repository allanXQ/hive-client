import { Button, Typography, useTheme, IconButton } from "@mui/material";
import { DarkMode, LightMode } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { selectTheme, updateTheme } from "redux/features/app/configSlice";
import { useLocation } from "react-router-dom";

export const MuiButton = (props) => {
  const { variant, type, onClick, sx, content, disabled, href, children } =
    props;
  const theme = useTheme();
  return (
    <Button
      variant={variant}
      onClick={onClick}
      disabled={disabled}
      type={type}
      href={href}
      sx={{
        textTransform: "none",
        ...sx,
      }}
    >
      {content && (
        <Typography
          variant="bodyRegularBold"
          color={
            variant === "text" || variant === "outlined"
              ? theme.palette.blue.main
              : theme.palette.white.main
          }
        >
          {content}
        </Typography>
      )}
      {children}
    </Button>
  );
};

export const ThemeButton = () => {
  const dispatch = useDispatch();
  const currentPath = useLocation().pathname;
  const changeTheme = () => {
    dispatch(updateTheme());
  };

  const currentTheme = useSelector(selectTheme);
  const theme = useTheme();

  return (
    <IconButton onClick={changeTheme}>
      {currentTheme === "dark" ? (
        <LightMode
          sx={{
            color:
              currentTheme === "dark"
                ? theme.palette.bgColor.light
                : theme.palette.bgColor.dark,
          }}
        />
      ) : (
        <DarkMode
          sx={{
            color:
              currentTheme === "dark"
                ? theme.palette.bgColor.light
                : theme.palette.bgColor.dark,
          }}
        />
      )}
    </IconButton>
  );
};
