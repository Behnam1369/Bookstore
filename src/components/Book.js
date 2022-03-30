import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

function Book(props) {
  const dispatch = useDispatch();
  const [removing, setRemoving] = useState(false);
  const {
    itemid, category, title, author,
  } = props;
  return (
    <div className="book">
      <h4>{category}</h4>
      <h2>{title}</h2>
      <h3>{author}</h3>
      <button
        type="button"
        disabled={removing}
        onClick={async () => {
          setRemoving(true);
          await dispatch(removeBook(itemid));
        }}
      >
        {removing ? 'Removing...' : 'Remove'}

      </button>
    </div>
  );
}

Book.propTypes = {
  itemid: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
