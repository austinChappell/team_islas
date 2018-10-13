import React from 'react';

import { COLORS } from '../../constants';

const Button = ({
  backgroundColor = COLORS.PRIMARY_1,
  buttonText = 'Submit',
  color = COLORS.FONT.LIGHT,
  onClick,
  unstyled = false,
}) => {
  return (
    <button
      onClick={(e) => onClick(e)}
      style={{
        backgroundColor: unstyled ? 'transparent' : backgroundColor,
        borderRadius: 5,
        border: 'none',
        color: unstyled ? COLORS.FONT.PRIMARY_1 : color,
        cursor: 'pointer',
      }}
    >
      {buttonText}
    </button>
  )
}

export default Button;
