import { combineReducers } from 'redux';
import booksReducer from './books/books';
import categoriesReducers from './categories/categories';

export default combineReducers({
  booksReducer,
  categoriesReducers,
});
