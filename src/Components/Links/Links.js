import { Link } from 'react-router-dom';
import './Links.css';
import { FaRegUser } from 'react-icons/fa';

const MyLinks = () => (
  <>
    <div className="navContainer">
      <ul className="link-holder">
        <li className="links store"><Link to="/" style={{ textDecoration: 'none' }}>Bookstore CMS</Link></li>
        <li className="links"><Link to="/">BOOKS</Link></li>
        <li className="links Cate"><Link to="/category">CATEGORIES</Link></li>
      </ul>
      <div className="oval">
        <FaRegUser style={{ color: '#0290ff' }} />
      </div>
    </div>
  </>
);

export default MyLinks;
