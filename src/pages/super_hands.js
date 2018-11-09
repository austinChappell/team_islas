import React from 'react';
import styled from 'react-emotion';

import Layout from '../components/layout';
import QuoteList from '../components/QuoteList';
import VideoList from '../components/VideoList';

import {
  Banner,
  Button,
  Container,
  Heading3,
} from '../components/shared';

import {
  SUPER_HANDS_INTRO,
  SUPER_HANDS_QUOTES,
  SUPER_HANDS_VIDS,
} from '../data';

import SuperHandsBanner from '../images/super-hands-banner.jpg';

const ButtonWrapper = styled('div')`
  margin: 10px;
  text-align: center;
`;

const SuperHandsPage = () => (
  <Layout>
    <Banner
      image={SuperHandsBanner}
    />
    <Container>

      <div style={{ margin: '20px', textAlign: 'center' }}>
        <Heading3>
          Intro
        </Heading3>
      </div>

      {SUPER_HANDS_INTRO.map((para, index) => (
        <p
          key={index}
          style={{ margin: '10px' }}
        >
          {para}
        </p>
      ))}

      <ButtonWrapper>
        <Button
          buttonText="Buy Now!"
          href="http://www.lulu.com/shop/doug-bush/super-hands/paperback/product-23195361.html#pageProduct"
          variant="contained"
        />
      </ButtonWrapper>

      <div style={{ margin: '20px', textAlign: 'center' }}>
        <Heading3>
          Videos
        </Heading3>
      </div>

      <VideoList videos={SUPER_HANDS_VIDS} />

      <div style={{ margin: '20px', textAlign: 'center' }}>
        <Heading3>
          What others are saying...
        </Heading3>
      </div>

      <QuoteList quotes={SUPER_HANDS_QUOTES} />

      <ButtonWrapper>
        <Button
          buttonText="Buy Now!"
          href="http://www.lulu.com/shop/doug-bush/super-hands/paperback/product-23195361.html#pageProduct"
          variant="contained"
        />
      </ButtonWrapper>

    </Container>
  </Layout>
);

export default SuperHandsPage;
