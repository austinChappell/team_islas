// External Dependencies
import React from 'react';

// Internal Dependencies
import { booksLookup } from '../../data/books';
import BookPage from '../../components/BookPage';

// Local Variables
const book = booksLookup.superHands;

// Component Definition
const SuperHandsPage = () => (
  <BookPage book={book} />
);

export default SuperHandsPage;
