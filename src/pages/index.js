import React from 'react';
import { css } from '@emotion/css';
import { Typography } from '@material-ui/core';

import Layout from '../components/layout';
import { Container } from '../components/shared';
import HomeBg from '../images/home-bg.jpg';
import Logo from '../components/shared/Logo';
import { BIOS } from '../data';
import BioSection from '../components/BioSection';

const homeLayout = css({
  backgroundImage: `url(${HomeBg})`,
  backgroundSize: 'cover',
  backgroundPosition: '45%',
  height: '100vh',
  textAlign: 'center',
});

const IndexPage = () => (
  <Layout excludePaddingTop>
    <div
      className={homeLayout}
    >
      <div
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          height: '100%',
        }}
      >
        <Container
          style={{
            alignItems: 'center',
            color: '#ffffff',
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            gap: 40,
            paddingTop: '20vh',
          }}
        >
          <Logo
            color="#ffffff"
            size={240}
          />

          <Typography
            color="inherit"
            variant="h4"
          >
            The combined musical power of husband-wife duo Doug Bush and Patricia Islas
          </Typography>
        </Container>
      </div>
    </div>

    <Container
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 40,
        padding: 40,
      }}
    >
      {BIOS.map(bio => (
        <BioSection key={bio.title} {...bio} />
      ))}
    </Container>
  </Layout>
);

export default IndexPage;
