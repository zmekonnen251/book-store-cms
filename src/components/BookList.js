import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadBook } from '../redux/books/books';
import Book from './Book';
import AddBook from './AddBook';

const BookList = () => {
  const dispatch = useDispatch();

  const books = useSelector((state) => state.books);

  useEffect(() => {
    dispatch(loadBook());
  }, []);

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
