import React from "react";
import { Link } from "gatsby";
import "../css/Navbar.module.css";

function Navbar(props: string) {
  return (
    <div className='main'>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <Link to='/projects'>Projects</Link>
    </div>
  );
}

export default Navbar;
