import React from "react";
import Navbar from "../components/Navbar.tsx";
import "../css/portfolio.css";

export default function Portfolio() {
  return (
    <div className='portfolio'>
      <Navbar current='portfolio' />
      <h1>Portfolio</h1>
    </div>
  );
}
