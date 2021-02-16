import React from "react";
import { Link } from "gatsby";
import "../css/Navbar.css";

function Navbar(props: string) {
  return (
    <div className='navbar'>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <Link to='/portfolio'>Portfolio</Link>
      <Link to='/contact'>Contact</Link>
    </div>
  );
}

export default Navbar;
