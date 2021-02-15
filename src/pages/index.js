import React from "react";
import '../css/index.css';
import Navbar from '../components/Navbar.tsx';

export default function Home() {
  return (
    <div className='main'>
      <Navbar current='main'/>
      <h1>Hey</h1>
    </div>
  );
}
