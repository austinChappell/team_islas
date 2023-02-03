// External Dependencies
import React from 'react';

// Internal Dependencies
import { booksLookup } from '../../data/books';
import BookPage from '../../components/BookPage';

// Local Variables
const book = booksLookup.hymnOfTheShieldMaiden;

// Component Definition
const HymnOfTheShieldMaidenPage = () => (
  <BookPage book={book} />
);

export default HymnOfTheShieldMaidenPage;
