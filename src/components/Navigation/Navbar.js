import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  AccountBalanceOutlined,
  CalculateOutlined,
  ChatOutlined,
  CreditScoreOutlined,
  CurrencyExchangeOutlined,
  DashboardOutlined,
  ExpandLess,
  ExpandMore,
  HistoryOutlined,
  LogoutOutlined,
  Mail,
  ManageAccountsOutlined,
  PaidOutlined,
  PaymentOutlined,
  PaymentsOutlined,
  PeopleAltOutlined,
  RequestQuoteOutlined,
  SavingsOutlined,
} from "@mui/icons-material";
import {
  Avatar,
  Badge,
  Collapse,
  CssBaseline,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectTheme } from "redux/features/app";
import { MuiButton, ThemeButton } from "components/common/Button";
import { useTheme } from "@emotion/react";
import useUserData from "Hooks/useUserData";

const drawerWidth = 200;

function ResponsiveDrawer(props) {
  const { window, isHome } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(null);
  const navigate = useNavigate();

  const handleSubMenuToggle = (index) => {
    setOpenSubMenu(openSubMenu === index ? null : index);
  };
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const currentTheme = useSelector(selectTheme);
  const theme = useTheme();
  const userData = useUserData();

  const currentpath = useLocation().pathname;
  const dashSidelinks = [
    {
      name: "Dashboard",
      icon: <DashboardOutlined />,
      path: "/dashboard",
    },
    {
      name: "Profile",
      icon: <ManageAccountsOutlined />,
      path: "/profile",
    },
    {
      name: "Transact",
      icon: <CurrencyExchangeOutlined />,
      submenu: [
        {
          name: "Deposit",
          icon: <AccountBalanceOutlined />,
          path: "/transact/deposit",
        },
        {
          name: "Contribute",
          icon: <SavingsOutlined />,
          path: "/transact/contribute",
        },
        {
          name: "Loan Request",
          icon: <RequestQuoteOutlined />,
          path: "/transact/request-loan",
        },
        {
          name: "Pay Loan",
          icon: <PaymentOutlined />,
          path: "/transact/pay-loan",
        },
      ],
    },
    {
      name: "Chamas",
      icon: <PeopleAltOutlined />,
      submenu: [
        {
          name: "Home",
          icon: <PeopleAltOutlined />,
          path: "/chamas/home",
        },
        {
          name: "Create",
          icon: <PeopleAltOutlined />,
          path: "/chamas/create",
        },
        {
          name: "Join",
          icon: <PeopleAltOutlined />,
          path: "/chamas/join",
        },
      ],
    },
    {
      name: "Loan Calculator",
      icon: <CalculateOutlined />,
      path: "/loan-calculator",
    },
    {
      name: "Conversations",
      icon: <ChatOutlined />,
      path: "/conversations",
      badge: 4,
    },
    {
      name: "History",
      icon: <HistoryOutlined />,
      submenu: [
        {
          name: "Deposits",
          icon: <PaymentsOutlined />,
          path: "/history/deposits",
        },
        {
          name: "Contributions",
          icon: <PaidOutlined />,
          path: "/history/contributions",
        },
        {
          name: "Loan Requests",
          icon: <RequestQuoteOutlined />,
          path: "/history/loan-requests",
        },
        {
          name: "Loan Payments",
          icon: <CreditScoreOutlined />,
          path: "/history/loan-payments",
        },
      ],
    },

    {
      name: "Logout",
      icon: <LogoutOutlined />,
      path: "/logout",
    },
  ];

  const dashLinks = [
    {
      name: "Dashboard",
      path: "/dashboard",
    },
    {
      name: "Deposit",
      path: "/deposit",
    },
    {
      name: "Chamas",
      path: "/chamas/home",
    },
  ];

  const homeLinks = [
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

  const topBarLinks = isHome ? homeLinks : dashLinks;
  const navlinks = isHome ? homeLinks : dashSidelinks;

  const drawer = (
    <Box>
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={currentTheme === "dark" ? "/logo.png" : "/logoblack.png"}
          alt="logo"
          width="40px"
          height="40px"
        />
      </Toolbar>
      <Divider />
      <List>
        {navlinks.map((item, index) => (
          <div key={index}>
            <ListItem
              button
              onClick={() => item.submenu && handleSubMenuToggle(index)}
              component={!item.submenu && Link}
              to={item.path}
            >
              {!isHome && (
                <ListItemIcon
                  sx={{
                    minWidth: 40,
                  }}
                >
                  {item.icon}
                </ListItemIcon>
              )}
              <ListItemText>
                <Typography variant="bodySmall">{item.name}</Typography>
              </ListItemText>
              {item.submenu ? (
                openSubMenu === index ? (
                  <ExpandLess />
                ) : (
                  <ExpandMore />
                )
              ) : null}
            </ListItem>
            {item.submenu && (
              <Collapse in={openSubMenu === index} timeout="auto" unmountOnExit>
                <List
                  component="div"
                  disablePadding
                  sx={{
                    marginLeft: 2,
                  }}
                >
                  {item.submenu.map((subitem, subindex) => (
                    <ListItem key={subindex} disablePadding>
                      <ListItemButton component={Link} to={subitem.path}>
                        <ListItemIcon
                          sx={{
                            minWidth: 35,
                          }}
                        >
                          {subitem.icon}
                        </ListItemIcon>
                        <Typography variant="bodySmall">
                          {subitem.name}
                        </Typography>
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
                {}
              </Collapse>
            )}
          </div>
        ))}
        {isHome && (
          <>
            <ListItem button component={Link} to="/login">
              <ListItemText>
                <Typography variant="bodySmall">Sign In </Typography>
              </ListItemText>
            </ListItem>
            <ListItem button component={Link} to="/register">
              <ListItemText>
                <Typography variant="bodySmall">Sign Up </Typography>
              </ListItemText>
            </ListItem>
          </>
        )}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box
      sx={{
        display: "grid",
      }}
    >
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: isHome ? "100vw" : { sm: `calc(100% - ${drawerWidth}px)` },
          ml: isHome ? 0 : { sm: `${drawerWidth}px` },
          boxShadow: "none",
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                justifyContent: "space-evenly",
                alignItems: "center",
                width: "100%",
              }}
            >
              {topBarLinks.map((item, index) => (
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
                justifyContent: "space-evenly",
                width: 200,
              }}
            >
              <Avatar
                alt={userData?.username}
                src={userData?.photoURL}
                sx={{
                  width: 35,
                  height: 35,
                }}
              />
              <IconButton>
                <Badge badgeContent={4} color="primary">
                  <Mail fontSize="large" />
                </Badge>
              </IconButton>
              <ThemeButton />
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{
          width: { sm: drawerWidth },
          flexShrink: { sm: 0 },
        }}
        aria-label="mailbox folders"
      >
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
        {!isHome && (
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: "none", sm: "block" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
            open
          >
            {drawer}
          </Drawer>
        )}
      </Box>
      <Box
        component="main"
        sx={{
          overflowX: "hidden",
          display: "grid",
          width: isHome
            ? "100vw"
            : { xs: "100vw", sm: `calc(100vw - ${drawerWidth}px)` },
          ml: isHome ? 0 : { sm: `${drawerWidth}px` },
          gap: 2,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Toolbar sx={{}} />
        <Box
          sx={{
            // width: { xs: "100vw", sm: `calc(100vw - ${drawerWidth + 50}px)` },
            px: { xs: 2, sm: 0 },
          }}
        >
          {props.children}
        </Box>
      </Box>
    </Box>
  );
}
export default ResponsiveDrawer;
