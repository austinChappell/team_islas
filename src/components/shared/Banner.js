import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  image: PropTypes.string.isRequired,
};

const Banner = ({ image }) => (
  <div
    style={{
      backgroundImage: `url(${image})`,
      backgroundSize: 'cover',
      height: 300,
      width: '100vw',
    }}
  />
);

Banner.propTypes = propTypes;

export default Banner;
