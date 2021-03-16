import React from "react";
// import { navigate } from "gatsby";
import Navbar from "../components/Navbar";
import "../css/contact.css";

export default function Form_Submitted() {
  return (
    <div className='form-submitted'>
      <Navbar />
      <div className='next-page'>
        <h1>Thank you!</h1>
      </div>
    </div>
  );
}
