import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/students/1">Student 1</Link></li>
        <li><Link to="/students/2">Student 2</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
