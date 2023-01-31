import React from 'react';

import Layout from '../../components/layout';
import QuoteList from '../../components/QuoteList';
import VideoList from '../../components/VideoList';

import {
  Banner,
  Button,
  Container,
  Heading3,
} from '../../components/shared';

import {
  MASTER_HANDS_INTRO,
  MASTER_HANDS_QUOTES,
  MASTER_HANDS_VIDS,
  storeLinks,
} from '../../data';

import MasterHandsBanner from '../../images/master-hands-banner.jpg';
import BuyNowButtonWrapper from '../../components/BuyNowButtonWrapper';

const MasterHandsPage = () => (
  <Layout>
    <Banner
      image={MasterHandsBanner}
    />
    <Container>

      <section style={{ marginTop: 40 }}>
        {MASTER_HANDS_INTRO.map((para, index) => (
          <p
            key={index}
            style={{ margin: '10px' }}
          >
            {para}
          </p>
        ))}
      </section>

      <BuyNowButtonWrapper>
        <Button
          buttonText="Buy Now!"
          href={storeLinks.masterHands}
          variant="contained"
        />
      </BuyNowButtonWrapper>

      <div style={{ marginTop: 20, textAlign: 'center' }}>
        <Heading3>
          Watch
        </Heading3>
      </div>

      <VideoList videos={MASTER_HANDS_VIDS} />

      <div style={{ margin: '20px', textAlign: 'center' }}>
        <Heading3>
          What others are saying...
        </Heading3>
      </div>

      <QuoteList quotes={MASTER_HANDS_QUOTES} />

      <BuyNowButtonWrapper>
        <Button
          buttonText="Buy Now!"
          href={storeLinks.masterHands}
          variant="contained"
        />
      </BuyNowButtonWrapper>

    </Container>
  </Layout>
);

export default MasterHandsPage;
