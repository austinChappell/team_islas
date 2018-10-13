import React from 'react';

import Layout from '../components/layout';
import VideoList from '../components/VideoList';

import {
  Banner,
  Button,
  Container,
} from '../components/shared';

import { SUPER_HANDS_VIDS } from '../data';

import SuperHandsBanner from '../images/super-hands-banner.jpg';

const SuperHandsPage = () => (
  <Layout>
    <Banner
      image={SuperHandsBanner}
    />
    <Container>
      <div style={{ margin: 10, textAlign: 'center' }}>
        <Button
          buttonText="Buy Now!"
          href="http://www.lulu.com/shop/doug-bush/super-hands/paperback/product-23195361.html#pageProduct"
          style={{ backgroundColor: '#ff0000' }}
          variant="contained"
        />
      </div>
      <VideoList videos={SUPER_HANDS_VIDS} />
    </Container>
  </Layout>
);

export default SuperHandsPage;
