import {
  Box,
  Container,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";

const termsAndConditions = [
  {
    title: "Interpretation and Definitions",
    content: [
      {
        subtitle: "Interpretation",
        description:
          "The words of which the initial letter is capitalized have meanings defined under the following conditions.",
      },
      {
        subtitle: "Definitions",
        description: "For the purposes of these Terms and Conditions:",
        list: [
          `"Affiliate" means an entity that controls, is controlled by, or is under common control with a party, where "control" means ownership of 50% or more of the shares, equity interest, or other securities entitled to vote for the election of directors or other managing authority.`,
          `"Service" refers to the platform.`,
          `"Terms and Conditions" (also referred as "Terms") mean these Terms and Conditions that form the entire agreement between You and Verdant Capital regarding the use of the Service.`,
          `"User" or "You" refers to the inBoxidual accessing or using the Service, or the company, or other legal entity on behalf of which such inBoxidual is accessing or using the Service, as applicable.`,
        ],
      },
    ],
  },
  {
    title: "Acknowledgment",
    description:
      "By accessing or using the Service, You agree to be bound by these Terms and Conditions.",
  },
  {
    title: "User Accounts",
    list: [
      "You must create an account to use our Service.",
      "You agree to keep your password confidential.",
    ],
  },
  {
    title: "Termination",
    description:
      "We may terminate or suspend Your Account immediately, without prior notice, for any reason, including, without limitation, if You breach the Terms.",
  },
  {
    title: "Limitation of Liability",
    description:
      "To the maximum extent permitted by applicable law, Verdant Capital shall not be liable for any indirect, punitive, incidental, special, consequential, or exemplary damages.",
  },
  {
    title: "Governing Law",
    description:
      "The laws of Kenya, excluding its conflicts of law rules, shall govern this Terms and Your use of the Service.",
  },
  {
    title: "Dispute Resolution",
    description:
      "Any disputes arising out of or relating to the Agreement, the breach thereof, or any use of the Platform (including commercial transactions conducted through the Platform) (“Disputes”) shall be submitted to confidential arbitration.",
  },
  {
    title: "Changes to These Terms and Conditions",
    description:
      "We reserve the right, at Our sole discretion, to modify or replace these Terms at any time.",
  },
  {
    title: "Contact Us",
    description:
      "If you have any questions about these Terms and Conditions, You can contact us.",
  },
];

const Terms = () => {
  return (
    <Container
      sx={{
        mt: 10,
      }}
    >
      <Typography variant="h4" gutterBottom>
        Terms and Conditions
      </Typography>

      {termsAndConditions.map((term, index) => (
        <Box key={index} mb={4}>
          <Typography variant="h5" gutterBottom>
            {term.title}
          </Typography>
          {
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              {term.list && (
                <List>
                  {term.list.map((listItem, listIndex) => (
                    <ListItem key={listIndex}>
                      <ListItemText primary={listItem} />
                    </ListItem>
                  ))}
                </List>
              )}
            </Box>
          }
          {term.content ? (
            term.content.map((contentItem, contentIndex) => (
              <Box key={contentIndex} mt={2}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Typography variant="h6">{contentItem.subtitle}</Typography>
                  <Typography variant="bodyRegular">
                    {contentItem.description}
                  </Typography>
                </Box>
                {contentItem.list && (
                  <List>
                    {contentItem.list.map((listItem, listIndex) => (
                      <ListItem key={listIndex}>
                        <Typography variant="bodyRegular">
                          {listItem}
                        </Typography>
                      </ListItem>
                    ))}
                  </List>
                )}
              </Box>
            ))
          ) : (
            <Typography variant="bodyRegular">{term.description}</Typography>
          )}
        </Box>
      ))}
    </Container>
  );
};

export default Terms;
