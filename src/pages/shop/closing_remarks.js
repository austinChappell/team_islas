// External Dependencies
import React from 'react';

// Internal Dependencies
import { booksLookup } from '../../data/books';
import BookPage from '../../components/BookPage';

// Local Variables
const book = booksLookup.closingRemarks;

// Component Definition
const ClosingRemarksPage = () => (
  <BookPage book={book} />
);

export default ClosingRemarksPage;
