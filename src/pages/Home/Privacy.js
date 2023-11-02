import React from "react";
import { Typography, Container, Box } from "@mui/material";

const PrivacyPolicy = () => {
  return (
    <Container
      sx={{
        mt: 10,
      }}
    >
      <Typography variant="h4" gutterBottom>
        Privacy Policy for Verdant Capital
      </Typography>

      <Typography variant="bodyRegular" paragraph>
        Effective date: September 23, 2023
      </Typography>

      <Box my={3}>
        <Typography variant="h6">Introduction</Typography>
        <Typography variant="bodyRegular" paragraph>
          At Verdant Capital, we are committed to protecting the privacy of our
          users. This Privacy Policy outlines the types of information we
          collect, how we use it, and the measures we take to safeguard it.
        </Typography>
      </Box>

      <Box my={3}>
        <Typography variant="h6">Data Collection</Typography>
        <Typography variant="bodyRegular" paragraph>
          We collect two types of information:
        </Typography>
        <Typography variant="bodyRegular" paragraph>
          1. Personal Information: This includes details such as your name,
          email address, and phone number.
        </Typography>
        <Typography variant="bodyRegular" paragraph>
          2. Non-Personal Information: Data about your device, browser, and
          interactions with our platform.
        </Typography>
      </Box>

      <Box my={3}>
        <Typography variant="h6">Data Use</Typography>
        <Typography variant="bodyRegular" paragraph>
          We use the data we collect to:
        </Typography>
        <Typography variant="bodyRegular" paragraph>
          1. Improve our platform's functionality and user experience.
        </Typography>
        <Typography variant="bodyRegular" paragraph>
          2. Respond to user queries and support requests.
        </Typography>
        <Typography variant="bodyRegular" paragraph>
          3. Send users relevant updates and promotional material (with user
          consent).
        </Typography>
      </Box>

      <Box my={3}>
        <Typography variant="h6">Data Sharing and Third Parties</Typography>
        <Typography variant="bodyRegular" paragraph>
          We do not sell or rent user data. We may share data with third-party
          service providers that aid our operations, but they are bound by
          confidentiality agreements.
        </Typography>
      </Box>

      <Box my={3}>
        <Typography variant="h6">User Rights</Typography>
        <Typography variant="bodyRegular" paragraph>
          Users can request access to their data, ask for corrections, or
          request data deletion by contacting us.
        </Typography>
      </Box>

      <Box my={3}>
        <Typography variant="h6">Changes to This Policy</Typography>
        <Typography variant="bodyRegular" paragraph>
          We may update our Privacy Policy from time to time. We will notify
          users of any significant changes.
        </Typography>
      </Box>

      <Box my={3}>
        <Typography variant="h6">Contact Us</Typography>
        <Typography variant="bodyRegular" paragraph>
          If you have any questions about this Privacy Policy, you can contact
          us at: privacy@verdantcapital.com
        </Typography>
      </Box>
    </Container>
  );
};

export default PrivacyPolicy;
