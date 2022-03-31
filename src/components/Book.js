import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgressbar } from 'react-circular-progressbar';
import { useDispatch } from 'react-redux';
import classes from './Book.module.css';
import 'react-circular-progressbar/dist/styles.css';
import { removeBook } from '../redux/books/books';

const percentage = 66;
const Book = (props) => {
  const dispatch = useDispatch();
  const {
    id, title, author, category,
  } = props;

  const handleRemove = () => {
    dispatch(removeBook(id));
  };

  return (
    <div>
      <div className={classes.bookCard}>
        <div className={classes.bookInfo}>
          <div>
            <p className={classes.catagory}>{category}</p>
            <h3 className={classes.title}>{title}</h3>
            <p className={classes.author}>{author}</p>
          </div>
          <div className={classes.action} style={{ flexDirection: 'row' }}>
            <button type="button">Comment</button>
            <button onClick={handleRemove} type="button">
              Remove
            </button>
            <button type="button">Edit</button>
          </div>
        </div>
        <div className={classes.percentageContainer}>
          <div className={classes.circle}>
            <CircularProgressbar value={percentage} text={`${percentage}%`} />
          </div>
          <div className={classes.border} />
        </div>

        <div className={classes.progress}>
          <p>Current Chapter</p>
          <h2>Chapter 17</h2>
          <button type="button" className={classes.button}>
            Update progress
          </button>
        </div>
      </div>
    </div>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Book;
