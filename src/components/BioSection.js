import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from '@material-ui/core';
import React from 'react';
import PropTypes from 'prop-types';

import './BioSection.css';

const BioSection = ({
  image,
  paragraphs,
  title,
}) => (
  <Card>
    <CardMedia
      component="img"
      image={image}
    />

    <CardHeader title={title} />

    <CardContent>
      {paragraphs.map((para, index) => (
        <Typography
          color="inherit"
          gutterBottom
          key={index}
        >
          {para}
        </Typography>
      ))}
    </CardContent>
  </Card>
);

const propTypes = {
  image: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  paragraphs: PropTypes.arrayOf(PropTypes.object).isRequired,
  title: PropTypes.string.isRequired,
};

BioSection.propTypes = propTypes;

export default BioSection;
