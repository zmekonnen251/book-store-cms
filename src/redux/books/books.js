// Actions
const ADD_BOOK = 'book-store-cms/Books/ADD';
const REMOVE_BOOK = 'book-store-cms/Books/REMOVE';

// Reducer
const books = [];
const booksReducer = (state = books, action = {}) => {
  switch (action.type) {
    // do reducer stuff
    case ADD_BOOK:
      return [...state, action.payLoad];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payLoad.id);
    default:
      return state;
  }
};

// Action Creators
export const addBook = (newBook) => ({
  type: ADD_BOOK,
  payLoad: newBook,
});

export const removeBook = (id) => ({
  type: REMOVE_BOOK,
  payLoad: {
    id,
  },
});

export default booksReducer;
