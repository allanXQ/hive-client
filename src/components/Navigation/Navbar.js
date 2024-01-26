import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link, useLocation } from "react-router-dom";
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
import { ThemeButton } from "components/common/Button";
import { useTheme } from "@emotion/react";
import useUserData from "Hooks/useUserData";

const drawerWidth = 200;

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(null);

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
  const navlinks = [
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
              <ListItemIcon
                sx={{
                  minWidth: 40,
                }}
              >
                {item.icon}
              </ListItemIcon>
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
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const topLinks = [
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

  return (
    <Box
      sx={{
        display: "grid",
        backgroundColor:
          currentTheme === "light"
            ? theme.palette.bgColor.light
            : theme.palette.bgColor.dark,
      }}
    >
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          boxShadow: "none",
          // backgroundColor:
          //   currentTheme === "light"
          //     ? theme.palette.bgColor.light
          //     : theme.palette.bgColor.dark,
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
              {topLinks.map((item, index) => (
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
          display: currentpath.includes("trade/spot") && "none",
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
      </Box>
      <Box
        component="main"
        sx={{
          overflowX: "hidden",
          display: "grid",
          width: { xs: "100vw", sm: `calc(100vw - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          gap: 2,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Toolbar sx={{}} />
        <Box
          sx={{
            width: { xs: "100vw", sm: `calc(100vw - ${drawerWidth + 50}px)` },
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
