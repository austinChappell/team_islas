import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';

const BuyNowButtonWrapper = ({ children }) => (
  <Box margin={8} textAlign="center">
    {children}
  </Box>
);

const propTypes = {
  children: PropTypes.node.isRequired,
};

BuyNowButtonWrapper.propTypes = propTypes;

export default BuyNowButtonWrapper;
