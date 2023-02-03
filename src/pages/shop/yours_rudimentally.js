// External Dependencies
import React from 'react';

// Internal Dependencies
import { booksLookup } from '../../data/books';
import BookPage from '../../components/BookPage';

// Local Variables
const book = booksLookup.yoursRudimentally;

// Component Definition
const YoursRudimentallyPage = () => (
  <BookPage book={book} />
);

export default YoursRudimentallyPage;
