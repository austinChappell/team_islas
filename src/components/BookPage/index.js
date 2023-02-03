// External Dependencies
import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import PropTypes from 'prop-types';

import '../Shop.css';

// Internal Dependencies
import BuyNowButtonWrapper from '../BuyNowButtonWrapper';
import BuyNowButton from '../ButNowButton';
import {
  Heading2, Heading3, Heading4,
} from '../shared';
import QuoteList from '../QuoteList';
import Layout from '../layout';
import VideoList from '../VideoList';

// Component Definition
const BookPage = ({
  book,
}) => {
  const testimonialCount = book.testimonials ? book.testimonials.length : 0;
  const videoCount = book.videos ? book.videos.length : 0;
  const testimonialAndVideoCount = testimonialCount + videoCount;

  return (
    <Layout>
      <Box
        alignItems="center"
        display="flex"
        flexDirection="column"
        gap={1}
        marginTop={8}
      >
        <Heading2>
          {book.title}
        </Heading2>

        <Heading4>
          {book.authors.join(', ')}
        </Heading4>
      </Box>

      <Container>
        <section style={{ marginTop: 40 }}>
          <Box
            alignItems="flex-start"
            className="description-container"
            display="flex"
            gap={2}
          >
            <Box
              alt={book.title}
              component="img"
              src={book.coverImage}
              sx={{ maxHeight: 300 }}
            />

            <div>
              {book.description.map((paragraph, index) => (
                <Typography
                  gutterBottom
                  key={index}
                >
                  {paragraph}
                </Typography>
              ))}
            </div>
          </Box>
        </section>

        <BuyNowButtonWrapper>
          <BuyNowButton href={book.link} />
        </BuyNowButtonWrapper>

        {book.videos && book.videos.length > 0 && (
        <>
          <div style={{ marginTop: 20, textAlign: 'center' }}>
            <Heading3>
              Watch
            </Heading3>
          </div>

          <VideoList videos={book.videos} />
        </>
        )}

        {book.testimonials && book.testimonials.length > 0 && (
          <>
            <div style={{ margin: '20px', textAlign: 'center' }}>
              <Heading3>
                What others are saying...
              </Heading3>
            </div>

            <QuoteList quotes={book.testimonials} />
          </>
        )}

        {testimonialAndVideoCount > 3 && (
          <BuyNowButtonWrapper>
            <BuyNowButton href={book.link} />
          </BuyNowButtonWrapper>
        )}
      </Container>
    </Layout>
  );
};

const propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string.isRequired,
    authors: PropTypes.arrayOf(PropTypes.string).isRequired,
    coverImage: PropTypes.string.isRequired,
    description: PropTypes.arrayOf(PropTypes.string).isRequired,
    link: PropTypes.string.isRequired,
    testimonials: PropTypes.arrayOf(PropTypes.string),
    videos: PropTypes.arrayOf(PropTypes.shape({
      description: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      youtubeId: PropTypes.string.isRequired,
    })),
  }).isRequired,
};

BookPage.propTypes = propTypes;

export default BookPage;
