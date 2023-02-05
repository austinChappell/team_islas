import React from 'react';
import { Typography } from '@mui/material';

import {
  FONT_SIZES,
} from '../../../constants';

export const Heading4 = ({
  children,
  style = {},
}) => (
  <Typography
    component="h4"
    fontWeight="bold"
    sx={{
      fontSize: FONT_SIZES.HEADING_4,
      ...style,
    }}
    variant="h4"
  >
    {children}
  </Typography>
);
