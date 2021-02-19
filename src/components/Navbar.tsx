import React from "react";
import { Link } from "gatsby";
import "../css/Navbar.css";

function Navbar() {
  return (
    <div className='navbar'>
      <Link to='/' draggable='false' className='item' activeClassName='current'>
        Home
      </Link>
      <Link
        to='/about'
        draggable='false'
        className='item'
        activeClassName='current'
      >
        About
      </Link>
      <Link
        to='/portfolio/'
        draggable='false'
        className='item'
        activeClassName='current'
      >
        Portfolio
      </Link>
      <Link
        to='/contact/'
        draggable='false'
        className='item'
        activeClassName='current'
      >
        Contact
      </Link>
    </div>
  );
}

export default Navbar;
