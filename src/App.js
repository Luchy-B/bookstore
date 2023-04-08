import { Routes, Route } from 'react-router-dom';
import './Components/Style/Style.css';
import Categories from './Components/Categories/Categories';
import BookList from './Components/Boolist/BookList';
import MyLinks from './Components/Links/Links';

const TodoApp = () => (
  <>
    <MyLinks />
    <Routes>
      <Route path="/" element={<BookList />} />
      <Route path="/category" element={<Categories />} />
    </Routes>
  </>
);

export default TodoApp;
