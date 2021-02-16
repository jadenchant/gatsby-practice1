import React from "react";
import Navbar from "../components/Navbar.tsx";
import "../css/index.css";

export default function Home() {
  return (
    <div className='home'>
      <Navbar current='home' />
    </div>
  );
}
