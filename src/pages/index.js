import React from "react";
import Navbar from "../components/Navbar.tsx";
import "../css/index.css";

export default function Home() {
  return (
    <div className='main'>
      <Navbar current='main' />
      <h1>Hey</h1>
    </div>
  );
}
