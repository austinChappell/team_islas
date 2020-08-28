import React from 'react';
import { css } from 'react-emotion';

import Layout from '../components/layout';

import {
  Container,
  Heading1,
} from '../components/shared';


import HomeBg from '../images/home-bg.jpg';

const homeLayout = css({
  backgroundImage: `url(${HomeBg})`,
  backgroundSize: 'cover',
  textAlign: 'center',
});

const IndexPage = () => {
  console.log('index page');

  return (
    <Layout
      className={homeLayout}
      overlayColor="rgba(0, 0, 0, 0.5)"
    >
      <Container>
        <div style={{ margin: 50 }}>
          <Heading1 light>
            New Album Coming Soon!
          </Heading1>
        </div>
      </Container>
    </Layout>
  );
};

export default IndexPage;
