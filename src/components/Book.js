import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

function Book(props) {
  const dispatch = useDispatch();
  const {
    index, genre, title, author,
  } = props;
  return (
    <div className="book">
      <h4>{genre}</h4>
      <h2>{title}</h2>
      <h3>{author}</h3>
      <button type="button" onClick={() => dispatch(removeBook(index))}>Remove</button>
    </div>
  );
}

Book.propTypes = {
  index: PropTypes.number.isRequired,
  genre: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
