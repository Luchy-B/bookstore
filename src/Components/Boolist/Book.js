import '../Style/Book.css';
import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { deleteBook } from '../../redux/books/booksSlice';

const MyBook = ({ book }) => {
  const randomCap = Math.floor(Math.random() * 20) + 1;
  const progress = randomCap === 4 ? 20 : Math.floor(Math.random() * 81) + 20;
  const percentage = `${progress}%`;
  const dispatch = useDispatch();
  return (
    <div className="eachBook" key={book.id}>
      <div>
        <p className="category">{book.category}</p>
        <h2 className="title">{book.title}</h2>
        <p className="author">{book.author}</p>
        <div className="actionsContainer">
          <button type="button">Comments</button>
          <hr />
          <button
            type="button"
            id="remove"
            className="remove-btn rmv"
            onClick={() => {
              dispatch(deleteBook(book.id));
            }}
          >
            Remove
          </button>
          <hr />
          <button type="button">Edit</button>
        </div>
      </div>

      <div className="percentageContainer">
        <div strokeWidth={20} className="progress" style={{ width: 70, height: 70 }}>
          <CircularProgressbar className="progress-bar" value={percentage} />
        </div>
        <div className="percentage">
          <h3>{percentage}</h3>
          <p>
            Completed
          </p>
        </div>
      </div>
      <div className="eachBookHr" />

      <div className="updateContainer">
        <div>
          <h5>CURRENT CHAPTER</h5>
          <p>{`Chapter ${randomCap}`}</p>
          <button type="button" className="btn">UPDATE PROGRESS</button>
        </div>
      </div>
    </div>
  );
};

MyBook.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.string,
    category: PropTypes.string,
  }).isRequired,
};

export default MyBook;
