import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';
import rootReducer from './redux/configureStore';

const store = createStore(rootReducer);

// Tests
// store.dispatch({
//   type: 'book-store/books/ADD BOOK',
//   book:
//     { genre: 'Comedy', title: 'Harry Potter', author: 'JK Rowling' },
// });
// store.dispatch({
//   type: 'book-store/books/ADD BOOK',
//   book:
//     { genre: 'football', title: 'I am footbAll', author: 'Zlatan Ibrahimovic' },
// });
// store.dispatch({ type: 'book-store/books/REMOVE BOOK', index: 1 });
// console.log(store.getState());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
