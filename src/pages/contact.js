import React from 'react';
import { Container } from '@mui/material';

import Layout from '../components/layout';
import { Heading2 } from '../components/shared';

const ContactPage = () => (
  <Layout>
    <Container maxWidth="md">
      <Heading2>
        Thank you for contacting us!
      </Heading2>
    </Container>
  </Layout>
);

export default ContactPage;
