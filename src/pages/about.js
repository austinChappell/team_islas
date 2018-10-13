import React from 'react';

import BioCard2 from '../components/BioCard2';
import Layout from '../components/layout';

import { Flex } from '../components/shared';

import { BIOS } from '../data';

const AboutPage = () => (
  <Layout>
    <Flex
      alignItems="flex-start"
      justifyContent="center"
    >
      {BIOS.map((bio, index) => (
        <div
          key={index}
          style={{
            margin: 15,
          }}
        >
          <BioCard2 user={bio} />
        </div>
      ))}
    </Flex>
  </Layout>
);

export default AboutPage;
