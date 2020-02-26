import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  image: PropTypes.string.isRequired,
};

const Banner = ({ image }) => (
  <div
    style={{
      backgroundImage: `url(${image})`,
      backgroundPosition: '0',
      backgroundSize: 'cover',
      height: '33vw',
      width: '100vw',
    }}
  />
);

Banner.propTypes = propTypes;

export default Banner;
