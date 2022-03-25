import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Bookstore CMS</h1>
    <nav>
      <ul>
        <li><Link to="/">Books</Link></li>
        <li><Link to="/Categories">Categories</Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;
