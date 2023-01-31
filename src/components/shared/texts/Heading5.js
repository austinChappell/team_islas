import React from 'react';
import { Typography } from '@mui/material';
import {
  FONT_SIZES,
} from '../../../constants';

export const Heading5 = ({
  children,
  style = {},
}) => (
  <Typography
    component="h5"
    fontWeight="bold"
    sx={{
      fontSize: FONT_SIZES.HEADING_5,
      ...style,
    }}
    variant="h5"
  >
    {children}
  </Typography>
);
