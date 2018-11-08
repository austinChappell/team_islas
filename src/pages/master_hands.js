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
  MASTER_HANDS_INTRO,
  MASTER_HANDS_QUOTES,
  MASTER_HANDS_VIDS,
} from '../data';

import MasterHandsBanner from '../images/master-hands-banner.jpg';

const ButtonWrapper = styled('div')`
  margin: 10px;
  text-align: center;
`;

const BUY_NOW_LINK = 'http://www.lulu.com/shop/doug-bush/master-hands/paperback/product-23773948.html#pageProduct';

const SuperHandsPage = () => (
  <Layout>
    <Banner
      image={MasterHandsBanner}
    />
    <Container>

      <h2 style={{ marginBottom: 20, marginTop: 40, textAlign: 'center' }}>
        Intro
      </h2>


      {MASTER_HANDS_INTRO.map((para, index) => (
        <p
          key={index}
          style={{ margin: 10 }}
        >
          {para}
        </p>
      ))}

      <ButtonWrapper>
        <Button
          buttonText="Buy Now!"
          href={BUY_NOW_LINK}
          variant="contained"
        />
      </ButtonWrapper>

      <h2 style={{ marginBottom: 20, marginTop: 40, textAlign: 'center' }}>
        Videos
      </h2>

      <VideoList videos={MASTER_HANDS_VIDS} />

      <div style={{ margin: 20, textAlign: 'center' }}>
        <Heading3>
          What others are saying...
        </Heading3>
      </div>

      <QuoteList quotes={MASTER_HANDS_QUOTES} />

      <ButtonWrapper>
        <Button
          buttonText="Buy Now!"
          href={BUY_NOW_LINK}
          variant="contained"
        />
      </ButtonWrapper>

    </Container>
  </Layout>
);

export default SuperHandsPage;
