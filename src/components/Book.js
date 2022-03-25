import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgressbar } from 'react-circular-progressbar';
import classes from './Book.module.css';
import 'react-circular-progressbar/dist/styles.css';

const percentage = 66;
const Book = (props) => {
  const { catagory, title, author } = props;

  return (
    <div>
      <div className={classes.bookCard}>
        <div className={classes.bookInfo}>
          <div>
            <p className={classes.catagory}>{catagory}</p>
            <h3 className={classes.title}>{title}</h3>
            <p className={classes.author}>{author}</p>
          </div>
          <div className={classes.action} style={{ flexDirection: 'row' }}>
            <button type="button">Comment</button>
            <button type="button">Remove</button>
            <button type="button">Edit</button>
          </div>
        </div>

        <div className={classes.circle}>
          <CircularProgressbar value={percentage} text={`${percentage}%`} />
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
  catagory: PropTypes.string.isRequired,
};

export default Book;
