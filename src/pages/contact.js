import React, { useState } from "react";
import { navigate } from "gatsby";
import Navbar from "../components/Navbar";
import "../css/contact.css";

export default function Contact() {
  // Form State
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");

  // Missing State
  const [missingFname, setMissingFname] = useState("");
  const [missingLname, setMissingLname] = useState("");
  const [missingEmail, setMissingEmail] = useState("");
  const [incorrectEmail, setIncorrectEmail] = useState("");

  const handleInputChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    if (name === "fname") {
      setFname(value);
    } else if (name === "lname") {
      setLname(value);
    } else {
      setEmail(value);
    }
  };

  function handleSubmit(event) {
    event.preventDefault();
    const formError = checkValidInputs();

    if (!formError) {
      navigate("/form-submitted/");
    }
  }

  function checkValidInputs() {
    let missing = false;

    if (fname === "") {
      setMissingFname("Missing First Name");
      missing = true;
    } else {
      setMissingFname("");
    }
    if (lname === "") {
      setMissingLname("Missing Last Name");
      missing = true;
    } else {
      setMissingLname("");
    }
    if (email === "") {
      setMissingEmail("Missing Email Address");
      setIncorrectEmail('Missing "@" and "." in Email Address');
      missing = true;
    } else {
      setMissingEmail("");

      if (email.indexOf("@") === -1 && email.indexOf(".") === -1) {
        setIncorrectEmail('Missing "@" and "." in Email Address');
        missing = true;
      } else if (email.indexOf("@") === -1) {
        setIncorrectEmail('Missing "@" in Email Address');
        missing = true;
      } else if (email.indexOf(".") === -1) {
        setIncorrectEmail('Missing "." in Email Address');
        missing = true;
      }
    }

    return missing;
  }

  return (
    <div className='contact'>
      <Navbar />
      <h1>Contact</h1>

      <form>
        <label className='form-item'>
          <p className='form-item-name'>
            First Name <span className='required'>*</span>
          </p>
          <input
            name='fname'
            type='string'
            value={fname}
            onChange={handleInputChange}
            className='form-item-input'
          />
        </label>
        <label className='form-item'>
          <p className='form-item-name'>
            Last Name <span className='required'>*</span>
          </p>
          <input
            name='lname'
            type='string'
            value={lname}
            onChange={handleInputChange}
            className='form-item-input'
          />
        </label>
        <label className='form-item'>
          <p className='form-item-name'>
            Email: <span className='required'>*</span>
          </p>
          <input
            name='email'
            type='string'
            value={email}
            onChange={handleInputChange}
            className='form-item-input'
          />
        </label>
        <button onClick={handleSubmit} className='form-submit'>
          Next
        </button>
      </form>

      <div className='input-error'>
        <ul>
          <li>{missingFname}</li>
          <li>{missingLname}</li>
          <li>{missingEmail}</li>
          <li>{incorrectEmail}</li>
        </ul>
      </div>

      <h1>{fname}</h1>
      <h1>{lname}</h1>
      <h1>{email}</h1>
    </div>
  );
}
