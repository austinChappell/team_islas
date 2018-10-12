import React from 'react';

const Flex = ({
  alignItems = 'center',
  children,
  flexDirection = 'row',
  justifyContent = 'flex-start',
  ...props,
}) => (
  <div
    style={{
      alignItems,
      display: 'flex',
      flexDirection,
      justifyContent,
    }}
    {...props}
  >
    {children}
  </div>
)

export default Flex;
