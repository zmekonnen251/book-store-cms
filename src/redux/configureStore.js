import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import booksReducer from './books/books';
import categoriesReducer from './catagories/categories';

const mainReducer = combineReducers({
  books: booksReducer,
  category: categoriesReducer,
});

const store = createStore(mainReducer, applyMiddleware(thunk));

export default store;
