import React from 'react';
import { Container } from '@mui/material';

import ContactForm from '../components/ContactForm';
import Layout from '../components/layout';

const ContactFormPage = () => (
  <Layout>
    <Container maxWidth="md">
      <ContactForm />
    </Container>
  </Layout>
);

export default ContactFormPage;
