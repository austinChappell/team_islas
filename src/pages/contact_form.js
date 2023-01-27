import React from 'react';

import ContactForm from '../components/ContactForm';
import Layout from '../components/layout';

import { Container } from '../components/shared';

const ContactFormPage = () => (
  <Layout>
    <Container>
      <ContactForm />
    </Container>
  </Layout>
);

export default ContactFormPage;
