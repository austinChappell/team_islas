import React from 'react';
import { css } from 'react-emotion';
import { Button } from '@material-ui/core';
import { navigate } from 'gatsby';

import Layout from '../components/layout';

import {
  Button as BuyNowButton,
  Container,
  Heading1,
  LargeBody,
  Flex,
} from '../components/shared';


import HomeBg from '../images/home-bg.jpg';
import Logo from '../components/shared/Logo';
import { BIOS, storeLinks } from '../data';
import BioSection from '../components/BioSection';

const homeLayout = css({
  backgroundImage: `url(${HomeBg})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '100vh',
  textAlign: 'center',
});

const IndexPage = () => {
  return (
    <Layout>
      <div
        className={homeLayout}
      >
        <div
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            height: '100%',
          }}
        >
          <Container
            style={{
              alignItems: 'center',
              display: 'flex',
              justifyContent: 'center',
              height: '100%',
            }}
          >
            <Logo
              color="#ffffff"
              size={240}
            />
          </Container>
        </div>
      </div>

      <Container
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 40,
          padding: 40,
        }}
      >
        {BIOS.map(bio => (
          <BioSection key={bio.title} {...bio} />
        ))}
      </Container>
    </Layout>
  );
};

export default IndexPage;
