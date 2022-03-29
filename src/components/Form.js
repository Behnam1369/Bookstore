import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

function Form() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [genre, setGenre] = useState('');
  const handleTitleInput = (e) => {
    setTitle(e.target.value);
  };

  const handleAuthorInput = (e) => {
    setAuthor(e.target.value);
  };

  const handleGenreChange = (e) => {
    setGenre(e.target.value);
  };

  const resetForm = () => {
    setTitle('');
    setAuthor('');
    setGenre('');
  };
  const dispatch = useDispatch();
  return (
    <form>
      <input type="text" placeholder="Title" value={title} onChange={(e) => handleTitleInput(e)} />
      <input type="text" placeholder="Author" value={author} onChange={(e) => handleAuthorInput(e)} />
      <select value={genre} onChange={(e) => handleGenreChange(e)} placeholder="Genre">
        <option value="">Select Genre</option>
        <option value="Action">Action</option>
        <option value="Economy">Economy</option>
        <option value="Science Fiction">Science Fiction</option>
      </select>
      <button
        type="button"
        onClick={() => {
          dispatch(addBook({ title, author, genre }));
          resetForm();
        }}
      >
        ADD BOOK

      </button>
    </form>
  );
}

export default Form;
