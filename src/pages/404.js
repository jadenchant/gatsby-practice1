import React from "react";
import Navbar from "../components/Navbar";
import "../css/errcode.css";

export default function NotFoundPage() {
  return (
    <div className='404'>
      <Navbar />
      <h1>Error Code: 404</h1>
      <h2>Page Not Found</h2>
    </div>
  );
}
