import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBook } from '../redux/books/books';

function Form() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');
  const [adding, setAdding] = useState(false);
  const { books } = useSelector((state) => state.booksReducer);

  const handleTitleInput = (e) => {
    setTitle(e.target.value);
  };

  const handleAuthorInput = (e) => {
    setAuthor(e.target.value);
  };

  const handleGenreChange = (e) => {
    setCategory(e.target.value);
  };

  const resetForm = () => {
    setTitle('');
    setAuthor('');
    setCategory('');
    setAdding(false);
  };
  const dispatch = useDispatch();
  return (
    <form>
      <input type="text" placeholder="Title" value={title} onChange={(e) => handleTitleInput(e)} />
      <input type="text" placeholder="Author" value={author} onChange={(e) => handleAuthorInput(e)} />
      <select value={category} onChange={(e) => handleGenreChange(e)}>
        <option value="">Select Genre</option>
        <option value="Action">Action</option>
        <option value="Economy">Economy</option>
        <option value="Science Fiction">Science Fiction</option>
      </select>
      <button
        type="button"
        disabled={adding}
        onClick={async () => {
          const itemId = books.length === 0 ? 1 : 1 + parseInt(books[books.length - 1].item_id, 10);
          setAdding(true);
          const book = {
            item_id: itemId.toString(), title, author, category,
          };
          await dispatch(addBook(book));
          resetForm();
        }}
      >
        {adding ? 'ADDING... ' : 'ADD BOOK'}

      </button>
    </form>
  );
}

export default Form;
