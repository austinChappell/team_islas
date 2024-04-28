// External Dependencies
import React from 'react';

// Internal Dependencies
import { booksLookup } from '../../data/books';
import BookPage from '../../components/BookPage';

// Local Variables
const book = booksLookup.playersGuide;

// Component Definition
const PlayersGuidePage = () => (
  <BookPage book={book} />
);

export default PlayersGuidePage;
