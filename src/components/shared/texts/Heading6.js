import React from 'react';
import { Typography } from '@mui/material';

import {
  FONT_SIZES,
} from '../../../constants';

export const Heading6 = ({
  children,
  style = {},
}) => (
  <Typography
    component="h6"
    fontWeight="bold"
    sx={{
      fontSize: FONT_SIZES.HEADING_6,
      ...style,
    }}
    variant="h6"
  >
    {children}
  </Typography>
);
