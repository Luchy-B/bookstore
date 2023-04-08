import { Routes, Route } from 'react-router-dom';
import './Components/Style/Style.css';
import Categories from './Components/Categories/Categories';
import Book from './Components/Boolist/Book';
import MyLinks from './Components/Links/Links';

const TodoApp = () => (
  <>
    <MyLinks />
    <Routes>
      <Route path="/" element={<Book />} />
      <Route path="/category" element={<Categories />} />
    </Routes>
  </>
);

export default TodoApp;
