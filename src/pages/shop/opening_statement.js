import React from 'react';
import styled from 'react-emotion';

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
  OPENING_STATEMENT_INTRO,
  OPENING_STATEMENT_QUOTES,
  OPENING_STATEMENT_VIDS,
  storeLinks,
} from '../../data';

import OpeningStatementBanner from '../../images/opening-statement-banner.jpg';

const ButtonWrapper = styled('div')`
  margin: 50px;
  text-align: center;
`;

const OpeningStatementPage = () => (
  <Layout>
    <Banner
      image={OpeningStatementBanner}
    />
    <Container>

      <section style={{ marginTop: 40 }}>
        {OPENING_STATEMENT_INTRO.map((para, index) => (
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
          href={storeLinks.openingStatement}
          variant="contained"
        />
      </ButtonWrapper>

      <div style={{ marginTop: 20, textAlign: 'center' }}>
        <Heading3>
          Watch
        </Heading3>
      </div>

      <VideoList videos={OPENING_STATEMENT_VIDS} />

      <div style={{ margin: '20px', textAlign: 'center' }}>
        <Heading3>
          What others are saying...
        </Heading3>
      </div>

      <QuoteList quotes={OPENING_STATEMENT_QUOTES} />

      <ButtonWrapper>
        <Button
          buttonText="Buy Now!"
          href={storeLinks.openingStatement}
          variant="contained"
        />
      </ButtonWrapper>

    </Container>
  </Layout>
);

export default OpeningStatementPage;
