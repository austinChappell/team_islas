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
import { storeLinks } from '../data';

const homeLayout = css({
  backgroundImage: `url(${HomeBg})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  textAlign: 'center',
});

const IndexPage = () => {
  const handleNavigateToMomentum = () => {
    navigate('/momentum');
  };

  return (
    <Layout
      className={homeLayout}
      overlayColor="rgba(0, 0, 0, 0.8)"
    >
      <Container>
        <div style={{ margin: 50 }}>
          <div style={{ marginBottom: 40 }}>
            <Logo
              color="#ffffff"
              size={120}
            />
          </div>

          <Heading1 light>
            New Release - Momentum!
          </Heading1>

          <div style={{ margin: '40px 0' }}>
            <LargeBody light>
              A collection of exercises, etudes, and solos designed to develop the physical and mental control necessary for self-expression through two-mallet percussion.
            </LargeBody>
          </div>

          <Flex justifyContent="center">
            <div style={{ marginRight: 12 }}>
              <Button
                onClick={handleNavigateToMomentum}
                variant="contained"
              >
                Learn More
              </Button>
            </div>

            <BuyNowButton
              buttonText="Buy Now!"
              href={storeLinks.momentum}
              variant="contained"
            />
          </Flex>
        </div>
      </Container>
    </Layout>
  );
};

export default IndexPage;
