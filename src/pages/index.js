import React from 'react';
import { css } from 'react-emotion';

import Layout from '../components/layout';

import {
  Container,
  Heading1,
  ResponsiveVideoPlayer,
} from '../components/shared';

import HomeBg from '../images/home-bg.jpg';
import { COLORS } from '../constants';

const homeLayout = css({
  backgroundImage: `url(${HomeBg})`,
  backgroundSize: 'cover',
  textAlign: 'center',
});

const videoWrapper = css({
  border: `4px solid ${COLORS.FONT.LIGHT}`,
});

const IndexPage = () => (
  <Layout
    className={homeLayout}
    overlayColor="rgba(0, 0, 0, 0.5)"
  >
    <Container>
      <div>
        <Heading1 light>
          New Album Coming Soon!
        </Heading1>
      </div>
      <div style={{ margin: '0 auto', width: '90%' }}>
        <ResponsiveVideoPlayer
          className={videoWrapper}
          url="https://youtu.be/Lnul3DwS_bc"
        />
      </div>
    </Container>
  </Layout>
);

export default IndexPage;
