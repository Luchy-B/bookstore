import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../../redux/Books/booksSlice';

const NewBookForm = () => {
  const initialInputs = {
    title: '',
    author: '',
  };
  const [input, setInputs] = useState(initialInputs);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const handleClick = (e) => {
    e.preventDefault();
    const id = uuidv4();
    const book = { id, ...input };
    dispatch(addBook(book));
    setInputs(initialInputs);
  };
  return (
    <form onSubmit={handleClick}>
      <hr />
      <h3>Add New Book</h3>
      <div className="formInput">
        <input type="text" id="title" onChange={handleChange} name="title" value={input.title} placeholder="Book Title" />
        <br />
        <input type="text" id="name" onChange={handleChange} name="author" value={input.author} placeholder="Author" />
        <br />
        <button type="submit" onClick={handleClick}>ADD BOOK</button>
      </div>
    </form>
  );
};
export default NewBookForm;
