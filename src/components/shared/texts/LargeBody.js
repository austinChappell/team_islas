import React from 'react';
import {
  COLORS,
  FONT_FAMILIES,
  FONT_SIZES,
} from '../../../constants';

export const LargeBody = ({
  children,
  light = false,
}) => (
  <p
    style={{
      color: light ? COLORS.FONT.LIGHT : COLORS.FONT.DARK,
      fontFamily: FONT_FAMILIES.BODY,
      fontSize: FONT_SIZES.LARGE_BODY,
      margin: '15px 0',
    }}
  >
    {children}
  </p>
);
