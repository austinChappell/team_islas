// External Dependencies
import React from 'react';

// Internal Dependencies
import { booksLookup } from '../../data/books';
import BookPage from '../../components/BookPage';

// Local Variables
const book = booksLookup.hiddenAmongstFallenLeaves;

// Component Definition
const HiddenAmongstFallenLeavesPage = () => (
  <BookPage book={book} />
);

export default HiddenAmongstFallenLeavesPage;
