import React from 'react';
import {
  COLORS,
  FONT_FAMILIES,
  FONT_SIZES,
} from '../../../constants';

export const Heading6 = ({
  children,
  light = false,
  style = {},
}) => (
  <h6
    style={{
      color: light ? COLORS.FONT.LIGHT : COLORS.FONT.DARK,
      fontFamily: FONT_FAMILIES.HEADING,
      fontSize: FONT_SIZES.HEADING_6,
      ...style,
    }}
  >
    {children}
  </h6>
);
