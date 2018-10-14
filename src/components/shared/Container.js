import React from 'react';

const Container = ({ children, style, ...props }) => (
  <div
    style={{
      margin: '0 auto',
      maxWidth: 960,
      padding: '20px 1.0875rem',
      width: '95%',
      ...style,
    }}
    {...props}
  >
    {children}
  </div>
);

export default Container;
