import React from 'react';

const Container = ({ children, style, ...props }) => (
  <div
    style={{
      margin: '0 auto',
      maxWidth: 960,
      paddingLeft: '1.0875rem',
      paddingRight: '1.0875rem',
      ...style,
    }}
    {...props}
  >
    {children}
  </div>
);

export default Container;
