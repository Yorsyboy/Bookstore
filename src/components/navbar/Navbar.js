import React from 'react';
import { Link } from 'react-router-dom';
import { ImUser } from 'react-icons/im';
import './navbar.css';

function Navbar() {
  return (
    <nav>
      <div className="navbar">
        <h1 id="logo">
          Bookstore CMS
        </h1>
        <Link to="/">Books</Link>
        <Link to="/categories">Categories</Link>
      </div>

      <ImUser />
    </nav>
  );
}

export default Navbar;
