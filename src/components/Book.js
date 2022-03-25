import { CircularProgressbar } from 'react-circular-progressbar';
import classes from './Books.module.css';
import 'react-circular-progressbar/dist/styles.css';

const percentage = 66;
const Book = () => (
  <>
    <div className={classes.bookCard}>
      <div className={classes.bookInfo}>
        <div>
          <p className={classes.catagory}>The Hunger Games</p>
          <h3 className={classes.title}>Suzanne Collins</h3>
          <p className={classes.author}>Action</p>
        </div>
        <ul className={classes.action}>
          <li>Comment</li>
          <li>Remove</li>
          <li>Edit</li>
        </ul>
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
  </>
);

export default Book;
