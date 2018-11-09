import React from 'react';

const Avatar = ({
  alt,
  size = 100,
  src,
}) => (
  <img
    alt={alt}
    src={src}
    style={{
      borderRadius: '50%',
      boxShadow: '2px 2px 8px #999999',
      height: size,
      width: size,
    }}
  />
);

export default Avatar;
