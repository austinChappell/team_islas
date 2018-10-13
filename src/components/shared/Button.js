import React from 'react';
import Button from '@material-ui/core/Button';

import { COLORS } from '../../constants';

const CustomButton = ({
  backgroundColor = COLORS.PRIMARY_1,
  buttonText = 'Submit',
  color = COLORS.FONT.LIGHT,
  href = null,
  onClick,
  unstyled = false,
}) => (
  <Button
    href={href}
    onClick={e => onClick(e)}
    style={{
      alignItems: 'center',
      backgroundColor: unstyled ? 'transparent' : backgroundColor,
      color: unstyled ? COLORS.FONT.PRIMARY_1 : color,
    }}
    variant="contained"
  >
    {buttonText}
  </Button>
);

export default CustomButton;
