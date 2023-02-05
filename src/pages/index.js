import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { StaticImage } from 'gatsby-plugin-image';

import Layout from '../components/layout';
import Logo from '../components/shared/Logo';
import { BIOS } from '../data';
import BioSection from '../components/BioSection';

import '../components/Home.css';
import { NAVBAR_HEIGHT } from '../components/header';

const IndexPage = () => (
  <Layout excludePaddingTop>
    <Box
      height="100vh"
      position="relative"
    >
      <Box
        height={`calc(100vh - ${NAVBAR_HEIGHT}px)`}
        left={0}
        position="absolute"
        top={NAVBAR_HEIGHT}
        width="100%"
      >
        <StaticImage
          alt="Home background"
          className="home-bg"
          src="../images/home-bg.jpg"
        />
      </Box>

      <Box
        height="100%"
        left={0}
        position="absolute"
        sx={{
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
        }}
        top={0}
        width="100%"
      >
        <Container
          sx={{
            alignItems: 'center',
            color: '#ffffff',
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            gap: { xs: 4, sm: 8 },
            paddingTop: '20vh',
          }}
        >
          <Logo
            color="#ffffff"
            size={240}
          />

          <Container maxWidth="sm">
            <Typography
              align="center"
              color="inherit"
              sx={{ fontSize: { xs: 28, sm: 36 } }}
              variant="h4"
            >
              The combined musical power of husband-wife duo Doug Bush and Patricia Islas
            </Typography>
          </Container>
        </Container>
      </Box>
    </Box>

    <Container
      maxWidth="md"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 4,
        paddingY: 4,
      }}
    >
      {BIOS.map(bio => (
        <BioSection key={bio.title} {...bio} />
      ))}
    </Container>
  </Layout>
);

export default IndexPage;
