import React from 'react';
import PropTypes from 'prop-types';
import {
  FaQuoteLeft,
  FaQuoteRight,
} from 'react-icons/fa';
import { Avatar, Typography } from '@mui/material';
import {
  Flex,
  Heading6,
} from './shared';
import { COLORS } from '../constants';

const propTypes = {
  quote: PropTypes.objectOf(PropTypes.any).isRequired,
};

const QuoteCard = ({ quote }) => (
  <Flex
    alignItems="flex-start"
    justifyContent="center"
    style={{
      borderBottom: `1px solid ${COLORS.DISABLED}`,
      margin: '20px auto 0',
      padding: '20px 0',
    }}
  >
    <div
      style={{
        margin: '0 10px',
        textAlign: 'center',
        flexBasis: 250,
      }}
    >
      <Heading6>
        {quote.name}
      </Heading6>
      <div
        style={{ margin: '4px auto 8px' }}
      >
        {quote.titles.map((title, index) => (
          <Typography
            component="p"
            key={index}
            sx={{ lineHeight: 1 }}
            variant="caption"
          >
            {title}
          </Typography>
        ))}
      </div>

      {quote.avatar && (
        <Flex justifyContent="center">
          <Avatar sx={{ height: 100, width: 100 }} src={quote.avatar} />
        </Flex>
      )}
    </div>
    <div
      style={{
        flexBasis: 400,
        flexGrow: 1,
        textAlign: 'left',
      }}
    >
      <Typography>
        <FaQuoteLeft style={{ marginRight: 5 }} />
        {quote.quote}
        <FaQuoteRight style={{ marginLeft: 5 }} />
      </Typography>
    </div>
  </Flex>
);

QuoteCard.propTypes = propTypes;

export default QuoteCard;
