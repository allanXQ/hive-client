import { Box, Grid, Typography } from "@mui/material";
import React from "react";

const AboutUs = () => {
  const content = [
    {
      title: "Who We Are",
      subtitle: "Beyond Just Trading: We're a Movement",
      description:
        "At Verdant Capital, we represent more than just a digital platform; we signify a transformative shift in the OTC trading sphere. Established with a clear vision to reshape and streamline the complexities of over-the-counter trading, we harmoniously fuse cutting-edge technology with an empathetic understanding of our users' needs. As we continue to grow, we are proud to shine a light on the intricate world of OTC trading, guiding traders from all corners of the globe towards informed decisions and brighter financial futures.",
      imagePath: "/img/aboutus.jpeg",
      width: 2000,
    },
    {
      title: "Our Team",
      subtitle: "Passionate Professionals at Your Service",
      imagePath: "/img/team.jpeg",
      width: 2000,
      description:
        "We're more than just a team; we're a close-knit community of dedicated professionals. Comprising passionate traders with years of experience, innovative developers at the forefront of technological advancements, and committed customer success specialists, we are united by a common goal: to support and guide our users. At the heart of our mission is ensuring you have the necessary resources, tools, and knowledge to achieve your financial aspirations. With each feature we develop, every support ticket we resolve, and every piece of market insight we share, our primary aim is to pave the path for your trading success.",
    },
    {
      title: "Our Journey",
      subtitle: "From Passion Project to Global Impact",
      imagePath: "/img/journey.jpeg",
      width: 2000,
      description:
        "Initiated in the year 2000 under the visionary leadership of Christian Bale, Verdant Capital emerged from a spark of passion and innovation. As we journey through time, our platform boasts of an ever-expanding user base spanning across 100 countries, a testament to our innovative spirit, unwavering commitment, and the deep-rooted trust we've cultivated within our community. Be it the meticulous market analyses at the break of dawn or the tireless coding endeavors deep into the night, every nuance of Verdant Capital epitomizes our relentless pursuit of excellence.",
    },
  ];

  const mission = [
    {
      title: "Mission",
      imagePath: "/img/mission.png",
      color: "#f14724",
      description:
        "Empowering traders with essential tools and insights for confident OTC market navigation.",
    },
    {
      title: "Vision",
      imagePath: "/img/vision.png",
      color: "#00a875",
      description:
        "Aiming to be the top OTC platform, ensuring trader success and confidence.",
    },
    {
      title: "Values",
      imagePath: "/img/values.png",
      color: "#0aafdc",
      description:
        "Championing community, technology, knowledge, transparency, and collaboration.",
    },
  ];

  return (
    <Grid
      container
      sx={{
        mt: 10,
        display: "flex",
        flexDirection: "column",
        gap: 10,
      }}
    >
      {content.map((item, index) => (
        <Grid
          item
          xs={12}
          key={item.title}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 4,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 1,
            }}
          >
            <Typography variant="h3">{item.title}</Typography>
            <Typography variant="bodySmallBold">{item.subtitle}</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: {
                xs: "column",
                md: index % 2 === 0 ? "row" : "row-reverse",
              },
              gap: { sm: 10 },
            }}
          >
            <Box sx={{ maxWidth: "100%", overflow: "hidden" }}>
              <img
                src={item.imagePath}
                alt={item.title}
                width={item.width}
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </Box>
            <Typography
              variant="bodyRegular"
              sx={{
                mt: { lg: 10 },
                maxWidth: { lg: 700 },
              }}
            >
              {item.description}
            </Typography>
          </Box>
        </Grid>
      ))}
      <Grid
        item
        xs={12}
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
          gap: 10,
        }}
      >
        {mission.map((item, index) => (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              maxWidth: 300,
              maxHeight: 500,
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src={item.imagePath}
                alt={item.title}
                width={120}
                style={{ maxWidth: "100%", height: 100 }}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 2,
              }}
            >
              <Typography
                sx={{
                  color: item.color,
                  fontWeight: "bold",
                  fontSize: 20,
                  textTransform: "uppercase",
                  borderBottom: "5px solid",
                }}
              >
                {item.title}
              </Typography>
              <Typography variant="bodyRegular">{item.description}</Typography>
            </Box>
          </Box>
        ))}
      </Grid>

      <Grid
        item
        xs={12}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 2,
        }}
      >
        <Typography variant="h3" sx={{ textAlign: "center" }}>
          Join Us On Our Journey
        </Typography>
        <Typography variant="bodySmallBold" sx={{ textAlign: "center" }}>
          Be Part of the Verdant Capital Story
        </Typography>
        <Typography variant="bodyRegular" sx={{ textAlign: "center" }}>
          As we continue to break barriers and set new benchmarks, we invite you
          to be a part of our story. Trade, learn, and grow with Verdant Capital
          — where every trader finds a home.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default AboutUs;
