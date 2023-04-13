import '../Style/Style.css';
import React from 'react';
import { useSelector } from 'react-redux';
import NewBookForm from './NewBookForm';
import MyBook from './Book';

const BookList = () => {
  const { books } = useSelector((store) => store.books);
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
