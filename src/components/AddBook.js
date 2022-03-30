import { useDispatch } from 'react-redux';
import React, { useState } from 'react';
import { addBook } from '../redux/books/books';

import classes from './AddBook.module.css';

const AddBook = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  const authorChangeHandler = (event) => {
    setAuthor(event.target.value);
  };

  const categoryChangeHandler = (event) => {
    setCategory(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    dispatch(addBook(title, author, category));
    setAuthor('');
    setTitle('');
  };

  return (
    <>
      <div className={classes.formContainer}>
        <form className={classes.form} onSubmit={formSubmitHandler}>
          <input
            className={classes.inputBookTitle}
            type="text"
            placeholder="Book Title"
            onChange={titleChangeHandler}
            value={title}
          />

          <input
            className={classes.inputBookAuthor}
            type="text"
            placeholder="Book Author"
            onChange={authorChangeHandler}
            value={author}
          />
          <select
            name="Economy"
            className={classes.catagories}
            onChange={categoryChangeHandler}
          >
            <option defaultValue="Not-Set">Catagories</option>
            <option value="Economy">Economy</option>
            <option value="Action">Action</option>
            <option value="Science Fiction">Science Fiction</option>
          </select>
          <button className={classes.button} type="submit">
            Add Book
          </button>
        </form>
      </div>
    </>
  );
};
export default AddBook;
