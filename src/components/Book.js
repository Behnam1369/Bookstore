import React from 'react';
import PropTypes from 'prop-types';

function Book(props) {
  const { genre, title, author } = props;
  return (
    <div className="book">
      <h4>{genre}</h4>
      <h2>{title}</h2>
      <h3>{author}</h3>
      <button type="button">Remove</button>
    </div>
  );
}

Book.propTypes = {
  genre: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
