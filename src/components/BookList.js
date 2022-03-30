import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';
import AddBook from './AddBook';

const BookList = () => {
  const books = useSelector((state) => state.books);

  return (
    <>
      {books.map((book) => (
        <Book
          key={book.id}
          id={book.id}
          title={book.title}
          author={book.author}
          category={book.category}
        />
      ))}

      <AddBook />
    </>
  );
};

export default BookList;
