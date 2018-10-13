import React from 'react';
import { COLORS } from '../../constants';

const Card = ({ children }) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
      padding: 40,
      position: 'relative',
      borderRadius: 20,
      border: `1px solid ${COLORS.DISABLED}`,
    }}
  >
    {children}
  </div>
)

export default Card;
