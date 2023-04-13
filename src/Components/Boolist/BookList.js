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
      <div>loader</div>
    );
  }
  if (error) return <h2>An error has occured</h2>;
  if (books.length === 0) return <h2>there are no books</h2>;

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
