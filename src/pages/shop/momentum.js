// External Dependencies
import React from 'react';

// Internal Dependencies
import { booksLookup } from '../../data/books';
import BookPage from '../../components/BookPage';

// Local Variables
const book = booksLookup.momentum;

// Component Definition
const MomentumPage = () => (
  <BookPage book={book} />
);

export default MomentumPage;
