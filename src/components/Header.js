import React from 'react';
import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';

const Header = () => (
  <header>
    <nav>
      <ul>
        <li><Link to="/"><h1>Bookstore CMS</h1></Link></li>
        <li><Link to="/" className="active">Books</Link></li>
        <li><Link to="/Categories">Categories</Link></li>
        <li className="user"><FaUser /></li>
      </ul>
    </nav>
  </header>
);

export default Header;
