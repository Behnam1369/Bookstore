import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';
import Progress from './Progress';

function Book(props) {
  const dispatch = useDispatch();
  const [removing, setRemoving] = useState(false);
  const {
    itemid, category, title, author,
  } = props;
  const [progress, setProgress] = useState(Math.floor(Math.random() * 100) + 1);

  const updateProgress = () => {
    setProgress(Math.floor(Math.random() * 100) + 1);
  };

  return (
    <div className="book">
      <div className="bookInfo">
        <h4>{category}</h4>
        <h2>{title}</h2>
        <h3>{author}</h3>
        <button type="button" className="btnComments">Comments</button>
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
        <button type="button" className="btnEdit">Edit</button>
      </div>
      <div className="otherInfo">
        <Progress progress={progress} />
        <div className="chapterInfo">
          <h5>Current Chapter</h5>
          <h6>
            Chapter17
          </h6>
          <button type="button" onClick={updateProgress}>UPDATE PROGRESS</button>
        </div>
      </div>
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
