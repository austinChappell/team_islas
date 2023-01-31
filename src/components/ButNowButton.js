import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@mui/material';

const BuyNowButton = ({ href }) => (
  <Button
    href={href}
    variant="contained"
  >
    Buy Now!
  </Button>
);

const propTypes = {
  href: PropTypes.string.isRequired,
};

BuyNowButton.propTypes = propTypes;

export default BuyNowButton;
