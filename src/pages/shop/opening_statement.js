// External Dependencies
import React from 'react';

// Internal Dependencies
import { booksLookup } from '../../data/books';
import BookPage from '../../components/BookPage';

// Local Variables
const book = booksLookup.openingStatement;

// Component Definition
const OpeningStatementPage = () => (
  <BookPage book={book} />
);

export default OpeningStatementPage;
