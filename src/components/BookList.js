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

  return (
    <div>
      {loading ? 'Loading...'
        : books.map((el) => (
          <Book
            key={el.item_id}
            itemid={el.item_id}
            category={el.category}
            title={el.title}
            author={el.author}
          />
        ))}
      <Form />
    </div>
  );
}

export default BookList;
