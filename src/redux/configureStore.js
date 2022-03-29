import { combineReducers, createStore } from 'redux';
import booksReducer from './books/books';
import categoriesReducer from './catagories/categories';

const mainReducer = combineReducers({
  books: booksReducer,
  category: categoriesReducer,
});

const store = createStore(mainReducer);

export default store;
