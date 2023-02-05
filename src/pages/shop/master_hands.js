// External Dependencies
import React from 'react';

// Internal Dependencies
import { booksLookup } from '../../data/books';
import BookPage from '../../components/BookPage';

// Local Variables
const book = booksLookup.masterHands;

// Component Definition
const MasterHandsPage = () => (
  <BookPage book={book} />
);

export default MasterHandsPage;
