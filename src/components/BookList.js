import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useSelector } from 'react-redux';
import Book from './Book';
import Form from './Form';

function BookList() {
  const books = useSelector((state) => state.books);
  return (
    <div>
      {books.map((el, i) => (
        <Book
          key={uuidv4()}
          index={i}
          genre={el.genre}
          title={el.title}
          author={el.author}
        />
      ))}
      <Form />
    </div>
  );
}

export default BookList;
