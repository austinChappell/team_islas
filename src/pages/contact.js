import React from 'react';
import { Box, Button, Container } from '@mui/material';

import Layout from '../components/layout';
import { Heading2 } from '../components/shared';

const ContactPage = () => (
  <Layout>
    <Container maxWidth="md">
      <Box
        alignItems="center"
        display="flex"
        flexDirection="column"
        gap={4}
        marginTop={4}
      >
        <Heading2 align="center">
          Thank you for contacting us!
        </Heading2>

        <Button
          href="/"
          variant="contained"
        >
          Back to Home
        </Button>
      </Box>
    </Container>
  </Layout>
);

export default ContactPage;
