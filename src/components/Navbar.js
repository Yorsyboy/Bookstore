import { Link } from 'react-router-dom';
import { ImUser } from 'react-icons/im';

const Navbar = () => (
  <nav className="navigation-bar">
    <h1 className="title">Bookstore CMS</h1>
    <ul className="navigation-links">
      <li className="active">
        <Link to="/">BOOKS</Link>
      </li>
      <li>
        <Link to="/categories">CATEGORIES</Link>
      </li>
    </ul>
    <ImUser />
  </nav>
);

export default Navbar;
