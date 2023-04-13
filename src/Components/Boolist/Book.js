import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../../redux/books/booksSlice';

const MyBook = ({ book }) => {
  const dispatch = useDispatch();
  return (
    <div className="eachBook" key={book.id}>
      <h2>{book.title}</h2>
      <p>
        By
        {book.author}
      </p>
      <button
        type="button"
        id="remove"
        className="remove-btn"
        onClick={() => {
          dispatch(deleteBook(book.id));
        }}
      >
        Remove
      </button>
    </div>
  );
};

MyBook.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.string,
  }).isRequired,
};

export default MyBook;
