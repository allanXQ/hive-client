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
      }}
    >
      <Grid
        item
        xs={12}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: theme.spacing(2),
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: theme.spacing(1),
          }}
        >
          <Typography variant="h2">
            Your Vision. Our Platform. OTC Perfected.
          </Typography>
          <Typography variant="bodyRegular">
            Dive deep into the intricate and lucrative world of over-the-counter
            (OTC) stocks with Verdant Capital. As your steadfast and
            knowledgeable partner, we offer unparalleled guidance, tools, and
            insights, empowering you to navigate the ever-evolving landscape of
            the OTC markets with ease, confidence, and sophistication.
          </Typography>
          <Box>
            <MuiButton
              variant="contained"
              color="primary"
              content="Get Started"
            />
          </Box>
        </Box>
        <Box
          sx={{
            display: { xs: "none", md: "block" },
          }}
        >
          <img src="/img/home3.webp" alt="hero" width={600} />
        </Box>
      </Grid>
      <Grid
        item
        xs={12}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: theme.spacing(2),
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignSelf: "center",
            alignItems: "center",
            gap: theme.spacing(1),
          }}
        >
          <Typography variant="h2">
            Jumpstart your OTC portfolio today
          </Typography>
          <Typography variant="bodyRegular">
            Verdant Capital has a variety of features that make it the best
            place to start trading
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", lg: "row-reverse" },
            justifyContent: "center",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Box sx={{ maxWidth: "100%", overflow: "hidden" }}>
            <img
              src="/img/dashboard.png"
              alt="dashboard"
              width={1200}
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: theme.spacing(2),
            }}
          >
            {Features.map((item) => (
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: theme.spacing(1),
                }}
              >
                <Typography variant="h5">{item.title}</Typography>
                <Typography variant="bodyRegular">
                  {item.description}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Grid>
      <Grid
        item
        xs={12}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: theme.spacing(2),
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignSelf: "center",
            alignItems: "center",
            gap: theme.spacing(1),
          }}
        >
          <Typography variant="h2">Platform Metrics at a Glance</Typography>
          <Typography variant="bodyRegular">
            Showcasing our impressive quarterly volumes and expansive global
            reach.
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
            alignItems: "center",
            gap: theme.spacing(2),
          }}
        >
          {stats.map((item) => (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: theme.spacing(1),
                minWidth: 200,
              }}
            >
              <Typography variant="h2">{item.title}</Typography>
              <Typography variant="bodyRegular">{item.subtitle}</Typography>
            </Box>
          ))}
        </Box>
      </Grid>
      <Grid
        item
        xs={12}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: theme.spacing(2),
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignSelf: "center",
            alignItems: "center",
            gap: theme.spacing(1),
          }}
        >
          <Typography variant="h2">Why Users Trust Us</Typography>
          <Typography variant="bodyRegular">
            Beyond features, it's our reliability, expertise, and unwavering
            commitment to user success that sets us apart. Discover why.
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            flexWrap: "wrap",
            alignItems: "center",
            gap: theme.spacing(2),
          }}
        >
          {whyUs.map((item) => (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: 150,
                }}
              >
                <img src={item.iconPath} alt="icon" width={120} />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: theme.spacing(1),
                }}
              >
                <Typography variant="h5">{item.title}</Typography>
                <Typography variant="bodyRegular">
                  {item.description}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Grid>
    </Grid>
  );
};

export default Home;
