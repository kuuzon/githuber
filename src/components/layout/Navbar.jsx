import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithubAlt } from 'react-icons/fa';

const Navbar = ({ title }) => {
  return (
    <nav className="navbar bg-primary">
      <div className="brand-box vertical-align">
        <FaGithubAlt className="brand-logo"/>
        <span className="brand-title">{title}</span>
      </div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar