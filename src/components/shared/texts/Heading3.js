import React from 'react';
import { Typography } from '@mui/material';

import {
  FONT_SIZES,
} from '../../../constants';

export const Heading3 = ({
  children,
  style = {},
}) => (
  <Typography
    component="h3"
    fontWeight="bold"
    sx={{
      fontSize: FONT_SIZES.HEADING_3,
      ...style,
    }}
    variant="h3"
  >
    {children}
  </Typography>
);
