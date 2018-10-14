import React from 'react';
import {
  COLORS,
  FONT_FAMILIES,
  FONT_SIZES,
} from '../../../constants';

export const FinePrint = ({
  children,
  light = false,
  style,
}) => (
  <p
    style={{
      color: light ? COLORS.FONT.LIGHT : COLORS.FONT.DARK,
      fontFamily: FONT_FAMILIES.BODY,
      fontSize: FONT_SIZES.FINE_PRINT,
      ...style,
    }}
  >
    {children}
  </p>
);
