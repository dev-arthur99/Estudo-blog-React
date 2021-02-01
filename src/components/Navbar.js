import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <h1>O Blog</h1>
        <div className="links">
          <Link to="/">Início</Link>
          <Link to="/create">Novo Post</Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
