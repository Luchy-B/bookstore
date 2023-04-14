import '../Style/Style.css';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import NewBookForm from './NewBookForm';
import MyBook from './Book';
import { getBooks } from '../../redux/books/booksSlice';

const BookList = () => {
  const {
    books, isLoading, error, ifSuccess,
  } = useSelector((store) => store.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch, ifSuccess]);
  if (isLoading) {
    return (
      <div>Please wait, it is loading</div>
    );
  }
  if (error) return <h2>An error occured while getting books</h2>;

  return (
    <>
      <div className="container">
        {books.map((book) => (
          <MyBook key={book.id} book={book} />
        ))}
      </div>
      <NewBookForm />
    </>
  );
};

export default BookList;
