import { v4 as uuidv4 } from 'uuid';
// Actions
const ADD_BOOK = 'book-store-cms/Books/ADD';
const REMOVE_BOOK = 'book-store-cms/Books/REMOVE';

// Reducer
const books = [];
const booksReducer = (state = books, action = {}) => {
  switch (action.type) {
    // do reducer stuff
    case ADD_BOOK:
      return [
        ...state,
        {
          id: uuidv4(),
          title: action.payLoad.title,
          category: action.payLoad.category,
        },
      ];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payLoad.id);
    default:
      return state;
  }
};

// Action Creators
export const addBook = (title, category, author) => ({
  type: ADD_BOOK,
  payLoad: {
    title,
    author,
    category,
  },
});

export const removeBook = (id) => ({
  type: REMOVE_BOOK,
  payLoad: {
    id,
  },
});

export default booksReducer;
