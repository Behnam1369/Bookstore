import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';

const Header = () => (
  <header>
    <nav>
      <ul>
        <li><NavLink to="/"><h1>Bookstore CMS</h1></NavLink></li>
        <li><NavLink className={(isActive) => `nav-link${!isActive ? ' unselected' : ''}`} to="/">Books</NavLink></li>
        <li><NavLink className={(isActive) => `nav-link${!isActive ? ' unselected' : ''}`} to="/Categories">Categories</NavLink></li>
        <li className="user"><FaUser /></li>
      </ul>
    </nav>
  </header>
);

export default Header;
