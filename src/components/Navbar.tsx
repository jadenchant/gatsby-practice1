import React from "react"
import { Link }  from 'gatsby';
import navbarStyle from './container.module.css';

const Navbar = (props : string) => {
  return (
  <div className="navbar">
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <Link to='/projects'>Projects</Link>
  </div>
  );
}

export default Navbar;
