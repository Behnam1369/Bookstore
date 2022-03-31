/* eslint-disable no-nested-ternary */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './Book';
import Form from './Form';
import { getBooks } from '../redux/books/books';

function BookList() {
  const {
    loading, books,
  } = useSelector((state) => state.booksReducer);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooks());
  }, []);

  let bookList = '';
  if (loading) {
    bookList = <h3>Loading...</h3>;
  } else if (books.length === 0) {
    bookList = <h3>There is no book in the list yet.</h3>;
  } else {
    bookList = books.map((el) => (
      <Book
        key={el.item_id}
        itemid={el.item_id}
        category={el.category}
        title={el.title}
        author={el.author}
      />
    ));
  }

  return (
    <div className="bookList">
      {bookList}
      <Form />
    </div>
  );
}

export default BookList;
