import { Routes, Route } from 'react-router-dom';
import './Components/Style/Style.css';
import Categories from './Components/Categories/Categories';
import MyTodo from './Components/Todo/Todo';
import MyLinks from './Components/Links/Links';

const TodoApp = () => (
  <>
    <MyLinks />
    <Routes>
      <Route path="/" element={<MyTodo />} />
      <Route path="/category" element={<Categories />} />
    </Routes>
  </>
);

export default TodoApp;
