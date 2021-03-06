import React from 'react';
import styled from 'react-emotion';

import Layout from '../components/layout';

import {
  Banner,
  Button,
  Container,
  Heading3,
} from '../components/shared';

import { MOMENTUM_INTRO, MOMENTUM_QUOTES, storeLinks } from '../data';

import MomentumBanner from '../images/momentum-banner.jpg';
import QuoteList from '../components/QuoteList';

const ButtonWrapper = styled('div')`
  margin: 50px;
  text-align: center;
`;

const MomentumPage = () => (
  <Layout>
    <Banner
      image={MomentumBanner}
    />

    <Container>
      <section style={{ marginTop: 40 }}>
        {MOMENTUM_INTRO.map((para, index) => (
          <p
            key={index}
            style={{ margin: '10px' }}
          >
            {para}
          </p>
        ))}
      </section>

      <ButtonWrapper>
        <Button
          buttonText="Buy Now!"
          href={storeLinks.momentum}
          variant="contained"
        />
      </ButtonWrapper>

      <div style={{ margin: '20px', textAlign: 'center' }}>
        <Heading3>
          What others are saying...
        </Heading3>
      </div>

      <QuoteList quotes={MOMENTUM_QUOTES} />

      <ButtonWrapper>
        <Button
          buttonText="Buy Now!"
          href={storeLinks.momentum}
          variant="contained"
        />
      </ButtonWrapper>
    </Container>
  </Layout>
);

export default MomentumPage;
