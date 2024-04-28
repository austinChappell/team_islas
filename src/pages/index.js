import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { StaticImage } from 'gatsby-plugin-image';

import Layout from '../components/layout';
import Logo from '../components/shared/Logo';
import { BIOS } from '../data';
import BioSection from '../components/BioSection';

import '../components/Home.css';
import { NAVBAR_HEIGHT } from '../components/header';
import BuyNowButtonWrapper from '../components/BuyNowButtonWrapper';
import BuyNowButton from '../components/ButNowButton';
import { booksLookup } from '../data/books';

const promoBook = booksLookup.playersGuide;

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
            gap: { xs: 4, sm: 6 },
            paddingTop: '20vh',
          }}
        >
          <Logo
            color="#ffffff"
            size={200}
          />

          <Container maxWidth="sm">
            <Typography
              align="center"
              color="inherit"
              sx={{ fontSize: { xs: 28, sm: 30 } }}
              variant="h4"
            >
              The combined musical power of husband-wife duo Doug Bush and Patricia Islas
            </Typography>

            {promoBook && (
              <Box
                marginTop={2}
                paddingY={4}
                sx={{
                  alignItems: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <Box
                  alt={promoBook.title}
                  boxShadow="0px 0px 2px 2px #eee"
                  component="img"
                  maxHeight={300}
                  marginBottom={4}
                  src={promoBook.coverImage}
                />

                <BuyNowButton href={promoBook.link} />
              </Box>
            )}
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
