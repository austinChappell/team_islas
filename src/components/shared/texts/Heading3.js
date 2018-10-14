import React from 'react';
import {
  COLORS,
  FONT_FAMILIES,
  FONT_SIZES,
} from '../../../constants';

export const Heading3 = ({
  children,
  light = false,
  style = {},
}) => (
  <h3
    style={{
      color: light ? COLORS.FONT.LIGHT : COLORS.FONT.DARK,
      fontFamily: FONT_FAMILIES.HEADING,
      fontSize: FONT_SIZES.HEADING_3,
      ...style,
    }}
  >
    {children}
  </h3>
);
