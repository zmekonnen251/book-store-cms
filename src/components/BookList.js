import React from 'react';
import Book from './Book';
import AddBook from './AddBook';

const books = [
  {
    key: 1,
    title: 'The hunger games',
    catagory: 'Action',
    author: 'Suzanne Collins',
  },
  {
    key: 2,
    title: 'Dune',
    catagory: 'Science Fiction',
    author: 'Frank Herbert',
  },
];

const BookList = () => (
  <>
    {books.map((book) => (
      <Book
        key={book.key}
        title={book.title}
        author={book.author}
        catagory={book.catagory}
      />
    ))}

    <AddBook />
  </>
);

export default BookList;
