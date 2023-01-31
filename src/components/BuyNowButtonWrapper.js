import React from 'react';
import { Box } from '@material-ui/core';
import PropTypes from 'prop-types';

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
