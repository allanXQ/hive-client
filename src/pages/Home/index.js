import { Box, Grid, Typography, Button, useTheme } from "@mui/material";
import { MuiButton } from "components/common/Button";

const Features = [
  {
    title: "Live Trading Room",
    description:
      "Experience our collaborative trading rooms where users can share insights, discuss market trends, and strategize in real-time. It's more than just trading; it's about joining a community of like-minded traders.",
  },
  {
    title: "Advanced Charting Tools",
    description:
      "Utilize our top-tier analytical tools designed for both novice and expert traders. Dive deep into comprehensive market analysis, study patterns, and make informed decisions with precision.",
  },
  {
    title: "Portfolio Management",
    description:
      "Maintain full control and visibility over your investments with our intuitive portfolio management feature. Monitor your assets, track performance, and adjust strategies seamlessly.",
  },
  {
    title: "Market Data",
    description:
      "Stay ahead of the curve with real-time market data and insights. Our platform ensures you're always equipped with the latest information, helping you make timely and strategic trading decisions.",
  },
  {
    title: "Research Tools",
    description:
      "Enhance your market understanding with access to a diverse range of research tools and insights. From in-depth reports to expert analysis, we've got you covered on all fronts.",
  },
];

const stats = [
  {
    title: "100M",
    subtitle: "Quarterly volume traded",
  },
  {
    title: "100K",
    subtitle: "Users",
  },
  {
    title: "500M",
    subtitle: "Assets on the platform",
  },
  {
    title: "100+",
    subtitle: "COuntries Supported",
  },
];

const whyUs = [
  {
    iconPath: "/img/marketdata.png",
    title: "Tailored Market Insights",
    description: "Curated OTC trends tailored to your trading style.",
  },
  {
    iconPath: "/img/security.png",
    title: "Cutting-Edge Security",
    description: "Multi-layered protocols to ensure utmost safety.",
  },
  {
    iconPath: "/img/24hrs.png",
    title: "24/7 Trading Ecosystem",
    description: "Uninterrupted access for round-the-clock trading.",
  },
  {
    iconPath: "/img/support.png",
    title: "World-Class Support",
    description: "Dedicated experts for personalized assistance.",
  },
];

const Home = () => {
  const theme = useTheme();
  return (
    <Grid
      container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: theme.spacing(5),
        width: "100vw",
        mx: 2,
      }}
    >
      <Grid item xs={12} md={6}>
        <Typography variant="h1" sx={{ fontWeight: 700 }}>
          Empower Your Savings Goals with Hive
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Home;
