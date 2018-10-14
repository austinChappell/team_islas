import React from 'react';
import PropTypes from 'prop-types';

import QuoteCard from './QuoteCard';

const propTypes = {
  quotes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const QuoteList = ({ quotes }) => (
  <div>
    {quotes.map((quote, index) => <QuoteCard key={index} quote={quote} />)}
  </div>
);

QuoteList.propTypes = propTypes;

export default QuoteList;
