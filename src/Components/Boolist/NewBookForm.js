import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { postBook } from '../../redux/books/booksSlice';

const NewBookForm = () => {
  const initialInputs = {
    title: '',
    author: '',
    category: '',
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
    dispatch(postBook(book));
    setInputs(initialInputs);
  };
  return (
    <form onSubmit={handleClick} className="form">
      <hr />
      <h3>Add New Book</h3>
      <div className="formInput">
        <input type="text" id="title" onChange={handleChange} name="title" value={input.title} placeholder="Book Title" />
        <br />
        <input type="text" id="name" onChange={handleChange} name="author" value={input.author} placeholder="Author" />
        <br />
        <select
          id="category"
          className="selectOption"
          name="category"
          value={input.category}
          onChange={handleChange}
          style={{ paddingRight: '5px' }}
        >
          <option value="" disabled selected hidden className="selectCat">--Category--</option>
          <option value="fiction">Fiction</option>
          <option value="non-fiction">Non-Fiction</option>
          <option value="mystery">Mystery</option>
          <option value="sci-fi">Science Fiction</option>
        </select>
        <br />
        <button type="submit" onClick={handleClick} className="btn">ADD BOOK</button>
      </div>
    </form>
  );
};

export default NewBookForm;
