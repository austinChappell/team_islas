import React from 'react';

import ReactPlayer from 'react-player';
import Layout from '../components/layout';

import {
  Container,
  Heading1,
  ResponsiveVideoPlayer,
} from '../components/shared';

const IndexPage = () => (
  <Layout>
    <Container>
      <div>
        <Heading1>
          New Album Coming Soon!
        </Heading1>
      </div>
      <ResponsiveVideoPlayer
        url="https://youtu.be/Lnul3DwS_bc"
      />
    </Container>
  </Layout>
);

export default IndexPage;
