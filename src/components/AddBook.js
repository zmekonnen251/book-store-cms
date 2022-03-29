import classes from './AddBook.module.css';

const AddBook = () => (
  <>
    <div className={classes.formContainer}>
      <form className={classes.form}>
        <input
          className={classes.inputBookTitle}
          type="text"
          placeholder="Book Title"
        />

        <input
          className={classes.inputBookAuthor}
          type="text"
          placeholder="Book Author"
        />
        <select name="Economy" className={classes.catagories}>
          <option>Catagories</option>
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
export default AddBook;
