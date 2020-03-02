import React from 'react';
import PropTypes from 'prop-types';
import {
  FaQuoteLeft,
  FaQuoteRight,
} from 'react-icons/fa';
import {
  Avatar,
  Flex,
  Heading6,
  LargeBody,
  FinePrint,
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
      margin: '20px auto',
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
        style={{ margin: '10px auto' }}
      >
        {quote.titles.map((title, index) => (
          <FinePrint
            key={index}
            style={{
              lineHeight: '100%',
              margin: 0,
            }}
          >
            {title}
          </FinePrint>
        ))}
      </div>

      {quote.avatar && <Avatar src={quote.avatar} />}
    </div>
    <div
      style={{
        flexBasis: 400,
        flexGrow: 1,
        textAlign: 'left',
      }}
    >
      <LargeBody
        style={{
          marginTop: 0,
        }}
      >
        <FaQuoteLeft style={{ marginRight: 5 }} />
        {quote.quote}
        <FaQuoteRight style={{ marginLeft: 5 }} />
      </LargeBody>
    </div>
  </Flex>
);

QuoteCard.propTypes = propTypes;

export default QuoteCard;
