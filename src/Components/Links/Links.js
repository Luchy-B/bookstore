import { Link } from 'react-router-dom';
import './Links.css';

const MyLinks = () => (
  <>
    <ul className="link-holder">
      <li className="links store"><Link to="/" style={{ textDecoration: 'none' }}>Bookstore CMS</Link></li>
      <li className="links"><Link to="/">BOOKS</Link></li>
      <li className="links Cate"><Link to="/category">CATEGORIES</Link></li>
    </ul>
  </>
);

export default MyLinks;
