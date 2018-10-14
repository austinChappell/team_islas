import React from 'react';
import Button from '@material-ui/core/Button';

import { COLORS } from '../../constants';

const CustomButton = ({
  backgroundColor = COLORS.PRIMARY_1,
  buttonText = 'Submit',
  color = COLORS.FONT.LIGHT,
  disabled = false,
  href = null,
  onClick,
  type = 'button',
  unstyled = false,
}) => {
  let bgColor = unstyled ? 'transparent' : backgroundColor;
  let textColor = unstyled ? COLORS.FONT.PRIMARY_1 : color;
  if (!unstyled && disabled) {
    bgColor = COLORS.DISABLED;
    textColor = COLORS.FONT.DARK_SOFT;
  }
  if (unstyled && disabled) {
    textColor = COLORS.DISABLED;
  }
  return (
    <Button
      disabled={disabled}
      href={href}
      onClick={e => onClick(e)}
      style={{
        alignItems: 'center',
        backgroundColor: bgColor,
        color: textColor,
      }}
      type={type}
      variant="contained"
    >
      {buttonText}
    </Button>
  );
};

export default CustomButton;
