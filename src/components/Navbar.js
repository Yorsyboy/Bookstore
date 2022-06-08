import { Link } from 'react-router-dom';
import { ImUser } from 'react-icons/im';

const Navbar = () => (
  <nav className="navigation-bar">
    <div className="nav-item">
      <h1 className="title">Bookstore CMS</h1>
      <ul className="navigation-links">
        <li className="active">
          <Link to="/">BOOKS</Link>
        </li>
        <li>
          <Link to="/categories">CATEGORIES</Link>
        </li>
      </ul>
    </div>
    <ImUser />
  </nav>
);

export default Navbar;
