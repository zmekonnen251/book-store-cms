import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
// Actions
const ADD_BOOK = 'book-store-cms/Books/ADD';
const REMOVE_BOOK = 'book-store-cms/Books/REMOVE';
const LOAD_BOOK = 'book-store-cms/Books/LOAD';
const URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/GYAdjo1WJonUGHjVFzfd/books/';

// Reducer
const books = [];
const booksReducer = (state = books, action = {}) => {
  switch (action.type) {
    // do reducer stuff
    case ADD_BOOK:
      return [...state, action.payLoad];
    case LOAD_BOOK:
      return [...state, ...action.payLoad];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payLoad.id);
    default:
      return state;
  }
};

// Action Creators
export const addBook = (book) => {
  const newBook = { item_id: uuidv4(), ...book };
  // Make a request for a user with a given ID
  return async (dispatch) => {
    await fetch(URL, {
      method: 'POST',
      body: JSON.stringify(newBook),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const newBookToState = { id: newBook.item_id, ...newBook };
    dispatch({ type: ADD_BOOK, payLoad: newBookToState });
  };
};

export const removeBook = (id) => async (dispatch) => {
  await fetch(URL + id, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: id,
    }),
  });
  dispatch({ type: REMOVE_BOOK, payLoad: { id } });
};

export const loadBook = () => {
  const URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/GYAdjo1WJonUGHjVFzfd/books';

  // Make a request for a user with a given ID
  return async (dispatch) => {
    const response = await axios.get(URL);
    const books = Object.keys(response.data).map((itemId) => ({
      id: itemId,
      ...response.data[itemId][0],
    }));
    dispatch({ type: LOAD_BOOK, payLoad: [...books] });
  };
};

export default booksReducer;
