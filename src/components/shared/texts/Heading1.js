import React from 'react';
import {
  COLORS,
  FONT_FAMILIES,
  FONT_SIZES,
} from '../../../constants';

export const Heading1 = ({
  children,
  light = false,
  style = {},
}) => (
  <h1
    style={{
      color: light ? COLORS.FONT.LIGHT : COLORS.FONT.DARK,
      fontFamily: FONT_FAMILIES.HEADING,
      fontSize: FONT_SIZES.HEADING_1,
      ...style,
    }}
  >
    {children}
  </h1>
);
