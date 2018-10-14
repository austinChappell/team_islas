import React from 'react';
import {
  COLORS,
  FONT_FAMILIES,
  FONT_SIZES,
} from '../../../constants';

export const Heading2 = ({
  children,
  light = false,
  style = {},
}) => (
  <h2
    style={{
      color: light ? COLORS.FONT.LIGHT : COLORS.FONT.DARK,
      fontFamily: FONT_FAMILIES.HEADING,
      fontSize: FONT_SIZES.HEADING_2,
      ...style,
    }}
  >
    {children}
  </h2>
);
