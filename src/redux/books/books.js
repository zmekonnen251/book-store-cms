import { v4 as uuidv4 } from 'uuid';
// Actions
const ADD_BOOK = 'book-store-cms/Books/ADD';
const REMOVE_BOOK = 'book-store-cms/Books/REMOVE';

// Reducer
const booksReducer = (state = [], action = {}) => {
  switch (action.type) {
    // do reducer stuff
    case ADD_BOOK:
      return [
        ...state,
        {
          bookId: uuidv4(),
          bookTitle: action.payLoad.bookTitle,
          bookCategory: action.payLoad.bookCategory,
        },
      ];
    case REMOVE_BOOK:
      return state.filter((book) => book.bookId !== action.payLoad.id);
    default:
      return state;
  }
};

// Action Creators
export const addBook = (bookCategory, bookAuthor) => ({
  type: ADD_BOOK,
  payLoad: {
    bookAuthor,
    bookCategory,
  },
});

export const removeBook = (bookId) => ({
  type: REMOVE_BOOK,
  payLoad: {
    bookId,
  },
});

export default booksReducer;
