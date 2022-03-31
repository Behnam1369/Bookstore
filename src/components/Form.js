import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBook } from '../redux/books/books';

function Form() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');
  const [adding, setAdding] = useState(false);
  const { books } = useSelector((state) => state.booksReducer);
  const [message, setMessage] = useState('');

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
    setMessage('');
    setAdding(false);
  };
  const dispatch = useDispatch();
  return (
    <form>
      <h2>ADD NEW BOOK</h2>
      <input type="text" placeholder="Title" value={title} onChange={(e) => handleTitleInput(e)} />
      <input type="text" placeholder="Author" value={author} onChange={(e) => handleAuthorInput(e)} />
      <select value={category} onChange={(e) => handleGenreChange(e)}>
        <option value="">Select Category</option>
        <option value="Action">Action</option>
        <option value="Economy">Economy</option>
        <option value="Economy">Sport</option>
        <option value="Science Fiction">Science Fiction</option>
      </select>
      <button
        type="button"
        disabled={adding}
        onClick={async () => {
          if (title === '') {
            setMessage('Please Enter Book Name.');
            return false;
          } if (author === '') {
            setMessage('Please Enter Author.');
            return false;
          } if (category === '') {
            setMessage('Please select category.');
            return false;
          }
          setMessage('');

          const itemId = books.length === 0 ? 1 : 1 + parseInt(books[books.length - 1].item_id, 10);
          setAdding(true);
          const book = {
            item_id: itemId.toString(), title, author, category,
          };
          await dispatch(addBook(book));
          resetForm();
          return null;
        }}
      >
        {adding ? 'ADDING... ' : 'ADD BOOK'}

      </button>
      <p className="message">{message}</p>
    </form>
  );
}

export default Form;
