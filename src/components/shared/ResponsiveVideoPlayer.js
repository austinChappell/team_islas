import React from 'react';
import PropTypes from 'prop-types';
import ReactPlayer from 'react-player';

const propTypes = {
  url: PropTypes.string.isRequired,
};

const ResponsiveVideoPlayer = ({ url }) => (
  <div
    style={{
      position: 'relative',
      paddingTop: '56.25%',
      flexGrow: 1,
    }}
  >
    <ReactPlayer
      height="100%"
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
      }}
      url={url}
      width="100%"
    />
  </div>
);

ResponsiveVideoPlayer.propTypes = propTypes;

export default ResponsiveVideoPlayer;
