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
      <ButtonWrapper>
        <Button
          buttonText="Buy Now!"
          href="http://www.lulu.com/shop/doug-bush/super-hands/paperback/product-23195361.html#pageProduct"
          style={{ backgroundColor: '#ff0000' }}
          variant="contained"
        />
      </ButtonWrapper>

      <VideoList videos={SUPER_HANDS_VIDS} />

      <div style={{ margin: 20, textAlign: 'center' }}>
        <Heading3>
          What others are saying...
        </Heading3>
      </div>

      <QuoteList quotes={SUPER_HANDS_QUOTES} />

      <ButtonWrapper>
        <Button
          buttonText="Buy Now!"
          href="http://www.lulu.com/shop/doug-bush/super-hands/paperback/product-23195361.html#pageProduct"
          style={{ backgroundColor: '#ff0000' }}
          variant="contained"
        />
      </ButtonWrapper>

    </Container>
  </Layout>
);

export default SuperHandsPage;
