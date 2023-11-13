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
  PersonOutlineOutlined,
  RedeemOutlined,
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
import { selectTheme } from "redux/features/app/configSlice";
import { ThemeButton } from "components/common/Button";
import { useTheme } from "@emotion/react";

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

  const currentpath = useLocation().pathname;

  const iconStyle = {
    color:
      currentTheme === "light"
        ? theme.palette.bgColor.dark
        : theme.palette.bgColor.light,
  };

  const navlinks = [
    {
      name: "Dashboard",
      icon: <DashboardOutlined sx={iconStyle} />,
      path: "/dashboard",
    },
    {
      name: "Profile",
      icon: <ManageAccountsOutlined sx={iconStyle} />,
      path: "/profile",
    },
    {
      name: "Transact",
      icon: <CurrencyExchangeOutlined sx={iconStyle} />,
      submenu: [
        {
          name: "Deposit",
          icon: <AccountBalanceOutlined sx={iconStyle} />,
          path: "/transact/deposit",
        },
        {
          name: "Contribute",
          icon: <SavingsOutlined sx={iconStyle} />,
          path: "/transact/contribute",
        },
        {
          name: "Loan Request",
          icon: <RequestQuoteOutlined sx={iconStyle} />,
          path: "/transact/request-loan",
        },
        {
          name: "Pay Loan",
          icon: <PaymentOutlined sx={iconStyle} />,
          path: "/transact/pay-loan",
        },
      ],
    },
    {
      name: "Memberships",
      icon: <PeopleAltOutlined sx={iconStyle} />,
      path: "/memberships",
    },
    {
      name: "Loan Calculator",
      icon: <CalculateOutlined sx={iconStyle} />,
      path: "/loan-calculator",
    },
    {
      name: "Conversations",
      icon: <ChatOutlined sx={iconStyle} />,
      path: "/conversations",
      badge: 4,
    },
    {
      name: "History",
      icon: <HistoryOutlined sx={iconStyle} />,
      submenu: [
        {
          name: "Deposits",
          icon: <PaymentsOutlined sx={iconStyle} />,
          path: "/history/deposits",
        },
        {
          name: "Contributionss",
          icon: <PaidOutlined sx={iconStyle} />,
          path: "/history/contributions",
        },
        {
          name: "Loan Requests",
          icon: <RequestQuoteOutlined sx={iconStyle} />,
          path: "/history/loan-requests",
        },
        {
          name: "Loan Payments",
          icon: <CreditScoreOutlined sx={iconStyle} />,
          path: "/history/loan-payments",
        },
      ],
    },

    {
      name: "Logout",
      icon: <LogoutOutlined sx={iconStyle} />,
      path: "/logout",
    },
  ];

  const drawer = (
    <Box>
      <Toolbar />
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
                  <ExpandLess sx={iconStyle} />
                ) : (
                  <ExpandMore sx={iconStyle} />
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
      name: "Trade",
      path: "/trade",
    },
    {
      name: "Loan Request",
      path: "/loan-request",
    },
  ];

  return (
    <Box
      sx={{
        display: "flex",
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
          backgroundColor:
            currentTheme === "light"
              ? theme.palette.bgColor.light
              : theme.palette.bgColor.dark,
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
            <MenuIcon sx={iconStyle} />
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
                alt="Remy Sharp"
                src="/img/avatar.png"
                sx={{
                  width: 35,
                  height: 35,
                }}
              />
              <IconButton>
                <Badge badgeContent={4} color="primary">
                  <Mail fontSize="large" sx={iconStyle} />
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
              backgroundColor:
                currentTheme === "light"
                  ? theme.palette.bgColor.light
                  : theme.palette.bgColor.dark,
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
        }}
      >
        <Toolbar sx={{}} />
        {props.children}
      </Box>
    </Box>
  );
}
export default ResponsiveDrawer;
