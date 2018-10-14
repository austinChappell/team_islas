import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { css } from 'react-emotion';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css'; // eslint-disable-line

import QuoteCard from './QuoteCard';

import { COLORS } from '../constants';

import {
  SUPER_HANDS_QUOTES,
} from '../data';

const carouselStyle = css`
  background-color: ${COLORS.FONT.LIGHT};
  height: 100%;
`;

console.log({ SUPER_HANDS_QUOTES });

const QuoteSlider = () => (
  <Carousel
    autoPlay
    className={carouselStyle}
    infiniteLoop
    stopOnHover={false}
    showThumbs={false}
  >
    {SUPER_HANDS_QUOTES.map((quote, index) => (
      <div
        key={index}
        className={carouselStyle}
      >
        <QuoteCard
          quote={quote}
        />
      </div>
    ))}
  </Carousel>
);

export default QuoteSlider;
