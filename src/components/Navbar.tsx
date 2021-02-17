import React from "react";
import { Link } from "gatsby";
import "../css/Navbar.css";

function Navbar(props: string) {
  return (
    <div className='navbar'>
      <Link to='/' activeClassName='current'>
        Home
      </Link>
      <Link to='/about' activeClassName='current'>
        About
      </Link>
      <Link to='/portfolio' activeClassName='current'>
        Portfolio
      </Link>
      <Link to='/contact' activeClassName='current'>
        Contact
      </Link>
    </div>
  );
}

export default Navbar;
