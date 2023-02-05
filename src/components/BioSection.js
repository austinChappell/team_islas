import {
  Card,
  CardContent,
  CardHeader,
  Typography,
} from '@mui/material';
import React from 'react';
import PropTypes from 'prop-types';

import './BioSection.css';

const BioSection = ({
  paragraphs,
  renderImage,
  title,
}) => (
  <Card>
    {renderImage()}

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
  // eslint-disable-next-line react/forbid-prop-types
  paragraphs: PropTypes.arrayOf(PropTypes.object).isRequired,
  renderImage: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

BioSection.propTypes = propTypes;

export default BioSection;
