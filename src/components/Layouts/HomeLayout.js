import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { selectTheme } from "redux/features/app/configSlice";
import { useSelector } from "react-redux";
import { MuiButton, ThemeButton } from "components/common/Button";
import { useTheme } from "@emotion/react";

const drawerWidth = 200;
const navItems = [
  {
    name: "Home",
    path: "/home",
  },
  {
    name: "About Us",
    path: "/about",
  },
  {
    name: "Terms",
    path: "/terms",
  },
  {
    name: "Privacy",
    path: "/privacy",
  },
];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const currentTheme = useSelector(selectTheme);
  const theme = useTheme();

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        textAlign: "center",
        height: "100%",
        backgroundColor:
          currentTheme === "light"
            ? theme.palette.bgColor.light
            : theme.palette.bgColor.dark,
      }}
    >
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 2,
        }}
      >
        {navItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <Typography to={item.path} variant="h6" component={Link}>
                {item.name}
              </Typography>
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem>
          <ThemeButton />
        </ListItem>

        <ListItem
          disablePadding
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 2,
          }}
        >
          <MuiButton
            variant="outlined"
            onClick={() => {
              navigate("/login");
            }}
            sx={{
              borderRadius: 20,
              width: 180,
              textTransform: "none",
            }}
            content="Sign In"
          />
          <MuiButton
            variant="contained"
            onClick={() => {
              navigate("/register");
            }}
            sx={{
              borderRadius: 20,
              width: 180,
              textTransform: "none",
            }}
            content="Sign Up"
          />
        </ListItem>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{
          backgroundColor:
            currentTheme === "light"
              ? theme.palette.bgColor.light
              : theme.palette.bgColor.dark,
          boxShadow: "none",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <IconButton
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon
              sx={{
                color:
                  currentTheme === "dark"
                    ? theme.palette.bgColor.light
                    : theme.palette.bgColor.dark,
              }}
            />
          </IconButton>
          <Typography
            variant="h6"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            MUI
          </Typography>
          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              width: "80%",
              alignItems: "center",
              justifyContent: "space-evenly",
            }}
          >
            {navItems.map((item) => (
              <Typography
                variant="h6"
                component={Link}
                to={item.path}
                key={item.name}
              >
                {item.name}
              </Typography>
            ))}
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
              }}
            >
              <MuiButton
                variant="outlined"
                onClick={() => {
                  navigate("/login");
                }}
                sx={{
                  display: { xs: "none", sm: "block" },
                  borderRadius: 20,
                  width: 140,
                  textTransform: "none",
                  color: "white.main",
                }}
                content="Sign In"
              />
              <MuiButton
                variant="contained"
                onClick={() => {
                  navigate("/register");
                }}
                sx={{
                  borderRadius: 20,
                  width: 140,
                  textTransform: "none",
                  color: "white.main",
                }}
                content="Sign Up"
              />
            </Box>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <ThemeButton />
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box
        component="main"
        sx={{
          display: "flex",
          p: 3,
          backgroundColor:
            currentTheme === "light"
              ? theme.palette.bgColor.light
              : theme.palette.bgColor.dark,
          width: "100vw",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mt: {
              xs: 10,
              lg: 0,
            },
          }}
        >
          {props.children}
        </Box>
      </Box>
    </Box>
  );
}

const HomeLayout = () => {
  return (
    <DrawerAppBar>
      <Outlet />
    </DrawerAppBar>
  );
};

export default HomeLayout;
