import React from 'react';
import { Typography } from '@mui/material';

import {
  FONT_SIZES,
} from '../../../constants';

export const Heading2 = ({
  children,
  style = {},
}) => (
  <Typography
    component="h2"
    fontWeight="bold"
    sx={{
      fontSize: FONT_SIZES.HEADING_2,
      ...style,
    }}
    variant="h2"
  >
    {children}
  </Typography>
);
