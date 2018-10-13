import React from 'react';

const Flex = ({
  alignItems = 'center',
  children,
  flexDirection = 'row',
  flexWrap = 'wrap',
  justifyContent = 'flex-start',
  ...props
}) => (
  <div
    style={{
      alignItems,
      display: 'flex',
      flexDirection,
      flexWrap,
      justifyContent,
    }}
    {...props}
  >
    {children}
  </div>
);

export default Flex;
