import React from 'react';

import BioCard2 from '../components/BioCard2';
import ContactForm from '../components/ContactForm';
import Layout from '../components/layout';

import { Container, Flex } from '../components/shared';

import { BIOS } from '../data';

const AboutPage = () => (
  <Layout>
    <Container>
      <Flex
        alignItems="flex-start"
        justifyContent="center"
      >
        {BIOS.map((bio, index) => (
          <div
            key={index}
            style={{
              margin: '15px',
            }}
          >
            <BioCard2 user={bio} />
          </div>
        ))}
      </Flex>

      <ContactForm />
    </Container>
  </Layout>
);

export default AboutPage;
