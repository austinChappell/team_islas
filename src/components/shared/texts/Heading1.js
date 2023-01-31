import React from 'react';
import { Typography } from '@mui/material';

import {
  FONT_SIZES,
} from '../../../constants';

export const Heading1 = ({
  children,
  style = {},
}) => (
  <Typography
    component="h1"
    fontWeight="bold"
    style={{
      fontSize: FONT_SIZES.HEADING_1,
      ...style,
    }}
    variant="h1"
  >
    {children}
  </Typography>
);
