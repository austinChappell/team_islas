import React from 'react';
import { Container } from '@mui/material';

import Layout from '../../components/layout';
import QuoteList from '../../components/QuoteList';
import VideoList from '../../components/VideoList';
import {
  Banner,
  Heading3,
} from '../../components/shared';
import {
  SUPER_HANDS_INTRO,
  SUPER_HANDS_QUOTES,
  SUPER_HANDS_VIDS,
  storeLinks,
} from '../../data';
import SuperHandsBanner from '../../images/super-hands-banner.jpg';
import BuyNowButtonWrapper from '../../components/BuyNowButtonWrapper';
import BuyNowButton from '../../components/ButNowButton';

const SuperHandsPage = () => (
  <Layout>
    <Banner
      image={SuperHandsBanner}
    />

    <Container>
      <section style={{ marginTop: 40 }}>
        {SUPER_HANDS_INTRO.map((para, index) => (
          <p
            key={index}
            style={{ margin: '10px' }}
          >
            {para}
          </p>
        ))}
      </section>

      <BuyNowButtonWrapper>
        <BuyNowButton href={storeLinks.superHands} />
      </BuyNowButtonWrapper>

      <div style={{ marginTop: 20, textAlign: 'center' }}>
        <Heading3>
          Watch
        </Heading3>
      </div>

      <VideoList videos={SUPER_HANDS_VIDS} />

      <div style={{ margin: '20px', textAlign: 'center' }}>
        <Heading3>
          What others are saying...
        </Heading3>
      </div>

      <QuoteList quotes={SUPER_HANDS_QUOTES} />

      <BuyNowButtonWrapper>
        <BuyNowButton href={storeLinks.superHands} />
      </BuyNowButtonWrapper>

    </Container>
  </Layout>
);

export default SuperHandsPage;
